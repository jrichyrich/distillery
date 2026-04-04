import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LLMProvider } from '../../src/llm/provider.js';

describe('LLMProvider base class', () => {
  it('name getter throws not implemented', () => {
    const provider = new LLMProvider();
    assert.throws(() => provider.name, { message: 'not implemented' });
  });

  it('maxContextTokens getter throws not implemented', () => {
    const provider = new LLMProvider();
    assert.throws(() => provider.maxContextTokens, { message: 'not implemented' });
  });

  it('complete() rejects with not implemented', async () => {
    const provider = new LLMProvider();
    await assert.rejects(() => provider.complete('test'), { message: 'not implemented' });
  });

  it('completeWithImages() rejects with not implemented', async () => {
    const provider = new LLMProvider();
    await assert.rejects(() => provider.completeWithImages('test', []), { message: 'not implemented' });
  });
});
