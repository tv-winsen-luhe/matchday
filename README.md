# Matchday Winsen 2026

Website zum **LK-Tagesturnier** des TV Winsen/Luhe am **04. Juli 2026**.

**Live:** <https://tv-winsen-luhe.github.io/matchday/>

## Tech

- [Astro 6](https://astro.build/) — statische Site, zero client JS by default
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- TypeScript (strict)
- pnpm, Node 24
- Deployment via GitHub Actions → GitHub Pages

## Lokal entwickeln

```bash
pnpm install
pnpm dev          # Dev-Server auf http://localhost:4321/matchday
pnpm build        # astro check + build
pnpm preview      # Preview des Production-Builds
pnpm format       # Prettier
pnpm lint         # ESLint
```

Detailliertere Projekt-Notizen (Code-Style, Architektur, Design-System) stehen in [`CLAUDE.md`](./CLAUDE.md).

## Lizenz

© 2026 Tennisverein Winsen (Luhe) von 1913 e.V. — alle Rechte vorbehalten. Siehe [`LICENSE`](./LICENSE).
