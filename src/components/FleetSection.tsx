import { TabType, VehicleItem } from "../types";
import { Users, Briefcase, Sparkles, Navigation, Check, Shield } from "lucide-react";

interface FleetSectionProps {
  setActiveTab: (tab: TabType) => void;
  onSelectVehicle: (vehicleName: string) => void;
}

export default function FleetSection({ setActiveTab, onSelectVehicle }: FleetSectionProps) {
  
  const fleet: VehicleItem[] = [
    {
      id: "taxi-sedan",
      name: "Standard Taxi Sedans",
      category: "Taxi & Fast Commutes",
      capacity: "1-4 Passengers",
      luggage: "3 Bags",
      features: [
        "Economical flat rates",
        "Air conditioned",
        "Digital map navigation",
        "Generous cabin headroom"
      ],
      rateInfo: "Rates start at $2.50 base + $2.50/mile",
      imagePlaceholder: "🚗"
    },
    {
      id: "luxury-suv",
      name: "Luxury SUVs",
      category: "Business & Executive",
      capacity: "1-6 Passengers",
      luggage: "6 Bags",
      features: [
        "Plush black leather",
        "Wi-Fi & USB charge ports",
        "Complimentary bottled water",
        "Tri-zone climate control"
      ],
      rateInfo: "Rates start at $75/hour (2hr min)",
      imagePlaceholder: "🚙"
    },
    {
      id: "casino-trips",
      name: "Casino Trips from Texas to Louisiana",
      category: "Gaming & Interstate Tours",
      capacity: "1-10 Passengers",
      luggage: "4 Bags",
      features: [
        "Direct luxury round-trip transfers",
        "Servicing Lake Charles & Shreveport",
        "Complimentary beverages & snacks",
        "Customizable departure schedule"
      ],
      rateInfo: "Rates start at $120/hour (3hr min)",
      imagePlaceholder: "🎰"
    },
    {
      id: "executive-van",
      name: "Executive Vehicles",
      category: "Corporate & Group Tours",
      capacity: "1-14 Passengers",
      luggage: "14 Bags",
      features: [
        "Standing room interior heights",
        "Deep individual recline seats",
        "Rear cooling air ducts",
        "Heavy cargo partition walls"
      ],
      rateInfo: "Rates start at $90/hour (2hr min)",
      imagePlaceholder: "🚐"
    },
    {
      id: "mini-bus",
      name: "Mini Buses",
      category: "Group Event Shuttles",
      capacity: "1-28 Passengers",
      luggage: "28 Bags",
      features: [
        "Dual reading lights per row",
        "Overhead storage bins",
        "Retractable entrance stairs",
        "Professional PA microphone systems"
      ],
      rateInfo: "Rates start at $150/hour (3hr min)",
      imagePlaceholder: "🚌"
    },
    {
      id: "charter-bus",
      name: "Charter Buses",
      category: "Heavy Fleet Coach",
      capacity: "1-56 Passengers",
      luggage: "56 Bags",
      features: [
        "Onboard sanitary restroom",
        "Under-bus massive storage bays",
        "Live flat-screen video systems",
        "Comfortable air-ride suspensions"
      ],
      rateInfo: "Rates start at $220/hour (3hr min)",
      imagePlaceholder: "🚍"
    }
  ];

  const handleBookVehicle = (name: string) => {
    onSelectVehicle(name);
    setActiveTab("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="epic-ride-fleet-view" className="relative bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[20%] h-80 w-80 rounded-full bg-[#FF6B00]/3 blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-blue-500/3 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title / Description */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-[#FF6B00] uppercase font-mono">
            Texas Vehicle Showcase
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-6xl text-white">
            Meet the Epic Fleet
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed sm:text-base font-sans">
            Immaculately detailed, licensed, and late-model vehicles matching the rigorous standards of premium private travelers. Select the perfect match for your group.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <div
              key={car.id}
              className="rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-6 flex flex-col justify-between hover:border-[#FF6B00]/20 shadow-lg tracking-wide transition-all duration-300 group"
            >
              <div>
                
                {/* Visual Icon/Symbol box representing premium renders */}
                <div className="h-44 w-full rounded-xl bg-slate-950/85 border border-white/5 mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#FF6B00]/10 transition-colors">
                  <div className="absolute inset-0 bg-radial-gradient from-[#FF6B00]/5 to-transparent opacity-60" />
                  <span className="text-7xl select-none filter drop-shadow-[0_4px_12px_rgba(255,107,0,0.15)] transform group-hover:scale-110 transition-transform duration-300">
                    {car.imagePlaceholder}
                  </span>
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/90 px-3 py-1 text-[9px] font-mono font-semibold uppercase tracking-wider text-[#FF6B00] border border-[#FF6B00]/15">
                    {car.category}
                  </span>
                </div>
 
                {/* Name & Pricing Info */}
                <div className="space-y-1 mb-4">
                  <h2 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {car.name}
                  </h2>
                  <p className="text-[11px] font-mono text-[#FF6B00] font-semibold uppercase">
                    {car.rateInfo}
                  </p>
                </div>

                {/* Specifications: passengers & luggages */}
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/5 text-[11px] font-mono leading-relaxed text-slate-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-3.5 w-3.5 text-[#FF6B00]" />
                    <span>{car.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3.5 w-3.5 text-[#FF6B00]" />
                    <span>{car.luggage}</span>
                  </div>
                </div>

                {/* Core Features list */}
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                    Vehicle Amenities
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {car.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <Check className="h-3.5 w-3.5 text-[#FF6B00] shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Book now button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => handleBookVehicle(car.name)}
                  className="w-full text-center bg-gradient-to-r from-[#FF6B00]/90 to-orange-700/95 hover:from-orange-500 hover:to-orange-600 py-3 rounded text-xs font-bold uppercase tracking-widest text-slate-950 shadow shadow-orange-500/10 transition-transform hover:scale-[1.01]"
                >
                  Reserve Vehicle
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global safety warning note */}
        <div className="mt-16 flex items-center justify-center space-x-3 bg-white/5 border border-white/5 rounded-xl p-5 max-w-2xl mx-auto backdrop-blur-sm">
          <Shield className="h-5 w-5 text-[#FF6B00] flex-shrink-0 animate-pulse" />
          <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
            All models pictured above represent active vehicle classes. Our dispatch assigns actual vehicles of identical or superior specifications based on local municipal schedules.
          </p>
        </div>

      </div>
    </div>
  );
}
