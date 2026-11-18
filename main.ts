// news-image-20261118: write the day's front page to the output directory.
//
// The image itself is built ahead of time (see asset/entry.png) and this
// program only places an exact copy at <output>/entry.png. It takes no
// network, no clock and no random input, so two runs write identical bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "asset", "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Guard against a truncated copy: the output must be a whole PNG whose
// bytes match the bundled image exactly, or the run has failed.
const written = readFileSync(target);
const original = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!written.subarray(0, 8).equals(pngMagic) || !written.equals(original)) {
  throw new Error("output entry.png is not an exact copy of asset/entry.png");
}

const bytes = statSync(target).size;
console.log(`wrote ${target} (${bytes} bytes)`);
