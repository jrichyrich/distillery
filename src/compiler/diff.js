import { readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { readdir } from 'node:fs/promises';

/**
 * Recursively collect all .md files under a directory.
 *
 * @param {string} dir - Absolute directory path
 * @returns {Promise<string[]>} Array of absolute paths
 */
async function collectMarkdown(dir) {
  const results = [];
  if (!existsSync(dir)) return results;

  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      const fullPath = join(entry.parentPath ?? entry.path, entry.name);
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Parse _sources.md for already-registered raw file paths.
 * Looks for lines matching `- raw/...`
 *
 * @param {string} sourcesPath - Absolute path to index/_sources.md
 * @returns {Set<string>} Set of relative paths (e.g. "raw/articles/foo.md")
 */
function parseRegisteredSources(sourcesPath) {
  const registered = new Set();
  if (!existsSync(sourcesPath)) return registered;

  const content = readFileSync(sourcesPath, 'utf-8');
  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/^- (raw\/.+)/);
    if (match) {
      registered.add(match[1]);
    }
  }
  return registered;
}

/**
 * Detect new and changed files in a topic's raw/ directory.
 *
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {Promise<{ newFiles: string[], changedFiles: string[], allFiles: string[] }>}
 *   Paths are relative to topicPath (e.g. "raw/articles/foo.md")
 */
export async function detectChanges(topicPath) {
  const rawPath = join(topicPath, 'raw');
  const sourcesPath = join(topicPath, 'index', '_sources.md');

  const absolutePaths = await collectMarkdown(rawPath);
  const allFiles = absolutePaths.map(p => relative(topicPath, p));

  const registered = parseRegisteredSources(sourcesPath);

  const newFiles = allFiles.filter(f => !registered.has(f));
  // changedFiles detection would require content hashing; stubbed for now
  const changedFiles = [];

  return { newFiles, changedFiles, allFiles };
}
