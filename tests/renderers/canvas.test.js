import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { renderCanvas } from '../../src/renderers/canvas.js';

describe('renderCanvas', () => {
  let tmp;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), 'kb-canvas-test-'));
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it('saves valid .canvas JSON to visuals/canvas/', () => {
    const canvasData = {
      nodes: [
        { id: '1', x: 0, y: 0, width: 200, height: 100, type: 'text', text: 'Node 1' },
        { id: '2', x: 300, y: 0, width: 200, height: 100, type: 'text', text: 'Node 2' },
      ],
      edges: [
        { id: 'e1', fromNode: '1', toNode: '2', label: 'relates to' },
      ],
    };
    const content = JSON.stringify(canvasData);
    const question = 'How are neural networks connected?';

    const result = renderCanvas(content, question, tmp);

    assert.equal(result.format, 'canvas');
    assert.ok(result.path.includes(join('visuals', 'canvas')));
    assert.ok(result.path.endsWith('.canvas'));
    assert.ok(existsSync(result.path));

    const saved = JSON.parse(readFileSync(result.path, 'utf-8'));
    assert.equal(saved.nodes.length, 2);
    assert.equal(saved.edges.length, 1);
  });

  it('strips markdown code fences from JSON', () => {
    const json = '{"nodes": [], "edges": []}';
    const content = '```json\n' + json + '\n```';

    const result = renderCanvas(content, 'test canvas', tmp);
    const saved = JSON.parse(readFileSync(result.path, 'utf-8'));

    assert.deepEqual(saved, { nodes: [], edges: [] });
  });

  it('creates visuals/canvas directory if missing', () => {
    const dir = join(tmp, 'visuals', 'canvas');
    assert.ok(!existsSync(dir));

    renderCanvas('{"nodes":[],"edges":[]}', 'test', tmp);

    assert.ok(existsSync(dir));
  });
});
