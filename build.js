const { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const root = __dirname;
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  copyFileSync(join(root, file), join(dist, file));
}

if (existsSync(join(root, "img"))) {
  cpSync(join(root, "img"), join(dist, "img"), { recursive: true });
}
