export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  accent: string;
}

/**
 * SAMPLE team — placeholder names, roles and photos for the concept.
 * Replace with the real TAAF team (names, titles, headshots, bios) before launch.
 */
export const team: TeamMember[] = [
  {
    name: "Sample Name",
    role: "Principal Accountant",
    bio: "Leads the practice with a transparent, plain-English approach to tax and advisory for individuals and businesses across the Central Coast.",
    photo: "/images/team/member-1.jpg",
    specialties: ["Business tax", "Advisory", "Strategy"],
    accent: "from-aurora-indigo to-aurora-violet",
  },
  {
    name: "Sample Name",
    role: "Senior Tax Advisor",
    bio: "Specialises in personal, sole-trader and company returns — focused on accuracy, compliance and finding every legitimate deduction.",
    photo: "/images/team/member-2.jpg",
    specialties: ["Personal tax", "Compliance", "Deductions"],
    accent: "from-aurora-teal to-aurora-cyan",
  },
  {
    name: "Sample Name",
    role: "SMSF Specialist",
    bio: "Helps clients set up and run self-managed super funds with clear documentation and confident, compliant administration.",
    photo: "/images/team/member-3.jpg",
    specialties: ["SMSF", "Superannuation", "Audit support"],
    accent: "from-coral to-amber",
  },
  {
    name: "Sample Name",
    role: "Financial Planner",
    bio: "Builds long-term plans that align money with life goals — retirement, insurance and wealth, explained simply.",
    photo: "/images/team/member-4.jpg",
    specialties: ["Planning", "Insurance", "Retirement"],
    accent: "from-sky to-aurora-indigo",
  },
  {
    name: "Sample Name",
    role: "Client Manager · Xero",
    bio: "Keeps clients moving on Xero — onboarding, bank feeds and reporting — as a Platinum Champion Partner practice.",
    photo: "/images/team/member-5.jpg",
    specialties: ["Xero", "Onboarding", "Reporting"],
    accent: "from-fuchsia to-aurora-violet",
  },
  {
    name: "Sample Name",
    role: "Bookkeeper & Payroll",
    bio: "Owns the day-to-day: reconciliations, BAS, payroll and Single Touch Payroll — tidy books, on-time lodgements.",
    photo: "/images/team/member-6.jpg",
    specialties: ["Bookkeeping", "Payroll", "BAS"],
    accent: "from-emerald to-aurora-teal",
  },
];
