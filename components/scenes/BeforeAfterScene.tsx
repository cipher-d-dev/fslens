'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterScene() {
  const container = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const rawImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation
    gsap.fromTo(container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: container.current, start: 'top 80%' } }
    );
  }, { scope: container });

  // Custom GSAP Draggable logic for the slider (simulated via pointer events for precision)
  useEffect(() => {
    const slider = sliderRef.current;
    const drag = dragRef.current;
    const rawImg = rawImageRef.current;
    
    if (!slider || !drag || !rawImg) return;

    let isDown = false;

    const startDrag = () => { isDown = true; };
    const endDrag = () => { isDown = false; };
    const moveDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      
      let clientX;
      if (e.type === 'touchmove') {
        clientX = (e as TouchEvent).touches[0].clientX;
      } else {
        clientX = (e as MouseEvent).clientX;
      }

      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      
      // Constraints
      percent = Math.max(0, Math.min(100, percent));
      
      gsap.to(drag, { left: `${percent}%`, duration: 0.1 });
      gsap.to(rawImg, { clipPath: `inset(0 ${100 - percent}% 0 0)`, duration: 0.1 });
    };

    drag.addEventListener('mousedown', startDrag);
    drag.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('touchmove', moveDrag, { passive: true });

    return () => {
      drag.removeEventListener('mousedown', startDrag);
      drag.removeEventListener('touchstart', startDrag);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchend', endDrag);
      window.removeEventListener('mousemove', moveDrag);
      window.removeEventListener('touchmove', moveDrag);
    };
  }, []);

  return (
    <section ref={container} className="w-full bg-black py-24 md:py-32 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="font-display text-4xl md:text-[5rem] leading-[0.95] tracking-tight w-full md:w-auto mb-4 md:mb-0">
            Color Grading
          </h2>
          <p className="text-gray-400 max-w-sm text-sm uppercase tracking-widest text-left md:text-right">
            Drag the slider to compare raw LOG footage with the final cinematic grade.
          </p>
        </div>

        {/* Comparison Slider */}
        <div 
          ref={sliderRef}
          className="relative w-full border border-white/10 aspect-video bg-[#111] overflow-hidden select-none cursor-ew-resize rounded-lg"
          data-cursor-hover="true"
        >
          {/* Graded Image (Background) */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/limitless-girl-with-glasses-after.jpeg"
              alt="Graded Footage"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white tracking-widest z-10">GRADED</div>
          </div>

          {/* Raw Image (Foreground, clipped) */}
          <div 
            ref={rawImageRef}
            className="absolute inset-0 z-10"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            <Image 
              src="/limitless-girl-with-glasses-before.jpeg"
              alt="Raw Footage"
              fill
              className="object-cover opacity-60" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white tracking-widest z-10">RAW LOG</div>
          </div>

          {/* Dragger */}
          <div 
            ref={dragRef}
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-[#8ee000] cursor-ew-resize transform -translate-x-1/2"
            style={{ left: '50%' }}
          >
            {/* Center handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#8ee000] rounded-full flex items-center justify-center shadow-lg border-2 border-black/20">
              <div className="w-1 h-4 bg-black rounded-full mx-[2px]" />
              <div className="w-1 h-4 bg-black rounded-full mx-[2px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
