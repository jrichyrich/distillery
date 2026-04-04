# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

`kb` (codename: **distillery**) is a Node.js CLI tool that manages LLM-compiled knowledge bases viewed in Obsidian. Raw sources (articles, PDFs, repos, images, YouTube, datasets) are ingested into `raw/`, compiled by an LLM into interconnected wiki articles in `articles/`, and queried with output to multiple formats. The Obsidian vault lives at `<project-root>/vault/`.

## Commands

```bash
# Run all tests
node --test tests/**/*.test.js

# Run a single test file
node --test tests/compiler/diff.test.js

# Run the CLI locally
node bin/kb --help
node bin/kb init my-topic
node bin/kb list

# After npm link, use globally
kb init my-topic
kb ingest my-topic https://example.com/article
kb compile my-topic
kb query my-topic "What are the key concepts?"
```

## Architecture

### Module System
ES modules throughout (`"type": "module"` in package.json). Node v20+ required. `pdf-parse` is a CJS package — imported via `createRequire` in `src/ingestors/pdf.js`.

### Path Convention
All vault paths are derived from `src/paths.js`, which resolves relative to the project root (wherever the repo is cloned). Every command resolves topic paths through `topicDir(topic)`, `rawDir(topic)`, etc. Never construct vault paths manually.

### Command Pattern
Each command in `src/commands/` exports a `make*Command()` factory that returns a Commander `Command` instance. `src/cli.js` imports all factories and registers them. Commands that need LLM access follow this pattern: load config → create `ProviderRegistry` → call `registry.getForRole('compile'|'query'|'lint')`.

### LLM Provider Abstraction
`src/llm/provider.js` defines the base `LLMProvider` class. Three providers extend it (anthropic, openai, ollama). `ProviderRegistry` in `src/llm/registry.js` maps provider names to classes and supports role-based selection — `kb.config.json` maps roles (compile, query, summarize, lint) to provider names so different tasks can use different models. Providers use dynamic imports for their SDKs so they're only loaded when actually used.

### Ingestor Registry
`src/ingestors/detect.js` auto-detects source type from URL patterns or file extensions. `src/commands/ingest.js` maps type strings to ingestor functions via a plain object (`INGESTORS`). Each ingestor takes `(source, rawDir)` and returns `{ path, type, title }`. All ingestors add YAML frontmatter to their output.

### Compilation Pipeline
`src/compiler/pipeline.js` orchestrates 5 sequential steps — each writes to disk before the next starts:
1. `diff.js` — find new/changed files in `raw/` vs `index/_sources.md`
2. `summarize.js` — LLM summarizes each source → JSON `{ summary, concepts, tags }`
3. `concepts.js` — LLM merges new concepts with existing taxonomy
4. `articles.js` — LLM writes wiki articles with `[[backlinks]]` for each concept
5. `linker.js` — rebuilds all four index files (`_master.md`, `_sources.md`, `_concepts.md`, `_stats.md`)

### Renderers
`src/renderers/` has five output formats. Each takes `(content, question, topicPath)` and writes to the appropriate subdirectory. `matplotlib.js` shells out to `python3` via `execFileSync`. `mermaid.js` delegates to `markdown.js`. `canvas.js` writes Obsidian `.canvas` JSON format.

### Topic Directory Layout
```
vault/<topic>/
  raw/articles/, papers/, repos/, images/, transcripts/, datasets/
  articles/          ← LLM-written, with [[backlinks]] and YAML frontmatter
  index/_master.md, _sources.md, _concepts.md, _stats.md  ← auto-maintained
  visuals/charts/, slides/, canvas/
  kb.meta.json       ← { topic, created, lastCompiled, compileState, failedSources }
```

### Config
`kb.config.json` at project root. API keys come from environment variables (referenced by `apiKeyEnv` field in provider config), never stored in the config file. `src/config.js` returns `DEFAULT_CONFIG` when the file doesn't exist.

## Testing
Tests use Node's built-in test runner (`node:test`). All tests use temp directories via `tmpdir()` for isolation — no test touches the real vault. LLM-calling code is not unit tested (integration/e2e only). Test files mirror source structure: `tests/commands/`, `tests/llm/`, `tests/ingestors/`, `tests/compiler/`, `tests/renderers/`.
