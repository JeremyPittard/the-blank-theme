import { fields, collection } from "@keystatic/core";

export const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    content: fields.markdoc({
      label: "Content",
      options: {
        image: {
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/",
        },
      },
    }),
  },
});
