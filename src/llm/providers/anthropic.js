import { LLMProvider } from '../provider.js';

export class AnthropicProvider extends LLMProvider {
  #model;
  #apiKeyEnv;

  constructor({ model = 'claude-sonnet-4-6', apiKeyEnv = 'ANTHROPIC_API_KEY' } = {}) {
    super();
    this.#model = model;
    this.#apiKeyEnv = apiKeyEnv;
  }

  get name() {
    return 'anthropic';
  }

  get maxContextTokens() {
    return 200_000;
  }

  async complete(prompt, opts = {}) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey: process.env[this.#apiKeyEnv] });

    const model = opts.model || this.#model;
    const maxTokens = opts.maxTokens || 4096;

    const params = {
      model,
      max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }],
    };

    if (opts.system) {
      params.system = opts.system;
    }

    const response = await client.messages.create(params);
    return response.content[0].text;
  }

  async completeWithImages(prompt, images, opts = {}) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey: process.env[this.#apiKeyEnv] });

    const model = opts.model || this.#model;
    const maxTokens = opts.maxTokens || 4096;

    const content = images.map((img) => ({
      type: 'image',
      source: {
        type: 'base64',
        media_type: img.mediaType,
        data: img.data,
      },
    }));
    content.push({ type: 'text', text: prompt });

    const params = {
      model,
      max_tokens: maxTokens,
      messages: [{ role: 'user', content }],
    };

    if (opts.system) {
      params.system = opts.system;
    }

    const response = await client.messages.create(params);
    return response.content[0].text;
  }
}
