import { join } from 'node:path';
import { mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { slugify } from './markdown.js';

/**
 * Render a Python matplotlib script, execute it, and save the resulting chart.
 *
 * @param {string} pythonScript - Python matplotlib code
 * @param {string} question - Original question (used to derive filename)
 * @param {string} topicPath - Absolute path to the topic directory
 * @returns {{ path: string, mdPath: string, format: string }}
 */
export function renderMatplotlib(pythonScript, question, topicPath) {
  const slug = slugify(question);
  const chartsDir = join(topicPath, 'visuals', 'charts');
  mkdirSync(chartsDir, { recursive: true });

  const pngPath = join(chartsDir, `${slug}.png`);
  const scriptPath = join(tmpdir(), `kb-chart-${slug}-${Date.now()}.py`);

  // Prepend the output path variable to the script
  const fullScript = `CHART_OUTPUT_PATH = ${JSON.stringify(pngPath)}\n${pythonScript}`;
  writeFileSync(scriptPath, fullScript, 'utf-8');

  try {
    execFileSync('python3', [scriptPath], {
      timeout: 30_000,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
  } finally {
    try { unlinkSync(scriptPath); } catch { /* ignore cleanup errors */ }
  }

  // Create companion markdown with image embed
  const mdPath = join(chartsDir, `${slug}.md`);
  writeFileSync(mdPath, `![[${slug}.png]]\n`, 'utf-8');

  return { path: pngPath, mdPath, format: 'matplotlib' };
}
