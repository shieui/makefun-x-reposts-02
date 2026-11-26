import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Entry point for the make.fun "Get the most reposts and likes on
// make.fun's newest X posts" bounty (makefun-x-reposts-02).
// All it does: copy POSTS.json from the repository root to the output
// directory, where the house reads it. Pure Node stdlib, no network,
// no child processes, no dependencies.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POSTS.json");
const target = join(outputDir, "POSTS.json");

if (!existsSync(source)) {
  throw new Error(`POSTS.json not found at ${source}`);
}

// Validate the shape before copying: a JSON object whose "posts" is a
// list of X post addresses. A malformed file must fail loudly here
// instead of reaching the house as a broken entry.
const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts)
) {
  throw new Error(`POSTS.json at ${source} must be {"posts": [...]}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`copied ${source} -> ${target}`);
