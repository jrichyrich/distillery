import { writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { articlePrompt } from '../prompts/articles.js';

/**
 * Convert a concept name to a filename-safe slug.
 *
 * @param {string} name
 * @returns {string}
 */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeYamlString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function buildFrontmatter(concept) {
  const today = new Date().toISOString().slice(0, 10);
  const tags = [slugify(concept.name)];
  if (concept.parent) {
    tags.push(slugify(concept.parent));
  }

  return [
    '---',
    `title: "${escapeYamlString(concept.name)}"`,
    `tags: [${tags.map((tag) => `"${escapeYamlString(tag)}"`).join(', ')}]`,
    `parent: "${escapeYamlString(concept.parent || '')}"`,
    `date: "${today}"`,
    '---',
    '',
  ].join('\n');
}

function stripOuterCodeFence(text) {
  const trimmed = text.trim();
  const fenceMatch = trimmed.match(/^```(?:markdown|md|text)?\s*\n([\s\S]*?)\n```$/i);
  if (fenceMatch) {
    return fenceMatch[1].trim();
  }
  return trimmed;
}

function stripLeadingFencedBlock(text) {
  const fenceMatch = text.match(/^```[^\n]*\n([\s\S]*?)\n```\n?/);
  if (!fenceMatch) {
    return text;
  }

  const inner = fenceMatch[1].trim();
  const looksLikeFrontmatter = inner.startsWith('---\n') || /^(\w+):/m.test(inner);
  if (looksLikeFrontmatter) {
    return text.slice(fenceMatch[0].length).trim();
  }

  return text;
}

function stripLeadingFrontmatter(text) {
  if (!text.startsWith('---\n')) {
    return text;
  }

  const frontmatterMatch = text.match(/^---\n[\s\S]*?\n---\n?/);
  if (!frontmatterMatch) {
    return text;
  }

  return text.slice(frontmatterMatch[0].length).trim();
}

function normalizeWikilinks(text, existingArticles) {
  const existing = new Set(existingArticles);

  return text.replace(/\[\[([^|\]]+?)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    const rawTarget = target.trim();
    const display = (label || rawTarget).trim();

    if (existing.has(rawTarget)) {
      return `[[${rawTarget}|${display}]]`;
    }

    const normalized = slugify(rawTarget);
    if (existing.has(normalized)) {
      return `[[${normalized}|${display}]]`;
    }

    return display;
  });
}

/**
 * Normalize raw LLM article output into clean Obsidian markdown.
 *
 * @param {string} response
 * @param {string[]} existingArticles
 * @returns {string}
 */
export function normalizeArticleMarkdown(response, existingArticles) {
  let text = stripOuterCodeFence(response);
  text = stripLeadingFencedBlock(text);
  text = stripLeadingFrontmatter(text);
  text = text.replace(/^[ \t]*```[a-zA-Z0-9_-]*\s*$/gm, '');
  text = text.replace(/^[ \t]*```\s*$/gm, '');
  text = text.replace(/^#\s+.*\n+/, '');
  text = text.replace(/^\s*---\s*$/gm, '');
  text = normalizeWikilinks(text, existingArticles);
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  return text;
}

/**
 * Generate concept articles using an LLM and write them to articles/.
 *
 * @param {Array<{ name: string, parent: string|null, description: string }>} concepts
 * @param {Array<{ path: string, summary: string, concepts: string[], tags: string[] }>} summaries
 * @param {string} topicPath - Absolute path to the topic directory
 * @param {import('../llm/provider.js').LLMProvider} llmProvider
 * @returns {Promise<Array<{ name: string, path: string }>>}
 */
export async function generateArticles(concepts, summaries, topicPath, llmProvider) {
  const articlesPath = join(topicPath, 'articles');
  if (!existsSync(articlesPath)) {
    mkdirSync(articlesPath, { recursive: true });
  }

  // Collect existing article names for backlinking
  const existingArticles = existsSync(articlesPath)
    ? readdirSync(articlesPath)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace(/\.md$/, ''))
    : [];

  const results = [];

  for (const concept of concepts) {
    // Find relevant sources for this concept
    const relevantSources = summaries.filter(s =>
      s.concepts.some(c => c.toLowerCase() === concept.name.toLowerCase())
    );

    // Fall back to all sources if none match directly
    const sources = (relevantSources.length > 0 ? relevantSources : summaries).slice(0, 5);

    const prompt = articlePrompt(
      concept,
      sources.map(s => ({ path: s.path, summary: s.summary })),
      existingArticles,
    );

    const response = await llmProvider.complete(prompt);
    const body = normalizeArticleMarkdown(response, existingArticles);
    const article = buildFrontmatter(concept) + body + '\n';

    const slug = slugify(concept.name);
    const filePath = join(articlesPath, `${slug}.md`);
    writeFileSync(filePath, article, 'utf-8');

    existingArticles.push(slug);
    results.push({ name: concept.name, path: `articles/${slug}.md` });
  }

  return results;
}
