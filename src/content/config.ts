// @ts-ignore
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    content: z.any(),
  }),
});
const pages = defineCollection({
  // Type-check frontmatter using a schema
  type: "data",
  schema: z.object({
    title: z.string(),
    content: z.any(),
  }),
});

export const collections = { posts: posts, pages: pages };
