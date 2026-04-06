import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

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
 * Try extracting PDF using pymupdf (python3.11 -c fitz).
 * Returns { title, chapters: [{ title, text }] } on success, or null if pymupdf unavailable.
 *
 * If the PDF has a TOC with chapter-level entries, splits by chapter.
 * Otherwise returns a single entry with the full text.
 */
function tryPymupdf(source) {
  const script = `
import json, sys
try:
    import fitz
except ImportError:
    print(json.dumps({"error": "no_fitz"}))
    sys.exit(0)

doc = fitz.open(${JSON.stringify(source)})
toc = doc.get_toc()
meta_title = doc.metadata.get("title", "") if doc.metadata else ""

# Filter TOC to chapter-level entries (level 1 or 2, skip sub-sections)
chapter_entries = []
for level, title, page in toc:
    if level <= 2:
        chapter_entries.append({"title": title.strip(), "page": page})

# Skip patterns for front/back matter
import re
skip = re.compile(r'^(cover|title\\s*page|copyright|dedication|also\\s+by|praise|table\\s+of\\s+contents|contents$|acknowledgment|about\\s+the\\s+author|index$|end\\s*user|eula)', re.IGNORECASE)

if len(chapter_entries) >= 3:
    # Split by chapters
    chapters = []
    for i, entry in enumerate(chapter_entries):
        if skip.match(entry["title"]):
            continue
        start = entry["page"] - 1
        end = chapter_entries[i + 1]["page"] - 1 if i + 1 < len(chapter_entries) else len(doc)
        text = ""
        for p in range(start, min(end, len(doc))):
            text += doc[p].get_text()
        text = text.strip()
        if text:
            chapters.append({"title": entry["title"], "text": text})
    print(json.dumps({"title": meta_title, "chapters": chapters}))
else:
    # No useful TOC — extract all text as single entry
    text = ""
    for p in range(len(doc)):
        text += doc[p].get_text()
    text = text.strip()
    print(json.dumps({"title": meta_title, "chapters": [{"title": meta_title or "Full Text", "text": text}]}))
`;

  try {
    const result = execFileSync('python3.11', ['-c', script], {
      encoding: 'utf-8',
      maxBuffer: 100 * 1024 * 1024, // 100MB for large PDFs
      timeout: 120000,
    });
    const parsed = JSON.parse(result.trim());
    if (parsed.error) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Fallback: extract PDF using pdf-parse (the original method).
 * Returns { title, text } or null on failure.
 */
async function tryPdfParse(buf, nameNoExt) {
  try {
    const pdfParse = require('pdf-parse');
    const parsed = await pdfParse(buf);
    const text = parsed.text || '';
    const title = parsed.info?.Title || nameNoExt;
    if (!text || text === '[PDF could not be parsed]') return null;
    return { title, text };
  } catch {
    return null;
  }
}

/**
 * Ingest a PDF file into the knowledge base.
 *
 * Strategy:
 * 1. Try pymupdf (python3.11 + fitz) — handles DRM, splits by chapter if TOC exists
 * 2. Fall back to pdf-parse — single file extraction
 * 3. If both fail, write a placeholder
 *
 * @param {string} source - local file path to PDF
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'pdf', title: string, chapters?: number}>}
 */
export async function ingestPdf(source, rawDir) {
  const papersDir = join(rawDir, 'papers');
  const articlesDir = join(rawDir, 'articles');
  if (!existsSync(papersDir)) {
    mkdirSync(papersDir, { recursive: true });
  }

  const buf = readFileSync(source);
  const filename = basename(source);
  const nameNoExt = basename(source, extname(source));

  // Copy original PDF
  copyFileSync(source, join(papersDir, filename));

  // Strategy 1: Try pymupdf with chapter splitting
  const pymupdfResult = tryPymupdf(source);
  if (pymupdfResult && pymupdfResult.chapters && pymupdfResult.chapters.length > 0) {
    const title = pymupdfResult.title || nameNoExt;

    if (pymupdfResult.chapters.length > 1) {
      // Multi-chapter: write to articles/ like epub ingestor
      if (!existsSync(articlesDir)) {
        mkdirSync(articlesDir, { recursive: true });
      }

      for (let i = 0; i < pymupdfResult.chapters.length; i++) {
        const chapter = pymupdfResult.chapters[i];
        const chapterNum = String(i).padStart(2, '0');
        const chapterSlug = slugify(chapter.title);
        const chapterFilename = `ch${chapterNum}-${chapterSlug}.md`;

        const frontmatter = buildFrontmatter({
          title: chapter.title,
          source: title,
          type: 'article',
        });

        const outputPath = join(articlesDir, chapterFilename);
        writeFileSync(outputPath, frontmatter + '\n' + chapter.text, 'utf-8');
        console.log(`  Chapter ${chapterNum}: ${chapter.title}`);
      }

      return {
        path: articlesDir,
        type: 'pdf',
        title,
        chapters: pymupdfResult.chapters.length,
      };
    }

    // Single chapter (no TOC) — write as one file to papers/
    const text = pymupdfResult.chapters[0].text;
    const slug = slugify(title);
    const frontmatter = buildFrontmatter({ title, source, type: 'pdf' });
    const outputPath = join(papersDir, `${slug}.md`);
    writeFileSync(outputPath, frontmatter + '\n' + text, 'utf-8');
    return { path: outputPath, type: 'pdf', title };
  }

  // Strategy 2: Fall back to pdf-parse
  const parseResult = await tryPdfParse(buf, nameNoExt);
  if (parseResult) {
    const slug = slugify(parseResult.title);
    const frontmatter = buildFrontmatter({ title: parseResult.title, source, type: 'pdf' });
    const outputPath = join(papersDir, `${slug}.md`);
    writeFileSync(outputPath, frontmatter + '\n' + parseResult.text, 'utf-8');
    return { path: outputPath, type: 'pdf', title: parseResult.title };
  }

  // Strategy 3: Both failed
  const title = nameNoExt;
  const slug = slugify(title);
  const frontmatter = buildFrontmatter({ title, source, type: 'pdf' });
  const outputPath = join(papersDir, `${slug}.md`);
  writeFileSync(outputPath, frontmatter + '\n[PDF could not be parsed]', 'utf-8');
  return { path: outputPath, type: 'pdf', title };
}
