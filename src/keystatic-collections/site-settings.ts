import { fields, singleton } from "@keystatic/core";

export const seoSettings = singleton({
  label: "Site Details",
  path: "src/content/site-settings",
  schema: {
    title: fields.text({ label: "Site Title" }),
    logo: fields.image({ label: "Site Logo" }),
  },
});
