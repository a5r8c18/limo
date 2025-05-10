import { Clock, Phone, Mail, MessageCircle } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-black text-white py-1.5 px-4 font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex items-center mb-2 md:mb-0">
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          <span>We are open 24/7</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-3.5 w-3.5 mr-1.5" />
            <a
              href="tel:+15551234567"
              className="hover:text-custom-yellow transition-colors"
            >
              (555) 123-4567
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="h-3.5 w-3.5 mr-1.5" />
            <a
              href="mailto:bookings@luxurylimos.com"
              className="hover:text-custom-yellow transition-colors"
            >
              bookings@luxurylimos.com
            </a>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
            <a
              href="https://wa.me/+15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-yellow transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
