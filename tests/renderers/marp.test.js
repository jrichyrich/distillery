import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { renderMarp } from '../../src/renderers/marp.js';

describe('renderMarp', () => {
  let tmp;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), 'kb-marp-test-'));
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it('saves Marp deck to visuals/slides/ with marp frontmatter', () => {
    const content = '---\ntitle: Test Deck\n---\n\n# Slide 1\n\n---\n\n# Slide 2';
    const question = 'How does backpropagation work?';

    const result = renderMarp(content, question, tmp);

    assert.equal(result.format, 'marp');
    assert.ok(result.path.includes(join('visuals', 'slides')));
    assert.ok(result.path.endsWith('.md'));
    assert.ok(existsSync(result.path));

    const saved = readFileSync(result.path, 'utf-8');
    assert.ok(saved.includes('marp: true'), 'should contain marp: true frontmatter');
    assert.ok(saved.includes('title: Test Deck'), 'should preserve existing frontmatter');
  });

  it('adds frontmatter if none present', () => {
    const content = '# Slide 1\n\n---\n\n# Slide 2';
    const result = renderMarp(content, 'test slides', tmp);

    const saved = readFileSync(result.path, 'utf-8');
    assert.ok(saved.startsWith('---\nmarp: true\n---'));
  });

  it('does not duplicate marp: true if already present', () => {
    const content = '---\nmarp: true\ntitle: Existing\n---\n\n# Slide 1';
    const result = renderMarp(content, 'existing marp', tmp);

    const saved = readFileSync(result.path, 'utf-8');
    const matches = saved.match(/marp: true/g);
    assert.equal(matches.length, 1, 'should have exactly one marp: true');
  });
});
