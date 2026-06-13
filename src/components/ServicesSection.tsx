import { TabType } from "../types";
import { 
  Car, 
  Sparkles, 
  Bus, 
  Plane, 
  Briefcase, 
  Calendar,
  CheckCircle2, 
  PartyPopper 
} from "lucide-react";

interface ServicesSectionProps {
  setActiveTab: (tab: TabType) => void;
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ setActiveTab, onSelectService }: ServicesSectionProps) {
  
  const services = [
    {
      id: "taxi",
      name: "Taxi Services",
      icon: <Car className="h-8 w-8 text-[#FF6B00]" />,
      description: "Quick, reliable, and friendly taxi hailing for local destination transfers, shopping trips, or reliable local navigation in Beaumont, Port Arthur, Galveston, and surrounding areas.",
      benefits: [
        "Prompt dispatch with radio communication",
        "Polite, licensed, and background-checked taxi drivers",
        "Immaculate sedans with daily hygiene disinfection",
        "Fair, transparent rates calculated per mile"
      ],
      occasions: [
        "Daily Commutes", 
        "Medical Appointments", 
        "Local Shopping Trips", 
        "Night Outs with friends"
      ]
    },
    {
      id: "casino-trips",
      name: "Casino Trips from Texas to Louisiana",
      icon: <Sparkles className="h-8 w-8 text-[#FF6B00]" />,
      description: "Premium round-trip transportation to Louisiana's finest gaming hotels and casino resorts. Settle into luxurious comfort with onboard amenities while our professional driver navigates the interstate routes.",
      benefits: [
        "Direct luxury transfers from any Texas starting coordinate",
        "Custom round-trip routing to Lake Charles and Shreveport",
        "Complimentary chilled water, refreshments, and storage space",
        "Flexible scheduled return pickups on your timeline"
      ],
      occasions: [
        "Weekend Gaming Escapes", 
        "VIP High-Roller Excursions", 
        "Bachelor & Birthday Celebrations", 
        "Corporate Group Outings"
      ]
    },
    {
      id: "charter",
      name: "Charter Bus Rentals",
      icon: <Bus className="h-8 w-8 text-[#FF6B00]" />,
      description: "Secure, highly commodious multi-passenger charter and mini-bus rentals for athletic conventions, corporate team escapes, church congregations, and massive regional tours.",
      benefits: [
        "Expansive storage bays & heavy luggage shelves",
        "Air-ride suspension for comfortable cross-state sleep",
        "Onboard media screens, Wi-Fi ports, and power sockets",
        "Certified professional heavy coach captain operating safety protocols"
      ],
      occasions: [
        "School & Athletic Events", 
        "Church Outings", 
        "Conventions & Concerts", 
        "Extended State Excursions"
      ]
    },
    {
      id: "airport",
      name: "Airport Transfers",
      icon: <Plane className="h-8 w-8 text-[#FF6B00]" />,
      description: "Pre-scheduled airport curbside pickups and deep baggage corridor meets targeting Houston George Bush (IAH), Hobby (HOU), Dallas Fort Worth (DFW), Dallas Love Field, and major regional terminals.",
      benefits: [
        "Direct real-time tracking of delayed flights and early landings",
        "Complementary baggage assistance from your doorstep to check-in",
        "Avoid high airport parking rates, rental gridlocks, and taxi loops",
        "SMS driver coordination text notifications as you touch down"
      ],
      occasions: [
        "Business Trips", 
        "Family Vacations", 
        "International Departures", 
        "Late-Night Terminal Landing"
      ]
    },
    {
      id: "corporate",
      name: "Corporate Transportation",
      icon: <Briefcase className="h-8 w-8 text-[#FF6B00]" />,
      description: "Uncompromising professional black car travel, executive shuttle loops, or airport pick-ups specialized for business partners, keynote speakers, and executive board members.",
      benefits: [
        "Dedicated corporate accounts with itemized monthly billing",
        "Absolute confidentiality with strictly signed NDA drivers",
        "Pristine sedan interiors with quiet compartments, Wi-Fi, and chargers",
        "Rigorous real-time flight adjustment and alternative routing"
      ],
      occasions: [
        "Executive Board Meetings", 
        "Regional Plant & Property Tours", 
        "Investor Roadshows", 
        "Corporate Annual Conventions"
      ]
    },
    {
      id: "event",
      name: "Special Event Transportation",
      icon: <Calendar className="h-8 w-8 text-[#FF6B00]" />,
      description: "Coordinated logistics for large-scale events, concerts, pro sports matches, family gatherings, and weddings. We specialize in dynamic staging and custom passenger drop loops.",
      benefits: [
        "Dedicated travel planner to manage group shuttle timing",
        "Multi-vehicle combinations from luxury SUVs to mini-buses",
        "Point-to-point routes with multiple physical block pick-ups",
        "No DUI risks or navigation worries for your guests"
      ],
      occasions: [
        "Texas Sports Ceremonies", 
        "Country Music Concerts", 
        "Wedding Venue Shuttles", 
        "Family Reunion Galas"
      ]
    }
  ];

  const handleBookingTrigger = (serviceName: string) => {
    onSelectService(serviceName);
    setActiveTab("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="epic-ride-services-view" className="relative bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Background radial effects */}
      <div className="absolute top-[15%] right-0 h-96 w-96 rounded-full bg-[#FF6B00]/3 blur-3xl" />
      <div className="absolute bottom-[20%] left-0 h-96 w-96 rounded-full bg-blue-500/3 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Text */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-[#FF6B00] uppercase font-mono">
            Epic Fleet Services
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-6xl text-white">
            Our Transportation Capabilities
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed sm:text-base font-sans">
            We provide a diverse portfolio of casino trips, rapid taxis, and high-capacity charter coaches customized for business power-trips, gaming escapes, and group travels.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl border border-white/5 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-sm hover:border-[#FF6B00]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Icon Headline block */}
                <div className="flex items-center space-x-4">
                  <div className="rounded-xl bg-orange-500/5 p-3.5 border border-orange-500/10 shadow shadow-orange-500/5">
                    {svc.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#FF6B00] transition-colors">
                      {svc.name}
                    </h2>
                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                      Premium Carrier Segment
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-xs leading-relaxed font-sans border-b border-white/5 pb-5">
                  {svc.description}
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-3 flex items-center space-x-1.5 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Service Benefits</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-400 leading-relaxed font-sans">
                      {svc.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <span className="mr-2 text-[#FF6B00] font-bold">&#8250;</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable Occasions */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-3 flex items-center space-x-1.5 font-mono">
                      <PartyPopper className="h-3.5 w-3.5" />
                      <span>Special Occasions</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {svc.occasions.map((occ, oIdx) => (
                        <span 
                          key={oIdx} 
                          className="rounded bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] text-slate-300 font-medium whitespace-nowrap"
                        >
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/5">
                <button
                  onClick={() => handleBookingTrigger(svc.name)}
                  className="w-full text-center bg-white/5 hover:bg-[#FF6B00] hover:text-slate-950 py-3.5 rounded text-xs font-bold uppercase tracking-widest text-[#FF6B00] border border-[#FF6B00]/25 transition-all duration-300 shadow shadow-orange-500/5 hover:shadow-orange-500/20"
                >
                  Book {svc.name} Now
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global certifications badge summary */}
        <div className="mt-20 rounded-2xl border border-orange-500/10 bg-orange-500/5 p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B00] font-mono mb-2">
            Safety, Security &amp; Licensure Standard
          </h3>
          <p className="text-slate-300 text-xs sm:text-xs leading-relaxed max-w-2xl mx-auto">
            Epic Ride and Transport LLC operates strictly under US Department of Transportation regulations. All vehicles are tracked via GPS live diagnostics, equipped with complete safety kits, and inspected daily by certified diesel and drivetrain technicians.
          </p>
        </div>

      </div>
    </div>
  );
}
