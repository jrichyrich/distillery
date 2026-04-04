import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { Command } from 'commander';
import { vaultRoot } from '../paths.js';

const RAW_SUBDIRS = ['articles', 'papers', 'repos', 'images', 'transcripts', 'datasets'];
const VISUAL_SUBDIRS = ['charts', 'slides', 'canvas'];
const INDEX_FILES = ['_master.md', '_sources.md', '_concepts.md', '_stats.md'];

/**
 * Ensure the vault-level .obsidian config directory exists.
 */
function ensureVault(vaultPath) {
  const obsidianDir = join(vaultPath, '.obsidian');
  if (!existsSync(obsidianDir)) {
    mkdirSync(obsidianDir, { recursive: true });
  }
}

/**
 * Initialize a new topic knowledge base under the vault.
 *
 * @param {string} topic - Topic name (used as directory name)
 * @param {string} [vaultPath] - Override vault root (useful for testing)
 */
export async function initTopic(topic, vaultPath) {
  const vault = vaultPath ?? vaultRoot();
  const topicBase = join(vault, topic);

  if (existsSync(topicBase)) {
    throw new Error(`Topic "${topic}" already exists at ${topicBase}`);
  }

  // Ensure vault-level Obsidian config
  ensureVault(vault);

  // Create raw subdirs
  for (const sub of RAW_SUBDIRS) {
    mkdirSync(join(topicBase, 'raw', sub), { recursive: true });
  }

  // Create articles dir
  mkdirSync(join(topicBase, 'articles'), { recursive: true });

  // Create index dir and seed files
  mkdirSync(join(topicBase, 'index'), { recursive: true });
  for (const file of INDEX_FILES) {
    writeFileSync(join(topicBase, 'index', file), '', 'utf-8');
  }

  // Create visuals subdirs
  for (const sub of VISUAL_SUBDIRS) {
    mkdirSync(join(topicBase, 'visuals', sub), { recursive: true });
  }

  // Write kb.meta.json
  const meta = {
    topic,
    created: new Date().toISOString(),
    lastCompiled: null,
    compileState: null,
    failedSources: [],
  };
  writeFileSync(join(topicBase, 'kb.meta.json'), JSON.stringify(meta, null, 2) + '\n', 'utf-8');

  return meta;
}

export function makeInitCommand() {
  return new Command('init')
    .argument('<topic>', 'Topic name to initialize')
    .description('Initialize a new knowledge base topic')
    .action(async (topic) => {
      try {
        const meta = await initTopic(topic);
        console.log(`Initialized knowledge base: ${meta.topic}`);
        console.log(`Created: ${meta.created}`);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
