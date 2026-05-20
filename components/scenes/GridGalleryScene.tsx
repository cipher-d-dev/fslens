'use client';
import Image from 'next/image';

const images = [
  { id: 1, src: '/made-by-affinity (1).jpeg' },
  { id: 2, src: '/made-by-affinity (2).jpeg' },
  { id: 3, src: '/made-by-affinity (3).jpeg' },
  { id: 4, src: '/made-by-affinity (4).jpeg' },
  { id: 5, src: '/made-by-affinity (5).jpeg' },
  { id: 6, src: '/made-by-affinity (6).jpeg' },
];

export default function GridGalleryScene() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-32 border-b border-black/10">
       <div className="container mx-auto px-6 max-w-7xl">
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <h2 className="font-display text-4xl md:text-[5rem] tracking-tight leading-[0.95] text-black mb-6">
                Visuals by FSLENS📸
              </h2>
              <p className="font-sans text-gray-700 md:text-lg leading-relaxed border-l-[3px] border-[#8ee000] pl-6 mt-8">
                &quot;I&apos;m highly skilled at blending photography with nature in a creative and visually captivating way. Whether it&apos;s cinematic visuals, fashion edits, or creative storytelling, I bring every frame to life.&quot;
              </p>
              <div className="mt-8 pl-6">
                 <p className="font-bold text-black font-sans text-sm tracking-wide">Akindemowo Daniel Oluwafisayomi</p>
                 <p className="text-gray-500 font-sans text-sm">Creative Photographer & Video Editor</p>
              </div>
            </div>

            <div className="lg:w-2/3 columns-1 sm:columns-2 gap-4 space-y-4">
              {images.map((img) => (
                <div key={img.id} className="relative w-full break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <Image 
                    src={img.src} 
                    alt={`Gallery ${img.id}`} 
                    width={800} height={1000} 
                    className="w-full h-auto bg-black/5"
                    referrerPolicy="no-referrer"
                  />
                  {/* Thin borders on images as seen in Affinity */}
                  <div className="absolute inset-0 border border-black/10 pointer-events-none" />
                </div>
              ))}
            </div>
         </div>
       </div>
    </section>
  );
}
