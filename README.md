# Nicholas Borrello — AI & Software Engineer Portfolio

A personal engineering portfolio with a clean, restrained visual identity — warm beige/charcoal palette, Rajdhani display headings, and clear engineering storytelling.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide icons

## Development & Verification

```bash
npm install
npm run dev        # start local development server
npm run typecheck  # TypeScript verification (tsc --noEmit)
npm run build      # production bundle build -> dist/
npm run preview    # preview production build
```

## Structure

- `data.ts` & `types.ts`: Source data for experience, projects, education, and technical skills.
- `components/`: Clean React components for Hero, Featured Work, Experience, Skills, About, Header, Footer, and authored architecture diagrams (`components/diagrams/`).
- `scripts/generate_resume.py`: Standalone ReportLab generator for `public/resume.pdf`.
