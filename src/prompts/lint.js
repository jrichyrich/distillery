/**
 * Prompt for linting a knowledge base topic.
 *
 * @param {string} indexContent - Combined content of all index files
 * @param {string} articleSample - Combined content of sampled articles
 * @returns {string} The lint prompt
 */
export function lintPrompt(indexContent, articleSample) {
  return `You are a knowledge-base quality auditor. Analyze the following index files and article samples for issues.

Check for:
1. **Broken backlinks**: [[wikilinks]] that reference articles that don't appear to exist
2. **Missing tags**: Articles without proper tagging or categorization
3. **Inconsistent terminology**: The same concept referred to by different names
4. **Low confidence articles**: Articles that contain hedging language, unverified claims, or lack citations
5. **Orphan articles**: Articles not referenced by the index or other articles
6. **Missing sources**: Claims without source attribution
7. **Factual inconsistencies**: Contradictions between articles or within the same article

## Index Files
${indexContent}

## Article Samples
${articleSample}

Respond with ONLY valid JSON in this exact format (no markdown fences):
{
  "issues": [
    {
      "type": "broken-backlink | missing-tags | inconsistent-terminology | low-confidence | orphan | missing-sources | factual-inconsistency",
      "file": "filename or path where the issue was found",
      "description": "what the issue is",
      "suggestion": "how to fix it"
    }
  ],
  "summary": "A brief overall quality assessment"
}`;
}
