# LLM Knowledge Base System — Design Spec

**Date:** 2026-04-03
**Status:** Approved
**Approach:** Node.js CLI application

## Overview

A CLI tool (`kb`) that manages LLM-compiled knowledge bases viewed in Obsidian. Raw source material (articles, papers, repos, images, YouTube transcripts, datasets) is ingested, then an LLM incrementally compiles a wiki of interconnected markdown articles. The wiki is queried, linted, and enhanced over time — every interaction compounds the knowledge base.

Inspired by Andrej Karpathy's approach to LLM knowledge bases.

## Directory Structure

```
~/Knowledge/
├── package.json              # CLI app, dependencies
├── kb.config.json            # Global config (LLM providers, roles)
├── bin/kb                    # CLI entry point
├── src/
│   ├── commands/             # init, ingest, compile, query, lint, watch, search
│   ├── llm/                  # Provider abstraction
│   │   ├── provider.js       # Base interface
│   │   └── providers/
│   │       ├── anthropic.js
│   │       ├── openai.js
│   │       └── ollama.js
│   ├── ingestors/            # One per source type
│   │   ├── web.js            # Web articles → markdown
│   │   ├── pdf.js            # PDF → markdown
│   │   ├── repo.js           # Git repo → docs extraction
│   │   ├── image.js          # Images → local copy + metadata
│   │   ├── youtube.js        # YouTube → transcript
│   │   └── dataset.js        # CSV/JSON → markdown summary
│   ├── renderers/            # Output formats
│   │   ├── markdown.js
│   │   ├── marp.js
│   │   ├── matplotlib.js     # Shells out to Python
│   │   ├── mermaid.js
│   │   └── canvas.js         # Obsidian .canvas format
│   └── utils/
│
└── vault/                    # Obsidian vault root
    ├── .obsidian/            # Obsidian config, plugins, themes
    └── <topic>/              # One folder per knowledge base
        ├── raw/              # Unprocessed source material
        │   ├── articles/     # Web clips (.md)
        │   ├── papers/       # PDFs + extracted .md
        │   ├── repos/        # Cloned repo docs
        │   ├── images/       # Source images/diagrams
        │   ├── transcripts/  # YouTube transcripts
        │   └── datasets/     # CSV, JSON files
        ├── articles/         # LLM-written concept articles (.md)
        ├── index/            # Auto-maintained by LLM
        │   ├── _master.md    # Full index of all articles
        │   ├── _sources.md   # Registry of all raw sources + summaries
        │   ├── _concepts.md  # Concept map / taxonomy
        │   └── _stats.md     # KB statistics dashboard
        ├── visuals/          # Charts, slides, canvas maps
        │   ├── charts/       # matplotlib PNGs
        │   ├── slides/       # Marp decks
        │   └── canvas/       # Obsidian .canvas files
        └── kb.meta.json      # KB config & compile state
```

## CLI Commands

### Setup
- `kb init <topic>` — Create a new knowledge base with full directory structure
- `kb list` — List all knowledge bases and their stats (source count, article count, last compiled)
- `kb config` — View/set global config (default LLM provider, API keys, etc.)

### Ingestion
- `kb ingest <topic> <source>` — Ingest a source (URL, PDF path, repo URL, YouTube URL, file path)
- `kb ingest <topic> --batch <file>` — Bulk ingest from a list of URLs/paths
- Auto-detects source type. Downloads images locally. Converts PDFs to markdown. YouTube → transcript extraction. Repos → README + docs extraction.

### Compilation
- `kb compile <topic>` — Incremental compile: process new/changed sources into wiki articles
- `kb compile <topic> --full` — Full recompile: rebuild entire wiki from all sources

### Q&A
- `kb query <topic> "question"` — Ask a question, get answer in terminal
- `kb query <topic> "question" --save` — Save answer as .md in articles/ (knowledge compounds)
- `kb query <topic> "question" --slides` — Render answer as Marp slide deck in visuals/slides/
- `kb query <topic> "question" --chart` — Generate matplotlib visualization in visuals/charts/
- `kb query <topic> "question" --canvas` — Generate Obsidian canvas concept map in visuals/canvas/

### Visualization guidance
- Use `--canvas` for conceptual and exploratory topics where the goal is to map ideas and relationships.
- Use `--slides` for narrative summaries, walkthroughs, and topic recaps.
- Use `--chart` for quantitative comparisons, counts, and time-series trends grounded in source data.
- Use Mermaid inside saved markdown answers when the topic calls for a compact process flow or decision tree.

### Maintenance
- `kb lint <topic>` — Health check: find inconsistencies, broken links, missing data
- `kb lint <topic> --fix` — Auto-fix issues (with web search for missing data)
- `kb suggest <topic>` — Suggest new articles, connections, questions to explore

### Watch
- `kb watch <topic>` — Watch raw/ for new files, auto-compile on changes

### Search
- `kb search <topic> "query"` — Full-text search across wiki (CLI output)
- `kb search <topic> --serve` — Launch local web UI search engine

## Compilation Pipeline

