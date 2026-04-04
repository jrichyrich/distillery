import { renderMarkdown } from './markdown.js';

/**
 * Render Mermaid content as a markdown article.
 * Mermaid diagrams are inline in markdown, so this delegates to renderMarkdown.
 *
 * @param {string} content - Markdown content with Mermaid blocks
 * @param {string} question - Original question (used to derive filename)
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {{ path: string, format: string }}
 */
export function renderMermaid(content, question, topicPath) {
  const result = renderMarkdown(content, question, topicPath);
  return { path: result.path, format: 'mermaid' };
}
