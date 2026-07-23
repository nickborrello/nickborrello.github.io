# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Technical recruiters, hiring managers, and engineering peers looking for a memorable, immersive showcase of Nick Borrello's engineering skills, projects, and background.

## Product Purpose
An interactive personal developer portfolio styled after the diegetic system/pause menu UI of NieR: Automata, allowing visitors to inspect developer status, project inventory, tech equipment/skills, experience messages, and credits while experiencing a game-inspired HUD interface.

## Positioning
A web portfolio disguised as a 1:1 diegetic NieR: Automata OS menu—blending authentic tactical HUD aesthetics, sound cues, boot sequence, grid overlays, and keyboard navigation with functional developer portfolio content.

## Operating Context
Web browsers across desktop and mobile viewports. Designed to deliver an immediate "wow" factor for developers and gamers while providing clear, efficient navigation for recruiters skimming candidate details.

## Capabilities and Constraints
- **NieR Menu Paradigm**: StatusView (Profile & Github activity), InventoryView (Projects showcase), EquipmentView (Skills & Tech stack), MessagesView (About & Experience), and Credits.
- **Diegetic UI Mechanics**: Interactive boot sequence, audio/chime cues, subtle glitch keyframes, fine grid mesh overlay, custom scrollbars, and full keyboard navigation (`A`/`D` and Arrow keys).
- **Tech Stack**: React 19, TypeScript, Vite, Lucide icons, Tailwind CSS customized with NieR palette (`#ded8c1`, `#cfc9b0`, `#4b4845`, `#3a3836`, `#575451`, `#a19d8a`).
- **Data Architecture**: Structured static data in `data.ts`, `types.ts`, `navigation.ts`, supplemented with live GitHub calendar integration.

## Brand Commitments
- **Name**: Nick Borrello
- **Visual Universe**: NieR: Automata UI system (Square Enix)
- **Palette**: Nier Beige (`#ded8c1`), Dim Beige (`#cfc9b0`), Nier Dark (`#4b4845`), Darker (`#3a3836`), Panel (`#575451`), Grid (`#a19d8a`)
- **Typography**: Rajdhani (Tech HUD headers), Inter (Body text)

## Evidence on Hand
- Real project inventory and skills documented in `data.ts`
- Live GitHub activity calendar via `components/GitHubCalendar.tsx`
- Working interactive boot sequence and tab navigation in `App.tsx`

## Product Principles
1. **Authenticity**: Maintain faithful adherence to NieR: Automata UI paradigms (monochromatic beige/dark palette, angular slants, grid lines, sound feedback).
2. **Scannability**: Ensure technical info, projects, and contact points are clearly readable despite the stylized theme.
3. **Immersive Micro-interactions**: Enhance visitor engagement through keybindings, glitch effects, hover states, and smooth tab transitions.

## Accessibility & Inclusion
Maintain contrast between dark text (`#3a3836`/`#4b4845`) and beige background (`#ded8c1`); support both keyboard shortcut navigation (`A`/`D`/Arrow keys) and standard mouse/touch click interactions.
