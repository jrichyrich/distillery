import { Command } from 'commander';
import { existsSync, readFileSync } from 'node:fs';
import { topicDir, rawDir } from '../paths.js';
import { detectSourceType } from '../ingestors/detect.js';
import { ingestWeb } from '../ingestors/web.js';
import { ingestPdf } from '../ingestors/pdf.js';
import { ingestImage } from '../ingestors/image.js';
import { ingestYoutube } from '../ingestors/youtube.js';
import { ingestDataset } from '../ingestors/dataset.js';
import { ingestRepo } from '../ingestors/repo.js';

const INGESTORS = {
  web: ingestWeb,
  pdf: ingestPdf,
  image: ingestImage,
  youtube: ingestYoutube,
  dataset: ingestDataset,
  repo: ingestRepo,
};

/**
 * Ingest a source into a topic's knowledge base.
 *
 * @param {string} topic - topic name (must already exist)
 * @param {string} source - URL or local file path
 * @returns {Promise<{path: string, type: string, title: string}>}
 */
export async function ingestSource(topic, source) {
  const dir = topicDir(topic);
  if (!existsSync(dir)) {
    throw new Error(`Topic "${topic}" does not exist. Create it first with: kb new ${topic}`);
  }

  const sourceType = detectSourceType(source);
  const raw = rawDir(topic);

  const ingestor = INGESTORS[sourceType];
  if (!ingestor) {
    throw new Error(`Unknown source type: ${sourceType}`);
  }

  return ingestor(source, raw);
}

/**
 * Ingest multiple sources from a batch file.
 * Each line is a source URL/path. Lines starting with # are comments. Blank lines are skipped.
 *
 * @param {string} topic - topic name (must already exist)
 * @param {string} batchFile - path to batch file
 * @returns {Promise<Array<{path: string, type: string, title: string}>>}
 */
export async function ingestBatch(topic, batchFile) {
  const content = readFileSync(batchFile, 'utf-8');
  const lines = content
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  const results = [];
  for (const source of lines) {
    try {
      const result = await ingestSource(topic, source);
      results.push(result);
      console.log(`Ingested [${result.type}]: ${result.title}`);
    } catch (err) {
      console.error(`Failed to ingest "${source}": ${err.message}`);
    }
  }
  return results;
}

/**
 * Create the Commander command for `kb ingest <topic> <source>`.
 */
export function makeIngestCommand() {
  const cmd = new Command('ingest')
    .description('Ingest a source into a topic knowledge base')
    .argument('<topic>', 'Topic name')
    .argument('[source]', 'URL or local file path to ingest')
    .option('--batch <file>', 'Batch file with one source per line')
    .action(async (topic, source, options) => {
      try {
        if (options.batch) {
          const results = await ingestBatch(topic, options.batch);
          console.log(`\nBatch complete: ${results.length} source(s) ingested.`);
        } else if (source) {
          const result = await ingestSource(topic, source);
          console.log(`Ingested [${result.type}]: ${result.title}`);
          console.log(`  -> ${result.path}`);
        } else {
          console.error('Error: provide a <source> or use --batch <file>');
          process.exit(1);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
    });

  return cmd;
}
