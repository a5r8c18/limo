import { useState } from "react";
import { Clock, Phone, Mail, ChevronRight, Star, Sparkles } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { VideoBanner } from "../components/VideoBanner";
import { BookingForm } from "../components/BookingForm";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

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
    { name: "Get a Quote", id: "quote" },
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
    <div className="min-h-screen bg-black text-gray-100 font-serif">
      {/* Top Header - Estilo retro con tipografía vintage */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-black py-3 px-4 border-b border-amber-400/30 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center mb-2 md:mb-0">
            <Clock className="h-5 w-5 mr-2 text-black" />
            <span className="font-medium tracking-wider">24/7 LUXURY TRANSPORTATION</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-black" />
              <span className="font-semibold tracking-tight">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-black" />
              <span className="font-semibold tracking-tight">bookings@luxurylimos.com</span>
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

      {/* Quick Booking Form - Usando Card de shadcn con estilo vintage */}
      <section className="py-16 px-4 bg-black bg-opacity-90 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-black p-8 border-4 border-amber-500 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-6 text-center text-amber-400 font-display tracking-wider">
                <span className="text-white">RESERVE YOUR</span> LUXURY RIDE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm
                formData={formData}
                submitted={submitted}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                className="border-amber-500/30"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section - Usando Card de shadcn con estilo vintage */}
      <section className="py-20 px-4 bg-black bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider font-display">
              <span className="text-white">Our</span> <span className="text-amber-400">Premium</span> Services
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-black p-8 rounded-lg border-2 border-gray-800 hover:border-amber-500 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10 transform hover:-translate-y-1"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')" }}
              >
                <CardContent className="flex flex-col items-center text-center space-y-4">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 italic">{service.description}</p>
                  <div className="flex justify-center">
                    <Button variant="link" className="text-amber-400 font-medium group-hover:text-white transition-colors border-b border-amber-400 pb-1">
                      Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview Section - Estilo vintage con polaroids */}
      <section className="py-20 px-4 bg-black bg-opacity-90 bg-[url('https://www.transparenttextures.com/patterns/black-thread-light.png')]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider font-display">
              <span className="text-white">Our</span> <span className="text-amber-400">Luxury</span> Fleet
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto italic">
              Explore our premium collection of vehicles for every occasion
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
              <div key={index} className="relative group">
                <div className="aspect-w-16 aspect-h-9 bg-white p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 border-4 border-white" 
                  />
                </div>
                <Card className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6 bg-black p-4 border-2 border-amber-400 shadow-lg">
                  <CardContent className="text-center">
                    <h3 className="text-xl font-bold text-white font-display">{vehicle.name}</h3>
                    <p className="text-amber-400 text-sm">{vehicle.type}</p>
                    <p className="text-gray-300 text-xs italic">{vehicle.capacity}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-10 rounded-none text-lg transition-all duration-300 border-2 border-black hover:border-amber-500 shadow-lg transform hover:scale-105">
              VIEW FULL FLEET
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Usando Card de shadcn con estilo vintage */}
      <section className="py-20 px-4 bg-black bg-opacity-90 bg-[url('https://www.transparenttextures.com/patterns/dark-denim-3.png')]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider font-display">
              <span className="text-white">Client</span> <span className="text-amber-400">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black p-8 border-l-4 border-amber-500 hover:border-amber-400 transition-all duration-300 group transform hover:scale-105">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400 mx-1" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 relative px-4">
                    <span className="absolute top-0 left-0 text-amber-400 text-4xl opacity-20">"</span>
                    {testimonial.quote}
                    <span className="absolute bottom-0 right-0 text-amber-400 text-4xl opacity-20">"</span>
                  </p>
                  <p className="font-bold text-amber-400 border-t border-gray-800 pt-4">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Estilo cartel neón vintage */}
      <section className="py-24 px-4 bg-amber-600 text-black bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider font-display neon-text">
            Ready to experience luxury transportation?
          </h2>
          <p className="text-xl mb-10 font-medium italic">
            Book your ride today and travel in style with our premium service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-none text-lg transition-all duration-300 border-2 border-white hover:border-amber-400 shadow-lg">
              CALL NOW <Phone className="h-5 w-5 inline ml-2" />
            </Button>
            <Button variant="secondary" className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-10 rounded-none text-lg transition-all duration-300 border-2 border-black hover:border-amber-500 shadow-lg">
              ONLINE BOOKING
            </Button>
          </div>
        </div>
      </section>

      <ContactSection className="bg-black border-t border-gray-800" />
      <Footer className="bg-gray-900 text-gray-400 border-t border-gray-800" />
      </div>
  );
}