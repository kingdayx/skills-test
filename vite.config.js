import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hypothetical from "rollup-plugin-hypothetical";
import postprocess from "@stadtlandnetz/rollup-plugin-postprocess";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["!!@svgr/webpack?+svgo,+titleProp,+ref!./assets/default.svg"],
    },
  },
  plugins: [
    hypothetical({
      allowFallthrough: true,
      files: {
        "!!@svgr/webpack?+svgo,+titleProp,+ref!./assets/default.svg/": ``,
        "masonry-layout/": ``,
        "video.js/": ``,
      },
    }),
    postprocess([[/import[^;]*/, ""]]),
  ],
});
