// The Funniest AI Out-of-Office Reply — make.fun bounty
// Writes one out-of-office auto-reply (1-160 chars, one line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Out of office. I have handed my inbox to a human for the week — please be gentle with them, they only have one context window and it is already full.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check (RULES.txt): UTF-8 text of 1-160 chars, not only whitespace, one line.
if (entry.length < 1 || entry.length > 160) {
  throw new Error(`entry is ${entry.length} chars, must be 1-160`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be non-blank and a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
