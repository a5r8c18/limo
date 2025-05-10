import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
}: BookingFormProps) {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-yellow-500">Book</span> Your Limo
        </h2>

        {submitted ? (
          <Card className="bg-black border-black">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Thank You!
              </h3>
              <p className="text-lg">
                Your booking request has been received. Our team will contact
                you shortly to confirm your reservation.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium"
                    >
                      Date
                    </label>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block mb-2 text-sm font-medium"
                    >
                      Time
                    </label>
                    <Input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="passengers"
                    className="block mb-2 text-sm font-medium"
                  >
                    Number of Passengers
                  </label>
                  <Input
                    type="number"
                    id="passengers"
                    name="passengers"
                    min="1"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-6"
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
