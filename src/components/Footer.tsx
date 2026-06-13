import { TabType } from "../types";
import { Phone, Mail, MapPin, Car, Shield, CircleHelp } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: TabType) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="epic-ride-footer"
      className="relative z-10 border-t border-white/10 bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 text-slate-300"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info Column */}
          <div className="col-span-1 space-y-4">
            <div 
              className="flex cursor-pointer items-center transition-opacity hover:opacity-95" 
              onClick={() => handleNavClick("home")}
            >
              <Logo className="h-12" />
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Texas premium Casino Trips, taxi rides, airport transfers, and private charter bus connections. Reliable. Safe. Elegant.
            </p>
            
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
              <Shield className="h-3.5 w-3.5 text-[#FF6B00]" />
              <span>Licensed &amp; Fully Insured Carrier</span>
            </div>
          </div>

          {/* Page Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-4 font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  About Our Crew
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("booking")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Online Booking
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("fleet")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Explore Fleet
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("testimonials")} className="hover:text-white transition-colors uppercase font-mono text-gray-400 font-semibold">
                  Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-4 font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Taxi Cab Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Casino Trips (Texas & Louisiana)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Airport Transfers (TX)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Charter Bus Rentals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors">
                  Corporate &amp; Group Tours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-1 font-mono">
              Main Dispatch
            </h3>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-[#FF6B00]" />
                <a href="tel:4099510839" className="hover:text-white transition-colors">
                  (409) 951-0839
                </a>
              </li>
              <li className="flex items-baseline space-x-2">
                <Mail className="h-3.5 w-3.5 text-[#FF6B00] translate-y-0.5" />
                <a
                  href="mailto:epicrideandtransport@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  epicrideandtransport@gmail.com
                </a>
              </li>
              <li className="flex items-baseline space-x-2">
                <MapPin className="h-3.5 w-3.5 text-[#FF6B00] translate-y-0.5" />
                <span>Texas, USA Coverage Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Legal Panel */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span>&copy; {new Date().getFullYear()} Epic Ride and Transport LLC. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-[#FF6B00]">Privacy Policy</button>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-[#FF6B00]">Terms of Service</button>
          </div>

          {/* Mandatory User Naming Credit Link along with Dominica and US flags */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex items-center space-x-3 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5 shadow-sm">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Global Alliance:</span>
              <div className="flex items-center space-x-2">
                {/* Dominica Caribbean Flag */}
                <span className="relative group/flag" title="Dominica (Caribbean)">
                  <svg
                    viewBox="0 0 60 30"
                    className="w-8 h-[18px] rounded-sm shadow-md border border-white/10 filter hover:brightness-110 transition-all duration-300 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <g id="domstar">
                        <polygon
                          points="0,-0.8 0.23,-0.24 0.8,-0.24 0.34,0.1 0.52,0.66 0,0.32 -0.52,0.66 -0.34,0.1 -0.8,-0.24 -0.23,-0.24"
                          fill="#009B3A"
                          stroke="#FCD116"
                          strokeWidth="0.15"
                        />
                      </g>
                    </defs>
                    <rect width="60" height="30" fill="#006B3F" />
                    {/* Cross: Yellow, Black, White */}
                    <rect x="0" y="11" width="60" height="8" fill="#FCD116" />
                    <rect x="0" y="13" width="60" height="4" fill="#000000" />
                    <rect x="0" y="15" width="60" height="2" fill="#FFFFFF" />
                    
                    <rect x="26" y="0" width="8" height="30" fill="#FCD116" />
                    <rect x="28" y="0" width="4" height="30" fill="#000000" />
                    <rect x="30" y="0" width="2" height="30" fill="#FFFFFF" />
                    
                    {/* Red Disk */}
                    <circle cx="30" cy="15" r="5.5" fill="#D11919" />
                    
                    {/* Stylized Imperial Sisserou Parrot facing left */}
                    <path
                      d="M 29.5,11.2 C 29,11.2 28.6,11.6 28.5,12 C 28.5,12.6 29.1,12.9 28.9,13.4 C 28.6,13.8 28.2,13.8 28,14.2 Q 27.6,14.6 28,15 L 29.4,16.8 L 30.2,17.6 Q 30.6,16.8 30.2,16 C 30.6,15.2 31,14.4 30.6,13.6 Q 30.2,12.8 30.2,12 C 30.2,11.6 29.8,11.2 29.5,11.2 Z"
                      fill="#5F2D79"
                    />
                    <path d="M 28,14.2 L 27,14.7 L 27.5,15.1 Z" fill="#22C55E" />
                    
                    {/* 10 stars positioned precisely */}
                    <use href="#domstar" x="30" y="10.8" />
                    <use href="#domstar" x="32.47" y="11.6" />
                    <use href="#domstar" x="34.00" y="13.7" />
                    <use href="#domstar" x="34.00" y="16.3" />
                    <use href="#domstar" x="32.47" y="18.4" />
                    <use href="#domstar" x="30" y="19.2" />
                    <use href="#domstar" x="27.53" y="18.4" />
                    <use href="#domstar" x="26.00" y="16.3" />
                    <use href="#domstar" x="26.00" y="13.7" />
                    <use href="#domstar" x="27.53" y="11.6" />
                  </svg>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover/flag:block bg-slate-950 text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap border border-white/10 z-30 shadow-lg">Dominica</span>
                </span>

                {/* US Flag */}
                <span className="relative group/flag" title="United States">
                  <svg
                    viewBox="0 0 57 30"
                    className="w-8 h-[18px] rounded-sm shadow-md border border-white/10 filter hover:brightness-110 transition-all duration-300 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <g id="usstar">
                        <polygon points="0,-0.4 0.12,-0.12 0.4,-0.12 0.17,0.05 0.26,0.33 0,0.16 -0.26,0.33 -0.17,0.05 -0.4,-0.12 -0.12,-0.12" fill="#FFFFFF" />
                      </g>
                    </defs>
                    <rect width="57" height="30" fill="#FFFFFF" />
                    {/* Red Stripes */}
                    <rect x="0" y="0" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="4.6" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="9.2" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="13.8" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="18.4" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="23.0" width="57" height="2.3" fill="#B22234" />
                    <rect x="0" y="27.6" width="57" height="2.3" fill="#B22234" />
                    {/* Canton */}
                    <rect x="0" y="0" width="22.8" height="16.15" fill="#3C3B6E" />
                    {/* Stars - Symbolic Grid representation for extreme crispness on small screens */}
                    <use href="#usstar" x="2.2" y="1.8" />
                    <use href="#usstar" x="6.2" y="1.8" />
                    <use href="#usstar" x="10.2" y="1.8" />
                    <use href="#usstar" x="14.2" y="1.8" />
                    <use href="#usstar" x="18.2" y="1.8" />

                    <use href="#usstar" x="4.2" y="3.8" />
                    <use href="#usstar" x="8.2" y="3.8" />
                    <use href="#usstar" x="12.2" y="3.8" />
                    <use href="#usstar" x="16.2" y="3.8" />

                    <use href="#usstar" x="2.2" y="5.8" />
                    <use href="#usstar" x="6.2" y="5.8" />
                    <use href="#usstar" x="10.2" y="5.8" />
                    <use href="#usstar" x="14.2" y="5.8" />
                    <use href="#usstar" x="18.2" y="5.8" />

                    <use href="#usstar" x="4.2" y="7.8" />
                    <use href="#usstar" x="8.2" y="7.8" />
                    <use href="#usstar" x="12.2" y="7.8" />
                    <use href="#usstar" x="16.2" y="7.8" />

                    <use href="#usstar" x="2.2" y="9.8" />
                    <use href="#usstar" x="6.2" y="9.8" />
                    <use href="#usstar" x="10.2" y="9.8" />
                    <use href="#usstar" x="14.2" y="9.8" />
                    <use href="#usstar" x="18.2" y="9.8" />

                    <use href="#usstar" x="4.2" y="11.8" />
                    <use href="#usstar" x="8.2" y="11.8" />
                    <use href="#usstar" x="12.2" y="11.8" />
                    <use href="#usstar" x="16.2" y="11.8" />

                    <use href="#usstar" x="2.2" y="13.8" />
                    <use href="#usstar" x="6.2" y="13.8" />
                    <use href="#usstar" x="10.2" y="13.8" />
                    <use href="#usstar" x="14.2" y="13.8" />
                    <use href="#usstar" x="18.2" y="13.8" />
                  </svg>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover/flag:block bg-slate-950 text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap border border-white/10 z-30 shadow-lg">United States</span>
                </span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-[#FF6B00] hover:text-orange-500 underline underline-offset-4 decoration-[#FF6B00]/20">iWebNext</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
