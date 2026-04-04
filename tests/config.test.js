import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('config', () => {
  let tempDir;

  beforeEach(() => {
    tempDir = join(tmpdir(), `kb-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('loadConfig reads kb.config.json from a given path', async () => {
    const { loadConfig } = await import('../src/config.js');
    const configPath = join(tempDir, 'kb.config.json');
    writeFileSync(configPath, JSON.stringify({
      defaultProvider: 'anthropic',
      providers: {
        anthropic: { model: 'claude-sonnet-4-6', apiKeyEnv: 'ANTHROPIC_API_KEY' }
      },
      roles: { compile: 'anthropic' }
    }));

    const config = loadConfig(configPath);
    assert.equal(config.defaultProvider, 'anthropic');
    assert.equal(config.providers.anthropic.model, 'claude-sonnet-4-6');
    assert.equal(config.roles.compile, 'anthropic');
  });

  it('loadConfig returns defaults when file does not exist', async () => {
    const { loadConfig } = await import('../src/config.js');
    const config = loadConfig(join(tempDir, 'nonexistent.json'));
    assert.equal(config.defaultProvider, 'anthropic');
    assert.ok(config.providers);
    assert.ok(config.roles);
  });

  it('saveConfig writes config to disk', async () => {
    const { saveConfig, loadConfig } = await import('../src/config.js');
    const configPath = join(tempDir, 'kb.config.json');
    const config = { defaultProvider: 'openai', providers: {}, roles: {} };

    saveConfig(configPath, config);
    const loaded = loadConfig(configPath);
    assert.equal(loaded.defaultProvider, 'openai');
  });
});
