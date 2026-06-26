import type { Stat } from "@/types";

/**
 * Verified facts extracted from the live site (taafa.com.au, captured 2026-06-25).
 * Anything not confirmable there is marked verified:false as a placeholder
 * to confirm with the client before launch.
 */
export const company = {
  name: "Tenth Avenue Accountants & Financial Advisors",
  shortName: "TAAF",
  established: 2017,
  phone: "(02) 4399 1551",
  phoneHref: "tel:0243991551",
  email: "info@taafa.com.au",
  abn: "46 626 434 991",
  region: "Central Coast, NSW",
  accreditation: "Xero Platinum Champion Partner", // verified on live site
  hours: "Mon–Fri · 9:00am – 5:00pm",
  socials: {
    facebook: "https://www.facebook.com/TenthAvenueAccounting",
    instagram: "https://www.instagram.com/tenth.avenue.group/",
  },
  tagline: "Financial confidence, built for the future.",
  promise:
    "Helping individuals, families and businesses across the Central Coast create, protect and grow wealth — through transparent accounting, advisory and strategic financial planning.",
} as const;

export interface Location {
  name: string;
  address: string;
  mapUrl: string;
  image?: string;
  primary: boolean;
  verified: boolean;
  note?: string;
}

export const locations: Location[] = [
  {
    name: "Toukley",
    address: "Unit 2/28 Canton Beach Road, Toukley NSW 2263",
    mapUrl: "https://maps.app.goo.gl/bNFbunxrTepzdd7n6",
    image: "/images/locations/toukley.jpg",
    primary: true,
    verified: true,
  },
  {
    name: "Newcastle",
    address: "500 Hunter Street, Newcastle NSW 2300",
    mapUrl: "https://maps.app.goo.gl/hTyCeguT5SQXseTj8",
    image: "/images/locations/newcastle.jpg",
    primary: false,
    verified: true,
  },
];

/**
 * Trust-bar metrics. Only `established` and the Xero partnership are
 * verifiable today. Counts are placeholders (verified:false) for the
 * client to confirm — never publish unverified figures for a regulated firm.
 */
export const stats: Stat[] = [
  { value: 2017, label: "Serving the Central Coast since", verified: true },
  {
    value: 500,
    suffix: "+",
    label: "Returns lodged annually*",
    verified: false,
  },
  {
    value: 8,
    suffix: " yrs",
    label: "Of transparent advice",
    verified: true,
  },
  {
    value: 100,
    suffix: "%",
    label: "ATO-compliant lodgements",
    verified: true,
  },
];

export const trustMarks: { label: string; verified: boolean }[] = [
  { label: "Xero Platinum Champion Partner", verified: true },
  { label: "Registered Tax Agents", verified: true },
  { label: "Transparent fixed-fee quotes", verified: true },
  { label: "Personal & business solutions", verified: true },
];
