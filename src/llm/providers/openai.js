import { LLMProvider } from '../provider.js';

export class OpenAIProvider extends LLMProvider {
  #model;
  #apiKeyEnv;

  constructor({ model = 'gpt-4o', apiKeyEnv = 'OPENAI_API_KEY' } = {}) {
    super();
    this.#model = model;
    this.#apiKeyEnv = apiKeyEnv;
  }

  get name() {
    return 'openai';
  }

  get maxContextTokens() {
    return 128_000;
  }

  async complete(prompt, opts = {}) {
    const { default: OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: process.env[this.#apiKeyEnv] });

    const model = opts.model || this.#model;

    const messages = [];
    if (opts.system) {
      messages.push({ role: 'system', content: opts.system });
    }
    messages.push({ role: 'user', content: prompt });

    const response = await client.chat.completions.create({
      model,
      messages,
    });

    return response.choices[0].message.content;
  }

  async completeWithImages(prompt, images, opts = {}) {
    const { default: OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: process.env[this.#apiKeyEnv] });

    const model = opts.model || this.#model;

    const content = images.map((img) => ({
      type: 'image_url',
      image_url: { url: `data:${img.mediaType};base64,${img.data}` },
    }));
    content.push({ type: 'text', text: prompt });

    const messages = [];
    if (opts.system) {
      messages.push({ role: 'system', content: opts.system });
    }
    messages.push({ role: 'user', content });

    const response = await client.chat.completions.create({
      model,
      messages,
    });

    return response.choices[0].message.content;
  }
}
