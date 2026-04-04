import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { summarizePrompt } from '../prompts/summarize.js';

/**
 * Parse a JSON response from the LLM, handling markdown code fences.
 *
 * @param {string} raw - Raw LLM response text
 * @returns {object} Parsed JSON
 */
function parseJSONResponse(raw) {
  let text = raw.trim();
  // Strip markdown code fences if present
  const fenceMatch = text.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```$/);
  if (fenceMatch) {
    text = fenceMatch[1].trim();
  }
  return JSON.parse(text);
}

/**
 * Summarize a set of new source files using an LLM.
 *
 * @param {string[]} newFiles       - Relative paths (e.g. "raw/articles/foo.md")
 * @param {string}   topicPath      - Absolute path to the topic directory
 * @param {import('../llm/provider.js').LLMProvider} llmProvider
 * @returns {Promise<Array<{ path: string, fullPath: string, summary: string, concepts: string[], tags: string[] }>>}
 */
export async function summarizeSources(newFiles, topicPath, llmProvider) {
  const results = [];

  for (const filePath of newFiles) {
    const fullPath = join(topicPath, filePath);
    const content = readFileSync(fullPath, 'utf-8');
    const prompt = summarizePrompt(content, filePath);

    const response = await llmProvider.complete(prompt);
    const parsed = parseJSONResponse(response);

    results.push({
      path: filePath,
      fullPath,
      summary: parsed.summary,
      concepts: parsed.concepts || [],
      tags: parsed.tags || [],
    });
  }

  return results;
}
