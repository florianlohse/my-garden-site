import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";

export default defineConfig({
  // Your existing site config (integrations, etc.) remains here
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});
