import type { Service, ServiceCategory, ServiceGroup } from "@/types";

/**
 * Service catalogue. `verified:true` services are confirmed on the current
 * live taafa.com.au site. `verified:false` are from the redesign brief and
 * are flagged for the client to confirm before launch.
 */
export const services: Service[] = [
  // ---------------- Taxation ----------------
  {
    slug: "personal-income-tax",
    title: "Personal Income Tax Returns",
    category: "Taxation",
    summary:
      "Accurate preparation and lodgement of individual returns — every eligible deduction and offset accounted for.",
    description:
      "We review your income, deductions and offsets to lodge an accurate individual return, including multiple income sources such as employment, investments and rental properties. Our focus is compliance with current ATO requirements while reducing the risk of errors or audits.",
    inclusions: [
      "Preparation and lodgement of individual returns",
      "Identification of eligible deductions and offsets",
      "Multiple income sources (PAYG, investment, rental)",
      "Current ATO compliance review",
    ],
    icon: "FileText",
    verified: true,
  },
  {
    slug: "sole-trader-tax",
    title: "Sole Trader Tax Returns",
    category: "Taxation",
    summary:
      "Compliant, efficient reporting that keeps your business records accurate and ATO-ready.",
    description:
      "We prepare and manage sole trader income tax returns, helping you maintain accurate financial records and meet your obligations with structured, efficient reporting.",
    inclusions: [
      "Business income & expense reconciliation",
      "Schedule of business deductions",
      "PAYG instalment guidance",
      "Year-round record-keeping support",
    ],
    icon: "Receipt",
    verified: true,
  },
  {
    slug: "partnership-tax",
    title: "Partnership Tax Returns",
    category: "Taxation",
    summary:
      "Clear reporting and distribution statements that keep partnerships compliant and aligned.",
    description:
      "We assist partnerships with preparing income tax returns, maintaining compliance and clear reporting, and help you meet ATO requirements with structured documentation and distribution statements.",
    inclusions: [
      "Partnership return preparation & lodgement",
      "Profit distribution statements",
      "Partner-level tax guidance",
      "ATO-compliant documentation",
    ],
    icon: "Handshake",
    verified: true,
  },
  {
    slug: "company-tax",
    title: "Company Tax Returns",
    category: "Taxation",
    summary:
      "Organised, precise company lodgements that satisfy every reporting obligation.",
    description:
      "We manage company income tax returns — preparing and lodging accurate financial reports — and help you meet obligations with organised documentation and precise reporting across a range of industries.",
    inclusions: [
      "Company return preparation & lodgement",
      "Financial statement preparation",
      "Dividend & franking guidance",
      "ATO deadline management",
    ],
    icon: "Building2",
    verified: true,
  },
  {
    slug: "tax-planning",
    title: "Tax Planning & Minimisation",
    category: "Taxation",
    summary:
      "Forward-looking strategy that structures your affairs responsibly within the law.",
    description:
      "Effective tax planning is about managing tax responsibly, not avoiding it. We review your financial position to identify efficiencies, structure income and expenses appropriately, and plan ahead for future financial events — all within Australian tax legislation.",
    inclusions: [
      "Financial position review for efficiencies",
      "Income & expense structuring",
      "Planning for future financial events",
      "Year-round, not just at tax time",
    ],
    icon: "TrendingUp",
    verified: true,
  },

  // ---------------- Accounting ----------------
  {
    slug: "business-accounting",
    title: "Business Accounting",
    category: "Accounting",
    summary:
      "BAS, payroll and bookkeeping in one organised system — as a Xero Platinum Partner.",
    description:
      "Comprehensive business accounting support including BAS, payroll and bookkeeping. We help you maintain organised records for accurate financial management and clearer cashflow — backed by our Xero Platinum Champion Partner expertise.",
    inclusions: [
      "BAS preparation & lodgement",
      "Payroll processing & reporting",
      "Bookkeeping & account reconciliation",
      "Xero setup, migration & training",
    ],
    icon: "Calculator",
    verified: true,
  },
  {
    slug: "bookkeeping-payroll",
    title: "Bookkeeping & Payroll",
    category: "Accounting",
    summary:
      "Tidy books and on-time payroll that free up your week and de-risk reporting.",
    description:
      "We maintain accurate transaction records, reconcile accounts, process payroll and meet reporting obligations — streamlining your business administration so you can focus on running the business.",
    inclusions: [
      "Transaction recording & reconciliation",
      "Single Touch Payroll (STP) reporting",
      "Superannuation guarantee processing",
      "Monthly management snapshots",
    ],
    icon: "BookOpen",
    verified: true,
  },
  {
    slug: "trusts",
    title: "Trusts & Disability Trusts",
    category: "Accounting",
    summary:
      "Structured, transparent administration for family, discretionary and special disability trusts.",
    description:
      "We handle trust and disability trust accounting, including reporting and compliance management, with structured processes for transparent financial oversight.",
    inclusions: [
      "Trust accounting & financial statements",
      "Distribution & resolution support",
      "Special Disability Trust administration",
      "Compliance & reporting",
    ],
    icon: "ShieldCheck",
    verified: true,
  },

  // ---------------- SMSF & Super ----------------
  {
    slug: "smsf",
    title: "Self-Managed Super Funds (SMSF)",
    category: "SMSF & Super",
    summary:
      "Set up and run your own fund with clear documentation and compliance done right.",
    description:
      "We support the setup and ongoing management of self-managed super funds, assisting with reporting, compliance and fund administration, with clear documentation at every step.",
    inclusions: [
      "SMSF establishment & structuring",
      "Annual financials & audit coordination",
      "Compliance & ATO reporting",
      "Contribution & pension strategy support",
    ],
    icon: "Landmark",
    verified: true,
  },
  {
    slug: "superannuation",
    title: "Superannuation",
    category: "SMSF & Super",
    summary:
      "Track contributions and performance with reporting that keeps super on course.",
    description:
      "We provide superannuation management and reporting support, helping you track contributions and performance while staying compliant with current financial requirements.",
    inclusions: [
      "Contribution tracking & strategy",
      "Performance reporting",
      "Consolidation guidance",
      "Compliance review",
    ],
    icon: "PiggyBank",
    verified: true,
  },
  {
    slug: "superannuation-investments",
    title: "Superannuation Investments",
    category: "SMSF & Super",
    summary:
      "Clear documentation and summaries for informed, confident fund administration.",
    description:
      "We support superannuation investment reporting and management, providing clear documentation and financial summaries for informed fund administration.",
    inclusions: [
      "Investment reporting & summaries",
      "Asset allocation documentation",
      "Performance review",
      "Administration support",
    ],
    icon: "LineChart",
    verified: true,
  },

  // ---------------- Financial Planning ----------------
  {
    slug: "financial-planning",
    title: "Financial Planning",
    category: "Financial Planning",
    summary:
      "A long-term plan that aligns your money with your life goals and retirement.",
    description:
      "We work with you to review your financial position, goals and strategies so you can make informed decisions about your future — building confidence in your plan while keeping it aligned to your circumstances and objectives.",
    inclusions: [
      "Goals & cashflow review",
      "Retirement strategy",
      "Investment structure guidance",
      "Ongoing plan reviews",
    ],
    icon: "Compass",
    verified: true,
  },

  // ---------------- Insurance ----------------
  {
    slug: "life-insurance",
    title: "Life Insurance",
    category: "Insurance",
    summary:
      "Understand policy structures and protect what matters most to your family.",
    description:
      "We offer life insurance guidance, helping you understand available policy structures, with reporting and documentation for insurance-related financial planning.",
    inclusions: [
      "Cover-needs assessment",
      "Policy structure guidance",
      "In-super vs outside-super review",
      "Documentation & reporting",
    ],
    icon: "HeartPulse",
    verified: true,
  },
  {
    slug: "income-protection-insurance",
    title: "Income Protection Insurance",
    category: "Insurance",
    summary:
      "Safeguard your earnings if illness or injury keeps you from working.",
    description:
      "We provide income protection insurance information and assist with related reporting, ensuring accurate documentation within your financial records and compliance frameworks.",
    inclusions: [
      "Income replacement assessment",
      "Waiting & benefit period guidance",
      "Tax-deductibility considerations",
      "Reporting & documentation",
    ],
    icon: "Umbrella",
    verified: true,
  },
  {
    slug: "tpd-insurance",
    title: "Total & Permanent Disablement",
    category: "Insurance",
    summary:
      "Review TPD options and the reporting that supports them.",
    description:
      "We help clients review total and permanent disablement insurance options and manage associated documentation for accurate financial planning.",
    inclusions: [
      "TPD cover review",
      "Own vs any occupation guidance",
      "In-super structuring",
      "Documentation",
    ],
    icon: "Activity",
    verified: true,
  },
  {
    slug: "trauma-insurance",
    title: "Trauma Insurance",
    category: "Insurance",
    summary:
      "Lump-sum cover for serious illness, with the financial admin handled.",
    description:
      "We help clients understand trauma insurance options and manage financial documentation, including reporting related to insurance and taxation obligations.",
    inclusions: [
      "Critical illness cover review",
      "Sum-insured guidance",
      "Integration with broader cover",
      "Documentation & reporting",
    ],
    icon: "Stethoscope",
    verified: true,
  },
  {
    slug: "insurance-with-super",
    title: "Insurance Within Super",
    category: "Insurance",
    summary:
      "Review cover held inside superannuation and the reporting it needs.",
    description:
      "We assist with insurance policies held within superannuation, reviewing associated reporting needs and managing documentation for accurate super and insurance administration.",
    inclusions: [
      "In-super cover review",
      "Premium & balance impact analysis",
      "Beneficiary considerations",
      "Administration & reporting",
    ],
    icon: "ShieldHalf",
    verified: true,
  },

  // ---------------- Estate Planning ----------------
  {
    slug: "estate-planning",
    title: "Estate Planning",
    category: "Estate Planning",
    summary:
      "Organise your affairs for the future with structured, compliant planning.",
    description:
      "We offer financial and estate planning services to help organise your finances for the future, assisting with structured, compliant planning documents that align with your wishes.",
    inclusions: [
      "Estate structure review",
      "Beneficiary & succession guidance",
      "Coordination with legal advisers",
      "Documentation support",
    ],
    icon: "ScrollText",
    verified: true,
  },

  // ---------------- Property & Lending ----------------
  {
    slug: "investment-property-advice",
    title: "Investment Property Advice",
    category: "Property & Lending",
    summary:
      "Income tracking, tax implications and clear documentation for property investors.",
    description:
      "We provide investment property advice and reporting support, including income tracking and tax implications, with a focus on clear, compliant financial documentation.",
    inclusions: [
      "Rental income & expense tracking",
      "Depreciation & negative gearing guidance",
      "Capital gains considerations",
      "Compliant documentation",
    ],
    icon: "Home",
    verified: true,
  },
  {
    slug: "mortgage-lending",
    title: "Mortgage & Lending",
    category: "Property & Lending",
    summary:
      "Finance guidance to fund the next purchase — structured around your tax position.",
    description:
      "Lending guidance coordinated with your accounting and tax position so financing decisions support your broader wealth plan. (Service from the redesign brief — to be confirmed with the client before launch.)",
    inclusions: [
      "Borrowing capacity review",
      "Loan structure guidance",
      "Refinance considerations",
      "Coordination with your tax position",
    ],
    icon: "KeyRound",
    verified: false,
  },

  // ---------------- Business Advisory ----------------
  {
    slug: "business-advisory",
    title: "Business Advisory",
    category: "Business Advisory",
    summary:
      "Strategic guidance to improve cashflow, structure and long-term growth.",
    description:
      "Advisory support to help business owners improve cashflow, choose the right structure and plan for growth. (Service from the redesign brief — to be confirmed with the client before launch.)",
    inclusions: [
      "Cashflow & profitability review",
      "Business structure advice",
      "Growth & exit planning",
      "Benchmarking & KPIs",
    ],
    icon: "Target",
    verified: false,
  },
];

