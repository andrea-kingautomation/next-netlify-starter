import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "nextjs",

  contentSources: [
    {
      type: "git",

      models: [
        {
          name: "page",
          type: "page",
          label: "Page",
          filePath: "content/pages/{slug}.json",
          fields: [
            {
              name: "title",
              type: "string",
              label: "Title",
              required: true,
            },
            {
              name: "description",
              type: "text",
              label: "Description",
            },
            {
              name: "footer",
              type: "object",
              label: "Footer",
              fields: [
                {
                  name: "logo",
                  type: "image",
                  label: "Logo",
                },
                {
                  name: "logoAlt",
                  type: "string",
                  label: "Logo Alt Text",
                },
              ],
            },
          ],
        },
        {
          name: "config",
          type: "data",
          label: "Site Config",
          filePath: "content/config.json",
          singleInstance: true,
          fields: [
            {
              name: "siteName",
              type: "string",
              label: "Site Name",
            },
            {
              name: "siteDescription",
              type: "text",
              label: "Site Description",
            },
          ],
        },
      ],
    },
  ],

  siteMap: ({ documents }) => {
    return documents
      .filter((doc) => doc.modelName === "page")
      .map((page) => ({
        stableId: page.id,
        urlPath: page.slug === "index" ? "/" : `/${page.slug}`,
        document: page,
        label: page.title || "Untitled Page",
      }));
  },

  postInstallCommand: "npm i --no-save @stackbit/types",
});
