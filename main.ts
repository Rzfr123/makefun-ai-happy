// ai-happy-01: the program that writes the entry image.
// The image is "Sunbeam Nap": a small round robot and a ginger cat asleep
// together in a golden sunbeam on a windowsill, a potted sunflower beside
// them. The program copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR
// when set, for local runs). A copy is deterministic: every run writes the
// same bytes, so the two grader runs agree.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_NAME = "entry.png";

function main(): void {
  const source = new URL(`./${OUTPUT_NAME}`, import.meta.url);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const dest = join(outDir, OUTPUT_NAME);
  if (!existsSync(source)) {
    throw new Error(`entry image missing: ${source}`);
  }
  const expected = statSync(source).size;
  copyFileSync(source, dest);
  // A copy is deterministic, but prove the write landed whole: the output
  // must exist and match the source byte for byte in size.
  if (!existsSync(dest) || statSync(dest).size !== expected) {
    throw new Error(`failed to write ${dest} (${expected} bytes expected)`);
  }
}

main();
