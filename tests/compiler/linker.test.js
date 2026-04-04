import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { rebuildIndex } from '../../src/compiler/linker.js';

describe('rebuildIndex', () => {
  let topicPath;

  beforeEach(() => {
    topicPath = join(tmpdir(), `kb-test-linker-${Date.now()}`);
    mkdirSync(join(topicPath, 'articles'), { recursive: true });
    mkdirSync(join(topicPath, 'index'), { recursive: true });
  });

  afterEach(() => {
    rmSync(topicPath, { recursive: true, force: true });
  });

  it('rebuilds _master.md with article titles from frontmatter', () => {
    writeFileSync(
      join(topicPath, 'articles', 'neural-networks.md'),
      '---\ntitle: Neural Networks\ntags: [ml, deep-learning]\n---\n\n# Neural Networks\n...',
      'utf-8',
    );
    writeFileSync(
      join(topicPath, 'articles', 'gradient-descent.md'),
      '---\ntitle: Gradient Descent\ntags: [optimization]\n---\n\n# Gradient Descent\n...',
      'utf-8',
    );

    rebuildIndex(topicPath, [], []);

    const master = readFileSync(join(topicPath, 'index', '_master.md'), 'utf-8');
    assert.ok(master.includes('[[gradient-descent|Gradient Descent]]'));
    assert.ok(master.includes('[[neural-networks|Neural Networks]]'));
  });

  it('rebuilds _sources.md with raw file paths and summaries', () => {
    const summaries = [
      { path: 'raw/articles/intro.md', summary: 'Introduction to the topic.' },
      { path: 'raw/papers/survey.md', summary: 'A comprehensive survey.' },
    ];

    rebuildIndex(topicPath, summaries, []);

    const sources = readFileSync(join(topicPath, 'index', '_sources.md'), 'utf-8');
    assert.ok(sources.includes('- raw/articles/intro.md'));
    assert.ok(sources.includes('  Introduction to the topic.'));
    assert.ok(sources.includes('- raw/papers/survey.md'));
    assert.ok(sources.includes('  A comprehensive survey.'));
  });

  it('rebuilds _concepts.md with concept entries', () => {
    const concepts = [
      { name: 'neural networks', parent: null, description: 'Computing systems inspired by biological neural networks.' },
      { name: 'backpropagation', parent: 'neural networks', description: 'Algorithm for training neural networks.' },
    ];

    rebuildIndex(topicPath, [], concepts);

    const conceptsMd = readFileSync(join(topicPath, 'index', '_concepts.md'), 'utf-8');
    assert.ok(conceptsMd.includes('[[neural-networks|neural networks]]'));
    assert.ok(conceptsMd.includes('[[backpropagation|backpropagation]]'));
    assert.ok(conceptsMd.includes('(parent: neural networks)'));
  });

  it('rebuilds _stats.md with correct counts', () => {
    writeFileSync(
      join(topicPath, 'articles', 'test.md'),
      '---\ntitle: Test\n---\n\nContent',
      'utf-8',
    );

    const summaries = [{ path: 'raw/articles/a.md', summary: 'Summary' }];
    const concepts = [{ name: 'test', parent: null, description: 'A test concept.' }];

    rebuildIndex(topicPath, summaries, concepts);

    const stats = readFileSync(join(topicPath, 'index', '_stats.md'), 'utf-8');
    assert.ok(stats.includes('Articles: 1'));
    assert.ok(stats.includes('Sources: 1'));
    assert.ok(stats.includes('Concepts: 1'));
    assert.ok(stats.includes('Last compiled:'));
  });
});
