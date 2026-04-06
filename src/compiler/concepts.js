import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { conceptExtractionPrompt } from '../prompts/concepts.js';

/**
 * Parse existing concepts from index/_concepts.md.
 * Expects lines like: `- **name** — description` or `- [[slug|name]] — description`
 *
 * @param {string} conceptsPath - Absolute path to _concepts.md
 * @returns {Array<{ name: string, parent: string|null, description: string }>}
 */
function parseExistingConcepts(conceptsPath) {
  if (!existsSync(conceptsPath)) return [];

  const content = readFileSync(conceptsPath, 'utf-8');
  const concepts = [];
  const lines = content.split('\n');

  for (const line of lines) {
    // Match: - [[slug|name]] — description  OR  - **name** — description
    const wikiMatch = line.match(/^- \[\[[^\]|]+\|([^\]]+)\]\]\s*(?:—|--)\s*(.+)/);
    const boldMatch = line.match(/^- \*\*([^*]+)\*\*\s*(?:—|--)\s*(.+)/);

    const match = wikiMatch || boldMatch;
    if (match) {
      concepts.push({
        name: match[1].trim().toLowerCase(),
        parent: null,
        description: match[2].trim(),
      });
    }
  }

  return concepts;
}

/**
 * Extract and merge concepts from summaries using an LLM.
 *
 * @param {Array<{ concepts: string[] }>} summaries - Source summaries with concepts
 * @param {string} topicPath - Absolute path to the topic directory
 * @param {import('../llm/provider.js').LLMProvider} llmProvider
 * @returns {Promise<Array<{ name: string, parent: string|null, description: string }>>}
 */
export async function extractConcepts(summaries, topicPath, llmProvider) {
  const conceptsPath = join(topicPath, 'index', '_concepts.md');
  const existingConcepts = parseExistingConcepts(conceptsPath);

  // Collect all new concepts from summaries
  const newConcepts = [...new Set(summaries.flatMap(s => s.concepts))];

  if (newConcepts.length === 0 && existingConcepts.length === 0) {
    return [];
  }

  const prompt = conceptExtractionPrompt(newConcepts, existingConcepts);
  const response = await llmProvider.complete(prompt, { format: 'json' });

  // Parse JSON response, handling markdown code fences and trailing text
  let text = response.trim();
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) {
    text = fenceMatch[1].trim();
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (_) {
    const objMatch = text.match(/\{[\s\S]*\}/);
    if (objMatch) {
      parsed = JSON.parse(objMatch[0]);
    } else {
      throw new SyntaxError(`Could not extract JSON from LLM response: ${text.slice(0, 200)}`);
    }
  }
  return parsed.concepts || [];
}
