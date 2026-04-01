/* ============================================================
   PHYCAP BRAND GUIDE — STRUCTURED DATA
   All brand guide content as TypeScript data for the Brand Guide page.
   ============================================================ */

/* ------------------------------------------------------------
   COLOR SYSTEM
   ------------------------------------------------------------ */
export interface ColorEntry {
  name: string;
  hex: string;
  rgb: string;
  oklch: string;
  role: string;
  usage: string;
  doRules: string[];
  dontRules: string[];
  accessibilityNote?: string;
}

export const colorGuide: ColorEntry[] = [
  {
    name: "Forest",
    hex: "#122620",
    rgb: "18, 38, 32",
    oklch: "oklch(0.20 0.03 163)",
    role: "Primary brand color. The anchor of the PhyCap visual system.",
    usage:
      "Header backgrounds, footer backgrounds, primary section backgrounds, CTA button backgrounds (on light backgrounds), logo mark fill on light backgrounds. Forest is the color that says 'PhyCap.'",
    doRules: [
      "Use for any element that should feel distinctly PhyCap: headers, footers, hero sections, branded cards.",
      "Choose Forest over Blue Black or Dark Slate when in doubt about which dark color to use.",
      "Pair with Gold accents for the signature PhyCap combination.",
    ],
    dontRules: [
      "Do not use Forest for body text (too dark-green to read easily at small sizes).",
      "Do not pair Forest with Dark Slate in adjacent sections (too similar, creates muddiness).",
    ],
    accessibilityNote:
      "White text on Forest passes WCAG AAA. Gold text on Forest passes WCAG AA for large text only.",
  },
  {
    name: "Gold",
    hex: "#D3B184",
    rgb: "211, 177, 132",
    oklch: "oklch(0.77 0.07 72)",
    role: "Sole accent color. The signal of importance and distinction.",
    usage:
      "Eyebrow labels, accent lines and dividers, icon highlights, hover states on Forest backgrounds, the 'precision' signal in data visualizations. Gold appears sparingly. It marks what matters most.",
    doRules: [
      "Use on labels that signal category or status.",
      "Use on accent elements within Forest or Blue Black sections.",
      "Use on border treatments and divider lines.",
      "Use on stat numbers or key metrics that need emphasis.",
    ],
    dontRules: [
      "Do not use as a background color (too light for large areas, too warm for the clinical tone).",
      "Do not use as body text (insufficient contrast on both light and dark backgrounds).",
      "Do not use as a CTA button color (Forest handles CTAs).",
      "Do not overuse Gold. If it appears in more than 10-15% of accent elements, it loses its signal function.",
    ],
    accessibilityNote:
      "Gold on Forest passes WCAG AA for large text. Do not use Gold as body text on any background.",
  },
  {
    name: "Blue Black",
    hex: "#070808",
    rgb: "7, 8, 8",
    oklch: "oklch(0.06 0.00 200)",
    role: "Dark workhorse. Near-black with minimal blue shift.",
    usage:
      "Body text on light backgrounds, secondary dark backgrounds where Forest would be too branded (code blocks, data tables, technical content), dark overlay on imagery.",
    doRules: [
      "Use for body text on light backgrounds.",
      "Use for structural elements: text, tables, utility backgrounds.",
      "Prefer Blue Black over pure #000000 for text and UI elements.",
    ],
    dontRules: [
      "Do not use where Forest should be used. If the element is a 'PhyCap moment' (header, footer, hero, branded card), use Forest instead.",
    ],
    accessibilityNote:
      "Blue Black on White and Cream passes WCAG AAA at all text sizes.",
  },
  {
    name: "Dark Slate",
    hex: "#1F2D35",
    rgb: "31, 45, 53",
    oklch: "oklch(0.24 0.03 228)",
    role: "Supporting dark. Mid-range dark for depth and layering.",
    usage:
      "Secondary section backgrounds where Forest would be too heavy and Cream/White would be too light. Card backgrounds on Forest sections. Dropdown and navigation hover states.",
    doRules: [
      "Use to add depth to dark-on-dark compositions.",
      "Use for card backgrounds within Forest sections.",
    ],
    dontRules: [
      "Do not use as a primary background color. Dark Slate supports Forest; it does not replace it.",
    ],
    accessibilityNote:
      "White text on Dark Slate passes WCAG AAA. Gold text on Dark Slate passes WCAG AA for large text.",
  },
  {
    name: "Cream",
    hex: "#F5F2F0",
    rgb: "245, 242, 240",
    oklch: "oklch(0.96 0.01 60)",
    role: "Warm light background. The alternative to white.",
    usage:
      "Alternating section backgrounds, form backgrounds, card backgrounds on white sections. Cream adds approachability without sacrificing professionalism.",
    doRules: [
      "Use for sections that feel editorial, warm, or community-oriented (testimonials, team bios, event content).",
      "Alternate between Cream and White for visual rhythm.",
    ],
    dontRules: [
      "Do not use Cream as text color.",
      "Do not use Cream on Forest backgrounds (insufficient contrast).",
    ],
    accessibilityNote:
      "Blue Black text on Cream passes WCAG AAA. Forest text on Cream passes WCAG AAA.",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    oklch: "oklch(1.00 0.00 0)",
    role: "Primary light background.",
    usage:
      "Primary page backgrounds, section backgrounds for data-heavy content, reversed text on Forest/Blue Black/Dark Slate backgrounds, modal and overlay backgrounds.",
    doRules: [
      "Use for sections that feel data-driven, precise, or transactional.",
      "Use as reversed text on dark backgrounds.",
    ],
    dontRules: [
      "Do not use pure white text directly on Gold (insufficient contrast).",
    ],
    accessibilityNote:
      "White text on Forest passes WCAG AAA. White text on Blue Black passes WCAG AAA.",
  },
  {
    name: "Black",
    hex: "#000000",
    rgb: "0, 0, 0",
    oklch: "oklch(0.00 0.00 0)",
    role: "Utility only.",
    usage:
      "SVG icon fills where color is irrelevant, border treatments requiring maximum contrast, print-specific applications. In digital applications, prefer Blue Black #070808.",
    doRules: [
      "Use only for utility purposes: SVG fills, maximum-contrast borders, print applications.",
    ],
    dontRules: [
      "Do not use as a background color (too harsh).",
      "Do not use as body text color when Blue Black is available.",
      "Do not use as a brand color.",
    ],
  },
];

