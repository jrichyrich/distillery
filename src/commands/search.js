import { join } from 'node:path';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { Command } from 'commander';
import { articlesDir, rawDir } from '../paths.js';

/**
 * Recursively collect all files in a directory.
 */
function collectFiles(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

export function makeSearchCommand() {
  return new Command('search')
    .argument('<topic>', 'Topic to search')
    .argument('[query]', 'Search query')
    .option('--serve', 'Launch web UI for search')
    .description('Full-text search across articles and raw files')
    .action((topic, query, options) => {
      try {
        if (options.serve) {
          console.log('Web UI not yet implemented.');
          return;
        }

        if (!query) {
          console.error('Error: Please provide a search query or use --serve.');
          process.exitCode = 1;
          return;
        }

        const artDir = articlesDir(topic);
        const rDir = rawDir(topic);

        const allFiles = [
          ...collectFiles(artDir),
          ...collectFiles(rDir),
        ];

        if (allFiles.length === 0) {
          console.log(`No files found for topic "${topic}".`);
          return;
        }

        const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        let totalMatches = 0;

        for (const filePath of allFiles) {
          // Skip binary files
          try {
            const stat = statSync(filePath);
            if (stat.size > 1_000_000) continue; // skip files > 1MB
          } catch {
            continue;
          }

          let content;
          try {
            content = readFileSync(filePath, 'utf-8');
          } catch {
            continue;
          }

          const lines = content.split('\n');
          const matchingLines = [];
          for (let i = 0; i < lines.length; i++) {
            if (pattern.test(lines[i])) {
              matchingLines.push({ lineNum: i + 1, text: lines[i] });
            }
          }

          if (matchingLines.length > 0) {
            totalMatches++;
            console.log(`\n  ${filePath}`);
            const shown = matchingLines.slice(0, 3);
            for (const match of shown) {
              console.log(`    ${match.lineNum}: ${match.text.trim()}`);
            }
            if (matchingLines.length > 3) {
              console.log(`    ... and ${matchingLines.length - 3} more match(es)`);
            }
          }
        }

        if (totalMatches === 0) {
          console.log(`No matches found for "${query}" in topic "${topic}".`);
        } else {
          console.log(`\n${totalMatches} file(s) matched.`);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
