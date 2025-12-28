// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // ⚠️ GitHub Pages chỉ hỗ trợ static (client-side)
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    compatibilityDate: "2025-07-15",
    runtimeConfig: {
        public: {
            // Set NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID in your environment to override
            firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-862G2PFH3V",
        },
    },
});