export const paletteRatios = [
  { label: "White + Cream", percentage: "60%", description: "Light backgrounds, breathing room" },
  { label: "Forest + Blue Black", percentage: "25%", description: "Dark sections, text, structure" },
  { label: "Dark Slate", percentage: "10%", description: "Depth, layering, secondary dark elements" },
  { label: "Gold", percentage: "5%", description: "Accents, labels, the precision signal" },
];

/* ------------------------------------------------------------
   TYPOGRAPHY
   ------------------------------------------------------------ */
export interface TypeLevel {
  level: string;
  font: string;
  weight: string;
  sizeDesktop: string;
  sizeMobile: string;
  lineHeight: string;
  color: string;
  usage: string;
  letterSpacing?: string;
  transform?: string;
}

export const typographyGuide = {
  headline: {
    name: "Marcellus",
    source: "Google Fonts (free, Apache 2.0)",
    classification: "Transitional serif with classical Roman letterform proportions",
    weights: ["Regular (400)"],
    fallback: "Georgia, serif",
    description:
      "Inspired by ancient Roman inscription capitals with modern refinement. The high contrast between thick and thin strokes communicates editorial authority and institutional weight.",
    note: "Marcellus is available in only one weight. Emphasis must come from size, color, or case rather than bold weight.",
  },
  body: {
    name: "Roboto",
    source: "Google Fonts (free, Apache 2.0)",
    classification: "Neo-grotesque sans-serif",
    weights: ["Regular (400)", "Medium (500)", "Semibold (600)", "Bold (700)"],
    fallback: "Arial, Helvetica, sans-serif",
    description:
      "Mechanical skeleton with largely geometric forms combined with friendly and open curves. Highly legible at all sizes, familiar to readers, clean and clinical without being cold.",
  },
  mono: {
    name: "JetBrains Mono",
    source: "Google Fonts (free)",
    classification: "Monospaced",
    weights: ["Regular (400)"],
    fallback: "monospace",
    description: "Used for hex values, code blocks, and technical data where monospaced alignment matters.",
  },
  hierarchy: [
    {
      level: "Hero Headlines",
      font: "Marcellus",
      weight: "Regular (400)",
      sizeDesktop: "48-72px",
      sizeMobile: "32-48px",
      lineHeight: "1.1-1.2",
      color: "White on dark / Blue Black on light",
      usage: "One per page. The single most important statement.",
    },
    {
      level: "Section Headlines",
      font: "Marcellus",
      weight: "Regular (400)",
      sizeDesktop: "32-40px",
      sizeMobile: "24-32px",
      lineHeight: "1.2-1.3",
      color: "Blue Black on light / White on dark",
      usage: "Major section dividers. 2-4 per page.",
    },
    {
      level: "Subheadlines",
      font: "Roboto",
      weight: "Semibold (600)",
      sizeDesktop: "20-24px",
      sizeMobile: "18-20px",
      lineHeight: "1.3-1.4",
      color: "Blue Black or Forest",
      usage: "Content section headers within major sections.",
    },
    {
      level: "Body Copy",
      font: "Roboto",
      weight: "Regular (400)",
      sizeDesktop: "16-18px",
      sizeMobile: "15-16px",
      lineHeight: "1.5-1.6",
      color: "Blue Black #070808",
      usage: "All paragraph text. Max line length: 65-75 characters.",
    },
    {
      level: "Eyebrow Labels",
      font: "Roboto",
      weight: "Medium (500)",
      sizeDesktop: "12-14px",
      sizeMobile: "12-14px",
      lineHeight: "1.4",
      color: "Gold on dark / Forest on light",
      usage: "Category markers, section labels, metadata.",
      letterSpacing: "0.10em-0.15em",
      transform: "uppercase",
    },
    {
      level: "Captions",
      font: "Roboto",
      weight: "Regular (400)",
      sizeDesktop: "12-14px",
      sizeMobile: "12-14px",
      lineHeight: "1.4",
      color: "Dark Slate #1F2D35",
      usage: "Image captions, dates, author credits, footer text.",
    },
    {
      level: "Stat Numbers",
      font: "Marcellus",
      weight: "Regular (400)",
      sizeDesktop: "48-72px",
      sizeMobile: "36-48px",
      lineHeight: "1.0-1.1",
      color: "Gold, White, or Forest (depending on background)",
      usage: "Display numbers as graphic elements: 168+, 21, 13+, 10+, 500+.",
    },
  ] as TypeLevel[],
  doRules: [
    "Maintain the serif/sans-serif pairing consistently. Headlines always serif, body always sans.",
    "Use generous line height (1.5+) for body text. Give physicians breathing room.",
    "Use the eyebrow label pattern (uppercase, tracked, small) for category markers and section identifiers.",
    "Use stat numbers at display size with emphasis treatment. PhyCap's numbers are strong; let them fill space.",
  ],
  dontRules: [
    "Do not use the serif font for body paragraphs. It loses legibility below 20px.",
    "Do not use decorative or script fonts anywhere. PhyCap is clinical and precise, not decorative.",
    "Do not mix more than two typefaces. The serif/sans pairing is complete.",
    "Do not use condensed or narrow type treatments. PhyCap's typography is open and generous.",
  ],
};

