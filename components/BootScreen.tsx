import React, { useState, useEffect, useRef } from 'react';

interface BootScreenProps {
    onComplete: () => void;
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

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex >= BOOT_SEQUENCE.length) {
            const timer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setLines(prev => [...prev, BOOT_SEQUENCE[currentIndex]]);
            setCurrentIndex(prev => prev + 1);
        }, 50 + Math.random() * 80);

        return () => clearTimeout(timer);
    }, [currentIndex, onComplete]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-[#ded8c1] font-tech overflow-hidden cursor-none">
            {/* Styles for spinner */}
            <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .loading-ring { border: 2px solid transparent; border-top: 2px solid #ded8c1; border-radius: 50%; }
      `}</style>

            {/* Container */}
            <div className="relative z-10 p-8 md:p-16 w-full h-full flex flex-col items-start justify-start">
                {/* Simple Header */}
                <div className="flex items-center gap-4 mb-8">
                    <h1 className="text-3xl md:text-4xl tracking-widest font-bold">
                        LOADING <span className="text-lg md:text-xl font-normal opacity-80">- BOOTING SYSTEM..</span>
                    </h1>
                </div>

                {/* Spinner */}
                <div className="absolute top-8 right-8 md:top-16 md:right-16 w-16 h-16 opacity-80">
                    <div className="absolute inset-0 w-full h-full loading-ring animate-[spin-slow_2s_linear_infinite]" />
                    <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] loading-ring animate-[spin-reverse_3s_linear_infinite] border-top-[#ded8c1]" />
                </div>

                {/* Terminal Text */}
                <div
                    ref={scrollRef}
                    className="flex flex-col gap-2 text-lg md:text-xl tracking-wider opacity-90 max-h-[70vh] overflow-y-auto no-scrollbar"
                >
                    {lines.map((line, i) => (
                        <div key={i} className="animate-pulse">{line}</div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 right-12 text-[#ded8c1]/20 text-sm tracking-[0.2em] font-bold">
                SYSTEM: nBORRELLO // PORTFOLIO_V2.0
            </div>
        </div>
    );
};
