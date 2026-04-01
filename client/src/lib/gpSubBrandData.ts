/* =================================================================
   GP SUB-BRAND PLAYBOOK DATA
   Complete sub-brand identity system for all 4 active GPs.
   Each GP has their own visual and verbal identity that ladders
   up to the PhyCap parent brand (house-of-brands model).
   ================================================================= */

/* ------------------------------------------------------------------
   SHARED TYPES
   ------------------------------------------------------------------ */

export interface ColorSpec {
  hex: string;
  name: string;
  usage: string;
  contrastRatio?: string;
  wcagLevel?: "AAA" | "AA" | "FAIL";
}

export interface ColorSystem {
  primary: ColorSpec;
  secondaryAccent: ColorSpec;
  largeTextAccent?: ColorSpec;
  heroTextOptions: ColorSpec[];
  neverUse: { description: string; reason: string }[];
}

export interface ToneDimension {
  leftLabel: string;
  rightLabel: string;
  leftScore: number;
  rightScore: number;
}

export interface ContentFormatRanking {
  rank: number;
  format: string;
}

export interface OpeningPattern {
  description: string;
  example: string;
}

export interface ClosingPattern {
  description: string;
  example: string;
}

export interface EngagementRule {
  rule: string;
}

export interface SamplePost {
  id: string;
  title: string;
  body: string;
  charCount: number;
  format: string;
  hashtags: string[];
  status: "approved" | "draft" | "needs-review";
  visualDirectionNote: string;
}

export interface VisualDirection {
  description: string;
  aiPromptModifier: string;
}

export interface ComplianceApprovalItem {
  contentType: string;
  approvalLevel: "none" | "kate-review" | "kate-plus-legal" | "kate-plus-paul";
  color: "green" | "amber" | "red";
}

export interface VoiceSignal {
  phrase: string;
  meaning: string;
}

export interface GPSubBrand {
  slug: string;
  colorSystem: ColorSystem;
  secondaryTypeface: {
    family: string;
    googleFontsName: string;
    description: string;
    usage: string;
  };
  toneSpectrum: ToneDimension[];
  contentFormatRankings: ContentFormatRanking[];
  openingPattern: OpeningPattern;
  closingPattern: ClosingPattern;
  signaturePhrases: string[];
  hashtags: {
    shared: string[];
    personal: string[];
  };
  engagementRules: EngagementRule[];
  linkedInHeadline: string;
  samplePosts: SamplePost[];
  visualDirection: VisualDirection;
  complianceApprovals: ComplianceApprovalItem[];
  voiceSignals: VoiceSignal[];
}

/* ------------------------------------------------------------------
   SHARED COMPLIANCE DATA
   ------------------------------------------------------------------ */

export const fundDisclaimer =
  "Views expressed are personal and do not constitute investment advice. PhyCap Fund investments involve risk. Past performance does not guarantee future results.";

export const sharedComplianceApprovals: ComplianceApprovalItem[] = [
  { contentType: "Investment announcements", approvalLevel: "kate-plus-paul", color: "red" },
  { contentType: "Portfolio company mentions", approvalLevel: "kate-review", color: "amber" },
  { contentType: "Regulatory/FDA claims", approvalLevel: "kate-plus-legal", color: "red" },
  { contentType: "Personal clinical commentary", approvalLevel: "none", color: "green" },
  { contentType: "Community/events", approvalLevel: "none", color: "green" },
];

export const voiceSignals: VoiceSignal[] = [
  { phrase: "At PhyCap, we...", meaning: "Fund position (official voice)" },
  { phrase: "In my practice/experience...", meaning: "Personal clinical view" },
  { phrase: "I believe...", meaning: "Personal opinion (disclaimer recommended)" },
];

export const sharedHashtags = ["#PhysiciansCapital", "#InvestingWithClinicalPrecision", "#PhyCap"];

/* ------------------------------------------------------------------
   PAUL SLOSAR
   ------------------------------------------------------------------ */