/* ------------------------------------------------------------
   LOGO
   ------------------------------------------------------------ */
export const logoGuide = {
  confirmedFiles: [
    {
      filename: "logo-dark-120.png",
      useOn: "Light backgrounds (White, Cream)",
      description:
        "Dark-colored logo mark and wordmark for placement on light surfaces. The P/C monogram with integrated medical cross reads clearly against White and Cream.",
    },
    {
      filename: "logo-120.png",
      useOn: "Dark backgrounds (Forest, Blue Black, Dark Slate)",
      description:
        "Light-colored (reversed) logo mark and wordmark for placement on dark surfaces. Monogram and wordmark render in white or cream.",
    },
  ],
  anatomy: {
    primaryMark:
      "P/C monogram with a stylized medical cross integrated into the 'P.' The cross signals healthcare without being overtly clinical.",
    wordmark: "PhyCap rendered in the brand serif typeface. Modern, authoritative, balanced.",
    fullLockup: "Physicians Capital Fund as a secondary wordmark, used in formal or legal contexts.",
  },
  safeZone: {
    xUnit: "The cap height of the 'P' in the PhyCap wordmark equals one X unit.",
    minimum: "1X on all sides of the logo. No text, graphic elements, or page edges may enter the safe zone.",
    preferred: "1.5X on all sides for primary placements (homepage header, pitch deck cover, event signage).",
  },
  minimumSizes: {
    digital: [
      { variant: "Monogram only", size: "24px height minimum" },
      { variant: "Wordmark (PhyCap)", size: "80px width minimum" },
      { variant: "Full lockup", size: "200px width minimum" },
    ],
    print: [
      { variant: "Monogram only", size: '0.375" (9.5mm) height minimum' },
      { variant: "Wordmark (PhyCap)", size: '1" (25.4mm) width minimum' },
      { variant: "Full lockup", size: '2.5" (63.5mm) width minimum' },
    ],
  },
  doRules: [
    "Use the correct logo version for the background (dark logo on light, light logo on dark).",
    "Maintain the safe zone in all applications.",
    "Use the logo at or above minimum sizes.",
    "Place the logo on solid or near-solid backgrounds where contrast is sufficient.",
  ],
  dontRules: [
    "Do not alter the logo colors.",
    "Do not stretch, rotate, skew, or distort the logo.",
    "Do not place the logo on busy photographic backgrounds without an overlay or solid-color field behind it.",
    "Do not add effects (drop shadow, glow, bevel, outline) to the logo.",
    "Do not recreate the logo using type. Always use the official asset files.",
  ],
  outstandingAssets: [
    { asset: "SVG versions (monogram, wordmark, full lockup)", priority: "High" },
    { asset: "High-res PNG (both colorways)", priority: "High" },
    { asset: "Icon-only mark (monogram without wordmark)", priority: "High" },
    { asset: "Favicon (.ico and .png)", priority: "High" },
    { asset: "Social media profile image (LinkedIn, X/Twitter circle crop)", priority: "High" },
    { asset: "Social media banner (LinkedIn company page)", priority: "High" },
    { asset: "Stacked lockup (monogram above wordmark)", priority: "Medium" },
    { asset: "One-color versions (white-only, black-only)", priority: "Medium" },
  ],
};

