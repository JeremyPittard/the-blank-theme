import { fields, singleton } from "@keystatic/core";

export const navigationSettings = singleton({
  label: "Navigation",
  path: "src/content/site-settings/navigation",
  schema: {
    homePage: fields.relationship({
      label: "Home Page",
      description: "Select a page to be your home page",
      collection: "pages",
    }),
  },
});
