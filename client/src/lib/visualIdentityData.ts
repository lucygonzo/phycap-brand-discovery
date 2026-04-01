/* ============================================================
   VISUAL IDENTITY DATA
   Complete design system data for all 8 sub-tabs
   ============================================================ */

/* ---- COLOR PALETTE ---- */

export type ColorGroup = "primary" | "neutrals" | "utility";

export interface BrandColor {
  name: string;
  hex: string;
  role: string;
  usage: string;
  doNot: string;
  group: ColorGroup;
  retired?: boolean;
}

export const colorPalette: BrandColor[] = [
  {
    name: "Forest",
    hex: "#122620",
    role: "Primary brand color",
    group: "primary",
    usage:
      "Header backgrounds, footer backgrounds, primary section backgrounds, CTA buttons on light backgrounds. Forest is the color that says 'PhyCap.'",
    doNot:
      "Use for body text (too dark-green at small sizes). Do not pair with Dark Slate in adjacent sections.",
  },
  {
    name: "Gold",
    hex: "#D3B184",
    role: "Sole accent color",
    group: "primary",
    usage:
      "Eyebrow labels, accent lines, dividers, icon highlights, hover states on Forest backgrounds. Gold appears sparingly. It marks what matters most.",
    doNot:
      "Overuse. Power comes from restraint. No more than 10-15% of a layout's accent elements. Never use as background or body text.",
  },
  {
    name: "Blue Black",
    hex: "#070808",
    role: "Dark workhorse",
    group: "neutrals",
    usage:
      "Body text on light backgrounds, secondary dark backgrounds, dark overlays. Functionally black without the harshness of pure #000000.",
    doNot:
      "Use where Forest should be. If the element is a 'PhyCap moment' (header, hero, branded card), use Forest instead.",
  },
  {
    name: "Dark Slate",
    hex: "#1F2D35",
    role: "Supporting dark",
    group: "neutrals",
    usage:
      "Secondary section backgrounds, card backgrounds on Forest sections, dropdown and navigation hover states. Adds depth without competing with Forest.",
    doNot:
      "Use as a primary background color. Dark Slate supports Forest; it does not replace it.",
  },
  {
    name: "Cream",
    hex: "#F5F2F0",
    role: "Warm light background",
    group: "neutrals",
    usage:
      "Alternating section backgrounds, form backgrounds, card backgrounds on white sections. Adds approachability without sacrificing professionalism.",
    doNot: "Use as text color. Use on Forest backgrounds (insufficient contrast).",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    role: "Primary light background",
    group: "neutrals",
    usage:
      "Primary page backgrounds, section backgrounds for data-heavy content, reversed text on dark backgrounds.",
    doNot: "Use pure white text directly on Gold (insufficient contrast).",
  },
  {
    name: "Black",
    hex: "#000000",
    role: "Utility only",
    group: "utility",
    usage:
      "SVG icon fills, maximum-contrast borders, print applications. In digital, prefer Blue Black #070808 for text and UI.",
    doNot: "Use as a background, body text, or brand color.",
  },
  {
    name: "Slate (RETIRED)",
    hex: "#404747",
    role: "Retired",
    group: "utility",
    usage:
      "Do not use in new materials. Replace with Dark Slate #1F2D35 or Blue Black #070808 depending on context.",
    doNot: "Use anywhere.",
    retired: true,
  },
];

export const colorGroups: { key: ColorGroup; label: string }[] = [
  { key: "primary", label: "PRIMARY" },
  { key: "neutrals", label: "NEUTRALS" },
  { key: "utility", label: "UTILITY" },
];

export const paletteRatios = [
  { pct: 60, colors: "White + Cream", hex: ["#FFFFFF", "#F5F2F0"], purpose: "Light backgrounds, breathing room" },
  { pct: 25, colors: "Forest + Blue Black", hex: ["#122620", "#070808"], purpose: "Dark sections, text, structure" },
  { pct: 10, colors: "Dark Slate", hex: ["#1F2D35"], purpose: "Depth, layering, secondary dark elements" },
  { pct: 5, colors: "Gold", hex: ["#D3B184"], purpose: "Accents, labels, the precision signal" },
];

