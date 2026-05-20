'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { step: '01', title: 'DaVinci Resolve', desc: 'Professional color grading and non-linear editing. Turning raw footage into cinematic masterpieces with advanced tools.', bg: 'bg-[#291b2c]', color: 'text-purple-400', image: '/made-by-affinity (1).jpeg' },
  { step: '02', title: 'CapCut', desc: 'Fast, dynamic video editing for short-form content. Ensuring high engagement for social media platforms.', bg: 'bg-[#182928]', color: 'text-teal-400', image: '/made-by-affinity (2).jpeg' },
  { step: '03', title: 'Lightroom', desc: 'Precision color correction and grading for photography. Enhancing the natural beauty of every shot.', bg: 'bg-[#2b1f1c]', color: 'text-orange-400', image: '/made-by-affinity (3).jpeg' },
  { step: '04', title: 'Snapseed', desc: 'On-the-go mobile photo editing. Quick, powerful adjustments to perfect any photograph from anywhere.', bg: 'bg-[#1a2332]', color: 'text-blue-400', image: '/made-by-affinity (4).jpeg' },
  { step: '05', title: 'Nature Photography', desc: 'Creative and visually captivating blending of subjects with the natural world.', bg: 'bg-[#292211]', color: 'text-yellow-400', image: '/made-by-affinity (5).jpeg' },
  { step: '06', title: 'Content Creation', desc: 'End-to-end production of engaging, high-quality digital content spanning both video and photo.', bg: 'bg-[#1e1e1e]', color: 'text-gray-300', image: '/made-by-affinity (6).jpeg' },
];

export default function FeaturesScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const track = trackRef.current;
      if (!track) return;
      const amountToScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -amountToScroll,
        ease: 'none',
        scrollTrigger: {
           trigger: sectionRef.current,
           start: 'top top',
           end: `+=${amountToScroll}`,
           scrub: 1,
           pin: true,
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="process" ref={sectionRef} className="bg-[#111111] py-24 md:py-0 md:h-screen flex flex-col justify-center overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px] mb-8 shrink-0 pt-16 md:pt-0">
        <h2 className="font-display text-3xl md:text-[3.5rem] lg:text-[4rem] tracking-tighter leading-[1.0] font-bold text-white max-w-3xl mb-3">
          Apps & Tools I use to edit
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-sans font-medium">
          Mobile videographer & photographer.
        </p>
      </div>

      <div className="flex flex-row overflow-x-auto no-scrollbar md:overflow-visible gap-6 px-6 md:px-0 flex-nowrap pb-12 md:pb-0" ref={trackRef}>
        {cards.map((card, i) => (
          <div key={i} className={`shrink-0 w-[85vw] sm:w-[50vw] md:w-[450px] lg:w-[500px] h-[550px] md:h-[600px] rounded-[24px] md:rounded-[32px] p-8 md:p-10 flex flex-col ${card.bg} shadow-md border border-white/5 relative overflow-hidden group`}>
             <span className={`font-sans font-medium text-lg md:text-xl mb-4 ${card.color}`}>{card.step} / 06</span>
             <h3 className="font-display text-4xl md:text-5xl text-white tracking-tighter font-bold leading-[1.1] mb-6 pr-8 z-10 drop-shadow-md">{card.title}</h3>
             <p className="font-sans text-gray-200 text-[17px] md:text-[19px] leading-relaxed max-w-[90%] mb-auto z-10 font-normal drop-shadow-md">
               {card.desc}
             </p>
             {/* Abstract shape/visual placeholder at bottom */}
             <div className="w-[120%] h-64 bg-black/10 absolute bottom-[-5%] left-[-10%] rounded-t-full rotate-6 transform group-hover:rotate-12 transition-transform duration-700 ease-in-out flex items-end justify-center pb-8 border-t border-white/10 z-0 overflow-hidden">
                <Image src={card.image} alt={card.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 md:group-hover:scale-110" />
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
