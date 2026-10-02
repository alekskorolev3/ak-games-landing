import { gameSlugs } from './data/games'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...gameSlugs.map((slug) => `/games/${slug}`)]
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AK Games — Craft-built casino slots',
      meta: [
        {
          name: 'description',
          content:
            'AK Games is a small studio building craft-built casino slot games for operators and partners.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        {
          rel: 'preload',
          href: '/fonts/sora-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: ''
        },
        {
          rel: 'preload',
          href: '/fonts/manrope-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: ''
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