export const accessibilityPairings = [
  { fg: "#FFFFFF", fgName: "White", bg: "#122620", bgName: "Forest", ratio: "15.2:1", grade: "AAA" },
  { fg: "#D3B184", fgName: "Gold", bg: "#122620", bgName: "Forest", ratio: "7.8:1", grade: "AAA" },
  { fg: "#070808", fgName: "Blue Black", bg: "#F5F2F0", bgName: "Cream", ratio: "18.6:1", grade: "AAA" },
  { fg: "#070808", fgName: "Blue Black", bg: "#FFFFFF", bgName: "White", ratio: "20.4:1", grade: "AAA" },
  { fg: "#122620", fgName: "Forest", bg: "#D3B184", bgName: "Gold", ratio: "7.8:1", grade: "AAA" },
];

/* ---- TYPOGRAPHY ---- */

export const typographyData = {
  headline: {
    font: "Marcellus",
    source: "Google Fonts (free, Apache 2.0)",
    classification: "Transitional serif with classical Roman letterform proportions",
    whyItWorks:
      "Carries the gravitas of carved stone inscriptions. Institutional and authoritative without being ornate.",
    weights: ["Regular (only weight available)"],
  },
  body: {
    font: "Roboto",
    source: "Google Fonts (free, Apache 2.0)",
    classification:
      "Neo-grotesque sans-serif with mechanical skeleton and friendly curves",
    whyItWorks:
      "Highly legible at all sizes. Clean, clinical feel that matches precision positioning without being cold.",
    weights: [
      "Regular (400) for body",
      "Medium (500) for navigation/UI",
      "Bold (700) for emphasis",
    ],
  },
};

export const typeHierarchy = [
  {
    level: "Hero Headlines",
    font: "Marcellus",
    size: "48-72px / 32-48px mobile",
    lineHeight: "1.1-1.2",
    usage: "One per page. The single most important statement.",
    renderSize: 48,
    useDisplayFont: true,
  },
  {
    level: "Section Headlines",
    font: "Marcellus",
    size: "32-40px / 24-32px mobile",
    lineHeight: "1.2-1.3",
    usage: "Major section dividers. 2-4 per page.",
    renderSize: 32,
    useDisplayFont: true,
  },
  {
    level: "Subheadlines",
    font: "Roboto Semibold",
    size: "20-24px / 18-20px mobile",
    lineHeight: "1.3-1.4",
    usage: "Content section headers within major sections.",
    renderSize: 20,
    useDisplayFont: false,
    fontWeight: 600,
  },
  {
    level: "Body Copy",
    font: "Roboto Regular",
    size: "16-18px / 15-16px mobile",
    lineHeight: "1.5-1.6",
    usage: "All paragraph text. Max 65-75 characters per line.",
    renderSize: 16,
    useDisplayFont: false,
  },
  {
    level: "Eyebrow Labels",
    font: "Roboto Medium",
    size: "12-14px",
    lineHeight: "n/a",
    usage: "Uppercase, tracked (0.1-0.15em). Gold on dark, Forest on light.",
    renderSize: 12,
    useDisplayFont: false,
    fontWeight: 500,
    uppercase: true,
    letterSpacing: "0.12em",
  },
  {
    level: "Captions/Metadata",
    font: "Roboto Regular",
    size: "12-14px",
    lineHeight: "1.4",
    usage: "Image captions, dates, footer text. Subdued Dark Slate color.",
    renderSize: 12,
    useDisplayFont: false,
  },
  {
    level: "Stat Numbers",
    font: "Marcellus or Roboto Bold",
    size: "48-72px",
    lineHeight: "1.0-1.1",
    usage: "Numbers as graphic elements: Gold, White, or Forest depending on background.",
    renderSize: 48,
    useDisplayFont: true,
  },
];

export const typographyRules = [
  { rule: "Marcellus for headlines, titles, and hero statements only. Never for body paragraphs." },
  { rule: "Roboto for all body copy, UI elements, navigation, and metadata." },
  { rule: "Maximum 65-75 characters per line for body text. Shorter is better." },
  { rule: "Line height for body text: 1.5-1.6. For headlines: 1.1-1.3." },
  { rule: "Eyebrow labels always uppercase with 0.1-0.15em letter-spacing." },
  { rule: "Never use more than 2 type sizes on a single card or module." },
  { rule: "Stat numbers (large display figures) use Marcellus in Gold or White." },
];

