# DESIGN.md — Nicholas Borrello Portfolio

<!-- impeccable:design-schema 1 -->

## World

**"Field terminal" — NieR as seasoning, not skin.** The portfolio uses the materials of the NieR: Automata universe — warm beige ground, charcoal ink, Rajdhani display headings, fine grid mesh, hairline frames — without the heavy game-menu or meta-telemetry baggage. The page is a clean, modern, scrollable engineering document whose primary subject is production software and systems engineering.

## Palette

| Token | Value | Role |
|---|---|---|
| `nier-beige` | `#ded8c1` | Page ground |
| `nier-beige-dim` | `#cfc9b0` | Secondary panels, dividers, alt rows |
| `nier-dark` | `#4b4845` | Secondary ink (labels, muted text) |
| `nier-darker` | `#3a3836` | Primary ink (headings, body) |
| `nier-panel` | `#575451` | Dark panel fills (buttons, header) |
| `nier-grid` | `#a19d8a` | Grid mesh lines, faint hairlines |
| `accent` | `#8c3a2c` | Links, focus rings, status dot, bullet markers |

Contrast rules: ink `#3a3836` on beige `#ded8c1` ≈ 12:1. Accent is used at ≥ 4.5:1 against beige.

## Typography

- **Rajdhani** (500/600/700) — display headings, section indices, buttons, tech stack tags. Uppercase with tracking is reserved for short display strings.
- **Inter** (400/500/600) — body, summaries, case study highlights, experience bullets.
- Scale: display 2.5–5.5rem (hero title), section titles 2–3rem, body 0.9375–1.0625rem at comfortable reading measure.

## Texture & borders

- Fine 3px grid mesh at 3–5% opacity, applied to hero background and divider strips. Never a fixed viewport overlay.
- Section dividers are mesh strips with hairline top/bottom borders and corner ticks.
- Hairline borders: 1px `nier-dark` at 10–20% opacity.
- Corners: 2px radius (squared aesthetic). Corner ticks frame key visual assets and contact panels.

## Interaction & motion

- Anchor navigation (`Work · Experience · Skills · About`) with sticky header; standard browser scrolling and native accessibility.
- Static, scan-friendly skills layout without unnecessary disclosure steps.
- Motion: subtle entrance transitions (`rise-in`, 300–450ms) respecting `prefers-reduced-motion`.
