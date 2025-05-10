import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Contact <span className="text-yellow-500">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black border-black">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="bg-black border-black">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">bookings@luxurylimos.com</p>
            </CardContent>
          </Card>

          <Card className="bg-black border-black">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">123 Luxury Ave, Beverly Hills, CA</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
