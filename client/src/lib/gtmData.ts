// GTM data extracted from gtm-strategy.md, channel-prioritization.md, launch-timeline.md

export const gtmFitScores = [
  { dimension: "Product-market fit", score: 4, rationale: "Thesis areas align with market demand. Physician-led diligence is a genuine value-add. Gap: limited portfolio proof." },
  { dimension: "Channel readiness", score: 2, rationale: "LinkedIn nascent (1,132 followers). No content platform. GP personal brands not activated. Event model proven but not repeatable yet." },
  { dimension: "Message clarity", score: 3, rationale: "Insider Precision archetype defined. Messaging hierarchy exists. Not yet tested with audiences or deployed consistently." },
  { dimension: "Team distribution capacity", score: 3, rationale: "10 GPs with networks, but no playbook, templates, or cadence for content or outreach. Raw capacity is high; systematic execution is not." },
  { dimension: "Competitive differentiation", score: 4, rationale: "Upper right quadrant is empty except for PhyCap. Thesis specificity and Women's Health Nexus are defensible." },
];

export const gtmOverallScore = {
  value: "3.2 / 5",
  label: "Overall GTM Fit",
  note: "Strategic positioning is strong. Execution infrastructure is the bottleneck.",
};

export const growthMotions = [
  {
    name: "Community-Led LP Recruitment",
    description: "Physician LPs recruited through GP networks, Innovation Circle, events (Women's Health Nexus), and content-driven inbound.",
    keyChannel: "LinkedIn + Events",
  },
  {
    name: "Inbound Founder Outreach",
    description: "Healthcare founders discover PhyCap through LinkedIn content, event presence, GP referral networks, and category-specific visibility.",
    keyChannel: "LinkedIn + GP Networks",
  },
  {
    name: "Co-Investor Network Development",
    description: "Building relationships with healthcare VCs at different stages or thesis areas. Generates deal flow, LP referrals, and credibility through association.",
    keyChannel: "Direct Relationships",
  },
];

export const channelRankings = [
  {
    tier: "Tier 1: Primary",
    channel: "LinkedIn (Company + GP Brands)",
    investment: "High",
    rationale: "Physician decision-makers use LinkedIn as primary professional platform. 10 GPs = 10 distribution nodes. Zero distribution cost.",
    target: "Company followers: 1,132 to 2,500 by Q3 2026",
  },
  {
    tier: "Tier 2: Strategic",
    channel: "Events (Women's Health Nexus + Webinars)",
    investment: "Medium-High",
    rationale: "In-person events convert physicians at higher rates than digital. 200+ attendee proof of concept at Congressional Country Club.",
    target: "Second anchor event at 250+ attendees. Quarterly webinar series.",
  },
  {
    tier: "Tier 2: Strategic",
    channel: "Substack / Long-Form Content",
    investment: "Medium",
    rationale: "Long-form builds thesis authority. Builds direct email relationship independent of algorithm changes. Content is repurposable.",
    target: "2 articles per month. Subscriber base growing.",
  },
  {
    tier: "Tier 3: Opportunistic",
    channel: "Podcast Appearances",
    investment: "Low",
    rationale: "Earned media has higher credibility than owned media. Each appearance creates a durable content asset.",
    target: "1-2 GP appearances per quarter.",
  },
  {
    tier: "Tier 3: Opportunistic",
    channel: "Email Nurture",
    investment: "Low",
    rationale: "Converts warm leads over long physician LP decision cycles. Only channel where PhyCap owns the audience entirely.",
    target: "Segmented lists (LP prospects, founders, Innovation Circle). Monthly newsletter.",
  },
];

export const budgetAllocation = {
  headers: ["Channel", "Budget Share", "Primary Cost Driver"],
  rows: [
    ["LinkedIn", "10-15%", "Content tools, design templates, occasional promotion"],
    ["Events", "40-50%", "Venue, production, attendee experience, travel"],
    ["Substack/Content", "10-15%", "Writing support, editing, design"],
    ["Podcast", "5%", "Media prep, promotional assets"],
    ["Email", "10-15%", "Email platform, list management"],
    ["Reserve", "10-15%", "Opportunistic spending on emerging channels"],
  ],
};

export const launchTimeline = [
  {
    phase: "Phase 1: Before April 3",
    goal: "Brand system decisions for Kate's review",
    items: [
      "Final color palette documentation (Forest, Gold, Blue Black, Dark Slate, Cream)",
      "Brand archetype summary (Insider Precision)",
      "Typography recommendations finalized",
      "Messaging hierarchy review",
      "Competitive positioning one-page summary",
      "Brand HQ scope and structure proposal",
    ],
  },
  {
    phase: "Phase 2: April 2026",
    goal: "Brand HQ live, GP playbooks complete, visual identity deployed",
    items: [
      "Week 1: Post-Kate meeting adjustments, lock visual identity",
      "Week 2: Brand HQ build (navigable system, cross-references, version tracking)",
      "Week 3: GP playbooks (LinkedIn, LP conversation, event representation, content creation)",
      "Week 4: Visual identity deployment (LinkedIn, email signatures, presentation decks)",
    ],
  },
  {
    phase: "Phase 3: May-June 2026",
    goal: "Template library complete, content calendar running, GP content launch",
    items: [
      "May: Template library (LinkedIn posts, newsletters, LP materials, event assets)",
      "May: 90-day content calendar built and assigned",
      "June Week 1: Soft launch with first 2-3 GPs posting",
      "June Week 2: Substack/newsletter launch",
      "June Week 3-4: Expand to 5+ GPs. First metrics review.",
    ],
  },
];

export const phase2ExitCriteria = [
  "Brand HQ is live, organized, and accessible to the full team",
  "All four GP playbooks written and distributed",
  "LinkedIn company page updated with brand-consistent assets",
  "At least 5 GPs have updated their LinkedIn profiles",
  "Email signature templates deployed across the team",
  "Presentation deck template ready for use",
];

export const phase3ExitCriteria = [
  "Template library has 15+ templates across formats",
  "Content calendar built for 90 days and being followed",
  "5+ GPs posting on LinkedIn at least twice per month",
  "Substack/newsletter launched with 2+ editions",
  "Company LinkedIn grown from 1,132 to 1,500+ followers",
  "First metrics review completed with documented insights",
  "Q3 webinar series planned with dates, topics, GP assignments",
  "Fall 2026 event planning has begun",
];

export const gtmKeyTakeaway =
  "The GTM strategy scores 3.2/5 overall. Product-market fit (4/5) and competitive differentiation (4/5) are strong. Channel readiness (2/5) is the bottleneck. The path forward is not more strategy but systematic execution: activate GP voices, build the LEARN/INVEST/PITCH pages, and deploy the brand system across all touchpoints.";

export const strategyPillars = [
  { name: "Brand System Deployment", timing: "April 2026", objective: "Visual and verbal infrastructure for all GTM activities." },
  { name: "GP Content Activation", timing: "May-June 2026", objective: "Turn 10 GPs into a distributed content engine." },
  { name: "Event Franchise Development", timing: "Q3 2026", objective: "Build on Women's Health Nexus with repeatable event model." },
  { name: "LP Pipeline Systematization", timing: "Ongoing", objective: "Convert GP relationship networks into trackable LP pipeline." },
  { name: "Founder Inbound Development", timing: "Q3-Q4 2026", objective: "50%+ of deals through inbound channels." },
];
