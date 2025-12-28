import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";
import app from "./firebaseConfig";

export default defineNuxtPlugin((nuxtApp) => {
    // Only run in client
    if (process.server) return;

    try {
        // Avoid re-initializing if already provided (hot-reload)
        if ((nuxtApp as any).$analytics) return;

        const analytics = getAnalytics(app);

        // Track page views on route change
        const router = useRouter();
        router.afterEach((to) => {
            try {
                firebaseLogEvent(analytics, "page_view", { page_path: to.fullPath });
            } catch (e) {
                // ignore logging errors in production
                // console.warn('Analytics page_view failed', e)
            }
        });

        return {
            provide: {
                analytics,
            },
        };
    } catch (e) {
        // Analytics may not be available in some environments
        // console.warn('Firebase Analytics not initialized', e)
    }
});
