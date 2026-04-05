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

  return `You are a technical writer for an Obsidian knowledge vault. Write a comprehensive article about the concept "${concept.name}".

Concept description: ${concept.description || 'N/A'}
Parent concept: ${concept.parent || 'none'}

Relevant sources:
${sourceBlock}

Other articles in the vault (use [[slug|title]] backlinks where relevant):
${backlinkList}

${backlinkNote}

Write the article in Obsidian-flavored Markdown. Include:

1. YAML frontmatter with title, tags (as a YAML list, one per line with "  - " prefix, NOT comma-separated), parent, and date fields.
2. A clear definition / overview section.
3. Key details drawn from the sources (cite as [1], [2], etc.).
4. Where appropriate, a Mermaid diagram illustrating relationships or processes.
5. Backlinks to related articles using [[slug|title]] syntax.
6. A "Sources" section at the end listing the source paths.

Do NOT wrap the output in a code block. Output the raw markdown directly.`;
}
