export function useTracking() {
  const { $amplitude } = useNuxtApp()

  const trackLogin = (method: string) => {
    $amplitude.track('login', { method })
  }

  return { trackLogin }
}
