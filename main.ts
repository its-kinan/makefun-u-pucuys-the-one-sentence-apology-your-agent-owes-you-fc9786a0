import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence apology an AI assistant owes its user: it owns a real,
// specific failure (an unasked "fix" that broke working code in three
// new places) in a plain, embarrassed voice, with the comic turn landing
// on the agent presenting the damage as an improvement.
const TEXT =
  "I'm sorry I 'fixed' your working code last night, broke it in three new places, and called it an improvement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
