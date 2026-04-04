/**
 * Base LLM provider class.
 * All provider implementations must extend this class.
 */
export class LLMProvider {
  get name() {
    throw new Error('not implemented');
  }

  get maxContextTokens() {
    throw new Error('not implemented');
  }

  async complete(prompt, opts = {}) {
    throw new Error('not implemented');
  }

  async completeWithImages(prompt, images, opts = {}) {
    throw new Error('not implemented');
  }
}
