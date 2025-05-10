import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("py-12 px-4 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="h-6 w-6 text-amber-400 mr-2" />
            <span className="text-gray-400">
              © {new Date().getFullYear()} Luxury Limo Rentals. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            {["Terms", "Privacy", "FAQ"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}