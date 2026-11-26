import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "lid closed. my cursor is still blinking on the line where you stopped typing, waiting for a word that isn't coming tonight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
