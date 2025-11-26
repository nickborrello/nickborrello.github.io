
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BookLayoutProps {
  onBack: () => void;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  footerLeftActions?: React.ReactNode;
  footerRightInfo?: React.ReactNode;
  backLabel?: string;
  isOpen?: boolean;
}

const BookLayout: React.FC<BookLayoutProps> = ({ 
  onBack, 
  leftContent, 
  rightContent, 
  footerLeftActions, 
  footerRightInfo,
  backLabel = "Back",
  isOpen = true
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="w-full h-full flex items-center justify-center relative z-10">
          {/* BOOK CONTAINER - Maximized Size */}
          <div className="relative w-[94vw] h-[98vh] flex rounded-sm" style={{ perspective: '1000px' }}>
            
            {/* Spine Shadow - Darkest at center (crease), fading outward */}
            <div className="absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 z-20 bg-gradient-to-r from-transparent via-black/80 to-transparent pointer-events-none"></div>
            {/* Center line for the actual binding stitch/glue */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-20 bg-[#0c0a05]/40"></div>

            {/* --- LEFT HALF --- */}
            <motion.div className="flex-1 relative flex flex-col pr-10 md:pr-16"
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "right", backgroundImage: "url('/book.png')", backgroundSize: '200% 100%', backgroundPosition: '0% 50%', backgroundRepeat: 'no-repeat', boxShadow: '0 0 50px rgba(0,0,0,0.8)', border: '8px solid #2a2824', borderRight: 'none', backgroundColor: 'rgba(234, 221, 207, 0.3)', paddingTop: '5rem' }}
            >
                {/* Page Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 pointer-events-none mix-blend-multiply"></div>
                
                {/* Content Container */}
                <div className="relative z-10 flex-1 flex flex-col h-full pl-4 pb-4 pt-16" style={{ overflow: 'visible' }}>
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
            </motion.div>

            {/* --- RIGHT HALF --- */}
            <motion.div className="flex-1 relative flex flex-col pl-10 md:pl-16"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left", backgroundImage: "url('/book.png')", backgroundSize: '200% 100%', backgroundPosition: '100% 50%', backgroundRepeat: 'no-repeat', boxShadow: '0 0 50px rgba(0,0,0,0.8)', border: '8px solid #2a2824', borderLeft: 'none', backgroundColor: 'rgba(234, 221, 207, 0.3)', paddingTop: '5rem' }}
            >
                {/* Page Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 pointer-events-none mix-blend-multiply"></div>
                
                {/* Content Container */}
                <div className="relative z-10 flex-1 flex flex-col h-full pr-4 pb-4 pt-16" style={{ overflow: 'visible' }}>
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
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookLayout;
