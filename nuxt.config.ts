// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Disable homepage pre-rendered at build time
    '/': { prerender: false },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"]
})