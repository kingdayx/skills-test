import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hypothetical from "rollup-plugin-hypothetical";
import postprocess from "@stadtlandnetz/rollup-plugin-postprocess";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [postprocess([[/import[^;]*/, ""]])],
});
