export const gpContentMeta = {
  sectionNumber: "18",
  title: "GP Content Strategy",
  subtitle:
    "Four physician personal brands multiplying the company page's reach. A coordinated content engine where each GP's clinical lens refracts the same thesis into four distinct markets.",
  keyTakeaway:
    "PhyCap's GP content network is the fund's most defensible marketing channel. Ten physician GPs with clinical credibility earned over years of practice represent a distribution advantage no amount of paid advertising can replicate. Four GPs form the active content core, producing 8x/week combined across orthopedic surgery, emergency medicine, OB-GYN, and pediatric cardiothoracic surgery.",
};

export const gpContentStats = [
  {
    value: "8x",
    label: "Weekly Posts Combined",
    note: "Paul 3x, Vipul 2x, Robin 2x, Tim 1x. Coordinated cadence.",
  },
  {
    value: "4",
    label: "Active Content GPs",
    note: "Of 10 total GPs. Remaining 6 are not yet activated for content.",
  },
  {
    value: "4",
    label: "Geographic Footholds",
    note: "Bay Area/Park City, Washington DC, Portland ME, New York City.",
  },
  {
    value: "5",
    label: "Content System Layers",
    note: "Monthly planning, GP briefs, cross-posting protocol, quality standards, measurement.",
  },
];

export interface GPProfile {
  name: string;
  title: string;
  specialty: string;
  credentials: string;
  base: string;
  cadence: string;
  supportModel: string;
  bannerConcept: string;
  bannerTagline: string;
  voiceTraits: string[];
  voiceGuardrails: string[];
  ownedTerritories: string[];
  sharedTerritories: string[];
  bestFormat: string;
  neverPost: string;
  topicIdeas: string[];
}

