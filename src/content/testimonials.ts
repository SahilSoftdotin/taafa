export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Placeholder testimonials for the concept — replace with real, consented reviews before launch. */
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They turned our books from a source of stress into a dashboard we actually use to make decisions. Genuinely transparent every step.",
    name: "Placeholder — café owner",
    role: "Hospitality, Toukley",
    verified: false,
  },
  {
    quote:
      "Set up our SMSF properly the first time and explained everything in plain English. We finally feel in control of our retirement.",
    name: "Placeholder — retired couple",
    role: "SMSF clients",
    verified: false,
  },
  {
    quote:
      "Our company tax and BAS just… happen now, on time, no surprises. Worth it for the peace of mind alone.",
    name: "Placeholder — trades business",
    role: "Construction, Central Coast",
    verified: false,
  },
];
