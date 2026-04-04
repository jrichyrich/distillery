import { readFileSync, writeFileSync, existsSync } from 'node:fs';

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

export function loadConfig(configPath) {
  if (!existsSync(configPath)) {
    return structuredClone(DEFAULT_CONFIG);
  }
  const raw = readFileSync(configPath, 'utf-8');
  return JSON.parse(raw);
}

export function saveConfig(configPath, config) {
  writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

export { DEFAULT_CONFIG };
