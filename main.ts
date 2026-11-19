// Entry program for the make.fun bounty gta6-meme-x-01, "Post a GTA 6 meme on X".
//
// The entry itself is the X post: the meme picture (meme.png in this repository) plus the
// post's text. This program has exactly one job for the grader: copy POST.json, which
// names the post's address, from the repository root into the output directory, where
// the gate reads it. Nothing written here is judged; the house reads the post from X.
//
// When it runs outside the grading sandbox, MAKEFUN_BOT_DIR stands in for the
// repository mount (/bot) and MAKEFUN_OUTPUT_DIR for /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly on a malformed POST.json instead of handing the gate a file it
// would refuse anyway: it must be a JSON object whose one url is an X post
// address, https://x.com/<handle>/status/<digits>.
const postFile = join(botDir, 'POST.json');
const post = JSON.parse(readFileSync(postFile, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json holds no X post address: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, 'POST.json'));
console.log(`POST.json copied to ${outputDir}: ${post.url}`);
