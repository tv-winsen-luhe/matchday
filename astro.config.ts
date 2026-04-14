import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://tv-winsen-luhe.github.io',
  base: '/matchday',
  integrations: [sitemap({ filter: page => !page.includes('/og') })],
  vite: {
    plugins: [tailwindcss()]
  }
})
