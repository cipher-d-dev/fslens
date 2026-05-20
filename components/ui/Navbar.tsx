'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Camera } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/80 backdrop-blur-xl border-b border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl h-16 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/" className="text-white text-2xl tracking-tighter hover:text-gray-300 transition-colors relative z-10 flex items-center group">
            <span className="font-script text-3xl font-medium tracking-wide">FS</span>
            <span className="font-display tracking-tight ml-0.5 relative">
              lens
              <Camera className="w-4 h-4 text-[#b5ff3a] absolute -top-2 -right-4 -rotate-12 group-hover:rotate-0 transition-transform" />
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-sans text-gray-300">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')} className="hover:text-white transition-colors cursor-pointer">Process</a>
          <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')} className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="hover:text-white transition-colors cursor-pointer">Contact</button>
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="hidden md:flex px-5 py-2.5 bg-[#b5ff3a] text-black font-semibold rounded-[4px] hover:bg-[#a3eb2d] transition-colors text-sm tracking-tight items-center gap-2">
            Let&apos;s Talk
          </button>
          
          <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-20">
            <span className="block w-6 h-[2px] bg-white rounded-full"></span>
            <span className="block w-6 h-[2px] bg-white rounded-full"></span>
            <span className="block w-6 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
