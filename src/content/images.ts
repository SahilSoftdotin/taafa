import type { ServiceCategory } from "@/types";

/**
 * Local imagery (downloaded to /public/images). These are high-quality
 * placeholder photographs for the concept — swap for real, licensed or
 * commissioned TAAF/team/office photography before launch (see roadmap).
 */
export const img = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  cta: "/images/cta.jpg",
  team: "/images/team.jpg",
  office: "/images/office.jpg",
  meeting: "/images/meeting.jpg",
  charts: "/images/charts.jpg",
  laptop: "/images/laptop.jpg",
  planning: "/images/planning.jpg",
  calculator: "/images/calculator.jpg",
  property: "/images/property.jpg",
  handshake: "/images/handshake.jpg",
} as const;

/** Unique background image per service (one file per slug, no duplicates). */
export function serviceImage(slug: string): string {
  return `/images/services/${slug}.jpg`;
}

/** Cinematic hero background video (Pexels, free license). */
export const heroVideo = "/video/hero.mp4";

export const serviceCategoryImage: Record<ServiceCategory, string> = {
  Taxation: img.calculator,
  Accounting: img.laptop,
  "SMSF & Super": img.charts,
  "Financial Planning": img.planning,
  Insurance: img.handshake,
  "Estate Planning": img.meeting,
  "Property & Lending": img.property,
  "Business Advisory": img.office,
};

export const insightCategoryImage: Record<string, string> = {
  Tax: img.calculator,
  SMSF: img.charts,
  Property: img.property,
  Business: img.laptop,
  Wealth: img.planning,
  Estate: img.meeting,
};
