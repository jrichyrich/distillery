import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, rmSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { ingestWeb } from '../../src/ingestors/web.js';

describe('ingestWeb', () => {
  let tempDir;

  beforeEach(() => {
    tempDir = join(tmpdir(), `kb-web-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('ingests a local .md file with H1 title', async () => {
    const mdPath = join(tempDir, 'input.md');
    writeFileSync(mdPath, '# My Test Article\n\nSome content here.\n');

    const result = await ingestWeb(mdPath, tempDir);

    assert.equal(result.type, 'web');
    assert.equal(result.title, 'My Test Article');
    assert.ok(result.path.endsWith('.md'));

    // Verify file was created in articles/
    const articlesDir = join(tempDir, 'articles');
    assert.ok(existsSync(articlesDir), 'articles/ directory should exist');
    assert.ok(existsSync(result.path), 'output file should exist');

    // Verify frontmatter
    const output = readFileSync(result.path, 'utf-8');
    assert.ok(output.startsWith('---\n'), 'should start with frontmatter');
    assert.ok(output.includes('title: "My Test Article"'), 'should contain title');
    assert.ok(output.includes('source: "' + mdPath + '"'), 'should contain source');
    assert.ok(output.includes('type: web'), 'should contain type');
    assert.ok(output.includes('ingested:'), 'should contain ingested date');

    // Verify original content is preserved after frontmatter
    assert.ok(output.includes('Some content here.'), 'should contain original content');
  });

  it('ingests a local .md file without H1 — uses filename as title', async () => {
    const mdPath = join(tempDir, 'my-notes.md');
    writeFileSync(mdPath, 'Just some plain text without a heading.\n');

    const result = await ingestWeb(mdPath, tempDir);

    assert.equal(result.title, 'my-notes');
    assert.equal(result.type, 'web');
  });

  it('creates articles/ subdirectory if it does not exist', async () => {
    const mdPath = join(tempDir, 'test.md');
    writeFileSync(mdPath, '# Hello\n\nWorld\n');

    const articlesDir = join(tempDir, 'articles');
    assert.ok(!existsSync(articlesDir), 'articles/ should not exist yet');

    await ingestWeb(mdPath, tempDir);

    assert.ok(existsSync(articlesDir), 'articles/ should be created');
  });

  it('generates a slugified filename', async () => {
    const mdPath = join(tempDir, 'test.md');
    writeFileSync(mdPath, '# A Complex Title: With Special Chars!\n\nBody.\n');

    const result = await ingestWeb(mdPath, tempDir);

    assert.ok(
      result.path.includes('a-complex-title-with-special-chars'),
      `Expected slugified path, got: ${result.path}`
    );
  });
});
