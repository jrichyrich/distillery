import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';

/**
 * Convert a title string to a URL-friendly slug.
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/**
 * Build YAML frontmatter string.
 */
function buildFrontmatter({ title, source, type }) {
  const ingested = new Date().toISOString();
  return [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${source}"`,
    `ingested: "${ingested}"`,
    `type: ${type}`,
    '---',
    '',
  ].join('\n');
}

/**
 * Strip HTML tags from text, preserving basic structure.
 */
function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<h([1-6])[^>]*>/gi, (_, level) => '#'.repeat(Number(level)) + ' ')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/^\s*-\s*$/gm, '')       // remove lone list markers
    .replace(/^\s+$/gm, '')           // remove whitespace-only lines
    .replace(/\t+/g, '')              // remove tabs
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Parse toc.ncx to get chapter navigation points.
 * Returns [{ title, src }] in document order.
 */
function parseTocNcx(ncxPath) {
  const xml = readFileSync(ncxPath, 'utf-8');
  const points = [];
  const navPointRegex = /<navPoint[^>]*>[\s\S]*?<text>([\s\S]*?)<\/text>[\s\S]*?<content\s+src="([^"]+)"[\s\S]*?<\/navPoint>/g;
  let match;
  while ((match = navPointRegex.exec(xml)) !== null) {
    const title = match[1].trim();
    const src = match[2].split('#')[0]; // strip fragment
    points.push({ title, src });
  }
  return points;
}

/**
 * Parse OPF content file to get the spine order of HTML files and book title.
 * Returns { bookTitle, spineFiles: string[] }
 */
function parseOpf(opfPath) {
  const xml = readFileSync(opfPath, 'utf-8');

  // Extract book title
  const titleMatch = xml.match(/<dc:title[^>]*>([\s\S]*?)<\/dc:title>/i);
  const bookTitle = titleMatch ? titleMatch[1].trim() : '';

  // Build manifest id -> href map
  const manifest = {};
  const itemRegex = /<item\s+[^>]*id="([^"]+)"[^>]*href="([^"]+)"[^>]*/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    manifest[match[1]] = match[2];
  }

  // Get spine order
  const spineFiles = [];
  const spineRegex = /<itemref\s+[^>]*idref="([^"]+)"/g;
  while ((match = spineRegex.exec(xml)) !== null) {
    const href = manifest[match[1]];
    if (href && /\.x?html?$/i.test(href)) {
      spineFiles.push(href);
    }
  }

  return { bookTitle, spineFiles };
}

/**
 * Determine which HTML files belong to each chapter based on TOC nav points and spine order.
 * Returns [{ title, files: string[] }]
 */
function mapChaptersToFiles(tocPoints, spineFiles) {
  const chapters = [];
  for (let i = 0; i < tocPoints.length; i++) {
    const tocSrc = tocPoints[i].src;
    const spineIdx = spineFiles.findIndex((f) => f === tocSrc || f.endsWith(tocSrc));
    if (spineIdx === -1) continue;

    let nextSpineIdx = spineFiles.length;
    for (let j = i + 1; j < tocPoints.length; j++) {
      const nextSrc = tocPoints[j].src;
      const idx = spineFiles.findIndex((f) => f === nextSrc || f.endsWith(nextSrc));
      if (idx !== -1) {
        nextSpineIdx = idx;
        break;
      }
    }

    const files = spineFiles.slice(spineIdx, nextSpineIdx);
    chapters.push({ title: tocPoints[i].title, files });
  }

  return chapters;
}

/**
 * Filter chapters to only substantive content (skip front/back matter).
 */
function filterChapters(chapters) {
  const skipPatterns = /^(cover|title\s*page|copyright|dedication|also\s+by|praise|table\s+of\s+contents|contents|acknowledgment|about\s+the\s+author|index$|endnotes|notes$|bibliography|further\s+reading)/i;
  return chapters.filter((ch) => !skipPatterns.test(ch.title.trim()));
}

/**
 * Recursively find a file by name in a directory tree.
 */
function findFile(dir, name) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === name) return join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(join(dir, entry.name), name);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Recursively find a file by extension in a directory tree.
 */
function findFileByExt(dir, ext) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(ext)) return join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFileByExt(join(dir, entry.name), ext);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Ingest an EPUB file into the knowledge base, splitting by chapter.
 *
 * @param {string} source - local file path to EPUB
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'epub', title: string, chapters: number}>}
 */
export async function ingestEpub(source, rawDir) {
  const articlesDir = join(rawDir, 'articles');
  if (!existsSync(articlesDir)) {
    mkdirSync(articlesDir, { recursive: true });
  }

  // Extract EPUB to temp directory
  const tempDir = join(tmpdir(), `epub-${Date.now()}`);
  mkdirSync(tempDir, { recursive: true });

  try {
    execFileSync('unzip', ['-o', '-q', source, '-d', tempDir]);
  } catch (err) {
    throw new Error(`Failed to unzip EPUB: ${err.message}`);
  }

  // Find OPF file via container.xml or fallback search
  let opfPath;
  const containerPath = join(tempDir, 'META-INF', 'container.xml');
  if (existsSync(containerPath)) {
    const container = readFileSync(containerPath, 'utf-8');
    const rootfileMatch = container.match(/full-path="([^"]+)"/);
    if (rootfileMatch) {
      opfPath = join(tempDir, rootfileMatch[1]);
    }
  }
  if (!opfPath || !existsSync(opfPath)) {
    opfPath = findFileByExt(tempDir, '.opf');
  }
  if (!opfPath) {
    throw new Error('Could not find OPF content file in EPUB');
  }

  const opfDir = join(opfPath, '..');
  const { bookTitle, spineFiles } = parseOpf(opfPath);

  // Parse TOC
  let tocPath = join(opfDir, 'toc.ncx');
  if (!existsSync(tocPath)) {
    tocPath = findFile(tempDir, 'toc.ncx');
  }
  if (!tocPath) {
    throw new Error('Could not find toc.ncx in EPUB');
  }

  const tocPoints = parseTocNcx(tocPath);
  const allChapters = mapChaptersToFiles(tocPoints, spineFiles);
  const chapters = filterChapters(allChapters);

  if (chapters.length === 0) {
    throw new Error('No substantive chapters found in EPUB');
  }

  const title = bookTitle || basename(source, extname(source));
  const written = [];

  for (let i = 0; i < chapters.length; i++) {
    const chapter = chapters[i];
    const chapterNum = String(i).padStart(2, '0');
    const chapterSlug = slugify(chapter.title);
    const filename = `ch${chapterNum}-${chapterSlug}.md`;

    // Read and combine HTML files for this chapter
    let combinedText = '';
    for (const htmlFile of chapter.files) {
      const htmlPath = join(opfDir, htmlFile);
      if (existsSync(htmlPath)) {
        const html = readFileSync(htmlPath, 'utf-8');
        combinedText += stripHtml(html) + '\n\n';
      }
    }

    combinedText = combinedText.trim();
    if (!combinedText) continue;

    const frontmatter = buildFrontmatter({
      title: chapter.title,
      source: title,
      type: 'article',
    });

    const outputPath = join(articlesDir, filename);
    writeFileSync(outputPath, frontmatter + '\n' + combinedText, 'utf-8');
    written.push({ path: outputPath, title: chapter.title });
    console.log(`  Chapter ${chapterNum}: ${chapter.title}`);
  }

  // Cleanup temp dir
  try {
    rmSync(tempDir, { recursive: true, force: true });
  } catch {
    // non-fatal
  }

  return { path: articlesDir, type: 'epub', title, chapters: written.length };
}
