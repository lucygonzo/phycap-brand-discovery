export const decisionLogMeta = {
  sectionNumber: "16",
  title: "Decision Log",
  subtitle:
    "Confirmed decisions are final unless explicitly reopened. Pending decisions carry best-guess recommendations proceeding as if confirmed until Kate redirects on Friday, April 3.",
  keyTakeaway:
    "Seven decisions are confirmed (palette, logos, GP content priorities, no em dashes, service mark, three thesis pillars, and typography). Seven pending decisions await Kate's input on April 3, with recommended directions already applied to vault files.",
};

export const confirmedDecisions = [
  {
    id: 1,
    title: "Color Palette",
    date: "Pre-vault (brand discovery)",
    owner: "Kate / Brand Lead",
    summary:
      "Forest #122620 (primary), Gold #D3B184 (sole accent), Blue Black #070808, Dark Slate #1F2D35, Cream #F5F2F0, plus White and Black utility. Slate #404447 retired.",
  },
  {
    id: 2,
    title: "Logo Assets (2 Files Confirmed)",
    date: "Pre-vault (brand discovery)",
    owner: "Kate / Brand Lead",
    summary:
      "logo-dark-120.png for light backgrounds, logo-120.png for dark backgrounds. Both 120px PNGs. Full asset kit still pending.",
  },
  {
    id: 3,
    title: "GP Content Priorities",
    date: "Pre-vault (brand discovery)",
    owner: "Brand Lead with GP input",
    summary:
      "Paul 3x/week (self-directed), Vipul 2x/week (ideas bank), Robin 2x/week (ghostwriting support), Tim 1x/week (community and events).",
  },
  {
    id: 4,
    title: "No Em Dashes in Any Content",
    date: "Pre-vault (brand rule)",
    owner: "Brand Lead",
    summary:
      "Em dashes prohibited in all PhyCap content. Use periods, colons, parentheses, or restructure. Supports the Insider Precision archetype's measured, deliberate voice.",
  },
  {
    id: 5,
    title: "Service Mark: Investing with Clinical Precision",
    date: "Pre-vault (brand discovery)",
    owner: "Kate / GP team",
    summary:
      "Fixed tagline. Not up for revision or A/B testing. Use SM notation on first formal use. Do not paraphrase or rearrange.",
  },
  {
    id: 6,
    title: "Investment Thesis: Three Pillars",
    date: "Pre-vault (brand discovery)",
    owner: "GP team",
    summary:
      "1) Clinical Care Delivery Workflow Optimization. 2) SaMD, FDA Class I/II. 3) Women's Health and Health Inequity. Unified by \"the moment of truth in medicine.\"",
  },
  {
    id: 7,
    title: "Typography: Marcellus + Roboto",
    date: "March 31, 2026 (site inspection)",
    owner: "Confirmed by Lucy",
    summary:
      "Marcellus for headlines and display. Roboto for body, navigation, and labels. Both Google Fonts (Apache 2.0). No third typeface. Fallbacks: Georgia, Arial.",
  },
];

export const pendingDecisions = [
  {
    id: 1,
    title: "FortySix Capital Co-Brand Visibility",
    owner: "Kate + Dutch Rojas",
    urgency: "High",
    recommendation: "Option B: Subtle notation",
    description:
      "PhyCap is the sole public-facing brand. FortySix Capital appears only in small type: website footer, pitch deck legal page, and LP agreements.",
    fridayAction: "Confirm or redirect",
  },
  {
    id: 2,
    title: "Logo Assets: Full Kit",
    owner: "Kate",
    urgency: "Medium",
    recommendation: "Commission production",
    description:
      "Only two 120px PNGs exist. Need SVG, 1200px+ PNG, icon-only, stacked lockup, horizontal lockup, and favicon set in four color variants.",
    fridayAction: "Confirm logo is final; commission asset kit",
  },
  {
    id: 3,
    title: "Brand Archetype: Insider Precision",
    owner: "Kate",
    urgency: "High",
    recommendation: "Confirmed as governing archetype",
    description:
      "All 58 vault files built on this archetype. Evidence is strong across MHCDS credential, LP language, service mark, GP roster, and palette. Any Friday adjustment is a refinement, not a restart.",
    fridayAction: "Confirm or refine",
  },
  {
    id: 4,
    title: "LEARN/INVEST/PITCH Page Status",
    owner: "Kate + Dutch",
    urgency: "Medium",
    recommendation: "Gated with clear messaging",
    description:
      "Replace dead-end errors with landing pages. INVEST requires accredited investor verification. PITCH shows submission criteria. Add calendar links for next steps.",
    fridayAction: "Confirm page status",
  },
  {
    id: 5,
    title: "@phycapfund.com Email Domain",
    owner: "Kate + Dutch",
    urgency: "High",
    recommendation: "Immediate setup",
    description:
      "Establish info@phycapfund.com as primary. Domain already owned. Redirect info@46.capital during transition. All vault files already reference the new domain.",
    fridayAction: "Confirm timeline",
  },
  {
    id: 6,
    title: "Women's Health Nexus Positioning",
    owner: "Kate + Robin Noble",
    urgency: "Low (Phase 3)",
    recommendation: "Annual event + content series",
    description:
      "Position as annual signature convening (Q4 2026 target) with year-round content from Robin. November 2025 event proved the model (200+ attendees, law firm sponsors).",
    fridayAction: "Confirm scope",
  },
  {
    id: 7,
    title: "Portfolio Showcase: BioReact Visibility",
    owner: "Kate + Paul Slosar",
    urgency: "Low (Phase 2)",
    recommendation: "Logo + one-sentence description",
    description:
      "Display BioReact with logo and approved description. No deal terms. Establish standard portfolio card process for future companies.",
    fridayAction: "Confirm with BioReact",
  },
];

export const decisionAuthority = [
  { person: "Kate", scope: "All brand system and visual identity decisions" },
  { person: "Paul Slosar", scope: "Investment thesis language and fund positioning" },
  { person: "Individual GPs", scope: "Their own content and personal brand profiles" },
  { person: "Dutch Rojas", scope: "Fund structure, legal, and entity-level decisions" },
];
