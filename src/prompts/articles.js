/**
 * Prompt for generating a concept article in Obsidian-flavored markdown.
 *
 * @param {{ name: string, parent?: string, description?: string }} concept - The concept to write about
 * @param {Array<{ path: string, summary: string }>} sources - Relevant source summaries
 * @param {string[]} existingArticles - Names of other articles (for backlinks)
 * @returns {string} Prompt string
 */
export function articlePrompt(concept, sources, existingArticles) {
  const sourceBlock = sources
    .map((s, i) => `[${i + 1}] ${s.path}\n${s.summary}`)
    .join('\n\n');

  const recentArticles = existingArticles.slice(-25);
  const backlinkList = recentArticles.length
    ? recentArticles.join(', ')
    : '(none yet)';
  const backlinkNote = existingArticles.length > recentArticles.length
    ? 'Only use the articles listed below for backlinks; the list is intentionally truncated.'
    : 'Use the articles listed below for backlinks where relevant.';

  return `You are a technical writer for an Obsidian knowledge vault. Write the body of a concise, grounded article about the concept "${concept.name}".

Concept description: ${concept.description || 'N/A'}
Parent concept: ${concept.parent || 'none'}

Relevant sources:
${sourceBlock}

Other articles in the vault (use [[slug|title]] backlinks where relevant):
${backlinkList}

${backlinkNote}

Write only markdown body content. Do NOT include YAML frontmatter, a title line, a Sources section, or code fences around the whole article.

Use this structure:
## Overview
## Key Details
## Related Concepts

Rules:
- Ground every substantive claim in the provided sources.
- Prefer short paragraphs and clean bullets.
- Use only the provided existing article slugs for backlinks, and only when the link is actually relevant.
- If a related concept is uncertain, omit it rather than guessing.
- Do not invent citations, bibliography entries, or extra sections.
- Keep the article tightly focused on the concept itself, not on book metadata or source provenance.`;
}
