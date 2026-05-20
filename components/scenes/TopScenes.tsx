'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HeroScene from './HeroScene';
import ApproachScene from './ApproachScene';
import CameraLens from '../ui/CameraLens';

gsap.registerPlugin(ScrollTrigger);

export default function TopScenes() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add({
      isDesktop: "(min-width: 768px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { isDesktop, reduceMotion } = context.conditions as any;

        if (!reduceMotion && isDesktop) {
          const scatterPos = [
            { x: -window.innerWidth * 0.35, y: -window.innerHeight * 0.4, rotate: 0 },
            { x: -window.innerWidth * 0.25, y: -window.innerHeight * 0.1, rotate: 0 },
            { x: -window.innerWidth * 0.15, y: -window.innerHeight * 0.7, rotate: 0 },
            { x: 0, y: -window.innerHeight * 0.75, rotate: 0 },
            { x: window.innerWidth * 0.15, y: -window.innerHeight * 0.1, rotate: 0 },
            { x: window.innerWidth * 0.25, y: -window.innerHeight * 0.7, rotate: 0 },
            { x: window.innerWidth * 0.35, y: -window.innerHeight * 0.35, rotate: 0 }
          ];

          // Adjust starting scatters to be hidden inside the lens (0,0) with scale 0.2 and 0 opacity
          [0,1,2,3,4,5,6].forEach((i) => {
            gsap.set(`.hero-img-${i}`, { x: 0, y: 0, rotate: 0, scale: 0.2, autoAlpha: 0 });
          });
          gsap.set('.hero-text-content', { autoAlpha: 0, y: 50 });

          // Start state for Flash and new Hero Container
          gsap.set('.camera-flash', { display: 'none', autoAlpha: 0 });
          gsap.set('.hero-container', { display: 'none', autoAlpha: 1, scale: 1 });
          
          gsap.set('.camera-shutter-button', { y: 0 });
          gsap.set('.camera-aperture-hole', { scale: 1 });
          gsap.set('.camera-lens-barrel', { scale: 1 });
          gsap.set('.camera-focus-ring', { rotation: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: '+=500%', // Increased scroll duration for extra section
            scrub: 1,
            pin: true,
          }
        });

        // Phase 1: Camera Interaction (Zoom & Focus)
        tl.to('.camera-lens-barrel', { scale: 1.1, duration: 1.5, ease: 'power2.inOut' }, 'camera');
        tl.to('.camera-focus-ring', { rotation: 90, duration: 1.5, ease: 'power2.inOut' }, 'camera');
        
        // Phase 2: Shutter Click (Button press down, Aperture closes)
        tl.to('.camera-shutter-button', { y: 12, duration: 0.15, ease: 'power2.in' }, 'camera+=1.3'); // Button presses down
        tl.to('.camera-aperture-hole', { scale: 0.1, duration: 0.15, ease: 'power4.in' }, 'camera+=1.3'); // Shutter closes

        // Shutter opens back up / Button pops back up
        tl.to('.camera-shutter-button', { y: 0, duration: 0.1, ease: 'power2.out' }, 'camera+=1.45');
        tl.to('.camera-aperture-hole', { scale: 1, duration: 0.1, ease: 'power2.out' }, 'camera+=1.45');

        // Phase 3: Shutter Flash
        tl.set('.camera-flash', { display: 'block' }, 'flash');
        tl.to('.camera-flash', { autoAlpha: 1, duration: 0.15, ease: 'power4.out' }, 'flash');
        
        // --- INSTANT SWITCH BEHIND THE FLASH ---
        tl.set('.camera-hero-container', { display: 'none' }, 'flash+=0.15');
        tl.set('.hero-container', { display: 'flex', autoAlpha: 1 }, 'flash+=0.15');
        
        // Flash fade out
        tl.to('.camera-flash', { autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, 'flash+=0.3');
        
        // Printed Images come out of the center and drop to their places
        [0,1,2,3,4,5,6].forEach((i) => {
            tl.to(`.hero-img-${i}`, {
               x: scatterPos[i].x,
               y: scatterPos[i].y,
               rotate: scatterPos[i].rotate,
               scale: 1,
               autoAlpha: 1,
               duration: 1.5,
               ease: 'back.out(1)' // Gives a slight pop out feeling
            }, `flash+=${0.3 + i * 0.15}`); // Stagger them slightly like they are printing quickly
        });
        
        tl.to('.hero-text-content', { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }, 'flash+=1.5');

        // Pause to let user observe the scattered images
        tl.to({}, { duration: 0.5 });

        // Phase 4: Gather into horizontal line
        tl.to('.hero-text-content', { y: -120, ease: 'power2.inOut', duration: 1 }, 'gather');
        tl.to(['.hero-img-0', '.hero-img-1', '.hero-img-2', '.hero-img-3', '.hero-img-4', '.hero-img-5', '.hero-img-6'], {
          x: 0, y: 0, rotate: 0, scale: 1, ease: 'power2.inOut', stagger: 0.01, duration: 1
        }, 'gather');

        // Slight pause to let user view gathered state
        tl.to({}, { duration: 0.3 });

        const fadeX = window.innerWidth * 0.5;
        
        // Phase 5: Fade Out Hero
        // Side images fade out sideways
        tl.to(['.hero-img-0', '.hero-img-1', '.hero-img-2'], { x: -fadeX, autoAlpha: 0, ease: 'power2.in', duration: 1 }, 'fadeHero');
        tl.to(['.hero-img-4', '.hero-img-5', '.hero-img-6'], { x: fadeX, autoAlpha: 0, ease: 'power2.in', duration: 1 }, 'fadeHero');
        
        // Center image and Text fade out moving upwards
        tl.to(['.hero-text-content', '.hero-img-3'], { y: -150, autoAlpha: 0, ease: 'power2.in', duration: 1 }, 'fadeHero');

        // Hide entirely to clear pointer-events overlay
        tl.set('.hero-container', { display: 'none' }, 'fadeHero+=1');

        // Phase 6: Next section (ApproachScene) fades in gradually AS the hero is almost fully faded
        tl.fromTo('.approach-container', 
          { autoAlpha: 0, y: 50 }, 
          { autoAlpha: 1, y: 0, ease: 'power2.out', duration: 1.2 }, 
          'fadeHero+=0.85' // Wait until hero fade is 85% done
        );
        
        // Let the Approach Scene stay on screen for the remainder of the pin
        tl.to({}, { duration: 0.5 });
      } else {
        // Clear properties if conditions break (e.g. resize below desktop)
        gsap.set(['.hero-img-0', '.hero-img-1', '.hero-img-2', '.hero-img-3', '.hero-img-4', '.hero-text-content', '.approach-container', '.camera-flash', '.hero-container'], { clearProps: 'all' });
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full bg-[#0a0a0a] md:h-screen md:overflow-hidden md:border-b md:border-white/5">
      
      {/* 1. Camera Flash Overlay */}
      <div className="camera-flash fixed inset-0 z-[100] bg-white opacity-0 pointer-events-none hidden"></div>

      {/* 2. New Camera Hero Section */}
      <div className="camera-hero-container hidden md:flex relative md:absolute md:inset-0 z-30 w-full h-[100vh] flex-col items-center justify-center bg-black">
         <CameraLens />
         <p className="absolute bottom-16 md:bottom-24 font-sans text-sm md:text-base tracking-widest text-[#555] uppercase animate-pulse mt-[10vh]">SCROLL TO CAPTURE</p>
      </div>

      {/* 3. Section 2: Scattered Images */}
      <div className="hero-container relative md:absolute md:inset-0 z-20 w-full min-h-[100svh] md:h-full flex flex-col md:hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
        <HeroScene />
      </div>

      {/* 4. Section 3: Approach Section */}
      <div className="approach-container relative md:absolute md:inset-0 z-10 w-full min-h-[100svh] md:h-full flex flex-col justify-center bg-[#0a0a0a] opacity-100 md:opacity-0 py-16 md:py-0">
         <ApproachScene />
      </div>
    </div>
  );
}
