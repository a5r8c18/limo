import { Clock, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-black py-2 px-4 text-xs md:text-sm border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <Clock className="h-4 w-4 mr-2" />
          <span className="font-medium">24/7 PREMIUM SERVICE</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a
              href="tel:+15551234567"
              className="font-semibold hover:text-white transition-colors"
            >
              (555) 123-4567
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a
              href="mailto:bookings@luxurylimos.com"
              className="font-semibold hover:text-white transition-colors"
            >
              bookings@luxurylimos.com
            </a>
          </div>
          <div className="flex items-center">
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
          <div className="hidden md:flex items-center">
            <Sparkles className="h-4 w-4 mr-2 text-black" />
            <span className="font-semibold">VIP SERVICES AVAILABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}