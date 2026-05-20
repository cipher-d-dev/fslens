'use client';
import Image from 'next/image';

const SelectionFrame = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div className="w-full h-full relative border" style={{ borderColor: color, color }}>
    <div className="absolute inset-0 overflow-hidden">{children}</div>
    {/* Corner Handles */}
    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 z-20 pointer-events-none rounded-full" style={{ borderColor: color }} />
    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 z-20 pointer-events-none rounded-full" style={{ borderColor: color }} />
    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 z-20 pointer-events-none rounded-full" style={{ borderColor: color }} />
    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 z-20 pointer-events-none rounded-full" style={{ borderColor: color }} />
  </div>
);

export default function HeroScene() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Text Content */}
      <div className="hero-text-content relative z-30 w-full flex flex-col items-center justify-center pointer-events-none px-4 sm:px-6 pt-24 pb-0 md:pt-0 md:absolute md:inset-0">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-tighter text-white mb-6 sm:mb-8 mix-blend-difference pointer-events-auto">
            Cinematic visuals <br className="hidden md:block"/><i className="font-serif italic font-normal tracking-wide pr-1">&amp;</i> creative storytelling
          </h1>
          <p className="text-[15px] sm:text-base xl:text-lg text-gray-200 font-sans mb-8 sm:mb-10 max-w-[340px] sm:max-w-xl md:max-w-2xl px-4 mix-blend-difference pointer-events-auto leading-relaxed">
            I’m Akindemowo Daniel Oluwafisayomi, a creative photographer and mobile videographer highly skilled at blending photography with nature.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 mix-blend-difference pointer-events-auto">
            <a 
              href="https://drive.google.com/drive/folders/1nL-sKkpg2Et4K4YERxxov8CeP2t_Eid-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-56 px-6 py-3.5 bg-[#b5ff3a] text-black font-sans text-[15px] font-bold rounded-lg hover:bg-[#a3eb2d] transition-colors leading-none tracking-tight text-center inline-flex justify-center items-center"
            >
              View Work
            </a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
              className="w-full sm:w-56 px-6 py-3.5 bg-[#e2e2e2] text-black font-sans text-[15px] font-bold rounded-lg hover:bg-[#d0d0d0] transition-colors leading-none tracking-tight border border-transparent"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Images Row */}
      <div className="w-full h-[300px] sm:h-[350px] relative md:absolute bottom-0 left-0 flex flex-row items-end justify-center gap-2 md:gap-4 px-2 shrink-0 z-0 opacity-100 pb-0 md:pb-8 pointer-events-none overflow-visible -mt-8 md:mt-0">
        <div className="hero-img-0 relative w-[18vw] h-[24vw] md:w-24 md:h-36 bg-[#1a1a1a] shrink-0 shadow-xl z-0 pointer-events-auto transform translate-y-[20%]">
          <SelectionFrame color="#00f0ff">
            <Image src="/scattered-image-1.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        <div className="hero-img-1 relative w-[25vw] h-[35vw] md:w-32 md:h-48 bg-[#1a1a1a] shrink-0 shadow-xl z-10 pointer-events-auto transform translate-y-[10%]">
          <SelectionFrame color="#ff0055">
            <Image src="/scattered-image-2.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        <div className="hero-img-2 relative w-[22vw] h-[30vw] md:w-28 md:h-40 bg-[#1a1a1a] shrink-0 shadow-xl z-10 pointer-events-auto transform translate-y-[15%]">
          <SelectionFrame color="#ffaa00">
            <Image src="/scattered-image-3.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        
        {/* CENTER IMAGE */}
        <div className="hero-img-3 relative w-[35vw] h-[45vw] md:w-48 md:h-[280px] bg-[#1a1a1a] shrink-0 shadow-2xl z-20 pointer-events-auto transform translate-y-[5%]">
          <SelectionFrame color="#ff00ff">
            <Image src="/scattered-image-4.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        
        <div className="hero-img-4 relative w-[25vw] h-[35vw] md:w-32 md:h-48 bg-[#1a1a1a] shrink-0 shadow-xl z-10 pointer-events-auto transform translate-y-[10%]">
          <SelectionFrame color="#00ffaa">
            <Image src="/scattered-image-5.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        <div className="hero-img-5 relative w-[28vw] h-[38vw] md:w-36 md:h-52 bg-[#1a1a1a] shrink-0 shadow-xl z-10 hidden md:block pointer-events-auto transform translate-y-[12%]">
          <SelectionFrame color="#ffaa00">
            <Image src="/scattered-image-6.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
        <div className="hero-img-6 relative w-[22vw] h-[30vw] md:w-28 md:h-40 bg-[#1a1a1a] shrink-0 shadow-xl z-0 hidden md:block pointer-events-auto transform translate-y-[20%]">
          <SelectionFrame color="#00f0ff">
            <Image src="/scattered-image-7.jpeg" fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </SelectionFrame>
        </div>
      </div>
    </div>
  );
}
