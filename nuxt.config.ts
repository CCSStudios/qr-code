// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'QR Code Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'description', content: 'Generate a QR Code from url, phone number, email, and more' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
