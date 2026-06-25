export interface Partner {
  name: string;
  /** Verified relationship vs illustrative placeholder */
  verified: boolean;
}

/**
 * "Works with" wall. Only Xero is a verified relationship (Platinum Champion
 * Partner). Banks/platforms below are ILLUSTRATIVE placeholders for the concept
 * — confirm partnerships and obtain trademark/logo usage rights before launch.
 */

// Accounting / finance platforms TAAF works with
export const platforms: Partner[] = [
  { name: "Xero", verified: true },
  { name: "MYOB", verified: false },
  { name: "QuickBooks", verified: false },
  { name: "ATO", verified: false },
  { name: "CA ANZ", verified: false },
  { name: "CPA Australia", verified: false },
];

// Australian banks clients commonly connect via bank feeds
export const banks: Partner[] = [
  { name: "CommBank", verified: false },
  { name: "NAB", verified: false },
  { name: "Westpac", verified: false },
  { name: "ANZ", verified: false },
  { name: "Macquarie", verified: false },
  { name: "Bendigo Bank", verified: false },
  { name: "St.George", verified: false },
  { name: "ING", verified: false },
];
