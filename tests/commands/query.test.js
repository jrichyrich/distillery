import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { makeQueryCommand } from '../../src/commands/query.js';

describe('makeQueryCommand', () => {
  it('advertises the visualization defaults in help text', () => {
    const command = makeQueryCommand();
    const help = command.helpInformation();

    assert.match(help, /--canvas\s+Generate an Obsidian canvas for concept maps and relationships/);
    assert.match(help, /--chart\s+Generate a matplotlib chart for quantitative trends/);
    assert.match(help, /--slides\s+Generate a Marp slide deck for summaries and recaps/);
  });
});
