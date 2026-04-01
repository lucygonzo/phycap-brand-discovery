export const colorPalette: {
  name: string;
  hex: string;
  role: string;
  usage: string;
  doNot: string;
  retired?: boolean;
}[] = [
  {
    name: "Forest",
    hex: "#122620",
    role: "Primary brand color",
    usage: "Header backgrounds, footer backgrounds, primary section backgrounds, CTA buttons on light backgrounds. Forest is the color that says 'PhyCap.'",
    doNot: "Use for body text (too dark-green at small sizes). Do not pair with Dark Slate in adjacent sections.",
  },
  {
    name: "Gold",
    hex: "#D3B184",
    role: "Sole accent color",
    usage: "Eyebrow labels, accent lines, dividers, icon highlights, hover states on Forest backgrounds. Gold appears sparingly. It marks what matters most.",
    doNot: "Overuse. Power comes from restraint. No more than 10-15% of a layout's accent elements. Never use as background or body text.",
  },
  {
    name: "Blue Black",
    hex: "#070808",
    role: "Dark workhorse",
    usage: "Body text on light backgrounds, secondary dark backgrounds, dark overlays. Functionally black without the harshness of pure #000000.",
    doNot: "Use where Forest should be. If the element is a 'PhyCap moment' (header, hero, branded card), use Forest instead.",
  },
  {
    name: "Dark Slate",
    hex: "#1F2D35",
    role: "Supporting dark",
    usage: "Secondary section backgrounds, card backgrounds on Forest sections, dropdown and navigation hover states. Adds depth without competing with Forest.",
    doNot: "Use as a primary background color. Dark Slate supports Forest; it does not replace it.",
  },
  {
    name: "Cream",
    hex: "#F5F2F0",
    role: "Warm light background",
    usage: "Alternating section backgrounds, form backgrounds, card backgrounds on white sections. Adds approachability without sacrificing professionalism.",
    doNot: "Use as text color. Use on Forest backgrounds (insufficient contrast).",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    role: "Primary light background",
    usage: "Primary page backgrounds, section backgrounds for data-heavy content, reversed text on dark backgrounds.",
    doNot: "Use pure white text directly on Gold (insufficient contrast).",
  },
  {
    name: "Black",
    hex: "#000000",
    role: "Utility only",
    usage: "SVG icon fills, maximum-contrast borders, print applications. In digital, prefer Blue Black #070808 for text and UI.",
    doNot: "Use as a background, body text, or brand color.",
  },
  {
    name: "Slate (RETIRED)",
    hex: "#404747",
    role: "Retired",
    usage: "Do not use in new materials. Replace with Dark Slate #1F2D35 or Blue Black #070808 depending on context.",
    doNot: "Use anywhere.",
    retired: true,
  },
];

export const paletteRatios = [
  { range: "60%", colors: "White + Cream", purpose: "Light backgrounds, breathing room" },
  { range: "25%", colors: "Forest + Blue Black", purpose: "Dark sections, text, structure" },
  { range: "10%", colors: "Dark Slate", purpose: "Depth, layering, secondary dark elements" },
  { range: "5%", colors: "Gold", purpose: "Accents, labels, the precision signal" },
];

export const typographyData = {
  headline: {
    font: "Marcellus",
    source: "Google Fonts (free, Apache 2.0)",
    classification: "Transitional serif with classical Roman letterform proportions",
    whyItWorks: "Carries the gravitas of carved stone inscriptions. Institutional and authoritative without being ornate.",
    weights: ["Regular (only weight available)"],
  },
  body: {
    font: "Roboto",
    source: "Google Fonts (free, Apache 2.0)",
    classification: "Neo-grotesque sans-serif with mechanical skeleton and friendly curves",
    whyItWorks: "Highly legible at all sizes. Clean, clinical feel that matches precision positioning without being cold.",
    weights: ["Regular (400) for body", "Medium (500) for navigation/UI", "Bold (700) for emphasis"],
  },
};

