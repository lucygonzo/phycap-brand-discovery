export const companyMeta = {
  legalName: "Physicians Capital Fund",
  operatingName: "PhyCap",
  fundName: "Physicians Capital Fund I (2024 vintage)",
  headquarters: "12 N Cheyenne Ave, Tulsa, OK 74103",
  targetFundSize: "$10M",
  checkSize: "$150K to $500K",
  stage: "Seed through Series A",
  exclusions: "Life sciences, pharmaceuticals",
  portfolio: "BioReact (publicly confirmed)",
  coManager: "FortySix Capital",
};

export const companyStats = [
  { value: "168+", label: "Years Combined Clinical Experience", note: "Across the full GP roster, spanning 13+ medical specialties." },
  { value: "10", label: "GP Team Members", note: "Physicians and healthcare professionals covering the full clinical lifecycle." },
  { value: "500+", label: "Deals Screened Annually", note: "Inbound from GP networks, events, and applications." },
  { value: "2024", label: "Fund Vintage", note: "Inaugural fund. Actively raising." },
];

export const namingRules = [
  { context: "Conversation / pitch (always)", name: "PhyCap" },
  { context: "First written mention", name: "PhyCap (Physicians Capital Fund), then PhyCap thereafter" },
  { context: "Legal / SEC documents", name: "Physicians Capital Fund" },
  { context: "Fund vehicle reference", name: "PhyCap Fund I" },
  { context: "Rule", name: "Do not alternate between all three within a single piece." },
];

export const namingPronunciation = {
  phonetic: "FY-cap",
  origin: "The \"Phy\" comes from Physician. The Ph is pronounced like \"Physician,\" not like \"physical.\"",
  verbalRule: "We are PhyCap, not FICAP.",
};

export const namingNeverList = [
  { wrong: "Phy Cap", reason: "Two words. Always one word." },
  { wrong: "PHYCAP", reason: "All caps. Never." },
  { wrong: "Phycap", reason: "Lowercase c. The C is always capitalized." },
  { wrong: "PhyCap Ventures", reason: "Ventures is not part of the name." },
  { wrong: "FICAP", reason: "Mispronunciation. The Ph is from Physician." },
];

export const investmentAreas = [
  {
    title: "Clinical Care Delivery Workflow Optimization",
    description: "Technologies that improve how care is delivered at the point of contact between physician and patient.",
  },
  {
    title: "Software as a Medical Device (SaMD)",
    description: "FDA Class I and Class II software products that function as medical devices.",
  },
  {
    title: "Women's Health and Health Inequity",
    description: "Solutions addressing historically underserved patient populations, with emphasis on women's healthcare.",
  },
];

export const gpRoster: {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  diligenceLens: string;
}[] = [
  {
    name: "Paul Slosar",
    role: "Lead GP, Co-Founder",
    specialty: "Orthopedics / Spine Surgery",
    credentials: "MD, MHCDS, Harvard Business School",
    diligenceLens: "Evaluates whether surgical workflow tools survive contact with actual operating room practice. 28 years of spine surgery, 11 years as CMO of Titan Spine (acquired by Medtronic 2019). MHCDS systems-level analysis of delivery impact.",
  },
  {
    name: "Robin Noble",
    role: "GP",
    specialty: "OB-GYN",
    credentials: "MD, MHCDS (Columbia MD, Yale residency, Harvard Surgical Leadership)",
    diligenceLens: "Reviews women's health deals with clinical authority of 20+ years of OB-GYN practice. Evaluates whether products address genuine clinical gaps vs. market gaps. Chief Medical Advisor, Let's Talk Menopause.",
  },
  {
    name: "Vipul Kella",
    role: "GP",
    specialty: "Emergency Medicine",
    credentials: "MD, MBA",
    diligenceLens: "Tests whether technology survives the chaos, urgency, and unpredictability of an emergency department. Catches products that work in demos but fail under real-time clinical pressure.",
  },
  {
    name: "Tim Martens",
    role: "GP",
    specialty: "Pediatric Cardiothoracic Surgery",
    credentials: "MD, PhD",
    diligenceLens: "Evaluates from the highest-acuity clinical environment. Signals to LPs that the GP bench operates at the top of clinical fields, not as career-switchers.",
  },
  {
    name: "Fred Liss",
    role: "GP",
    specialty: "Orthopedics / Hand Surgery",
    credentials: "MD",
    diligenceLens: "Extends musculoskeletal coverage to hand surgery and outpatient surgical workflows. Fine motor rehabilitation and ambulatory surgery center environments.",
  },
  {
    name: "Joseph Jasser",
    role: "GP",
    specialty: "Internal Medicine",
    credentials: "MD, MBA",
    diligenceLens: "Covers chronic disease management, preventive care, and care coordination. Most healthcare tech products eventually touch an internist's workflow.",
  },
  {
    name: "Giovanni Lorenz",
    role: "GP",
    specialty: "Radiology / Cardiothoracic",
    credentials: "MD",
    diligenceLens: "Brings direct expertise in the category most transformed by AI and software-based diagnostics. Evaluates imaging AI and diagnostic SaMD products.",
  },
  {
    name: "Alex Tang",
    role: "GP",
    specialty: "Physician Assistant",
    credentials: "PA-C, MBA",
    diligenceLens: "Only non-physician clinician on the GP team. PAs operate at the clinical frontline with greater exposure to workflow inefficiencies. Catches products designed only for physicians that ignore team-based care.",
  },
  {
    name: "Jerald Dawkins",
    role: "GP",
    specialty: "Research",
    credentials: "PhD",
    diligenceLens: "Research depth for evidence evaluation and clinical evidence plan assessment.",
  },
  {
    name: "Dutch Rojas",
    role: "Co-Founder",
    specialty: "Operations / Strategy",
    credentials: "Non-clinical",
    diligenceLens: "Credited with the original PhyCap concept. Operational and strategic leadership. Media presence via The Rojas Report (Substack).",
  },
];

