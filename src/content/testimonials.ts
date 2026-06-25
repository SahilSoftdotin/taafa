export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  /** Tailwind gradient classes for the initials avatar */
  accent: string;
  /** Placeholder reviews for the concept — replace with real, consented reviews before launch. */
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They turned our books from a source of stress into a dashboard we actually use. Genuinely transparent at every step.",
    name: "Café owner",
    role: "Hospitality · Toukley",
    rating: 5,
    accent: "from-aurora-indigo to-aurora-violet",
    verified: false,
  },
  {
    quote:
      "Set up our SMSF properly the first time and explained everything in plain English. We finally feel in control of our retirement.",
    name: "Retired couple",
    role: "SMSF clients · Central Coast",
    rating: 5,
    accent: "from-aurora-teal to-aurora-cyan",
    verified: false,
  },
  {
    quote:
      "Company tax and BAS just happen now — on time, no surprises. Worth it for the peace of mind alone.",
    name: "Trades business",
    role: "Construction · Wyong",
    rating: 5,
    accent: "from-coral to-amber",
    verified: false,
  },
  {
    quote:
      "The first advisor who actually made our investment property numbers make sense. Clear, patient and honest.",
    name: "Property investors",
    role: "Investors · The Entrance",
    rating: 5,
    accent: "from-sky to-aurora-indigo",
    verified: false,
  },
  {
    quote:
      "Switched our whole business to Xero with their help. Reporting that used to take days now takes minutes.",
    name: "Retail owner",
    role: "Retail · Gosford",
    rating: 5,
    accent: "from-fuchsia to-aurora-violet",
    verified: false,
  },
  {
    quote:
      "Sorted my personal return and found deductions I'd been missing for years. Friendly and fast.",
    name: "PAYG individual",
    role: "Personal tax · Budgewoi",
    rating: 5,
    accent: "from-emerald to-aurora-teal",
    verified: false,
  },
  {
    quote:
      "They take the time to teach, not just file. I leave every meeting understanding my finances better.",
    name: "Small business owner",
    role: "Services · Central Coast",
    rating: 5,
    accent: "from-amber to-coral",
    verified: false,
  },
  {
    quote:
      "Professional, responsive and genuinely caring about our family's long-term plan. Highly recommend.",
    name: "Family clients",
    role: "Financial planning · Toukley",
    rating: 5,
    accent: "from-aurora-cyan to-sky",
    verified: false,
  },
];
