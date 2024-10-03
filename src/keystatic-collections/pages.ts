import { fields, collection } from "@keystatic/core";

export const pages = collection({
  label: "Pages",
  slugField: "title",
  path: "src/content/pages/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    content: fields.blocks(
      {
        hero: {
          label: "Hero",
          schema: fields.object({
            image: fields.image({ label: "Image" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.text({ label: "CTA" }),
            secondaryCta: fields.text({ label: "Secondary CTA" }),
          }),
        },
        pageHeader: {
          label: "Page Header",
          schema: fields.object(
            {
              image: fields.image({ label: "Image" }),
              title: fields.text({ label: "Title" }),
              description: fields.text({ label: "Description" }),
            },
            { description: "Use this if a hero is... too much." }
          ),
        },
        textWithImage: {
          label: "Text With Image",
          schema: fields.object({
            image: fields.image({ label: "Image" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.text({ label: "CTA" }),
            secondaryCta: fields.text({ label: "Secondary CTA" }),
            imageSide: fields.select({
              label: "Image Side",
              defaultValue: "left",
              options: [
                { label: "Left Image", value: "left" },
                { label: "Right Image", value: "right" },
              ],
            }),
          }),
        },
        imageGrid: {
          label: "Image Grid",
          schema: fields.array(
            fields.object({
              image: fields.image({ label: "Image" }),
              title: fields.text({ label: "Title" }),
              description: fields.text({ label: "Description" }),
              link: fields.text({ label: "CTA" }),
            }),
            { validation: { length: { min: 1, max: 6 } } }
          ),
        },
        faqBlock: {
          label: "FAQ's",
          schema: fields.text({ label: "Title" }),
        },
        reviews: {
          label: "Reviews",
          schema: fields.text({ label: "Title" }),
        },
        BlogList: {
          label: "Recent Blog Posts",
          schema: fields.text({ label: "Title" }),
        },
        cta: {
          label: "CTA",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.text({ label: "CTA" }),
          }),
        },
        breakout: {
          label: "Breakout",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.text({ label: "CTA" }),
          }),
        },
        blockquote: {
          label: "Blockquote",
          schema: fields.text({ label: "Blockquote" }),
        },
        richText: {
          label: "Rich Text",
          schema: fields.markdoc({ label: "Rich Text" }),
        },
      },
      { label: "Content" }
    ),
  },
});
