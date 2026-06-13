import React, { useState, useEffect } from "react";
import { BookingFormInput } from "../types";
import { Calendar, Clock, MapPin, Users, Phone, Mail, User, ShieldCheck, HelpCircle, FileText, CheckCircle2 } from "lucide-react";

interface BookingSectionProps {
  selectedServicePreset?: string;
  selectedVehiclePreset?: string;
}

export default function BookingSection({ selectedServicePreset = "", selectedVehiclePreset = "" }: BookingSectionProps) {
  
  // State for Booking Request Inputs
  const [formData, setFormData] = useState<BookingFormInput>({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    vehicleType: "Standard Taxi Sedans",
    passengers: 1,
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
  });

  // Apply presets if passed via navigation
  useEffect(() => {
    if (selectedVehiclePreset) {
      setFormData(prev => ({ ...prev, vehicleType: selectedVehiclePreset }));
    } else if (selectedServicePreset) {
      // map service to vehicle counterpart
      if (selectedServicePreset.includes("Limo") || selectedServicePreset.includes("Casino")) {
        setFormData(prev => ({ ...prev, vehicleType: "Casino Trips from Texas to Louisiana" }));
      } else if (selectedServicePreset.includes("Charter")) {
        setFormData(prev => ({ ...prev, vehicleType: "Charter Buses" }));
      } else if (selectedServicePreset.includes("Taxi")) {
        setFormData(prev => ({ ...prev, vehicleType: "Standard Taxi Sedans" }));
      } else if (selectedServicePreset.includes("Corporate")) {
        setFormData(prev => ({ ...prev, vehicleType: "Executive Vehicles" }));
      }
    }
  }, [selectedServicePreset, selectedVehiclePreset]);

  // UI Flow States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successDetails, setSuccessDetails] = useState<any | null>(null);

  // Live client-side estimate calculator (updates on modifications)
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    let cost = 0;
    switch (formData.vehicleType) {
      case "Standard Taxi Sedans":
        cost = 65;
        break;
      case "Luxury SUVs":
        cost = 150; // standard flat/2hr minimum
        break;
      case "Casino Trips from Texas to Louisiana":
        cost = 360; // standard 3h min
        break;
      case "Executive Vehicles":
        cost = 180;
        break;
      case "Mini Buses":
        cost = 450;
        break;
      case "Charter Buses":
        cost = 660; // 3h min
        break;
      default:
        cost = 65;
    }
    
    // Slight modifications based on passengers
    if (formData.passengers > 4) {
      cost += 20;
    }
    
    setEstimatedCost(cost);
  }, [formData.vehicleType, formData.passengers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessDetails(null);

    // Simple validation checklist
    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.date || !formData.time) {
      setErrorMessage("Please supply complete pickup, dropoff, date, and coordinate details.");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please complete your primary contact details (name, email, and phone).");
      return;
    }

    setIsLoading(true);

    try {
      // POST securely to fullstack endpoint
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessDetails({
          referenceId: data.referenceId,
          estimatedCost: data.estimatedCost,
          details: data.bookingDetails,
        });
        
        // Reset inputs on success representation
        setFormData({
          pickupLocation: "",
          dropoffLocation: "",
          date: "",
          time: "",
          vehicleType: "Standard Taxi Sedans",
          passengers: 1,
          specialRequests: "",
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to process booking request. Please call (409) 951-0839.");
      }
    } catch (err) {
      console.error("Booking error details:", err);
      setErrorMessage("Network signal error. Please contact our dispatch desk directly at (409) 951-0839.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="epic-ride-booking-view" className="bg-[#050B18] text-white px-4 py-16 sm:px-6 lg:px-8 relative">
      <div className="absolute top-[20%] right-[10%] h-96 w-96 rounded-full bg-[#FF6B00]/3 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6B00] uppercase font-mono">
            Online Dispatch Gate
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-5xl text-white">
            Secure Your <span className="text-transparent text-outline-white">Ride</span> Request
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            Submit your itinerary details below. Our certified dispatch team reviews resources and contacts you in under 15 minutes to guarantee reservation agreements.
          </p>
        </div>

        {/* Error message representation */}
        {errorMessage && (
          <div className="mb-8 rounded-sm border border-red-500/20 bg-red-500/10 p-4 text-xs font-bold text-red-400 font-mono text-center uppercase tracking-wider">
            {errorMessage}
          </div>
        )}

        {/* Success Modal Panel */}
        {successDetails && (
          <div className="mb-12 rounded-sm border border-emerald-500/25 bg-emerald-500/5 p-6 sm:p-8 backdrop-blur-md animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-emerald-500" />
            <div className="flex flex-col items-center text-center space-y-4 font-sans">
              <div className="rounded-sm bg-emerald-500/15 p-3.5 border border-emerald-500/30">
                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-extrabold uppercase tracking-widest text-white">
                Booking Request Submitted!
              </h2>
              <p className="text-xs text-gray-400 max-w-xl leading-relaxed">
                Your reservation query has been successfully staged in our dispatch queue. Our team is adjusting drivers and will ring/email you shortly with a confirmed contract link.
              </p>

              {/* Staged Details ticket format */}
              <div className="border border-white/10 rounded-sm bg-[#050B18] p-6 text-left max-w-md w-full space-y-3.5 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-2 text-[10px] text-slate-500">
                  <span>DISPATCH SYSTEM STATUS</span>
                  <span className="text-emerald-400 font-bold">&#9679; QUEUED</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracking Ref ID:</span>
                  <span className="font-bold text-[#FF6B00]">{successDetails.referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Est Price Quote:</span>
                  <span className="font-bold text-emerald-400 font-sans text-sm">${successDetails.estimatedCost}.00*</span>
                </div>
                <div className="flex justify-between">
                  <span>Authorized Guest:</span>
                  <span className="font-medium">{successDetails.details.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scheduled Date/Time:</span>
                  <span className="font-medium">{successDetails.details.date} at {successDetails.details.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>Requested Class:</span>
                  <span className="font-medium">{successDetails.details.vehicleType}</span>
                </div>
                <div className="text-[10px] text-slate-500 leading-normal pt-2 border-t border-white/10 font-sans italic text-center">
                  * Live estimations exclude state line toll fees. Contract dispatch rates are finalized via call/email agreement.
                </div>
              </div>

              <button
                onClick={() => setSuccessDetails(null)}
                className="mt-4 rounded-sm bg-[#FF6B00] text-[#050B18] font-bold uppercase tracking-widest text-xs px-6 py-3 px-10 shadow transition-colors hover:bg-orange-500"
              >
                Book another request
              </button>
            </div>
          </div>
        )}

        {/* Core Booking Form */}
        {!successDetails && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Form grid spacing */}
            <form onSubmit={handleFormSubmit} className="lg:col-span-2 space-y-6 bg-[#0A192F]/20 border border-white/10 rounded-sm p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              
              {/* Part 1: Trip Itinerary specifications */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-mono flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>1. Trip Itinerary</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Houston IAH Airport / Hotel Name"
                        className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 pr-10 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Dropoff Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Downtown Dallas Office / Address"
                        className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 pr-10 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Pickup Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 text-xs text-white uppercase font-mono tracking-wider focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Pickup Time
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 text-xs text-white font-mono focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Riders/Passengers
                    </label>
                    <div className="relative">
                      <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 pr-8 text-xs text-white focus:border-[#FF6B00] focus:outline-none font-mono"
                      >
                        {[...Array(56)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Vehicle Specs Class selection */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-mono flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>2. Vehicle Specifications</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Preferred Vehicle Tier
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-3.5 pr-8 text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                    >
                      <option value="Standard Taxi Sedans">Standard Taxi Sedans (1-4 Passengers)</option>
                      <option value="Luxury SUVs">Luxury SUVs (1-6 Passengers)</option>
                      <option value="Casino Trips from Texas to Louisiana">Casino Trips from Texas to Louisiana (up to 10 Passengers)</option>
                      <option value="Executive Vehicles">Executive Vehicles / Sprinters (up to 14 Passengers)</option>
                      <option value="Mini Buses">Mini Buses (up to 28 Passengers)</option>
                      <option value="Charter Buses">Charter Buses (up to 56 Passengers)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Special Requests / Itinerary Instructions
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="e.g. Luggage counts, Child booster seats, Airport baggage meet..."
                      className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white placeholder-slate-505 focus:border-[#FF6B00] focus:outline-none h-11"
                    />
                  </div>
                </div>
              </div>

              {/* Part 3: Secondary Contact coordinates */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-mono flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>3. Guest Contact details</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      Mobile Number (For dispatch sync)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(409) 951-0839"
                      className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Form Button */}
              <div className="pt-6 border-t border-white/5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded bg-gradient-to-r from-[#FF6B00] to-orange-700 text-slate-950 text-xs tracking-widest font-extrabold uppercase shadow shadow-orange-500/10 hover:shadow-orange-500/30 transition-transform active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Validating & Staging Reservation..." : "Submit Reservation Request"}
                </button>
              </div>

            </form>

            {/* Sidebar Pricing Estimation Summary */}
            <div className="space-y-6">
              
              {/* Est. Quote ticket info */}
              <div className="rounded-2xl border border-white/5 bg-[#FF6B00]/5 px-6 py-8 backdrop-blur-sm text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                  <FileText className="h-5 w-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] font-mono">
                    Live Booking Estimate
                  </h3>
                  <div className="text-4xl font-extrabold text-white mt-1 leading-none font-sans tracking-wide">
                    ${estimatedCost}.00*
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block mt-1.5">
                    Class: {formData.vehicleType.split(" ")[0]} TIER
                  </span>
                </div>
                
                <p className="text-[11px] text-slate-400 leading-normal font-sans pt-1 border-t border-white/5">
                  Tax and luggage parameters included. Final pricing is confirmed by phone call based on specialized toll systems or county distances.
                </p>
              </div>

              {/* Verified Badge and checklist */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center space-x-1.5 border-b border-white/5 pb-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
                  <span>Secure Carrier Seal</span>
                </h4>
                
                <ul className="space-y-3 text-[11px] text-slate-400 font-sans">
                  <li className="flex items-start">
                    <span className="text-emerald-400 font-bold mr-2">&#10003;</span>
                    <span>100% Secure reservation system.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 font-bold mr-2">&#10003;</span>
                    <span>No deposit required to request stage quote.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 font-bold mr-2">&#10003;</span>
                    <span>24-Hour cancel window before schedule.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 font-bold mr-2">&#10003;</span>
                    <span>Licensed Texas carrier #T124-7890.</span>
                  </li>
                </ul>
              </div>

              {/* Call Hotline indicator */}
              <div className="p-4 border border-white/5 rounded-2xl bg-white/5 text-center text-xs font-mono">
                <p className="text-slate-400 text-[10px] mb-1">IMMEDIATE SECURE BOOKING HELP</p>
                <a href="tel:4099510839" className="text-[#FF6B00] font-extrabold text-sm hover:underline">
                  (409) 951-0839
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
