import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

/**
 * Convert a title string to a URL-friendly slug.
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/**
 * Parse a CSV/TSV string into rows.
 */
function parseDsv(text, delimiter) {
  const lines = text.split('\n').filter((l) => l.trim());
  return lines.map((line) => line.split(delimiter));
}

/**
 * Build a markdown table from header and rows.
 */
function markdownTable(header, rows) {
  const line = (cells) => '| ' + cells.join(' | ') + ' |';
  const separator = '| ' + header.map(() => '---').join(' | ') + ' |';
  return [line(header), separator, ...rows.map((r) => line(r))].join('\n');
}

/**
 * Build YAML frontmatter string for dataset.
 */
function buildFrontmatter({ title, source, type, columns, keys, rowCount, itemCount }) {
  const ingested = new Date().toISOString();
  const lines = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${source}"`,
    `ingested: "${ingested}"`,
    `type: ${type}`,
  ];
  if (columns) lines.push(`columns: ${JSON.stringify(columns)}`);
  if (keys) lines.push(`keys: ${JSON.stringify(keys)}`);
  if (rowCount !== undefined) lines.push(`row_count: ${rowCount}`);
  if (itemCount !== undefined) lines.push(`item_count: ${itemCount}`);
  lines.push('---', '');
  return lines.join('\n');
}

/**
 * Ingest a dataset file (CSV, TSV, JSON, JSONL) into the knowledge base.
 *
 * @param {string} source - local file path to dataset
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'dataset', title: string}>}
 */
export async function ingestDataset(source, rawDir) {
  const datasetsDir = join(rawDir, 'datasets');
  if (!existsSync(datasetsDir)) {
    mkdirSync(datasetsDir, { recursive: true });
  }

  const filename = basename(source);
  const nameNoExt = basename(source, extname(source));
  const ext = extname(source).toLowerCase();
  const title = nameNoExt;

  // Copy original file
  copyFileSync(source, join(datasetsDir, filename));

  const raw = readFileSync(source, 'utf-8');
  let preview;
  let meta = {};

  if (ext === '.csv' || ext === '.tsv') {
    const delimiter = ext === '.tsv' ? '\t' : ',';
    const rows = parseDsv(raw, delimiter);
    const header = rows[0] || [];
    const dataRows = rows.slice(1);
    const previewRows = dataRows.slice(0, 10);

    meta.columns = header;
    meta.rowCount = dataRows.length;

    preview = '## Preview\n\n' + markdownTable(header, previewRows);
    if (dataRows.length > 10) {
      preview += `\n\n*... and ${dataRows.length - 10} more rows*`;
    }
  } else {
    // JSON / JSONL
    let data;
    if (ext === '.jsonl') {
      data = raw
        .split('\n')
        .filter((l) => l.trim())
        .map((l) => JSON.parse(l));
    } else {
      data = JSON.parse(raw);
    }

    const items = Array.isArray(data) ? data : [data];
    meta.itemCount = items.length;

    if (items.length > 0 && typeof items[0] === 'object' && items[0] !== null) {
      meta.keys = Object.keys(items[0]);
    }

    const snippet = items.slice(0, 5);
    preview = '## Preview\n\n```json\n' + JSON.stringify(snippet, null, 2) + '\n```';
    if (items.length > 5) {
      preview += `\n\n*... and ${items.length - 5} more items*`;
    }
  }

  const slug = slugify(title);
  const frontmatter = buildFrontmatter({ title, source, type: 'dataset', ...meta });
  const outputPath = join(datasetsDir, `${slug}.md`);

  writeFileSync(outputPath, frontmatter + '\n' + preview + '\n', 'utf-8');

  return { path: outputPath, type: 'dataset', title };
}
