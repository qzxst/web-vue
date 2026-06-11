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
      // 自动导入 Vue / Router / Pinia 等常用 API
      imports: ["vue", "vue-router", "pinia"],
      // 支持 ElementPlus 相关的自动导入
      resolvers: [ElementPlusResolver()],
      // 生成 dts 文件，IDE 会自动识别这些全局导入
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: false,
      },
    }),
    Components({
      // 自动按需注册 components 目录下的组件
      dirs: ["src/components"],
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts",
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