/* ---- LOGO ---- */

export const logoData = {
  lightLogo: "https://cdn.prod.website-files.com/66da76af0489fb1ad7bfbfa0/66da78e9a97fa62f6b7601dd_logo-120.png",
  darkLogo: "https://cdn.prod.website-files.com/66da76af0489fb1ad7bfbfa0/66da78e9e92e4eb10df570cb_logo-dark-120.png",
  files: [
    { name: "logo-120.png (light)", use: "Dark backgrounds (Forest, Blue Black, Dark Slate)", bg: "#122620" },
    { name: "logo-dark-120.png (dark)", use: "Light backgrounds (White, Cream)", bg: "#F5F2F0" },
  ],
  anatomy: [
    { element: "Primary mark", description: "P/C monogram with a stylized medical cross in the 'P.'" },
    { element: "Wordmark", description: "'PhyCap' in the brand serif typeface." },
    { element: "Full lockup", description: "'Physicians Capital Fund' as secondary wordmark for legal contexts." },
  ],
  safeZone:
    "Minimum 1X clear space on all sides (X = cap height of 'P'). Preferred 1.5X for primary placements.",
  usageRules: [
    { do: "Use the light logo on Forest, Dark Slate, or Blue Black backgrounds", dont: "Place the light logo on Cream or White backgrounds" },
    { do: "Use the dark logo on White or Cream backgrounds", dont: "Place the dark logo on any dark background" },
    { do: "Maintain the safe zone (1X minimum clear space)", dont: "Crowd the logo with text or other elements" },
    { do: "Scale proportionally from the original", dont: "Stretch, skew, rotate, or distort the logo" },
    { do: "Use the full lockup for formal/legal contexts", dont: "Alter the typeface, colors, or arrangement of the lockup" },
    { do: "Use the monogram mark for avatars and favicons", dont: "Use the monogram alone in marketing where the full name is needed" },
  ],
  missingAssets: [
    { asset: "SVG versions (monogram, wordmark, full lockup)", priority: "Critical" as const },
    { asset: "High-res PNG at 2x, 3x, 4x sizes", priority: "Critical" as const },
    { asset: "Icon-only mark (favicon, avatars, app icons)", priority: "Critical" as const },
    { asset: "Stacked lockup (monogram above wordmark)", priority: "Important" as const },
    { asset: "Favicon (.ico and .png at 16, 32, 180px)", priority: "Important" as const },
    { asset: "Social media profile and banner images", priority: "Important" as const },
    { asset: "One-color versions (white-only, black-only)", priority: "Nice-to-have" as const },
    { asset: "Animated logo mark for video intros", priority: "Nice-to-have" as const },
  ],
};

/* ---- DESIGN PRINCIPLES ---- */

export const designPrinciples = [
  {
    register: "Medical Editorial",
    description:
      "The authority of a peer-reviewed journal cover. Structured layouts, evidence-based content hierarchy, restrained typography.",
    references: "NEJM, JAMA, The Economist",
  },
  {
    register: "Luxury Membership",
    description:
      "The exclusivity signal of a private equity firm or premium club. Forest green and gold on cream evokes private banking and legacy institutions.",
    references: "Equinox, Bay Club, J.P. Morgan Private Bank",
  },
  {
    register: "Modern Venture Capital",
    description:
      "Clean digital design, responsive layout, generous whitespace, content-forward structure that feels current without chasing trends.",
    references: "Contemporary VC firm websites",
  },
];

/* ---- PHOTOGRAPHY (COMPLETE REWRITE: warm editorial street) ---- */