/* ------------------------------------------------------------
   PHOTOGRAPHY
   ------------------------------------------------------------ */
export const photographyGuide = {
  overview:
    "Heavily desaturated, high-contrast, Forest-graded clinical photography. Documentary and editorial in feel. The goal is NEJM journal cover meets Equinox marketing meets J.P. Morgan Private Bank.",
  presetSettings: [
    { setting: "Temperature", value: "-5 to -10 (cool)" },
    { setting: "Tint", value: "+5 (slight magenta)" },
    { setting: "Contrast", value: "+25 to +35" },
    { setting: "Highlights", value: "-40 to -50" },
    { setting: "Shadows", value: "+15 to +25" },
    { setting: "Whites", value: "-10 to -15" },
    { setting: "Blacks", value: "-20 to -30" },
    { setting: "Global Saturation", value: "-40 to -55" },
    { setting: "Shadow Color Grade", value: "Hue 163, Sat 8-12 (Forest green)" },
    { setting: "Midtone Color Grade", value: "Hue 60-70, Sat 3-5 (warm)" },
    { setting: "Highlight Color Grade", value: "Hue 40-50, Sat 3-5 (cream)" },
    { setting: "Vignetting", value: "-10 to -15" },
    { setting: "Grain", value: "Amount 10-15 (optional)" },
    { setting: "Sharpening", value: "Amount 30-40, Radius 1.0" },
  ],
  toneCurve:
    "Gentle S-curve with a lifted shadow floor. Raise the bottom-left anchor 5-10% to prevent pure black and create the matte/film quality.",
  doNotRules: [
    {
      rule: "Do not use warm photography.",
      detail:
        "PhyCap images should feel cool, clinical, and restrained. No golden hour lighting, no warm color casts, no amber tones. The warmth comes from Gold accents and community language, not from photography.",
    },
    {
      rule: "Do not use stock photo compositions.",
      detail:
        "No handshakes. No people pointing at whiteboards. No diverse-group-around-table setups. PhyCap photography should feel documentary: captured in real clinical environments, showing real work.",
    },
    {
      rule: "Do not use fully saturated color.",
      detail:
        "Every PhyCap photo should be significantly desaturated (-40 to -55 global saturation). The images should approach monochrome while retaining enough color information to feel real.",
    },
    {
      rule: "Do not show faces prominently unless they are GP team members.",
      detail:
        "Clinical photography shows surgeons in masks, hands in gloves, instruments in action. Faces are obscured, turned away, or cropped. GP headshots are the exception.",
    },
    {
      rule: "Do not use tech-forward or futuristic imagery.",
      detail:
        "No holographic displays, no AI-generated molecular structures, no digital overlays on clinical scenes. The photography should feel like what a surgeon sees in the operating room.",
    },
  ],
  subjects: [
    "Surgeons in masks and scrubs",
    "Clinical hands at work",
    "Medical instruments in use",
    "Operating room perspectives",
    "Stethoscopes and surgical fields",
    "Close-up, intimate, human-focused compositions",
  ],
};

