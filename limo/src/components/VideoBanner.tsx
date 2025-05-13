import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function VideoBanner() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Overlay con degradado y textura vintage */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90"></div>
      
      {/* Fondo con textura vintage */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-thread-light.png')" }}
      >
        <div className="text-center text-white z-20 w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Contenido con animaciones */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <Sparkles className="h-12 w-12 text-amber-400" />
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-0"></div>
                  </div>
                </motion.div>
                
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-light tracking-wider mb-4 font-serif"
                >
                  <span className="text-white">EXPERIENCE</span>{' '}
                  <span 
                    className="text-amber-400 relative inline-block"
                    style={{ textShadow: '0 0 8px rgba(245, 158, 11, 0.5)' }}
                  >
                    LUXURY
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto italic font-serif"
                >
                  Premium transportation services for the most discerning clients
                </motion.p>
                
                {/* Efecto de firma vintage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="mt-8"
                >
                  <div className="inline-block border-t border-amber-400 pt-2">
                    <span className="text-sm text-amber-400 tracking-widest">SINCE 1985</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Efecto de grano vintage */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')",
              opacity: 0.03,
              mixBlendMode: "overlay"
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Efecto de borde vintage */}
      <div className="absolute inset-0 border-4 border-transparent hover:border-amber-400/30 transition-all duration-500 z-20 pointer-events-none"></div>
    </div>
  );
}