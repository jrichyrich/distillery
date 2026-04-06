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
    // Remove incomplete trailing tag (no closing >)
    .replace(/<[^>]*$/, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    // Kindle/Amazon EPUBs use <div class="was-a-p"> for paragraphs
    .replace(/<div[^>]*class="was-a-p"[^>]*>/gi, '\n\n')
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

  // Build manifest id -> href map (attributes may appear in any order)
  const manifest = {};
  const itemRegex = /<item\s([^>]+)>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const attrs = match[1];
    const idMatch = attrs.match(/\bid="([^"]+)"/);
    const hrefMatch = attrs.match(/\bhref="([^"]+)"/);
    if (idMatch && hrefMatch) {
      manifest[idMatch[1]] = hrefMatch[1];
    }
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
  return chapters.filter((ch) => {
    const title = ch.title.trim();
    if (skipPatterns.test(title)) return false;
    // Skip purely numeric titles (page numbers, footnote refs, etc.)
    if (/^\d+$/.test(title)) return false;
    // Skip very short titles (1-2 chars)
    if (title.length < 3) return false;
    return true;
  });
}

/**
 * Parse the raw TOC NCX XML to extract anchor IDs (with fragment).
 * Returns [{ title, anchor }] where anchor is the fragment (e.g. "a:M0"), or null if no fragment.
 */
function parseTocNcxWithAnchors(ncxPath) {
  const xml = readFileSync(ncxPath, 'utf-8');
  const points = [];
  const navPointRegex = /<navPoint[^>]*>[\s\S]*?<text>([\s\S]*?)<\/text>[\s\S]*?<content\s+src="([^"]+)"[\s\S]*?<\/navPoint>/g;
  let match;
  while ((match = navPointRegex.exec(xml)) !== null) {
    const title = match[1].trim().replace(/\s+/g, ' ');  // normalize whitespace
    const src = match[2];
    const hashIdx = src.indexOf('#');
    const anchor = hashIdx !== -1 ? src.slice(hashIdx + 1) : null;
    points.push({ title, anchor });
  }
  return points;
}

/**
 * Split a single large HTML file into chapters using TOC anchor IDs.
 * Returns [{ title, text }] for substantive chapters.
 */
function splitSingleFileEpub(htmlPath, tocPoints) {
  const html = readFileSync(htmlPath, 'utf-8');
  const skipPatterns = /^(cover|title\s*page|copyright|dedication|also\s+by|praise|table\s+of\s+contents|contents|acknowledgment|about\s+the\s+author|index$|endnotes|notes$|bibliography|further\s+reading|notes$|resource\s+[0-9]|what'?s\s+next)/i;

  // Find positions of each anchor in the HTML
  const positions = [];
  for (const point of tocPoints) {
    if (!point.anchor) continue;
    // Match id="anchor" anywhere in the HTML
    const searchStr = `id="${point.anchor}"`;
    const pos = html.indexOf(searchStr);
    if (pos !== -1) {
      positions.push({ title: point.title, pos });
    }
  }

  if (positions.length === 0) return [];

  // Sort by position to ensure correct order
  positions.sort((a, b) => a.pos - b.pos);

  // Extract HTML slices between positions
  const chapters = [];
  for (let i = 0; i < positions.length; i++) {
    const title = positions[i].title;
    if (skipPatterns.test(title.trim())) continue;

    // Advance start past the closing `>` of the tag containing the anchor
    let start = positions[i].pos;
    const tagEnd = html.indexOf('>', start);
    if (tagEnd !== -1) start = tagEnd + 1;
    const end = i + 1 < positions.length ? positions[i + 1].pos : html.length;
    const slice = html.slice(start, end);
    const text = stripHtml(slice).trim();
    if (text.length > 200) {
      chapters.push({ title, text });
    }
  }

  return chapters;
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
  let chapters = filterChapters(allChapters);

  // Single-file EPUB fallback: all TOC entries point to one HTML file (e.g. Kindle/Amazon EPUBs)
  // Detect by checking if all TOC src base files are the same
  let singleFileChapters = null;
  if (chapters.length === 0) {
    const tocRaw = parseTocNcxWithAnchors(tocPath);
    const tocBaseFiles = [...new Set(
      tocRaw.filter(p => p.anchor).map(p => {
        // Get the base filename from the original toc.ncx src (before the #)
        return null; // will re-read from raw NCX below
      })
    )];
    // Re-parse toc.ncx raw to get base filenames
    const ncxXml = readFileSync(tocPath, 'utf-8');
    const srcMatches = [...ncxXml.matchAll(/<content\s+src="([^"]+)"/g)];
    const baseFiles = [...new Set(srcMatches.map(m => m[1].split('#')[0]))];
    const contentBaseFiles = baseFiles.filter(f => /\.x?html?$/i.test(f));

    if (contentBaseFiles.length === 1) {
      // All chapters in one HTML file
      const htmlPath = join(opfDir, contentBaseFiles[0]);
      if (existsSync(htmlPath)) {
        singleFileChapters = splitSingleFileEpub(htmlPath, tocRaw);
      }
    }
  }

  if (chapters.length === 0 && (!singleFileChapters || singleFileChapters.length === 0)) {
    throw new Error('No substantive chapters found in EPUB');
  }

  const title = bookTitle || basename(source, extname(source));
  const written = [];

  if (singleFileChapters && singleFileChapters.length > 0) {
    // Write single-file EPUB chapters directly (already have text)
    for (let i = 0; i < singleFileChapters.length; i++) {
      const chapter = singleFileChapters[i];
      const chapterNum = String(i).padStart(2, '0');
      const chapterSlug = slugify(chapter.title);
      const filename = `ch${chapterNum}-${chapterSlug}.md`;

      const frontmatter = buildFrontmatter({
        title: chapter.title,
        source: title,
        type: 'article',
      });

      const outputPath = join(articlesDir, filename);
      writeFileSync(outputPath, frontmatter + '\n' + chapter.text, 'utf-8');
      written.push({ path: outputPath, title: chapter.title });
      console.log(`  Chapter ${chapterNum}: ${chapter.title}`);
    }
  } else {
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
  }

  // Cleanup temp dir
  try {
    rmSync(tempDir, { recursive: true, force: true });
  } catch {
    // non-fatal
  }

  return { path: articlesDir, type: 'epub', title, chapters: written.length };
}
