import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { randomBytes } from 'node:crypto';

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
 * Build YAML frontmatter string.
 */
function buildFrontmatter({ title, source, type }) {
  const ingested = new Date().toISOString();
  return [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${source}"`,
    `ingested: "${ingested}"`,
    `type: ${type}`,
    '---',
    '',
  ].join('\n');
}

/**
 * Ingest a git repository into the knowledge base.
 *
 * @param {string} source - Git clone URL (e.g. https://github.com/user/repo)
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'repo', title: string}>}
 */
export async function ingestRepo(source, rawDir) {
  const reposDir = join(rawDir, 'repos');
  if (!existsSync(reposDir)) {
    mkdirSync(reposDir, { recursive: true });
  }

  // Derive repo name from URL
  const repoName = basename(source.replace(/\.git$/, ''));
  const title = repoName;

  const tempId = randomBytes(8).toString('hex');
  const tempDir = join(tmpdir(), `kb-repo-${tempId}`);

  try {
    // Clone with --depth 1 for speed; use execFileSync for safety (no shell injection)
    execFileSync('git', ['clone', '--depth', '1', source, tempDir], {
      stdio: 'pipe',
      timeout: 60000,
    });

    // Extract README
    const readmeNames = ['README.md', 'readme.md', 'README.rst', 'README.txt', 'README'];
    let readmeContent = '';
    for (const name of readmeNames) {
      const readmePath = join(tempDir, name);
      if (existsSync(readmePath)) {
        readmeContent = readFileSync(readmePath, 'utf-8');
        break;
      }
    }

    // Extract docs/*.md (up to 10)
    const docsDir = join(tempDir, 'docs');
    let docsContent = '';
    if (existsSync(docsDir)) {
      const docFiles = readdirSync(docsDir)
        .filter((f) => f.endsWith('.md'))
        .slice(0, 10);

      for (const f of docFiles) {
        const docText = readFileSync(join(docsDir, f), 'utf-8');
        docsContent += `\n\n---\n\n## docs/${f}\n\n${docText}`;
      }
    }

    const combined = (readmeContent || '*No README found.*') + docsContent;

    const slug = slugify(title);
    const frontmatter = buildFrontmatter({ title, source, type: 'repo' });
    const outputPath = join(reposDir, `${slug}.md`);

    writeFileSync(outputPath, frontmatter + '\n' + combined, 'utf-8');

    return { path: outputPath, type: 'repo', title };
  } finally {
    // Clean up temp directory
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  }
}
