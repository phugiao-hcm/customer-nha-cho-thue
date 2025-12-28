import { logEvent as firebaseLogEvent, setUserId as firebaseSetUserId } from "firebase/analytics";

export const useAnalytics = () => {
    const nuxtApp = useNuxtApp();
    const analytics: any = (nuxtApp as any).$analytics;

    const logEvent = (name: string, params?: Record<string, any>) => {
        if (!analytics) return;
        try {
            firebaseLogEvent(analytics, name, params || {});
        } catch (e) {
            // ignore for now
        }
    };

    const setUserId = (id: string) => {
        if (!analytics) return;
        try {
            firebaseSetUserId(analytics, id);
        } catch (e) {
            // ignore
        }
    };

    return {
        logEvent,
        setUserId,
        _analytics: analytics,
    };
};
