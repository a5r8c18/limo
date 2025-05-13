import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  passengers: string;
}

interface BookingFormProps {
  formData: FormData;
  submitted: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  compact?: boolean;
  className?: string;
}

export function BookingForm({
  formData,
  submitted,
  handleChange,
  handleSubmit,
  className
}: BookingFormProps) {
  return (
    <section 
      className={cn("py-16 px-4 bg-black", className)}
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-thread-light.png')" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Encabezado con estilo vintage */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4 font-serif">
            <span className="text-white">Book</span> <span className="text-amber-400">Your Limo</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-400 italic font-serif">Complete the form below to reserve your luxury experience</p>
        </div>

        {submitted ? (
          <Card className="bg-black border border-amber-500/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-thread.png')" }}></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 text-amber-400 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
                Thank You!
              </h3>
              <p className="text-gray-300 font-serif">
                Your booking request has been received. Our team will contact
                you shortly to confirm your reservation.
              </p>
              <div className="mt-6 text-xs text-amber-400/70 tracking-widest">
                REF: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-black border border-amber-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-thread.png')" }}></div>
            <CardContent className="p-8 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Full Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "date", label: "Date", type: "date" },
                  { id: "time", label: "Time", type: "time" },
                  { id: "passengers", label: "Number of Passengers", type: "number", min: "1" }
                ].map((field) => (
                  <div key={field.id} className="group">
                    <label 
                      htmlFor={field.id} 
                      className="block mb-2 text-sm font-medium text-gray-300 font-serif"
                    >
                      {field.label}
                    </label>
                    <Input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
                      required
                      min={field.min}
                      className="bg-gray-900 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400 font-serif placeholder-gray-500 rounded-none border-x-0 border-t-0 border-b-2 focus:ring-0 transition-all group-hover:border-amber-400/50"
                    />
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-6 text-lg transition-all duration-300 rounded-sm border-2 border-black hover:border-amber-400 mt-8"
                >
                  <span className="font-serif tracking-wider">SUBMIT BOOKING REQUEST</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
