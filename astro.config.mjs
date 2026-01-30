import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // 1. Your GitHub Pages URL
  site: "https://florianlohse.github.io",

  // 2. The specific folder (repository name) on GitHub
  // IMPORTANT: This must start with a forward slash /
  base: "/my-garden-site",

  // 3. Optional but recommended for clean Obsidian-style links later
  trailingSlash: "always",
});
