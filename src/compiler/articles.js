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
    const sources = relevantSources.length > 0 ? relevantSources : summaries;

    const prompt = articlePrompt(
      concept,
      sources.map(s => ({ path: s.path, summary: s.summary })),
      existingArticles,
    );

    const response = await llmProvider.complete(prompt);

    const slug = slugify(concept.name);
    const filePath = join(articlesPath, `${slug}.md`);
    writeFileSync(filePath, response, 'utf-8');

    existingArticles.push(slug);
    results.push({ name: concept.name, path: `articles/${slug}.md` });
  }

  return results;
}
