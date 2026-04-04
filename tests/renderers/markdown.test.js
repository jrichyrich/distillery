import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { renderMarkdown, slugify } from '../../src/renderers/markdown.js';

describe('slugify', () => {
  it('lowercases and replaces non-alphanumeric with hyphens', () => {
    assert.equal(slugify('What is Machine Learning?'), 'what-is-machine-learning');
  });

  it('trims leading and trailing hyphens', () => {
    assert.equal(slugify('--hello world--'), 'hello-world');
  });

  it('truncates to 60 characters', () => {
    const long = 'a'.repeat(100);
    assert.ok(slugify(long).length <= 60);
  });
});

describe('renderMarkdown', () => {
  let tmp;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), 'kb-md-test-'));
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it('saves content to articles/ with slugified filename', () => {
    const content = '# Test Article\n\nSome content here.';
    const question = 'What is deep learning?';

    const result = renderMarkdown(content, question, tmp);

    assert.equal(result.format, 'markdown');
    assert.ok(result.path.endsWith('.md'));
    assert.ok(result.path.includes('articles'));
    assert.ok(existsSync(result.path));

    const saved = readFileSync(result.path, 'utf-8');
    assert.equal(saved, content);
  });

  it('creates articles directory if it does not exist', () => {
    const articlesDir = join(tmp, 'articles');
    assert.ok(!existsSync(articlesDir));

    renderMarkdown('test', 'question', tmp);

    assert.ok(existsSync(articlesDir));
  });
});
