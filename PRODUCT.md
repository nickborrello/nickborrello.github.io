# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Technical recruiters, hiring managers, and engineering peers looking for a memorable, immersive showcase of Nick Borrello's engineering skills, projects, and background.

## Product Purpose
A personal engineering portfolio for Nicholas Borrello — AI Engineer — where visitors immediately see who he is, what systems he builds, his strongest measured outcomes, featured case studies with visuals, a readable career timeline, proof-backed capabilities, and direct contact. The NieR: Automata-inspired identity survives as atmosphere; the engineering work is the content.

## Positioning
A scrollable engineering portfolio that carries a restrained NieR: Automata field-UI identity (beige/charcoal palette, Rajdhani HUD lettering, fine grid texture, hairline frames, small technical annotations) while keeping the engineering work unmistakably the main character. The game-menu interaction model is retired: no boot sequence, no tab shell, no fake system metadata — content is immediately readable and evidence is the proof.

## Operating Context
Web browsers across desktop and mobile viewports. Designed to deliver an immediate "wow" factor for developers and gamers while providing clear, efficient navigation for recruiters skimming candidate details.

## Capabilities and Constraints
- **Document Portfolio IA**: Hero (identity + proof metrics) → Featured case studies (Resumancer, Baystate AI pipeline, ShopSite-MCP) → Experience timeline (employment + education separated) → Capabilities (proof-backed, no tiers) → About/contact.
- **Restrained NieR Styling**: warm beige ground, charcoal ink, hairline borders, fine grid mesh in hero/header/divider strips only, Rajdhani display type, one muted machine-red accent for links/focus/status.
- **Proof-Backed Interaction**: capability chips reveal 1–4 real usage examples tied to named projects/roles (single-example chips trace to their one true shipping context); page remains fully understandable without interaction.
- **Tech Stack**: React 19, TypeScript, Vite, Lucide icons, Tailwind CSS (build-pipeline, no CDN) with the NieR palette (`#ded8c1`, `#cfc9b0`, `#4b4845`, `#3a3836`, `#575451`, `#a19d8a`) plus accent `#8c3a2c`.
- **Data Architecture**: Structured static data in `data.ts` / `types.ts` with separate work-experience, education, capability, and project models; live screenshots of Resumancer in `public/work/`.

## Brand Commitments
- **Name**: Nicholas Borrello
- **Visual Universe**: NieR: Automata field UI as seasoning (Square Enix)
- **Palette**: Nier Beige (`#ded8c1`), Dim Beige (`#cfc9b0`), Nier Dark (`#4b4845`), Darker (`#3a3836`), Panel (`#575451`), Grid (`#a19d8a`), accent `#8c3a2c`
- **Typography**: Rajdhani (Tech HUD headers), Inter (Body text)

## Evidence on Hand
- Real project, experience, education, and capability data documented in `data.ts` with proof traces
- Live Resumancer product captures in `public/work/`; authored architecture diagrams in `components/diagrams/`
- All metrics trace to documented achievements; dead URLs are omitted from shipped links

## Product Principles
1. **Evidence first**: Engineering outcomes, case studies, and proof-backed capabilities outrank decoration; every metric and link must be real and defensible.
2. **Immediate comprehension**: A visitor answers who Nick is, what he builds, his role, his strongest proof, and how to contact him without clicking anything.
3. **NieR as seasoning, not structure**: The beige/charcoal HUD identity survives as atmosphere; the page behaves like a normal responsive document with standard navigation, scrolling, and semantics.

## Accessibility & Inclusion
Maintain contrast between dark text (`#3a3836`/`#4b4845`) and beige background (`#ded8c1`); standard keyboard navigation through semantic links, visible focus states, `prefers-reduced-motion` support, and skip-to-content.
