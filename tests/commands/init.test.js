import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { initTopic } from '../../src/commands/init.js';

describe('initTopic', () => {
  let tmp;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), 'kb-init-test-'));
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it('creates the full directory structure', async () => {
    await initTopic('ml-basics', tmp);

    const base = join(tmp, 'ml-basics');
    // raw subdirs
    for (const sub of ['articles', 'papers', 'repos', 'images', 'transcripts', 'datasets']) {
      assert.ok(existsSync(join(base, 'raw', sub)), `raw/${sub} should exist`);
    }
    // articles dir
    assert.ok(existsSync(join(base, 'articles')), 'articles/ should exist');
    // index dir
    assert.ok(existsSync(join(base, 'index')), 'index/ should exist');
    // visuals subdirs
    for (const sub of ['charts', 'slides', 'canvas']) {
      assert.ok(existsSync(join(base, 'visuals', sub)), `visuals/${sub} should exist`);
    }
  });

  it('creates kb.meta.json with correct fields', async () => {
    await initTopic('ml-basics', tmp);

    const meta = JSON.parse(readFileSync(join(tmp, 'ml-basics', 'kb.meta.json'), 'utf-8'));
    assert.equal(meta.topic, 'ml-basics');
    assert.ok(meta.created, 'created should be set');
    assert.equal(meta.lastCompiled, null);
    assert.equal(meta.compileState, null);
    assert.deepEqual(meta.failedSources, []);
  });

  it('creates index files', async () => {
    await initTopic('ml-basics', tmp);

    const indexDir = join(tmp, 'ml-basics', 'index');
    for (const f of ['_master.md', '_sources.md', '_concepts.md', '_stats.md']) {
      assert.ok(existsSync(join(indexDir, f)), `index/${f} should exist`);
    }
  });

  it('creates .obsidian vault config', async () => {
    await initTopic('ml-basics', tmp);

    assert.ok(existsSync(join(tmp, '.obsidian')), '.obsidian/ should exist');
  });

  it('throws if topic already exists', async () => {
    await initTopic('ml-basics', tmp);

    await assert.rejects(
      () => initTopic('ml-basics', tmp),
      /already exists/i
    );
  });
});
