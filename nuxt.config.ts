// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false, // GitHub Pages chỉ hỗ trợ static SPA

  // 👉 quan trọng: base đúng repo name
  app: {
    baseURL: "/customer-nha-cho-thue/",
    buildAssetsDir: "assets",
  },

  nitro: {
    preset: "github-pages",
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-07-15",
});
