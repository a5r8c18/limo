import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function VideoBanner() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Overlay con degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
      
      {/* Placeholder del video */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center text-white z-20 w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Placeholder visual más elegante */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex justify-center mb-6"
                >
                  <Sparkles className="h-12 w-12 text-amber-400" />
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-light tracking-wider mb-4"
                >
                  <span className="text-white">EXPERIENCE</span>{' '}
                  <span className="text-amber-400">LUXURY</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                >
                  Premium transportation services for the most discerning clients
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}