import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { detectChanges } from '../../src/compiler/diff.js';

describe('detectChanges', () => {
  let topicPath;

  beforeEach(() => {
    topicPath = join(tmpdir(), `kb-test-diff-${Date.now()}`);
    mkdirSync(join(topicPath, 'raw', 'articles'), { recursive: true });
    mkdirSync(join(topicPath, 'raw', 'papers'), { recursive: true });
    mkdirSync(join(topicPath, 'index'), { recursive: true });
    writeFileSync(join(topicPath, 'index', '_sources.md'), '', 'utf-8');
  });

  afterEach(() => {
    rmSync(topicPath, { recursive: true, force: true });
  });

  it('detects all files as new when _sources.md is empty', async () => {
    writeFileSync(join(topicPath, 'raw', 'articles', 'a.md'), '# A', 'utf-8');
    writeFileSync(join(topicPath, 'raw', 'papers', 'b.md'), '# B', 'utf-8');

    const result = await detectChanges(topicPath);

    assert.equal(result.allFiles.length, 2);
    assert.equal(result.newFiles.length, 2);
    assert.ok(result.newFiles.some(f => f.includes('a.md')));
    assert.ok(result.newFiles.some(f => f.includes('b.md')));
    assert.deepEqual(result.changedFiles, []);
  });

  it('only detects new files when some are already registered', async () => {
    writeFileSync(join(topicPath, 'raw', 'articles', 'a.md'), '# A', 'utf-8');
    writeFileSync(join(topicPath, 'raw', 'articles', 'b.md'), '# B', 'utf-8');
    writeFileSync(join(topicPath, 'raw', 'papers', 'c.md'), '# C', 'utf-8');

    // Register a.md in _sources.md
    writeFileSync(
      join(topicPath, 'index', '_sources.md'),
      '# Sources\n\n- raw/articles/a.md\n  Summary of A\n',
      'utf-8',
    );

    const result = await detectChanges(topicPath);

    assert.equal(result.allFiles.length, 3);
    assert.equal(result.newFiles.length, 2);
    assert.ok(result.newFiles.some(f => f.includes('b.md')));
    assert.ok(result.newFiles.some(f => f.includes('c.md')));
    assert.ok(!result.newFiles.some(f => f === 'raw/articles/a.md'));
  });
});
