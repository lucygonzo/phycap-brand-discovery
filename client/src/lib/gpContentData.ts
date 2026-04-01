export const gpContentMeta = {
  sectionNumber: "18",
  title: "Content Network",
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

export interface WorkspaceItem {
  title: string;
  status: "pipeline" | "draft" | "review" | "scheduled" | "published";
  description: string;
}

export interface CompanyPageStrategy {
  postingCadence: string;
  amplificationRule: string;
  independentTopics: string[];
  announcementSequence: string[];
}

export interface GPProfile {
  name: string;
  slug: string;
  title: string;
  specialty: string;
  credentials: string;
  base: string;
  cadence: string;
  supportModel: string;
  bannerConcept: string;
  bannerTagline: string;
  gpColor: string;
  oneThingOnly: string;
  editorialBio: string;
  voiceTraits: string[];
  voiceGuardrails: string[];
  voiceDo: string[];
  voiceDont: string[];
  writingStyleNotes: string[];
  ownedTerritories: string[];
  sharedTerritories: string[];
  bestFormat: string;
  neverPost: string;
  topicIdeas: { topic: string; status: "idea" | "drafted" | "scheduled" | "published" }[];
  workspaceItems: WorkspaceItem[];
  companyPageStrategy: CompanyPageStrategy;
  bioTemplate: string[];
  ctaLanguage: string;
  photoNotes: string;
}

export const gpProfiles: GPProfile[] = [
  {
    name: "Paul Slosar, MD, MHCDS",
    slug: "paul-slosar",
    title: "Lead General Partner",
    specialty: "Orthopedic Surgery / Spine",
    credentials: "MHCDS (Dartmouth), Former CMO Titan Spine",
    base: "Bay Area, CA / Park City, UT",
    cadence: "3x per week",
    supportModel: "Self-directed with editorial guidance",
    bannerConcept: "The Architect",
    bannerTagline: "Investing with Clinical Precision(SM)",
    gpColor: "#122620",
    oneThingOnly: "The surgeon who saw that healthcare's failures are systems failures, not clinical ones.",
    editorialBio: "Paul Slosar built his career cutting bone and rethinking systems. A spine surgeon with a Dartmouth MHCDS who served as CMO of Titan Spine, he now leads PhyCap's investment thesis with the same precision he brought to the OR. His lens is structural: if the workflow is broken, the technology matters less than the redesign.",
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
    voiceDo: [
      "The workflow fails at the handoff between radiology and surgical planning. That gap is where we invest.",
      "Delivery science gives us a framework for evaluating whether a technology actually reduces friction or simply relocates it.",
      "After 20 years in spine surgery, I can tell you: the best technology is the one the surgeon forgets is there.",
    ],
    voiceDont: [
      "AI is going to completely transform healthcare as we know it!",
      "Traditional healthcare is broken and needs disrupting.",
      "As physician-investors, we just get it better than anyone else.",
    ],
    writingStyleNotes: [
      "Opens with a systems-level observation, not a personal anecdote",
      "Builds from specific clinical detail to broader investment thesis",
      "Closes with a question that invites peer-level engagement",
      "Paragraphs are dense and deliberate; every sentence earns its place",
      "References research and frameworks by name (MHCDS, delivery science, value-based care)",
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
      { topic: "The delivery science case for physician-led VC", status: "drafted" },
      { topic: "What spine surgery taught me about workflow optimization", status: "scheduled" },
      { topic: "The $10M Fund I thesis: why this size, why these pillars", status: "published" },
      { topic: "SaMD at the regulatory sweet spot: Class I/II returns", status: "idea" },
      { topic: "From CMO to GP: what device industry experience reveals", status: "idea" },
      { topic: "The moment of truth in medicine: investing at the point of care", status: "drafted" },
      { topic: "MHCDS: the credential healthcare venture needs", status: "idea" },
      { topic: "Why workflow optimization is a category, not a feature", status: "scheduled" },
      { topic: "What 168 years of clinical experience sees that models miss", status: "idea" },
      { topic: "The founders we want to meet", status: "idea" },
    ],
    workspaceItems: [
      { title: "Delivery science thought piece", status: "draft", description: "Long-form post connecting MHCDS framework to Fund I investment criteria. Needs second-pass edit." },
      { title: "Spine workflow optimization post", status: "scheduled", description: "Scheduled for Tuesday. Final version approved." },
      { title: "Fund I thesis summary", status: "published", description: "Published March 28. Strong engagement. Repost cycle complete." },
      { title: "SaMD regulatory landscape", status: "pipeline", description: "Research phase. Gathering Class I/II data points for evidence anchor." },
    ],
    companyPageStrategy: {
      postingCadence: "Paul's thesis posts are the primary content the company page amplifies. When Paul publishes, the company page reposts within 2 hours with added context.",
      amplificationRule: "Company page adds a 1 to 2 sentence frame before reposting. Never a bare repost.",
      independentTopics: [
        "Fund announcements and milestones",
        "Portfolio company news (with Paul adding clinical framing)",
        "Quarterly thesis updates",
      ],
      announcementSequence: [
        "Company page publishes official announcement",
        "Paul adds personal commentary within 4 hours",
        "Other GPs amplify over 24 hours with their own clinical lens",
      ],
    },
    bioTemplate: [
      "Orthopedic Spine Surgeon",
      "Lead GP, PhyCap Ventures",
      "MHCDS (Dartmouth) | Former CMO, Titan Spine",
      "Investing with Clinical Precision(SM)",
    ],
    ctaLanguage: "What clinical workflow are you redesigning? I want to hear about it.",
    photoNotes: "Professional headshot with neutral background. Reduced saturation, cool temperature shift. The Architect energy: composed, deliberate, no forced smile.",
  },
  {
    name: "Vipul Kella, MD, MBA",
    slug: "vipul-kella",
    title: "General Partner",
    specialty: "Emergency Medicine",
    credentials: "MBA",
    base: "Washington, DC",
    cadence: "2x per week",
    supportModel: "Ideas bank (topic prompts, not ghostwriting)",
    bannerConcept: "The First Responder",
    bannerTagline: "Emergency Medicine. Venture Capital. The Technology Between.",
    gpColor: "#1F2D35",
    oneThingOnly: "The ER physician who stress-tests healthtech at 2 AM, when the sales pitch meets reality.",
    editorialBio: "Vipul Kella practices emergency medicine in Washington, DC, where technology either works under pressure or doesn't. That binary lens shapes his investment perspective. With an MBA layered onto his clinical training and proximity to policy, he evaluates healthtech the way he evaluates a trauma patient: fast, evidence-based, and skeptical of anything that slows the workflow.",
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
    voiceDo: [
      "Last Tuesday at 2 AM, the interoperability system failed mid-handoff. That failure mode is exactly what we look for in diligence.",
      "Policy moves markets. The latest CMS ruling on remote monitoring changes the unit economics for three companies in our pipeline.",
      "The ED is the only place where every healthtech claim gets tested under real pressure, every shift.",
    ],
    voiceDont: [
      "Healthcare technology has so much potential to change the world!",
      "The current administration is failing our healthcare system.",
      "Nothing in healthtech actually works, but we try anyway.",
    ],
    writingStyleNotes: [
      "Opens with a specific clinical moment (time, place, situation)",
      "Sentences are shorter and punchier than Paul's longer-form style",
      "Moves quickly from observation to investment insight",
      "References policy and regulation as market signals, not political commentary",
      "Closes with a pointed question or a challenge to conventional thinking",
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
      { topic: "The 2 AM interoperability test", status: "drafted" },
      { topic: "What emergency medicine teaches about evaluating startups", status: "published" },
      { topic: "The alert fatigue investment thesis", status: "idea" },
      { topic: "DC policy watch: regulatory impact on healthtech", status: "scheduled" },
      { topic: "Why the ED is the best diligence environment", status: "idea" },
      { topic: "The physician who understands code", status: "idea" },
      { topic: "SaMD in the emergency department", status: "drafted" },
      { topic: "The workaround economy in clinical care", status: "idea" },
      { topic: "What policy professionals get wrong about clinical tech", status: "idea" },
      { topic: "The founder question I always ask", status: "idea" },
    ],
    workspaceItems: [
      { title: "2 AM interoperability post", status: "draft", description: "Core narrative drafted. Needs clinical detail sharpening and PhyCap thesis connection." },
      { title: "Policy watch: CMS remote monitoring", status: "scheduled", description: "Scheduled for Thursday. Tied to recent CMS ruling." },
      { title: "Startup evaluation framework", status: "published", description: "Published March 25. High engagement from founder audience." },
      { title: "SaMD in the ED", status: "pipeline", description: "Gathering case examples from recent shifts. Two strong anecdotes identified." },
    ],
    companyPageStrategy: {
      postingCadence: "Vipul's policy and real-time clinical posts get company page engagement within 2 hours. Policy posts often get company page reposts because of their broad relevance.",
      amplificationRule: "Company page frames Vipul's posts with thesis connection when reposting.",
      independentTopics: [
        "Policy analysis tied to portfolio impact",
        "Technology failure case studies (anonymized)",
        "ED workflow improvement data",
      ],
      announcementSequence: [
        "Company page publishes policy-relevant update",
        "Vipul adds clinical and DC perspective within 4 hours",
        "Paul may add systems-level commentary if relevant",
      ],
    },
    bioTemplate: [
      "Emergency Medicine Physician",
      "GP, PhyCap Ventures",
      "MBA | Washington, DC",
      "Emergency Medicine. Venture Capital. The Technology Between.",
    ],
    ctaLanguage: "Building something that survives the 2 AM test? Let's talk.",
    photoNotes: "Professional headshot with energy. Slightly less formal than Paul. Reduced saturation, cool shift. The First Responder energy: alert, engaged, ready.",
  },
  {
    name: "Robin Noble, MD, MHCDS",
    slug: "robin-noble",
    title: "General Partner",
    specialty: "Obstetrics and Gynecology",
    credentials: "MHCDS (Dartmouth)",
    base: "Portland, Maine",
    cadence: "2x per week",
    supportModel: "Close ghostwriting-style support (drafts for review)",
    bannerConcept: "The Evidence Architect",
    bannerTagline: "Women's Health. Delivery Science. The Investments That Follow.",
    gpColor: "#D3B184",
    oneThingOnly: "The OB-GYN who translates the data on women's health gaps into an investment thesis no one else is writing.",
    editorialBio: "Robin Noble practices OB-GYN in Portland, Maine, and holds a Dartmouth MHCDS alongside her medical degree. She brings the same evidence-forward rigor to venture capital that she brings to clinical care. Her focus area, women's health technology and the menopause care gap, represents one of the largest underserved markets in healthcare, and she writes about it with the specificity that only a practicing clinician can offer.",
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
    voiceDo: [
      "The data on menopause care is striking: 85% of women experience symptoms, yet fewer than 20% of OB-GYN residencies include menopause-specific training.",
      "When I talk to founders building for women's health, I ask one question first: what does the clinical workflow look like today, without your product?",
      "Health equity is not an abstraction. In Portland, I see the specific populations and the specific gaps. That specificity drives our investment lens.",
    ],
    voiceDont: [
      "We need more women in leadership in healthcare and venture capital!",
      "Current women's health solutions are inadequate and outdated.",
      "Health equity matters because it's the right thing to do.",
    ],
    writingStyleNotes: [
      "Opens with a data point or clinical evidence, not an opinion",
      "Builds the case methodically: evidence, clinical observation, investment implication",
      "Tone is warm but never sentimental; the evidence carries the emotional weight",
      "Speaks directly to non-clinical audiences without oversimplifying",
      "Includes the human dimension alongside the data (the patient behind the statistic)",
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
      { topic: "The menopause technology gap: what the data shows", status: "scheduled" },
      { topic: "Why I joined a VC fund (and why I did not leave the exam room)", status: "published" },
      { topic: "Preventive care delivery: where the workflow breaks", status: "idea" },
      { topic: "The MHCDS lens on women's health systems", status: "drafted" },
      { topic: "Health inequity as an investment map", status: "idea" },
      { topic: "What OB-GYN teaches about clinical device design", status: "idea" },
      { topic: "Portland, 6 AM: a day in community OB-GYN practice", status: "idea" },
      { topic: "The evidence base for women's health venture", status: "drafted" },
      { topic: "Menopause is not a niche: the market case", status: "idea" },
      { topic: "What I look for in a women's health founder", status: "idea" },
    ],
    workspaceItems: [
      { title: "Menopause technology gap post", status: "scheduled", description: "Scheduled for Wednesday. Evidence-anchored with three data points. Final review complete." },
      { title: "MHCDS women's health lens", status: "draft", description: "First draft complete. Needs tighter connection to fund thesis in closing paragraph." },
      { title: "Why I joined PhyCap", status: "published", description: "Published March 22. Strong engagement from women's health community." },
      { title: "Evidence base for women's health VC", status: "draft", description: "Research compilation in progress. Four key studies identified." },
    ],
    companyPageStrategy: {
      postingCadence: "Robin's evidence-anchored posts are ideal for company page amplification. Her women's health focus brings a distinct audience the company page otherwise would not reach.",
      amplificationRule: "Company page reposts Robin's data-forward content with a thesis-level framing sentence.",
      independentTopics: [
        "Women's Health Nexus franchise content",
        "Menopause market data and analysis",
        "Health equity investment framework",
      ],
      announcementSequence: [
        "Robin publishes evidence-anchored post",
        "Company page reposts with thesis frame within 2 hours",
        "Paul may add delivery science commentary if relevant",
      ],
    },
    bioTemplate: [
      "OB-GYN, Community Practice",
      "GP, PhyCap Ventures",
      "MHCDS (Dartmouth) | Portland, Maine",
      "Women's Health. Delivery Science. The Investments That Follow.",
    ],
    ctaLanguage: "Building for women's health with clinical evidence behind it? I want to see your data.",
    photoNotes: "Professional headshot with warmth. Portland light if possible. Reduced saturation, cool shift. The Evidence Architect energy: approachable, thoughtful, engaged.",
  },
  {
    name: "Tim Martens, MD, PhD",
    slug: "tim-martens",
    title: "General Partner",
    specialty: "Pediatric Cardiothoracic Surgery",
    credentials: "PhD",
    base: "New York City",
    cadence: "1x per week",
    supportModel: "Community and events focus, light briefs",
    bannerConcept: "The Convener",
    bannerTagline: "Where Physicians and Innovation Meet",
    gpColor: "#F5F2F0",
    oneThingOnly: "The pediatric cardiac surgeon who builds the rooms where physicians and founders actually learn from each other.",
    editorialBio: "Tim Martens operates on the smallest hearts in the most complex cases, and that precision carries into how he thinks about community and technology. Based in New York City with a PhD alongside his surgical training, he anchors PhyCap's community strategy. His role in the content network is distinct: while the other GPs lead with clinical and investment analysis, Tim convenes the conversations where those insights cross-pollinate.",
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
    voiceDo: [
      "At last week's NYC healthtech gathering, a pediatric device founder asked a question I keep thinking about: how do you design for a patient who can't articulate what they need?",
      "The physician-investor community is small enough that trust compounds quickly. Every conversation this quarter has led to at least one introduction worth making.",
      "My PhD research trained me to evaluate methodology before conclusions. That habit turns out to be the most useful skill in diligence.",
    ],
    voiceDont: [
      "Great event last night! So many amazing people doing incredible work!",
      "The mitral valve repair technique using 4-0 polypropylene suture with pledgeted mattress...",
      "PhyCap is the best physician-led fund and you should check us out!",
    ],
    writingStyleNotes: [
      "Opens with a specific moment from an event, conversation, or community interaction",
      "Keeps clinical references accessible to a broad professional audience",
      "Tone is collegial: writing to peers, not broadcasting to followers",
      "Always includes a concrete takeaway or observation, never just a recap",
      "Closes with an invitation to continue the conversation",
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
      { topic: "What pediatric cardiac surgery teaches about technology trust", status: "idea" },
      { topic: "Building the physician-investor community: why it matters now", status: "drafted" },
      { topic: "The PhD advantage in healthcare diligence", status: "idea" },
      { topic: "NYC healthcare innovation: what the ecosystem gets right", status: "scheduled" },
      { topic: "One question from a recent event that stuck with me", status: "idea" },
    ],
    workspaceItems: [
      { title: "Physician-investor community piece", status: "draft", description: "Core narrative about community trust drafted. Needs one more specific anecdote." },
      { title: "NYC ecosystem post", status: "scheduled", description: "Scheduled for Friday. Tied to recent healthcare innovation event." },
      { title: "Event recap: Q1 healthtech gathering", status: "pipeline", description: "Notes from March event. Identifying the strongest single takeaway for the post." },
    ],
    companyPageStrategy: {
      postingCadence: "Tim's community-focused posts get company page engagement. Events content is often reposted because it showcases PhyCap's network.",
      amplificationRule: "Company page amplifies Tim's event content with a community-building frame.",
      independentTopics: [
        "Event announcements and community invitations",
        "Physician-investor network growth updates",
        "NYC healthcare ecosystem highlights",
      ],
      announcementSequence: [
        "Tim publishes event reflection or community post",
        "Company page reposts with community frame within 2 hours",
        "Other GPs engage with substantive comments drawing from their specialties",
      ],
    },
    bioTemplate: [
      "Pediatric Cardiothoracic Surgeon",
      "GP, PhyCap Ventures",
      "PhD | New York City",
      "Where Physicians and Innovation Meet",
    ],
    ctaLanguage: "Physicians and founders building together. If that describes you, let's connect.",
    photoNotes: "Professional headshot, NYC energy. Reduced saturation, cool shift. The Convener energy: warm, approachable, intellectually engaged.",
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

export const contentCalendar = {
  monthlyStructure: [
    { week: "Week 1", focus: "Planning and distribution", detail: "Monthly planning doc published with 4 to 5 topic clusters, thesis connections, and GP assignments. Briefs distributed to each GP in their preferred format." },
    { week: "Week 2", focus: "Primary content production", detail: "Paul and Robin publish their anchor posts. Vipul publishes policy or clinical observation piece. Company page amplification begins." },
    { week: "Week 3", focus: "Follow-up and cross-pollination", detail: "GPs publish follow-up content. Cross-GP commentary on each other's posts. Tim publishes community or event content." },
    { week: "Week 4", focus: "Review and measurement", detail: "Monthly review of per-GP engagement, inbound inquiries, topic performance, and network growth. Quarterly adjustments planned." },
  ],
  topicOwnership: [
    { cluster: "Investment Thesis", primary: "Paul", supporting: ["Robin"], cadence: "2x/month" },
    { cluster: "Clinical Workflow", primary: "Paul", supporting: ["Vipul"], cadence: "3x/month" },
    { cluster: "Policy and Regulation", primary: "Vipul", supporting: ["Paul"], cadence: "2x/month" },
    { cluster: "Women's Health", primary: "Robin", supporting: [], cadence: "4x/month" },
    { cluster: "Technology Evaluation", primary: "Vipul", supporting: ["Paul", "Tim"], cadence: "2x/month" },
    { cluster: "Community and Events", primary: "Tim", supporting: [], cadence: "4x/month" },
    { cluster: "Delivery Science", primary: "Paul", supporting: ["Robin"], cadence: "2x/month" },
    { cluster: "SaMD Landscape", primary: "Vipul", supporting: ["Paul"], cadence: "1x/month" },
  ],
  crossPostingRules: [
    "Company page engages (like, comment, or repost) within 2 hours of a GP post going live",
    "GPs amplify company page content on a staggered 4 to 8 hour schedule",
    "GPs comment on each other's posts with substantive clinical perspective, not generic praise",
    "No more than 2 GP posts from different GPs on the same day to avoid audience fatigue",
    "Company page never bare-reposts; always adds a 1 to 2 sentence thesis frame",
    "Investment announcements follow a sequenced rollout: company page first, then GPs over 24 hours",
  ],
};
