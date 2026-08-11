/**
 * ============================================================
 * NICHOLAS BORRELLO — AI ENGINEER PORTFOLIO
 * Direction contract (issue #2, Aug 2026)
 * ============================================================
 * THESIS: The engineering work is the main character; NieR
 * styling is 20% seasoning, not the interface. Refuses both
 * the tabbed app-shell portfolio and its own boot-gated
 * predecessor: a scrollable field document where identity,
 * proof, and action sit above the fold.
 *
 * OWN-WORLD: warm beige ground (#ded8c1), charcoal ink, hairline
 * 1px borders, squared 2px corners, fine 3px grid mesh in the
 * hero/header/divider strips only. Rajdhani for display and
 * labels, Inter for body. One muted machine-red accent for
 * links, focus, and status. No overlays, no scanlines, no
 * nested bordered panels, no tiers, no fake system metadata.
 *
 * STORY: a visitor knows within one viewport who Nick is (AI
 * engineer building production LLM systems), sees three proof
 * metrics, reads three visual case studies with outcomes,
 * walks a quiet timeline, clicks capability chips to see real
 * usage evidence, and can email or open GitHub one scroll away.
 *
 * FIRST VIEWPORT: mesh-textured beige ground; hairline header
 * with wordmark, anchor nav, and RESUME CTA; hero carries the
 * name in Rajdhani display, "AI Engineer", a positioning line,
 * one-sentence summary, four CTAs, a status line, and the
 * telemetry strip — three qualitative proof points (no invented
 * metrics) — the page's evidence at a glance.
 *
 * FORM: document portfolio (Experience mode with persuasive
 * clarity), brief-pinned IA from issue #2: Hero → Featured
 * Work → Experience → Capabilities → About. No concept
 * tournament; the brief specifies the structure.
 * ============================================================
 */
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Experience } from './components/Experience';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-nier-beige text-nier-darker font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-nier-darker focus:text-nier-beige focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FeaturedWork />
        <Experience />
        <Capabilities />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
