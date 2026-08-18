/**
 * ============================================================
 * NICHOLAS BORRELLO — AI & SOFTWARE ENGINEER PORTFOLIO
 * Recruiter-first simplified engineering portfolio (Issue #3)
 * ============================================================
 * THESIS: The engineering work speaks for itself without
 * defensive meta-language, "receipts", or telemetry strips.
 * Clean, fast, accessible, and confident.
 *
 * PALETTE: Warm beige (#ded8c1), charcoal ink (#3a3836),
 * fine hairline accents, and muted machine-red (#8c3a2c).
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
