import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Convert a concept name to a filename-safe slug.
 *
 * @param {string} name
 * @returns {string}
 */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Parse YAML frontmatter from markdown content.
 * Returns an object with the frontmatter fields, or {} if none found.
 *
 * @param {string} content
 * @returns {{ title?: string, tags?: string[] }}
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const fm = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const kvMatch = line.match(/^(\w+):\s*(.+)/);
    if (kvMatch) {
      const key = kvMatch[1];
      let value = kvMatch[2].trim();
      // Handle YAML arrays on same line: [tag1, tag2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      }
      fm[key] = value;
    }
  }
  return fm;
}

/**
 * Rebuild all index files for a topic.
 *
 * @param {string} topicPath - Absolute path to the topic directory
 * @param {Array<{ path: string, summary: string }>} summaries - Source summaries
 * @param {Array<{ name: string, parent: string|null, description: string }>} concepts
 */
export function rebuildIndex(topicPath, summaries, concepts) {
  const indexPath = join(topicPath, 'index');
  const articlesPath = join(topicPath, 'articles');

  if (!existsSync(indexPath)) {
    mkdirSync(indexPath, { recursive: true });
  }

  // Read all articles and parse frontmatter
  const articles = [];
  if (existsSync(articlesPath)) {
    const files = readdirSync(articlesPath).filter(f => f.endsWith('.md')).sort();
    for (const file of files) {
      const content = readFileSync(join(articlesPath, file), 'utf-8');
      const fm = parseFrontmatter(content);
      const slug = file.replace(/\.md$/, '');
      articles.push({
        slug,
        title: fm.title || slug,
        tags: Array.isArray(fm.tags) ? fm.tags : [],
      });
    }
  }

  // _master.md — sorted article list with wiki links
  const masterLines = ['# Master Index', ''];
  for (const article of articles) {
    masterLines.push(`- [[${article.slug}|${article.title}]]`);
  }
  masterLines.push('');
  writeFileSync(join(indexPath, '_master.md'), masterLines.join('\n'), 'utf-8');

  // _sources.md — all raw files with summaries
  const sourceLines = ['# Sources', ''];
  for (const s of summaries) {
    sourceLines.push(`- ${s.path}`);
    if (s.summary) {
      sourceLines.push(`  ${s.summary}`);
    }
  }
  sourceLines.push('');
  writeFileSync(join(indexPath, '_sources.md'), sourceLines.join('\n'), 'utf-8');

  // _concepts.md — all concepts with wiki links
  const conceptLines = ['# Concepts', ''];
  for (const c of concepts) {
    const slug = slugify(c.name);
    const parentNote = c.parent ? ` (parent: ${c.parent})` : '';
    conceptLines.push(`- [[${slug}|${c.name}]] — ${c.description}${parentNote}`);
  }
  conceptLines.push('');
  writeFileSync(join(indexPath, '_concepts.md'), conceptLines.join('\n'), 'utf-8');

  // _stats.md — counts and last compiled date
  const statsLines = [
    '# Statistics',
    '',
    `- Articles: ${articles.length}`,
    `- Sources: ${summaries.length}`,
    `- Concepts: ${concepts.length}`,
    `- Last compiled: ${new Date().toISOString()}`,
    '',
  ];
  writeFileSync(join(indexPath, '_stats.md'), statsLines.join('\n'), 'utf-8');
}
