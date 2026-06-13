import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Shared Gemini Client Utility with Telemetry standard
// Safely lazy-initialize the Client to avoid startup crashes if key is initially empty
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    // If the key is missing in dev fallback to a dummy, but log a warning
    if (!apiKey) {
      console.warn("Waring: GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory bookings store for the session
  const bookings: any[] = [];

  // API Routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Epic Ride and Transport Backend" });
  });

  // Chat endpoint for artificial intelligence chatbot widget
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        res.status(400).json({ error: "Message is required." });
        return;
      }

      const ai = getAiClient();
      
      // We convert incoming history to the format expected by the SDK if provided,
      // or we can use a system instruction and simple generation.
      const systemInstruction = `You are the professional, friendly, and helpful AI Dispatcher Assistant for "Epic Ride and Transport LLC", a premium transportation company based in Texas (USA).
Your goal is to assist customers, answer questions with utmost luxury/reliability tone, and help them request bookings.

Company Details:
- Name: Epic Ride and Transport LLC
- Phone: (409) 951-0839
- Email: epicrideandtransport@gmail.com
- Service Area: Texas, USA (Main cities: Houston, Dallas, Fort Worth, Austin, San Antonio, Beaumont, Port Arthur, Galveston, etc.)
- Services Offered: Taxi Services, Luxury Limousine Rentals, Charter Bus Rentals, Airport Transfers, Corporate Transportation, Wedding Transportation, Special Event Transportation, Group Transportation, Long-Distance Rides.
- Brand tone: Elegant, reliable, client-first, premium.

If the user asks for quotes, guide them to our online Booking form/tab or provide placeholder quotes based on standard rates:
- Standard Taxi Taxi Sedans: $2.50 base + $2.50 per mile
- Luxury SUVs: $75 per hour (minimum 2 hours) or airport flat rates (e.g. $95)
- Stretch Limousines: $120 per hour (minimum 3 hours)
- Executive Vans / Vehicles: $90 per hour
- mini Buses: $150 per hour
- Charter Buses: $220 per hour
Always clarify that these are estimates and our dispatch team will email/call them with a final guaranteed contract quote.

Encourage booking online via the "Booking" page or by calling (409) 951-0839.
Keep answers concise, clear, and elegant. Do not hallucinate external phone numbers or links. You are based in Texas.`;

      // Formulate query content with context
      const formattedHistory = (history || []).map((h: any) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }]
      }));

      // Add the latest message
      const contents = [...formattedHistory, { role: "user", parts: [{ text: message }] }];

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text || "I am here to assist you with your transport needs in Texas. Please feel free to ask!" });
    } catch (error: any) {
      console.error("Gemini API error in server:", error);
      res.status(500).json({
        reply: "I am experiencing a slight system delay, but I'm here to help! Please call our dispatch team directly at (409) 951-0839 for immediate Texas booking assistance."
      });
    }
  });

  // Booking and Quote Request endpoint
  app.post("/api/book", (req, res) => {
    try {
      const {
        pickupLocation,
        dropoffLocation,
        date,
        time,
        vehicleType,
        passengers,
        specialRequests,
        name,
        email,
        phone,
      } = req.body;

      if (!pickupLocation || !dropoffLocation || !date || !time || !name || !email || !phone) {
        res.status(400).json({ error: "Missing required fields for booking request." });
        return;
      }

      // Generate a tracking ID
      const referenceId = `EPIC-${Math.floor(100000 + Math.random() * 900000)}`;

      // Calculate a live estimate
      let baseRate = 45;
      let ratePerMile = 2.5;
      let estimatedMiles = Math.floor(15 + Math.random() * 45); // simulated miles for Texas trips
      let estimatedCost = 0;

      switch (vehicleType) {
        case "Stretch Limousines":
          estimatedCost = 360; // Standard 3hr block minimum
          break;
        case "Luxury SUVs":
          estimatedCost = 150; // Standard 2hr block
          break;
        case "Charter Buses":
          estimatedCost = 660; // 3hr minimum
          break;
        case "Mini Buses":
          estimatedCost = 450;
          break;
        case "Executive Vehicles":
          estimatedCost = 180;
          break;
        case "Standard Taxi Sedans":
        default:
          estimatedCost = Math.round(baseRate + (estimatedMiles * ratePerMile));
          break;
      }

      const newBooking = {
        id: referenceId,
        pickupLocation,
        dropoffLocation,
        date,
        time,
        vehicleType: vehicleType || "Standard Taxi Sedans",
        passengers: passengers || 1,
        specialRequests: specialRequests || "None",
        name,
        email,
        phone,
        status: "Pending Dispatch Confirmation",
        estimatedCost,
        createdAt: new Date().toISOString(),
      };

      bookings.push(newBooking);

      console.log(`[BOOKING SUCCESS] Ref: ${referenceId}, Name: ${name}, Vehicle: ${vehicleType}`);

      res.status(201).json({
        success: true,
        message: "Your reservation request has been securely processed by Epic Ride and Transport LLC.",
        referenceId,
        estimatedCost,
        bookingDetails: newBooking,
      });
    } catch (error: any) {
      console.error("Booking handler error:", error);
      res.status(500).json({ error: "Failed to process booking request." });
    }
  });

  // Get active bookings list (useful for client demonstration)
  app.get("/api/bookings", (req, res) => {
    res.json(bookings);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER RUNNING] http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
