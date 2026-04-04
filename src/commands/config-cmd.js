import { join } from 'node:path';
import { Command } from 'commander';
import { loadConfig, saveConfig } from '../config.js';
import { projectRoot } from '../paths.js';

/**
 * Navigate an object using dot-notation path.
 * Returns undefined if any segment is missing.
 */
function getByPath(obj, path) {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = current[key];
  }
  return current;
}

/**
 * Set a value at a dot-notation path, creating intermediate objects as needed.
 */
function setByPath(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] == null || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
}

/**
 * Attempt to parse a string value into its natural type.
 */
function parseValue(raw) {
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  if (raw === 'null') return null;
  const num = Number(raw);
  if (!Number.isNaN(num) && raw.trim() !== '') return num;
  return raw;
}

export function makeConfigCommand() {
  return new Command('config')
    .argument('[key]', 'Config key (dot notation, e.g. providers.anthropic.model)')
    .argument('[value]', 'Value to set')
    .description('View or update configuration')
    .action((key, value) => {
      try {
        const configPath = join(projectRoot(), 'kb.config.json');
        const config = loadConfig(configPath);

        // No args: print full config
        if (!key) {
          console.log(JSON.stringify(config, null, 2));
          return;
        }

        // Key only: print that value
        if (value === undefined) {
          const result = getByPath(config, key);
          if (result === undefined) {
            console.error(`Key "${key}" not found in config.`);
            process.exitCode = 1;
            return;
          }
          if (typeof result === 'object') {
            console.log(JSON.stringify(result, null, 2));
          } else {
            console.log(result);
          }
          return;
        }

        // Key + value: set and save
        setByPath(config, key, parseValue(value));
        saveConfig(configPath, config);
        console.log(`Set ${key} = ${value}`);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exitCode = 1;
      }
    });
}
