## Plan: RPG Portfolio Site Migration (Next.js → Vite)

Complete overhaul of existing Next.js portfolio to a Vite-based React app with RPG inventory/stats screen theme. Migrate from Next.js to Vite, implement RPG-themed components, and configure GitHub Pages deployment using GitHub Actions.

**Phases: 6**

1. **Phase 1: Project Setup & Migration Foundation**
    - **Objective:** Initialize Vite project structure with React, TypeScript, Tailwind CSS, and Framer Motion. Remove Next.js dependencies.
    - **Files/Functions to Modify/Create:**
        - Create `vite.config.ts` with GitHub Pages base path configuration
        - Create `index.html` as the app entry point
        - Create `src/main.tsx` and `src/App.tsx`
        - Create `tailwind.config.js` with RPG theme colors
        - Update `package.json` with Vite scripts and dependencies
        - Create `.github/workflows/deploy.yml` for GitHub Actions deployment
    - **Tests to Write:**
        - `App.test.tsx` - verify App component renders
        - `main.test.tsx` - verify React root mounts correctly
    - **Steps:**
        1. Write tests for basic App rendering
        2. Run tests to see them fail
        3. Create Vite config with `base: '/'` for GitHub Pages
        4. Set up HTML entry point and React mounting in main.tsx
        5. Create basic App.tsx shell
        6. Update package.json with Vite dependencies (vite ^6.0.0, react ^18.3.0, tailwindcss ^4.0.0, framer-motion ^11.0.0)
        7. Configure Tailwind with RPG-themed dark mode colors
        8. Create GitHub Actions workflow for automated deployment
        9. Run tests to confirm they pass

2. **Phase 2: RPG Data Architecture**
    - **Objective:** Design and implement the data.json schema for RPG-themed portfolio data (character info, stats, skills, projects)
    - **Files/Functions to Modify/Create:**
        - Create `public/data.json` with RPG-structured portfolio data
        - Create `src/types/index.ts` with TypeScript interfaces (Character, Stat, Skill, Quest)
        - Create `src/hooks/usePortfolioData.ts` for data fetching
    - **Tests to Write:**
        - `usePortfolioData.test.ts` - verify data hook fetches and parses JSON
        - `types.test.ts` - verify type definitions match data structure
    - **Steps:**
        1. Write tests for data fetching hook
        2. Run tests to see them fail
        3. Define TypeScript interfaces for Character, Stat, Skill, Quest types
        4. Create JSON schema with character info, stats array, skills grouped by category, projects as quests
        5. Implement usePortfolioData custom hook with fetch and error handling
        6. Run tests to confirm they pass

3. **Phase 3: Character Header & Stats Panel**
    - **Objective:** Build the Character Info header and Stats sidebar with progress bars
    - **Files/Functions to Modify/Create:**
        - Create `src/components/CharacterHeader.tsx` (name, class, level, bio)
        - Create `src/components/StatsPanel.tsx` (sidebar with stat bars)
        - Create `src/components/StatBar.tsx` (reusable progress bar component)
        - Update `src/App.tsx` to include header and stats panel
    - **Tests to Write:**
        - `CharacterHeader.test.tsx` - renders character name, class, level, bio
        - `StatsPanel.test.tsx` - renders all stats with correct values
        - `StatBar.test.tsx` - renders progress bar with correct width percentage
    - **Steps:**
        1. Write tests for CharacterHeader component
        2. Write tests for StatsPanel and StatBar components
        3. Run tests to see them fail
        4. Implement CharacterHeader with Tailwind styling for RPG aesthetic
        5. Implement StatBar with animated progress bar using Framer Motion
        6. Implement StatsPanel using StatBar components for each stat
        7. Integrate components into App.tsx layout (header + sidebar grid)
        8. Run tests to confirm they pass

