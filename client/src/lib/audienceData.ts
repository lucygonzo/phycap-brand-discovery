// Audience data extracted from segmentation.md, personas.md, psychographics.md, tam-sam-oam.md

export const audienceStats = [
  {
    label: "Accredited Physician Investors (US)",
    value: "~450K",
    note: "Midpoint estimate of physicians earning $200K+ annually who qualify as accredited investors.",
  },
  {
    label: "Innovation-Engaged Physicians",
    value: "~15K",
    note: "Physicians who are accredited, alternative-investment-active, and healthcare-innovation-engaged.",
  },
  {
    label: "Obtainable LP Base (3-5 yr)",
    value: "150-250",
    note: "Physician LPs across Fund I + Fund II at an average commitment of $200K.",
  },
  {
    label: "Thesis-Aligned Startups / Year",
    value: "300-500",
    note: "Seed to Series A companies fitting at least one PhyCap thesis area annually.",
  },
];

export const segments = [
  {
    name: "Physician LPs",
    priority: "Critical",
    revenueImpact: "High",
    brandBuilding: "High",
    description:
      "Accredited investor physicians who commit capital and bring clinical expertise, deal-flow referrals, and credibility to portfolio companies.",
  },
  {
    name: "Healthcare Founders",
    priority: "Critical",
    revenueImpact: "High",
    brandBuilding: "Medium",
    description:
      "Founders of early-stage healthcare tech companies (Seed to Series A) building within PhyCap's thesis areas: workflow optimization, SaMD, and women's health.",
  },
  {
    name: "Innovation Circle",
    priority: "Important",
    revenueImpact: "Medium",
    brandBuilding: "High",
    description:
      "Physicians, healthcare executives, and innovation-adjacent professionals who engage with PhyCap's community before committing LP capital. Pipeline for future LPs.",
  },
  {
    name: "Strategic Partners",
    priority: "Important",
    revenueImpact: "Low-Medium",
    brandBuilding: "High",
    description:
      "Organizations that co-invest, co-host events, provide deal flow, or amplify PhyCap's platform. Includes FortySix Venture Capital and health systems.",
  },
];

export const personaLP = {
  name: "Dr. Mara Okonkwo",
  title: "Orthopedic Surgeon (Sports Medicine)",
  age: 47,
  location: "Suburban Atlanta",
  income: "~$650K",
  netWorth: "~$2.2M",
  status: "Prospective LP",
  coreMotivation:
    "Evidence that her clinical experience has value in the rooms where healthcare technology decisions are made. The frustration is structural, not financial.",
  identitySignal:
    "Being an LP in a physician-led fund is a professional identity statement, not just a portfolio allocation.",
  trustThreshold:
    "Will not commit $150K+ based on a website. Needs a conversation with a GP who practices in or adjacent to her specialty.",
  journeyStages: [
    { stage: "Awareness", quote: "Another physician fund? Let me see if this one is real." },
    { stage: "Consideration", quote: "The team is legitimate. But I cannot find the details I need on the site." },
    { stage: "Decision", quote: "I need to talk to someone who understands orthopedics." },
    { stage: "Onboarding", quote: "What does Innovation Circle membership involve?" },
    { stage: "Retention", quote: "Show me how my input shaped a deal decision." },
    { stage: "Advocacy", quote: "I just told three colleagues about this fund." },
  ],
};

export const personaFounder = {
  name: "Priya Ramachandran",
  title: "CEO & Co-Founder, NovaCervix (fictional)",
  age: 36,
  location: "Boston",
  product: "AI-powered cervical cancer screening SaMD, FDA Class II",
  stage: "Seed, raising $2.5M",
  status: "Prospective Portfolio Company",
  coreMotivation:
    "Investors who accelerate FDA pathways, open doors to OB-GYN networks, and defend her business model to downstream investors.",
  credibilityNeed:
    "Needs to say: 'Our investors include practicing OB-GYNs, radiologists, and emergency medicine physicians who evaluated this product through a clinical lens.'",
  journeyStages: [
    { stage: "Awareness", quote: "A VC fund with an OB-GYN GP who posts about cervical screening access?" },
    { stage: "Consideration", quote: "The thesis fits perfectly, but I cannot access the pitch process." },
    { stage: "Decision", quote: "I need a direct conversation with Robin or Giovanni." },
    { stage: "Onboarding", quote: "How does the physician network connect to my pilot expansion?" },
    { stage: "Retention", quote: "Are the GPs actually making health system introductions?" },
    { stage: "Advocacy", quote: "I referred two other women's health founders to PhyCap." },
  ],
};

