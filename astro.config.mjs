import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hataevicha5922.github.io",
  base: "/dkb-pol/",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
