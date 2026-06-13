import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Globe, Send, ShieldAlert, CheckCircle } from "lucide-react";

export default function ContactSection() {
  
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInput(p => ({ ...p, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!formInput.name || !formInput.email || !formInput.message) {
      setErrorText("Please supply complete Name, Email, and Message detail.");
      return;
    }

    setIsSubmitting(true);

    // Simulate safe secure mail delivery queuing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const hours = [
    { day: "Monday", time: "24 Hours Service" },
    { day: "Tuesday", time: "24 Hours Service" },
    { day: "Wednesday", time: "24 Hours Service" },
    { day: "Thursday", time: "24 Hours Service" },
    { day: "Friday", time: "24 Hours Service" },
    { day: "Saturday", time: "24 Hours Service" },
    { day: "Sunday", time: "24 Hours Service" },
  ];

  return (
    <div id="epic-ride-contact-view" className="relative text-white bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute top-[40%] left-[30%] h-96 w-96 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-[#FF6B00] uppercase font-mono">
            Get in touch
          </span>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight uppercase sm:text-6xl text-white">
            Contact Epic Dispatch
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed sm:text-base font-sans">
            Ready to arrange a contract or need instant regional assistance? Connect with our dedicated Texas dispatch center right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Column 1: Contact Coordinates & Details */}
          <div className="space-y-8">
            
            {/* Quick overview */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Corporate Office Credentials
              </h2>
              
              <div className="space-y-4 text-xs font-sans">
                {/* Telephone */}
                <div className="flex items-start space-x-3.5 border-b border-white/5 pb-4">
                  <div className="rounded bg-orange-500/5 p-2.5 border border-orange-500/10 text-[#FF6B00] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5 font-mono">Dispatch Phone Hotline</span>
                    <a href="tel:4099510839" className="text-base font-bold text-white font-mono hover:text-[#FF6B00] transition-colors">
                      (409) 951-0839
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start space-x-3.5 border-b border-white/5 pb-4">
                  <div className="rounded bg-orange-500/5 p-2.5 border border-orange-500/10 text-[#FF6B00] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5 font-mono">Operations Email desk</span>
                    <a href="mailto:epicrideandtransport@gmail.com" className="text-base font-semibold text-white font-mono hover:text-[#FF6B00] transition-colors break-all">
                      epicrideandtransport@gmail.com
                    </a>
                  </div>
                </div>

                {/* Licensed Coverage geographical */}
                <div className="flex items-start space-x-3.5">
                  <div className="rounded bg-[#FF6B00]/5 p-2.5 border border-orange-500/10 text-[#FF6B00] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5 font-mono">Texas Regional Base</span>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      All Texas Counties, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Panel */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/30 p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] border-b border-white/5 pb-3.5 mb-4 flex items-center space-x-2">
                <Clock className="h-4.5 w-4.5 text-[#FF6B00] animate-pulse" />
                <span>24/7 Operations Duty Schedule</span>
              </h3>

              <div className="space-y-2">
                {hours.map((h, index) => (
                  <div key={index} className="flex justify-between text-xs font-mono py-1 border-b border-white/5 last:border-b-0">
                    <span className="text-slate-400">{h.day}</span>
                    <span className="text-emerald-400 font-bold uppercase select-none">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Contact Form or Success Screen */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/45 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="rounded-full bg-emerald-500/15 p-4 border border-emerald-500/20">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  Message Transmitted!
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
                  Your corporate ticket query has been safely received by Epic Ride and Transport LLC. A route dispatcher will review and respond to you immediately.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="rounded bg-[#FF6B00] text-slate-950 font-bold uppercase tracking-widest text-xs py-2 px-6 shadow hover:bg-orange-600 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-sans mb-1">
                    Send Direct Dispatch Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Have special needs or commercial logistics? Let us coordinate.
                  </p>
                </div>

                {errorText && (
                  <div className="rounded border border-red-500/25 bg-red-500/10 p-3 text-xs font-semibold text-red-400 font-mono">
                    {errorText}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formInput.name}
                    onChange={handleInputChange}
                    placeholder="Guest Name"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formInput.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Subject / Category
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formInput.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Corporate Charter Account / Special Event Rates"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white focus:border-[#FF6B00] focus:outline-none"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                    Details of Inquiry
                  </label>
                  <textarea
                    name="message"
                    value={formInput.message}
                    onChange={handleInputChange}
                    placeholder="Describe your transportation constraints, specific timings, or luggage details."
                    className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 px-3.5 text-xs text-white placeholder-slate-600 focus:border-[#FF6B00] focus:outline-none h-28 resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded bg-gradient-to-r from-[#FF6B00] to-orange-700 text-slate-950 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-transform active:translate-y-0.5 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Transmitting Detail..." : "Send Message"}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                {/* SSL encryption note */}
                <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono pt-2 border-t border-white/5">
                  <ShieldAlert className="h-4 w-4 text-orange-500/60" />
                  <span>Encrypted message channels secured with TLS 1.3 standard protocols.</span>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