export const gpProfiles: GPProfile[] = [
  {
    name: "Paul Slosar, MD, MHCDS",
    title: "Lead General Partner",
    specialty: "Orthopedic Surgery / Spine",
    credentials: "MHCDS (Dartmouth), Former CMO Titan Spine",
    base: "Bay Area, CA / Park City, UT",
    cadence: "3x per week",
    supportModel: "Self-directed with editorial guidance",
    bannerConcept: "The Architect",
    bannerTagline: "Investing with Clinical Precision(SM)",
    voiceTraits: [
      "Authoritative without being authoritarian",
      "Evidence-based (references data, studies, patterns)",
      "Systems-thinking (individual observations to structural patterns)",
      "Measured (no hyperbole, no urgency language)",
      "Intellectually generous (explains without condescending)",
    ],
    voiceGuardrails: [
      "Never casual or colloquial",
      "Never dismissive of incumbents or traditional healthcare",
      "Never defensive about physician-led investing",
      "Always specific (name the workflow, the failure mode, the data point)",
    ],
    ownedTerritories: [
      "Investment thesis thought leadership",
      "MHCDS and delivery science",
      "Healthcare systems architecture",
      "The structural case for physician-led VC",
    ],
    sharedTerritories: [
      "Clinical workflow optimization (with Vipul)",
      "Medical device and SaMD landscape (GP team)",
      "Healthcare policy implications (with Vipul)",
    ],
    bestFormat: "Long-form text posts (1,200 to 1,800 chars) with clear thesis, evidence, and closing question",
    neverPost: "Generic 'AI will transform healthcare' takes without PhyCap-specific clinical insight",
    topicIdeas: [
      "The delivery science case for physician-led VC",
      "What spine surgery taught me about workflow optimization",
      "The $10M Fund I thesis: why this size, why these pillars",
      "SaMD at the regulatory sweet spot: Class I/II returns",
      "From CMO to GP: what device industry experience reveals",
      "The moment of truth in medicine: investing at the point of care",
      "MHCDS: the credential healthcare venture needs",
      "Why workflow optimization is a category, not a feature",
      "What 168 years of clinical experience sees that models miss",
      "The founders we want to meet",
    ],
  },
  {
    name: "Vipul Kella, MD, MBA",
    title: "General Partner",
    specialty: "Emergency Medicine",
    credentials: "MBA",
    base: "Washington, DC",
    cadence: "2x per week",
    supportModel: "Ideas bank (topic prompts, not ghostwriting)",
    bannerConcept: "The First Responder",
    bannerTagline: "Emergency Medicine. Venture Capital. The Technology Between.",
    voiceTraits: [
      "Direct and energetic (shorter sentences, sharper observations)",
      "Tech-fluent without being tech-worshipping",
      "Pattern-recognizing (clinical moments to investment insights)",
      "Constructively skeptical (critical of bad tech, optimistic about good)",
      "Accessible (explains ED concepts without dumbing them down)",
    ],
    voiceGuardrails: [
      "Never abstract without a clinical anchor",
      "Never partisan on policy",
      "Never defeatist about healthcare technology",
      "Never overly polished or corporate",
    ],
    ownedTerritories: [
      "Technology failure in real-time clinical environments",
      "Emergency medicine as a proving ground for healthtech",
      "Healthcare policy and regulation as investment signal",
      "The tech-fluent physician's perspective on innovation",
    ],
    sharedTerritories: [
      "Clinical workflow optimization (with Paul)",
      "Healthcare policy implications (with Paul)",
      "SaMD regulatory environment (GP team)",
    ],
    bestFormat: "Medium-length posts (800 to 1,200 chars) starting with clinical observation, expanding to insight",
    neverPost: "Performative outrage about healthcare failures without connecting to what PhyCap is doing about it",
    topicIdeas: [
      "The 2 AM interoperability test",
      "What emergency medicine teaches about evaluating startups",
      "The alert fatigue investment thesis",
      "DC policy watch: regulatory impact on healthtech",
      "Why the ED is the best diligence environment",
      "The physician who understands code",
      "SaMD in the emergency department",
      "The workaround economy in clinical care",
      "What policy professionals get wrong about clinical tech",
      "The founder question I always ask",
    ],
  },
  {
    name: "Robin Noble, MD, MHCDS",
    title: "General Partner",
    specialty: "Obstetrics and Gynecology",
    credentials: "MHCDS (Dartmouth)",
    base: "Portland, Maine",
    cadence: "2x per week",
    supportModel: "Close ghostwriting-style support (drafts for review)",
    bannerConcept: "The Evidence Architect",
    bannerTagline: "Women's Health. Delivery Science. The Investments That Follow.",
    voiceTraits: [
      "Evidence-forward (leads with data, research, clinical guidelines)",
      "Clinically warm (genuine care without sentimentality)",
      "Persuasive without stridency (evidence, not accusation)",
      "Accessible to non-clinical audiences",
      "Quietly authoritative (demonstrates expertise through specificity)",
    ],
    voiceGuardrails: [
      "Never preachy or lecturing",
      "Never dismissive of existing women's health solutions",
      "Never generic about health equity without specific populations",
      "Never clinically cold (always include the human dimension)",
    ],
    ownedTerritories: [
      "Women's health as an investment category",
      "The menopause care gap",
      "Health inequity as an investment lens",
      "Preventive care delivery and technology needs",
      "Women's Health Nexus franchise",
    ],
    sharedTerritories: [
      "MHCDS and delivery science (with Paul)",
      "Clinical care delivery workflow optimization (with Paul and Vipul)",
      "Structural case for physician-led VC (with Paul)",
    ],
    bestFormat: "Evidence-anchored posts (1,000 to 1,400 chars) opening with data, building to investment insight",
    neverPost: "Generic 'we need more women in leadership' without connecting to PhyCap's thesis and clinical evidence",
    topicIdeas: [
      "The menopause technology gap: what the data shows",
      "Why I joined a VC fund (and why I did not leave the exam room)",
      "Preventive care delivery: where the workflow breaks",
      "The MHCDS lens on women's health systems",
      "Health inequity as an investment map",
      "What OB-GYN teaches about clinical device design",
      "Portland, 6 AM: a day in community OB-GYN practice",
      "The evidence base for women's health venture",
      "Menopause is not a niche: the market case",
      "What I look for in a women's health founder",
    ],
  },
  {
    name: "Tim Martens, MD, PhD",
    title: "General Partner",
    specialty: "Pediatric Cardiothoracic Surgery",
    credentials: "PhD",
    base: "New York City",
    cadence: "1x per week",
    supportModel: "Community and events focus, light briefs",
    bannerConcept: "The Convener",
    bannerTagline: "Where Physicians and Innovation Meet",
    voiceTraits: [
      "Collegial (writes as a peer, not a broadcaster)",
      "Grounded in specificity (always a concrete observation)",
      "Research-informed (evidence and methodology references)",
      "Warm without being casual (approachable but serious)",
    ],
    voiceGuardrails: [
      "Never generic networking content without substance",
      "Never technical to the point of excluding non-surgical audiences",
      "Never promotional about PhyCap without intellectual value",
      "Always include at least one specific observation or takeaway",
    ],
    ownedTerritories: [
      "Community and events (recaps, reflections, commentary)",
      "Clinical excellence as an investment standard",
      "The physician-investor community",
    ],
    sharedTerritories: [
      "Clinical device evaluation (with Paul)",
      "SaMD in surgical settings (GP team)",
      "Research methodology and evidence evaluation",
    ],
    bestFormat: "Event-driven posts (600 to 1,000 chars) with specific takeaways and community invitation",
    neverPost: "Content-free event recaps that name-drop without a specific insight or PhyCap connection",
    topicIdeas: [
      "What pediatric cardiac surgery teaches about technology trust",
      "Building the physician-investor community: why it matters now",
      "The PhD advantage in healthcare diligence",
      "NYC healthcare innovation: what the ecosystem gets right",
      "One question from a recent event that stuck with me",
    ],
  },
];

