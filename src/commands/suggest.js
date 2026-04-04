import { join } from 'node:path';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { Command } from 'commander';
import { loadConfig } from '../config.js';
import { projectRoot, indexDir } from '../paths.js';
import { ProviderRegistry } from '../llm/registry.js';

export function makeSuggestCommand() {
  return new Command('suggest')
    .argument('<topic>', 'Topic to generate suggestions for')
    .description('Suggest new articles, connections, and research directions')
    .action(async (topic) => {
      try {
        const configPath = join(projectRoot(), 'kb.config.json');
        const config = loadConfig(configPath);
        const registry = new ProviderRegistry(config);
        const provider = registry.getForRole('query');

        // Load index files
        const idxDir = indexDir(topic);
        let indexContent = '';
        if (existsSync(idxDir)) {
          const indexFiles = readdirSync(idxDir).filter(f => f.endsWith('.md'));
          for (const file of indexFiles) {
            const content = readFileSync(join(idxDir, file), 'utf-8');
            indexContent += `### ${file}\n${content}\n\n`;
          }
        }

        if (!indexContent) {
          console.error(`Error: No index files found for topic "${topic}".`);
          process.exitCode = 1;
          return;
        }

        const prompt = `You are a knowledge-base advisor. Based on the following index files for the topic "${topic}", provide suggestions for expanding the knowledge base.

## Current Index
${indexContent}

Please provide your response in markdown format with these sections:

## New Article Topics
Suggest 5 new article topics that would strengthen the knowledge base. For each, explain why it matters.

## Missing Connections
Identify 3 connections between existing concepts that are not yet documented. Explain each link.

## Questions to Investigate
Propose 3 open questions worth researching further. For each, describe what answering it would add.

## External Sources to Ingest
Recommend 2 specific external sources (papers, books, datasets, etc.) that would enrich this topic. Explain what each would contribute.`;

        console.log(`Generating suggestions for "${topic}"...\n`);
        const response = await provider.complete(prompt, { temperature: 0.7 });
        console.log(response);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
