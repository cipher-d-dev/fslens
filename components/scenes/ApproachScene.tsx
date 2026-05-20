'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const tabs = [
  { id: 'video', label: 'Videography', video: '/pill-section-videography.mp4' },
  { id: 'photo', label: 'Photography', image: '/pill-section (1).jpeg' },
  { id: 'edit', label: 'Post-Production', image: '/pill-section (2).jpeg' },
  { id: 'design', label: 'Design', image: '/pill-section (3).jpeg' },
];

export default function ApproachScene() {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div id="about" className="py-24 md:py-0 w-full h-full flex flex-col justify-center items-center">
       <div className="container mx-auto px-6 max-w-5xl text-center mb-10">
         <h2 className="font-display text-[1.75rem] md:text-4xl lg:text-[3.5rem] tracking-tighter leading-[1] font-bold text-white mb-4">
           Akindemowo Daniel Oluwafisayomi
         </h2>
         <p className="text-gray-300 font-sans mx-auto text-[13px] sm:text-sm md:text-base max-w-3xl text-center leading-relaxed font-light">
           Based in Lagos: 17, Shiro street Fadeyi. University of Lagos. <br className="hidden md:block" />
           WhatsApp: 09065456592 • DOB: 31 Oct, 2026
         </p>
       </div>

       <div className="w-full max-w-6xl mx-auto px-1 sm:px-4 md:px-6">
         {/* Animated Pill Container */}
         <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar w-full">
           <div className="relative flex items-center p-1 bg-[#0a0a0a] rounded-full border border-white/10 shrink-0 shadow-lg w-auto min-w-min mx-auto max-w-[100vw]">
             {/* Slider Highlight */}
             <div 
               className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
               style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
             />
             
             {tabs.map((tab, i) => (
               <button 
                  key={tab.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  onClick={() => setActiveTab(i)}
                  className={`relative z-10 px-2 sm:px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] sm:text-[13px] md:text-sm font-medium transition-colors duration-300 whitespace-nowrap text-center flex-1 ${
                    activeTab === i ? 'text-black' : 'text-gray-300 hover:text-white'
                  }`}
               >
                 {tab.label}
               </button>
             ))}
           </div>
         </div>
         
         <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-zinc-900 rounded-[20px] md:rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl mt-4 md:mt-12 backdrop-blur-md">
           {tabs.map((tab, i) => (
             <div 
               key={tab.id} 
               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
             >
               {tab.video ? (
                 <video src={tab.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
               ) : (
                 <Image src={tab.image!} fill className="object-cover" alt={tab.label} priority={i === 0} referrerPolicy="no-referrer" />
               )}
             </div>
           ))}
         </div>
       </div>
    </div>
  );
}
