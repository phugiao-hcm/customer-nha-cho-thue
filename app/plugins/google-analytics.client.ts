export default defineNuxtPlugin(() => {
  if (process.client) {
    // Tải script GA
    const script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-862G2PFH3V"
    document.head.appendChild(script);

    // Khởi tạo gtag
    (window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    ;(window as any).gtag = gtag

    gtag("js", new Date())
    gtag("config", "G-862G2PFH3V")

    console.log("✅ Google Analytics loaded")
  }
})
