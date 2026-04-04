import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { slugify } from './markdown.js';

/**
 * Strip markdown code fences from content and parse as JSON.
 */
function parseCanvasJSON(content) {
  let cleaned = content.trim();

  // Strip leading ```json or ``` and trailing ```
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '');
  }

  return JSON.parse(cleaned);
}

/**
 * Render Obsidian .canvas JSON to the topic's visuals/canvas directory.
 *
 * @param {string} content - JSON string (possibly wrapped in code fences)
 * @param {string} question - Original question (used to derive filename)
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {{ path: string, format: string }}
 */
export function renderCanvas(content, question, topicPath) {
  const slug = slugify(question);
  const dir = join(topicPath, 'visuals', 'canvas');
  mkdirSync(dir, { recursive: true });

  const parsed = parseCanvasJSON(content);
  const filePath = join(dir, `${slug}.canvas`);
  writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf-8');

  return { path: filePath, format: 'canvas' };
}
