import { join } from 'node:path';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { Command } from 'commander';
import { loadConfig } from '../config.js';
import { projectRoot, topicDir, indexDir, articlesDir } from '../paths.js';
import { ProviderRegistry } from '../llm/registry.js';
import { lintPrompt } from '../prompts/lint.js';

export function makeLintCommand() {
  return new Command('lint')
    .argument('<topic>', 'Topic to lint')
    .option('--fix', 'Automatically fix issues (where possible)')
    .description('Lint a knowledge base topic for quality issues')
    .action(async (topic, options) => {
      try {
        if (options.fix) {
          console.log('Auto-fix is not yet implemented.');
          return;
        }

        const configPath = join(projectRoot(), 'kb.config.json');
        const config = loadConfig(configPath);
        const registry = new ProviderRegistry(config);
        const provider = registry.getForRole('lint');

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

        // Load up to 15 article samples
        const artDir = articlesDir(topic);
        let articleSample = '';
        if (existsSync(artDir)) {
          const articleFiles = readdirSync(artDir)
            .filter(f => f.endsWith('.md'))
            .slice(0, 15);
          for (const file of articleFiles) {
            const content = readFileSync(join(artDir, file), 'utf-8');
            articleSample += `### ${file}\n${content}\n\n`;
          }
        }

        console.log(`Linting topic "${topic}"...`);
        const prompt = lintPrompt(indexContent, articleSample);
        const response = await provider.complete(prompt, { temperature: 0.2 });

        let result;
        try {
          // Strip markdown fences if present
          const cleaned = response.replace(/^```(?:json)?\s*\n?/m, '').replace(/\n?```\s*$/m, '');
          result = JSON.parse(cleaned);
        } catch {
          console.error('Failed to parse LLM response as JSON.');
          console.error('Raw response:', response);
          process.exitCode = 1;
          return;
        }

        // Display summary
        console.log(`\n${result.summary}\n`);

        if (!result.issues || result.issues.length === 0) {
          console.log('No issues found.');
          return;
        }

        console.log(`Found ${result.issues.length} issue(s):\n`);
        for (const issue of result.issues) {
          console.log(`  [${issue.type}] ${issue.file}`);
          console.log(`    ${issue.description}`);
          if (issue.suggestion) {
            console.log(`    Suggestion: ${issue.suggestion}`);
          }
          console.log();
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
