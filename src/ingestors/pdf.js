import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

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
 * Ingest a PDF file into the knowledge base.
 *
 * @param {string} source - local file path to PDF
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'pdf', title: string}>}
 */
export async function ingestPdf(source, rawDir) {
  const papersDir = join(rawDir, 'papers');
  if (!existsSync(papersDir)) {
    mkdirSync(papersDir, { recursive: true });
  }

  const buf = readFileSync(source);
  const filename = basename(source);
  const nameNoExt = basename(source, extname(source));

  // Copy original PDF
  copyFileSync(source, join(papersDir, filename));

  let text;
  let title;
  try {
    const parsed = await pdfParse(buf);
    text = parsed.text || '[PDF could not be parsed]';
    title = parsed.info?.Title || nameNoExt;
  } catch {
    text = '[PDF could not be parsed]';
    title = nameNoExt;
  }

  const slug = slugify(title);
  const frontmatter = buildFrontmatter({ title, source, type: 'pdf' });
  const outputPath = join(papersDir, `${slug}.md`);

  writeFileSync(outputPath, frontmatter + '\n' + text, 'utf-8');

  return { path: outputPath, type: 'pdf', title };
}
