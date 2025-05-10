import { motion } from "framer-motion";
import { Button } from "./ui/button";


type NavItem = {
  name: string;
  id: string;
};

interface NavigationProps {
  navItems: NavItem[];
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

export function Navigation({
  navItems,
  isHovered,
  setIsHovered,
}: NavigationProps) {
  return (
    <header className="bg-black text-white">
      

      {/* Main navigation */}
      <nav className="py-4 px-4 sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-600/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo con nuevo estilo */}
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-[2.1rem] font-normal tracking-[0.3em] uppercase">
              <span className="text-yellow-500 font-light">LUXURY</span>
              <span className="text-white font-light"> LIMOS</span>
            </h1>
          </div>

          {/* Resto del código permanece igual */}
          <div className="flex space-x-1 md:space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                onHoverStart={() => setIsHovered(item.id)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative"
              >
                <Button
                  variant="ghost"
                  className={`rounded-none px-3 py-2 text-white hover:bg-transparent hover:text-yellow-500 transition-colors ${
                    isHovered === item.id ? "text-yellow-500" : ""
                  }`}
                >
                  {item.name}
                </Button>

                {isHovered === item.id && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </motion.div>
            ))}

            <Button className="ml-2 bg-yellow-600 hover:bg-yellow-700 text-black font-medium">
              BOOK NOW
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}