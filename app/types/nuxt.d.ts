import type * as amplitude from '@amplitude/analytics-browser'

declare module '#app' {
  interface NuxtApp {
    $amplitude: typeof amplitude
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $amplitude: typeof amplitude
  }
}