/* ------------------------------------------------------------
   VOICE & TONE
   ------------------------------------------------------------ */
export const voiceGuide = {
  northStar:
    "The authority of a peer-reviewed medical journal combined with the desirability of a premium membership brand. NEJM format meets Equinox energy.",
  toneAttributes: [
    {
      name: "Evidence-Forward",
      doExample:
        "Fund I targets Seed through Series A companies with check sizes of $150K to $500K, focused on three investment priorities where clinical insight creates measurable diligence advantage.",
      dontExample:
        "We invest in the most promising healthcare startups that are transforming the industry.",
      description:
        "Lead with data, specific numbers, named conditions, and cited sources. Present claims with the same rigor a physician would expect in a clinical paper.",
    },
    {
      name: "Clinically Grounded",
      doExample:
        "When a workflow optimization platform claims to reduce physician documentation time, our diligence process tests that claim against the documentation patterns of six different specialties.",
      dontExample: "We understand the healthcare challenges facing physicians today.",
      description:
        "Reference specific clinical realities, named specialties, and real-world practice patterns. Use medical language naturally, not performatively.",
    },
    {
      name: "Understated Confidence",
      doExample:
        "Two of PhyCap's GPs hold Dartmouth's Master of Health Care Delivery Science. No other physician-led fund has this credential.",
      dontExample:
        "PhyCap has an incredible, industry-leading team with unmatched credentials!",
      description:
        "State differentiators as facts, not boasts. Let the credentials speak for themselves. No exclamation points.",
    },
    {
      name: "Collegial, Not Hierarchical",
      doExample:
        "PhyCap exists because physicians asked a question the venture capital industry had not answered: who evaluates healthcare technology better than the clinicians who use it?",
      dontExample:
        "We empower physicians to take an active role in healthcare innovation.",
      description:
        "Use 'we' to include the LP community. Address physician readers as peers, not prospects. The relationship is collaborative.",
    },
    {
      name: "Specific, Not Abstract",
      doExample:
        "Women's health diagnostics for menopause management.",
      dontExample: "Innovation in healthcare.",
      description:
        "Name the specialty. Name the clinical scenario. Name the GP who would review it. The more specific the reference, the more credible the voice.",
    },
  ],
  sentenceRules: [
    "Vary sentence length. Alternate between short declarative sentences (for impact) and longer explanatory sentences (for depth).",
    "Lead with the claim, follow with the evidence. PhyCap's voice does not build suspense.",
    "No em dashes. Restructure with a period and new sentence, a colon, or parentheses.",
    "Avoid the 'Not X, it's Y' construction. Restructure with the positive claim first.",
  ],
  whatNotToSay: [
    { phrase: "More than just a Venture Capital Fund", reason: "Generic. Every fund says a version of this." },
    { phrase: "Transformative initiative", reason: "Overused in healthcare and VC. Communicates nothing." },
    { phrase: "Shaping the future of healthcare", reason: "Every healthcare company claims this. Not specific to PhyCap." },
    { phrase: "Connected ecosystem of successful healthcare experts", reason: "Generic community language. Name the surgeons, OB-GYNs, and emergency physicians instead." },
    { phrase: "Dedicated to", reason: "Passive construction. Replace with active verbs: 'Invests in' instead of 'Dedicated to.'" },
    { phrase: "Empower medical professionals", reason: "Implies a transfer of power. Physicians already have the insight. PhyCap structures it." },
    { phrase: "Bridging the gap", reason: "Makes PhyCap passive infrastructure. PhyCap is the clinician in the room." },
    { phrase: "Driving a new standard", reason: "Aspirational without being specific. Name the standard." },
    { phrase: "The future of", reason: "Overuse. PhyCap's strength is in the present tense." },
  ],
  universalRule:
    "If a phrase could be copied onto any healthcare fund's website without modification, it is not specific enough for PhyCap. Every sentence should contain at least one element only PhyCap can claim.",
  taglines: {
    primary: "Investing with Clinical Precision\u2120",
    supporting: [
      { text: "Clinical insight, structured as capital.", context: "Elevator pitch, social bios, email signatures" },
      { text: "The physicians in the room are the investors making the decision.", context: "LP-facing materials, website hero section" },
      { text: "Where medicine meets capital.", context: "Short-form contexts, event branding, social headers" },
      { text: "At the moment of truth in medicine.", context: "Investment thesis presentations" },
      { text: "The workflow. The device. The patient.", context: "Visual branding for the three investment pillars" },
    ],
  },
  copyBlocks: [
    {
      label: "One-Liner",
      text: "PhyCap is a physician-led venture capital fund investing at the moment of truth in medicine.",
    },
    {
      label: "Two-Sentence",
      text: "PhyCap invests in healthcare technology at the point of care: the workflow, the device, the underserved patient. Our GPs bring 168+ years of clinical experience across 13+ specialties to a diligence process that no generalist fund can replicate.",
    },
    {
      label: "LinkedIn Bio",
      text: "PhyCap (Physicians Capital Fund) is a physician-led early-stage venture capital fund investing in Clinical Care Delivery Workflow Optimization, Software as a Medical Device (SaMD), and Women's Health. Led by GPs with 168+ years of combined clinical experience across 13+ specialties, including two Dartmouth MHCDS graduates, PhyCap applies clinical precision to every stage of the investment process.",
    },
    {
      label: "Community Invitation",
      text: "The Physician-Led Innovation Circle is where clinicians who see the healthcare system's structural failures connect with the founders building what comes next. Members receive access to PhyCap's thought leadership, webinar series, regional events, and a network of physician peers across 10+ states.",
    },
  ],
};