export const contentSystemLayers = [
  {
    layer: "Layer 1: Monthly Planning Document",
    description:
      "Single planning doc with 4 to 5 topic clusters, thesis connections, GP assignments, key data points, and external hooks.",
  },
  {
    layer: "Layer 2: GP-Adapted Briefs",
    description:
      "Each GP receives a tailored version: Paul gets scaffolding, Vipul gets idea prompts, Robin gets near-final drafts, Tim gets light briefs.",
  },
  {
    layer: "Layer 3: Cross-Posting Protocol",
    description:
      "Rules for company page engagement (within 2 hours), GP amplification (staggered 4 to 8 hours), and cross-GP commentary.",
  },
  {
    layer: "Layer 4: Quality Standards",
    description:
      "Every post must be rooted in clinical experience, connected to the thesis, free of em dashes, and written in the GP's authentic voice.",
  },
  {
    layer: "Layer 5: Measurement",
    description:
      "Monthly review of per-GP engagement, inbound inquiries, topic performance, network growth, and company page trends. Quarterly adjustments.",
  },
];

export const companyPageRoles = [
  { contentType: "Fund announcements", companyPage: "Primary publisher", gpRole: "GPs amplify with personal commentary" },
  { contentType: "Investment thesis", companyPage: "Publishes framework", gpRole: "GPs illustrate with clinical examples" },
  { contentType: "Portfolio news", companyPage: "Official announcement", gpRole: "GPs add clinical context" },
  { contentType: "Industry analysis", companyPage: "Curated reposts from GPs", gpRole: "GPs publish original analysis" },
  { contentType: "Events and community", companyPage: "Promotes events", gpRole: "Tim leads community voice" },
];

export const linkedInBannerSpecs = {
  dimensions: "1584 x 396 pixels",
  format: "PNG (for text) or JPEG (for photographic backgrounds)",
  safeZone: "Center 1200 x 300 pixels (for mobile cropping)",
};

export const photoTreatment = [
  { parameter: "Saturation", setting: "Reduced 20 to 30% from original" },
  { parameter: "Color temperature", setting: "Shifted 10 to 15% cooler" },
  { parameter: "Shadow tint", setting: "Forest green (#122620) at 8 to 12% opacity" },
  { parameter: "Contrast", setting: "Slightly increased (+5 to 10%)" },
  { parameter: "Crop", setting: "Head and shoulders, centered, ~20% space above head" },
];
