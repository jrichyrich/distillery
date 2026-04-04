import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

/**
 * Create a URL-safe slug from a question string.
 * Lowercase, alphanumeric + hyphens only, max 60 chars.
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

/**
 * Render markdown content to the topic's articles directory.
 *
 * @param {string} content - Markdown content to save
 * @param {string} question - Original question (used to derive filename)
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {{ path: string, format: string }}
 */
export function renderMarkdown(content, question, topicPath) {
  const slug = slugify(question);
  const dir = join(topicPath, 'articles');
  mkdirSync(dir, { recursive: true });

  const filePath = join(dir, `${slug}.md`);
  writeFileSync(filePath, content, 'utf-8');

  return { path: filePath, format: 'markdown' };
}