/* ------------------------------------------------------------
   BRAND ARCHETYPE
   ------------------------------------------------------------ */
export const archetypeGuide = {
  name: "Insider Precision",
  oneLiner:
    "PhyCap exists because ten physicians looked at the healthcare system they spent their careers inside and decided to invest in what actually works.",
  definition:
    "The feeling of being the person in the room who sees what everyone else misses because they have stood inside the system that is broken.",
  notThisNotThat: [
    {
      notThis: "Physician Empowerment",
      why: "Empowerment implies a transfer of power from the powerful to the powerless. PhyCap's physicians are not powerless. They already have the insight. What they lacked was the capital structure to deploy it.",
    },
    {
      notThis: "Clinical Authority",
      why: "Authority implies institutional credibility and top-down expertise. PhyCap is not a hospital system or a medical journal. It is a fund built by practitioners who have seen the system fail from the inside.",
    },
  ],
  manifestations: [
    { dimension: "Voice", expression: "Speaks from inside the system, not about the system. Uses clinical language naturally, not performatively." },
    { dimension: "Visual", expression: "Forest green and gold on cream. Documentary-style B&W clinical photography. Medical journal cover, not a tech startup landing page." },
    { dimension: "Content", expression: "NEJM-formatted thought leadership: evidence-first, data-supported, clinically grounded." },
    { dimension: "Community", expression: "The Innovation Circle is the insider network. Events convene insiders, they do not educate outsiders." },
    { dimension: "Diligence", expression: "Clinical Precision is the process, not the tagline. Every deal reviewed by the full specialty roster." },
    { dimension: "LP Recruitment", expression: "You are not being invited to invest. You are being recognized as someone whose clinical insight has investment-grade value." },
  ],
  personalityTraits: [
    {
      trait: "Precise",
      description: "Content always includes specific numbers, named conditions, cited sources, or concrete examples. Avoid 'many,' 'significant,' 'transformative.'",
    },
    {
      trait: "Insider",
      description: "Speaks from the perspective of someone who has been in the room. 'We have seen' rather than 'research shows.'",
    },
    {
      trait: "Reserved",
      description: "No urgency language, no exclamation points, no startup enthusiasm. Exclusivity is communicated through quality, not scarcity.",
    },
    {
      trait: "Collegial",
      description: "Uses 'we' to include the LP and GP community. Peer-to-peer, not investor-to-fund. Collaborative, not transactional.",
    },
    {
      trait: "Mission-Weighted",
      description: "Always connects investment activity to clinical and patient outcomes. Lead with what the returns represent, not the returns themselves.",
    },
  ],
  personalitySpectrum: [
    { dimension: "Formal vs. Casual", position: "Formal-leaning", note: "Medical journal tone. Collegial warmth within formal structure." },
    { dimension: "Data vs. Narrative", position: "Data-first", note: "Lead with evidence, then interpret. Never lead with story alone." },
    { dimension: "Exclusive vs. Inclusive", position: "Earned exclusivity", note: "Community is open. Fund is selective. Exclusivity from clinical qualification." },
    { dimension: "Bold vs. Understated", position: "Understated", note: "Let credentials and specificity speak. Do not claim greatness." },
    { dimension: "Urgent vs. Patient", position: "Patient", note: "Present the case with the same thoroughness physicians use in clinical decision-making." },
  ],
};

