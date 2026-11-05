// Gate G6: fail if any em dash (U+2014) or en dash (U+2013) exists in content, components, app, lib or docs.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["content", "components", "app", "lib", "docs", "scripts"];
const bad = new RegExp("[" + String.fromCharCode(0x2013) + String.fromCharCode(0x2014) + "]");
let hits = 0, files = 0;
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(tsx?|json|mjs|md|css|svg)$/.test(p)) continue;
    files++;
    readFileSync(p, "utf8").split("\n").forEach((line, i) => {
      if (bad.test(line)) { hits++; console.log(`${p}:${i + 1}: ${line.trim()}`); }
    });
  }
};
roots.forEach(walk);
console.log(`Scanned ${files} files, ${hits} em/en dash hits.`);
process.exit(hits ? 1 : 0);
