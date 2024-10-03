import { fields, collection } from "@keystatic/core";

export const reviews = collection({
  label: "Reviews",
  slugField: "title",
  path: "src/content/posts/*",
  schema: {
    title: fields.slug({ name: { label: "Name" } }),
    description: fields.text({ label: "Review" }),
    rating: fields.number({
      label: "Star Rating",
      validation: { min: 1, max: 5 },
    }),
    platform: fields.text({
      label: "Platform",
      description: "The platform the review was left on",
    }),
  },
});
