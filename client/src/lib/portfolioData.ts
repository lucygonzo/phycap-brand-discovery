export const portfolioMeta = {
  sectionNumber: "12",
  title: "Portfolio Showcase",
  subtitle:
    "Portfolio presentation strategy and clinical validation framework. Lead with clinical depth, protect confidentiality, show the PhyCap value-add.",
  keyTakeaway:
    "BioReact is the only publicly confirmed portfolio company. As the sole visible investment, it carries outsized weight in how founders, LPs, and competitors perceive PhyCap's judgment. The showcase must be built right before it is built fast.",
};

export const portfolioStats = [
  {
    value: "1",
    label: "Public Portfolio Company",
    note: "BioReact. Additional investments may exist but are not publicly disclosed.",
  },
  {
    value: "3",
    label: "Thesis Pillars",
    note: "Clinical Workflow, SaMD (FDA Class I/II), Women's Health / Health Inequity.",
  },
  {
    value: "$150K-$500K",
    label: "Check Size Range",
    note: "Seed to Series A. Thesis-filtered for clinical moment of truth.",
  },
  {
    value: "4",
    label: "Showcase Phases",
    note: "From single company (now) to 15+ company portfolio page with case studies.",
  },
];

export const showcasePrinciples = [
  {
    title: "Lead with Clinical Validation",
    body: "Portfolio showcases emphasize the clinical problem, the clinical evidence, and the clinical expertise PhyCap brought to diligence. Financial metrics are secondary and often confidential at seed stage.",
  },
  {
    title: "Protect Confidentiality by Default",
    body: "Assume maximum privacy. Selectively add public information with explicit company approval. Never publish financials, customer names, or strategic plans without written consent.",
  },
  {
    title: "Show the PhyCap Value-Add",
    body: "Each showcase includes how PhyCap's clinical expertise contributed to the investment decision or post-investment support. This is the proof point behind Insider Precision.",
  },
  {
    title: "Maintain Visual Consistency",
    body: "All showcases use the same template, color system, and information architecture. Consistency signals professionalism as the portfolio grows.",
  },
];

export const showcasePhases = [
  {
    phase: "Phase 1: 1 to 3 Companies",
    status: "Current",
    items: [
      "Individual showcase cards with maximum detail per company",
      "BioReact sets the quality standard for all future showcases",
      "No dedicated portfolio page yet; reference in fund overview materials",
      "Focus on getting the BioReact showcase right first",
    ],
  },
  {
    phase: "Phase 2: 4 to 8 Companies",
    status: "Planned",
    items: [
      "Build dedicated portfolio section on website or Brand HQ",
      "Grid layout with logos, descriptions, and thesis area tags",
      "Click-through to individual showcase pages",
      "Begin developing thesis-area groupings",
    ],
  },
  {
    phase: "Phase 3: 9 to 15 Companies",
    status: "Future",
    items: [
      "Portfolio becomes a credibility asset in LP conversations",
      "Add filtering by thesis area, stage, and year",
      "Develop 2 to 3 detailed case studies with company cooperation",
      "Use portfolio page as social proof in founder outreach",
    ],
  },
  {
    phase: "Phase 4: 15+ Companies",
    status: "Future",
    items: [
      "Portfolio page is a standalone brand asset",
      "Published case studies anchor content strategy",
      "Portfolio composition data tells the thesis execution story",
      "Consider annual portfolio report (LP and public versions)",
    ],
  },
];

export const validationLevels = [
  {
    level: "Level 1: Problem Validation",
    requirement: "Minimum for all companies",
    description: "PhyCap GP clinical experience confirms the problem exists. No clinical data required.",
  },
  {
    level: "Level 2: Solution Validation",
    requirement: "GP evaluation documentation",
    description: "A PhyCap GP has directly assessed the product and confirmed specific clinical claims.",
  },
  {
    level: "Level 3: Evidence Validation",
    requirement: "Company-provided evidence",
    description: "Published data, completed pilot, or FDA clearance demonstrating clinical outcomes.",
  },
  {
    level: "Level 4: Impact Validation",
    requirement: "Real-world deployment data",
    description: "Measurable clinical outcomes observed across multiple deployment sites.",
  },
];

export const requiredFields = [
  { field: "Company Name", description: "Legal or DBA name (with permission)" },
  { field: "One-Line Description", description: "What the company does in 15 words or fewer" },
  { field: "Thesis Alignment", description: "Which PhyCap thesis area(s) the company maps to" },
  { field: "Stage at Investment", description: "Seed, Pre-Seed, or Series A" },
  { field: "Clinical Problem", description: "The clinical workflow pain point or health inequity targeted" },
  { field: "Logo", description: "Company logo for portfolio page (with permission)" },
  { field: "Website URL", description: "Public company website" },
];

export const confidentialitySteps = [
  "Confirm company is publicly disclosed as a PhyCap investment",
  "Share specific showcase content with the portfolio company for review",
  "Confirm co-investor disclosure (requires their explicit consent)",
  "Review regulatory sensitivity (pre-clearance SaMD restrictions)",
  "Document approval with date, content approved, and approving contact",
];
