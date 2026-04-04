import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { Command } from 'commander';
import { vaultRoot } from '../paths.js';

/**
 * Recursively count files in a directory.
 */
function countFilesRecursive(dir) {
  if (!existsSync(dir)) return 0;
  let count = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      count += countFilesRecursive(join(dir, entry.name));
    } else if (entry.isFile()) {
      count += 1;
    }
  }
  return count;
}

/**
 * Count files (non-recursive) in a directory.
 */
function countFiles(dir) {
  if (!existsSync(dir)) return 0;
  return readdirSync(dir, { withFileTypes: true }).filter(e => e.isFile()).length;
}

/**
 * List all topics in the vault with stats.
 *
 * @param {string} [vaultPath] - Override vault root (useful for testing)
 * @returns {Array<{topic: string, created: string, lastCompiled: string|null, sourceCount: number, articleCount: number}>}
 */
export async function listTopics(vaultPath) {
  const vault = vaultPath ?? vaultRoot();

  if (!existsSync(vault)) return [];

  const entries = readdirSync(vault, { withFileTypes: true });
  const topics = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const metaFile = join(vault, entry.name, 'kb.meta.json');
    if (!existsSync(metaFile)) continue;

    const meta = JSON.parse(readFileSync(metaFile, 'utf-8'));
    const rawPath = join(vault, entry.name, 'raw');
    const articlesPath = join(vault, entry.name, 'articles');

    topics.push({
      topic: meta.topic,
      created: meta.created,
      lastCompiled: meta.lastCompiled,
      sourceCount: countFilesRecursive(rawPath),
      articleCount: countFiles(articlesPath),
    });
  }

  return topics;
}

export function makeListCommand() {
  return new Command('list')
    .description('List all knowledge base topics')
    .action(async () => {
      try {
        const topics = await listTopics();
        if (topics.length === 0) {
          console.log('No knowledge bases found.');
          return;
        }
        for (const t of topics) {
          const compiled = t.lastCompiled ?? 'never';
          console.log(`  ${t.topic}  (sources: ${t.sourceCount}, articles: ${t.articleCount}, compiled: ${compiled})`);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
