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
});
