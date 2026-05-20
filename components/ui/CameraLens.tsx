import React from 'react';

export default function CameraLens() {
  return (
    <div className="relative w-[320px] h-[220px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[340px] lg:w-[600px] lg:h-[400px] flex items-center justify-center pointer-events-none drop-shadow-2xl">
      
      {/* Top Viewfinder Bump */}
      <div className="absolute top-[-20px] md:top-[-35px] w-[35%] h-[30px] md:h-[50px] bg-gradient-to-b from-[#3f3f46] to-[#1c1c1f] rounded-t-[10px] md:rounded-t-[16px] left-1/2 -translate-x-1/2 border-t border-x border-[#52525b] shadow-[inset_0_2px_5px_rgba(255,255,255,0.1)]"></div>
      
      {/* Left Dial */}
      <div className="absolute top-[-15px] md:top-[-25px] left-[15%] w-[40px] md:w-[60px] h-[20px] md:h-[35px] bg-gradient-to-r from-[#18181b] via-[#3f3f46] to-[#18181b] rounded-t-md shadow-[inset_0_2px_2px_rgba(255,255,255,0.15)]"></div>

      {/* Right Dial Base */}
      <div className="absolute top-[-15px] md:top-[-25px] right-[15%] w-[50px] md:w-[70px] h-[20px] md:h-[35px] bg-gradient-to-r from-[#18181b] via-[#3f3f46] to-[#18181b] rounded-t-md shadow-[inset_0_2px_2px_rgba(255,255,255,0.15)]"></div>
      
      {/* Red Shutter Button */}
      <div className="camera-shutter-button absolute top-[-25px] md:top-[-45px] right-[18%] md:right-[17%] w-[25px] md:w-[35px] h-[15px] md:h-[25px] bg-gradient-to-b from-[#ff3333] to-[#b91c1c] rounded-t-[4px] shadow-[inset_0_-2px_5px_rgba(0,0,0,0.6)] border border-[#7a0d0d] origin-bottom z-10"></div>

      {/* Main Camera Body (Graphite Metallic) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2c] via-[#1c1c1f] to-[#0a0a0c] rounded-[16px] md:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-5px_15px_rgba(0,0,0,0.5)] border border-[#3f3f46] overflow-hidden">
        {/* Faux leather grip */}
        <div className="absolute left-[3%] top-[3%] bottom-[3%] w-[25%] bg-[#121214] rounded-[12px] md:rounded-[24px] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.8)] opacity-90 border border-[#27272a]" style={{ backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
        <div className="absolute right-[3%] top-[3%] bottom-[3%] w-[25%] bg-[#121214] rounded-[12px] md:rounded-[24px] shadow-[inset_2px_0_10px_rgba(0,0,0,0.8)] opacity-90 border border-[#27272a]" style={{ backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
      </div>

      {/* Giant Lens (Outer Casing) */}
      <div className="camera-lens-barrel relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full bg-[#000] shadow-[0_20px_50px_rgba(0,0,0,1),inset_0_0_2px_rgba(255,255,255,0.1)] border-[4px] border-[#151515] flex items-center justify-center transform translate-y-[2%] origin-center">
        
        {/* Grooved Outer Ring (Focus/Zoom) */}
        <div className="camera-focus-ring absolute inset-[1.5%] rounded-full bg-[conic-gradient(#080808_0%,#181818_2%,#080808_4%,#181818_6%,#080808_8%,#181818_10%,#080808_12%,#181818_14%,#080808_16%,#181818_18%,#080808_20%,#181818_22%,#080808_24%,#181818_26%,#080808_28%,#181818_30%,#080808_32%,#181818_34%,#080808_36%,#181818_38%,#080808_40%,#181818_42%,#080808_44%,#181818_46%,#080808_48%,#181818_50%,#080808_52%,#181818_54%,#080808_56%,#181818_58%,#080808_60%,#181818_62%,#080808_64%,#181818_66%,#080808_68%,#181818_70%,#080808_72%,#181818_74%,#080808_76%,#181818_78%,#080808_80%,#181818_82%,#080808_84%,#181818_86%,#080808_88%,#181818_90%,#080808_92%,#181818_94%,#080808_96%,#181818_98%,#080808_100%)] shadow-[inset_0_6px_20px_rgba(0,0,0,0.95)]"></div>

        {/* Thick Bezel */}
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-[#050505] to-[#111] shadow-[inset_0_0_25px_rgba(0,0,0,1)] border border-[#161616]"></div>

        {/* Glass Lens Array */}
        <div className="absolute inset-[13%] rounded-full bg-gradient-to-br from-[#0c0c0c] via-[#020202] to-[#000] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,1)] flex items-center justify-center">

            {/* Inner Depths (under the glass) */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_80%)] z-0"></div>

            {/* Simulated environment reflection blur under the glass */}
            <div className="absolute top-[10%] left-[20%] w-[30%] h-[70%] bg-slate-400/10 blur-[4px] transform -skew-x-[15deg] z-0"></div>
            <div className="absolute top-[5%] left-[50%] w-[25%] h-[80%] bg-slate-300/10 blur-[6px] transform -skew-x-[10deg] z-0"></div>

            {/* Aperture Mechanism */}
            <div className="camera-aperture-hole z-10 w-[40%] h-[40%] bg-[#020202] rounded-full shadow-[0_0_20px_rgba(0,0,0,1),inset_0_0_10px_rgba(0,0,0,0.9)] border border-[#0d0d0d] flex items-center justify-center overflow-hidden transition-[transform] duration-75 origin-center">
                {/* Tiny Sensor Reflection Element */}
                <div className="w-[60%] h-[60%] bg-gradient-to-br from-[#0a0a0a] to-[#000] rounded-full shadow-[inset_0_1px_8px_rgba(255,255,255,0.05)] flex items-center justify-center">
                    <div className="w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[2px]"></div>
                </div>
            </div>

            {/* FRONT GLASS OVERLAYS (Z-20, sits ON TOP of everything to create the sphere) */}
            <div className="absolute inset-0 rounded-full pointer-events-none z-20 mix-blend-screen overflow-hidden">
                
                {/* Giant Curved Top Glare (Key to the 3D spherical look) */}
                <div className="absolute top-[-10%] left-[-5%] w-[110%] h-[60%] bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-[100%] blur-[1px] transform -rotate-[5deg] opacity-80"></div>
                
                {/* Super sharp edge rim light */}
                <div className="absolute top-[2%] left-[10%] w-[80%] h-[35%] rounded-[100%] border-t-[2px] border-white/40 blur-[1px]"></div>

                {/* Violet/Cyan Lens Coatings */}
                <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-purple-600/20 via-blue-500/10 to-transparent blur-3xl opacity-90 transform rotate-12"></div>
                <div className="absolute top-[15%] left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-emerald-400/15 to-transparent blur-2xl opacity-80 transform -rotate-12"></div>
                
                {/* Secondary side glare */}
                <div className="absolute bottom-[5%] right-[2%] w-[40%] h-[80%] rounded-[100%] border-r-[3px] border-white/20 bg-gradient-to-l from-white/10 to-transparent blur-[2px] transform rotate-[30deg] opacity-40"></div>

                {/* Subtly simulated environment conic sweep */}
                <div className="absolute inset-[-20%] rounded-full bg-[conic-gradient(from_200deg_at_50%_50%,transparent_0%,rgba(150,200,255,0.15)_20%,transparent_40%,rgba(100,200,255,0.05)_60%,transparent_80%)] opacity-40"></div>
            </div>

            {/* Center Crosshair or Ring Dot (like in the image) */}
            <div className="absolute right-[20%] top-[45%] w-[6%] h-[6%] md:w-[8%] md:h-[8%] border-[1.5px] border-white/40 rounded-full flex items-center justify-center z-30 shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-white/5 backdrop-blur-sm">
               <div className="w-[30%] h-[30%] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
