'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KeepScrolling() {
  const pillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fades out and moves down when the third section 'Features Scene' comes into view
    gsap.to(pillRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: 'none',
      scrollTrigger: {
        trigger: '#features-scene',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }
    });
  }, []);

  return (
    <div 
      ref={pillRef} 
      className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] items-center justify-center px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-sans text-sm font-medium tracking-wide shadow-2xl pointer-events-none mix-blend-screen"
    >
        <svg className="w-4 h-4 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="7" y="3" width="10" height="18" rx="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v3" />
        </svg>
        Keep scrolling
    </div>
  );
}
