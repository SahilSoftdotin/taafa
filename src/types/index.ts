import type { LucideIcon } from "lucide-react";

export type ServiceCategory =
  | "Taxation"
  | "Accounting"
  | "SMSF & Super"
  | "Financial Planning"
  | "Insurance"
  | "Estate Planning"
  | "Property & Lending"
  | "Business Advisory";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Short card summary */
  summary: string;
  /** Longer body for the detail page */
  description: string;
  /** Key inclusions shown as a checklist */
  inclusions: string[];
  /** lucide-react icon name resolved at render time */
  icon: string;
  /** True when confirmed present on the current live taafa.com.au site */
  verified: boolean;
}

export interface ServiceGroup {
  category: ServiceCategory;
  icon: string;
  blurb: string;
  services: Service[];
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Honest flag: true = on live site / public record; false = placeholder to confirm with client */
  verified: boolean;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type { LucideIcon };
