# DESIGN.md — Nicholas Borrello Portfolio

<!-- impeccable:design-schema 1 -->

## World

**"Field terminal" — NieR as seasoning, not skin.** The previous identity was the NieR pause-menu itself (boot sequence, tab machine, scanlines, fake system metadata). The redesign keeps the *world's materials* — warm beige/charcoal palette, Rajdhani HUD lettering, fine grid mesh, hairline frames, small technical annotations — but strips the game-menu interaction model. The page is a normal scrollable document whose subject is the engineering work; the NieR influence survives as the in-world *field UI* that surrounds a mission report, not as the report's container. Durable rule: a visitor should be able to read the portfolio as a clean engineering document with the HUD flavoring removed and lose nothing.

## Palette

| Token | Value | Role |
|---|---|---|
| `nier-beige` | `#ded8c1` | Page ground |
| `nier-beige-dim` | `#cfc9b0` | Secondary panels, dividers, alt rows |
| `nier-dark` | `#4b4845` | Secondary ink (labels, muted text) |
| `nier-darker` | `#3a3836` | Primary ink (headings, body) |
| `nier-panel` | `#575451` | Dark panel fills (header strip, buttons) |
| `nier-grid` | `#a19d8a` | Grid mesh lines, faint hairlines |
| `accent` | `#8c3a2c` | Links, focus rings, status dot, featured markers — the one non-neutral note, derived from the world's muted machine-red |

Contrast rules: ink `#3a3836` on beige `#ded8c1` ≈ 12:1 (headings/body). Muted text uses `#4b4845` (≈ 8:1) or beige-dim text at `#cfc9b0` on panel fills. The accent is used at ≥ 4.5:1 against beige (verify with the detector); never for body copy.

## Typography

- **Rajdhani** (500/600/700) — display headings, section labels, metrics, buttons, technical annotations. Uppercase with wide tracking is the HUD register; it is reserved for short display strings. **Never** set paragraphs or achievement bullets in Rajdhani.
- **Inter** (400/500/600) — body, summaries, bullets, navigation, captions.
- Scale: display 2–3.5rem (max 6rem at hero name), labels 0.6875–0.8125rem uppercase tracked `0.14–0.2em`, body 0.9375–1.0625rem at 65–75ch measure.

## Texture & borders

- Fine 3px grid mesh at 3–5% ink opacity, applied **only** to: hero ground, header strip, and thin section-divider strips. Never a fixed viewport overlay; no scanlines anywhere.
- Section dividers are mesh strips with hairline top/bottom borders and corner ticks — the world's frame device, used sparingly.
- Hairline borders: 1px `nier-dark` at 10–20% opacity. One container boundary per meaningful component; no nested bordered panels.
- Corners: 2px radius (the world is squared, not pillowed). Corner ticks (L-marks) may frame key components: case-study visuals, the capability proof panel, the contact panel. No drop shadows except one soft offset shadow where a dark panel must lift off the beige ground.

## Interaction & motion

- Anchor navigation (`Work · Experience · Skills · About`) with sticky header; standard scroll; keyboard/screen-reader semantics are default browser behavior.
- Capability chips are the one interactive disclosure: click reveals the real usage examples behind each capability (1–4, each traced to a named project or role); the default page stays fully comprehensible without any interaction.
- Motion: entrance transitions only (fade + 8–12px rise, exponential ease-out, 300–500ms) — staggered in the hero, and a quiet heading-reveal on each section's label/heading block; hover/focus transitions ≤ 150ms. `prefers-reduced-motion` disables all of it. No boot sequence, no loops, no mandatory animation before content.

## Microcopy

Restrained system annotations are allowed where they add personality without competing with evidence: section labels (`01 / WORK`), status line (`STATUS: OPEN TO RELOCATION`), small technical annotations under headings. Forbidden: fabricated identifiers (System ID, Revision, Data Integrity Verified), tier grades, decorative metadata that mimics system output.

## Evidence rules

Every metric on the page traces to a claim in `data.ts`; every capability chip reveals usage tied to a named project or role; every link resolves (dead URLs are omitted, not shipped). Proof outranks decoration everywhere.
