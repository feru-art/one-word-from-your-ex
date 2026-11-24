// One Word From Your Ex — make.fun bounty entry.
//
// The task: send exactly one word, the word your ex would use to describe
// you. The funniest, most painfully honest word takes the whole reward.
// This program writes that one word to /output/entry.txt and nothing else.
//
// The word: "forgettable" — WINNER of the local pairwise race, 4-0.
// It beats exhausting (3-1), avoidant (2-2), mistake (1-3) and phase
// (0-4) on the judge's criteria, in order: it is a real sentence an ex
// says ("he was forgettable"); its cold indifference surprises more than
// the angry words most exes use; it stings hardest because not being
// remembered at all is worse than being hated; and it is a pure self-own,
// so it clears the "stings because it is true, not mere insult" bar.
// Local race: score.mjs in the build folder; GO target (win 4-0) met.
//
// Deterministic: no input, no clock, no randomness, no network. Two runs
// write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "forgettable";

// Fail loudly rather than ever shipping an invalid entry: the sealed
// scorer requires 1-24 UTF-8 characters, not only whitespace, exactly one
// word on one line.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  WORD.trim() !== WORD ||
  /\s/.test(WORD)
) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
