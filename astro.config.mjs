// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "server",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 3000,
  },
  adapter: node({
    mode: "standalone",
  }),
});
