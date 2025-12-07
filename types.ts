export interface Service {
  title: string;
  description?: string;
  highlight?: boolean;
}

export interface PricingTier {
  duration: string;
  price: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
  bookingNote: string;
}