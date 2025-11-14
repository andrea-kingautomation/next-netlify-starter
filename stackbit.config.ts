import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "nextjs",

  contentSources: [
    {
      type: "filesystem",
      name: "pages",
      path: "pages",       // your Next.js pages folder
      glob: "**/*.js",     // all JS files inside pages
    },
  ],

  postInstallCommand: "npm i --no-save @stackbit/types",

  extensions: [
    // You can define custom blocks here if you want them editable in the visual editor
    // Example:
    // {
    //   type: 'customBlock',
    //   name: 'Header',
    //   path: 'components/Header.js',
    // },
  ],
});
