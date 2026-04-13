import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://tv-winsen-luhe.github.io',
  base: '/matchday',
  vite: {
    plugins: [tailwindcss()]
  }
})
