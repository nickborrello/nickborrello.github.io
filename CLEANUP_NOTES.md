# Phase 1 Migration - Cleanup Needed

## Old Next.js Files to Remove (Do NOT remove yet - for reference)

The following directories and files are from the old Next.js setup and can be removed once Phase 2 begins:

### Directories to Remove:
- `app/` - Old Next.js app directory
- `components/` - Old Next.js components (will be rebuilt in src/)
- `data/` - Old data files (will be restructured for RPG theme)
- `utils/` - Old utilities (will be rebuilt in src/)
- `public/demo-photos/` - Old demo photos

### Files to Remove:
- `next.config.mjs` - Next.js configuration
- `.eslintrc.json` - Next.js ESLint config (can create new Vite-specific one)

### Keep These:
- `public/` - Keep for static assets
- `plans/` - Keep project planning documents
- `.github/` - Keep for GitHub Actions

## Why Not Removed Yet?
Following TDD and incremental migration - these will be removed as we rebuild each component in the new Vite structure during subsequent phases.

## Action Items for Phase 2:
1. Create new component structure in `src/components/`
2. Migrate and transform components to RPG theme
3. Remove old directories once new structure is complete
