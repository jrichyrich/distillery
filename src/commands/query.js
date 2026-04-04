import { join } from 'node:path';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { Command } from 'commander';
import { loadConfig } from '../config.js';
import { projectRoot, topicDir } from '../paths.js';
import { ProviderRegistry } from '../llm/registry.js';
import { queryPrompt } from '../prompts/query.js';
import { renderMarkdown } from '../renderers/markdown.js';
import { renderMarp } from '../renderers/marp.js';
import { renderCanvas } from '../renderers/canvas.js';
import { renderMatplotlib } from '../renderers/matplotlib.js';

/**
 * Safely read a file, returning empty string if it doesn't exist.
 */
function safeRead(filePath) {
  try {
    return readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

/**
 * Load up to `limit` articles from the topic's articles directory.
 */
function loadArticles(topicPath, limit = 20) {
  const dir = join(topicPath, 'articles');
  if (!existsSync(dir)) return [];

  const files = readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .slice(0, limit);

  return files.map(f => ({
    name: f,
    content: readFileSync(join(dir, f), 'utf-8'),
  }));
}

/**
 * Determine the output format from CLI flags.
 */
function resolveFormat(options) {
  if (options.slides) return 'slides';
  if (options.chart) return 'chart';
  if (options.canvas) return 'canvas';
  if (options.save) return 'save';
  return 'terminal';
}

export function makeQueryCommand() {
  return new Command('query')
    .argument('<topic>', 'Topic to query')
    .argument('<question>', 'Question to ask')
    .option('--save', 'Save answer as an Obsidian article')
    .option('--slides', 'Generate a Marp slide deck')
    .option('--chart', 'Generate a matplotlib chart')
    .option('--canvas', 'Generate an Obsidian canvas')
    .description('Ask a question about a topic')
    .action(async (topic, question, options) => {
      try {
        const configPath = join(projectRoot(), 'config.json');
        const config = loadConfig(configPath);
        const registry = new ProviderRegistry(config);
        const provider = registry.getForRole('query');
        const topicPath = topicDir(topic);

        // Load index content
        const masterIndex = safeRead(join(topicPath, 'index', '_master.md'));
        const conceptsIndex = safeRead(join(topicPath, 'index', '_concepts.md'));
        const indexContent = [masterIndex, conceptsIndex].filter(Boolean).join('\n\n');

        // Load articles
        const articles = loadArticles(topicPath);

        // Determine format
        const format = resolveFormat(options);

        // Build prompt and get completion
        const prompt = queryPrompt(question, indexContent, articles, format);
        const response = await provider.complete(prompt);

        // Route to renderer
        if (format === 'terminal') {
          console.log(response);
        } else if (format === 'save') {
          const result = renderMarkdown(response, question, topicPath);
          console.log(`Saved article: ${result.path}`);
        } else if (format === 'slides') {
          const result = renderMarp(response, question, topicPath);
          console.log(`Saved slide deck: ${result.path}`);
        } else if (format === 'chart') {
          const result = renderMatplotlib(response, question, topicPath);
          console.log(`Saved chart: ${result.path}`);
          console.log(`Companion markdown: ${result.mdPath}`);
        } else if (format === 'canvas') {
          const result = renderCanvas(response, question, topicPath);
          console.log(`Saved canvas: ${result.path}`);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
