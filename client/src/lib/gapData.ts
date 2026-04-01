export const perceptionBanner =
  "PhyCap presents as a credible, physician-led fund with strong visual consistency and a defensible thesis, but significant gaps in portfolio credibility, funnel integrity, and verbal differentiation prevent the brand from reaching the authority level the underlying product deserves.";

export const perceptionScores: {
  dimension: string;
  score: number;
  status: string;
  summary: string;
  toImprove: string;
}[] = [
  {
    dimension: "Brand Clarity",
    score: 5,
    status: "Amber",
    summary: "Thesis is clear. Tagline is memorable. But positioning statement is vague, naming is inconsistent, FortySix relationship is unexplained, and MHCDS is invisible.",
    toImprove: "Replace positioning statement. Establish naming conventions. Explain FortySix relationship. Build MHCDS narrative.",
  },
  {
    dimension: "Digital Presence",
    score: 5,
    status: "Amber",
    summary: "Professional design, consistent visual identity, active LinkedIn (1,132 followers). But LEARN/INVEST/PITCH pages are inaccessible, contact email routes through @46.capital, and no portfolio showcase exists.",
    toImprove: "Resolve page accessibility. Establish @phycapfund.com. Add portfolio showcase. Redesign Resources page.",
  },
  {
    dimension: "Content Quality",
    score: 7,
    status: "Green",
    summary: "8+ articles on relevant topics. Appropriate thought leadership tone. Active webinar series. Podcast appearances on Becker's, The Imaging Wire, The Surgeon's Record.",
    toImprove: "Coordinated GP content system. Visual content templates. Cross-linking. SEO optimization.",
  },
  {
    dimension: "Market Awareness",
    score: 4,
    status: "Amber",
    summary: "Recognized in physician-led VC niche (RyOrtho, Becker's). Women's Health Nexus drew 200+. Not yet recognized in broader healthcare VC conversation.",
    toImprove: "PR push around MHCDS. Annual Women's Health Nexus franchise. GP personal brands at full cadence.",
  },
  {
    dimension: "Portfolio Credibility",
    score: 2,
    status: "Red",
    summary: "BioReact is the only publicly confirmed company. No case studies, logos, founder testimonials, or outcome data on the website.",
    toImprove: "Add BioReact showcase. Create anonymized case study template. Collect founder testimonials. Display media logos.",
  },
  {
    dimension: "Visual Identity Completeness",
    score: 6,
    status: "Green",
    summary: "Palette applied consistently. Photography style is distinctive. Logo usage is uniform. But only two PNG logo files are documented; no SVG, favicon, or complete asset kit.",
    toImprove: "Confirm typography. Produce full logo asset kit. Document photo treatment preset. Build AI graphics prompt.",
  },
  {
    dimension: "Verbal Consistency",
    score: 4,
    status: "Amber",
    summary: "Tagline is used consistently. But the brand alternates between empowerment, community, and precision language with no clear hierarchy. Phrases flagged for retirement still appear.",
    toImprove: "Adopt messaging hierarchy. Retire identified phrases. Operationalize 'moment of truth' frame.",
  },
  {
    dimension: "Funnel Integrity",
    score: 3,
    status: "Red",
    summary: "LP path breaks at INVEST page (inaccessible). Founder path breaks at PITCH page (inaccessible). Multiple competing CTAs. Contact email at @46.capital.",
    toImprove: "Resolve LEARN/INVEST/PITCH accessibility. Clear CTA hierarchy per audience. Documented follow-up sequences.",
  },
];

export const averageScore = 4.5;

export const funnelAudits: {
  funnel: string;
  stages: { stage: string; severity: string; detail: string }[];
}[] = [
  {
    funnel: "Physician LP Path",
    stages: [
      { stage: "Awareness", severity: "Moderate", detail: "Content quality is strong. Podcast appearances on credible outlets. But SEO presence is minimal, no paid acquisition, no 'As Seen In' section. GP personal brands are primary driver but not at full cadence." },
      { stage: "Community", severity: "High", detail: "Multiple email capture points. Medical Specialty field enables segmentation. But LEARN page is inaccessible, no post-signup nurture sequence documented, and no clear mechanism to move from 'interested' to 'qualified.'" },
      { stage: "Qualification", severity: "High", detail: "Multiple competing CTAs create choice paralysis: JOIN NOW, Book a 1:1 Call, Schedule time, INVEST WITH US. No accredited investor verification visible. No FAQ or 'What to Expect' content." },
      { stage: "Investment", severity: "Critical", detail: "INVEST page is not publicly reachable. A physician who decides to explore investing clicks 'INVEST WITH US' and hits a dead end. Revenue-impacting issue." },
    ],
  },
  {
    funnel: "Healthcare Founder Path",
    stages: [
      { stage: "Discovery", severity: "Moderate", detail: "Investment thesis is clearly stated. Three focus areas are specific enough for self-qualification. But no dedicated founder-facing landing page exists." },
      { stage: "Pitch Submission", severity: "Critical", detail: "PITCH page is inaccessible. No alternative submission path visible (no email for pitches, no application link, no 'How to Pitch' guide)." },
      { stage: "Diligence", severity: "Moderate", detail: "The tagline implies a rigorous process, and the GP roster suggests multi-specialty review, but nothing public explains what diligence involves." },
      { stage: "Investment", severity: "Moderate", detail: "BioReact is only publicly confirmed investment. No portfolio logos, case studies, or founder testimonials." },
    ],
  },
];

