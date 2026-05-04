import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://matchday.tennisverein-winsen.de',
  integrations: [sitemap({ filter: page => !page.includes('/og') && !page.includes('/brand') })],
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false
  }
})
