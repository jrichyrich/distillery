import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { detectChanges } from './diff.js';
import { summarizeSources } from './summarize.js';
import { extractConcepts } from './concepts.js';
import { generateArticles } from './articles.js';
import { rebuildIndex } from './linker.js';

/**
 * Run the full 5-step compilation pipeline for a topic.
 *
 * Steps: detectChanges -> summarizeSources -> extractConcepts -> generateArticles -> rebuildIndex
 *
 * @param {string} topicPath - Absolute path to the topic directory
 * @param {import('../llm/provider.js').LLMProvider} llmProvider
 * @param {{ full?: boolean }} opts
 */
export async function compile(topicPath, llmProvider, opts = {}) {
  // Step 1: Detect changes
  console.log('[1/5] Detecting changes...');
  const { newFiles, allFiles } = await detectChanges(topicPath);

  const filesToProcess = opts.full ? allFiles : newFiles;

  if (filesToProcess.length === 0) {
    console.log('No new files to process. Use --full to recompile everything.');
    return;
  }

  console.log(`  Found ${filesToProcess.length} file(s) to process.`);

  // Step 2: Summarize sources
  console.log('[2/5] Summarizing sources...');
  const summaries = await summarizeSources(filesToProcess, topicPath, llmProvider);
  console.log(`  Summarized ${summaries.length} source(s).`);

  // Step 3: Extract concepts
  console.log('[3/5] Extracting concepts...');
  const concepts = await extractConcepts(summaries, topicPath, llmProvider);
  console.log(`  Extracted ${concepts.length} concept(s).`);

  // Step 4: Generate articles
  console.log('[4/5] Generating articles...');
  const articles = await generateArticles(concepts, summaries, topicPath, llmProvider);
  console.log(`  Generated ${articles.length} article(s).`);

  // Step 5: Rebuild index
  console.log('[5/5] Rebuilding index...');
  rebuildIndex(topicPath, summaries, concepts);
  console.log('  Index rebuilt.');

  // Update kb.meta.json
  const metaPath = join(topicPath, 'kb.meta.json');
  if (existsSync(metaPath)) {
    const meta = JSON.parse(readFileSync(metaPath, 'utf-8'));
    meta.lastCompiled = new Date().toISOString();
    meta.compileState = 'complete';
    writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf-8');
  }

  console.log('Compilation complete.');
}
