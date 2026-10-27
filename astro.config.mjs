// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

export default defineConfig({
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
