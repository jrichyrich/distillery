import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ProviderRegistry } from '../../src/llm/registry.js';

const TEST_CONFIG = {
  providers: {
    anthropic: { model: 'claude-sonnet-4-6', apiKeyEnv: 'ANTHROPIC_API_KEY' },
    openai: { model: 'gpt-4o', apiKeyEnv: 'OPENAI_API_KEY' },
    ollama: { model: 'llama3', baseUrl: 'http://localhost:11434' },
  },
  roles: {
    compile: 'anthropic',
    query: 'openai',
    summarize: 'ollama',
  },
};

describe('ProviderRegistry', () => {
  it('creates providers from config', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const anthropic = registry.get('anthropic');
    assert.equal(anthropic.name, 'anthropic');
    assert.equal(anthropic.maxContextTokens, 200_000);
  });

  it('creates openai provider', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const openai = registry.get('openai');
    assert.equal(openai.name, 'openai');
    assert.equal(openai.maxContextTokens, 128_000);
  });

  it('creates ollama provider', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const ollama = registry.get('ollama');
    assert.equal(ollama.name, 'ollama');
    assert.equal(ollama.maxContextTokens, 8192);
  });

  it('throws for unknown provider name', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    assert.throws(() => registry.get('unknown'), { message: 'Unknown provider: unknown' });
  });

  it('throws when constructing with unknown provider in config', () => {
    const badConfig = {
      providers: { fake: { model: 'fake-model' } },
      roles: {},
    };
    assert.throws(() => new ProviderRegistry(badConfig), { message: 'Unknown provider: fake' });
  });

  it('getForRole returns correct provider', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const provider = registry.getForRole('compile');
    assert.equal(provider.name, 'anthropic');
  });

  it('getForRole maps query to openai', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const provider = registry.getForRole('query');
    assert.equal(provider.name, 'openai');
  });

  it('getForRole maps summarize to ollama', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    const provider = registry.getForRole('summarize');
    assert.equal(provider.name, 'ollama');
  });

  it('getForRole throws for unknown role', () => {
    const registry = new ProviderRegistry(TEST_CONFIG);
    assert.throws(() => registry.getForRole('unknown'), { message: 'Unknown role: unknown' });
  });
});
