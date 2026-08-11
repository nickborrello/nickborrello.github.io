# Nicholas Borrello — AI Engineer Portfolio

A scrollable engineering portfolio with a restrained NieR: Automata field-UI identity — beige/charcoal palette, Rajdhani HUD lettering, fine grid texture, hairline frames. The engineering work is the main character; the game-menu interaction model was retired in the 2026 redesign (issue #2).

## Stack

- React 19 + TypeScript + Vite (bundled — no CDN runtime dependencies)
- Tailwind CSS v4 (build pipeline via `@tailwindcss/vite`, tokens in `index.css`)
- Lucide icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Content

All portfolio content lives in `data.ts` (projects, experience, education, capabilities with proof traces, contacts). Every metric and capability chip traces to a real claim there. Visuals: live Resumancer captures in `public/work/`, authored architecture diagrams in `components/diagrams/`.

## Before deploying

- A generated `public/resume.pdf` (built strictly from `data.ts` facts) ships so every Resume CTA resolves — replace it with your official resume before applying to jobs.
- The social preview card is `public/og-card.png` (1200×630); regenerate from `/tmp/og-card.html` if the hero copy changes.
