'use client';
import { useState, useEffect } from 'react';
import { X, Instagram, Video, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">Let&apos;s Talk</h2>
            <p className="text-sm text-gray-400 mb-8 font-sans">
              Tell me about your project and I&apos;ll get back to you as soon as possible.
            </p>
            
            <form action="mailto:faveejiofor2009@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="Name"
                  required 
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b5ff3a] transition-colors" 
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="Email"
                  required 
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b5ff3a] transition-colors" 
                  placeholder="hello@example.com"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Message</label>
                <textarea 
                  name="Message"
                  required 
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b5ff3a] transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 mt-4 bg-[#b5ff3a] text-black font-semibold rounded-lg px-4 py-3.5 hover:bg-[#a3eb2d] transition-colors"
              >
                Send Message <Send className="w-4 h-4 ml-1" />
              </motion.button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">Connect with me</p>
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://www.tiktok.com/@fslenss?_r=1&_t=ZS-96I4YyQViJY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  title="TikTok"
                >
                  <Video className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/fslenss?igsh=MXo4OG9iaG54Znl3&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