4. **Phase 4: Inventory Grid (Skills)**
    - **Objective:** Create the main inventory grid where each slot represents a skill with hover tooltips
    - **Files/Functions to Modify/Create:**
        - Create `src/components/InventoryGrid.tsx` (main skills grid container)
        - Create `src/components/InventorySlot.tsx` (individual skill slot with tooltip)
        - Create `src/components/Tooltip.tsx` (reusable tooltip with Framer Motion)
        - Update `src/App.tsx` to include inventory grid
    - **Tests to Write:**
        - `InventoryGrid.test.tsx` - renders correct number of slots
        - `InventorySlot.test.tsx` - displays skill name, shows tooltip on hover
        - `Tooltip.test.tsx` - renders tooltip content, animates in/out
    - **Steps:**
        1. Write tests for InventoryGrid, InventorySlot, and Tooltip components
        2. Run tests to see them fail
        3. Implement Tooltip with Framer Motion animations and proper positioning
        4. Implement InventorySlot with skill icon/name, hover state, and Tooltip integration
        5. Implement InventoryGrid with responsive CSS Grid layout (Tailwind)
        6. Add ARIA labels and keyboard navigation for accessibility
        7. Integrate inventory grid into App.tsx main content area
        8. Run tests to confirm they pass

5. **Phase 5: Quest Log (Projects)**
    - **Objective:** Build the Quest Log section with project cards and expandable modal details
    - **Files/Functions to Modify/Create:**
        - Create `src/components/QuestLog.tsx` (projects list/grid)
        - Create `src/components/QuestCard.tsx` (individual project card)
        - Create `src/components/QuestModal.tsx` (modal with full project details)
        - Update `src/App.tsx` to include quest log section
    - **Tests to Write:**
        - `QuestLog.test.tsx` - renders all quest cards
        - `QuestCard.test.tsx` - displays project title, opens modal on click
        - `QuestModal.test.tsx` - shows/hides modal, renders details, closes on escape/outside click
    - **Steps:**
        1. Write tests for QuestLog, QuestCard, and QuestModal components
        2. Run tests to see them fail
        3. Implement QuestModal with Framer Motion animations, focus trap, and ARIA attributes
        4. Implement QuestCard with project title, summary, status indicator
        5. Implement QuestLog with responsive grid/list layout
        6. Add modal state management and keyboard event handlers (Escape key)
        7. Integrate quest log into App.tsx layout
        8. Run tests to confirm they pass

6. **Phase 6: Responsive Design, Polish & Deployment**
    - **Objective:** Ensure mobile responsiveness, add final polish (animations, loading states), and deploy to GitHub Pages
    - **Files/Functions to Modify/Create:**
        - Update all components with responsive breakpoints
        - Create `src/components/LoadingScreen.tsx` (initial loading state)
        - Update `src/App.tsx` with loading state handling
        - Add responsive meta tags to `index.html`
        - Finalize `tailwind.config.js` with mobile-first breakpoints
    - **Tests to Write:**
        - `responsive.test.tsx` - verify components adapt to different viewport sizes
        - `LoadingScreen.test.tsx` - renders loading state, hides when data loaded
        - `App.integration.test.tsx` - full integration test of all components together
    - **Steps:**
        1. Write tests for responsive behavior and loading states
        2. Run tests to see them fail
        3. Implement LoadingScreen component with RPG-themed loading animation
        4. Add responsive Tailwind classes (sm, md, lg breakpoints) to all components
        5. Test layout on mobile, tablet, and desktop viewports
        6. Add final Framer Motion polish (page transitions, scroll animations)
        7. Run full test suite to confirm all tests pass
        8. Build production bundle (`npm run build`)
        9. Commit changes and push to GitHub (triggers automatic deployment via GitHub Actions)
        10. Verify deployment at nickborrello.github.io

**Open Questions:**
1. Data Content: Using placeholder content initially - can be updated with actual bio, skills, and projects
2. Skill Categories: "Weapons" = Frontend, "Armor" = Backend, "Potions" = Tools, "Accessories" = Soft Skills
3. Color Scheme: Classic RPG with modern dark gray base (#1a1a1a), gold accents (#d4af37), green status bars (#4ade80)
4. Stat Mapping: Intelligence (Backend), Dexterity (Frontend), Charisma (Soft Skills), Wisdom (Experience)
5. Deployment Timing: Working in branch, will merge to main only when complete