export const paulSubBrand: GPSubBrand = {
  slug: "paul-slosar",
  colorSystem: {
    primary: {
      hex: "#122620",
      name: "Forest",
      usage: "Hero backgrounds, primary brand surface",
    },
    secondaryAccent: {
      hex: "#D3B184",
      name: "Gold",
      usage: "Accent lines, key data highlights, pull quote borders",
      contrastRatio: "7.85:1 on Forest",
      wcagLevel: "AAA",
    },
    largeTextAccent: {
      hex: "#6B9080",
      name: "Sage Green",
      usage: "Large-text accent for section headers and stat callouts",
    },
    heroTextOptions: [
      { hex: "#FFFFFF", name: "White", usage: "Primary hero text" },
      { hex: "#F5F2F0", name: "Cream", usage: "Softer hero text alternative" },
      { hex: "#D3B184", name: "Gold", usage: "Accent hero text, pull quotes" },
    ],
    neverUse: [
      {
        description: "Dark Slate text on Forest background",
        reason: "1.12:1 contrast ratio, completely unreadable",
      },
    ],
  },
  secondaryTypeface: {
    family: "'DM Serif Display', serif",
    googleFontsName: "DM Serif Display",
    description: "Architectural, authoritative serif",
    usage: "Pull quotes and stat callouts in Paul's content",
  },
  toneSpectrum: [
    { leftLabel: "Formal", rightLabel: "Conversational", leftScore: 8, rightScore: 2 },
    { leftLabel: "Data-heavy", rightLabel: "Story-driven", leftScore: 7, rightScore: 3 },
    { leftLabel: "Clinical", rightLabel: "Accessible", leftScore: 6, rightScore: 4 },
    { leftLabel: "Urgent", rightLabel: "Deliberate", leftScore: 3, rightScore: 7 },
    { leftLabel: "Abstract", rightLabel: "Concrete", leftScore: 6, rightScore: 4 },
  ],
  contentFormatRankings: [
    { rank: 1, format: "Long-form text posts (1,200 to 1,800 chars)" },
    { rank: 2, format: "Framework/model posts" },
    { rank: 3, format: "Research commentary" },
    { rank: 4, format: "Thread/series" },
  ],
  openingPattern: {
    description: "Opens with a systems-level observation",
    example:
      "The reason most healthtech companies fail at adoption has nothing to do with the technology.",
  },
  closingPattern: {
    description: "Reframes with a question that elevates",
    example:
      "The real question is whether we are building tools for the workflow that exists or the workflow that should exist.",
  },
  signaturePhrases: [
    "systems architecture",
    "workflow failure mode",
    "clinical precision",
    "the moment of care delivery",
    "delivery science",
  ],
  hashtags: {
    shared: sharedHashtags,
    personal: ["#DeliveryScience", "#HealthcareSystemsThinking", "#WorkflowOptimization"],
  },
  engagementRules: [
    { rule: "Responds thoughtfully with expansion. Adds a framework or lens the commenter had not considered." },
    { rule: "Never dismissive. Engages with other thought leaders." },
    { rule: "Does NOT engage with trolls or low-effort comments." },
  ],
  linkedInHeadline:
    "GP @PhyCap Fund | Spine Surgeon Turned Healthcare Investor | MHCDS (Dartmouth) | Building the fund I wish existed when I was a CMO",
  samplePosts: [
    {
      id: "paul-1",
      title: "Why I Left the OR to Invest in Healthcare Workflows",
      body: `I spent 28 years cutting bone. Spine surgery is as precise as medicine gets. Every millimeter matters.

But the failures I witnessed had nothing to do with surgical technique. They happened upstream. A referral that took 6 weeks when the condition warranted 6 days. A pre-authorization process that required a patient to fail conservative treatment they never needed. An imaging workflow that produced redundant scans because three systems could not talk to each other.

After a decade as CMO at Titan Spine, where I helped position the company for acquisition by Medtronic, I went back to school. Not business school. Dartmouth's Master of Health Care Delivery Science, a degree designed for physicians who understand that healthcare's problems are management problems, not clinical ones.

That experience changed how I see technology in healthcare. Most healthtech companies build products for the workflow that exists. The workflow that exists is broken. The companies worth backing are the ones redesigning the workflow itself.

This is why PhyCap invests at the moment of care delivery. Not upstream in drug development. Not downstream in billing optimization. At the moment a clinician makes a decision and a patient's outcome is determined.

Clinical Care Delivery Workflow Optimization. Software as a Medical Device. Women's Health. Three pillars, one principle: invest where the system fails the people inside it.

I built PhyCap because no fund existed that combined what I learned in the OR with what I learned at Dartmouth with what I learned watching a $300M acquisition from the inside.

The fund I wished existed when I was a CMO. Now it does.

#DeliveryScience #PhysiciansCapital #InvestingWithClinicalPrecision`,
      charCount: 1500,
      format: "Long-form text post",
      hashtags: ["#DeliveryScience", "#PhysiciansCapital", "#InvestingWithClinicalPrecision"],
      status: "approved",
      visualDirectionNote:
        "Architectural, structural. Desaturated, high-contrast B&W with Forest green tint. Clean geometric compositions.",
    },
    {
      id: "paul-2",
      title: "Three Questions for Every Healthtech Pitch",
      body: `Every healthtech pitch I review, I ask three questions:

1. Have you watched the workflow you claim to optimize? Not interviewed stakeholders. Watched. Stood in the room. Counted the steps.

2. Can your product survive a staffing shortage? Most clinical workflows break during understaffing. If your tool requires full staff to function, you have built a fair-weather solution.

3. What happens when the EHR integration fails at 3 AM? Every integration fails. The question is whether your product degrades gracefully or catastrophically.

These are not investor questions. They are clinical questions. And they are the reason PhyCap exists: a fund where the people writing the checks have stood in the rooms where these failures happen.

The delivery science lens is not a nice-to-have. It is the diligence advantage.

#WorkflowOptimization #HealthcareSystemsThinking #PhyCap`,
      charCount: 900,
      format: "Framework post",
      hashtags: ["#WorkflowOptimization", "#HealthcareSystemsThinking", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Framework/blueprint aesthetic. Numbered list rendered as architectural diagram elements. Forest + Gold palette.",
    },
  ],
  visualDirection: {
    description:
      "Architectural, structural. Think: blueprints, building frameworks, surgical precision. Desaturated, high-contrast B&W with Forest green tint. Clean geometric compositions. No people in casual settings. Operating room corridors, structural steel, circuit boards rendered as clinical pathways.",
    aiPromptModifier:
      'Architectural composition. Geometric precision. Desaturated clinical environments. Forest green (#122620) as dominant tone. Gold (#D3B184) for accent lines and key data. DM Serif Display for pull quotes. High contrast. No warm tones. Think: healthcare systems blueprint meets NEJM editorial.',
  },
  complianceApprovals: sharedComplianceApprovals,
  voiceSignals,
};

/* ------------------------------------------------------------------
   ROBIN NOBLE
   ------------------------------------------------------------------ */

export const robinSubBrand: GPSubBrand = {
  slug: "robin-noble",
  colorSystem: {
    primary: {
      hex: "#D3B184",
      name: "Gold",
      usage: "Hero backgrounds, primary brand surface",
    },
    secondaryAccent: {
      hex: "#264653",
      name: "Charcoal Teal",
      usage: "Links, buttons, interactive elements",
      contrastRatio: "4.99:1 on Gold",
      wcagLevel: "AA",
    },
    heroTextOptions: [
      {
        hex: "#122620",
        name: "Forest",
        usage: "ONLY option for hero text on Gold (7.85:1 = AAA)",
        contrastRatio: "7.85:1",
        wcagLevel: "AAA",
      },
    ],
    neverUse: [
      {
        description: "White or Cream text on Gold backgrounds",
        reason: "2.02:1 contrast ratio, fails all WCAG levels",
      },
    ],
  },
  secondaryTypeface: {
    family: "'Lora', serif",
    googleFontsName: "Lora",
    description: "Elegant, warm serif with clinical clarity",
    usage: "Evidence callouts and section headers in Robin's content",
  },
  toneSpectrum: [
    { leftLabel: "Formal", rightLabel: "Conversational", leftScore: 6, rightScore: 4 },
    { leftLabel: "Data-heavy", rightLabel: "Story-driven", leftScore: 8, rightScore: 2 },
    { leftLabel: "Clinical", rightLabel: "Accessible", leftScore: 7, rightScore: 3 },
    { leftLabel: "Urgent", rightLabel: "Deliberate", leftScore: 4, rightScore: 6 },
    { leftLabel: "Abstract", rightLabel: "Concrete", leftScore: 3, rightScore: 7 },
  ],
  contentFormatRankings: [
    { rank: 1, format: "Data visual + narrative" },
    { rank: 2, format: "Evidence breakdown" },
    { rank: 3, format: "Long-form clinical commentary" },
    { rank: 4, format: "Stat-forward posts" },
  ],
  openingPattern: {
    description: "Opens with a data point",
    example:
      "42% of women in menopause report their symptoms were dismissed by a provider.",
  },
  closingPattern: {
    description: "Calls to evidence and action",
    example:
      "The data is clear. The gap is not knowledge. The gap is capital flowing to the problem.",
  },
  signaturePhrases: [
    "the evidence demands",
    "underserved by design",
    "the menopause care gap",
    "clinical-grade data",
    "women's health is not a niche",
  ],
  hashtags: {
    shared: sharedHashtags,
    personal: ["#WomensHealthInvesting", "#MenopauseCareGap", "#ClinicalEvidence"],
  },
  engagementRules: [
    { rule: "Responds with evidence. Cites a study or data point." },
    { rule: "Clinical warmth. Thanks people for sharing personal experiences." },
    { rule: "Redirects misinformation gently with data." },
  ],
  linkedInHeadline:
    "GP @PhyCap Fund | OB-GYN + MHCDS | Women's Health Investor | The evidence demands better capital allocation",
  samplePosts: [
    {
      id: "robin-1",
      title: "The Market Has Not Caught Up",
      body: `The numbers are staggering and the market has not caught up.

1.1 billion women worldwide will be postmenopausal by 2025. The average woman spends a third of her life in menopause. And the standard of care for this population has not meaningfully changed in two decades.

This is not a clinical knowledge gap. We know what works. Hormone therapy, when appropriately prescribed, reduces cardiovascular risk, bone loss, and cognitive decline. The gap is systemic: insufficient provider training (the average OB-GYN residency devotes fewer than 4 hours to menopause), inadequate insurance coverage for evidence-based treatments, and a venture capital ecosystem that has historically categorized women's health as a "niche" market.

$2.6 billion flowed into women's health investment in 2024. That sounds like progress until you realize 71% of FemTech startups under six years old have not reached Series A. The capital is not reaching the companies doing the hardest clinical work.

At PhyCap, women's health is not a side thesis. It is one of three core investment pillars, led by a GP who has practiced OB-GYN for 20 years and treated thousands of patients the system was not designed to serve.

The evidence demands better capital allocation. That is what we are building.

#WomensHealthInvesting #MenopauseCareGap #ClinicalEvidence #PhyCap`,
      charCount: 1200,
      format: "Evidence-driven post",
      hashtags: ["#WomensHealthInvesting", "#MenopauseCareGap", "#ClinicalEvidence", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Warm clinical palette. Gold dominant background with Forest text. Data visualization prominent. Botanical growth metaphors welcome.",
    },
    {
      id: "robin-2",
      title: "Fewer Than 4 Hours",
      body: `A stat that should change how we invest in women's health:

Fewer than 4 hours.

That is the average time an OB-GYN residency devotes to menopause education. For a condition affecting every woman who lives long enough to experience it.

When I left clinical practice to join PhyCap as a GP, this was the gap that defined my investment thesis. The technology to improve menopause care exists. Evidence-based treatment protocols exist. What does not exist in adequate supply: capital directed by clinicians who have sat across from the patients living inside this gap.

I hold two credentials that inform every deal I review: my clinical training from Columbia and Yale, and my Dartmouth MHCDS, which taught me to evaluate healthcare systems, not just individual patients.

The evidence is the strategy.

#WomensHealthInvesting #ClinicalEvidence #PhyCap`,
      charCount: 800,
      format: "Stat-forward post",
      hashtags: ["#WomensHealthInvesting", "#ClinicalEvidence", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Single stat hero treatment. Large '4 hours' rendered in Lora italic. Gold background, Forest text. Clean, evidence-forward.",
    },
  ],
  visualDirection: {
    description:
      "Clinical warmth meets data visualization. Warm tones within the Gold palette. Data charts and graphs with Gold/Forest color scheme. Clinical settings but human-centered (hands, not faces). Evidence-forward: citations styled as design elements. Botanical references (growth, cultivation).",
    aiPromptModifier:
      'Evidence-forward composition. Warm clinical palette. Gold (#D3B184) as dominant background tone with Forest (#122620) text and Charcoal Teal (#264653) accents. Lora italic for pull quotes. Data visualizations prominent. Botanical growth metaphors welcome. Think: clinical evidence report meets Equinox wellness editorial.',
  },
  complianceApprovals: sharedComplianceApprovals,
  voiceSignals,
};

/* ------------------------------------------------------------------
   VIPUL KELLA
   ------------------------------------------------------------------ */

export const vipulSubBrand: GPSubBrand = {
  slug: "vipul-kella",
  colorSystem: {
    primary: {
      hex: "#1F2D35",
      name: "Dark Slate",
      usage: "Hero backgrounds, primary brand surface",
    },
    secondaryAccent: {
      hex: "#D3B184",
      name: "Gold",
      usage: "High-contrast highlights for emphasis and data callouts",
      contrastRatio: "7.00:1 on Dark Slate",
      wcagLevel: "AA",
    },
    largeTextAccent: {
      hex: "#6B9080",
      name: "Sage Green",
      usage: "Large-text accent for section headers",
    },
    heroTextOptions: [
      { hex: "#FFFFFF", name: "White", usage: "Primary hero text" },
      { hex: "#F5F2F0", name: "Cream", usage: "Softer hero text alternative" },
      { hex: "#D3B184", name: "Gold", usage: "Accent hero text, data highlights" },
    ],
    neverUse: [
      {
        description: "Forest text on Dark Slate background",
        reason: "1.12:1 contrast ratio, completely unreadable",
      },
    ],
  },
  secondaryTypeface: {
    family: "'Space Mono', monospace",
    googleFontsName: "Space Mono",
    description: "Technical monospace with urgency",
    usage: "Data callouts and 'hot take' headers in Vipul's content",
  },
  toneSpectrum: [
    { leftLabel: "Formal", rightLabel: "Conversational", leftScore: 3, rightScore: 7 },
    { leftLabel: "Data-heavy", rightLabel: "Story-driven", leftScore: 5, rightScore: 5 },
    { leftLabel: "Clinical", rightLabel: "Accessible", leftScore: 5, rightScore: 5 },
    { leftLabel: "Urgent", rightLabel: "Deliberate", leftScore: 8, rightScore: 2 },
    { leftLabel: "Abstract", rightLabel: "Concrete", leftScore: 2, rightScore: 8 },
  ],
  contentFormatRankings: [
    { rank: 1, format: "Hot take + short post (400 to 800 chars)" },
    { rank: 2, format: "Carousel/slide deck" },
    { rank: 3, format: "Real-time reaction" },
    { rank: 4, format: "Question-driven engagement" },
  ],
  openingPattern: {
    description: "Opens with a scene from the ED",
    example:
      "Last Tuesday at 2 AM, a patient arrived coding and the first thing the resident reached for was a clipboard.",
  },
  closingPattern: {
    description: "Challenges directly",
    example:
      "If your product cannot survive a 2 AM stress test, it is not ready for the market I work in.",
  },
  signaturePhrases: [
    "stress-test this",
    "2 AM test",
    "the sales pitch meets reality",
    "real-time clinical lens",
    "show me the workflow",
  ],
  hashtags: {
    shared: sharedHashtags,
    personal: ["#HealthTechReality", "#EmergencyMedicine", "#The2AMTest"],
  },
  engagementRules: [
    { rule: "Quick, direct, sometimes provocative. Asks follow-up questions." },
    { rule: "Engages in real-time debate. Comfortable with disagreement." },
    { rule: "Brief responses." },
  ],
  linkedInHeadline:
    "GP @PhyCap Fund | ER Physician | If your healthtech cannot survive a 2 AM stress test, we need to talk",
  samplePosts: [
    {
      id: "vipul-1",
      title: "The 2 AM Test",
      body: `Unpopular opinion: most healthtech demos should be conducted at 2 AM in an understaffed emergency department.

Not in a conference room with good WiFi and a full team.

I have been an ER physician for over a decade. I have used technology that was supposed to save time and watched it add 12 clicks to a process that used to take 3. I have seen "intuitive interfaces" require training that nobody has bandwidth to complete during a staffing crisis.

The 2 AM test is simple: does this product make a tired clinician's job easier or harder?

If the answer is harder, the product is not ready. Full stop.

#The2AMTest #HealthTechReality #PhyCap`,
      charCount: 600,
      format: "Hot take post",
      hashtags: ["#The2AMTest", "#HealthTechReality", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Urgent, kinetic. Dark Slate dominant with Gold highlights. Emergency department energy without chaos. Bold typography overlay.",
    },
    {
      id: "vipul-2",
      title: "5 Things From ER Physician Pitch Reviews",
      body: `5 things I have learned reviewing healthtech pitches as an ER physician:

1. If your demo requires stable WiFi, you have never been in my ED.
2. "Reduces documentation time by 40%" means nothing if the remaining 60% still takes longer than the paper chart.
3. The best clinical tools are the ones nurses adopt first. Not physicians.
4. Integration is not a feature. Integration is the entire product.
5. Show me the workflow change, not the dashboard.

What would you add?

#EmergencyMedicine #HealthTechReality #PhyCap`,
      charCount: 500,
      format: "Carousel concept post",
      hashtags: ["#EmergencyMedicine", "#HealthTechReality", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Numbered list as carousel slides. Each point on Dark Slate background with Gold number. Space Mono for headers. High contrast.",
    },
  ],
  visualDirection: {
    description:
      "Urgent, kinetic, tech-forward. Dark Slate palette with high-contrast Gold highlights. Emergency department energy without chaos. Screen interfaces, monitoring equipment, real-time data. Motion blur, urgency lines. Bold typography overlays. Feels like a late-night news brief.",
    aiPromptModifier:
      'Urgent kinetic composition. Dark Slate (#1F2D35) dominant with Gold (#D3B184) highlights for emphasis. Space Mono for data callouts and headers. High contrast. Motion energy without chaos. Screen/interface elements. Think: real-time clinical dashboard meets late-night tech brief.',
  },
  complianceApprovals: sharedComplianceApprovals,
  voiceSignals,
};

/* ------------------------------------------------------------------
   TIM MARTENS
   ------------------------------------------------------------------ */

export const timSubBrand: GPSubBrand = {
  slug: "tim-martens",
  colorSystem: {
    primary: {
      hex: "#F5F2F0",
      name: "Cream",
      usage: "Hero backgrounds, primary brand surface",
    },
    secondaryAccent: {
      hex: "#5B3A29",
      name: "Dark Umber",
      usage: "Warm accents, pull quote borders, interactive elements",
      contrastRatio: "9.05:1 on Cream",
      wcagLevel: "AAA",
    },
    heroTextOptions: [
      {
        hex: "#122620",
        name: "Forest",
        usage: "ONLY option for hero text on Cream (14.23:1 = AAA)",
        contrastRatio: "14.23:1",
        wcagLevel: "AAA",
      },
    ],
    neverUse: [
      {
        description: "White, Cream, or Gold text on Cream backgrounds",
        reason: "Insufficient contrast across all WCAG levels",
      },
    ],
  },
  secondaryTypeface: {
    family: "'Nunito', sans-serif",
    googleFontsName: "Nunito",
    description: "Rounded, approachable sans-serif",
    usage: "Community headlines and event callouts in Tim's content",
  },
  toneSpectrum: [
    { leftLabel: "Formal", rightLabel: "Conversational", leftScore: 4, rightScore: 6 },
    { leftLabel: "Data-heavy", rightLabel: "Story-driven", leftScore: 3, rightScore: 7 },
    { leftLabel: "Clinical", rightLabel: "Accessible", leftScore: 3, rightScore: 7 },
    { leftLabel: "Urgent", rightLabel: "Deliberate", leftScore: 2, rightScore: 8 },
    { leftLabel: "Abstract", rightLabel: "Concrete", leftScore: 2, rightScore: 8 },
  ],
  contentFormatRankings: [
    { rank: 1, format: "Event recap + photos" },
    { rank: 2, format: "Community spotlight/feature" },
    { rank: 3, format: "Question-to-community" },
    { rank: 4, format: "Celebration/milestone post" },
  ],
  openingPattern: {
    description: "Opens with a question",
    example:
      "What happens when 200 physicians walk into a room and nobody is trying to sell them anything?",
  },
  closingPattern: {
    description: "Invites engagement",
    example:
      "I want to hear from the physicians in this community: what would you build if someone handed you the resources?",
  },
  signaturePhrases: [
    "the physician community",
    "building together",
    "from the bedside to the boardroom",
    "the next generation of physician leaders",
  ],
  hashtags: {
    shared: sharedHashtags,
    personal: ["#PhysicianCommunity", "#HealthcareInnovation", "#FromBedsideToBoardroom"],
  },
  engagementRules: [
    { rule: "Warm, inclusive, amplifying. Tags other people." },
    { rule: "Celebrates contributions. Asks follow-up questions that draw others in." },
    { rule: "Uses community language." },
  ],
  linkedInHeadline:
    "GP @PhyCap Fund | Pediatric Cardiothoracic Surgery | Building the physician investor community from NYC",
  samplePosts: [
    {
      id: "tim-1",
      title: "200 Physicians in a Room",
      body: `What happens when 200 physicians walk into a room and nobody is trying to sell them anything?

Last November, PhyCap hosted the Women's Health Nexus at Congressional Country Club in Bethesda. 200+ attendees. Law firm sponsors. American Bazaar as co-host. The agenda was not product demos or fundraising pitches.

The agenda was a question: what would healthcare investment look like if the people closest to patients had real influence over where capital flows?

I watched conversations happen that do not happen at typical healthcare conferences. A pediatric surgeon talking to a menopause specialist about shared patterns in underserved patient populations. An emergency physician debating workflow design with a health policy researcher.

This is what physician-led venture capital looks like in practice. Not a fund with physician consultants. A fund where physicians are the decision-makers, the community builders, and the investors.

The next event is in planning. If you are a physician who wants a seat at this table, the door is open.

#PhysicianCommunity #FromBedsideToBoardroom #PhyCap`,
      charCount: 900,
      format: "Event recap",
      hashtags: ["#PhysicianCommunity", "#FromBedsideToBoardroom", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Community warmth. Cream palette with Forest accents. Group settings, natural light. Inclusive compositions. Event-forward.",
    },
    {
      id: "tim-2",
      title: "The Physician Investor Community Is Growing",
      body: `The physician investor community is growing and I want to highlight why it matters.

When I talk to medical students and residents about their careers, the conversation has shifted. Ten years ago, the question was "which specialty pays the most?" Today, the question is "how do I have influence beyond my patient panel?"

PhyCap's Innovation Circle exists for this generation. Physicians at every career stage who want to understand venture capital, evaluate healthcare technology, and participate in the investment decisions that shape the tools they will use for the next 30 years.

You do not need to be an accredited investor to join. You need to be curious.

#PhysicianCommunity #HealthcareInnovation #PhyCap`,
      charCount: 600,
      format: "Community spotlight",
      hashtags: ["#PhysicianCommunity", "#HealthcareInnovation", "#PhyCap"],
      status: "approved",
      visualDirectionNote:
        "Warm, human. Cream background with Forest text and Dark Umber accents. Nunito for friendly headers. Natural light feel.",
    },
  ],
  visualDirection: {
    description:
      "Community, warmth, human connection. Cream/neutral palette with Forest accents. Group settings, conference rooms, handshakes, audiences. Warm photography with natural light. Inclusive compositions. Event-forward imagery. Feels like a well-designed community newsletter.",
    aiPromptModifier:
      'Community-forward warm composition. Cream (#F5F2F0) background with Forest (#122620) text and Dark Umber (#5B3A29) warm accents. Nunito for friendly headers. Group settings, natural light, inclusive compositions. Think: physician community newsletter meets premium event invitation.',
  },
  complianceApprovals: sharedComplianceApprovals,
  voiceSignals,
};

/* ------------------------------------------------------------------
   LOOKUP MAP
   ------------------------------------------------------------------ */

export const gpSubBrands: Record<string, GPSubBrand> = {
  "paul-slosar": paulSubBrand,
  "robin-noble": robinSubBrand,
  "vipul-kella": vipulSubBrand,
  "tim-martens": timSubBrand,
};
