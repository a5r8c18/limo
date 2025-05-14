import { useState, useEffect, useCallback } from "react";
import { MapPin, Car, Calendar, Clock, Users, Luggage, Baby, User, Mail, Phone, Send, Map as MapIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

interface MarkerData {
  lat: number;
  lng: number;
  address: string;
  type: string;
}

const libraries: ("places")[] = ["places"];

export default function GetQuote() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<{
    serviceType: string;
    pickupDate: string;
    pickupTime: string;
    pickup: string;
    dropoff: string;
    stops: string[];
    passengers: string;
    luggage: string;
    childSeat: string;
    vehicleType: string;
    name: string;
    email: string;
    phone: string;
    specialRequests: string;
  }>({
    serviceType: "",
    pickupDate: "",
    pickupTime: "",
    pickup: "",
    dropoff: "",
    stops: [],
    passengers: "",
    luggage: "",
    childSeat: "0",
    vehicleType: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [pickupAutocomplete, setPickupAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [dropoffAutocomplete, setDropoffAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [stopAutocompletes, setStopAutocompletes] = useState<(google.maps.places.Autocomplete | null)[]>([]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAjT_SL7QmkPHYFYq0YPEZZkvmnyK2a4xQ", // Replace with your actual API key
    libraries,
  });

  const onMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (!activeField || !e.latLng) return;

      const lat = e.latLng.lat();
      const lng = e.latLng.lng();

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results?.[0]?.formatted_address) {
          const address = results[0].formatted_address;
          if (activeField.startsWith("stop-")) {
            const index = parseInt(activeField.split("-")[1]);
            const newStops = [...formData.stops];
            newStops[index] = address;
            setFormData((prev) => ({ ...prev, stops: newStops }));
            setMarkers((prev) => [
              ...prev.filter((m) => m.type !== activeField),
              { lat, lng, address, type: activeField },
            ]);
          } else {
            setFormData((prev) => ({ ...prev, [activeField]: address }));
            setMarkers((prev) => [
              ...prev.filter((m) => m.type !== activeField),
              { lat, lng, address, type: activeField },
            ]);
          }
          if (errors[activeField]) {
            setErrors((prev) => ({ ...prev, [activeField]: "" }));
          }
        }
      });
    },
    [activeField, formData.stops, errors]
  );

  const handleAutocompleteLoad = useCallback(
    (field: string, autocomplete: google.maps.places.Autocomplete) => {
      if (field === "pickup") {
        setPickupAutocomplete(autocomplete);
      } else if (field === "dropoff") {
        setDropoffAutocomplete(autocomplete);
      } else if (field.startsWith("stop-")) {
        const index = parseInt(field.split("-")[1]);
        setStopAutocompletes((prev) => {
          const newAutocompletes = [...prev];
          newAutocompletes[index] = autocomplete;
          return newAutocompletes;
        });
      }
    },
    []
  );

  useEffect(() => {
    const handlePlaceChanged = (field: string, autocomplete: google.maps.places.Autocomplete | null) => {
      if (!autocomplete) return;
      const place = autocomplete.getPlace();
      if (place.formatted_address && place.geometry && place.geometry.location) {
        const address = place.formatted_address;
        const geometry = place.geometry; // type-narrowing for TS
        const location = geometry.location; // type-narrowing for TS
        setFormData((prev) => ({ ...prev, [field]: address }));
        setMarkers((prev) => [
          ...prev.filter((m) => m.type !== field),
          {
            lat: location!.lat(),
            lng: location!.lng(),
            address,
            type: field,
          },
        ]);
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: "" }));
        }
      }
    };

    if (pickupAutocomplete) {
      pickupAutocomplete.addListener("place_changed", () => handlePlaceChanged("pickup", pickupAutocomplete));
    }
    if (dropoffAutocomplete) {
      dropoffAutocomplete.addListener("place_changed", () => handlePlaceChanged("dropoff", dropoffAutocomplete));
    }
    stopAutocompletes.forEach((autocomplete, index) => {
      if (autocomplete) {
        autocomplete.addListener("place_changed", () => handlePlaceChanged(`stop-${index}`, autocomplete));
      }
    });

    return () => {
      if (pickupAutocomplete) google.maps.event.clearInstanceListeners(pickupAutocomplete);
      if (dropoffAutocomplete) google.maps.event.clearInstanceListeners(dropoffAutocomplete);
      stopAutocompletes.forEach((autocomplete) => {
        if (autocomplete) google.maps.event.clearInstanceListeners(autocomplete);
      });
    };
  }, [pickupAutocomplete, dropoffAutocomplete, stopAutocompletes, errors]);

  const handleInputFocus = (field: string) => {
    setActiveField(field);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const addStop = () => {
    setFormData((prev) => ({ ...prev, stops: [...prev.stops, ""] }));
    setStopAutocompletes((prev) => [...prev, null]);
  };

  const updateStop = (index: number, value: string) => {
    const newStops = [...formData.stops];
    newStops[index] = value;
    setFormData((prev) => ({ ...prev, stops: newStops }));
  };

  const removeStop = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      stops: prev.stops.filter((_, i) => i !== index),
    }));
    setMarkers((prev) => prev.filter((m) => m.type !== `stop-${index}`));
    setStopAutocompletes((prev) => prev.filter((_, i) => i !== index));
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.serviceType) newErrors.serviceType = "Service type is required";
      if (!formData.pickupDate) newErrors.pickupDate = "Pick-up date is required";
      if (!formData.pickupTime) newErrors.pickupTime = "Pick-up time is required";
      if (!formData.pickup) newErrors.pickup = "Pickup location is required";
      if (!formData.dropoff) newErrors.dropoff = "Drop-off location is required";
      if (!formData.passengers) newErrors.passengers = "Number of passengers is required";
      if (!formData.luggage) newErrors.luggage = "Number of luggage is required";
    } else if (step === 2) {
      if (!formData.vehicleType) newErrors.vehicleType = "Vehicle type is required";
    } else if (step === 3) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
      if (!formData.phone) newErrors.phone = "Phone number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({
        serviceType: "",
        pickupDate: "",
        pickupTime: "",
        pickup: "",
        dropoff: "",
        stops: [],
        passengers: "",
        luggage: "",
        childSeat: "0",
        vehicleType: "",
        name: "",
        email: "",
        phone: "",
        specialRequests: "",
      });
      setMarkers([]);
      setStopAutocompletes([]);
      setStep(1);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  if (!isLoaded) {
    return <div className="text-center text-white">Loading map...</div>;
  }

  return (
    <section className="py-20 px-4 bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold uppercase tracking-wider mb-6 font-serif text-center text-white">
          Get a <span className="text-amber-400">Quote</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 font-serif italic text-center">
          Book your luxury ride in three simple steps
        </p>

        <div className="bg-black border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-500">
          {submitted ? (
            <div className="text-center text-amber-400 font-serif text-lg">
              Thank you! Your quote request has been submitted.
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`mx-2 h-2 w-2 rounded-full ${
                      s <= step ? "bg-amber-400" : "bg-gray-500"
                    }`}
                  ></div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-white mb-4">Step 1: Ride Info</h3>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Car className="h-4 w-4 mr-2 text-amber-400" />
                          Select Service Type
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("serviceType", value)}
                          value={formData.serviceType}
                        >
                          <SelectTrigger className="bg-gray-900 border-amber-500/20 text-white font-serif focus:border-amber-400">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-amber-500/20 text-white font-serif">
                            <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                            <SelectItem value="hourly">Hourly Service</SelectItem>
                            <SelectItem value="point-to-point">Point-to-Point</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serviceType && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.serviceType}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                          Pick-Up Date
                        </label>
                        <Input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                        />
                        {errors.pickupDate && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.pickupDate}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Clock className="h-4 w-4 mr-2 text-amber-400" />
                          Pick-Up Time
                        </label>
                        <Input
                          type="time"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleChange}
                          className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                        />
                        {errors.pickupTime && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.pickupTime}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                          Pick-Up Location
                        </label>
                        <Autocomplete
                          onLoad={(autocomplete) => handleAutocompleteLoad("pickup", autocomplete)}
                          restrictions={{ country: "us" }}
                        >
                          <Input
                            id="pickup-input"
                            type="text"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus("pickup")}
                            placeholder="Enter pickup location"
                            className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                          />
                        </Autocomplete>
                        {errors.pickup && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.pickup}</p>
                        )}
                      </div>
                      {formData.stops.map((stop, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Autocomplete
                            onLoad={(autocomplete) => handleAutocompleteLoad(`stop-${index}`, autocomplete)}
                            restrictions={{ country: "us" }}
                          >
                            <Input
                              id={`stop-input-${index}`}
                              type="text"
                              value={stop}
                              onChange={(e) => updateStop(index, e.target.value)}
                              onFocus={() => handleInputFocus(`stop-${index}`)}
                              placeholder={`Stop ${index + 1}`}
                              className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                            />
                          </Autocomplete>
                          <Button
                            type="button"
                            onClick={() => removeStop(index)}
                            className="bg-red-600 hover:bg-red-500 text-white"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={addStop}
                        className="bg-amber-600 hover:bg-amber-500 text-black font-serif"
                      >
                        Add Stop
                      </Button>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                          Drop-Off Location
                        </label>
                        <Autocomplete
                          onLoad={(autocomplete) => handleAutocompleteLoad("dropoff", autocomplete)}
                          restrictions={{ country: "us" }}
                        >
                          <Input
                            id="dropoff-input"
                            type="text"
                            name="dropoff"
                            value={formData.dropoff}
                            onChange={handleChange}
                            onFocus={() => handleInputFocus("dropoff")}
                            placeholder="Enter drop-off location"
                            className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                          />
                        </Autocomplete>
                        {errors.dropoff && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.dropoff}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Users className="h-4 w-4 mr-2 text-amber-400" />
                          Number of Passengers
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("passengers", value)}
                          value={formData.passengers}
                        >
                          <SelectTrigger className="bg-gray-900 border-amber-500/20 text-white font-serif focus:border-amber-400">
                            <SelectValue placeholder="Select number of passengers" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-amber-500/20 text-white font-serif">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Passenger" : "Passengers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.passengers && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.passengers}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Luggage className="h-4 w-4 mr-2 text-amber-400" />
                          Luggage Count
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("luggage", value)}
                          value={formData.luggage}
                        >
                          <SelectTrigger className="bg-gray-900 border-amber-500/20 text-white font-serif focus:border-amber-400">
                            <SelectValue placeholder="Select number of luggage" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-amber-500/20 text-white font-serif">
                            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Suitcase" : "Suitcases"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.luggage && (
                          <p className="text-red-400 text-sm mt-1 font-serif">{errors.luggage}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center text-gray-400 font-serif mb-2">
                          <Baby className="h-4 w-4 mr-2 text-amber-400" />
                          Add Child Seat
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("childSeat", value)}
                          value={formData.childSeat}
                        >
                          <SelectTrigger className="bg-gray-900 border-amber-500/20 text-white font-serif focus:border-amber-400">
                            <SelectValue placeholder="Select number of child seats" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-amber-500/20 text-white font-serif">
                            {[0, 1, 2, 3].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Child Seat" : "Child Seats"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center text-gray-400 font-serif mb-2">
                        <MapIcon className="h-4 w-4 mr-2 text-amber-400" />
                        Trip Map
                      </label>
                      <div className="bg-gray-900 rounded-lg h-96">
                        <GoogleMap
                          mapContainerStyle={{ width: "100%", height: "100%" }}
                          center={{ lat: 37.7749, lng: -122.4194 }} // Default to San Francisco
                          zoom={12}
                          onClick={onMapClick}
                        >
                          {markers.map((marker, index) => (
                            <Marker
                              key={index}
                              position={{ lat: marker.lat, lng: marker.lng }}
                              title={marker.address}
                            />
                          ))}
                        </GoogleMap>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4">Step 2: Select Vehicle</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "sedan", name: "Luxury Sedan", img: "/images/sedan.jpg" },
                        { id: "suv", name: "Luxury SUV", img: "/images/suv.jpg" },
                        { id: "limousine", name: "Stretch Limousine", img: "/images/limousine.jpg" },
                        { id: "van", name: "Executive Van", img: "/images/van.jpg" },
                        { id: "sprinter", name: "Mercedes Sprinter", img: "/images/sprinter.jpg" },
                      ].map((vehicle) => (
                        <div
                          key={vehicle.id}
                          className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                            formData.vehicleType === vehicle.id
                              ? "border-amber-400"
                              : "border-gray-700 hover:border-amber-500/50"
                          }`}
                          onClick={() => handleSelectChange("vehicleType", vehicle.id)}
                        >
                          <img
                            src={vehicle.img}
                            alt={vehicle.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                          />
                          <h4 className="text-white font-serif">{vehicle.name}</h4>
                        </div>
                      ))}
                    </div>
                    {errors.vehicleType && (
                      <p className="text-red-400 text-sm mt-4 font-serif">{errors.vehicleType}</p>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-white mb-4">Step 3: Final Details</h3>
                    <div>
                      <label className="flex items-center text-gray-400 font-serif mb-2">
                        <User className="h-4 w-4 mr-2 text-amber-400" />
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1 font-serif">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="flex items-center text-gray-400 font-serif mb-2">
                        <Mail className="h-4 w-4 mr-2 text-amber-400" />
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 font-serif">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="flex items-center text-gray-400 font-serif mb-2">
                        <Phone className="h-4 w-4 mr-2 text-amber-400" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1 font-serif">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="flex items-center text-gray-400 font-serif mb-2">
                        <Send className="h-4 w-4 mr-2 text-amber-400" />
                        Special Requests
                      </label>
                      <Textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests or notes"
                        className="bg-gray-900 border-amber-500/20 text-white placeholder-gray-500 font-serif focus:border-amber-400"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-700 hover:bg-gray-600 text-white font-serif tracking-wider rounded-none px-6 py-4"
                    >
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black transition-all duration-300 border-2 border-black hover:border-amber-400 rounded-none px-10 py-4 text-lg ml-auto"
                    >
                      <span className="font-serif tracking-wider">Next</span>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black transition-all duration-300 border-2 border-black hover:border-amber-400 rounded-none px-10 py-4 text-lg ml-auto"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      <span className="font-serif tracking-wider">Submit Quote</span>
                    </Button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}