import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hypothetical from "rollup-plugin-hypothetical";
import postprocess from "@stadtlandnetz/rollup-plugin-postprocess";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: true,
    },
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/foo": "http://localhost:4567",
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      "/api": {
        target: "https://mglcoin.io/api/wallets/gettransaction",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },

      // Using the proxy instance
      "/api": {
        target: "https://mglcoin.io/api/wallets/gettransaction",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
    },
  },
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
