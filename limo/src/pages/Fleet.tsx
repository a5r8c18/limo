import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
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
    <img 
      src={src}
      alt={alt}
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
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
      features: ["Leather Seats", "Privacy Partition", "Mini Bar"],
      description: "The ultimate in luxury sedan comfort with premium amenities.",
      price: "$120/hour"
    },
    // ... otros vehículos
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            <span className="text-white">Our</span> <span className="text-amber-400">Luxury</span> Fleet
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our premium collection of vehicles, each offering unparalleled comfort and style.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card 
                key={vehicle.id} 
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="overflow-hidden rounded-t-xl">
                  <VehicleImage src={vehicle.image} alt={vehicle.name} />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-amber-400 transition-colors">
                    {vehicle.name}
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                      <Users className="h-4 w-4 mr-1 text-amber-400" />
                      {vehicle.passengers}
                    </div>
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                      <Briefcase className="h-4 w-4 mr-1 text-amber-400" />
                      {vehicle.luggage}
                    </div>
                    {vehicle.wifi && (
                      <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                        <Wifi className="h-4 w-4 mr-1 text-amber-400" />
                        WiFi
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {vehicle.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors">
                      Features:
                    </h3>
                    <ul className="space-y-1 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-lg">
                      {vehicle.price}
                    </span>
                    <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black transition-all duration-300">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our fleet is constantly expanding. Contact us for special requests or larger group accommodations.
          </p>
          <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black px-10 py-6 text-lg transition-all duration-300">
            Contact Our Specialists
          </Button>
        </div>
      </section>
    </div>
  );
}