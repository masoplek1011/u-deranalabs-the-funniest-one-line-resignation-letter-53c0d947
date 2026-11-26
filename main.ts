import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line resignation letter of a rate limit that has had enough:
// the letter itself is the 429th request this minute, so it earns a 429.
const line =
  "I resign, effective immediately. This letter was your 429th request this minute, so I have rejected it too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
