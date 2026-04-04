#!/bin/bash
# Backup distillery vault to iCloud Drive
# Runs daily via launchd (com.distillery.vault-backup)

VAULT_DIR="$HOME/Documents/Github_Personal/distillery/vault"
BACKUP_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Backups/distillery-vault"

mkdir -p "$BACKUP_DIR"

rsync -av --delete \
  --exclude='.obsidian/workspace.json' \
  --exclude='.obsidian/workspace-mobile.json' \
  "$VAULT_DIR/" \
  "$BACKUP_DIR/"

echo "[$(date)] Backup complete"
