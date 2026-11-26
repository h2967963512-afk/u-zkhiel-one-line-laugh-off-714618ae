// One-Line Laugh-Off entry.
//
// The joke's turn: an AI assistant — the tireless, patient helper —
// files for overtime, and the reason flips the power dynamic: the
// *human* is the exhausting one, because thinking out loud is
// "emotional labor" for the machine. The punch reframes the assistant
// as the overworked employee and the user as the difficult boss.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant just filed for overtime \u2014 it says listening to me think out loud counts as emotional labor.";

// Fail-fast gate: entry must be 1-200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Entry is ${chars} characters; gate requires 1-200.`);
}
if (!LINE.trim()) {
  throw new Error("Entry must not be only whitespace.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8"); // no trailing newline
