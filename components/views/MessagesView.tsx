import React from 'react';
import { CONTACTS, USER_INFO } from '../../data';

export const MessagesView: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full animate-fadeIn">
      
      {/* Nier Header */}
      <div className="flex items-baseline gap-2 md:gap-4 mb-4 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark/20 absolute top-0 left-0 translate-x-2 translate-y-2 tracking-[0.1em]">
            ABOUT
          </h1>
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            ABOUT
          </h1>
        </div>
        <span className="text-sm md:text-lg font-tech text-nier-dark/70 tracking-widest uppercase -ml-1">
          - User Profile
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0 overflow-hidden">
         {/* Left: Contact List / Connect */}
         <div className="w-full lg:w-[35%] border-r border-nier-dark/20 pr-4 pt-2 overflow-y-auto custom-scrollbar">
            <h4 className="text-black font-tech font-bold uppercase tracking-widest mb-4 border-b border-nier-dark/10 pb-1">
               Connect
            </h4>
            <div className="space-y-2">
               {CONTACTS.map((contact, idx) => (
                  <a 
                     key={idx} 
                     href={contact.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 p-3 bg-nier-beige-dim/10 border border-nier-dark/5 hover:bg-nier-dark hover:text-nier-beige transition-colors group cursor-pointer"
                  >
                     <contact.icon size={18} />
                     <div className="flex-1 font-tech text-lg font-medium uppercase tracking-wide group-hover:font-bold">
                        {contact.platform}
                     </div>
                     <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </a>
               ))}
            </div>
         </div>

         {/* Right: Bio / About Details */}
         <div className="flex-1 bg-nier-beige-dim/20 border border-nier-dark/10 p-8 flex flex-col overflow-y-auto custom-scrollbar">
            
            <div className="w-full text-left">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-nier-dark"></div>
                  <h3 className="text-3xl font-tech text-black font-bold uppercase tracking-widest">
                    {USER_INFO.name}
                  </h3>
               </div>
               
               <div className="mb-6">
                  <span className="bg-nier-dark text-nier-beige px-3 py-1 text-xs font-tech font-bold uppercase tracking-widest">
                     {USER_INFO.title}
                  </span>
                  <span className="ml-3 font-tech text-black/70 font-medium tracking-wide">
                     {USER_INFO.location}
                  </span>
               </div>

               <p className="font-tech text-xl text-black font-medium leading-relaxed text-justify border-t border-nier-dark/20 pt-6">
                  {USER_INFO.bio}
               </p>

               <div className="mt-8 p-4 bg-nier-beige border border-nier-dark/10">
                  <div className="text-xs text-black font-bold uppercase tracking-widest mb-1 opacity-70">Focus</div>
                  <p className="font-tech text-lg text-black font-medium">
                     {USER_INFO.tagline}
                  </p>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};