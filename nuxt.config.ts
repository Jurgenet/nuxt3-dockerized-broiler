// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      open: false,
      watch: {
        usePolling: true,
    }
    },
  },
  alias: {
    '@': './src',
  },
})
