import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import createRequire from "vite-plugin-require";
export default defineConfig({
  plugins: [
    vue(),
    createRequire(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsDir: "assets", // 指定 assets 目录
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]", // 修改文件名规则
      },
    },
  },
});