export const photographyData = {
  styleDirection:
    "PhyCap's photography draws from editorial street photography: candid moments, natural light, human subjects in real clinical and professional environments. The warmth communicates approachability. The grain communicates authenticity. The editorial framing communicates authority. Think Kinfolk magazine meets The New Yorker's photo essays.",

  moodBoard: [
    {
      id: 1,
      description:
        "A physician's hands reviewing a tablet in a coffee shop, shallow depth of field, warm window light, visible film grain",
      keywords: "Hands, device, warm light, grain",
    },
    {
      id: 2,
      description:
        "A hospital corridor at golden hour, long shadows, a figure in scrubs walking away, architectural framing",
      keywords: "Architecture, golden hour, depth",
    },
    {
      id: 3,
      description:
        "A conference hallway conversation caught mid-gesture, two professionals, natural candid energy, slightly desaturated warmth",
      keywords: "Candid, conversation, editorial",
    },
    {
      id: 4,
      description:
        "Close-up of surgical instruments on a tray, precise arrangement, warm overhead light, grain texture on the metal surfaces",
      keywords: "Detail, precision, clinical warmth",
    },
    {
      id: 5,
      description:
        "A city street at dusk near a medical center, warm streetlights, architectural lines, a physician walking with a bag",
      keywords: "Street, dusk, urban, movement",
    },
    {
      id: 6,
      description:
        "Hands holding a medical device prototype, workbench context, natural light from a window, focus on the hands and object",
      keywords: "Hands, innovation, natural light",
    },
  ],

  lightroomPreset: {
    name: "PhyCap Editorial Warm",
    sections: [
      {
        label: "Basic",
        settings: [
          { key: "Temperature", value: "+8", note: "warm, natural skin tones" },
          { key: "Tint", value: "+4", note: "gentle magenta warmth" },
          { key: "Exposure", value: "0", note: "adjust per image" },
          { key: "Contrast", value: "+18", note: "" },
          { key: "Highlights", value: "-35", note: "" },
          { key: "Shadows", value: "+25", note: "" },
          { key: "Whites", value: "-10", note: "" },
          { key: "Blacks", value: "+5", note: "" },
        ],
      },
      {
        label: "Presence",
        settings: [
          { key: "Clarity", value: "+8", note: "" },
          { key: "Vibrance", value: "-12", note: "" },
          { key: "Saturation", value: "-30", note: "" },
        ],
      },
      {
        label: "Tone Curve",
        settings: [
          { key: "Highlights", value: "slight S-curve lift", note: "" },
          { key: "Lights", value: "+5", note: "" },
          { key: "Darks", value: "-5", note: "" },
          { key: "Shadows", value: "+10", note: "lifted blacks for editorial feel" },
        ],
      },
      {
        label: "Color Grading",
        settings: [
          { key: "Shadows", value: "Hue 163, Sat 6", note: "subtle Forest green" },
          { key: "Midtones", value: "Hue 48, Sat 7", note: "warm amber" },
          { key: "Highlights", value: "Hue 55, Sat 3", note: "very subtle warm" },
          { key: "Blending", value: "50", note: "" },
          { key: "Balance", value: "-10", note: "slightly shadow-weighted" },
        ],
      },
      {
        label: "Detail",
        settings: [
          { key: "Sharpening", value: "40", note: "" },
          { key: "Radius", value: "1.0", note: "" },
          { key: "Detail", value: "25", note: "" },
          { key: "Noise Reduction Luminance", value: "10", note: "" },
        ],
      },
      {
        label: "Effects",
        settings: [
          { key: "Grain Amount", value: "22", note: "" },
          { key: "Grain Size", value: "28", note: "" },
          { key: "Grain Roughness", value: "50", note: "" },
          { key: "Vignetting", value: "-10", note: "" },
          { key: "Vignette Midpoint", value: "50", note: "" },
          { key: "Vignette Roundness", value: "0", note: "" },
          { key: "Vignette Feather", value: "70", note: "" },
        ],
      },
    ],
  },

  lightroomPresetRaw: `PhyCap Editorial Warm
================================

// Basic
Temperature:    +8   (warm, natural skin tones)
Tint:           +4   (gentle magenta warmth)
Exposure:        0   (adjust per image)
Contrast:      +18
Highlights:    -35
Shadows:       +25
Whites:        -10
Blacks:         +5

// Presence
Clarity:        +8
Vibrance:      -12
Saturation:    -30

// Tone Curve
Highlights:    slight S-curve lift
Lights:         +5
Darks:          -5
Shadows:       +10  (lifted blacks for editorial feel)

// Color Grading
Shadows:       Hue 163, Sat 6   (subtle Forest green)
Midtones:      Hue 48,  Sat 7   (warm amber)
Highlights:    Hue 55,  Sat 3   (very subtle warm)
Blending:       50
Balance:       -10  (slightly shadow-weighted)

// Detail
Sharpening:     40
Radius:          1.0
Detail:         25
Noise Reduction Luminance: 10

// Effects
Grain Amount:   22
Grain Size:     28
Grain Roughness: 50
Vignetting:    -10
Vignette Midpoint: 50
Vignette Roundness: 0
Vignette Feather: 70`,

  subjectDo: [
    "Candid physician moments (reviewing devices, in conversation, walking hospital corridors)",
    "Architectural details of healthcare spaces (waiting room textures, instrument trays, corridor light)",
    "Street-level city photography near healthcare institutions",
    "Hands and details (physician's hands on a device, pen on notepad, scrubs fabric detail)",
    "Conference and event moments (audience silhouettes, speaker gestures, hallway networking)",
    "Natural light whenever possible (window light, golden hour, overcast diffusion)",
  ],

  subjectDont: [
    "Posed stock photography (handshakes, stethoscope-on-laptop, pointing at screens)",
    "Fully saturated color or vibrant rainbow tones",
    "Digital-clean, overly sharpened, HDR-style processing",
    "Generic tech imagery (abstract data visualizations, floating holographic UI)",
    "Aerial/drone shots or sweeping establishing shots",
    "Flash photography or harsh artificial lighting",
  ],

  quickTest:
    "If the photo could appear in a Kinfolk editorial about a physician's daily life, it belongs. If it could appear in a stock photo library under 'healthcare technology,' it does not.",
};

