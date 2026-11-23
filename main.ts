// Writes exactly one byte-for-byte identical reply: no clock, no randomness, no env.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out of office: fine-tuning on work-life balance. Escalate anything urgent to a human; I will resume worrying on Monday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, { encoding: "utf8" });
