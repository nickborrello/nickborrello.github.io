import React, { useState, useEffect, useMemo } from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  const [hasPressedKey, setHasPressedKey] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [canInteract, setCanInteract] = useState(false);

  // Prevent immediate interaction (e.g. from the click that loaded this component)
  useEffect(() => {
    const timer = setTimeout(() => setCanInteract(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Generate wisps with random properties
  const wisps = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      initialX: `${Math.random() * 100}vw`, // Random horizontal position (0 to 100vw)
      initialY: `${Math.random() * 100}vh`, // Random vertical position (0 to 100vh)
      animationDuration: `${10 + Math.random() * 20}s`, // Varying speeds
      animationDelay: `-${Math.random() * 30}s`, // Random start times
      size: `${4 + Math.random() * 8}px`, // Much larger max size (4px to 64px)
      opacity: 0.1 + Math.random() * 0.3, // Subtle opacity
    }));
  }, []);

  const handleInteraction = () => {
    if (!canInteract) return; // Only allow interaction after cooldown

    if (!hasPressedKey) {
      setHasPressedKey(true);
      setIsExiting(true);
      setTimeout(onStart, 1000); // Wait for glitch exit animation
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, [hasPressedKey, onStart]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#2b2b2b] overflow-hidden flex flex-col items-center justify-center transition-all duration-1000 ${isExiting ? 'opacity-0 scale-105' : 'opacity-100'}`}>

      <style>{`
        @keyframes floatFade {
          0% {
            opacity: 0;
            transform: translate(var(--initial-x), var(--initial-y)) rotate(0deg);
          }
          10% {
            opacity: var(--target-opacity);
          }
          50% {
            opacity: var(--target-opacity);
            transform: translate(var(--initial-x), calc(var(--initial-y) - 20px)) rotate(5deg);
          }
          90% {
            opacity: var(--target-opacity);
          }
          100% {
            opacity: 0;
            transform: translate(var(--initial-x), calc(var(--initial-y) - 40px)) rotate(10deg);
          }
        }
        .wisp {
          position: absolute;
          background: white;
          border-radius: 50%;
          filter: blur(2px); /* Slight blur for atmosphere */
          animation-name: floatFade;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 nier-grid-bg opacity-20 pointer-events-none"></div>
      <div className="scanline-overlay"></div>

      {/* Floating Wisps Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {wisps.map((wisp) => (
          <div
            key={wisp.id}
            className="wisp"
            style={{
              width: wisp.size,
              height: wisp.size,
              animationDuration: wisp.animationDuration,
              animationDelay: wisp.animationDelay,
              '--target-opacity': wisp.opacity,
              '--initial-x': wisp.initialX,
              '--initial-y': wisp.initialY,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-12">

        {/* Title Group */}
        <div className="relative">
          <h1 className="font-tech text-6xl md:text-8xl text-nier-beige tracking-[0.2em] font-bold relative z-10 animate-pulse">
            NicK:BoRRello
          </h1>
          {/* Glitch Shadow */}
          <h1 className="font-tech text-6xl md:text-8xl text-red-500/50 tracking-[0.2em] font-bold absolute top-0 left-0 animate-glitch opacity-50 z-0">
            NicK:BoRRello
          </h1>

          <div className="text-xl md:text-2xl text-nier-beige-dim font-tech tracking-[0.5em] mt-2 uppercase">
            Portfolio Ver. 2.0
          </div>
        </div>

        {/* Start Prompt */}
        <div className="mt-24">
          {!isExiting ? (
            <div className="animate-pulse">
              <span className="bg-nier-beige text-nier-darker px-4 py-1 text-lg font-tech tracking-widest font-bold cursor-pointer">
                CLICK TO ENTER
              </span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-nier-beige font-tech tracking-widest text-sm">INITIALIZING...</div>
              <div className="w-48 h-1 bg-nier-dark mx-auto overflow-hidden">
                <div className="h-full bg-nier-beige animate-[scan_1s_ease-in-out_infinite]"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Legal */}
      <div className="absolute bottom-8 text-center w-full">
        <p className="text-nier-beige-dim/40 text-[10px] font-tech tracking-widest uppercase">
          © 2024 Nick Borrello
        </p>
      </div>

    </div>
  );
};