
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  altText?: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, altText = "Project Preview" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full h-full mb-4 group select-none bg-[#1a1814]">
      {/* Frame / Container */}
      <div className="absolute inset-0 bg-[#cbbfa6] border-4 border-[#8c8574] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Image */}
        {images.length > 0 ? (
            <img 
              src={images[activeIndex]} 
              alt={altText} 
              className="w-full h-full object-cover sepia-[0.15] contrast-[1.15] brightness-90 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500"
            />
        ) : (
           <div className="w-full h-full flex items-center justify-center bg-stone-800 opacity-50">
             <span className="text-stone-500 font-cinzel">No Visual</span>
           </div>
        )}

        {/* Map Overlay Texture (Torn Paper edges effect & Grunge) */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-black/20 mix-blend-overlay box-border"></div>
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-20 mix-blend-multiply"></div>
      </div>

      {/* Layer Switcher - Top Left Overlay */}
      <div className="absolute top-4 left-4 z-20 flex flex-col items-center gap-1">
              {/* Previous/Up Arrow */}
              <button 
                onClick={handleNext}
                disabled={activeIndex === images.length - 1}
                className={`text-[#f5f5f4] hover:text-[#eab308] drop-shadow-md transition-colors bg-black/60 hover:bg-black/80 rounded-sm p-0.5 backdrop-blur-sm border border-white/10 ${activeIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ChevronUp size={14}/>
              </button>

              {/* Indicators */}
              <div className="flex flex-col-reverse gap-0 items-center bg-black/50 py-1 px-1 rounded-sm backdrop-blur-sm border border-white/10 shadow-lg">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rotate-45 border transition-all shadow-sm ${
                      idx === activeIndex 
                        ? 'bg-[#eab308] border-[#fde047] scale-110 shadow-[0_0_8px_#eab308]' 
                        : 'bg-[#5c5546] border-[#8c8574] opacity-60'
                    }`}
                  />
                ))}
              </div>

              {/* Next/Down Arrow */}
              <button 
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`text-[#f5f5f4] hover:text-[#eab308] drop-shadow-md transition-colors bg-black/60 hover:bg-black/80 rounded-sm p-0.5 backdrop-blur-sm border border-white/10 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ChevronDown size={14}/>
              </button>
        </div>
    </div>
  );
};

export default ProjectGallery;
