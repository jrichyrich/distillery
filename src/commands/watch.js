import { join } from 'node:path';
import { Command } from 'commander';
import { loadConfig } from '../config.js';
import { projectRoot, topicDir, rawDir } from '../paths.js';
import { ProviderRegistry } from '../llm/registry.js';
import { compile } from '../compiler/pipeline.js';
import chokidar from 'chokidar';

export function makeWatchCommand() {
  return new Command('watch')
    .argument('<topic>', 'Topic to watch for changes')
    .description('Watch raw/ directory and auto-compile on changes')
    .action(async (topic) => {
      try {
        const configPath = join(projectRoot(), 'kb.config.json');
        const config = loadConfig(configPath);
        const registry = new ProviderRegistry(config);
        const provider = registry.getForRole('compile');
        const topicPath = topicDir(topic);
        const watchPath = rawDir(topic);

        let compiling = false;
        let pending = false;

        async function runCompile() {
          if (compiling) {
            pending = true;
            return;
          }
          compiling = true;
          try {
            console.log(`\n[watch] Compiling "${topic}"...`);
            await compile(topicPath, provider, {});
            console.log('[watch] Compilation finished.');
          } catch (err) {
            console.error(`[watch] Compilation error: ${err.message}`);
          } finally {
            compiling = false;
            if (pending) {
              pending = false;
              runCompile();
            }
          }
        }

        const watcher = chokidar.watch(watchPath, {
          ignoreInitial: true,
          awaitWriteFinish: {
            stabilityThreshold: 2000,
            pollInterval: 100,
          },
        });

        watcher.on('add', (filePath) => {
          console.log(`[watch] New file: ${filePath}`);
          runCompile();
        });

        watcher.on('change', (filePath) => {
          console.log(`[watch] Changed: ${filePath}`);
          runCompile();
        });

        console.log(`Watching ${watchPath} for changes... (Ctrl+C to stop)`);

        // Graceful shutdown
        process.on('SIGINT', () => {
          console.log('\n[watch] Stopping watcher...');
          watcher.close().then(() => {
            console.log('[watch] Watcher closed.');
            process.exit(0);
          });
        });
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
