import { config } from "@keystatic/core";
import { posts } from "./src/keystatic-collections/posts";
import { pages } from "./src/keystatic-collections/pages";
import { SiteSettings } from "./src/keystatic-collections/site-settings";

export default config({
  ui: {
    brand: {
      name: "the themes",
    },
    navigation: {
      Content: ["pages", "posts"],
      Settings: ["SiteSettings"],
      "Built by 'THE' themes": [],
    },
  },
  storage: {
    kind: "local",
  },
  collections: {
    posts,
    pages,
  },
  singletons: {
    SiteSettings,
  },
});
