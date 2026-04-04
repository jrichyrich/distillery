/**
 * Prompt for extracting and merging concepts across sources.
 *
 * @param {string[]} newConcepts      - Concepts discovered from new sources
 * @param {Array<{name: string, parent?: string, description?: string}>} existingConcepts - Already-registered concepts
 * @returns {string} Prompt string
 */
export function conceptExtractionPrompt(newConcepts, existingConcepts) {
  const existingJSON = JSON.stringify(existingConcepts, null, 2);
  const newList = newConcepts.join(', ');

  return `You are a knowledge-base ontologist. Your job is to merge newly discovered concepts into an existing concept hierarchy, eliminating duplicates and identifying parent-child relationships.

Existing concepts:
${existingJSON}

Newly discovered concepts:
${newList}

Respond with ONLY valid JSON (no markdown fences, no commentary) in this exact shape:

{
  "concepts": [
    { "name": "concept name", "parent": "parent concept or null", "description": "one-sentence description" }
  ]
}

Rules:
- Merge duplicates and near-duplicates (e.g. "neural network" and "neural networks") into a single entry.
- Preserve all existing concepts unless they are clear duplicates of a new concept.
- Identify parent-child relationships where one concept is a specialization of another (set "parent" to the parent concept's name, or null if top-level).
- Use lowercase for all concept names.
- Every concept must have a brief description.`;
}
