import { AnthropicProvider } from './providers/anthropic.js';
import { OpenAIProvider } from './providers/openai.js';
import { OllamaProvider } from './providers/ollama.js';

const PROVIDER_CLASSES = {
  anthropic: AnthropicProvider,
  openai: OpenAIProvider,
  ollama: OllamaProvider,
};

export class ProviderRegistry {
  #providers = new Map();
  #config;

  constructor(config) {
    this.#config = config;

    if (config.providers) {
      for (const [name, providerConfig] of Object.entries(config.providers)) {
        const ProviderClass = PROVIDER_CLASSES[name];
        if (!ProviderClass) {
          throw new Error(`Unknown provider: ${name}`);
        }
        this.#providers.set(name, new ProviderClass(providerConfig));
      }
    }
  }

  get(name) {
    const provider = this.#providers.get(name);
    if (!provider) {
      throw new Error(`Unknown provider: ${name}`);
    }
    return provider;
  }

  getForRole(role) {
    const providerName = this.#config.roles?.[role];
    if (!providerName) {
      throw new Error(`Unknown role: ${role}`);
    }
    return this.get(providerName);
  }
}
