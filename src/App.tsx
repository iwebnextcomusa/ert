/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { TabType } from "./types";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ThreeScene from "./components/ThreeScene";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import FleetSection from "./components/FleetSection";
import BookingSection from "./components/BookingSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import { ArrowUp, Award, Phone } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Storing intermediate booking presets
  const [servicePreset, setServicePreset] = useState("");
  const [vehiclePreset, setVehiclePreset] = useState("");

  // Track window scroll coordinates for 3D interactions and Back to Top triggers
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenBookingWithPreset = () => {
    setServicePreset("");
    setVehiclePreset("");
    setActiveTab("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectService = (serviceName: string) => {
    setServicePreset(serviceName);
    setVehiclePreset("");
  };

  const handleSelectVehicle = (vehicleName: string) => {
    setVehiclePreset(vehicleName);
    setServicePreset("");
  };

  return (
    <div id="epic-ride-app-root" className="min-h-screen bg-[#050B18] font-sans text-slate-100 flex flex-col justify-between selection:bg-[#FF6B00] selection:text-slate-950 overflow-x-hidden antialiased">
      
      {/* 3D WebGL Three.js Particle Environment Background */}
      <ThreeScene scrollProgress={scrollProgress} />

      {/* Structured Layout Header */}
      <NavBar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenBooking={handleOpenBookingWithPreset} 
      />

      {/* Main section contents wrapper */}
      <main id="epic-ride-main-wrapper" className="flex-1 relative z-10 transition-opacity duration-300">
        {activeTab === "home" && (
          <HomeSection 
            setActiveTab={setActiveTab} 
            onOpenBooking={handleOpenBookingWithPreset} 
          />
        )}
        {activeTab === "services" && (
          <ServicesSection 
            setActiveTab={setActiveTab} 
            onSelectService={handleSelectService} 
          />
        )}
        {activeTab === "fleet" && (
          <FleetSection 
            setActiveTab={setActiveTab} 
            onSelectVehicle={handleSelectVehicle} 
          />
        )}
        {activeTab === "booking" && (
          <BookingSection 
            selectedServicePreset={servicePreset} 
            selectedVehiclePreset={vehiclePreset} 
          />
        )}
        {activeTab === "about" && (
          <AboutSection 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === "testimonials" && (
          <TestimonialsSection 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === "contact" && (
          <ContactSection />
        )}
      </main>

      {/* AI Chatbot Float widget */}
      <Chatbot />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          id="scroll-to-top-button"
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-slate-950/80 text-[#FF6B00] shadow-lg shadow-orange-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#FF6B00]/40 active:scale-95 cursor-pointer"
          title="Scroll Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Premium Elegant Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

