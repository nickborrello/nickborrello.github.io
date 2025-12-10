import React, { useState, useEffect, useRef } from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

const BOOT_SEQUENCE = [
  "Commencing System Check",
  "Memory Unit: Green",
  "Initializing Tactics Log",
  "Loading Geographic Data",
  "Vitals: Green",
  "Remaining MP: 100%",
  "Black Box Temperature: Normal",
  "Black Box Internal Pressure: Normal",
  "Activating IFF",
  "Activating FCS",
  "Initializing Network Connection",
  "Launching DBU Setup",
  "Activating Inertia Control System",
  "Activating Environmental Sensors",
  "Equipment Authentication: Complete",
  "Equipment Status: Green",
  "All Systems Green",
  "Combat Preparations Complete_"
];

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-advance the sequence
  useEffect(() => {
    if (currentIndex >= BOOT_SEQUENCE.length) {
      setIsComplete(true);
      // Auto-enter after a short delay or wait for interaction
      // The original game waits, but for a web portfolio, auto-entry is usually smoother.
      // However, to mimic the "Click to Start" feel but better, let's auto-enter or show a prompt.
      // Let's do a short 500ms pause then onStart.
      const timer = setTimeout(() => {
        onStart();
      }, 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLines(prev => [...prev, BOOT_SEQUENCE[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }, 50 + Math.random() * 80); // Random typing speed variance

    return () => clearTimeout(timer);
  }, [currentIndex, onStart]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-[#ded8c1] font-tech overflow-hidden cursor-none">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .loading-ring {
          border: 2px solid transparent;
          border-top: 2px solid #ded8c1;
          border-radius: 50%;
        }
      `}</style>

      {/* Grid Background (Subtle) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ded8c1 1px, transparent 1px), linear-gradient(90deg, #ded8c1 1px, transparent 1px)`,
          backgroundSize: `20px 20px`
        }}
      />

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 p-8 md:p-16 w-full h-full flex flex-col items-start justify-start">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl tracking-widest font-bold">
            LOADING <span className="text-lg md:text-xl font-normal opacity-80">- BOOTING SYSTEM..</span>
          </h1>
        </div>

        {/* Loading Spinner (Top Right) */}
        <div className="absolute top-8 right-8 md:top-16 md:right-16 w-16 h-16 opacity-80">
          <div className="absolute inset-0 w-full h-full loading-ring animate-[spin-slow_2s_linear_infinite]" />
          <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] loading-ring animate-[spin-reverse_3s_linear_infinite] border-top-[#ded8c1]" />
        </div>

        {/* Sequence List */}
        <div
          ref={scrollRef}
          className="flex flex-col gap-2 text-lg md:text-xl tracking-wider opacity-90 max-h-[70vh] overflow-y-auto no-scrollbar"
        >
          {lines.map((line, i) => (
            <div key={i} className="animate-pulse">
              {line}
            </div>
          ))}
        </div>

      </div>

      {/* Footer / Branding (Subtle, No YoRHa) */}
      <div className="absolute bottom-8 right-12 text-[#ded8c1]/20 text-sm tracking-[0.2em] font-bold">
        SYSTEM: nBORRELLO // PORTFOLIO_V2.0
      </div>

      {/* Floating Wisps / Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#ded8c1] rounded-full opacity-0 animate-[float_10s_ease-in-out_infinite]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
           0% { transform: translateY(0) translateX(0); opacity: 0; }
           20% { opacity: 0.2; }
           50% { opacity: 0.5; transform: translateY(-20px) translateX(10px); }
           80% { opacity: 0.2; }
           100% { transform: translateY(-40px) translateX(20px); opacity: 0; }
        }
        .loading-ring {
          border: 2px solid transparent;
          border-top: 2px solid #ded8c1;
          border-radius: 50%;
        }
      `}</style>

    </div>
  );
};