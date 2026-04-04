import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { slugify } from './markdown.js';

/**
 * Ensure the content has `marp: true` in its YAML frontmatter.
 * If frontmatter exists but lacks marp, inject it.
 * If no frontmatter exists, prepend it.
 */
function ensureMarpFrontmatter(content) {
  if (/^---\s*\n/.test(content)) {
    // Has frontmatter — check for marp
    if (/^---\s*\n[\s\S]*?marp:\s*true/m.test(content)) {
      return content; // already present
    }
    // Insert marp: true after the opening ---
    return content.replace(/^(---\s*\n)/, '$1marp: true\n');
  }
  // No frontmatter at all — prepend
  return `---\nmarp: true\n---\n\n${content}`;
}

/**
 * Render a Marp slide deck to the topic's visuals/slides directory.
 *
 * @param {string} content - Marp markdown content
 * @param {string} question - Original question (used to derive filename)
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {{ path: string, format: string }}
 */
export function renderMarp(content, question, topicPath) {
  const slug = slugify(question);
  const dir = join(topicPath, 'visuals', 'slides');
  mkdirSync(dir, { recursive: true });

  const finalContent = ensureMarpFrontmatter(content);
  const filePath = join(dir, `${slug}.md`);
  writeFileSync(filePath, finalContent, 'utf-8');

  return { path: filePath, format: 'marp' };
}