/* ------------------------------------------------------------
   COLOR GROUPINGS
   ------------------------------------------------------------ */
export const colorGroups = [
  { label: "Primary", colors: ["Forest", "Gold"] },
  { label: "Neutrals", colors: ["Blue Black", "Dark Slate", "Cream", "White"] },
  { label: "Utility", colors: ["Black"] },
];

/* ------------------------------------------------------------
   PRESS & MEDIA
   ------------------------------------------------------------ */
export interface NamingConvention {
  label: string;
  detail: string;
}

export interface PronunciationEntry {
  term: string;
  guide: string;
}

export interface BoilerplateEntry {
  label: string;
  wordCount: string;
  text: string;
}

export const pressGuide = {
  namingConventions: [
    { label: "Operating name", detail: "PhyCap (preferred in most contexts)" },
    { label: "Legal name", detail: "Physicians Capital Fund (for legal documents, SEC filings, formal press)" },
    { label: "Fund reference", detail: "PhyCap Fund or PhyCap Fund I (when referring to the specific fund vehicle)" },
    {
      label: "Never use",
      detail: '"Phy Cap" (two words), "PHYCAP" (all caps), "Phycap" (lowercase c), "PhyCap Ventures"',
    },
    {
      label: "First mention rule",
      detail: '"PhyCap (Physicians Capital Fund)" on first mention, then "PhyCap" thereafter',
    },
    {
      label: "Service mark",
      detail: '"Investing with Clinical Precision\u2120" always includes the \u2120 symbol',
    },
  ] as NamingConvention[],

  pronunciation: [
    { term: "PhyCap", guide: '"FY-cap" (rhymes with "sky cap"). The "Phy" comes from Physician.' },
    { term: "MHCDS", guide: 'Spelled out "M-H-C-D-S" or say "Master of Health Care Delivery Science"' },
    { term: "SaMD", guide: '"Sam-D" or spelled out "S-a-M-D" (Software as a Medical Device)' },
    { term: "PhyCap Fund", guide: '"FY-cap Fund" (not "the PhyCap fund" with lowercase f)' },
  ] as PronunciationEntry[],

  boilerplates: [
    {
      label: "One-liner",
      wordCount: "~15 words",
      text: "PhyCap is a physician-led venture capital fund investing at the point of care delivery.",
    },
    {
      label: "Two-sentence",
      wordCount: "~35 words",
      text: "PhyCap (Physicians Capital Fund) is a physician-led venture capital fund investing in Clinical Care Delivery Workflow Optimization, Software as a Medical Device, and Women's Health. The fund is led by 10 physician GPs spanning 13+ medical specialties.",
    },
    {
      label: "Short paragraph",
      wordCount: "~75 words",
      text: "PhyCap (Physicians Capital Fund) is a physician-led early-stage venture capital fund writing $150K to $500K checks from Seed through Series A. Founded in 2024, PhyCap invests in three areas where clinical expertise creates an investment advantage: Clinical Care Delivery Workflow Optimization, Software as a Medical Device (FDA Class I/II), and Women's Health and Health Inequity. The fund's 10 General Partners bring 168+ years of combined clinical experience across 13+ medical specialties.",
    },
    {
      label: "Medium paragraph",
      wordCount: "~120 words",
      text: "PhyCap (Physicians Capital Fund) is a physician-led early-stage venture capital fund that invests where clinical expertise creates a structural advantage. Writing $150K to $500K checks from Seed through Series A, PhyCap focuses on three investment pillars: Clinical Care Delivery Workflow Optimization, Software as a Medical Device (FDA Class I/II), and Women's Health and Health Inequity. What distinguishes PhyCap is the depth of its General Partner team: 10 physicians spanning orthopedic surgery, OB-GYN, emergency medicine, pediatric cardiothoracic surgery, radiology, and internal medicine. Two GPs hold Dartmouth's Master of Health Care Delivery Science, a credential held by fewer than 500 people worldwide. PhyCap is co-managed with FortySix Venture Capital from Tulsa, Oklahoma.",
    },
    {
      label: "Full press boilerplate",
      wordCount: "~175 words",
      text: "PhyCap (Physicians Capital Fund) is a physician-led early-stage venture capital fund investing at the moment care is delivered. Writing $150K to $500K checks from Seed through Series A, PhyCap targets three areas where the gap between clinical reality and available technology creates an investment opportunity: Clinical Care Delivery Workflow Optimization, Software as a Medical Device (FDA Class I/II), and Women's Health and Health Inequity. The fund explicitly excludes life sciences and pharmaceuticals.\n\nPhyCap's diligence advantage comes from its General Partner team: 10 physicians covering the full arc of human medicine, from pediatric cardiothoracic surgery through reproductive health, acute care, musculoskeletal, and internal systems. Two GPs hold Dartmouth's Master of Health Care Delivery Science, the only graduate degree designed for physicians leading healthcare systems transformation. Lead GP Paul Slosar, MD, MHCDS practiced spine surgery for 28 years and served as CMO of Titan Spine prior to its acquisition by Medtronic.\n\nPhyCap is co-managed with FortySix Venture Capital and headquartered at 12 N Cheyenne Ave, Tulsa, OK 74103. Contact: info@46.capital.",
    },
  ] as BoilerplateEntry[],
};