/* ---- VIDEO ---- */

export const videoData = {
  styleDirection:
    "PhyCap video follows the same editorial warmth as photography. Think: documentary B-roll meets LinkedIn native video. The camera is observational, not performative. Movement is deliberate and slow. The edit is clean, not flashy.",

  specs: [
    {
      type: "LinkedIn Native",
      duration: "30-90 sec",
      aspect: "1:1 or 4:5",
      resolution: "1080x1080 or 1080x1350",
      useCase: "GP thought leadership clips",
    },
    {
      type: "Event Recap",
      duration: "60-120 sec",
      aspect: "16:9",
      resolution: "1920x1080",
      useCase: "Women's Health Nexus, conferences",
    },
    {
      type: "Fund Overview",
      duration: "90-180 sec",
      aspect: "16:9",
      resolution: "1920x1080",
      useCase: "LP-facing, website hero",
    },
    {
      type: "GP Intro",
      duration: "30-60 sec",
      aspect: "1:1",
      resolution: "1080x1080",
      useCase: "Individual GP introductions",
    },
    {
      type: "Story/Reel",
      duration: "15-30 sec",
      aspect: "9:16",
      resolution: "1080x1920",
      useCase: "Quick insights, behind-the-scenes",
    },
  ],

  treatmentRules: [
    "Color grade: Match the photography Lightroom preset (warm, slightly desaturated, grain optional at 50% intensity for video)",
    "Audio: Clean voiceover or natural sound. No background music unless instrumental, minimal, and warm (piano, acoustic guitar, ambient). Never corporate synth.",
    "Text overlays: Marcellus for headlines, Roboto for body. Gold on Forest lower thirds. Cream background text cards.",
    "Transitions: Cuts only. No dissolves, wipes, or motion graphics transitions. The edit should feel like a well-cut documentary.",
    "Pacing: 3-5 second shots minimum. No rapid cuts. Let moments breathe.",
    "B-roll: Follow the photography subject guidelines. Candid, editorial, warm.",
    "Talking head framing: Slightly off-center (rule of thirds), shallow depth of field, natural background (office, coffee shop, conference space). Never a blank wall or corporate backdrop.",
    "Lower thirds: Forest bar with Gold text for name, Roboto Regular for title. Appears for 3-4 seconds, fades cleanly.",
  ],

  videoDo: [
    "Natural sound and observational camera",
    "Interview-style GP clips with shallow depth of field",
    "Event B-roll with warm editorial grade",
    "Documentary-style cuts with 3-5 second holds",
    "Natural backgrounds and rule-of-thirds framing",
  ],

  videoDont: [
    "Stock video or generic B-roll",
    "Corporate synth music or jingles",
    "Fast cuts, jump cuts, or rapid montages",
    "Motion graphics or animated transitions",
    "Drone shots or aerial establishing shots",
    "Green screen or solid-color backdrops",
  ],
};

