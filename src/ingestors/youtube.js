import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Build YAML frontmatter string for YouTube transcript.
 */
function buildFrontmatter({ title, source, videoId, type }) {
  const ingested = new Date().toISOString();
  return [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `source: "${source}"`,
    `video_id: "${videoId}"`,
    `ingested: "${ingested}"`,
    `type: ${type}`,
    '---',
    '',
  ].join('\n');
}

/**
 * Extract video ID from a YouTube URL.
 */
function extractVideoId(url) {
  // youtube.com/watch?v=ID
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];

  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  throw new Error(`Could not extract video ID from: ${url}`);
}

/**
 * Strip XML/HTML tags from text.
 */
function stripTags(xml) {
  return xml
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Ingest a YouTube video transcript into the knowledge base.
 *
 * @param {string} source - YouTube URL
 * @param {string} rawDir - path to the topic's raw directory
 * @returns {Promise<{path: string, type: 'youtube', title: string}>}
 */
export async function ingestYoutube(source, rawDir) {
  const transcriptsDir = join(rawDir, 'transcripts');
  if (!existsSync(transcriptsDir)) {
    mkdirSync(transcriptsDir, { recursive: true });
  }

  const videoId = extractVideoId(source);

  // Fetch YouTube page to get title and caption tracks
  let title = 'Untitled Video';
  let transcript = '[No transcript available]';

  try {
    const res = await fetch(source);
    if (res.ok) {
      const html = await res.text();

      // Extract title
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch) {
        title = titleMatch[1]
          .replace(/ - YouTube$/, '')
          .trim();
      }

      // Try to extract captions
      try {
        const captionMatch = html.match(/"captionTracks":\s*(\[[\s\S]*?\])/);
        if (captionMatch) {
          const tracks = JSON.parse(captionMatch[1]);
          if (tracks.length > 0 && tracks[0].baseUrl) {
            const captionRes = await fetch(tracks[0].baseUrl);
            if (captionRes.ok) {
              const captionXml = await captionRes.text();
              transcript = stripTags(captionXml);
            }
          }
        }
      } catch {
        // Caption extraction failed, keep fallback
      }
    }
  } catch {
    // Fetch failed, keep defaults
  }

  const frontmatter = buildFrontmatter({ title, source, videoId, type: 'youtube' });
  const outputPath = join(transcriptsDir, `${videoId}.md`);

  writeFileSync(outputPath, frontmatter + '\n' + transcript, 'utf-8');

  return { path: outputPath, type: 'youtube', title };
}
