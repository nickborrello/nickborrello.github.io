---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Homepage surface brief

## Scope & mode
Single-page portfolio (index.html). Mode: **Experience** — the work itself leads from the first viewport; the interface recedes into a clean document. Persuasive clarity is a hard requirement of the mode: a first-time visitor (recruiter / hiring manager / engineering peer) must answer five questions within one viewport, in the form's own vocabulary.

## Audience & job
- Audience: technical recruiters, hiring managers, engineering peers skimming candidate signal.
- Job: judge fit fast. Decide within ~30 seconds whether Nick is an AI Engineer worth interviewing.
- Action: click View Work / open GitHub / email / view resume — the contact path must be reachable from the first viewport and repeated at the close.

## Proof & content
- Three hero proof points (qualitative only — no fabricated metrics): hybrid multi-provider routing (Gemini Flash ⇄ GPT-4o-mini), agentic copilot with evidence-traced edits (Resumancer), automated data ops (scraper fleet → registered products).
- Three visual case studies: Resumancer (live screenshots from resumancer.dev in public/work/), Baystate AI Data Pipeline (authored architecture diagram — pipeline is private), ShopSite-MCP (authored MCP architecture diagram — repo private).
- Experience timeline (employment: Baystate, Atlas, Allegro; education: WPI MS separately).
- Capabilities in three groups (Applied AI / Application Engineering / Data & Infrastructure), chips reveal 1–4 real usage examples; no tiers.
- Dead URLs omitted (ShopSite-MCP repo, bay-state-app.vercel.app, ai-pdf-search, AxolotlAuctions, 7Factor). Resume CTA resolves to the generated /resume.pdf.
- Contact: email, GitHub, LinkedIn. GitHub activity widget removed.

## Constraints
- NieR influence is 20% seasoning: palette/type/texture only, no game menu, no boot, no scanlines, no fake metadata, no nested bordered panels, no S/A tier grades.
- Normal document scrolling at all viewports (320 → 1440+); sticky light header on desktop; keyboard/screen-reader semantics default.
- prefers-reduced-motion respected; no mandatory animation before content.

## Chosen direction & memorable moment
"Field terminal" document (see DESIGN.md). Memorable moment: the telemetry strip — three qualitative proof points presented as readouts directly under the hero, so the first viewport shows the work's substance before the visitor scrolls.

## Unresolved decisions
- `public/resume.pdf` ships a generated resume (facts from data.ts only) so all Resume CTAs resolve; owner should replace with their official resume PDF before job applications.
- Resumancer screenshots captured Aug 2026; re-capture if the product UI changes materially.