export const gapInventory: {
  id: number;
  title: string;
  severity: string;
  currentState: string;
  desiredState: string;
  action: string;
}[] = [
  {
    id: 1,
    title: "MHCDS Credential Is Invisible",
    severity: "Critical",
    currentState: "MHCDS appears after names on the team page. No explanation anywhere on website, LinkedIn, or Resources content.",
    desiredState: "Dedicated content pillar explaining what MHCDS is and how it changes diligence. Referenced in positioning statement and GP profiles.",
    action: "Create MHCDS explainer article. Incorporate into positioning statement. Add to GP bios.",
  },
  {
    id: 2,
    title: "Conversion Pages Not Accessible",
    severity: "Critical",
    currentState: "LEARN, INVEST, PITCH, and DISCLOSURES pages return errors or are inaccessible.",
    desiredState: "Pages are publicly accessible with appropriate gating, or navigation clearly indicates authentication is required.",
    action: "Clarify if pages are gated, broken, or in development. Fix or add appropriate messaging.",
  },
  {
    id: 3,
    title: "Contact Email Routes Through FortySix",
    severity: "High",
    currentState: "Website displays info@46.capital. No @phycapfund.com email visible.",
    desiredState: "info@phycapfund.com as primary contact with co-management relationship explained.",
    action: "Establish @phycapfund.com. Update contact page. Add co-management disclosure.",
  },
  {
    id: 4,
    title: "No Portfolio Showcase",
    severity: "High",
    currentState: "BioReact is only confirmed company (via PitchBook). No portfolio section on website.",
    desiredState: "Portfolio page with BioReact showcase, template for future companies, and at least one founder testimonial.",
    action: "Create BioReact showcase. Design portfolio template. Collect founder testimonials.",
  },
  {
    id: 5,
    title: "Positioning Statement Is Vague",
    severity: "High",
    currentState: "Current statement could be used by any healthcare fund without modification.",
    desiredState: "Statement names MHCDS GPs, 13+ specialty diligence, and the moment of truth investment frame.",
    action: "Adopt replacement positioning statement. Retire 'transformative initiative' and 'shaping the future.'",
  },
  {
    id: 6,
    title: "Diligence Process Is Not Visible",
    severity: "High",
    currentState: "Tagline says 'Investing with Clinical Precision' but the website never shows the process.",
    desiredState: "'How We Evaluate' section showing the process step by step and mapping GP specialties to clinical questions.",
    action: "Create diligence process content for website.",
  },
  {
    id: 7,
    title: "CTA Hierarchy Is Unclear",
    severity: "Medium",
    currentState: "Multiple competing CTAs per page with no audience-specific hierarchy.",
    desiredState: "One primary CTA per audience per page with clear visual hierarchy.",
    action: "Map CTA hierarchy per page per audience. Redesign button treatments.",
  },
  {
    id: 8,
    title: "No Event Brand System",
    severity: "Medium",
    currentState: "Women's Health Nexus drew 200+ attendees but has no event branding, recap, or franchise positioning.",
    desiredState: "Annual signature event with its own visual identity, dedicated landing page, and post-event content.",
    action: "Design event brand system. Create landing page. Position as annual franchise.",
  },
  {
    id: 9,
    title: "Team Page Uses Accordion Format",
    severity: "Medium",
    currentState: "GP bios hidden behind accordion clicks. No narrative connects roster to diligence advantage.",
    desiredState: "Grid format with visible micro-bios and specialty-to-diligence mapping.",
    action: "Redesign team page layout.",
  },
  {
    id: 10,
    title: "No Media or Press Section",
    severity: "Medium",
    currentState: "Earned press (RyOrtho, Becker's) and podcasts exist but no 'As Seen In' section.",
    desiredState: "Press section with media logos and links to articles and podcast episodes.",
    action: "Collect media logos. Design 'As Seen In' section.",
  },
  {
    id: 11,
    title: "Logo Asset Kit Incomplete",
    severity: "Medium",
    currentState: "Only two CDN-hosted PNGs confirmed. No SVG, high-res, icon-only, stacked lockup, or favicon.",
    desiredState: "Complete logo asset kit with SVG, multiple PNGs, favicon, and social media versions.",
    action: "Produce full logo asset kit.",
  },
  {
    id: 12,
    title: "Typography Not Formally Confirmed",
    severity: "Low",
    currentState: "Resolved. Marcellus (headlines) and Roboto (body) confirmed from live site inspection.",
    desiredState: "Exact font names, weights, and sizes documented. Done.",
    action: "Complete.",
  },
  {
    id: 13,
    title: "No Founder-Facing Content",
    severity: "Medium",
    currentState: "No 'How to Pitch' guide, no pitch criteria page, no founder testimonials.",
    desiredState: "Founder section with pitch guidelines, diligence process, timeline, and at least one testimonial.",
    action: "Create founder-facing content.",
  },
];

export const gapSeveritySummary = [
  { severity: "Critical", count: 2, gaps: "MHCDS invisible, conversion pages inaccessible" },
  { severity: "High", count: 4, gaps: "Contact email, portfolio showcase, positioning statement, diligence process" },
  { severity: "Medium", count: 6, gaps: "CTA hierarchy, event brand, team page, media section, logo assets, founder content" },
  { severity: "Low", count: 1, gaps: "Typography confirmation (resolved)" },
];
