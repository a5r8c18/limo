import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Briefcase, Wifi, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Vehicle {
  id: number;
  name: string;
  images: string[];
  passengers: string;
  luggage: string;
  wifi: boolean;
  features: string[];
  description: string;
  price: string;
}

function VehicleImage({ images, alt, isVisible, onImageClick }: { 
  images: string[]; 
  alt: string; 
  isVisible: boolean; 
  onImageClick: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic carousel
  useEffect(() => {
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, isVisible, images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-t-xl h-64 border-b border-gray-800 group cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={onImageClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <div className="relative w-full h-full">
        <img
          src={isVisible ? images[currentImage] : ""}
          alt={isVisible ? `${alt} view ${currentImage + 1}` : ""}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="bg-black/50 text-white p-2 m-2 rounded-full hover:bg-black/70"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="bg-black/50 text-white p-2 m-2 rounded-full hover:bg-black/70"
          >
            →
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="text-2xl font-bold text-white font-serif tracking-wider">{alt}</div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImage ? "bg-amber-400" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function ImageModal({ images, alt, onClose }: { images: string[]; alt: string; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused] = useState(false);

  // Automatic carousel in modal
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-lg max-w-4xl w-full max-h-[80vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl z-20"
          onClick={onClose}
        >
          ×
        </button>
        <div className="relative w-full h-[60vh]">
          <img
            src={images[currentImage]}
            alt={`${alt} view ${currentImage + 1}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-between z-10">
            <button
              onClick={prevImage}
              className="bg-black/50 text-white p-3 m-4 rounded-full hover:bg-black/70"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="bg-black/50 text-white p-3 m-4 rounded-full hover:bg-black/70"
            >
              →
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentImage ? "bg-amber-400" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FleetPage() {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      images: [
        "/images/fleet/mercedes-s-class-1.jpeg",
        "/images/fleet/mercedes-s-class-2.jpeg",
        "/images/fleet/mercedes-s-class-3.jpeg",
      ],
      passengers: "3",
      luggage: "2",
      wifi: true,
      features: ["Hand-stitched leather seats", "Privacy partition", "Premium mini bar"],
      description: "The epitome of luxury sedan comfort with bespoke amenities for the discerning traveler.",
      price: "$120/hour",
    },
    {
      id: 2,
      name: "Rolls-Royce Phantom",
      images: [
        "/images/fleet/rolls-royce-1.jpeg",
        "/images/fleet/rolls-royce-2.jpeg",
        "/images/fleet/rolls-royce-3.jpeg",
      ],
      passengers: "4",
      luggage: "3",
      wifi: true,
      features: ["Custom champagne cooler", "Starlight headrests", "Lambswool floor mats"],
      description: "Unmatched elegance and craftsmanship in this automotive masterpiece.",
      price: "$250/hour",
    },
    {
      id: 3,
      name: "Cadillac Escalade ESV",
      images: [
        "/images/fleet/cadillac-escalade-1.jpeg",
        "/images/fleet/cadillac-escalade-2.jpeg",
        "/images/fleet/cadillac-escalade-3.jpeg",
      ],
      passengers: "6",
      luggage: "4",
      wifi: true,
      features: ["24 TV monitors", "Premium sound system", "Executive seating"],
      description: "Spacious luxury for larger groups without compromising on comfort.",
      price: "$180/hour",
    },
    ...Array.from({ length: 47 }, (_, index) => ({
      id: index + 4,
      name: `Luxury Vehicle ${index + 4}`,
      images: [
        `/images/fleet/vehicle-${index + 4}-1.jpeg`,
        `/images/fleet/vehicle-${index + 4}-2.jpeg`,
        `/images/fleet/vehicle-${index + 4}-3.jpeg`,
      ],
      passengers: `${Math.floor(Math.random() * 4) + 3}`,
      luggage: `${Math.floor(Math.random() * 3) + 2}`,
      wifi: Math.random() > 0.2,
      features: [
        `Feature A${index + 4}`,
        `Feature B${index + 4}`,
        `Feature C${index + 4}`,
      ],
      description: `Premium luxury vehicle offering exceptional comfort and style for your journey.`,
      price: `$${100 + Math.floor(Math.random() * 200)}/hour`,
    })),
  ];

  // IntersectionObserver setup
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const refsAtMount = cardRefs.current;
    return () => {
      refsAtMount.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openModal = (images: string[], alt: string) => {
    setModalImages(images);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setModalAlt("");
  };
  

  return (
    <div
      className="bg-black text-gray-100 min-h-screen"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')" }}
    >
      <section className="relative py-24 px-4 bg-black border-b border-amber-500/20">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')" }}
        ></div>
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

      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-h-[80vh] overflow-y-auto scrollbar-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {vehicles.map((vehicle, index) => (
              <Card
                key={vehicle.id}
                className="bg-black border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 group relative overflow-hidden"
                data-id={vehicle.id}
                ref={el => {cardRefs.current[index] = el;}}
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" }}
                ></div>

                <VehicleImage
                  images={vehicle.images}
                  alt={vehicle.name}
                  isVisible={visibleCards.includes(vehicle.id)}
                  onImageClick={() => openModal(vehicle.images, vehicle.name)}
                />

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

      <section className="py-20 px-4 bg-black border-t border-amber-500/20 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
        ></div>
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

      {modalOpen && (
        <ImageModal
          images={modalImages}
          alt={modalAlt}
          onClose={closeModal}
        />
      )}
    </div>
  );
}