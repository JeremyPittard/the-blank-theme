import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), icon()],
  output: "hybrid",
  vite: {
    plugins: [tailwindcss()],
  },
});
