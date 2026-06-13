import React, { useState } from "react";
import { TabType } from "../types";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Award, 
  Navigation, 
  Star, 
  CheckCircle, 
  Users, 
  Bus, 
  Car, 
  ChevronRight, 
  Coins,
  Phone,
  Calendar,
  Mail,
  User,
  CheckCircle2
} from "lucide-react";

interface HomeSectionProps {
  setActiveTab: (tab: TabType) => void;
  onOpenBooking: () => void;
}

export default function HomeSection({ setActiveTab, onOpenBooking }: HomeSectionProps) {
  // Quick Booking Form States in Hero Section
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    vehicleType: "Standard Taxi Sedans",
    passengers: 1,
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingResult, setBookingResult] = useState<any | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setBookingResult(null);

    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.date || !formData.time || !formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill all required inputs.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setBookingResult({
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
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setErrorMessage(data.error || "Form error. Please contact dispatcher directly.");
      }
    } catch (err) {
      setErrorMessage("Network signal error. Please call (409) 951-0839.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const trustStats = [
    { label: "On-Time Dispatch", value: "99.8%" },
    { label: "Insured Vehicles", value: "100%" },
    { label: "Professional Drivers", value: "Licensed" },
    { label: "Satisfied Riders", value: "15K+" },
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#FF6B00]" />,
      title: "Licensed & Fully Insured",
      desc: "Our vehicles adhere to the highest standard of safety protocols and Texas carrier certifications.",
    },
    {
      icon: <Clock className="h-6 w-6 text-[#FF6B00]" />,
      title: "Punctuality Guaranteed",
      desc: "We track traffic patterns and airport terminal gates live so we are always parked 15 minutes early.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#FF6B00]" />,
      title: "Professional Chauffeurs",
      desc: "Background-checked, polite, and uniformed specialists with years of safe navigation in Texas.",
    },
    {
      icon: <Navigation className="h-6 w-6 text-[#FF6B00]" />,
      title: "Statewide Coverage",
      desc: "Seamless group, corporate, or luxury long-distance transfers safely routing across Texas state lines.",
    },
  ];

  const highlights = [
    {
      title: "Standard Taxi",
      category: "Taxi Services",
      desc: "Instant on-demand or pre-scheduled neighborhood transfers.",
      capacity: "1-4 Passengers",
      badge: "Fast & Convenient",
    },
    {
      title: "Casino Trips from Texas to Louisiana",
      category: "Gaming & Interstate Tours",
      desc: "Premium round-trip transportation to top casino destinations.",
      capacity: "Up to 10 Passengers",
      badge: "Lake Charles & Shreveport",
    },
    {
      title: "Charter & Mini Buses",
      category: "Group Transit",
      desc: "Comfortable touring travel with spacious overhead luggage.",
      capacity: "Up to 56 Passengers",
      badge: "Ultimate Group Comfort",
    }
  ];

  return (
    <div id="epic-ride-home-view" className="relative text-white">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050B18] via-slate-950 to-[#050B18] overflow-hidden">
        
        {/* Subtle glow elements */}
        <div className="absolute top-[20%] left-[10%] h-72 w-72 rounded-full bg-[#FF6B00]/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] h-80 w-80 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Minimized, ultra-elegant text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 border border-[#FF6B00] text-[#FF6B00] text-[10px] font-bold uppercase tracking-[0.3em] font-mono">
                Texas Premier Chauffeurs
              </div>

              <h1 className="font-display text-4xl font-extrabold leading-[1.0] tracking-tighter text-white uppercase sm:text-5xl md:text-6xl">
                Reliable <br />
                <span className="text-transparent text-outline-white">
                  Transport
                </span>
              </h1>

              <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-md">
                Premium local taxi, rentals, and group charter buses tailored for every journey. Discover Texas-sized comfort on your schedule.
              </p>

              {/* Home CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    setActiveTab("services");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 hover:bg-[#FF6B00]/10 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] px-6 py-3.5 text-xs font-bold text-white uppercase tracking-[0.15em] transition-all"
                >
                  Explore Fleet
                </button>
                <a
                  href="tel:4099510839"
                  className="inline-flex items-center justify-center rounded-sm border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-6 py-3.5 text-xs font-bold text-[#FF6B00] uppercase tracking-[0.15em] font-mono hover:bg-[#FF6B00]/20 transition-all"
                >
                  <Phone className="h-3.5 w-3.5 mr-2" />
                  (409) 951-0839
                </a>
              </div>

              {/* Stats row embedded directly in Hero following details from reference HTML */}
              <div className="flex gap-10 mt-6 pt-6 border-t border-white/10 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#FF6B00] font-mono">24h</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#FF6B00] font-mono font-bold">Dispatch Center</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#FF6B00] font-mono">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-mono">Safety Record</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#FF6B00] font-mono">50+</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-mono">Active Vehicles</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek, high-fidelity Quick Booking Form card */}
            <div className="lg:col-span-6 w-full font-sans relative">
              {/* Premium Flashing 'Book Now' Indicator Button */}
              <div className="flex justify-center lg:justify-start mb-4">
                <button
                  onClick={() => {
                    const el = document.getElementById("booking-card-anchor");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className="relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-amber-500 text-white text-xs font-extrabold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(255,107,0,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95 group cursor-pointer"
                  style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>Book Now</span>
                  <span className="text-[10px] opacity-85 group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                </button>
              </div>

              <div id="booking-card-anchor" className="rounded-sm border border-[#FF6B00]/30 border-t-2 border-t-[#FF6B00] bg-[#0A192F]/80 p-6 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(255,107,0,0.35)] relative transition-all duration-300 hover:shadow-[0_0_50px_0_rgba(255,107,0,0.25)] hover:border-[#FF6B00]/55">
                
                {/* Secure Seal Banner header */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF6B00] uppercase font-mono flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-1.5 text-emerald-400" />
                    Secure Dispatch Gate
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 font-bold uppercase">
                    Texas Standard
                  </span>
                </div>

                {errorMessage && (
                  <div className="mb-4 rounded-sm border border-red-500/20 bg-red-500/10 p-2.5 text-[10px] font-bold text-red-400 font-mono text-center uppercase tracking-wider">
                    {errorMessage}
                  </div>
                )}

                {bookingResult ? (
                  /* Animated success ticket inside the Hero card component */
                  <div className="space-y-4 py-2">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-emerald-500/15 p-2 border border-emerald-500/30">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                        Ride Request Submitted!
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-normal max-w-sm">
                        Your itinerary is staged in our dispatcher active queue. We will ring/email you in under 15 minutes to guarantee service levels.
                      </p>
                    </div>

                    <div className="border border-white/10 rounded-sm bg-[#050B18] p-4 space-y-2.5 font-mono text-[10px] text-slate-300">
                      <div className="flex justify-between border-b border-white/10 pb-1.5 text-[8px] text-slate-500 font-bold">
                        <span>SYSTEM STATUS</span>
                        <span className="text-emerald-400 font-bold">&#9679; QUEUED</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TRACKING ID:</span>
                        <span className="font-bold text-[#FF6B00]">{bookingResult.referenceId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EST COST MIN:</span>
                        <span className="font-bold text-emerald-400 font-sans text-xs">${bookingResult.estimatedCost}.00*</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GUEST:</span>
                        <span className="font-semibold truncate max-w-[120px]">{bookingResult.details.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CLASS:</span>
                        <span className="font-semibold truncate max-w-[120px]">{bookingResult.details.vehicleType.split(" ")[0]} TIER</span>
                      </div>
                      <div className="text-[8px] text-slate-500 pt-1.5 border-t border-white/10 font-sans italic text-center leading-tight">
                        * Toll flat fees excluded. Dispatch will finalize contract pricing.
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingResult(null)}
                      className="w-full py-2.5 rounded-sm bg-[#FF6B00] text-[#050B18] font-bold uppercase tracking-widest text-[10px] transition-colors hover:bg-orange-500"
                    >
                      Book Another Request
                    </button>
                  </div>
                ) : (
                  /* Form Fields */
                  <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-left">
                    
                    {/* Pickup & Dropoff Rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                          Pickup Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="text"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleInputChange}
                            required
                            placeholder="IAH Airport, Hotel, Address..."
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-3 text-[11px] text-white placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                          Dropoff Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="text"
                            name="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={handleInputChange}
                            required
                            placeholder="Destination Address..."
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-3 text-[11px] text-white placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date & Time Rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                          Pickup Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-3 text-[11px] text-white font-mono uppercase focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                          Pickup Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-3 text-[11px] text-white font-mono focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Class & Riders Rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono font-sans font-semibold">
                          Vehicle Service Class
                        </label>
                        <select
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                          className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 px-2.5 text-[11px] text-white focus:border-[#FF6B00] focus:outline-none"
                        >
                          <option value="Standard Taxi Sedans">Standard Taxi (1-4 riders)</option>
                          <option value="Luxury SUVs">Luxury SUV (1-6 riders)</option>
                          <option value="Casino Trips from Texas to Louisiana">Casino Trips (Texas to Louisiana)</option>
                          <option value="Executive Vehicles">Executive Class Sprinter (up to 14)</option>
                          <option value="Mini Buses">Mini Bus Charter (up to 28)</option>
                          <option value="Charter Buses">Heavy Charter Coach (up to 56)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono font-sans font-semibold">
                          Passengers count
                        </label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleInputChange}
                          className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 px-2.5 text-[11px] text-white font-mono focus:border-[#FF6B00] focus:outline-none"
                        >
                          {[...Array(56)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Guest Detail parameters */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-white/5 pt-3">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono font-semibold">
                          Legal Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-2 text-[11px] text-white placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono font-sans font-semibold">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="guest@domain.com"
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-2 text-[11px] text-white placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono font-semibold">
                          Mobile (Sms alert)
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="(409) 951..."
                            className="w-full rounded-sm border border-white/10 bg-[#050B18] py-2 pl-8 pr-2 text-[11px] text-white font-mono placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Quick Request Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-3 py-3 rounded-sm bg-[#FF6B00] text-[#050B18] font-bold uppercase tracking-widest text-[11px] transition-all hover:bg-orange-500 active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Staging Active Booking..." : "Submit Quick Ride Request"}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Brand Trust Statistics */}
      <section className="bg-slate-950 border-y border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left border-l border-white/10 pl-4 first:border-l-0">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#FF6B00] font-mono tracking-wider">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#FF6B00] uppercase mt-1 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Value Propositions: Why Choose Us */}
      <section className="bg-[#0A192F]/20 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#FF6B00]/3 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.25em] text-[#FF6B00] uppercase font-mono">
              Texas Reliability Standard
            </h2>
            <h3 className="font-display text-3xl font-extrabold tracking-tight uppercase sm:text-5xl text-white">
              Why Executive Travelers Choose Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
              We combine immaculate, late-model fleet luxury with professional integrity to create a dependable travel booking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, idx) => (
              <div
                key={idx}
                className="relative rounded-sm border border-white/10 bg-[#0A192F]/40 p-6 backdrop-blur-sm shadow-xl hover:border-[#FF6B00]/40 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex rounded-sm bg-[#FF6B00]/10 p-3 border border-[#FF6B00]/20 text-[#FF6B00]">
                  {prop.icon}
                </div>
                <h4 className="text-base font-extrabold text-white tracking-widest uppercase mb-2">
                  {prop.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Highlights Preview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-950 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6B00] uppercase font-mono">
                Featured Offerings
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight uppercase sm:text-5xl text-white">
                Our Fleet Segments
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6B00] border-b border-[#FF6B00]/30 pb-1 hover:text-orange-400 transition-colors"
            >
              <span>View All Services</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-sm border border-white/10 bg-[#0A192F]/20 p-6 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      {item.category}
                    </span>
                    <span className="rounded-sm bg-[#FF6B00]/15 px-2 py-0.5 border border-[#FF6B00]/20 text-[9px] font-mono text-[#FF6B00] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-[#FF6B00] transition-colors font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 uppercase">Capacity:</span>
                  <span className="font-bold text-[#FF6B00]">{item.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Area Map Graphic section */}
      <section className="bg-[#050B18]/40 border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            
            {/* Visual simulation representation of Texas */}
            <div className="relative flex justify-center bg-[#0A192F]/40 border border-white/10 rounded-sm p-8 backdrop-blur-sm min-h-[340px]">
              <div className="absolute inset-0 bg-radial-gradient from-[#FF6B00]/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col justify-between w-full relative z-10 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#FF6B00] uppercase font-bold">
                    <MapPin className="h-4 w-4" />
                    <span>Texas State Coverage Map</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white uppercase tracking-wider mt-2 font-sans">
                    Serving Main Airports &amp; Metro Counties 24/7
                  </h4>
                </div>
                
                {/* Simulated high-fidelity map indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="bg-white/5 border border-white/10 rounded-sm p-3">
                    <div className="text-slate-500 uppercase text-[9px] tracking-widest font-bold">Houston Metro</div>
                    <div className="text-[#FF6B00] font-bold mt-1">IAH &amp; HOU</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-sm p-3">
                    <div className="text-slate-500 uppercase text-[9px] tracking-widest font-bold">Dallas Fort Worth</div>
                    <div className="text-[#FF6B00] font-bold mt-1">DFW &amp; DAL</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-sm p-3">
                    <div className="text-slate-500 uppercase text-[9px] tracking-widest font-bold">Central Texas</div>
                    <div className="text-[#FF6B00] font-bold mt-1">AUS &amp; SAT</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-sm p-3 col-span-2 sm:col-span-3">
                    <div className="text-slate-500 uppercase text-[9px] tracking-widest font-bold">Coastal &amp; East Texas</div>
                    <div className="text-[#FF6B00] font-bold mt-1">Beaumont, Port Arthur, Galveston</div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500 uppercase">
                  * Pre-plan state lines group transports available. Ask dispatch for coordinates.
                </div>
              </div>
            </div>

            {/* Service Area Content */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6B00] uppercase font-mono">
                Our Territory
              </span>
              <h3 className="font-display text-3xl font-extrabold tracking-tight uppercase sm:text-5xl text-white">
                Reliable Long-Distance &amp; Metro Transfers
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                No matter where you are in the great state of Texas, Epic Ride and Transport LLC gets you to your destination with zero stress. We service all major municipal hubs, suburban communities, regional airbases, and luxury resort corridors.
              </p>
              
              <ul className="space-y-3.5 text-xs text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-[#FF6B00] flex-shrink-0" />
                  <span>Curbside meet &amp; greet or baggage claims pickup at IAH, HOU, and DFW.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-[#FF6B00] flex-shrink-0" />
                  <span>Point-to-point flat rates for regional centers and corporate corridors.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-[#FF6B00] flex-shrink-0" />
                  <span>Door-to-door absolute tracking privacy with secure executive protocols.</span>
                </li>
              </ul>

              <div className="pt-4">
                <a
                  href="tel:4099510839"
                  className="inline-flex items-center space-x-2 rounded-sm bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 px-5 py-3 border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-mono"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Dispatcher: (409) 951-0839</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Contact and Booking banner */}
      <section className="bg-gradient-to-r from-[#FF6B00] to-orange-800 px-4 py-20 text-slate-950 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center space-y-6 relative z-10">
          <h2 className="text-[10px] font-bold tracking-[0.25em] text-slate-900 uppercase font-mono">
            Get an instant ride request now
          </h2>
          <h3 className="font-display text-3xl font-extrabold tracking-tight uppercase sm:text-5xl text-slate-950">
            Need Premium Group Transit in Texas?
          </h3>
          <p className="text-slate-950 text-sm sm:text-base font-sans max-w-2xl mx-auto font-medium leading-relaxed">
            Book taxis, Casino Trips from Texas to Louisiana, or executive coaches in under 3 minutes. Receive instant estimates and dependable regional transport notifications.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-slate-950 text-white font-bold uppercase tracking-[0.15em] text-xs px-8 py-4 px-10 rounded-sm transition-transform hover:scale-105 active:scale-95"
            >
              Reserve Transit Now
            </button>
            <a
              href="mailto:epicrideandtransport@gmail.com"
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 border border-black/15 text-slate-950 font-bold uppercase tracking-[0.15em] text-xs px-8 py-4 px-10 rounded-sm text-center transition-all"
            >
              Email For Contract Quotes
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