export const psychographicValues = {
  lp: [
    { value: "Clinical Integrity Above All", description: "Evidence-based decision-making carries into investing. A claim without data has no credibility." },
    { value: "Agency in Systems They Navigate", description: "Not satisfied being excellent clinicians in a broken system. They want to reshape it." },
    { value: "Peer Quality Over Network Size", description: "Would rather be in a room with 15 people who challenge their thinking than a Slack channel with 650." },
    { value: "Stewardship, Not Disruption", description: "The word 'stewardship' resonates. The word 'disruption' does not." },
  ],
  founder: [
    { value: "Clinical Evidence as Currency", description: "Pitch decks cite sensitivity/specificity data, not just MAU growth." },
    { value: "Regulatory Competence as Advantage", description: "FDA clearance is a moat, not a burden. They seek investors who share this view." },
    { value: "Mission Without Missionary Positioning", description: "Building businesses, not charities. Impact and returns are the same thing." },
  ],
};

export const psychographicFears = {
  lp: ["Irrelevance", "Naivete", "Reputation Risk", "Illiquidity Regret", "Tokenism"],
  founder: ["Investor Mismatch", "Pilot Purgatory", "Regulatory Delay", "Narrative Hijacking", "Small Fund Limitations"],
};

export const crossSegmentTable = {
  headers: ["Dimension", "Physician LPs", "Healthcare Founders"],
  rows: [
    ["Primary trust signal", "Peer physician credibility", "Clinical evidence + regulatory competence"],
    ["Content format", "NEJM/JAMA-style rigor in shorter form", "Data-driven analysis with market sizing"],
    ["Event format", "Curated, invitation-only, quality venue", "Structured pitch + deep clinical dialogue"],
    ["Social proof", "10 GPs across 13 specialties", "Investors who evaluated through a clinical lens"],
    ["Language that repels", "Disruption, moonshot, doctor money", "Consumer traction, pivot to wellness, skip FDA"],
  ],
};

export const tamSamOam = {
  headers: ["Metric", "Physician LP Market", "Healthcare Founder Market"],
  rows: [
    ["TAM", "~$67.5B (all accredited physician capital)", "~$5-10B (all Seed-Series A healthcare tech)"],
    ["SAM", "~$3B (innovation-engaged physicians)", "~$75-250M (thesis-aligned companies annually)"],
    ["OAM", "~$30-50M (Fund I + II, 150-250 LPs)", "~$6-8M (Fund I deployment)"],
    ["Key Constraint", "Conversion infrastructure (website, education)", "GP evaluation bandwidth, sourcing channels"],
    ["Growth Lever", "Events, LP referral, digital education", "Women's Health Nexus, FortySix co-investment"],
  ],
};

export const lpDiscoveryChannels = [
  "GP personal networks (each GP brings their own clinical communities)",
  "LinkedIn content from GP personal profiles",
  "Women's Health Nexus event and curated gatherings",
  "Peer referral from existing LPs (highest-converting channel)",
  "Medical society conferences and specialty-specific events",
  "MHCDS and MBA alumni networks (Dartmouth Tuck, physician-executive programs)",
];

export const founderDiscoveryChannels = [
  "Pitch page on website (currently inaccessible, creating friction)",
  "LinkedIn content, particularly GP posts on clinical domains",
  "Women's Health Nexus event (for women's health/FemTech founders)",
  "Referrals from co-investing healthcare VCs (FortySix network)",
  "Healthcare startup accelerators and incubators",
  "FDA/regulatory community networks (for SaMD founders)",
];
