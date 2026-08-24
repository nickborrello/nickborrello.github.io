/**
 * ============================================================
 * NICHOLAS BORRELLO — AI & SOFTWARE ENGINEER PORTFOLIO
 * ============================================================
 * Authentic NieR: Automata UI aesthetic combined with clean,
 * modern, accessible portfolio architecture.
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
import { NierBackground } from './components/NierBackground';

function App() {
  return (
    <div id="top" className="min-h-screen bg-nier-beige text-nier-darker font-sans relative selection:bg-nier-darker selection:text-nier-beige">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-nier-darker focus:text-nier-beige focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Atmospheric NieR Background: Tactical Mesh, Orbital Arcs & Technical Guidelines */}
      <NierBackground />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <FeaturedWork />
          <Experience />
          <Capabilities />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
