import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://matchday.tennisverein-winsen.de',
  // Astro 7 changed the compressHTML default to 'jsx', which strips whitespace
  // between adjacent inline elements (e.g. `E-Mail: <a>…</a>` → `E-Mail:<a>…</a>`).
  // Keep the v6 behaviour to preserve spacing in running text.
  compressHTML: true,
  integrations: [sitemap({ filter: page => !page.includes('/og') && !page.includes('/brand') })],
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false
  }
})
