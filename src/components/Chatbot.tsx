import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Shield } from "lucide-react";
import { ChatHistoryMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<ChatHistoryMessage[]>([
    {
      role: "model",
      content: "Hello! Thank you for choosing Epic Ride and Transport LLC. I am your Texas transit dispatcher assistant. How may I help you secure Casino Trips from Texas to Louisiana, taxi rides, or charter bus services today?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userText = message;
    setMessage("");
    
    // Append user message
    setHistory(prev => [...prev, { role: "user", content: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // We pass message and history to server.ts
        body: JSON.stringify({
          message: userText,
          history: history.slice(-8) // pass previous few messages to maintain context
        }),
      });

      const data = await response.json();
      
      setHistory(prev => [
        ...prev, 
        { role: "model", content: data.reply || "I am connected, but having a quick signal lag. Try calling our dispatcher at (409) 951-0839!" }
      ]);
    } catch (error) {
      console.error("Chatbot API error:", error);
      setHistory(prev => [
        ...prev,
        { 
          role: "model", 
          content: "I apologize, but we are experiencing a connection latency. Please feel free to place an immediate booking by calling (409) 951-0839." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-texas-chatbot-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex h-14 w-14 items-center justify-center rounded-sm bg-[#FF6B00] text-[#050B18] shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          title="Chat with Texas Transport Assistant"
        >
          <MessageSquare className="h-6 w-6 transition-transform group-hover:rotate-12" />
          <span className="absolute -left-36 top-2 hidden rounded-sm bg-slate-950 px-3 py-1 text-xs font-bold text-[#FF6B00] border border-[#FF6B00]/30 group-hover:block whitespace-nowrap uppercase font-mono tracking-wider">
            Need Ride Help? Chat Live
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="flex h-[520px] w-[360px] flex-col overflow-hidden rounded-sm border border-white/10 bg-[#050B18]/95 shadow-2xl shadow-slate-950/80 backdrop-blur-xl sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-slate-900 border-b border-white/10 p-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#FF6B00]/10 border border-[#FF6B00]/30">
                <MessageSquare className="h-5 w-5 text-[#FF6B00] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-widest text-white uppercase flex items-center">
                  Epic Ride Assistant
                </span>
                <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase flex items-center font-mono">
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Texas Dispatch Connected
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 font-mono">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-sm p-1 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                title="Minimize"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Secure Banner Note */}
          <div className="flex items-center justify-center space-x-1 bg-[#FF6B00]/5 py-1.5 px-3 border-b border-[#FF6B00]/15 text-[10px] font-bold text-[#FF6B00] font-mono uppercase tracking-wider">
            <Shield className="h-3 w-3" />
            <span>Secure Multi-Agent SSL Gateway</span>
          </div>

          {/* Chat message list */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/20 select-text font-sans"
          >
            {history.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-sm px-4 py-2.5 text-xs tracking-wide leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#FF6B00] text-slate-950 font-bold shadow-md"
                      : "bg-[#0A192F]/40 text-slate-300 border border-white/10"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  <span className="block mt-1 text-[8px] font-mono opacity-60 text-right uppercase">
                    {msg.role === "user" ? "Guest" : "Dispatcher AI"}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading / Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0A192F]/40 text-slate-300 rounded-sm border border-white/10 px-4 py-3 text-xs flex items-center space-x-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-bounce" style={{ animationDelay: "300ms" }} />
                  <span className="text-[9px] text-slate-500 font-mono pl-1 uppercase font-bold tracking-wider">calculating routes...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area Form */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-white/10 bg-[#0A192F]/40 p-3 flex items-center space-x-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about rides, rates, or locations..."
              className="flex-1 rounded-sm border border-white/10 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] font-sans transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className={`flex h-9 w-9 items-center justify-center rounded-sm bg-[#FF6B00] text-[#050B18] shadow transition-all ${
                !message.trim() || isLoading
                  ? "opacity-45 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
