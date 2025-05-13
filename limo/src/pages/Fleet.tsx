import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Briefcase, Wifi, Sparkles } from "lucide-react";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  passengers: string;
  luggage: string;
  wifi: boolean;
  features: string[];
  description: string;
  price: string;
}

function VehicleImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-t-xl h-64 border-b border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="text-2xl font-bold text-white font-serif tracking-wider">{alt}</div>
      </div>
    </div>
  );
}

export default function FleetPage() {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      image: "/images/fleet/mercedes-s-class.jpeg",
      passengers: "3",
      luggage: "2",
      wifi: true,
      features: ["Hand-stitched leather seats", "Privacy partition", "Premium mini bar"],
      description: "The epitome of luxury sedan comfort with bespoke amenities for the discerning traveler.",
      price: "$120/hour"
    },
    {
      id: 2,
      name: "Rolls-Royce Phantom",
      image: "/images/fleet/rolls-royce.jpeg",
      passengers: "4",
      luggage: "3",
      wifi: true,
      features: ["Custom champagne cooler", "Starlight headrests", "Lambswool floor mats"],
      description: "Unmatched elegance and craftsmanship in this automotive masterpiece.",
      price: "$250/hour"
    },
    {
      id: 3,
      name: "Cadillac Escalade ESV",
      image: "/images/fleet/cadillac-escalade.jpeg",
      passengers: "6",
      luggage: "4",
      wifi: true,
      features: ["24 TV monitors", "Premium sound system", "Executive seating"],
      description: "Spacious luxury for larger groups without compromising on comfort.",
      price: "$180/hour"
    }
  ];

  return (
    <div 
      className="bg-black text-gray-100 min-h-screen"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}
    >
      {/* Header Section */}
      <section className="relative py-24 px-4 bg-black border-b border-amber-500/20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')" }}></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 font-serif">
            <span className="text-white">Our</span> <span className="text-amber-400">Luxury</span> Fleet
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-serif italic">
            "Experience automotive excellence with our curated collection of the world's finest vehicles"
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicles.map((vehicle) => (
              <Card 
                key={vehicle.id} 
                className="bg-black border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Vintage texture overlay */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" }}></div>
                
                <VehicleImage src={vehicle.image} alt={vehicle.name} />
                
                <CardHeader>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors font-serif">
                      <Users className="h-4 w-4 mr-1 text-amber-400" />
                      {vehicle.passengers} passengers
                    </div>
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors font-serif">
                      <Briefcase className="h-4 w-4 mr-1 text-amber-400" />
                      {vehicle.luggage} suitcases
                    </div>
                    {vehicle.wifi && (
                      <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors font-serif">
                        <Wifi className="h-4 w-4 mr-1 text-amber-400" />
                        WiFi
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-serif">
                      {vehicle.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors font-serif uppercase tracking-wider">
                      Features:
                    </h3>
                    <ul className="space-y-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="flex items-start font-serif">
                          <Sparkles className="h-4 w-4 mr-2 mt-1 text-amber-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <span className="text-amber-400 font-bold text-xl font-serif">
                      {vehicle.price}
                    </span>
                    <Button 
                      className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black transition-all duration-300 border-2 border-black hover:border-amber-400 rounded-none px-6 py-5"
                    >
                      <span className="font-serif tracking-wider">RESERVE</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black border-t border-amber-500/20 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 font-serif">
            Special Requests?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-serif italic">
            "Our concierge team can arrange for custom vehicles or unique experiences"
          </p>
          <Button 
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black px-10 py-6 text-lg transition-all duration-300 border-2 border-black hover:border-amber-400 rounded-none"
          >
            <span className="font-serif tracking-wider">SPEAK TO OUR CONCIERGE</span>
          </Button>
          <div className="mt-8 text-xs text-amber-400/50 tracking-widest font-mono">
            BY APPOINTMENT ONLY • 24/7 AVAILABILITY
          </div>
        </div>
      </section>
    </div>
  );
}