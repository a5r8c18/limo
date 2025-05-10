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
    <section className={cn("py-16 px-4 bg-gradient-to-b from-black to-gray-900", className)}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            <span className="text-white">Book</span> <span className="text-amber-400">Your Limo</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {submitted ? (
          <Card className="bg-gradient-to-b from-gray-900 to-black border border-amber-500/30">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-300">
                Your booking request has been received. Our team will contact
                you shortly to confirm your reservation.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gradient-to-b from-gray-900 to-black border border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Full Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "date", label: "Date", type: "date" },
                  { id: "time", label: "Time", type: "time" },
                  { id: "passengers", label: "Number of Passengers", type: "number", min: "1" }
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-300">
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
                      className="bg-gray-800 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-6 text-lg transition-all duration-300"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
