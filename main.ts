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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
