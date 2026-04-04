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

// Register commands
import { makeInitCommand } from './commands/init.js';
import { makeListCommand } from './commands/list.js';
import { makeIngestCommand } from './commands/ingest.js';
import { makeCompileCommand } from './commands/compile.js';
import { makeQueryCommand } from './commands/query.js';
import { makeLintCommand } from './commands/lint.js';
import { makeSuggestCommand } from './commands/suggest.js';
import { makeWatchCommand } from './commands/watch.js';
import { makeSearchCommand } from './commands/search.js';
import { makeConfigCommand } from './commands/config-cmd.js';

program.addCommand(makeInitCommand());
program.addCommand(makeListCommand());
program.addCommand(makeIngestCommand());
program.addCommand(makeCompileCommand());
program.addCommand(makeQueryCommand());
program.addCommand(makeLintCommand());
program.addCommand(makeSuggestCommand());
program.addCommand(makeWatchCommand());
program.addCommand(makeSearchCommand());
program.addCommand(makeConfigCommand());

program.parse();
