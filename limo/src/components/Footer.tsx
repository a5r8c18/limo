import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer 
      className={cn(
        "py-12 px-4 bg-black border-t border-amber-500/20 relative overflow-hidden",
        className
      )}
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-wood.png')" }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y copyright con estilo vintage */}
          <div className="flex items-center mb-6 md:mb-0 group">
            <Sparkles className="h-6 w-6 text-amber-400 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="text-gray-400 font-serif italic">
              © {new Date().getFullYear()} <span className="text-amber-400 font-normal not-italic">LUXURY LIMO RENTALS</span>. All rights reserved.
            </span>
          </div>

          {/* Enlaces con estilo vintage */}
          <div className="flex space-x-6">
            {["Terms", "Privacy", "FAQ"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors font-serif relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Línea decorativa y detalles */}
        <div className="mt-8 pt-8 border-t border-amber-500/10 text-center">
          <p className="text-xs text-gray-500 tracking-widest font-mono">
            ESTABLISHED 1985 • LOS ANGELES, CALIFORNIA
          </p>
          <p className="text-xs text-gray-600 mt-2 font-serif">
            "Where classic elegance meets modern luxury"
          </p>
        </div>
      </div>
    </footer>
  );
}