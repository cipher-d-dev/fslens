'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, Target, Move, Type } from 'lucide-react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'move' | 'text'>('default');

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('cursor-none-global');

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const cursorMove = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
          ease: 'none',
        });
      };

      const handleHoverEnter = () => setCursorType('pointer');
      const handleHoverLeave = () => setCursorType('default');
      
      const handleMoveEnter = () => setCursorType('move');
      const handleMoveLeave = () => setCursorType('default');
      
      const handleTextEnter = () => setCursorType('text');
      const handleTextLeave = () => setCursorType('default');

      window.addEventListener('mousemove', cursorMove);

      const hitElements = document.querySelectorAll('a, button, input, textarea');
      hitElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverEnter);
        el.addEventListener('mouseleave', handleHoverLeave);
      });
      
      const moveElements = document.querySelectorAll('.hero-img-0, .hero-img-1, .hero-img-2, .hero-img-3, .hero-img-4, .hero-img-5, .hero-img-6, [data-cursor-hover="move"]');
      moveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMoveEnter);
        el.addEventListener('mouseleave', handleMoveLeave);
      });
      
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, strong, em');
      textElements.forEach((el) => {
        el.addEventListener('mouseenter', handleTextEnter);
        el.addEventListener('mouseleave', handleTextLeave);
      });

      return () => {
        window.removeEventListener('mousemove', cursorMove);
        hitElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleHoverEnter);
          el.removeEventListener('mouseleave', handleHoverLeave);
        });
        moveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMoveEnter);
          el.removeEventListener('mouseleave', handleMoveLeave);
        });
        textElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleTextEnter);
          el.removeEventListener('mouseleave', handleTextLeave);
        });
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[100000] hidden md:flex items-center justify-center mix-blend-difference drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
      style={{ transform: (cursorType === 'pointer' || cursorType === 'text') ? 'translate(-50%, -50%)' : 'translate(-20%, -20%)' }} 
    >
      {cursorType === 'default' && <MousePointer2 className="w-8 h-8 fill-white text-black" strokeWidth={1} />}
      {cursorType === 'pointer' && <Target className="w-10 h-10 text-white" strokeWidth={1} />}
      {cursorType === 'move' && (
        <div className="flex items-start gap-1">
          <MousePointer2 className="w-7 h-7 fill-white text-black" strokeWidth={1} />
          <Move className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      )}
      {cursorType === 'text' && (
        <Type className="w-8 h-8 text-white" strokeWidth={1.5} />
      )}
    </div>
  );
}
