export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AK Games — Craft-built casino slots',
      meta: [
        { name: 'description', content: 'AK Games is a small studio building craft-built casino slot games for operators and partners.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'preload', href: '/fonts/sora-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/manrope-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
      ]
    }
  }
})
