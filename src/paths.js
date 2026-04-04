import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const VAULT_DIR = join(
  homedir(),
  'Library/Mobile Documents/iCloud~md~obsidian/Documents/distillery-vault'
);

export function projectRoot() {
  return PROJECT_ROOT;
}

export function vaultRoot() {
  return VAULT_DIR;
}

export function topicDir(topic) {
  return join(VAULT_DIR, topic);
}

export function rawDir(topic) {
  return join(topicDir(topic), 'raw');
}

export function articlesDir(topic) {
  return join(topicDir(topic), 'articles');
}

export function indexDir(topic) {
  return join(topicDir(topic), 'index');
}

export function visualsDir(topic) {
  return join(topicDir(topic), 'visuals');
}

export function metaPath(topic) {
  return join(topicDir(topic), 'kb.meta.json');
}
