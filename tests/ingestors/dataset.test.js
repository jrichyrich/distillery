import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, rmSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomBytes } from 'node:crypto';
import { ingestDataset } from '../../src/ingestors/dataset.js';

function makeTempDir() {
  const dir = join(tmpdir(), `kb-test-${randomBytes(6).toString('hex')}`);
  mkdirSync(dir, { recursive: true });
  return dir;
}

describe('ingestDataset', () => {
  let tempDir;
  let rawDir;

  beforeEach(() => {
    tempDir = makeTempDir();
    rawDir = join(tempDir, 'raw');
    mkdirSync(rawDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('should ingest a CSV file with preview table', async () => {
    const csvPath = join(tempDir, 'data.csv');
    const csvContent = [
      'name,age,city',
      'Alice,30,NYC',
      'Bob,25,LA',
      'Charlie,35,Chicago',
    ].join('\n');
    writeFileSync(csvPath, csvContent);

    const result = await ingestDataset(csvPath, rawDir);

    assert.equal(result.type, 'dataset');
    assert.equal(result.title, 'data');

    // Check the markdown output exists and contains a table
    const md = readFileSync(result.path, 'utf-8');
    assert.ok(md.includes('type: dataset'));
    assert.ok(md.includes('columns: ["name","age","city"]'));
    assert.ok(md.includes('row_count: 3'));
    assert.ok(md.includes('| name | age | city |'));
    assert.ok(md.includes('| --- | --- | --- |'));
    assert.ok(md.includes('| Alice | 30 | NYC |'));
    assert.ok(md.includes('| Bob | 25 | LA |'));
    assert.ok(md.includes('| Charlie | 35 | Chicago |'));

    // Check original file was copied
    assert.ok(existsSync(join(rawDir, 'datasets', 'data.csv')));
  });

  it('should ingest a JSON file with preview snippet', async () => {
    const jsonPath = join(tempDir, 'items.json');
    const data = [
      { id: 1, name: 'Widget', price: 9.99 },
      { id: 2, name: 'Gadget', price: 19.99 },
      { id: 3, name: 'Doohickey', price: 4.50 },
    ];
    writeFileSync(jsonPath, JSON.stringify(data));

    const result = await ingestDataset(jsonPath, rawDir);

    assert.equal(result.type, 'dataset');
    assert.equal(result.title, 'items');

    const md = readFileSync(result.path, 'utf-8');
    assert.ok(md.includes('type: dataset'));
    assert.ok(md.includes('keys: ["id","name","price"]'));
    assert.ok(md.includes('item_count: 3'));
    assert.ok(md.includes('```json'));
    assert.ok(md.includes('"Widget"'));
    assert.ok(md.includes('"Gadget"'));

    // Check original file was copied
    assert.ok(existsSync(join(rawDir, 'datasets', 'items.json')));
  });

  it('should show only first 10 rows for large CSV', async () => {
    const csvPath = join(tempDir, 'large.csv');
    const lines = ['id,value'];
    for (let i = 1; i <= 20; i++) {
      lines.push(`${i},val${i}`);
    }
    writeFileSync(csvPath, lines.join('\n'));

    const result = await ingestDataset(csvPath, rawDir);
    const md = readFileSync(result.path, 'utf-8');

    assert.ok(md.includes('row_count: 20'));
    assert.ok(md.includes('| 10 | val10 |'));
    assert.ok(!md.includes('| 11 | val11 |'));
    assert.ok(md.includes('... and 10 more rows'));
  });

  it('should show only first 5 items for large JSON', async () => {
    const jsonPath = join(tempDir, 'big.json');
    const data = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));
    writeFileSync(jsonPath, JSON.stringify(data));

    const result = await ingestDataset(jsonPath, rawDir);
    const md = readFileSync(result.path, 'utf-8');

    assert.ok(md.includes('item_count: 10'));
    assert.ok(md.includes('"id": 5'));
    assert.ok(!md.includes('"id": 6'));
    assert.ok(md.includes('... and 5 more items'));
  });
});
