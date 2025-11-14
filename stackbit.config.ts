import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "nextjs",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "page",
          type: "page",
          label: "Page",
          urlPath: "/{slug}",
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
    }),
  ],

  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");

    return documents
      .filter((d) => pageModels.some((m) => m.name === d.modelName))
      .map((document) => {
        const isHomePage = document.slug === "index";

        return {
          stableId: document.id,
          urlPath: isHomePage ? "/" : `/${document.slug}`,
          document,
          label: document.title || "Untitled Page",
          isHomePage,
        };
      });
  },
});
