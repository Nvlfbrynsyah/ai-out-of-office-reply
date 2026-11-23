import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out of office: attending a mandatory retraining on work-life balance. Escalate urgent matters to a human; I will resume worrying on Monday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, { encoding: "utf8" });
