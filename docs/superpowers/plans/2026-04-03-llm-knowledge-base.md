# LLM Knowledge Base System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `kb` CLI tool that manages LLM-compiled knowledge bases, with ingestion, compilation, Q&A, and maintenance — all viewable in Obsidian.

**Architecture:** Node.js CLI using Commander, with a pluggable LLM provider abstraction (Anthropic, OpenAI, Ollama). Source material is ingested into `raw/`, compiled by LLM into `articles/` + `index/`, and queried with output to multiple formats. Everything lives in an Obsidian vault at `~/Knowledge/vault/`.

**Tech Stack:** Node.js v25, Commander (CLI), @anthropic-ai/sdk, openai, pdf-parse, chokidar, marked, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-04-03-llm-knowledge-base-design.md`

---

## File Structure

```
~/Knowledge/
├── package.json
├── kb.config.json
├── bin/kb                        # CLI entry point (thin wrapper)
├── src/
│   ├── cli.js                    # Commander program setup, registers all commands
│   ├── config.js                 # Load/save kb.config.json, resolve providers
│   ├── paths.js                  # Path resolution helpers (vault root, topic dirs)
│   ├── commands/
│   │   ├── init.js               # kb init <topic>
│   │   ├── list.js               # kb list
│   │   ├── config-cmd.js         # kb config
│   │   ├── ingest.js             # kb ingest <topic> <source>
│   │   ├── compile.js            # kb compile <topic>
│   │   ├── query.js              # kb query <topic> "question"
│   │   ├── lint.js               # kb lint <topic>
│   │   ├── suggest.js            # kb suggest <topic>
│   │   ├── watch.js              # kb watch <topic>
│   │   └── search.js             # kb search <topic> "query"
│   ├── llm/
│   │   ├── provider.js           # Base LLMProvider class
│   │   ├── registry.js           # Provider registry + factory
│   │   └── providers/
│   │       ├── anthropic.js      # Anthropic Claude provider
│   │       ├── openai.js         # OpenAI provider
│   │       └── ollama.js         # Ollama local provider
│   ├── ingestors/
│   │   ├── detect.js             # Auto-detect source type from input
│   │   ├── web.js                # URL → markdown + local images
│   │   ├── pdf.js                # PDF → markdown
│   │   ├── repo.js               # Git repo → extracted docs
│   │   ├── image.js              # Image → local copy + metadata .md
│   │   ├── youtube.js            # YouTube → transcript .md
│   │   └── dataset.js            # CSV/JSON → summary .md
│   ├── renderers/
│   │   ├── markdown.js           # Render answer as wiki article .md
│   │   ├── marp.js               # Render as Marp slide deck
│   │   ├── matplotlib.js         # Shell out to Python for chart PNG
│   │   ├── mermaid.js            # Render as inline Mermaid in .md
│   │   └── canvas.js             # Render as Obsidian .canvas JSON
│   ├── compiler/
│   │   ├── pipeline.js           # Orchestrate 5-step compilation
│   │   ├── diff.js               # Step 1: detect new/changed sources
│   │   ├── summarize.js          # Step 2: LLM summarizes sources
│   │   ├── concepts.js           # Step 3: extract/merge concepts
│   │   ├── articles.js           # Step 4: generate/update articles
│   │   └── linker.js             # Step 5: backlinks + index rebuild
│   └── prompts/
│       ├── summarize.js          # Prompt templates for summarization
│       ├── concepts.js           # Prompt templates for concept extraction
│       ├── articles.js           # Prompt templates for article generation
│       ├── query.js              # Prompt templates for Q&A
│       └── lint.js               # Prompt templates for health checks
├── tests/
│   ├── fixtures/                 # Test data (sample articles, PDFs, etc.)
│   │   ├── sample-article.md
│   │   ├── sample.pdf
│   │   └── sample-dataset.csv
│   ├── config.test.js
│   ├── paths.test.js
│   ├── commands/
│   │   ├── init.test.js
│   │   └── list.test.js
│   ├── llm/
│   │   ├── provider.test.js
│   │   └── registry.test.js
│   ├── ingestors/
│   │   ├── detect.test.js
│   │   ├── web.test.js
│   │   ├── pdf.test.js
│   │   └── dataset.test.js
│   ├── compiler/
│   │   ├── diff.test.js
│   │   ├── pipeline.test.js
│   │   └── linker.test.js
│   └── renderers/
│       ├── markdown.test.js
│       ├── marp.test.js
│       └── canvas.test.js
└── vault/
    └── .obsidian/
