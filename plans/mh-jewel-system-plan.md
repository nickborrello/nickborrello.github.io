## Plan: Monster Hunter Jewel/Skill System Upgrade

Upgrade the RPG portfolio to automatically calculate skill proficiency levels based on technology "jewels" embedded in projects. Instead of hardcoded stats, skills will dynamically reflect actual project experience - just like Monster Hunter's equipment skill system.

**Phases (4 phases)**

### 1. **Phase 1: Data Schema & Calculation Engine**
   - **Objective:** Extend data types and create the core jewel-to-skill calculation logic
   - **Files/Functions to Modify/Create:**
     - `src/types/index.ts` - Add Jewel, JewelSlot, SkillProficiency, TechJewel types
     - `src/hooks/useSkillCalculation.ts` - New hook to calculate proficiency from jewels
     - `public/data.json` - Add jewelSlots to existing quests and define techJewels catalog
   - **Tests to Write:**
     - `useSkillCalculation.test.ts` - Test jewel counting and level calculation
     - `types.test.ts` updates - Verify new type definitions
   - **Steps:**
     1. Write tests for jewel calculation logic (empty arrays, single jewel, multiple jewels, max level capping)
     2. Run tests to see them fail
     3. Add new TypeScript interfaces for Jewel, JewelSlot, SkillProficiency to types/index.ts
     4. Create useSkillCalculation hook that loops through quests, counts jewels, and returns proficiency map
     5. Update data.json with sample jewelSlots on 2-3 existing quests
     6. Run tests to confirm they pass

### 2. **Phase 2: Jewel Visual Components**
   - **Objective:** Create reusable components to display jewels on project cards
   - **Files/Functions to Modify/Create:**
     - `src/components/JewelIcon.tsx` - New component for individual jewel display
     - `src/components/JewelSlots.tsx` - New component to render jewel slot grid
     - `src/styles.css` - Add jewel-specific styling and colors
   - **Tests to Write:**
     - `JewelIcon.test.tsx` - Test jewel rendering with different tech types
     - `JewelSlots.test.tsx` - Test slot rendering with filled/empty slots
   - **Steps:**
     1. Write tests for JewelIcon component (renders correct color, shows tooltip, handles different tech types)
     2. Write tests for JewelSlots component (renders correct number of slots, shows filled vs empty)
     3. Run tests to see them fail
     4. Create JewelIcon component with colored dot/gem and tech name tooltip
     5. Create JewelSlots component that maps slots to JewelIcon instances
     6. Add CSS for jewel colors (React=blue, Node=green, TypeScript=blue-gray, etc.)
     7. Run tests to confirm they pass

### 3. **Phase 3: Upgrade StatsPanel with Proficiency Display**
   - **Objective:** Add calculated skill proficiency section to the stats sidebar
   - **Files/Functions to Modify/Create:**
     - `src/components/StatsPanel.tsx` - Add proficiency section using calculated data
     - `src/components/SkillProficiency.tsx` - New component for single proficiency display
   - **Tests to Write:**
     - `StatsPanel.test.tsx` updates - Verify proficiency section renders
     - `SkillProficiency.test.tsx` - Test level pip display and calculations
   - **Steps:**
     1. Write tests for SkillProficiency component (renders correct number of pips, shows current/max levels)
     2. Write tests for updated StatsPanel (renders proficiency section, integrates with useSkillCalculation)
     3. Run tests to see them fail
     4. Create SkillProficiency component showing skill name and level pips (filled/empty squares)
     5. Update StatsPanel to use useSkillCalculation hook and render proficiency list
     6. Add section divider between core stats and proficiencies
     7. Run tests to confirm they pass

### 4. **Phase 4: Project Cards with Jewel Display**
   - **Objective:** Create quest log showing project cards with embedded jewels
   - **Files/Functions to Modify/Create:**
     - `src/components/QuestCard.tsx` - New component for individual project display
     - `src/components/QuestLog.tsx` - New component for quest list container
     - `src/App.tsx` - Integrate QuestLog into main layout
   - **Tests to Write:**
     - `QuestCard.test.tsx` - Test card rendering with project data and jewels
     - `QuestLog.test.tsx` - Test quest list rendering and filtering
     - `App.test.tsx` updates - Verify QuestLog integration
   - **Steps:**
     1. Write tests for QuestCard (renders quest name, description, status, jewel slots)
     2. Write tests for QuestLog (renders all quests, handles empty state)
     3. Run tests to see them fail
     4. Create QuestCard component with RPG-style card design showing quest details and JewelSlots
     5. Create QuestLog container that maps quests to QuestCard components
     6. Update App.tsx to include QuestLog in main layout (below or beside stats panel)
     7. Run tests to confirm they pass
     8. Run full test suite and verify all 33+ tests pass

**Open Questions**
1. Visual layout preference: QuestLog beside StatsPanel (2-column) or below it (stacked)? - Default: 2-column layout
2. Jewel color scheme: Realistic gem colors or tech brand colors? - Default: Tech brand colors
3. Max proficiency levels: All skills cap at level 5, or vary by complexity? - Default: Level 5 for all
4. Initial data density: Populate jewels for all quests or just 2-3 examples? - Default: 2-3 examples
5. Quest filtering: Filter by status/tech stack from UI? - Default: No filtering in Phase 4, can add later
