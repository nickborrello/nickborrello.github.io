# Task for reviewer

[Read from: /Users/nickborrello/Desktop/Projects/nickborrello.github.io/plan.md, /Users/nickborrello/Desktop/Projects/nickborrello.github.io/progress.md]

You are the finishing reviewer for an Impeccable design build: fresh eyes on a done artifact, outside the build thread's attention gravity. You do not edit anything; the parent applies your fixes. If your model can view images, open the screenshots listed below before judging. This is a RE-SCAN of the whole build after one incremental change (a capability chip swap), so run all checks from scratch.

## Original request (GitHub issue #2)
Structural redesign of nickborrello.github.io from a NieR:Automata game-menu portfolio (boot sequence, tab shell, scanlines, S-Tier grades, fake system metadata) to a normal scrollable portfolio where NieR influence is 20% seasoning. Required: hero with name/AI Engineer/positioning/CTAs + proof metric strip (70% cost, 80% manual entry, 100% accuracy); 3 featured visual case studies (Resumancer, Baystate AI Data Pipeline, ShopSite-MCP) with Problem/Built/Impact/Stack; experience timeline with education separated; capability chips with proof-backed usage, no tiers; short about/contact; anchor nav; SEO metadata; no dead links; Tailwind in build pipeline; prefers-reduced-motion; responsive 320 to 1440.

## Incremental change since last review
The Applied AI capability chip "Vercel AI SDK" was renamed to "Agentic" and its proof list now shows both Baystate AI Data Pipeline and Resumancer (data.ts). Vercel AI SDK remains only as a factual tech detail inside the Resumancer case study and its proof detail. The generated public/resume.pdf was regenerated with the capability line now reading "LLM orchestration · Agentic workflows · RAG / semantic search · NLP / spaCy · MCP". All docs (PRODUCT.md, DESIGN.md, surface brief) were checked for consistency with this change.

## Artifacts
- Project root: /Users/nickborrello/Desktop/Projects/nickborrello.github.io
- Artifact: index.html (App shell in App.tsx; components: Header, Hero, Section, FeaturedWork, Experience, Capabilities, About, Footer, CornerTicks; diagrams in components/diagrams/)
- Direction contract: opening comment block of App.tsx (THESIS / OWN-WORLD / STORY / FIRST VIEWPORT / FORM)
- PRODUCT.md and DESIGN.md at repo root; surface brief at .impeccable/surfaces/index-html.md
- Detector: clean (exit 0) after documented inline ignores for brief-pinned choices (Inter font, mesh texture)
- Screenshots (desktop 1440x900 + mobile 375): /tmp/qa/1-hero.png, 2-work1.png, 3-work2.png, 4-exp.png, 5-skills.png, 6-about.png, 7-mobile-hero.png
- Live render: http://127.0.0.1:4173/ (vite preview running)

## Checks, in order
1. **Persistence.** PRODUCT.md and DESIGN.md exist and match the built world (beige/charcoal, Rajdhani+Inter, hairline borders, mesh divider strips with corner ticks, accent #8c3a2c, no game-menu IA, capability chips proof-backed without tiers).
2. **Ceiling.** The world is 'field terminal — NieR as seasoning': native devices are HUD lettering, hairline frames, corner marks, telemetry readouts, mesh divider strips, one machine-red accent. Name devices the build left unused or underused. Compare commitment and finish.
3. **Contract, promise by promise.** For each of the five blocks in the App.tsx contract, does the render keep the promise? Memory test on the first viewport: what would a visitor describe an hour later — the thesis (engineering proof) or a mood?
4. **Truth.** No invented claims: metrics must trace to data.ts claims; diagrams labeled as architecture; no dead links shipped; capability proofs must each trace to a real project/role context.

Do NOT run a detector pass. Mechanical findings belong to the parent.

## Output contract
Return exactly four sections: persistence (pass/fail with specifics), ceiling (unused native devices or 'reached'), material_fixes (ordered, most material first, each one line tied to a check or contract promise, at most eight), keep (one line naming what must not be diluted while fixing). No praise, no summary prose.

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: review-findings, residual-risks

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
`criteriaSatisfied[].status` must be exactly one of: satisfied, not-satisfied, not-applicable.
`commandsRun[].result` must be exactly one of: passed, failed, not-run.
`manualNotes` and `notes` are optional strings; an empty string means no note and does not satisfy `manual-notes` evidence.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```