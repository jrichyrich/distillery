import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { queryPrompt } from '../../src/prompts/query.js';

describe('queryPrompt', () => {
  const indexContent = '## Concepts\n- topology\n- clustering';
  const articles = [{ name: 'article-a.md', content: 'concepts and relationships' }];

  it('guides canvas output toward concept maps', () => {
    const prompt = queryPrompt('map the ideas', indexContent, articles, 'canvas');

    assert.match(prompt, /Obsidian \.canvas JSON structure/);
    assert.match(prompt, /concept map/i);
    assert.match(prompt, /short node labels/i);
    assert.match(prompt, /explicit edge labels/i);
  });

  it('guides chart output toward grounded quantitative trends', () => {
    const prompt = queryPrompt('show the trend', indexContent, articles, 'chart');

    assert.match(prompt, /Python matplotlib script/);
    assert.match(prompt, /quantitative comparisons/i);
    assert.match(prompt, /time-series trends/i);
    assert.match(prompt, /do not invent numbers/i);
  });

  it('guides slides output toward narrative summaries', () => {
    const prompt = queryPrompt('summarize the topic', indexContent, articles, 'slides');

    assert.match(prompt, /Marp slide deck/);
    assert.match(prompt, /narrative summaries/i);
    assert.match(prompt, /recaps/i);
    assert.match(prompt, /walkthroughs/i);
  });

  it('allows Mermaid diagrams in saved markdown when structure helps', () => {
    const prompt = queryPrompt('explain the pipeline', indexContent, articles, 'save');

    assert.match(prompt, /full Obsidian wiki article/);
    assert.match(prompt, /Mermaid diagram/i);
    assert.match(prompt, /process flow/i);
    assert.match(prompt, /decision tree/i);
  });
});
