import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section 
      className={cn("py-20 px-4 bg-black", className)}
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con estilo vintage elegante */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4 font-serif">
            <span className="text-white">Contact</span> <span className="text-amber-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-400 italic font-serif">Get in touch with our luxury concierge team</p>
        </div>

        {/* Tarjetas de contacto con estilo vintage premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Phone className="h-12 w-12 text-amber-400 group-hover:animate-ring" />,
              title: "Phone",
              content: "(555) 123-4567",
              action: "tel:+15551234567"
            },
            {
              icon: <Mail className="h-12 w-12 text-amber-400 group-hover:animate-bounce" />,
              title: "Email",
              content: "bookings@luxurylimos.com",
              action: "mailto:bookings@luxurylimos.com"
            },
            {
              icon: <MapPin className="h-12 w-12 text-amber-400 group-hover:animate-pulse" />,
              title: "Location",
              content: "123 Luxury Ave, Beverly Hills, CA",
              action: "https://maps.google.com"
            }
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.action} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-[1.02] transition-transform duration-300"
            >
              <Card 
                className="bg-black border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Textura de fondo sutil */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/crissxcross.png')" }}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-serif">
                    {item.content}
                  </p>
                  {/* Detalle decorativo vintage */}
                  <div className="mt-4 text-xs text-amber-400/50 tracking-widest">
                    CLICK TO {item.title.toUpperCase()}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Pie de sección vintage */}
        <div className="mt-16 text-center border-t border-amber-500/20 pt-8">
          <p className="text-gray-400 font-serif italic">
            "We pride ourselves on providing exceptional service to our discerning clientele"
          </p>
          <div className="mt-4 text-xs text-amber-400/50 tracking-widest">
            LUXURY LIMOUSINE SERVICES SINCE 1985
          </div>
        </div>
      </div>
    </section>
  );
}