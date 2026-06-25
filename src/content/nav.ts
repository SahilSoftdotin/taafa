import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Accounting",
    items: [
      { label: "Personal Tax", href: "/services/personal-income-tax" },
      { label: "Company Tax", href: "/services/company-tax" },
      { label: "Business Accounting", href: "/services/business-accounting" },
      { label: "Bookkeeping & Payroll", href: "/services/bookkeeping-payroll" },
      { label: "Trusts", href: "/services/trusts" },
    ],
  },
  {
    heading: "Wealth & Advice",
    items: [
      { label: "Financial Planning", href: "/services/financial-planning" },
      { label: "SMSF", href: "/services/smsf" },
      { label: "Superannuation", href: "/services/superannuation" },
      { label: "Estate Planning", href: "/services/estate-planning" },
      { label: "Insurance", href: "/services/life-insurance" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Meet the Team", href: "/team" },
      { label: "Insights", href: "/insights" },
      { label: "All Services", href: "/services" },
      { label: "Book a Session", href: "/contact" },
    ],
  },
];
