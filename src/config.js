import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const DEFAULT_CONFIG = {
  defaultProvider: 'anthropic',
  providers: {
    anthropic: {
      model: 'claude-sonnet-4-6',
      apiKeyEnv: 'ANTHROPIC_API_KEY'
    },
    openai: {
      model: 'gpt-4o',
      apiKeyEnv: 'OPENAI_API_KEY'
    },
    ollama: {
      model: 'llama3',
      baseUrl: 'http://localhost:11434'
    }
  },
  roles: {
    compile: 'anthropic',
    query: 'anthropic',
    summarize: 'anthropic',
    lint: 'anthropic'
  }
};

function resolveSiblingConfigPath(configPath) {
  if (existsSync(configPath)) {
    return configPath;
  }

  const dir = dirname(configPath);
  const file = basename(configPath);

  if (file === 'config.json') {
    const sibling = join(dir, 'kb.config.json');
    if (existsSync(sibling)) {
      return sibling;
    }
  }

  if (file === 'kb.config.json') {
    const sibling = join(dir, 'config.json');
    if (existsSync(sibling)) {
      return sibling;
    }
  }

  return configPath;
}

export function loadConfig(configPath) {
  const resolvedPath = resolveSiblingConfigPath(configPath);
  if (!existsSync(resolvedPath)) {
    return structuredClone(DEFAULT_CONFIG);
  }
  const raw = readFileSync(resolvedPath, 'utf-8');
  return JSON.parse(raw);
}

export function saveConfig(configPath, config) {
  writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

export { DEFAULT_CONFIG };