export const lifecycleCoverage = [
  { domain: "Neonatal / Pediatric", gp: "Tim Martens", specialty: "Pediatric Cardiothoracic Surgery" },
  { domain: "Reproductive / Women's Health", gp: "Robin Noble", specialty: "OB-GYN" },
  { domain: "Acute / Emergency", gp: "Vipul Kella", specialty: "Emergency Medicine" },
  { domain: "Musculoskeletal (Spine)", gp: "Paul Slosar", specialty: "Orthopedics / Spine Surgery" },
  { domain: "Musculoskeletal (Upper Extremity)", gp: "Fred Liss", specialty: "Orthopedics / Hand Surgery" },
  { domain: "Chronic / Primary Care", gp: "Joseph Jasser", specialty: "Internal Medicine" },
  { domain: "Diagnostic / Imaging", gp: "Giovanni Lorenz", specialty: "Radiology / Cardiothoracic" },
  { domain: "Frontline Workflow", gp: "Alex Tang", specialty: "Physician Assistant" },
  { domain: "Systems Architecture", gp: "Paul Slosar + Robin Noble", specialty: "MHCDS" },
];

export const foundingWhyNow = [
  { title: "Physician Empowerment Wave", detail: "Multiple physician-focused funds launched 2020-2024. PhyCap enters with a sharper thesis and deeper clinical bench than any existing fund." },
  { title: "Digital Health Maturation", detail: "Post-hype correction (2022-2023) means clinical validation now matters more than growth metrics. PhyCap's diligence model is optimally positioned." },
  { title: "Women's Health Momentum", detail: "FemTech and women's health VC funding grew significantly through 2023-2025. PhyCap's explicit Women's Health pillar captures deals while competitors add it as an afterthought." },
  { title: "MHCDS Network Maturity", detail: "Dartmouth's program has produced 500+ senior healthcare leaders since approximately 2010. Paul and Robin are embedded in this decision-maker network." },
];

export const fortySixRelationship = {
  whatFortySixDoes: [
    "Fund administration",
    "Legal infrastructure",
    "Operational support",
  ],
  whatPhyCapDoes: [
    "Investment thesis",
    "Deal sourcing",
    "Clinical diligence",
    "Portfolio support",
    "LP relationships",
  ],
  whenToMention: [
    "Formal fund documents",
    "PitchBook listings",
    "Operational disclosures",
  ],
  whenNotToMention: [
    "Marketing content",
    "LP recruitment materials",
    "Founder-facing materials",
    "Social media",
  ],
  emailIssue: "info@46.capital routes through FortySix Capital. Recommendation: establish hello@phycapfund.com or invest@phycapfund.com for brand-facing communications.",
};
