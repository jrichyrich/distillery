import { writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

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
 * Ingest an image file into the knowledge base.
 *
 * @param {string} source - local file path to image
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'image', title: string}>}
 */
export async function ingestImage(source, rawDir) {
  const imagesDir = join(rawDir, 'images');
  if (!existsSync(imagesDir)) {
    mkdirSync(imagesDir, { recursive: true });
  }

  const filename = basename(source);
  const nameNoExt = basename(source, extname(source));
  const title = nameNoExt;

  // Copy original image
  copyFileSync(source, join(imagesDir, filename));

  const slug = slugify(title);
  const frontmatter = buildFrontmatter({ title, source, type: 'image' });
  const outputPath = join(imagesDir, `${slug}.md`);

  writeFileSync(outputPath, frontmatter + '\n' + `![[${filename}]]` + '\n', 'utf-8');

  return { path: outputPath, type: 'image', title };
}
