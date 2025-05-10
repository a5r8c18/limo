import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section className={cn("py-20 px-4 bg-black", className)}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            <span className="text-white">Contact</span> <span className="text-amber-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Phone className="h-12 w-12 text-amber-400" />,
              title: "Phone",
              content: "(555) 123-4567"
            },
            {
              icon: <Mail className="h-12 w-12 text-amber-400" />,
              title: "Email",
              content: "bookings@luxurylimos.com"
            },
            {
              icon: <MapPin className="h-12 w-12 text-amber-400" />,
              title: "Location",
              content: "123 Luxury Ave, Beverly Hills, CA"
            }
          ].map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}