import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { vaultRoot, topicDir, rawDir, articlesDir, indexDir, visualsDir, metaPath } from '../src/paths.js';

describe('paths', () => {
  it('vaultRoot returns the iCloud Obsidian vault path', () => {
    const result = vaultRoot();
    assert.ok(result.endsWith('/distillery-vault'));
  });

  it('topicDir returns vault/<topic>', () => {
    const result = topicDir('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research'));
  });

  it('rawDir returns topic/raw', () => {
    const result = rawDir('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research/raw'));
  });

  it('articlesDir returns topic/articles', () => {
    const result = articlesDir('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research/articles'));
  });

  it('indexDir returns topic/index', () => {
    const result = indexDir('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research/index'));
  });

  it('visualsDir returns topic/visuals', () => {
    const result = visualsDir('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research/visuals'));
  });

  it('metaPath returns topic/kb.meta.json', () => {
    const result = metaPath('ai-research');
    assert.ok(result.endsWith('/distillery-vault/ai-research/kb.meta.json'));
  });
});