/* ------------------------------------------------------------
   PARTNERSHIPS
   ------------------------------------------------------------ */
export const partnershipsGuide = {
  coBrandingRules: [
    "When PhyCap appears alongside a partner, the PhyCap logo should be equal size or larger (never smaller than the partner).",
    "Minimum clear space around the PhyCap logo: 1x the cap height of the \"P\" in PhyCap.",
    "PhyCap colors (Forest, Gold) should not be altered in co-branded materials.",
    "Partner logos should not be placed on PhyCap's Forest green background unless pre-approved.",
    "For event co-branding (like Women's Health Nexus): PhyCap as presenting partner gets primary logo placement, upper left or centered.",
  ],
  partnerKit: [
    { item: "Logo files", note: "SVG versions pending; PNG available via CDN", ready: false },
    { item: "Brand colors (hex values)", note: "Available in this guide", ready: true },
    { item: "Boilerplate text", note: "See Press & Media section above", ready: true },
    { item: "GP headshots", note: "Pending", ready: false },
    { item: "Social media links", note: "LinkedIn confirmed; X/Twitter and YouTube unverified", ready: false },
    { item: "Contact information", note: "info@46.capital", ready: true },
  ],
};

/* ------------------------------------------------------------
   CONNECT / SOCIAL
   ------------------------------------------------------------ */
export interface ConnectLink {
  label: string;
  url: string;
  type: "link" | "email" | "address";
  note?: string;
}

export const connectLinks: ConnectLink[] = [
  { label: "LinkedIn Company Page", url: "https://www.linkedin.com/company/phycap/", type: "link" },
  { label: "Contact Email", url: "info@46.capital", type: "email" },
  { label: "Website", url: "https://phycapfund.com", type: "link" },
  { label: "HQ Address", url: "12 N Cheyenne Ave, Tulsa, OK 74103", type: "address" },
  { label: "X / Twitter", url: "", type: "link", note: "Presence not yet verified as active" },
  { label: "YouTube", url: "", type: "link", note: "Presence not yet verified as active" },
];
