export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/properties/')) {
    const newPath = to.path.replace('/properties/', '/phong-tro/')
    return navigateTo(newPath, { redirectCode: 301 })
  }
})
