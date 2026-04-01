// Product (Investment Strategy) data extracted from investment-strategy.md, differentiators.md

export const fundOverview = [
  { value: "$10M", label: "Fund I Target", note: "Co-managed with FortySix Venture Capital." },
  { value: "$150K-$500K", label: "Check Size Range", note: "Seed to Series A. Upper end can lead a seed round." },
  { value: "15-25", label: "Target Portfolio Companies", note: "Allows diversification while maintaining meaningful ownership." },
  { value: "30-40%", label: "Follow-on Reserve", note: "Reserves protect ownership in winning portfolio companies." },
];

export const thesisAreas = [
  {
    name: "Clinical Care Delivery Workflow Optimization",
    description: "Tools that make clinical work function better, evaluated by the people who do that work. EHR friction, care coordination gaps, clinical decision support failures.",
    origin: "Physicians experience workflow inefficiency daily. These are not abstract market categories for PhyCap's GPs; they are Tuesday afternoon problems.",
  },
  {
    name: "Software as a Medical Device (SaMD), FDA Class I/II",
    description: "Software that requires both clinical understanding and regulatory fluency. Class I/II focus keeps regulatory pathways manageable for seed-stage companies.",
    origin: "PhyCap's physician GPs bring the clinical evaluation side. The Class I/II scope avoids longer timelines and higher capital of Class III devices.",
  },
  {
    name: "Women's Health and Health Inequity",
    description: "A market opportunity (historically underfunded relative to size) and a values alignment. Women's Health Nexus event proves PhyCap is building the ecosystem, not just deploying capital.",
    origin: "The Women's Health Nexus (200+ attendees, Congressional Country Club) is evidence of active ecosystem building.",
  },
];

export const thesisExclusions = [
  "Life sciences",
  "Pharmaceuticals",
];

export const portfolioConstruction = {
  headers: ["Parameter", "Target", "Rationale"],
  rows: [
    ["Total investments", "15-25 companies", "$10M fund with $150K-$500K checks. Diversification while maintaining ownership."],
    ["Thesis allocation", "Roughly balanced across three areas", "Avoids over-concentration. Builds pattern recognition across all thesis areas."],
    ["Reserve strategy", "30-40% of fund reserved", "Seed-stage portfolio construction requires follow-on capacity."],
    ["Geographic focus", "US-based, no regional restriction", "Tulsa HQ provides Midwest access; thesis areas produce companies nationally."],
    ["Stage discipline", "First check at Seed, follow-on at Series A", "Prevents scope creep into later rounds where check size is less impactful."],
  ],
};

export const diligenceAdvantages = [
  {
    title: "Specialty-Matched Evaluation",
    description: "A SaMD for radiology workflows is evaluated by a radiologist GP. A Women's Health diagnostic is evaluated by an OB-GYN GP. Diligence maps directly to the product's clinical use case.",
  },
  {
    title: "Clinical Workflow Validation",
    description: "GPs assess whether a product's claimed workflow improvement is real, marginal, or dependent on conditions that do not exist in typical practice settings. Faster and more accurate than survey-based validation.",
  },
  {
    title: "Adoption Prediction",
    description: "Physicians adopt tools based on EHR integration friction, liability concerns, reimbursement alignment, and peer behavior. PhyCap's GPs assess adoption likelihood with specificity that market research cannot match.",
  },
];

export const fundRoadmap = [
  {
    phase: "Phase 1: Fund I Deployment",
    timeline: "Current through 2027",
    milestones: [
      "Complete deployment across 15-25 thesis-aligned investments",
      "5+ portfolio companies publicly announced",
      "First portfolio case study published",
      "Innovation Circle reaches 50+ active members",
      "Fund I fully committed",
    ],
  },
  {
    phase: "Phase 2: Track Record Development",
    timeline: "2027-2028",
    milestones: [
      "3+ portfolio companies with measurable clinical milestones",
      "Co-investor relationships with 5+ healthcare-focused VCs",
      "LP reporting cadence established and refined",
      "Fund II thesis refinement based on Fund I pattern recognition",
    ],
  },
  {
    phase: "Phase 3: Fund II Preparation",
    timeline: "2028-2029",
    milestones: [
      "Fund II target size determined (expected 2-3x Fund I)",
      "Fund I early performance data available",
      "PhyCap brand recognition among healthcare founders",
      "Innovation Circle functioning as self-sustaining community",
    ],
  },
];

export const innovationCircleTargets = {
  headers: ["Timeline", "Membership Target"],
  rows: [
    ["Current", "Baseline (exact count to be documented)"],
    ["End of 2026", "50+ active members"],
    ["End of 2027", "100+ active members"],
    ["End of 2028", "200+ members with structured engagement tiers"],
  ],
};

export const differentiators = [
  {
    title: "Every GP is a Physician with Named Specialties",
    claim: "10 GPs, 168+ years across 13+ specialties. Every decision-maker is a physician with a named specialty.",
    vsCompetitor: "Scrub Capital has 4 GPs and a broad clinician community (nurses, PTs, pharmacists). Doctors Innovate Fund has passive physician LPs.",
    durability: "High",
    risk: "Recruiting 10+ physician GPs across 13+ specialties takes years of relationship building.",
  },
  {
    title: "Three Thesis Areas with Explicit Exclusions",
    claim: "Workflow Optimization, SaMD (FDA Class I/II), Women's Health. Explicit exclusions: life sciences, pharmaceuticals.",
    vsCompetitor: "Scrub Capital casts a wider net (13 companies across menopause, spine, fertility, pediatrics, safety). Doctors Innovate Fund is platform-constrained.",
    durability: "Medium",
    risk: "Thesis can be copied, but pattern recognition from deployment cannot.",
  },
  {
    title: "Women's Health Nexus Event Franchise",
    claim: "200+ attendees at Congressional Country Club, November 2025. No other physician-led VC has a comparable owned Women's Health event.",
    vsCompetitor: "Scrub co-hosted 'Healthcare, Unscripted' (100 attendees, co-branded, general). Not category-specific.",
    durability: "High",
    risk: "First-mover advantage in category events is durable. Hard for newcomers to match quality immediately.",
  },
  {
    title: "Check Size Enables Lead at Seed",
    claim: "$150K-$500K range. Upper end leads seed rounds for board/observer seats and meaningful influence.",
    vsCompetitor: "Scrub writes $100K-$300K. Their upper bound is PhyCap's near-lower bound.",
    durability: "Medium",
    risk: "Check size is a function of fund size and can be matched by future funds.",
  },
  {
    title: "Tulsa HQ with National Reach",
    claim: "One of the only physician-led healthcare VC funds based outside coastal VC corridors.",
    vsCompetitor: "Scrub, Doctors Innovate, LRVHealth, Rock Health, SV Health all operate from traditional VC geographies.",
    durability: "High",
    risk: "Geographic identity is inherent. Midwest/Southern healthcare systems are underserved by coastal funds.",
  },
];

export const productKeyTakeaway =
  "PhyCap's investment strategy originates from clinical practice, not from market analysis layered onto healthcare. The three thesis areas reflect problems the GP team encounters daily. The exclusion of life sciences and pharmaceuticals is deliberate: those categories require different capital structures and different expertise. Fund I is a proof point that physician-led clinical evaluation produces differentiated returns, justifying Fund II at 2-3x the size.";
