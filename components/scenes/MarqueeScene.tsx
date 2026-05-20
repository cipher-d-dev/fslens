'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MarqueeScene() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    // Simple infinite horizontal marquee
    gsap.to('.marquee-inner', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#8ee000] py-6 overflow-hidden border-y border-black">
      <div ref={textRef} className="marquee-inner flex items-center whitespace-nowrap will-change-transform">
        <h2 className="font-sans text-xl md:text-3xl text-black uppercase tracking-widest font-bold pr-8">
          FSLENS📸 • CINEMATIC VISUALS • FASHION EDITS • CREATIVE STORYTELLING • PODCAST EDITING • FSLENS📸 • CINEMATIC VISUALS • 
        </h2>
        {/* Duplicate for seamless looping */}
        <h2 className="font-sans text-xl md:text-3xl text-black uppercase tracking-widest font-bold pr-8">
          FSLENS📸 • CINEMATIC VISUALS • FASHION EDITS • CREATIVE STORYTELLING • PODCAST EDITING • FSLENS📸 • CINEMATIC VISUALS • 
        </h2>
      </div>
    </section>
  );
}
