/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Users, Briefcase, Wifi } from "lucide-react"
import { useState } from 'react'

// Importa tus imágenes (asegúrate de tenerlas en la carpeta correcta)
const mercedesImage = new URL('/images/fleet/mercedes-s-class.jpeg', import.meta.url)
const cadillacImage = new URL('/images/fleet/cadillac-escalade.jpeg', import.meta.url)
const lincolnImage = new URL('/images/fleet/lincoln-stretch.jpeg', import.meta.url)
const rollsroyceImage = new URL('/images/fleet/rolls-royce.jpeg', import.meta.url)
const teslaImage = new URL('/images/fleet/tesla-model-x.jpeg', import.meta.url)
const hummerImage = new URL('/images/fleet/hummer-h2.jpeg', import.meta.url)
const defaultImage = new URL('/images/fleet/default.jpeg', import.meta.url)

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    image: mercedesImage,
    passengers: "3",
    luggage: "2",
    wifi: true,
    features: ["Leather Seats", "Privacy Partition", "Mini Bar"],
    description: "The ultimate in luxury sedan comfort with premium amenities.",
    price: "$120/hour"
  },
  {
    id: 2,
    name: "Cadillac Escalade ESV",
    image: cadillacImage,
    passengers: "6",
    luggage: "4",
    wifi: true,
    features: ["TV Screens", "Mood Lighting", "Premium Sound"],
    description: "Spacious SUV with all the luxury features for larger groups.",
    price: "$150/hour"
  },
  {
    id: 3,
    name: "Lincoln Stretch Limousine",
    image: lincolnImage,
    passengers: "10",
    luggage: "6",
    wifi: true,
    features: ["LED Lighting", "Sunroof", "Champagne Service"],
    description: "Classic stretch limo perfect for special occasions.",
    price: "$180/hour"
  },
  {
    id: 4,
    name: "Rolls Royce Phantom",
    image: rollsroyceImage,
    passengers: "4",
    luggage: "3",
    wifi: false,
    features: ["Handcrafted Interior", "Customizable Ambience", "Butler Service"],
    description: "The pinnacle of luxury transportation for discerning clients.",
    price: "$250/hour"
  },
  {
    id: 5,
    name: "Tesla Model X",
    image: teslaImage,
    passengers: "6",
    luggage: "4",
    wifi: true,
    features: ["Eco-Friendly", "Premium Sound", "Modern Design"],
    description: "Luxury electric vehicle with cutting-edge technology.",
    price: "$160/hour"
  },
  {
    id: 6,
    name: "Hummer H2 Limousine",
    image: hummerImage,
    passengers: "12",
    luggage: "8",
    wifi: true,
    features: ["Party Lighting", "Premium Bar", "Dance Floor"],
    description: "The ultimate party vehicle for large celebrations.",
    price: "$220/hour"
  }
]

function VehicleImage({ src, alt }: { src: any, alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img 
      src={imgSrc.href} 
      alt={alt}
      className="w-full h-48 object-cover rounded-t-xl"
      loading="lazy"
      onError={() => setImgSrc(defaultImage)}
    />
  )
}

export default function FleetPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-500">Luxury</span> Fleet
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our premium collection of vehicles, each offering unparalleled comfort and style.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="bg-gray-900 border-gray-800 hover:border-yellow-500/50 transition-colors group">
                {/* Imagen del vehículo con componente optimizado */}
                <div className="overflow-hidden rounded-t-xl">
                  <VehicleImage src={vehicle.image} alt={vehicle.name} />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-yellow-500 transition-colors">
                    {vehicle.name}
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <Users className="h-4 w-4 mr-1 text-yellow-500" />
                      {vehicle.passengers}
                    </div>
                    <div className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <Briefcase className="h-4 w-4 mr-1 text-yellow-500" />
                      {vehicle.luggage}
                    </div>
                    <div className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      {vehicle.wifi ? (
                        <>
                          <Wifi className="h-4 w-4 mr-1 text-yellow-500" />
                          WiFi
                        </>
                      ) : (
                        <span className="text-gray-500">No WiFi</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {vehicle.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">Features:</h3>
                    <ul className="space-y-1 text-gray-300 group-hover:text-white transition-colors">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-yellow-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-bold text-lg group-hover:text-yellow-400 transition-colors">
                      {vehicle.price}
                    </span>
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-black transition-colors">
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
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our fleet is constantly expanding. Contact us for special requests or larger group accommodations.
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-6 text-lg transition-colors">
            Contact Our Specialists
          </Button>
        </div>
      </section>
    </div>
  )
}