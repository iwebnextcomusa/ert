export type TabType = 
  | "home" 
  | "services" 
  | "fleet" 
  | "booking" 
  | "about" 
  | "testimonials" 
  | "contact";

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  occasions: string[];
}

export interface VehicleItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggage: string;
  features: string[];
  imagePlaceholder: string;
  rateInfo: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  serviceType: string;
  comment: string;
  date: string;
}

export interface BookingFormInput {
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehicleType: string;
  passengers: number;
  specialRequests: string;
  name: string;
  email: string;
  phone: string;
}

export interface ChatHistoryMessage {
  role: "user" | "model";
  content: string;
}
