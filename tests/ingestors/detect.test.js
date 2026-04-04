import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { detectSourceType } from '../../src/ingestors/detect.js';

describe('detectSourceType', () => {
  describe('YouTube URLs', () => {
    it('detects youtube.com/watch URLs', () => {
      assert.equal(detectSourceType('https://www.youtube.com/watch?v=abc123'), 'youtube');
    });

    it('detects youtu.be/ URLs', () => {
      assert.equal(detectSourceType('https://youtu.be/abc123'), 'youtube');
    });

    it('detects youtube.com/watch without www', () => {
      assert.equal(detectSourceType('https://youtube.com/watch?v=xyz'), 'youtube');
    });
  });

  describe('GitHub URLs', () => {
    it('detects github.com/user/repo', () => {
      assert.equal(detectSourceType('https://github.com/user/repo'), 'repo');
    });

    it('detects github.com/user/repo with subpath', () => {
      assert.equal(detectSourceType('https://github.com/user/repo/tree/main'), 'repo');
    });
  });

  describe('Generic web URLs', () => {
    it('detects http URLs as web', () => {
      assert.equal(detectSourceType('http://example.com/article'), 'web');
    });

    it('detects https URLs as web', () => {
      assert.equal(detectSourceType('https://blog.example.com/post'), 'web');
    });
  });

  describe('File extensions', () => {
    it('detects .pdf as pdf', () => {
      assert.equal(detectSourceType('paper.pdf'), 'pdf');
    });

    it('detects .PDF (case insensitive) as pdf', () => {
      assert.equal(detectSourceType('paper.PDF'), 'pdf');
    });

    it('detects image extensions', () => {
      for (const ext of ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp']) {
        assert.equal(detectSourceType(`photo${ext}`), 'image', `Failed for ${ext}`);
      }
    });

    it('detects dataset extensions', () => {
      for (const ext of ['.csv', '.json', '.tsv', '.jsonl']) {
        assert.equal(detectSourceType(`data${ext}`), 'dataset', `Failed for ${ext}`);
      }
    });

    it('detects .md as web', () => {
      assert.equal(detectSourceType('notes.md'), 'web');
    });

    it('detects .markdown as web', () => {
      assert.equal(detectSourceType('notes.markdown'), 'web');
    });
  });

  describe('Unknown types', () => {
    it('throws for unknown extensions', () => {
      assert.throws(
        () => detectSourceType('file.xyz'),
        { message: /Cannot detect source type for: file\.xyz/ }
      );
    });

    it('throws for extensionless files', () => {
      assert.throws(
        () => detectSourceType('somefile'),
        { message: /Cannot detect source type/ }
      );
    });
  });
});
