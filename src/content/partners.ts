export interface Partner {
  name: string;
  logo: string;
  /** Verified relationship vs illustrative placeholder */
  verified: boolean;
}

/**
 * "Works with" logo wall. Only Xero is a verified relationship (Platinum
 * Champion Partner). Other marks are ILLUSTRATIVE for the concept — confirm
 * partnerships and obtain trademark/logo usage rights before launch.
 * (Xero/MYOB use official marks; the rest are styled wordmark placeholders.)
 */

export const platforms: Partner[] = [
  { name: "Xero", logo: "/images/logos/xero.svg", verified: true },
  { name: "MYOB", logo: "/images/logos/myob.svg", verified: false },
  { name: "QuickBooks", logo: "/images/logos/quickbooks.svg", verified: false },
  { name: "ATO", logo: "/images/logos/ato.svg", verified: false },
  { name: "CA ANZ", logo: "/images/logos/caanz.svg", verified: false },
  { name: "CPA Australia", logo: "/images/logos/cpa.svg", verified: false },
];

export const banks: Partner[] = [
  { name: "CommBank", logo: "/images/logos/commbank.svg", verified: false },
  { name: "NAB", logo: "/images/logos/nab.svg", verified: false },
  { name: "Westpac", logo: "/images/logos/westpac.svg", verified: false },
  { name: "ANZ", logo: "/images/logos/anz.svg", verified: false },
  { name: "Macquarie", logo: "/images/logos/macquarie.svg", verified: false },
  { name: "Bendigo Bank", logo: "/images/logos/bendigo.svg", verified: false },
  { name: "St.George", logo: "/images/logos/stgeorge.svg", verified: false },
  { name: "ING", logo: "/images/logos/ing.svg", verified: false },
];
