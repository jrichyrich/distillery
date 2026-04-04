/**
 * Prompt for summarizing a raw source file.
 *
 * @param {string} sourceContent - Full text of the source document
 * @param {string} sourcePath   - Relative path inside the topic (e.g. raw/articles/foo.md)
 * @returns {string} Prompt string
 */
export function summarizePrompt(sourceContent, sourcePath) {
  return `You are a knowledge-base curator. Summarize the following source document and extract its key concepts.

Source path: ${sourcePath}

<document>
${sourceContent}
</document>

Respond with ONLY valid JSON (no markdown fences, no commentary) in this exact shape:

{
  "summary": "A concise 2-4 sentence summary of the document's main points.",
  "concepts": ["concept1", "concept2"],
  "tags": ["tag1", "tag2"]
}

Rules:
- "summary" should capture the document's core contribution or argument.
- "concepts" should list the key technical or domain concepts (3-10 items). Use lowercase, noun phrases.
- "tags" should list broad category tags useful for cross-referencing (2-5 items). Use lowercase.`;
}