The compilation pipeline runs in 5 sequential steps. Each step writes its output to disk before the next starts, making the process resumable if interrupted.

1. **Diff detection** — Compare raw/ against `index/_sources.md` to find new/changed files
2. **Summarize** — LLM reads each new source, generates summary + extracted concepts
3. **Concept extraction** — Identify key concepts, merge with existing concept list in `index/_concepts.md`
4. **Article generation** — Write/update wiki articles for new or enriched concepts. LLM sees existing wiki context to write articles that connect to what's already there.
5. **Link & index** — Update `[[backlinks]]`, rebuild `index/_master.md`, `index/_sources.md`, and `index/_stats.md`

## Q&A Flow

1. Read `index/_master.md` and `index/_concepts.md` to orient
2. Identify relevant articles and raw sources
3. Load related content into LLM context
4. Generate answer in requested format
5. Optionally file result back into `articles/` or `visuals/`

No vector DB needed at this scale — the index files + source summaries act as a lightweight retrieval layer.

## LLM Abstraction

### Provider Interface

```javascript
class LLMProvider {
  async complete(prompt, opts) { }
  async completeWithImages(prompt, images, opts) { }
  get maxContextTokens() { }
  get name() { }
}
```

### Built-in Providers
- **Anthropic** — Claude Sonnet, Opus, Haiku
- **OpenAI** — GPT-4o, o1, o3
- **Ollama** — Local models (fully offline capable)

### Configuration

```json
{
  "defaultProvider": "anthropic",
  "providers": {
    "anthropic": {
      "model": "claude-sonnet-4-6",
      "apiKeyEnv": "ANTHROPIC_API_KEY"
    },
    "openai": {
      "model": "gpt-4o",
      "apiKeyEnv": "OPENAI_API_KEY"
    },
    "ollama": {
      "model": "llama3",
      "baseUrl": "http://localhost:11434"
    }
  },
  "roles": {
    "compile": "anthropic",
    "query": "anthropic",
    "summarize": "anthropic",
    "lint": "openai"
  }
}
```

API keys are stored in environment variables, never in config files. Each KB can override global config via its own `kb.meta.json`. Role-based model assignment allows using expensive models where quality matters and cheaper ones for bulk work.

## Article Format Convention

All LLM-generated articles follow this format:

```markdown
---
title: Article Title
tags: [tag1, tag2, tag3]
sources: [raw/papers/source-file.md]
created: 2026-04-03
updated: 2026-04-03
confidence: high
---

# Article Title

Content with [[backlinks]] to related concepts.

## Key Concepts
- [[Related Concept]] — brief description

## Sources
- [[raw/papers/source-file|Source Title]]
```

- YAML frontmatter with title, tags, sources, dates, confidence level
- `[[backlinks]]` connect concepts — Obsidian renders these natively
- Mermaid diagrams inline where useful
- `confidence` field (high/medium/low) lets the LLM flag uncertain articles
- Dataview plugin can query across all articles by any frontmatter field

## Obsidian Setup

### Vault
Created at `~/Knowledge/vault/` and registered with Obsidian. Pre-seeded `.obsidian/` config.

### Required Plugins

**Core (built-in):**
- Backlinks — powers wiki cross-referencing
- Graph View — visualize connections between articles
- Canvas — spatial concept maps from Q&A
- Tags — frontmatter tag filtering

**Community:**
- Marp Slides — render Marp slide decks in Obsidian
- Dataview — query frontmatter across articles, power dynamic dashboards
- Obsidian Web Clipper — browser extension for ingesting web articles

## Error Handling

### Ingestion
- **Source unreachable** — log warning, skip, continue. Failed sources tracked in `kb.meta.json` for retry.
- **PDF parse failure** — fall back to raw text extraction. Store original PDF alongside partial .md.
- **YouTube no transcript** — log error, store URL-only reference in raw/.

### Compilation
- **LLM API failure** — retry with exponential backoff (3 attempts). On persistent failure, save progress and resume later.
- **Token limit exceeded** — chunk large sources, compile in batches, stitch results.
- **Interrupted** — each step writes to disk before the next starts. Resume picks up where it left off.

### Q&A
- **Context too large** — prioritize index files + most relevant articles. Summarize distant sources instead of including full text.
- **No relevant data** — say so clearly. Suggest ingesting more sources on the topic.

## Testing Strategy

**Framework:** Node.js built-in test runner (`node --test`) — zero dependencies.

- **Unit** — Ingestors, renderers, file utilities. Test with fixtures, no LLM calls.
- **Integration** — Full `kb init → ingest → compile` pipeline with a small test corpus and mocked LLM.
- **E2E** — Real LLM calls against a tiny KB. Verify article quality, backlinks work, index is correct.

## Dependencies (planned)

- `@anthropic-ai/sdk` — Anthropic API client
- `openai` — OpenAI API client
- `pdf-parse` — PDF text extraction
- `youtubei.js` or similar — YouTube transcript extraction
- `marked` — Markdown parsing/manipulation
- `chokidar` — File watching for `kb watch`
- `commander` — CLI framework
