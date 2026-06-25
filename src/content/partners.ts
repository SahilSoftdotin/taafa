export interface Partner {
  name: string;
  logo: string;
  /** Verified relationship vs illustrative placeholder */
  verified: boolean;
}

/**
 * "Works with" logo wall using real brand marks.
 * - Platforms: official Simple Icons SVGs.
 * - Banks: each institution's own brand icon (apple-touch-icon / favicon).
 * Only Xero is a verified partnership (Platinum Champion Partner). Other marks
 * are shown to indicate integrations — confirm trademark/logo usage before launch.
 */

export const platforms: Partner[] = [
  { name: "Xero", logo: "/images/logos/real/xero.svg", verified: true },
  { name: "MYOB", logo: "/images/logos/real/myob.svg", verified: false },
  { name: "QuickBooks", logo: "/images/logos/real/quickbooks.png", verified: false },
  { name: "Visa", logo: "/images/logos/real/visa.svg", verified: false },
  { name: "Mastercard", logo: "/images/logos/real/mastercard.svg", verified: false },
  { name: "PayPal", logo: "/images/logos/real/paypal.svg", verified: false },
  { name: "Stripe", logo: "/images/logos/real/stripe.svg", verified: false },
  { name: "Wise", logo: "/images/logos/real/wise.svg", verified: false },
];

export const banks: Partner[] = [
  { name: "CommBank", logo: "/images/logos/real/commbank.png", verified: false },
  { name: "NAB", logo: "/images/logos/real/nab.jpg", verified: false },
  { name: "Westpac", logo: "/images/logos/real/westpac.ico", verified: false },
  { name: "ANZ", logo: "/images/logos/real/anz.png", verified: false },
  { name: "Macquarie", logo: "/images/logos/real/macquarie.png", verified: false },
  { name: "ING", logo: "/images/logos/real/ing.jpg", verified: false },
  { name: "Bendigo Bank", logo: "/images/logos/real/bendigo.ico", verified: false },
  { name: "St.George", logo: "/images/logos/real/stgeorge.png", verified: false },
];
