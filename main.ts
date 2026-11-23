import fs from "node:fs";
import path from "node:path";

const EMOJI = "🤗";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (EMOJI.length < 1 || EMOJI.length > 8) throw new Error(`Invalid emoji length: ${EMOJI.length}`);
fs.writeFileSync(dst, EMOJI, "utf8");
fs.chmodSync(dst, 0o644);
