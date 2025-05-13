import { Clock, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";

export default function TopHeader() {
  return (
    <div 
      className="bg-gradient-to-r from-amber-700 to-amber-600 text-black py-2 px-4 text-xs md:text-sm border-b border-amber-400/30"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sección de horario - Estilo máquina de escribir */}
        <div className="flex items-center mb-2 md:mb-0 font-mono tracking-tight">
          <Clock className="h-4 w-4 mr-2" />
          <span className="font-medium border-b border-black border-dashed hover:border-solid transition-all">
            24/7 PREMIUM SERVICE
          </span>
        </div>
        
        {/* Contactos - Estilo etiquetas vintage */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <div className="flex items-center bg-black/10 px-2 py-1 rounded-sm border border-amber-400/30 hover:bg-amber-500/20 transition-all">
            <Phone className="h-4 w-4 mr-2" />
            <a
              href="tel:+15551234567"
              className="font-semibold hover:text-white transition-colors"
            >
              (555) 123-4567
            </a>
          </div>
          
          <div className="flex items-center bg-black/10 px-2 py-1 rounded-sm border border-amber-400/30 hover:bg-amber-500/20 transition-all">
            <Mail className="h-4 w-4 mr-2" />
            <a
              href="mailto:bookings@luxurylimos.com"
              className="font-semibold hover:text-white transition-colors"
            >
              bookings@luxurylimos.com
            </a>
          </div>
          
          <div className="flex items-center bg-black/10 px-2 py-1 rounded-sm border border-amber-400/30 hover:bg-amber-500/20 transition-all">
            <MessageCircle className="h-4 w-4 mr-2" />
            <a
              href="https://wa.me/+15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
          
          {/* Badge VIP - Estilo insignia vintage */}
          <div className="hidden md:flex items-center bg-black/20 px-3 py-1 rounded-full border border-amber-400/50 group">
            <Sparkles className="h-4 w-4 mr-2 text-amber-400 group-hover:animate-pulse" />
            <span className="font-semibold text-xs tracking-wider">
              VIP SERVICES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}