export const categoryMeta: Record<
  ServiceCategory,
  { icon: string; blurb: string }
> = {
  Taxation: {
    icon: "Receipt",
    blurb: "Individuals, sole traders, partnerships and companies.",
  },
  Accounting: {
    icon: "Calculator",
    blurb: "Books, BAS, payroll and trusts — done on Xero.",
  },
  "SMSF & Super": {
    icon: "Landmark",
    blurb: "Set up, manage and report on your retirement savings.",
  },
  "Financial Planning": {
    icon: "Compass",
    blurb: "Long-term strategy aligned to your goals.",
  },
  Insurance: {
    icon: "ShieldCheck",
    blurb: "Protect your income, family and assets.",
  },
  "Estate Planning": {
    icon: "ScrollText",
    blurb: "Structure your affairs for the future.",
  },
  "Property & Lending": {
    icon: "Home",
    blurb: "Invest and finance with confidence.",
  },
  "Business Advisory": {
    icon: "Target",
    blurb: "Strategy for cashflow, structure and growth.",
  },
};

export const categoryOrder: ServiceCategory[] = [
  "Taxation",
  "Accounting",
  "SMSF & Super",
  "Financial Planning",
  "Insurance",
  "Estate Planning",
  "Property & Lending",
  "Business Advisory",
];

export function getServiceGroups(): ServiceGroup[] {
  return categoryOrder.map((category) => ({
    category,
    icon: categoryMeta[category].icon,
    blurb: categoryMeta[category].blurb,
    services: services.filter((s) => s.category === category),
  }));
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
