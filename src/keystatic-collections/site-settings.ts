import { fields, singleton } from "@keystatic/core";

export const siteSettings = singleton({
  label: "Site Details",
  path: "src/content/site-settings/site-details",
  schema: {
    title: fields.text({ label: "Site Title" }),
    logo: fields.image({ label: "Site Logo" }),
    sitewideBanner: fields.text({ label: "Sitewide Banner" }),
  },
});
