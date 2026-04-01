export const revenueMeta = {
  sectionNumber: "11",
  title: "Revenue Model",
  subtitle:
    "Standard VC fund economics applied to PhyCap Fund I. Management fees fund operations; carried interest aligns GP incentives with LP returns over the long term.",
  keyTakeaway:
    "At a $10M fund size, management fee revenue (~$200K/year at 2%) constrains operational spending. The GP team is likely earning below-market compensation during Fund I, reflecting a bet on carried interest realized 5 to 10 years out. Brand and content investments must be highly efficient.",
};

export const revenueStats = [
  {
    value: "$10M",
    label: "Fund I Target Size",
    note: "Seed to Series A healthcare venture. $150K to $500K check sizes.",
  },
  {
    value: "~$200K",
    label: "Annual Mgmt Fee Revenue",
    note: "At 2% of committed capital during the investment period.",
  },
  {
    value: "20%",
    label: "Carried Interest",
    note: "Standard carry on profits above the 8% preferred return hurdle.",
  },
  {
    value: "3x to 5x",
    label: "Target Net Returns",
    note: "Seed-stage healthcare VC benchmark for strong performance.",
  },
];

export const revenueComponents = [
  {
    title: "Management Fee",
    description:
      "Annual fee charged to committed capital to cover operational expenses: GP compensation, fund administration, legal, compliance, travel, and marketing.",
    range: "1.5% to 2.5% of committed capital annually",
    fundINote:
      "At $10M, this generates approximately $200K/year. Covers a lean operation. GPs are likely earning below-market salaries, typical for emerging managers.",
  },
  {
    title: "Carried Interest (Carry)",
    description:
      "The fund's share of investment profits, paid after LPs receive their capital back plus a preferred return (the hurdle rate).",
    range: "Typically 20% of profits above 8% hurdle",
    fundINote:
      "If Fund I returns 3x ($30M), gross profit is $20M. After the hurdle and GP catch-up, the carry pool is approximately $4M distributed across GPs.",
  },
];

export const physicianLPProfile = {
  incomeRange: "$250K to $600K+",
  studentDebt: "$200K to $400K+",
  minimumInvestment: "$25K to $100K (typical range for emerging healthcare VC)",
  holdPeriod: "10 years with optional 1 to 2 year extensions",
  capitalCalls: "Spread over 3 to 5 years in 4 to 6 installments",
};

export const physicianFamiliarityGaps = [
  "Capital call mechanics",
  "LP Advisory Committee (LPAC) governance",
  "Fund reporting (quarterly/annual letters, capital account statements)",
  "Vintage year benchmarking",
  "J-curve dynamics",
];

export const lpFacingTopics = [
  { topic: "Fund structure overview", reason: "LPs need to understand how their capital is managed" },
  { topic: "Fee structure summary", reason: "LPs evaluate fee levels as part of commitment decisions" },
  { topic: "Alignment of interests", reason: "LPs want to know GPs have skin in the game" },
  { topic: "Fund timeline", reason: "LPs need to understand the 10-year commitment" },
  { topic: "Return expectations framework", reason: "LPs assess risk/reward relative to other options" },
];

export const fundIIPath = [
  {
    label: "Fund II Target",
    value: "$20M to $30M",
    note: "Generates $400K to $600K+ in annual management fees",
  },
  {
    label: "Enables",
    value: "Dedicated Staff",
    note: "Marketing/content staff, event production, sophisticated LP reporting",
  },
  {
    label: "Prerequisite",
    value: "Fund I Track Record",
    note: "Fund I performance is the foundation for Fund II fundraising",
  },
];

export const ancillaryRevenue = [
  {
    source: "Advisory Fees",
    recommendation: "Not recommended for Fund I",
    reason: "Uncommon at seed stage; can create misaligned incentives with portfolio companies.",
  },
  {
    source: "Event Revenue (WHN Sponsorship)",
    recommendation: "Selective cost offset only",
    reason: "Monetizing Women's Health Nexus risks compromising its mission-driven positioning.",
  },
  {
    source: "Content Monetization",
    recommendation: "Free content for 12 to 18 months",
    reason: "Building audience is more valuable than revenue at this stage. Consider paid subscriptions later.",
  },
];
