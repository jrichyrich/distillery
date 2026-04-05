import { LLMProvider } from '../provider.js';

export class OllamaProvider extends LLMProvider {
  #model;
  #baseUrl;

  constructor({ model = 'llama3', baseUrl = 'http://localhost:11434' } = {}) {
    super();
    this.#model = model;
    this.#baseUrl = baseUrl;
  }

  get name() {
    return 'ollama';
  }

  get maxContextTokens() {
    return 8192;
  }

  async complete(prompt, opts = {}) {
    const model = opts.model || this.#model;

    const body = {
      model,
      prompt,
      stream: false,
      keep_alive: opts.keepAlive || '30m',
    };

    if (opts.system) {
      body.system = opts.system;
    }

    if (opts.format) {
      body.format = opts.format;
    }

    const response = await fetch(`${this.#baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  }

  async completeWithImages(prompt, images, opts = {}) {
    const model = opts.model || this.#model;

    const body = {
      model,
      prompt,
      images: images.map((img) => img.data),
      stream: false,
      keep_alive: opts.keepAlive || '30m',
    };

    if (opts.system) {
      body.system = opts.system;
    }

    const response = await fetch(`${this.#baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  }
}
