interface FooterProps {
  className?: string;
}

import { cn } from "@/lib/utils";

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("py-8 px-4 bg-gray-900 border-t border-gray-800", className)}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          {new Date().getFullYear()} Luxury Limo Rentals. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
