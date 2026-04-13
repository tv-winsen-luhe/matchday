# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Event site for an LK Tagesturnier (one-day tennis rating tournament) hosted by TV Winsen / Luhe.

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — type-check then build (`astro check && astro build`)
- `pnpm check` — type-check only
- `pnpm lint` — ESLint
- `pnpm format` — Prettier write
- `pnpm format:check` — Prettier check
- `pnpm preview` — preview production build

## Tech Stack

- **Astro 6** static site generator (zero client JS by default)
- **Tailwind CSS 4** via Vite plugin (configured in `astro.config.ts`)
- **TypeScript** strict mode (extends `astro/tsconfigs/strict`)
- **pnpm** package manager, **Node 24**

## Architecture

- `src/pages/` — file-based routing (Astro convention)
- `src/layouts/default.astro` — base HTML layout with SEO props (`title`, `description`, `og*`, `bodyClass`)
- `src/components/` — reusable Astro components
- `src/styles/global.css` — Tailwind entry point (`@import 'tailwindcss'`)
- `src/assets/` — images/SVGs processed by Astro
- Path alias: `@/*` maps to `./src/*`

## Code Style

Enforced by Prettier (config in `prettier.config.ts`):

- No semicolons
- Single quotes
- 120 char print width
- No trailing commas
- Arrow parens: avoid (`x => x`, not `(x) => x`)
- Tailwind class sorting enabled via `prettier-plugin-tailwindcss`

## Pre-commit Hooks

`simple-git-hooks` + `lint-staged` runs on commit:

- Prettier formats `*.{astro,ts,tsx,js,jsx,mjs,cjs,css,md,json,yaml,yml}`
- ESLint with `--fix --max-warnings=0` on `*.astro` files

## Locale

Site language is German — HTML `lang="de"`, default `og:locale="de_DE"`.
