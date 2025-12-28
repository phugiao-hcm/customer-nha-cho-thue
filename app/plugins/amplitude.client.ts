import { defineNuxtPlugin } from '#app'
import * as amplitude from '@amplitude/analytics-browser'

export default defineNuxtPlugin((nuxtApp) => {
  // Khởi tạo Amplitude (chỉ chạy client-side)
  amplitude.init('3836fb62803e36a668821c8cfb564aa5', {
    defaultTracking: true, // tự động track page views, sessions
  })

  // Đưa vào provide để dùng trong toàn app
  return {
    provide: {
      amplitude,
    },
  }
})
