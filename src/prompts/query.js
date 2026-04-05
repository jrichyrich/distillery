/**
 * Build a prompt for answering a question against a topic's knowledge base.
 *
 * @param {string} question - The user's question
 * @param {string} indexContent - Combined index content (_master.md + _concepts.md)
 * @param {Array<{ name: string, content: string }>} relevantArticles - Articles from the topic
 * @param {'terminal'|'save'|'slides'|'chart'|'canvas'} format - Desired output format
 * @returns {string} The assembled prompt
 */
export function queryPrompt(question, indexContent, relevantArticles, format) {
  const articlesBlock = relevantArticles
    .map((a, i) => `--- Article ${i + 1}: ${a.name} ---\n${a.content}`)
    .join('\n\n');

  const formatInstructions = {
    terminal: `Respond with a clear, well-structured Markdown answer suitable for terminal display.
Use headings, bullet points, and code blocks where appropriate.
Be concise but thorough.`,

    save: `Respond with a full Obsidian wiki article. Include:
- YAML frontmatter with title, tags, and date fields.
- Well-structured sections with ## headings.
- [[backlinks]] to related concepts mentioned in the index or articles.
- A "Sources" section at the end referencing the articles used.
- Include a Mermaid diagram when a process flow, decision tree, or dependency chain would clarify the answer.
Do NOT wrap the output in a code block. Output the raw markdown directly.`,

    slides: `Respond with a Marp slide deck. Requirements:
- Begin with YAML frontmatter containing \`marp: true\` and a title.
- Separate each slide with \`---\` on its own line.
- First slide should be a title slide.
- Use bullet points and headings for clarity.
- Keep each slide focused on one key point.
- Aim for 5-10 slides.
- Best for narrative summaries, recaps, and walkthroughs.
Do NOT wrap the output in a code block. Output the raw markdown directly.`,

    chart: `Respond with a Python matplotlib script that visualises the answer.
Requirements:
- The script will have CHART_OUTPUT_PATH set as a variable before your code runs.
- Use \`plt.savefig(CHART_OUTPUT_PATH, dpi=150, bbox_inches='tight')\` to save the chart.
- Do NOT call plt.show().
- Include clear axis labels, a title, and a legend if applicable.
- Use only matplotlib and standard library modules.
- Best for quantitative comparisons, counts, and time-series trends.
- Prefer charts grounded in the supplied articles; do not invent numbers.
Output ONLY the Python code, no markdown fences.`,

    canvas: `Respond with an Obsidian .canvas JSON structure. Requirements:
- Include a "nodes" array and an "edges" array.
- Each node needs: id, x, y, width, height, type ("text"), and text fields.
- Each edge needs: id, fromNode, toNode, and optionally a label.
- Lay out nodes in a readable arrangement.
- Use the content from the articles to create a concept map answering the question.
- Best for conceptual, exploratory, and relationship-focused topics.
- Use a compact concept map with short node labels and explicit edge labels.
Output ONLY valid JSON, no markdown fences.`,
  };

  return `You are a knowledgeable assistant for an Obsidian-based knowledge vault. Answer the following question using the provided index and articles as context.

Question: ${question}

=== Topic Index ===
${indexContent}

=== Relevant Articles ===
${articlesBlock}

=== Output Instructions ===
${formatInstructions[format] || formatInstructions.terminal}`;
}
