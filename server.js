import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { basename, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT_DIR = resolve(__dirname);
const PORT = Number(process.env.PORT) || 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const BLOCKED_FILES = new Set([
  ".gitignore",
  "package.json",
  "server.js",
  "README.md"
]);

function getFilePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = normalize(join(ROOT_DIR, requestedPath));

  if (!filePath.startsWith(ROOT_DIR) || BLOCKED_FILES.has(basename(filePath))) {
    return null;
  }

  return filePath;
}

const server = createServer(async (request, response) => {
  const filePath = getFilePath(request.url || "/");

  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Acesso negado");
    return;
  }

  try {
    const content = await readFile(filePath);
    const contentType = MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream";

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store"
    });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(join(ROOT_DIR, "index.html")));
  }
});

server.listen(PORT, () => {
  console.log(`Site rodando em http://localhost:${PORT}`);
});
