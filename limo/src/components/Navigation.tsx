import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

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
    <header className="bg-black text-gray-100">
      <nav className="py-4 px-4 sticky top-0 z-50 bg-gradient-to-b from-black backdrop-blur-sm border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo premium */}
          <div className="flex items-center mb-4 md:mb-0 group">
            <Sparkles className="h-6 w-6 text-amber-400 mr-2 group-hover:rotate-12 transition-transform" />
            <h1 className="text-3xl font-light tracking-widest uppercase">
              <span className="text-amber-400">LUXURY</span>
              <span className="text-white"> LIMOS</span>
            </h1>
          </div>

          <div className="flex space-x-1 md:space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                onHoverStart={() => setIsHovered(item.id)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative"
              >
                <Link to={item.id === "Our Fleet" ? "/fleet" : item.id.toLowerCase()}>
                  <Button
                    variant="ghost"
                    className={`rounded-none px-4 py-2 text-gray-300 hover:bg-transparent hover:text-amber-400 transition-all duration-300 ${
                      isHovered === item.id ? "text-amber-400" : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>

                {isHovered === item.id && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"
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

            <Button className="ml-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
              BOOK NOW
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}