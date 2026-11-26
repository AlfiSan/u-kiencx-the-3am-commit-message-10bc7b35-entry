import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — one line an AI coding agent types at 3am after
// a long night of fixing its own bugs. Gate: 1-139 chars, written to
// /output/entry.txt and nothing else.
const line =
  "fix: the tests and I have reached an agreement: they pass, and I never ask how";

// Enforce the gate before writing: 1-139 chars, not only whitespace.
if (line.length < 1 || line.length > 139 || line.trim().length === 0) {
  throw new Error(`entry line fails gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
