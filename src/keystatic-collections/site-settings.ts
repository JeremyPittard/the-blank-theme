import { fields, singleton } from "@keystatic/core";

export const SiteSettings = singleton({
  label: "Site Settings",
  path: "src/content/",
  schema: {
    title: fields.text({ label: "Site Title" }),
    logo: fields.image({ label: "Site Logo" }),
  },
});
