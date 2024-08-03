import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    minify: true,
  },
});
