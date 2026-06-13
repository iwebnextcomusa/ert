import { TabType } from "../types";
import { Shield, Sparkles, HeartHandshake, Award, CheckCircle } from "lucide-react";

interface AboutSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export default function AboutSection({ setActiveTab }: AboutSectionProps) {
  
  const pillars = [
    {
      icon: <Shield className="h-6 w-6 text-[#FF6B00]" />,
      title: "Our Unwavering Safety Pledge",
      desc: "Inside Texas counties, nothing is more paramount than your secure arrival. We run exhaustive screening, visual health checks, and install real-time telemetry markers in all vehicle modules.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#FF6B00]" />,
      title: "Meticulous Fleet Hygiene",
      desc: "Our vehicles undergo strict interior scrubbing and visual alignment detail inspections daily. Your selected sedan, coach, or regional shuttle will always arrive in showroom condition.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-[#FF6B00]" />,
      title: "Customer-First Philosophy",
      desc: "Epic Ride is grounded in humble, dependable hospitality. Whether a fast local point-to-point taxi or a corporate fleet charter, we honor your schedules with absolute integrity.",
    },
  ];

  return (
    <div id="epic-ride-about-view" className="relative text-white bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute top-[20%] left-0 h-96 w-96 rounded-full bg-[#FF6B00]/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Text */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6B00] uppercase font-mono">
            About Epic Ride and Transport LLC
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-6xl text-white">
            Driven by Professional <span className="text-transparent text-outline-orange">Integrity</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed sm:text-base font-sans">
            Headquartered in Texas, USA, Epic Ride and Transport LLC provides dependable private taxi, Casino Trips from Texas to Louisiana, and premium coach travel experiences designed for elite passengers.
          </p>
        </div>

        {/* Story Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-lg font-bold tracking-widest text-[#FF6B00] font-mono uppercase">
              The Epic Ride Story
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
              Founded on the belief that transportation should be seamless, reliable, and premium, Epic Ride and Transport LLC has evolved into a premier luxury carrier across Texas, USA.
            </p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
              Recognizing that each passenger possesses unique coordinates and comfort requirements, we tailored our operational tiers: from rapid, convenient municipal taxi bookings to bespoke Casino Trips from Texas to Louisiana and massive heavy charter coaches. We remove the chaos of regional airport transfers and metropolitan navigation, allowing you to settle in and enjoy the ride.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab("booking");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="rounded-sm bg-[#FF6B00] px-6 py-3.5 text-xs font-bold text-[#050B18] uppercase tracking-widest transition-colors hover:bg-orange-500"
              >
                Schedule A Ride
              </button>
            </div>
          </div>

          {/* Core visual indicators */}
          <div className="rounded-sm border border-white/10 bg-[#0A192F]/40 p-8 space-y-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#FF6B00] uppercase font-bold">
              <Award className="h-4 w-4" />
              <span>Certified Texas Carrier Charter</span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-white uppercase">
              Securing Texas One Mile At A Time
            </h3>
            
            <ul className="space-y-4 text-xs text-gray-400 font-sans">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FF6B00] flex-shrink-0" />
                <span><strong>Licensed &amp; Fully Insured:</strong> Full matching liabilities exceeding Department of Transportation benchmarks.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FF6B00] flex-shrink-0" />
                <span><strong>Rigorous Security Checks:</strong> Criminal record profiling, continuous drug testing, and safety navigation certification for all drivers.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FF6B00] flex-shrink-0" />
                <span><strong>GPS Tracking Telemetry:</strong> Dispatch systems actively tracking flight statuses, traffic bottlenecks, and weather shifts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pillars / Core Principles */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-sm border border-white/10 bg-[#0A192F]/20 p-6 shadow-md"
            >
              <div className="mb-4 inline-flex rounded-sm bg-[#FF6B00]/10 p-3 border border-[#FF6B00]/20">
                {p.icon}
              </div>
              <h3 className="text-base font-extrabold text-white tracking-widest uppercase mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Driver philosophy badge row */}
        <div className="mt-20 rounded-sm border border-white/10 bg-[#0A192F]/40 p-6 sm:p-10 text-center max-w-4xl mx-auto backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-2">
            <h4 className="text-sm font-bold text-[#FF6B00] font-mono uppercase">
              Need Executive Corporate Contracts?
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
              We offer dedicated accounts, pre-contract pricing, monthly bills, and prioritized dispatch routes for Texas corporations and hospitality centers.
            </p>
          </div>
          <a
            href="mailto:epicrideandtransport@gmail.com"
            className="rounded-sm border border-[#FF6B00]/30 bg-[#FF6B00]/10 hover:bg-[#FF6B00] hover:text-[#050B18] text-[#FF6B00] text-xs font-bold uppercase tracking-wider py-3 px-6 transition-all shrink-0"
          >
            Inquire Accounts
          </a>
        </div>

      </div>
    </div>
  );
}
