import { Instagram, FolderGit2, Video, Camera, Phone } from 'lucide-react';

export default function FooterScene() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-8 overflow-hidden flex flex-col text-white">
      <div className="container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-end">
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-24 text-sm font-sans text-gray-400">
           <div>
             <h4 className="text-white font-semibold mb-4">Contact Me</h4>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors">WhatsApp: 09065456592</a></li>
               <li><a href="#" className="hover:text-white transition-colors">17, Shiro street Fadeyi Lagos</a></li>
               <li><a href="#" className="hover:text-white transition-colors">University of Lagos</a></li>
             </ul>
           </div>
           
           <div>
             <h4 className="text-white font-semibold mb-4">Socials & Links</h4>
             <ul className="space-y-2">
               <li>
                 <a href="https://www.tiktok.com/@fslenss?_r=1&_t=ZS-96I4YyQViJY" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                   <Video className="w-4 h-4" /> TikTok
                 </a>
               </li>
               <li>
                 <a href="https://www.instagram.com/fslenss?igsh=MXo4OG9iaG54Znl3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                   <Instagram className="w-4 h-4" /> Instagram
                 </a>
                </li>
               <li>
                 <a href="https://wa.me/qr/47UGEW47Y3PZJ1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                   <Phone className="w-4 h-4" /> Whatsapp
                 </a>
               </li>
               <li>
                 <a href="https://drive.google.com/drive/folders/1nL-sKkpg2Et4K4YERxxov8CeP2t_Eid-" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                   <FolderGit2 className="w-4 h-4" /> Portfolio Drive
                 </a>
               </li>
             </ul>
           </div>
        </div>

        {/* Big font bottom */}
        <div className="w-full relative mt-12 pb-8 flex justify-center items-center">
          <h1 className="text-[14vw] sm:text-[16vw] leading-none tracking-tighter flex items-center justify-center text-[#d0d0d0] hover:text-[#8ee000] transition-colors duration-500 w-full group">
             <span className="font-script text-[18vw] sm:text-[20vw] font-medium tracking-wide">FS</span>
             <span className="font-display ml-1 sm:ml-2 tracking-tight relative">
                lens
                <Camera className="w-8 h-8 sm:w-16 sm:h-16 text-[#b5ff3a] absolute -top-4 -right-10 sm:-top-8 sm:-right-20 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
             </span>
          </h1>
        </div>
        
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-sans tracking-wide gap-4">
         <div className="flex items-center gap-4">
             <span>English (US)</span>
         </div>
         <div className="space-x-6 flex items-center flex-wrap justify-center">
           <a href="#" className="hover:text-white">Privacy</a>
           <a href="#" className="hover:text-white">Terms & Conditions</a>
           <span>© 2026 All Rights Reserved, Akindemowo Daniel Oluwafisayomi</span>
         </div>
      </div>
    </footer>
  );
}
