import { useState } from "react";
import { Clock, Phone, Mail, ChevronRight, Star, Sparkles } from "lucide-react";
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

  const mercedesprinter = '/images/fleet/Mercedes Sprinter.jpeg';
  const cadillacescalade = '/images/fleet/cadillacescalade.jpeg';
  const lincolnstretch = '/images/fleet/lincolnstretch.jpeg';

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
      icon: <Sparkles className="h-10 w-10 text-amber-400" />
    },
    {
      title: "Corporate Events",
      description: "Professional transportation for business meetings and events",
      icon: <Sparkles className="h-10 w-10 text-amber-400" />
    },
    {
      title: "Weddings",
      description: "Elegant wedding transportation for your special day",
      icon: <Sparkles className="h-10 w-10 text-amber-400" />
    },
    {
      title: "Night Out",
      description: "Safe and stylish rides for your evening events",
      icon: <Sparkles className="h-10 w-10 text-amber-400" />
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
    <div className="min-h-screen bg-black text-gray-100">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-black py-3 px-4 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center mb-2 md:mb-0">
            <Clock className="h-5 w-5 mr-2 text-black" />
            <span className="font-medium">24/7 Luxury Transportation Service</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-black" />
              <span className="font-semibold">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-black" />
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
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black p-8 rounded-lg shadow-2xl border border-amber-500/20">
            <h2 className="text-3xl font-bold mb-6 text-center text-amber-400">
              <span className="text-white">RESERVE YOUR</span> LUXURY RIDE
            </h2>
            <BookingForm
              formData={formData}
              submitted={submitted}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              className="border-amber-500/30"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
              <span className="text-white">Our</span> <span className="text-amber-400">Premium</span> Services
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-amber-500 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                <div className="flex justify-center">
                  <button className="flex items-center text-amber-400 font-medium group-hover:text-white transition-colors">
                    Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
              <span className="text-white">Our</span> <span className="text-amber-400">Luxury</span> Fleet
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our premium collection of vehicles for every occasion
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                  <p className="text-amber-400 mb-1 font-medium">{vehicle.type}</p>
                  <p className="text-gray-300">{vehicle.capacity}</p>
                  <div className="absolute inset-0 border border-transparent group-hover:border-amber-400/50 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-10 rounded-sm text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
              VIEW FULL FLEET
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
              <span className="text-white">Client</span> <span className="text-amber-400">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400 mx-1" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-center mb-6 relative">
                  <span className="absolute top-0 left-0 text-amber-400 text-4xl opacity-20">"</span>
                  {testimonial.quote}
                  <span className="absolute bottom-0 right-0 text-amber-400 text-4xl opacity-20">"</span>
                </p>
                <p className="font-bold text-amber-400 text-center">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-700 to-amber-500 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">
            Ready to experience luxury transportation?
          </h2>
          <p className="text-xl mb-10 font-medium">
            Book your ride today and travel in style with our premium service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-sm text-lg transition-all duration-300 border border-transparent hover:border-amber-400">
              CALL NOW <Phone className="h-5 w-5 inline ml-2" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-10 rounded-sm text-lg transition-all duration-300 border border-transparent hover:border-black">
              ONLINE BOOKING
            </button>
          </div>
        </div>
      </section>

      <ContactSection className="bg-black border-t border-gray-800" />
      <Footer className="bg-gray-900 text-gray-400 border-t border-gray-800" />
    </div>
  );
}