```

---

## Task 1: Project Scaffolding & CLI Framework

**Files:**
- Create: `package.json`
- Create: `bin/kb`
- Create: `src/cli.js`
- Create: `src/config.js`
- Create: `src/paths.js`
- Create: `tests/config.test.js`
- Create: `tests/paths.test.js`

- [ ] **Step 1: Initialize the project**

```bash
cd ~/Knowledge
git init
```

- [ ] **Step 2: Create package.json**

Create `package.json`:

```json
{
  "name": "kb",
  "version": "0.1.0",
  "type": "module",
  "description": "LLM-powered knowledge base CLI",
  "bin": {
    "kb": "./bin/kb"
  },
  "scripts": {
    "test": "node --test tests/**/*.test.js",
    "test:unit": "node --test tests/**/*.test.js"
  },
  "engines": {
    "node": ">=20.0.0"
  }
}
```

- [ ] **Step 3: Install core dependencies**

```bash
cd ~/Knowledge
npm install commander
npm install --save-dev @anthropic-ai/sdk openai
```

- [ ] **Step 4: Write the failing test for paths.js**

Create `tests/paths.test.js`:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { vaultRoot, topicDir, rawDir, articlesDir, indexDir, visualsDir, metaPath } from '../src/paths.js';

describe('paths', () => {
  it('vaultRoot returns ~/Knowledge/vault', () => {
    const result = vaultRoot();
    assert.ok(result.endsWith('/Knowledge/vault'));
  });

  it('topicDir returns vault/<topic>', () => {
    const result = topicDir('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research'));
  });

  it('rawDir returns topic/raw', () => {
    const result = rawDir('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research/raw'));
  });

  it('articlesDir returns topic/articles', () => {
    const result = articlesDir('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research/articles'));
  });

  it('indexDir returns topic/index', () => {
    const result = indexDir('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research/index'));
  });

  it('visualsDir returns topic/visuals', () => {
    const result = visualsDir('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research/visuals'));
  });

  it('metaPath returns topic/kb.meta.json', () => {
    const result = metaPath('ai-research');
    assert.ok(result.endsWith('/Knowledge/vault/ai-research/kb.meta.json'));
  });
});
```

- [ ] **Step 5: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/paths.test.js
```

Expected: FAIL — `src/paths.js` does not exist.

- [ ] **Step 6: Implement paths.js**

Create `src/paths.js`:

```javascript
import { join } from 'node:path';
import { homedir } from 'node:os';

const PROJECT_ROOT = join(homedir(), 'Knowledge');
const VAULT_DIR = join(PROJECT_ROOT, 'vault');

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
```

- [ ] **Step 7: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/paths.test.js
```

Expected: All 7 tests PASS.

- [ ] **Step 8: Write the failing test for config.js**

Create `tests/config.test.js`:

```javascript
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('config', () => {
  let tempDir;

  beforeEach(() => {
    tempDir = join(tmpdir(), `kb-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('loadConfig reads kb.config.json from a given path', async () => {
    const { loadConfig } = await import('../src/config.js');
    const configPath = join(tempDir, 'kb.config.json');
    writeFileSync(configPath, JSON.stringify({
      defaultProvider: 'anthropic',
      providers: {
        anthropic: { model: 'claude-sonnet-4-6', apiKeyEnv: 'ANTHROPIC_API_KEY' }
      },
      roles: { compile: 'anthropic' }
    }));

    const config = loadConfig(configPath);
    assert.equal(config.defaultProvider, 'anthropic');
    assert.equal(config.providers.anthropic.model, 'claude-sonnet-4-6');
    assert.equal(config.roles.compile, 'anthropic');
  });

  it('loadConfig returns defaults when file does not exist', async () => {
    const { loadConfig } = await import('../src/config.js');
    const config = loadConfig(join(tempDir, 'nonexistent.json'));
    assert.equal(config.defaultProvider, 'anthropic');
    assert.ok(config.providers);
    assert.ok(config.roles);
  });

  it('saveConfig writes config to disk', async () => {
    const { saveConfig, loadConfig } = await import('../src/config.js');
    const configPath = join(tempDir, 'kb.config.json');
    const config = { defaultProvider: 'openai', providers: {}, roles: {} };

    saveConfig(configPath, config);
    const loaded = loadConfig(configPath);
    assert.equal(loaded.defaultProvider, 'openai');
  });
});
```

- [ ] **Step 9: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/config.test.js
```

Expected: FAIL — `src/config.js` does not exist.

- [ ] **Step 10: Implement config.js**

Create `src/config.js`:

```javascript
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const DEFAULT_CONFIG = {
  defaultProvider: 'anthropic',
  providers: {
    anthropic: {
      model: 'claude-sonnet-4-6',
      apiKeyEnv: 'ANTHROPIC_API_KEY'
    },
    openai: {
      model: 'gpt-4o',
      apiKeyEnv: 'OPENAI_API_KEY'
    },
    ollama: {
      model: 'llama3',
      baseUrl: 'http://localhost:11434'
    }
  },
  roles: {
    compile: 'anthropic',
    query: 'anthropic',
    summarize: 'anthropic',
    lint: 'anthropic'
  }
};

export function loadConfig(configPath) {
  if (!existsSync(configPath)) {
    return structuredClone(DEFAULT_CONFIG);
  }
  const raw = readFileSync(configPath, 'utf-8');
  return JSON.parse(raw);
}

export function saveConfig(configPath, config) {
  writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

export { DEFAULT_CONFIG };
```

- [ ] **Step 11: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/config.test.js
```

Expected: All 3 tests PASS.

- [ ] **Step 12: Create CLI entry point and cli.js**

Create `bin/kb`:

```javascript
#!/usr/bin/env node
import '../src/cli.js';
```

Create `src/cli.js`:

```javascript
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8'));

const program = new Command();

program
  .name('kb')
  .description('LLM-powered knowledge base CLI')
  .version(pkg.version);

