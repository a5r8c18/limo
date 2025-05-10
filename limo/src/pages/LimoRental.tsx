import { useState } from "react";
import { Clock, Phone, Mail, ChevronRight, Star } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { VideoBanner } from "../components/VideoBanner";
import { BookingForm } from "../components/BookingForm";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function LimoRental() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    passengers: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mercedesprinter = '/images/fleet/Mercedes Sprinter.jpeg'
  const cadillacescalade = '/images/fleet/cadillacescalade.jpeg'
  const lincolnstretch = '/images/fleet/lincolnstretch.jpeg'


  const navItems = [
    { name: "Home", id: "home" },
    { name: "Our Fleet", id: "fleet" },
    { name: "Services", id: "services" },
    { name: "Book Now", id: "booking" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    {
      title: "Airport Transfers",
      description: "Reliable luxury transportation to/from all major airports",
      icon: "✈️"
    },
    {
      title: "Corporate Events",
      description: "Professional transportation for business meetings and events",
      icon: "💼"
    },
    {
      title: "Weddings",
      description: "Elegant wedding transportation for your special day",
      icon: "💍"
    },
    {
      title: "Night Out",
      description: "Safe and stylish rides for your evening events",
      icon: "🌃"
    }
  ];

  const testimonials = [
    {
      quote: "The best limo service in town! Punctual, professional and luxurious.",
      author: "Michael T.",
      rating: 5
    },
    {
      quote: "Made our wedding day extra special with their white glove service.",
      author: "Sarah K.",
      rating: 5
    },
    {
      quote: "Perfect for our corporate clients. Always impressed with the service.",
      author: "David P.",
      rating: 5
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        passengers: "",
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Header */}
      <div className="bg-yellow-600 text-black py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center mb-2 md:mb-0">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">24/7 Luxury Transportation Service</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span className="font-semibold">bookings@luxurylimos.com</span>
            </div>
          </div>
        </div>
      </div>

      <Navigation
        navItems={navItems}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />

      <VideoBanner />

      {/* Quick Booking Form */}
      <section className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black p-8 rounded-lg shadow-xl border border-yellow-600/30">
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
              RESERVE YOUR LUXURY RIDE
            </h2>
            <BookingForm
              formData={formData}
              submitted={submitted}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            OUR <span className="text-yellow-500">PREMIUM</span> SERVICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors group"
              >
                <div className="text-4xl mb-4 text-yellow-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <button className="flex items-center text-yellow-500 font-medium mt-4">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OUR <span className="text-yellow-500">LUXURY</span> FLEET
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our premium collection of vehicles for every occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Mercedes Sprinter",
                type: "Executive Van",
                capacity: "12 passengers",
                image: mercedesprinter
              },
              {
                name: "Cadillac Escalade",
                type: "Luxury SUV",
                capacity: "6 passengers",
                image: cadillacescalade
              },
              {
                name: "Lincoln Stretch",
                type: "Limousine",
                capacity: "10 passengers",
                image: lincolnstretch
              }
            ].map((vehicle, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                  <p className="text-yellow-500 mb-1">{vehicle.type}</p>
                  <p className="text-gray-300">{vehicle.capacity}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-8 rounded-md text-lg transition-colors">
              VIEW FULL FLEET
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            CLIENT <span className="text-yellow-500">TESTIMONIALS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-yellow-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            READY TO EXPERIENCE LUXURY TRANSPORTATION?
          </h2>
          <p className="text-xl mb-8">
            Book your ride today and travel in style with our premium service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors">
              CALL NOW <Phone className="h-5 w-5 inline ml-2" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-md text-lg transition-colors">
              ONLINE BOOKING
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}