import React, { useState, useEffect, useMemo } from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  const [hasPressedKey, setHasPressedKey] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Generate wisps with random properties
  const wisps = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 15}s`, // Slow, drifting movement
      animationDelay: `${Math.random() * 5}s`,
      size: `${2 + Math.random() * 5}px`, // Varying sizes
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasPressedKey) {
        setHasPressedKey(true);
        setIsExiting(true);
        setTimeout(onStart, 1500); // Wait for glitch exit animation
      }
    };

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
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: var(--target-opacity);
          }
          80% {
            opacity: var(--target-opacity);
          }
          100% {
            transform: translateY(-20vh) translateX(20px) rotate(180deg);
            opacity: 0;
          }
        }
        .wisp {
          position: absolute;
          background: white;
          border-radius: 50%;
          bottom: -20px;
          filter: blur(1px);
          animation-name: floatUp;
          animation-timing-function: linear;
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
              left: wisp.left,
              width: wisp.size,
              height: wisp.size,
              animationDuration: wisp.animationDuration,
              animationDelay: wisp.animationDelay,
              '--target-opacity': wisp.opacity,
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