import { fields, collection } from "@keystatic/core";

export const faqs = collection({
  label: "FAQ's",
  slugField: "question",
  path: "src/content/posts/*",
  schema: {
    question: fields.slug({ name: { label: "Question" } }),
    answer: fields.text({ label: "Answer" }),
  },
});
