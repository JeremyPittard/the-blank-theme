import { config } from "@keystatic/core";
import { posts } from "./src/keystatic-collections/posts";
import { pages } from "./src/keystatic-collections/pages";
import { seoSettings } from "./src/keystatic-collections/site-settings";
import { navigationSettings } from "./src/keystatic-collections/navigation-settings";
import { faqs } from "./src/keystatic-collections/faqs";
import { reviews } from "./src/keystatic-collections/reviews";

export default config({
  ui: {
    brand: {
      name: "the themes",
    },
    navigation: {
      Content: ["pages", "posts", "---", "reviews", "faqs"],
      Settings: ["seoSettings", "navigationSettings"],
      "Built by 'THE' themes": [],
    },
  },
  storage: {
    kind: "local",
  },
  collections: {
    posts,
    pages,
    faqs,
    reviews,
  },
  singletons: {
    seoSettings,
    navigationSettings,
  },
});
