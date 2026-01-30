import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks"; // <--- Add this line

export default defineConfig({
  // ... your other config
  markdown: {
    remarkPlugins: [remarkBreaks], // <--- Add this line
  },
});
