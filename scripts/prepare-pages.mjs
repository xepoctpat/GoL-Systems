#!/usr/bin/env node
/**
 * GitHub Pages post-build: emit a real index.html from the client assets,
 * copy it to 404.html (SPA fallback), and add .nojekyll.
 *
 * TanStack Start's client hydrates via window.$_TSR (router manifest + matches).
 * Nitro's static prerender leaves that payload empty at a project base path,
 * so we inject a minimal stub and let the client match routes itself.
 */
import { copyFileSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), ".output", "public");
const assetsDir = join(dir, "assets");

if (!existsSync(dir) || !existsSync(assetsDir)) {
  console.error(`[prepare-pages] missing ${assetsDir}`);
  process.exit(1);
}

const files = readdirSync(assetsDir);
const css = files.find((f) => f.endsWith(".css"));
const entryJs =
  files.find((f) => f.startsWith("index-") && f.endsWith(".js")) ??
  files.find((f) => f.endsWith(".js") && !f.startsWith("routes-"));

if (!css || !entryJs) {
  console.error("[prepare-pages] missing css or js in assets:", files);
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en" class="h-dvh overflow-hidden antialiased">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#090a0c" />
    <title>Homeostat</title>
    <meta
      name="description"
      content="A self-regulating Game of Life. Heat, energy, and season shape the cells; cybernetic feedback rewrites the rules when the field starts to fail."
    />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="stylesheet" href="./assets/${css}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap"
    />
  </head>
  <body class="h-dvh overflow-hidden bg-bg font-sans text-fg">
    <script>
      self.$R = self.$R || {};
      self.$R.tsr = [];
      self.$_TSR = {
        h() {
          this.hydrated = true;
          this.c();
        },
        e() {
          this.streamEnded = true;
          this.c();
        },
        c() {
          if (this.hydrated && this.streamEnded) {
            delete self.$_TSR;
            delete self.$R.tsr;
          }
        },
        p(e) {
          this.initialized ? e() : this.buffer.push(e);
        },
        buffer: [],
        router: { manifest: { routes: {} }, matches: [] },
      };
    </script>
    <script type="module" src="./assets/${entryJs}"></script>
  </body>
</html>
`;

const strayIndex = join(dir, "index");
if (existsSync(strayIndex)) rmSync(strayIndex);

const indexPath = join(dir, "index.html");
writeFileSync(indexPath, html);
copyFileSync(indexPath, join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");

console.log(`[prepare-pages] wrote index.html + 404.html`);
console.log(`[prepare-pages] css=${css} js=${entryJs}`);
