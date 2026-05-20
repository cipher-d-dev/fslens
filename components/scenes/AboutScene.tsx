'use client';
import Image from 'next/image';

export default function AboutScene() {
  return (
    <section id="about" className="bg-black py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end shrink-0 relative">
             <div className="w-[85vw] max-w-md h-[110vw] max-h-[600px] relative">
                {/* Background decorative square */}
                <div className="absolute inset-0 bg-[#b5ff3a] translate-x-4 translate-y-4 rounded-xl -z-10" />
                
                {/* Main image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-black">
                   <Image 
                     src="/clients-actual-pic.jpeg"
                     alt="Akindemowo Daniel Oluwafisayomi"
                     fill
                     className="object-cover"
                     referrerPolicy="no-referrer"
                   />
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.0]">
              Behind <br className="hidden lg:block"/> the Lens
            </h2>
            
            <div className="max-w-xl space-y-6 text-gray-300 font-sans text-base md:text-lg">
              <p>
                My name is Akindemowo Daniel Oluwafisayomi, a creative photographer, video editor, and mobile videographer based in Lagos. I am also a Surveying & Geoinformatics Engineering student at the University of Lagos.
              </p>
              <p>
                Through my brand, <strong>FSLENS📸</strong>, I create cinematic visuals, fashion edits, creative storytelling content, and professional podcast editing. I also explore GIS and web mapping projects, merging my technical background with creative vision.
              </p>
              <p className="pl-4 border-l-[3px] border-[#b5ff3a] italic mt-8 text-gray-400">
                “I’m highly skilled at blending photography with nature in a creative and visually captivating way.”
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-y-4 text-sm font-sans tracking-tight text-gray-500">
               <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Date of Birth</span>
                  <span className="text-gray-300 font-medium">31 October, 2006</span> {/* Assuming 2006 instead of 2026 typo */}
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">School</span>
                  <span className="text-gray-300 font-medium">University of Lagos</span>
               </div>
               <div className="col-span-2">
                  <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Residence</span>
                  <span className="text-gray-300 font-medium">17, Shiro street, Fadeyi, Lagos</span>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
