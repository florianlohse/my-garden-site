import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  // This tells Astro to look inside your submodule for Markdown files
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string().optional(),
    updated: z.coerce.date().optional(),
    created: z.coerce.date().optional(),
  }),
});

export const collections = { notes };
