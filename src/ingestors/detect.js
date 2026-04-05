import { extname } from 'node:path';

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp']);
const DATASET_EXTS = new Set(['.csv', '.json', '.tsv', '.jsonl']);
const MARKDOWN_EXTS = new Set(['.md', '.markdown']);

/**
 * Auto-detect the source type from a URL or file path.
 * @param {string} source - URL or local file path
 * @returns {'web'|'youtube'|'repo'|'pdf'|'image'|'dataset'}
 */
export function detectSourceType(source) {
  // URL-based detection
  if (/^https?:\/\//i.test(source)) {
    let url;
    try {
      url = new URL(source);
    } catch {
      return 'web';
    }

    const host = url.hostname.replace(/^www\./, '');

    // YouTube
    if (host === 'youtube.com' && url.pathname.startsWith('/watch')) return 'youtube';
    if (host === 'youtu.be') return 'youtube';

    // GitHub repo
    if (host === 'github.com') {
      // Match github.com/user/repo (at least two path segments)
      const segments = url.pathname.split('/').filter(Boolean);
      if (segments.length >= 2) return 'repo';
    }

    // Any other URL
    return 'web';
  }

  // File extension-based detection
  const ext = extname(source).toLowerCase();

  if (ext === '.pdf') return 'pdf';
  if (ext === '.epub') return 'epub';
  if (IMAGE_EXTS.has(ext)) return 'image';
  if (DATASET_EXTS.has(ext)) return 'dataset';
  if (MARKDOWN_EXTS.has(ext)) return 'web';

  throw new Error(`Cannot detect source type for: ${source}`);
}
