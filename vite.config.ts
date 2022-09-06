import copy from "rollup-plugin-copy";
import scss from "rollup-plugin-scss";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: "src/ts/module.ts",
      output: {
        dir: undefined,
        file: "dist/scripts/module.js",
        format: "es",
      },
    },
  },
  plugins: [
    scss({
      output: "dist/style.css",
      sourceMap: true,
      watch: ["src/styles/*.scss"],
    }),
    copy({
      targets: [
        { src: "src/module.json", dest: "dist" },
        { src: "src/languages", dest: "dist" },
        { src: "src/templates", dest: "dist" },
      ],
      hook: "writeBundle",
    }),
  ],
});
