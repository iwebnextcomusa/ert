import { useState } from "react";
import { TabType, TestimonialItem } from "../types";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface TestimonialsSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export default function TestimonialsSection({ setActiveTab }: TestimonialsSectionProps) {
  
  const reviews: TestimonialItem[] = [
    {
      id: "rev-1",
      name: "Marcus Sterling",
      location: "Houston, TX",
      rating: 5,
      serviceType: "Texas to Louisiana Casino Trip",
      comment: "Absolutely exceptional service from Epic Ride! The round-trip transit to Lake Charles for our group gaming escape was spotless, comfortable, and perfectly timed. Our chauffeur handled the interstate drive with the epitome of professional poise. Truly premium.",
      date: "May 14, 2026"
    },
    {
      id: "rev-2",
      name: "Sarah Lin",
      location: "Dallas DFW Airport",
      rating: 5,
      serviceType: "Airport Transfer",
      comment: "I book flight connections out of Dallas-Fort Worth weekly. Their dispatch tracks early landings, and my driver is always waiting near baggage claim with a digital name board. Super reliable long-distance driving.",
      date: "April 29, 2026"
    },
    {
      id: "rev-3",
      name: "Reverend Thomas Miller",
      location: "Beaumont, TX",
      rating: 5,
      serviceType: "Charter Bus Rental",
      comment: "We chartered a mini-bus for our community senior outing. It was roomy, fully air-conditioned, and equipped with comfortable headrests. The captain drove in a safe, steady manner. The senior delegates were delighted! Will book again.",
      date: "May 22, 2026"
    },
    {
      id: "rev-4",
      name: "Elizabeth Ross",
      location: "Galveston, TX",
      rating: 5,
      serviceType: "Taxi Services",
      comment: "Stuck in a pinch with our family baggage near the docks. Epic Ride dispatched a standard taxi sedan in 10 minutes flat! Courteous local driver, straightforward fares, clean interiors. Five star standard.",
      date: "June 01, 2026"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div id="epic-ride-testimonials-view" className="relative text-white bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute top-[25%] right-[10%] h-80 w-80 rounded-full bg-amber-500/3 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-[#d4af37] uppercase font-mono">
            Rider Feedbacks
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-6xl text-white">
            Client Testimonials
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed sm:text-base font-sans">
            Hear from corporate travel executives, newlyweds, coordinators, and local families who rely on our Texas transportation services every day.
          </p>
        </div>

        {/* Carousel Visual Frame */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900 to-slate-950 p-6 sm:p-12 shadow-2xl relative">
          
          <div className="absolute top-8 left-8 text-amber-500/10">
            <MessageSquare className="h-24 w-24" />
          </div>

          {/* Active Review Content */}
          <div className="space-y-6 relative z-10">
            
            {/* Stars */}
            <div className="flex space-x-1 justify-center sm:justify-start">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Comment Body text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic font-sans text-center sm:text-left select-text">
              &ldquo;{reviews[activeIndex].comment}&rdquo;
            </p>

            {/* User credentials */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-white/5 gap-4">
              <div className="text-center sm:text-left space-y-1">
                <span className="text-sm font-bold text-white block">
                  {reviews[activeIndex].name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                  Service: {reviews[activeIndex].serviceType} &amp; Transport
                </span>
              </div>

              <div className="text-center sm:text-right text-[11px] font-mono text-slate-500">
                <span>{reviews[activeIndex].location}</span>
                <span className="mx-2">•</span>
                <span>{reviews[activeIndex].date}</span>
              </div>
            </div>

          </div>

          {/* Controls button row */}
          <div className="mt-8 flex justify-center sm:justify-end space-x-3.5 relative z-10">
            <button
              onClick={handlePrev}
              className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 p-2.5 text-white transition-all active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 p-2.5 text-white transition-all active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Carousel indicators dots */}
        <div className="flex space-x-2 mt-6 justify-center">
          {reviews.map((_, rIdx) => (
            <button
              key={rIdx}
              onClick={() => setActiveIndex(rIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === rIdx ? "w-6 bg-[#d4af37]" : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* Grid Overview for secondary review list */}
        <div className="mt-24">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-10">
            Trusted Across Beaumont, Galveston &amp; Houston
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-xl border border-white/5 bg-slate-900/30 p-5 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Check className="h-4 w-4 text-emerald-400 border border-emerald-500/20 rounded-full p-0.5 bg-emerald-500/5" />
                </div>
                
                <p className="text-xs text-slate-400 italic line-clamp-3 leading-relaxed font-sans select-text">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold text-white truncate">{rev.name}</span>
                  <span className="text-slate-500 whitespace-nowrap">{rev.location.split(",")[0]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call Action */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                setActiveTab("booking");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded bg-[#d4af37] text-slate-950 font-bold uppercase tracking-widest text-xs px-8 py-4 transition-transform hover:scale-105"
            >
              Experience Epic Ride Quality
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
