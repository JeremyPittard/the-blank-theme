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
            image: fields.image({
              label: "Image",
              directory: "public/images/hero/",
              publicPath: "/images/hero/",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.relationship({
                    label: "Internal Link",
                    description: "Select a page on this site",
                    collection: "pages",
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.url({
                    label: "External Link",
                    description:
                      "paste a link to an external site (this will open in a new tab.)",
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
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
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.relationship({
                    label: "Internal Link",
                    description: "Select a page on this site",
                    collection: "pages",
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.url({
                    label: "External Link",
                    description:
                      "paste a link to an external site (this will open in a new tab.)",
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
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
              link: fields.blocks(
                {
                  internalLink: {
                    label: "Internal Link",
                    schema: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                  },
                  externalLink: {
                    label: "External Link",
                    schema: fields.url({
                      label: "External Link",
                      description:
                        "paste a link to an external site (this will open in a new tab.)",
                    }),
                  },
                },
                { label: "CTA", validation: { length: { max: 1 } } }
              ),
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
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.relationship({
                    label: "Internal Link",
                    description: "Select a page on this site",
                    collection: "pages",
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.url({
                    label: "External Link",
                    description:
                      "paste a link to an external site (this will open in a new tab.)",
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
          }),
        },
        breakout: {
          label: "Breakout",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.relationship({
                    label: "Internal Link",
                    description: "Select a page on this site",
                    collection: "pages",
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.url({
                    label: "External Link",
                    description:
                      "paste a link to an external site (this will open in a new tab.)",
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
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