// Commands will be registered here as they're built

program.parse();
```

- [ ] **Step 13: Make bin/kb executable and test**

```bash
cd ~/Knowledge
chmod +x bin/kb
node bin/kb --version
```

Expected: `0.1.0`

- [ ] **Step 14: Create .gitignore and commit**

Create `.gitignore`:

```
node_modules/
vault/.obsidian/workspace.json
vault/.obsidian/workspace-mobile.json
.superpowers/
*.log
```

```bash
cd ~/Knowledge
git add package.json package-lock.json bin/kb src/cli.js src/config.js src/paths.js tests/config.test.js tests/paths.test.js .gitignore
git commit -m "feat: project scaffolding with CLI framework, config, and path utilities"
```

---

## Task 2: `kb init` and `kb list` Commands

**Files:**
- Create: `src/commands/init.js`
- Create: `src/commands/list.js`
- Modify: `src/cli.js` — register commands
- Create: `tests/commands/init.test.js`
- Create: `tests/commands/list.test.js`

- [ ] **Step 1: Write the failing test for init command**

Create `tests/commands/init.test.js`:

```javascript
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, rmSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('init command', () => {
  let tempVault;

  beforeEach(() => {
    tempVault = join(tmpdir(), `kb-vault-test-${Date.now()}`);
    mkdirSync(tempVault, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempVault, { recursive: true, force: true });
  });

  it('creates full directory structure for a topic', async () => {
    const { initTopic } = await import('../../src/commands/init.js');
    await initTopic('ai-research', tempVault);

    const topicPath = join(tempVault, 'ai-research');
    assert.ok(existsSync(join(topicPath, 'raw', 'articles')));
    assert.ok(existsSync(join(topicPath, 'raw', 'papers')));
    assert.ok(existsSync(join(topicPath, 'raw', 'repos')));
    assert.ok(existsSync(join(topicPath, 'raw', 'images')));
    assert.ok(existsSync(join(topicPath, 'raw', 'transcripts')));
    assert.ok(existsSync(join(topicPath, 'raw', 'datasets')));
    assert.ok(existsSync(join(topicPath, 'articles')));
    assert.ok(existsSync(join(topicPath, 'index')));
    assert.ok(existsSync(join(topicPath, 'visuals', 'charts')));
    assert.ok(existsSync(join(topicPath, 'visuals', 'slides')));
    assert.ok(existsSync(join(topicPath, 'visuals', 'canvas')));
  });

  it('creates kb.meta.json with initial state', async () => {
    const { initTopic } = await import('../../src/commands/init.js');
    await initTopic('ai-research', tempVault);

    const meta = JSON.parse(readFileSync(join(tempVault, 'ai-research', 'kb.meta.json'), 'utf-8'));
    assert.equal(meta.topic, 'ai-research');
    assert.ok(meta.created);
    assert.equal(meta.lastCompiled, null);
    assert.deepEqual(meta.failedSources, []);
  });

  it('creates initial index files', async () => {
    const { initTopic } = await import('../../src/commands/init.js');
    await initTopic('ai-research', tempVault);

    const indexPath = join(tempVault, 'ai-research', 'index');
    assert.ok(existsSync(join(indexPath, '_master.md')));
    assert.ok(existsSync(join(indexPath, '_sources.md')));
    assert.ok(existsSync(join(indexPath, '_concepts.md')));
    assert.ok(existsSync(join(indexPath, '_stats.md')));
  });

  it('throws if topic already exists', async () => {
    const { initTopic } = await import('../../src/commands/init.js');
    await initTopic('ai-research', tempVault);

    await assert.rejects(
      () => initTopic('ai-research', tempVault),
      { message: /already exists/ }
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/commands/init.test.js
```

Expected: FAIL — `src/commands/init.js` does not exist.

- [ ] **Step 3: Implement init command**

Create `src/commands/init.js`:

```javascript
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { Command } from 'commander';
import { vaultRoot } from '../paths.js';

function ensureVault(vaultPath) {
  const obsidianDir = join(vaultPath, '.obsidian');
  if (existsSync(obsidianDir)) return;

  mkdirSync(obsidianDir, { recursive: true });

  writeFileSync(join(obsidianDir, 'app.json'), JSON.stringify({
    showLineNumber: true,
    strictLineBreaks: false,
    showFrontmatter: false,
    foldHeading: true,
    foldIndent: true,
  }, null, 2));

  writeFileSync(join(obsidianDir, 'core-plugins.json'), JSON.stringify([
    'backlink', 'graph', 'canvas', 'tag-pane', 'search', 'file-explorer',
    'page-preview', 'outline', 'command-palette',
  ], null, 2));

  writeFileSync(join(obsidianDir, 'community-plugins.json'), JSON.stringify([
    'dataview',
  ], null, 2));
}

export async function initTopic(topic, vaultPath = vaultRoot()) {
  ensureVault(vaultPath);

  const topicPath = join(vaultPath, topic);

  if (existsSync(topicPath)) {
    throw new Error(`Topic "${topic}" already exists at ${topicPath}`);
  }

  const dirs = [
    'raw/articles', 'raw/papers', 'raw/repos',
    'raw/images', 'raw/transcripts', 'raw/datasets',
    'articles', 'index',
    'visuals/charts', 'visuals/slides', 'visuals/canvas',
  ];

  for (const dir of dirs) {
    mkdirSync(join(topicPath, dir), { recursive: true });
  }

  const meta = {
    topic,
    created: new Date().toISOString(),
    lastCompiled: null,
    compileState: null,
    failedSources: [],
  };
  writeFileSync(join(topicPath, 'kb.meta.json'), JSON.stringify(meta, null, 2) + '\n');

  const now = new Date().toISOString().split('T')[0];

  writeFileSync(join(topicPath, 'index', '_master.md'),
    `---\ntitle: Master Index\nupdated: ${now}\n---\n\n# ${topic} — Master Index\n\nNo articles yet. Run \`kb compile ${topic}\` after ingesting sources.\n`);

  writeFileSync(join(topicPath, 'index', '_sources.md'),
    `---\ntitle: Source Registry\nupdated: ${now}\n---\n\n# ${topic} — Sources\n\nNo sources ingested yet. Run \`kb ingest ${topic} <source>\` to add sources.\n`);

  writeFileSync(join(topicPath, 'index', '_concepts.md'),
    `---\ntitle: Concept Map\nupdated: ${now}\n---\n\n# ${topic} — Concepts\n\nNo concepts extracted yet. Run \`kb compile ${topic}\` after ingesting sources.\n`);

  writeFileSync(join(topicPath, 'index', '_stats.md'),
    `---\ntitle: Statistics\nupdated: ${now}\n---\n\n# ${topic} — Stats\n\n- Sources: 0\n- Articles: 0\n- Concepts: 0\n- Last compiled: never\n`);

  return topicPath;
}

export function makeInitCommand() {
  return new Command('init')
    .description('Create a new knowledge base')
    .argument('<topic>', 'Topic name for the knowledge base')
    .action(async (topic) => {
      const path = await initTopic(topic);
      console.log(`Created knowledge base "${topic}" at ${path}`);
    });
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/commands/init.test.js
```

Expected: All 4 tests PASS.

- [ ] **Step 5: Write the failing test for list command**

Create `tests/commands/list.test.js`:

```javascript
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('list command', () => {
  let tempVault;

  beforeEach(() => {
    tempVault = join(tmpdir(), `kb-vault-test-${Date.now()}`);
    mkdirSync(tempVault, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempVault, { recursive: true, force: true });
  });

  it('returns empty array when no topics exist', async () => {
    const { listTopics } = await import('../../src/commands/list.js');
    const topics = await listTopics(tempVault);
    assert.deepEqual(topics, []);
  });

  it('returns topic info for existing knowledge bases', async () => {
    const { initTopic } = await import('../../src/commands/init.js');
    const { listTopics } = await import('../../src/commands/list.js');

    await initTopic('ai-research', tempVault);
    await initTopic('security', tempVault);

    writeFileSync(join(tempVault, 'ai-research', 'raw', 'articles', 'test.md'), '# Test');
    writeFileSync(join(tempVault, 'ai-research', 'articles', 'concept.md'), '# Concept');

    const topics = await listTopics(tempVault);
    assert.equal(topics.length, 2);

    const aiTopic = topics.find(t => t.topic === 'ai-research');
    assert.ok(aiTopic);
    assert.equal(aiTopic.sourceCount, 1);
    assert.equal(aiTopic.articleCount, 1);
  });
});
```

- [ ] **Step 6: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/commands/list.test.js
```

Expected: FAIL.

- [ ] **Step 7: Implement list command**

Create `src/commands/list.js`:

```javascript
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Command } from 'commander';
import { vaultRoot } from '../paths.js';

function countFiles(dir) {
  if (!existsSync(dir)) return 0;
  let count = 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile()) count++;
    if (entry.isDirectory()) count += countFiles(join(dir, entry.name));
  }
  return count;
}

export async function listTopics(vaultPath = vaultRoot()) {
  if (!existsSync(vaultPath)) return [];

  const entries = readdirSync(vaultPath, { withFileTypes: true });
  const topics = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;

    const topicPath = join(vaultPath, entry.name);
    const metaPath = join(topicPath, 'kb.meta.json');
    if (!existsSync(metaPath)) continue;

    const meta = JSON.parse(readFileSync(metaPath, 'utf-8'));
    const sourceCount = countFiles(join(topicPath, 'raw'));
    const articleCount = countFiles(join(topicPath, 'articles'));

    topics.push({
      topic: meta.topic,
      created: meta.created,
      lastCompiled: meta.lastCompiled,
      sourceCount,
      articleCount,
    });
  }

  return topics;
}

export function makeListCommand() {
  return new Command('list')
    .description('List all knowledge bases')
    .action(async () => {
      const topics = await listTopics();
      if (topics.length === 0) {
        console.log('No knowledge bases found. Run `kb init <topic>` to create one.');
        return;
      }
      console.log('\nKnowledge Bases:\n');
      for (const t of topics) {
        const compiled = t.lastCompiled ? new Date(t.lastCompiled).toLocaleDateString() : 'never';
        console.log(`  ${t.topic}`);
        console.log(`    Sources: ${t.sourceCount}  Articles: ${t.articleCount}  Last compiled: ${compiled}`);
        console.log();
      }
    });
}
```

- [ ] **Step 8: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/commands/list.test.js
```

Expected: All 2 tests PASS.

- [ ] **Step 9: Register commands in cli.js**

Update `src/cli.js` — add imports and registrations for init and list commands.

- [ ] **Step 10: Commit**

```bash
cd ~/Knowledge
git add src/commands/init.js src/commands/list.js src/cli.js tests/commands/
git commit -m "feat: add kb init and kb list commands with Obsidian vault setup"
```

---

## Task 3: LLM Provider Abstraction

**Files:**
- Create: `src/llm/provider.js`
- Create: `src/llm/registry.js`
- Create: `src/llm/providers/anthropic.js`
- Create: `src/llm/providers/openai.js`
- Create: `src/llm/providers/ollama.js`
- Create: `tests/llm/provider.test.js`
- Create: `tests/llm/registry.test.js`

- [ ] **Step 1: Write the failing test for provider base class**

Create `tests/llm/provider.test.js`:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LLMProvider } from '../../src/llm/provider.js';

describe('LLMProvider base class', () => {
  it('throws on direct call to complete()', async () => {
    const provider = new LLMProvider();
    await assert.rejects(() => provider.complete('test'), { message: /not implemented/ });
  });

  it('throws on direct call to completeWithImages()', async () => {
    const provider = new LLMProvider();
    await assert.rejects(() => provider.completeWithImages('test', []), { message: /not implemented/ });
  });

  it('has maxContextTokens getter that throws', () => {
    const provider = new LLMProvider();
    assert.throws(() => provider.maxContextTokens, { message: /not implemented/ });
  });

  it('has name getter that throws', () => {
    const provider = new LLMProvider();
    assert.throws(() => provider.name, { message: /not implemented/ });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/llm/provider.test.js
```

Expected: FAIL.

- [ ] **Step 3: Implement provider base class**

Create `src/llm/provider.js`:

```javascript
export class LLMProvider {
  async complete(prompt, opts = {}) {
    throw new Error('complete() not implemented — subclass must override');
  }

  async completeWithImages(prompt, images, opts = {}) {
    throw new Error('completeWithImages() not implemented — subclass must override');
  }

  get maxContextTokens() {
    throw new Error('maxContextTokens not implemented — subclass must override');
  }

  get name() {
    throw new Error('name not implemented — subclass must override');
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/llm/provider.test.js
```

Expected: All 4 tests PASS.

- [ ] **Step 5: Write the failing test for registry**

Create `tests/llm/registry.test.js`:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ProviderRegistry } from '../../src/llm/registry.js';

describe('ProviderRegistry', () => {
  it('creates anthropic provider from config', () => {
    const config = {
      providers: { anthropic: { model: 'claude-sonnet-4-6', apiKeyEnv: 'ANTHROPIC_API_KEY' } }
    };
    const registry = new ProviderRegistry(config);
    assert.equal(registry.get('anthropic').name, 'anthropic');
  });

  it('creates openai provider from config', () => {
    const config = {
      providers: { openai: { model: 'gpt-4o', apiKeyEnv: 'OPENAI_API_KEY' } }
    };
    const registry = new ProviderRegistry(config);
    assert.equal(registry.get('openai').name, 'openai');
  });

  it('creates ollama provider from config', () => {
    const config = {
      providers: { ollama: { model: 'llama3', baseUrl: 'http://localhost:11434' } }
    };
    const registry = new ProviderRegistry(config);
    assert.equal(registry.get('ollama').name, 'ollama');
  });

  it('throws for unknown provider', () => {
    const registry = new ProviderRegistry({ providers: {} });
    assert.throws(() => registry.get('unknown'), { message: /Unknown provider/ });
  });

  it('getForRole resolves role to provider', () => {
    const config = {
      providers: { anthropic: { model: 'claude-sonnet-4-6', apiKeyEnv: 'ANTHROPIC_API_KEY' } },
      roles: { compile: 'anthropic' }
    };
    const registry = new ProviderRegistry(config);
    assert.equal(registry.getForRole('compile').name, 'anthropic');
  });
});
```

- [ ] **Step 6: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/llm/registry.test.js
```

Expected: FAIL.

- [ ] **Step 7: Implement all three providers and registry**

Create `src/llm/providers/anthropic.js`, `src/llm/providers/openai.js`, `src/llm/providers/ollama.js` — each extends `LLMProvider` with provider-specific API calls. Uses dynamic imports for SDK dependencies so they're only loaded when needed.

Create `src/llm/registry.js` — maps provider names to classes, instantiates from config, supports `get(name)` and `getForRole(role)`.

- [ ] **Step 8: Run tests to verify they pass**

```bash
cd ~/Knowledge && node --test tests/llm/provider.test.js tests/llm/registry.test.js
```

Expected: All 9 tests PASS.

- [ ] **Step 9: Commit**

```bash
cd ~/Knowledge
git add src/llm/ tests/llm/
git commit -m "feat: LLM provider abstraction with Anthropic, OpenAI, and Ollama"
```

---

## Task 4: Source Type Detection & Web Ingestor

**Files:**
- Create: `src/ingestors/detect.js`
- Create: `src/ingestors/web.js`
- Create: `src/commands/ingest.js`
- Modify: `src/cli.js` — register ingest command
- Create: `tests/ingestors/detect.test.js`
- Create: `tests/ingestors/web.test.js`

- [ ] **Step 1: Write the failing test for source type detection**

Create `tests/ingestors/detect.test.js`:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { detectSourceType } from '../../src/ingestors/detect.js';

describe('detectSourceType', () => {
  it('detects HTTP URLs as web articles', () => {
    assert.equal(detectSourceType('https://example.com/article'), 'web');
  });

  it('detects YouTube URLs', () => {
    assert.equal(detectSourceType('https://www.youtube.com/watch?v=abc123'), 'youtube');
    assert.equal(detectSourceType('https://youtu.be/abc123'), 'youtube');
  });

  it('detects GitHub repo URLs', () => {
    assert.equal(detectSourceType('https://github.com/user/repo'), 'repo');
  });

  it('detects PDF files by extension', () => {
    assert.equal(detectSourceType('/path/to/paper.pdf'), 'pdf');
  });

  it('detects image files by extension', () => {
    assert.equal(detectSourceType('/path/to/diagram.png'), 'image');
    assert.equal(detectSourceType('./photo.jpg'), 'image');
  });

  it('detects datasets by extension', () => {
    assert.equal(detectSourceType('/data/results.csv'), 'dataset');
    assert.equal(detectSourceType('./config.json'), 'dataset');
  });

  it('detects markdown files as web articles', () => {
    assert.equal(detectSourceType('/path/to/article.md'), 'web');
  });

  it('throws for unrecognized types', () => {
    assert.throws(() => detectSourceType('/path/to/file.xyz'), { message: /Cannot detect/ });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd ~/Knowledge && node --test tests/ingestors/detect.test.js
```

Expected: FAIL.

- [ ] **Step 3: Implement detect.js**

Create `src/ingestors/detect.js`:

```javascript
import { extname } from 'node:path';

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp']);
const DATASET_EXTS = new Set(['.csv', '.json', '.tsv', '.jsonl']);

export function detectSourceType(source) {
  const lower = source.toLowerCase();

  if (lower.includes('youtube.com/watch') || lower.includes('youtu.be/')) return 'youtube';
  if (lower.match(/github\.com\/[\w.-]+\/[\w.-]+/)) return 'repo';
  if (lower.startsWith('http://') || lower.startsWith('https://')) return 'web';

  const ext = extname(lower);
  if (ext === '.pdf') return 'pdf';
  if (IMAGE_EXTS.has(ext)) return 'image';
  if (DATASET_EXTS.has(ext)) return 'dataset';
  if (ext === '.md' || ext === '.markdown') return 'web';

  throw new Error(`Cannot detect source type for: ${source}`);
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd ~/Knowledge && node --test tests/ingestors/detect.test.js
```

Expected: All 8 tests PASS.

- [ ] **Step 5: Write the failing test for web ingestor**

Create `tests/ingestors/web.test.js` — tests ingesting a local markdown file into raw/articles/ and verifying frontmatter is added.

- [ ] **Step 6: Run test to verify it fails, then implement web ingestor**

Create `src/ingestors/web.js` — reads local .md files or fetches URLs, adds frontmatter (title, source, ingested date, type), writes to raw/articles/.

- [ ] **Step 7: Create the ingest command**

Create `src/commands/ingest.js` — routes to the correct ingestor based on `detectSourceType()`, supports `--batch` for bulk ingestion from a file.

- [ ] **Step 8: Register in cli.js, run all tests, commit**

```bash
cd ~/Knowledge
git add src/ingestors/ src/commands/ingest.js src/cli.js tests/ingestors/
git commit -m "feat: source type detection and web article ingestor"
```

---

## Task 5: PDF, Image, YouTube, Dataset, and Repo Ingestors

**Files:**
- Create: `src/ingestors/pdf.js`
- Create: `src/ingestors/image.js`
- Create: `src/ingestors/youtube.js`
- Create: `src/ingestors/dataset.js`
- Create: `src/ingestors/repo.js`
- Modify: `src/commands/ingest.js` — register all ingestors
- Create: `tests/ingestors/pdf.test.js`
- Create: `tests/ingestors/dataset.test.js`

- [ ] **Step 1: Install pdf-parse**

```bash
cd ~/Knowledge && npm install pdf-parse
```

- [ ] **Step 2: Write failing test for dataset ingestor**

Create `tests/ingestors/dataset.test.js` — tests CSV and JSON ingestion with preview tables.

- [ ] **Step 3: Run test to verify it fails, then implement all ingestors**

- `src/ingestors/pdf.js` — uses pdf-parse to extract text, copies original PDF alongside extracted .md
- `src/ingestors/image.js` — copies image to raw/images/, creates metadata .md with `![[image]]` embed
- `src/ingestors/youtube.js` — extracts video ID, fetches page for title, attempts caption extraction, writes transcript .md
- `src/ingestors/dataset.js` — copies original file, generates preview table (CSV) or JSON snippet, writes summary .md
- `src/ingestors/repo.js` — shallow clones repo to temp dir, extracts README + docs/*.md, writes combined .md, cleans up temp

- [ ] **Step 4: Register all ingestors in ingest command, add --batch support**

- [ ] **Step 5: Run all tests, commit**

```bash
cd ~/Knowledge
git add src/ingestors/ src/commands/ingest.js tests/ingestors/
git commit -m "feat: PDF, image, YouTube, dataset, and repo ingestors with batch support"
```

---

## Task 6: Compilation Pipeline

**Files:**
- Create: `src/compiler/pipeline.js`
- Create: `src/compiler/diff.js`
- Create: `src/compiler/summarize.js`
- Create: `src/compiler/concepts.js`
- Create: `src/compiler/articles.js`
- Create: `src/compiler/linker.js`
- Create: `src/prompts/summarize.js`
- Create: `src/prompts/concepts.js`
- Create: `src/prompts/articles.js`
- Create: `src/commands/compile.js`
- Modify: `src/cli.js` — register compile command
- Create: `tests/compiler/diff.test.js`
- Create: `tests/compiler/linker.test.js`

- [ ] **Step 1: Write the failing test for diff detection**

Create `tests/compiler/diff.test.js`:

```javascript
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('diff detection', () => {
  let tempTopic;

  beforeEach(() => {
    tempTopic = join(tmpdir(), `kb-diff-test-${Date.now()}`);
    mkdirSync(join(tempTopic, 'raw', 'articles'), { recursive: true });
    mkdirSync(join(tempTopic, 'index'), { recursive: true });
  });

  afterEach(() => {
    rmSync(tempTopic, { recursive: true, force: true });
  });

  it('detects all files as new when _sources.md is empty', async () => {
    const { detectChanges } = await import('../../src/compiler/diff.js');
    writeFileSync(join(tempTopic, 'raw', 'articles', 'test1.md'), '# Test 1');
    writeFileSync(join(tempTopic, 'raw', 'articles', 'test2.md'), '# Test 2');
    writeFileSync(join(tempTopic, 'index', '_sources.md'), '---\ntitle: Sources\n---\n\n# Sources\n\nNo sources yet.\n');

    const changes = await detectChanges(tempTopic);
    assert.equal(changes.newFiles.length, 2);
  });

  it('detects only new files when some are registered', async () => {
    const { detectChanges } = await import('../../src/compiler/diff.js');
    writeFileSync(join(tempTopic, 'raw', 'articles', 'test1.md'), '# Test 1');
    writeFileSync(join(tempTopic, 'raw', 'articles', 'test2.md'), '# Test 2');
    writeFileSync(join(tempTopic, 'index', '_sources.md'), '---\ntitle: Sources\n---\n\n# Sources\n\n- raw/articles/test1.md\n');

    const changes = await detectChanges(tempTopic);
    assert.equal(changes.newFiles.length, 1);
    assert.ok(changes.newFiles[0].endsWith('test2.md'));
  });
});
```

- [ ] **Step 2: Run test to verify it fails, then implement diff.js**

Create `src/compiler/diff.js` — walks raw/ recursively collecting .md files, parses _sources.md for registered paths, returns `{ newFiles, changedFiles, allFiles }`.

- [ ] **Step 3: Create prompt templates**

Create `src/prompts/summarize.js`, `src/prompts/concepts.js`, `src/prompts/articles.js` — each exports a function that builds a structured prompt with clear JSON output format instructions.

- [ ] **Step 4: Implement compiler steps**

- `src/compiler/summarize.js` — reads each new source file, sends to LLM with summarize prompt, parses JSON response into `{ path, summary, concepts, tags }`
- `src/compiler/concepts.js` — collects all new concepts from summaries, merges with existing concepts via LLM, returns unified concept list with parent/child relationships
- `src/compiler/articles.js` — for each concept, finds relevant sources, sends to LLM with article prompt, writes .md file to articles/ with frontmatter and backlinks

- [ ] **Step 5: Write the failing test for linker**

Create `tests/compiler/linker.test.js` — tests rebuilding _master.md and _sources.md from articles and raw files.

- [ ] **Step 6: Run test to verify it fails, then implement linker.js**

Create `src/compiler/linker.js` — reads all articles' frontmatter, rebuilds `_master.md`, `_sources.md`, `_concepts.md`, and `_stats.md`.

- [ ] **Step 7: Implement pipeline orchestrator**

Create `src/compiler/pipeline.js` — runs all 5 steps in sequence, writing output to disk between each step. Updates `kb.meta.json` with lastCompiled timestamp.

- [ ] **Step 8: Create compile command, register in cli.js**

Create `src/commands/compile.js` — loads config, gets provider for 'compile' role, calls `compile()` with `--full` option support.

- [ ] **Step 9: Run all tests, commit**

```bash
cd ~/Knowledge
git add src/compiler/ src/prompts/ src/commands/compile.js src/cli.js tests/compiler/
git commit -m "feat: 5-step compilation pipeline with diff, summarize, concepts, articles, and linker"
```

---

## Task 7: Q&A Command & Renderers

**Files:**
- Create: `src/commands/query.js`
- Create: `src/prompts/query.js`
- Create: `src/renderers/markdown.js`
- Create: `src/renderers/marp.js`
- Create: `src/renderers/mermaid.js`
- Create: `src/renderers/canvas.js`
- Create: `src/renderers/matplotlib.js`
- Modify: `src/cli.js`
- Create: `tests/renderers/markdown.test.js`
- Create: `tests/renderers/marp.test.js`
- Create: `tests/renderers/canvas.test.js`

- [ ] **Step 1: Create query prompt template**

Create `src/prompts/query.js` — builds prompt with index content, relevant articles, and format-specific output instructions (terminal, save, slides, chart, canvas).

- [ ] **Step 2: Write failing tests for renderers**

Create `tests/renderers/markdown.test.js` — tests saving content to articles/ with slugified filename.
Create `tests/renderers/marp.test.js` — tests saving Marp deck to visuals/slides/ with marp frontmatter.
Create `tests/renderers/canvas.test.js` — tests saving valid .canvas JSON to visuals/canvas/.

- [ ] **Step 3: Run tests to verify they fail, then implement all renderers**

- `src/renderers/markdown.js` — writes .md to articles/
- `src/renderers/marp.js` — ensures `marp: true` frontmatter, writes to visuals/slides/
- `src/renderers/mermaid.js` — wraps content and delegates to markdown renderer
- `src/renderers/canvas.js` — parses JSON (handling code block wrapping), writes .canvas to visuals/canvas/
- `src/renderers/matplotlib.js` — writes Python script to temp file with output path variable, uses `execFileSync('python3', [scriptPath])` to run it, creates companion .md with `![[chart.png]]` embed

- [ ] **Step 4: Implement query command**

Create `src/commands/query.js` — loads index + articles, builds prompt for selected format, calls LLM, routes response to correct renderer. Supports `--save`, `--slides`, `--chart`, `--canvas` flags.

- [ ] **Step 5: Register in cli.js, run all tests, commit**

```bash
cd ~/Knowledge
git add src/commands/query.js src/prompts/query.js src/renderers/ src/cli.js tests/renderers/
git commit -m "feat: Q&A command with markdown, Marp, matplotlib, Mermaid, and Canvas renderers"
```

---

## Task 8: Lint, Suggest, Watch, Search, and Config Commands

**Files:**
- Create: `src/commands/lint.js`
- Create: `src/commands/suggest.js`
- Create: `src/commands/watch.js`
- Create: `src/commands/search.js`
- Create: `src/commands/config-cmd.js`
- Create: `src/prompts/lint.js`
- Modify: `src/cli.js`

- [ ] **Step 1: Install chokidar**

```bash
cd ~/Knowledge && npm install chokidar
```

- [ ] **Step 2: Create lint prompt and implement lint command**

Create `src/prompts/lint.js` — prompt that checks for broken backlinks, missing tags, inconsistent terminology, orphaned articles, missing sources, factual issues. Returns JSON with issues array.

Create `src/commands/lint.js` — loads index + article samples, sends to LLM with lint prompt, displays issues. `--fix` flag placeholder for future auto-fix.

- [ ] **Step 3: Implement suggest command**

Create `src/commands/suggest.js` — loads index, asks LLM to suggest new articles, missing connections, questions to investigate, and external sources to ingest.

- [ ] **Step 4: Implement watch command**

Create `src/commands/watch.js` — uses chokidar to watch raw/ for new/changed files, debounces and triggers `compile()` on changes. Handles concurrent compile prevention.

- [ ] **Step 5: Implement search command**

Create `src/commands/search.js` — recursive full-text search across articles/ and raw/. Shows matching file paths with line numbers and context. `--serve` placeholder for future web UI.

- [ ] **Step 6: Implement config command**

Create `src/commands/config-cmd.js` — view full config, get nested keys via dot notation, set values. Reads/writes `kb.config.json`.

- [ ] **Step 7: Register all commands in cli.js**

Update `src/cli.js` with all 10 commands: init, list, config, ingest, compile, query, lint, suggest, watch, search.

- [ ] **Step 8: Run all tests, commit**

```bash
cd ~/Knowledge
git add src/commands/ src/prompts/lint.js src/cli.js
git commit -m "feat: lint, suggest, watch, search, and config commands"
```

---

## Task 9: npm Link & End-to-End Smoke Test

**Files:**
- Create: `vault/.gitkeep`
- Create: `kb.config.json`

- [ ] **Step 1: Create default kb.config.json**

Write the default config using `saveConfig(configPath, DEFAULT_CONFIG)`.

- [ ] **Step 2: Create vault/.gitkeep**

```bash
touch ~/Knowledge/vault/.gitkeep
```

- [ ] **Step 3: Link the CLI globally**

```bash
cd ~/Knowledge && npm link
```

- [ ] **Step 4: End-to-end smoke test**

```bash
kb --version
kb init demo-topic
kb list
kb config
kb search demo-topic "test"
kb config defaultProvider
rm -rf ~/Knowledge/vault/demo-topic
```

- [ ] **Step 5: Commit**

```bash
cd ~/Knowledge
git add kb.config.json vault/.gitkeep
git commit -m "feat: initial kb.config.json, vault directory, npm link ready"
```

- [ ] **Step 6: Open Obsidian and add vault**

Open Obsidian, add `~/Knowledge/vault/` as a new vault. Verify the folder structure renders correctly.
