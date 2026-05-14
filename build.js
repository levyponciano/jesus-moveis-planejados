const { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const ROOT_DIR = __dirname;
const DIST_DIR = join(ROOT_DIR, "dist");
const STATIC_FILES = ["index.html", "styles.css", "script.js"];
const STATIC_DIRS = ["img"];

function cleanOutput() {
  rmSync(DIST_DIR, { recursive: true, force: true });
  mkdirSync(DIST_DIR, { recursive: true });
}

function copyFile(fileName) {
  copyFileSync(join(ROOT_DIR, fileName), join(DIST_DIR, fileName));
}

function copyDirectory(directoryName) {
  const source = join(ROOT_DIR, directoryName);

  if (!existsSync(source)) {
    return;
  }

  cpSync(source, join(DIST_DIR, directoryName), { recursive: true });
}

cleanOutput();
STATIC_FILES.forEach(copyFile);
STATIC_DIRS.forEach(copyDirectory);

console.log(`Build gerado em ${DIST_DIR}`);
