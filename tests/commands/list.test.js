import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { listTopics } from '../../src/commands/list.js';
import { initTopic } from '../../src/commands/init.js';

describe('listTopics', () => {
  let tmp;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), 'kb-list-test-'));
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it('returns empty array when vault has no topics', async () => {
    const result = await listTopics(tmp);
    assert.deepEqual(result, []);
  });

  it('returns correct stats for an initialized topic', async () => {
    await initTopic('ml-basics', tmp);

    // Add some fake source files
    writeFileSync(join(tmp, 'ml-basics', 'raw', 'articles', 'a1.md'), 'content');
    writeFileSync(join(tmp, 'ml-basics', 'raw', 'papers', 'p1.pdf'), 'content');

    // Add a fake article
    writeFileSync(join(tmp, 'ml-basics', 'articles', 'article1.md'), 'content');

    const result = await listTopics(tmp);
    assert.equal(result.length, 1);
    assert.equal(result[0].topic, 'ml-basics');
    assert.ok(result[0].created);
    assert.equal(result[0].lastCompiled, null);
    assert.equal(result[0].sourceCount, 2);
    assert.equal(result[0].articleCount, 1);
  });

  it('lists multiple topics', async () => {
    await initTopic('topic-a', tmp);
    await initTopic('topic-b', tmp);

    const result = await listTopics(tmp);
    assert.equal(result.length, 2);
    const names = result.map(r => r.topic).sort();
    assert.deepEqual(names, ['topic-a', 'topic-b']);
  });

  it('ignores directories without kb.meta.json', async () => {
    mkdirSync(join(tmp, 'random-dir'), { recursive: true });
    await initTopic('real-topic', tmp);

    const result = await listTopics(tmp);
    assert.equal(result.length, 1);
    assert.equal(result[0].topic, 'real-topic');
  });
});
