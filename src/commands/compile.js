import { join } from 'node:path';
import { Command } from 'commander';
import { loadConfig } from '../config.js';
import { projectRoot, topicDir } from '../paths.js';
import { ProviderRegistry } from '../llm/registry.js';
import { compile } from '../compiler/pipeline.js';

export function makeCompileCommand() {
  return new Command('compile')
    .argument('<topic>', 'Topic to compile')
    .option('--full', 'Recompile all sources, not just new ones')
    .description('Run the compilation pipeline for a topic')
    .action(async (topic, options) => {
      try {
        const configPath = join(projectRoot(), 'kb.config.json');
        const config = loadConfig(configPath);
        const registry = new ProviderRegistry(config);
        const provider = registry.getForRole('compile');
        const topicPath = topicDir(topic);

        await compile(topicPath, provider, { full: options.full });
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
