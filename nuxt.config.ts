// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false, // bắt buộc cho GitHub Pages (SPA)

  app: {
    baseURL: "/customer-nha-cho-thue/", // ⚠️ TÊN REPO
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
