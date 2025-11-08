# RPG Portfolio - Phase 1 Complete

## Overview
Vite-based portfolio with RPG theme, migrated from Next.js.

## Tech Stack
- **Vite 6.0** - Build tool
- **React 18.3** - UI framework
- **TypeScript 5.3** - Type safety
- **Tailwind CSS 4.0** - Styling with RPG theme
- **Framer Motion 11.2** - Animations
- **Vitest 1.0** - Testing framework

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm preview
```

## RPG Theme Colors
- **Dark Base**: `#1a1a1a` - Main background
- **Gold**: `#d4af37` - Primary accent (legendary items)
- **Green**: `#4ade80` - Success/health
- **Red**: `#ef4444` - Danger/critical
- **Blue**: `#3b82f6` - Info/mana
- **Purple**: `#a855f7` - Epic/rare items

## Project Structure
```
src/
├── __tests__/        # Test files
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── styles.css        # Global styles + Tailwind
```

## Deployment
Automatically deploys to GitHub Pages via GitHub Actions on push to `main`.

## Phase 1 Deliverables ✅
- [x] Vite project initialization
- [x] React 18 with TypeScript
- [x] Tailwind CSS 4.0 with RPG theme
- [x] Test setup with Vitest
- [x] GitHub Actions deployment workflow
- [x] All tests passing
- [x] Production build successful

## Next Steps (Phase 2)
- RPG data architecture (character stats, skills, quests)
- TypeScript interfaces for RPG entities
- Mock data structure
