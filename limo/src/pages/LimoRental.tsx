import { useState } from "react";
import { Clock, Phone, Mail } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { VideoBanner } from "../components/VideoBanner";
import  Fleet  from "../components/Fleet";
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

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Our Fleet", id: "fleet" },
    { name: "Services", id: "services" },
    { name: "Book Now", id: "booking" },
    { name: "Contact", id: "contact" },
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
    <div className="min-h-screen bg-luxury-black text-white">
      {/* Top Header */}
      <div className="bg-yellow-600 text-black py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 md:mb-0">
            <Clock className="h-4 w-4 mr-2" />
            <span>24/7 Service Available</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>bookings@luxurylimos.com</span>
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
      <Fleet />

      <BookingForm
        formData={formData}
        submitted={submitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <ContactSection />
      <Footer />
    </div>
  );
}
