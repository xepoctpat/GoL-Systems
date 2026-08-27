#!/usr/bin/env node
/**
 * Static GitHub Pages build. Nitro's github-pages/static preset prerenders
 * empty shells at a project base path and then fails on a leftover SSR step —
 * the client assets are enough, so we generate index.html afterwards.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const env = {
  ...process.env,
  GITHUB_PAGES: "1",
};

const build = spawnSync(
  process.execPath,
  ["scripts/with-app-env.mjs", "vite", "build"],
  { stdio: "inherit", env },
);

const assets = join(process.cwd(), ".output", "public", "assets");
if (!existsSync(assets)) {
  console.error("[build-pages] client assets missing");
  process.exit(build.status || 1);
}

const prepare = spawnSync(process.execPath, ["scripts/prepare-pages.mjs"], {
  stdio: "inherit",
  env,
});
if (prepare.status !== 0) process.exit(prepare.status ?? 1);

if (build.status !== 0) {
  console.log("[build-pages] vite reported an error after emitting assets; static site is ready.");
}