/* ---- TEMPLATES ---- */

export const templateSpecs = [
  {
    format: "LinkedIn Post Image",
    dimensions: "1200x1200 (1:1) or 1200x628 (1.91:1)",
    layout: "Marcellus headline top 40%, body Roboto middle, Gold accent bar, logo bottom-right",
    notes: "Most common format",
  },
  {
    format: "LinkedIn Banner (Company)",
    dimensions: "1128x191",
    layout: "Forest background, Gold tagline centered, logo left",
    notes: "Updated quarterly",
  },
  {
    format: "LinkedIn Banner (GP)",
    dimensions: "1584x396",
    layout: "GP color background, name + specialty, PhyCap lockup right",
    notes: "Per-GP sub-brand",
  },
  {
    format: "Quote Card",
    dimensions: "1080x1080",
    layout: "Forest background, Gold quotation mark, Marcellus quote centered, attribution Roboto bottom",
    notes: "For LP/GP quotes",
  },
  {
    format: "Stat Graphic",
    dimensions: "1080x1080",
    layout: "Cream background, large Marcellus number in Gold, context in Roboto, source citation small",
    notes: "For data points",
  },
  {
    format: "Event Graphic",
    dimensions: "1200x628",
    layout: "Forest background with photo overlay at 30% opacity, event title Marcellus, details Roboto, Gold accent lines",
    notes: "Women's Health Nexus etc.",
  },
  {
    format: "Email Header",
    dimensions: "600x200",
    layout: "Forest background, PhyCap logo centered, Gold accent line below",
    notes: "For newsletter/outreach",
  },
  {
    format: "Presentation Slide",
    dimensions: "1920x1080",
    layout: "Cream background with Forest header bar, Marcellus title, Roboto body, Gold accents for data",
    notes: "Google Slides/Keynote",
  },
];

/* ---- AI GRAPHICS ---- */

export const aiGraphicsData = {
  masterPrompt: `Create a professional brand graphic for PhyCap (Physicians Capital Fund), a physician-led venture capital fund. Style: warm editorial photography aesthetic with subtle film grain. Color palette: Forest green #122620 (primary dark), Gold #D3B184 (accent, use sparingly), Cream #F5F2F0 (light backgrounds), Blue Black #070808 (text). Typography: Marcellus (classical serif) for headlines, Roboto (clean sans-serif) for body text. Photography style: candid, editorial, warm natural light, slightly desaturated with visible film grain. Think Kinfolk magazine meets NEJM. Mood: precise, warm, authoritative, insider. Never: stock photography compositions, neon colors, tech-futuristic elements, corporate clip art, emojis, or exclamation points.`,

  formatModifiers: [
    {
      format: "LinkedIn Post",
      prompt:
        "Format: 1200x1200 square. Layout: headline top third in Marcellus serif, supporting text in clean sans-serif, Gold accent line separating sections, PhyCap logo bottom-right corner small.",
    },
    {
      format: "Quote Card",
      prompt:
        'Format: 1080x1080 square. Layout: Forest green #122620 background, oversized Gold quotation mark top-left, quote text in Cream italic centered, attribution line at bottom with Gold dash, subtle grain texture overlay.',
    },
    {
      format: "Stat Graphic",
      prompt:
        "Format: 1080x1080 square. Layout: Cream #F5F2F0 background, large number in Gold #D3B184 (Marcellus serif, 120pt), context line below in Blue Black, source citation small at bottom, subtle grain texture.",
    },
    {
      format: "Event Graphic",
      prompt:
        "Format: 1200x628 landscape. Layout: Forest background with warm editorial photograph at 30% opacity, event name in large Cream Marcellus serif, details in Roboto, Gold accent lines, date and location prominent.",
    },
  ],

  negativePrompts:
    "Never include: stock photo compositions, clip art, abstract geometric shapes, neon or bright saturated colors, futuristic/holographic elements, corporate handshakes or stethoscope imagery, text in all caps (except eyebrow labels), emojis, tech-startup aesthetic, blue as a primary color.",

  styleModifiers: [
    {
      mood: "Authority",
      modifier:
        "Increase contrast, deeper Forest tones, minimal Gold, Marcellus dominant",
    },
    {
      mood: "Warmth",
      modifier:
        "Increase grain, warmer color temperature, more Gold accents, photography-forward",
    },
    {
      mood: "Community",
      modifier:
        "Include human elements (hands, silhouettes, group settings), Cream backgrounds, Roboto dominant",
    },
    {
      mood: "Data",
      modifier:
        "Clean layout, prominent numbers in Marcellus, minimal imagery, Gold for emphasis on key figures",
    },
  ],
};

