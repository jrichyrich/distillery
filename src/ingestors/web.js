import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
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
 * Strip HTML tags and decode common entities to get plain text.
 */
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Extract <title> from HTML.
 */
function extractHtmlTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : null;
}

/**
 * Extract title from Markdown H1 (first # heading).
 */
function extractMarkdownTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
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
 * Ingest a web article (URL) or local markdown file into the knowledge base.
 *
 * @param {string} source - URL or local file path
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'web', title: string}>}
 */
export async function ingestWeb(source, rawDir) {
  let content;
  let title;

  const isUrl = /^https?:\/\//i.test(source);

  if (isUrl) {
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
    }
    const html = await res.text();
    title = extractHtmlTitle(html) || 'Untitled';
    content = stripHtml(html);
  } else {
    // Local file
    content = readFileSync(source, 'utf-8');
    title = extractMarkdownTitle(content) || basename(source, extname(source));
  }

  const slug = slugify(title);
  const articlesPath = join(rawDir, 'articles');

  if (!existsSync(articlesPath)) {
    mkdirSync(articlesPath, { recursive: true });
  }

  const frontmatter = buildFrontmatter({ title, source, type: 'web' });
  const outputPath = join(articlesPath, `${slug}.md`);

  writeFileSync(outputPath, frontmatter + '\n' + content, 'utf-8');

  return { path: outputPath, type: 'web', title };
}
