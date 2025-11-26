
import React from 'react';

interface BookLayoutProps {
  onBack: () => void;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightInfo?: React.ReactNode;
  backLabel?: string;
}

const BookLayout: React.FC<BookLayoutProps> = ({ 
  onBack, 
  leftContent, 
  rightContent, 
  footerLeftActions, 
  footerRightInfo,
  backLabel = "Back"
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-fade-in relative z-10">
            
        {/* BOOK CONTAINER - Maximized Size */}
        <div className="relative w-[94vw] h-[98vh] flex shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[8px] border-[#2a2824] bg-[url('/book.png')] bg-cover bg-center rounded-sm overflow-hidden">
            
            {/* Spine Shadow - Darkest at center (crease), fading outward */}
            <div className="absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 z-20 bg-gradient-to-r from-transparent via-black/80 to-transparent pointer-events-none"></div>
            {/* Center line for the actual binding stitch/glue */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-20 bg-[#0c0a05]/40"></div>

            {/* Background Flattening Overlay */}
            <div className="absolute inset-0 bg-[#eaddcf]/30 pointer-events-none"></div>

            {/* --- LEFT PAGE --- */}
            <div className="flex-1 relative flex flex-col overflow-hidden pr-10 md:pr-16 mx-4 mb-4">
                {/* Page Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 pointer-events-none mix-blend-multiply"></div>
                
                 {/* Content Container */}
                 <div className="relative z-10 flex-1 flex flex-col overflow-y-auto h-full">
                     {leftContent}
                 </div>

                 {/* Left Page Footer (Controls) */}
                 <div className="relative z-20 p-4 border-t border-[#8c8574]/30 flex items-center gap-4 mt-auto">
                   <button 
                      onClick={onBack}
                      className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-4 py-2 border border-slate-600 rounded-sm shadow-md transition-all active:scale-95 group"
                   >
                      <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[10px] font-bold bg-slate-800 group-hover:bg-slate-700">Esc</div>
                      <span className="font-bold text-sm text-shadow-sm group-hover:text-white">
                        {backLabel}
                      </span>
                   </button>
                   {footerLeftActions}
                </div>
            </div>

            {/* --- RIGHT PAGE --- */}
            <div className="flex-1 relative flex flex-col overflow-hidden pl-10 md:pl-16 mx-4 mb-4">
                {/* Page Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 pointer-events-none mix-blend-multiply"></div>
                
                 {/* Content Container */}
                 <div className="relative z-10 flex-1 flex flex-col overflow-y-auto h-full">
                     {rightContent}
                 </div>

                {/* Right Page Footer (Info) */}
                {footerRightInfo && (
                  <div className="relative z-20 p-4 border-t border-[#8c8574]/30 flex justify-end items-center gap-4 mt-auto bg-[#eaddcf]/90 backdrop-blur-sm">
                    <div className="hidden md:flex gap-4 text-[#5c5546] text-sm font-bold opacity-80">
                      {footerRightInfo}
                    </div>
                  </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default BookLayout;