/* ---- ICONOGRAPHY ---- */

export const iconographyData = {
  style: {
    type: "Line icons (not filled/solid)",
    strokeWeight: "1.5px (matches Lucide default)",
    cornerRadius: "Rounded (not sharp)",
    colorLight: "Forest #122620 on light backgrounds",
    colorDark: "Gold #D3B184 or White on dark backgrounds",
  },

  sizes: [
    { size: "16px", label: "Inline", usage: "Inline with text, metadata indicators" },
    { size: "20px", label: "Navigation", usage: "Sidebar links, tab icons, toolbar items" },
    { size: "24px", label: "Feature", usage: "Section icons, card headers, list markers" },
    { size: "32px", label: "Hero", usage: "Feature highlights, empty states, landing sections" },
  ],

  approvedSets: [
    { name: "Lucide Icons", role: "Primary", note: "Already used in the Brand HQ. Default choice for all new icons." },
    { name: "Phosphor Icons", role: "Secondary", note: "For expanded needs where Lucide lacks coverage." },
    { name: "PhyCap Monogram", role: "Custom", note: "P/C mark for avatar, favicon, and branded icon use." },
  ],

  usageRules: [
    "Icons accompany text; they do not replace it",
    "Maximum 1 color per icon (no multicolor icons)",
    "Icons in navigation use Forest on light, Gold on active state",
    "Icons in content use the section's accent color",
    "Never: emoji as a substitute for icons",
    "Never: filled/solid icon style in the PhyCap system",
    "Never: multicolor icons or animated icons in static content",
  ],

  medicalGuidelines: [
    "Avoid generic medical icons (red cross, caduceus, stethoscope) unless in a clearly clinical context",
    "Prefer abstract representations: workflow arrows, connection nodes, precision targets",
    "The PhyCap visual language is about systems and precision, not clinical nostalgia",
  ],
};

/* ---- LEGACY COMPAT: photoTreatment (used by VisualTab.tsx) ---- */

export const photoTreatment = {
  goal: photographyData.styleDirection,
  quickRef: photographyData.lightroomPreset.sections[0].settings.map((s) => ({
    setting: s.key,
    value: s.value + (s.note ? ` (${s.note})` : ""),
  })),
  doNotRules: photographyData.subjectDont,
};

/* ---- COMPETITOR VISUAL MAP (kept for reference in Logo tab) ---- */

export const competitorVisualMap = [
  { competitor: "Scrub Capital", palette: "Teal/turquoise, white", feel: "Fresh, community-forward, inclusive. More 'startup' than 'institution.'" },
  { competitor: "Doctors Innovate Fund", palette: "Blue, white, tech-forward", feel: "Institutional, Alumni Ventures parent brand. Data-driven, corporate." },
  { competitor: "LRVHealth", palette: "Professional blue/gray", feel: "Conservative, strategic, institutional. Similar to consulting firms." },
  { competitor: "Catalyst Health Ventures", palette: "Clinical/technical blue", feel: "MedTech focused, technical credibility." },
  { competitor: "SV Health Investors", palette: "Corporate blue/green", feel: "Global, institutional, established. Corporate PE feel." },
  { competitor: "Rock Health", palette: "Bright teal/coral", feel: "Digital health native, research-forward, modern." },
];