export const typeHierarchy = [
  { level: "Hero Headlines", font: "Marcellus", size: "48-72px / 32-48px mobile", lineHeight: "1.1-1.2", usage: "One per page. The single most important statement." },
  { level: "Section Headlines", font: "Marcellus", size: "32-40px / 24-32px mobile", lineHeight: "1.2-1.3", usage: "Major section dividers. 2-4 per page." },
  { level: "Subheadlines", font: "Roboto Semibold", size: "20-24px / 18-20px mobile", lineHeight: "1.3-1.4", usage: "Content section headers within major sections." },
  { level: "Body Copy", font: "Roboto Regular", size: "16-18px / 15-16px mobile", lineHeight: "1.5-1.6", usage: "All paragraph text. Max 65-75 characters per line." },
  { level: "Eyebrow Labels", font: "Roboto Medium/Semibold", size: "12-14px", lineHeight: "n/a", usage: "Uppercase, tracked (0.1-0.15em). Gold on dark, Forest on light." },
  { level: "Captions/Metadata", font: "Roboto Regular", size: "12-14px", lineHeight: "1.4", usage: "Image captions, dates, footer text. Subdued Dark Slate color." },
  { level: "Stat Numbers", font: "Marcellus or Roboto Bold", size: "48-72px", lineHeight: "1.0-1.1", usage: "Numbers as graphic elements: Gold, White, or Forest depending on background." },
];

export const logoData = {
  files: [
    { name: "logo-dark-120.png", use: "Light backgrounds (White, Cream)" },
    { name: "logo-120.png", use: "Dark backgrounds (Forest, Blue Black, Dark Slate)" },
  ],
  anatomy: [
    { element: "Primary mark", description: "P/C monogram with a stylized medical cross in the 'P.'" },
    { element: "Wordmark", description: "'PhyCap' in the brand serif typeface." },
    { element: "Full lockup", description: "'Physicians Capital Fund' as secondary wordmark for legal contexts." },
  ],
  safeZone: "Minimum 1X clear space on all sides (X = cap height of 'P'). Preferred 1.5X for primary placements.",
  missingAssets: [
    "SVG versions (monogram, wordmark, full lockup)",
    "High-res PNG (multiple resolutions)",
    "Icon-only mark (for favicon, avatars, app icons)",
    "Stacked lockup (monogram above wordmark)",
    "Favicon (.ico and .png)",
    "Social media profile and banner images",
    "One-color versions (white-only, black-only)",
  ],
};

export const designPrinciples = [
  {
    register: "Medical Editorial",
    description: "The authority of a peer-reviewed journal cover. Structured layouts, evidence-based content hierarchy, restrained typography.",
    references: "NEJM, JAMA, The Economist",
  },
  {
    register: "Luxury Membership",
    description: "The exclusivity signal of a private equity firm or premium club. Forest green and gold on cream evokes private banking and legacy institutions.",
    references: "Equinox, Bay Club, J.P. Morgan Private Bank",
  },
  {
    register: "Modern Venture Capital",
    description: "Clean digital design, responsive layout, generous whitespace, content-forward structure that feels current without chasing trends.",
    references: "Contemporary VC firm websites",
  },
];

export const competitorVisualMap = [
  { competitor: "Scrub Capital", palette: "Teal/turquoise, white", feel: "Fresh, community-forward, inclusive. More 'startup' than 'institution.'" },
  { competitor: "Doctors Innovate Fund", palette: "Blue, white, tech-forward", feel: "Institutional, Alumni Ventures parent brand. Data-driven, corporate." },
  { competitor: "LRVHealth", palette: "Professional blue/gray", feel: "Conservative, strategic, institutional. Similar to consulting firms." },
  { competitor: "Catalyst Health Ventures", palette: "Clinical/technical blue", feel: "MedTech focused, technical credibility." },
  { competitor: "SV Health Investors", palette: "Corporate blue/green", feel: "Global, institutional, established. Corporate PE feel." },
  { competitor: "Rock Health", palette: "Bright teal/coral", feel: "Digital health native, research-forward, modern." },
];

export const photoTreatment = {
  goal: "Desaturated, high-contrast, Forest-graded clinical photography. Approaching near-monochrome while retaining a trace of color temperature.",
  quickRef: [
    { setting: "Temperature", value: "-5 to -10 (cool)" },
    { setting: "Contrast", value: "+25 to +35" },
    { setting: "Highlights", value: "-40 to -50" },
    { setting: "Shadows", value: "+15 to +25" },
    { setting: "Global Saturation", value: "-40 to -55" },
    { setting: "Shadow Color Grade", value: "Hue 163, Sat 8-12 (Forest green)" },
    { setting: "Midtone Color Grade", value: "Hue 60-70, Sat 3-5 (warm)" },
    { setting: "Vignetting", value: "-10 to -15" },
    { setting: "Grain", value: "Amount 10-15 (optional)" },
  ],
  doNotRules: [
    "Do not use warm photography. No golden hour, no amber tones.",
    "Do not use stock photo compositions. No handshakes, no whiteboards, no stethoscope-on-laptop.",
    "Do not use fully saturated color. Every photo should be desaturated -40 to -55.",
    "Do not show faces prominently unless they are GP team members.",
    "Do not use tech-forward or futuristic imagery. Ground in clinical reality.",
  ],
};
