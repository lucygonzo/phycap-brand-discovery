// Journey data extracted from journey-map.md

export interface JourneyStage {
  stage: string;
  mindset: string;
  touchpoints: string[];
  frictionPoints: string[];
  contentNeeded: string[];
}

export const lpJourney: JourneyStage[] = [
  {
    stage: "Awareness",
    mindset: "I keep hearing that physicians should be more involved in healthcare innovation, but I do not know what that looks like.",
    touchpoints: [
      "LinkedIn post from a PhyCap GP discussing a clinical workflow problem",
      "Peer mention at a medical society conference or alumni event",
      "Women's Health Nexus event coverage or invitation",
      "PhyCap website homepage (first visit from LinkedIn click-through)",
    ],
    frictionPoints: [
      "Company LinkedIn has only 1,132 followers; awareness depends on GP personal reach",
      "No paid distribution to extend content beyond organic networks",
      "Brand name 'PhyCap' is not self-explanatory to first-time visitors",
    ],
    contentNeeded: [
      "GP-authored LinkedIn posts demonstrating clinical depth (2-3x/week)",
      "One-page 'Why Physician-Led VC' explainer",
      "Short overview video (under 3 minutes)",
    ],
  },
  {
    stage: "Consideration",
    mindset: "This looks different. The team is real. The thesis is specific. I want to understand how this works before committing capital.",
    touchpoints: [
      "Resources page (8+ articles on thesis-aligned topics)",
      "Community page (4 LP testimonials)",
      "Team page (accordion format, 10 GPs)",
      "Peer conversation with an existing LP or GP",
    ],
    frictionPoints: [
      "LEARN page is not publicly accessible (most significant friction point)",
      "LP testimonials are brief pull quotes, not detailed stories",
      "Accordion format on Team page requires clicking through 10 bios",
      "No portfolio showcase beyond BioReact",
    ],
    contentNeeded: [
      "Detailed fund overview (thesis, check size, team, timeline)",
      "LP FAQ: minimum commitment, fund structure, capital calls, liquidity",
      "'What LPs Actually Do' content (Innovation Circle, advisory opportunities)",
    ],
  },
  {
    stage: "Decision",
    mindset: "I believe in the thesis and trust the team. Now I need the mechanics and must discuss with my spouse/partner.",
    touchpoints: [
      "One-on-one conversation with a specialty-matched GP",
      "INVEST page (currently inaccessible)",
      "Fund documentation (PPM, subscription agreement)",
      "Conversation with financial advisor or wealth manager",
    ],
    frictionPoints: [
      "INVEST page is not publicly accessible (blocks commitment pathway)",
      "No clear next step from website for prospective LPs",
      "Financial advisor gatekeeping (unfamiliar with physician-led VC)",
      "$150K minimum is significant for early-career physicians",
    ],
    contentNeeded: [
      "Fund mechanics one-pager for non-physician household members",
      "Financial advisor briefing document",
      "Clear commitment process documentation",
    ],
  },
  {
    stage: "Onboarding",
    mindset: "I have committed capital. Show me this is more than a financial transaction.",
    touchpoints: [
      "Welcome communication and packet",
      "Innovation Circle introduction",
      "First LP update (fund activity, portfolio introductions)",
      "Introduction to other LPs in similar specialties",
    ],
    frictionPoints: [
      "If onboarding is purely transactional, emotional engagement drops",
      "Innovation Circle programming cadence not documented publicly",
      "GPs with active practices have limited bandwidth for LP management",
    ],
    contentNeeded: [
      "LP onboarding guide (Year 1 expectations, capital calls, Innovation Circle)",
      "Portfolio introductions with clinical context",
      "LP directory or peer networking mechanism",
    ],
  },
  {
    stage: "Retention",
    mindset: "Show me how clinical expertise shaped a deal decision and why Fund II is worth it.",
    touchpoints: [
      "Quarterly LP updates (performance, new investments, pipeline)",
      "Annual LP meeting or event",
      "Innovation Circle ongoing programming",
      "GP-to-LP communication about clinical relevance of deals",
    ],
    frictionPoints: [
      "Limited portfolio performance storytelling in Fund I's early stages",
      "LP expectations for 'active role' must be met with concrete engagement",
      "GP bandwidth may deprioritize LP relationship management",
    ],
    contentNeeded: [
      "Quarterly LP letters beyond financial metrics",
      "Case studies: how physician input changed a portfolio company's trajectory",
      "Fund II preview and early commitment opportunity",
    ],
  },
  {
    stage: "Advocacy",
    mindset: "I tell colleagues about PhyCap because I believe in what we are building together.",
    touchpoints: [
      "Peer conversations at medical society events",
      "LinkedIn sharing and commenting on PhyCap content",
      "Event co-hosting or speaking at PhyCap gatherings",
      "Introduction of qualified physician prospects to GPs",
    ],
    frictionPoints: [
      "Value proposition requires a concise explanation for referrals",
      "Without accessible LEARN/INVEST pages, advocates cannot point prospects to resources",
      "Compliance considerations in certain institutional settings",
    ],
    contentNeeded: [
      "Shareable LP stories for forwarding to colleagues",
      "'Bring a Colleague' event invitations",
      "LP referral program or clear referral communication",
    ],
  },
];

export const founderJourney: JourneyStage[] = [
  {
    stage: "Awareness",
    mindset: "I need investors who understand healthcare, not investors I have to educate about FDA pathways for 30 minutes before pitching.",
    touchpoints: [
      "LinkedIn post from a GP discussing a clinical problem the product addresses",
      "Women's Health Nexus event (for women's health/FemTech founders)",
      "Referral from another healthcare VC who co-invests with PhyCap/FortySix",
      "PhyCap website homepage and thesis description",
    ],
    frictionPoints: [
      "Brand awareness among founders is limited vs. established healthcare VCs",
      "$150K-$500K check size may not be visible in the market",
      "No dedicated 'For Founders' landing page",
    ],
    contentNeeded: [
      "GP-authored content on specific clinical domains",
      "Clear thesis page (check size, stage, focus areas, exclusions)",
      "Portfolio company profiles demonstrating thesis in practice",
    ],
  },
  {
    stage: "Consideration",
    mindset: "The team has the right specialties. The thesis aligns. But can a Fund I with $10M actually help me?",
    touchpoints: [
      "Team page (evaluating relevant GP expertise)",
      "PITCH page (currently inaccessible)",
      "Conversations with existing portfolio founders",
      "GP LinkedIn profiles (evaluating depth and engagement)",
    ],
    frictionPoints: [
      "PITCH page not accessible (forces unstructured inbound)",
      "No portfolio beyond BioReact for track record evaluation",
      "Fund I size raises follow-on capacity questions",
      "FortySix co-management relationship may confuse founders",
    ],
    contentNeeded: [
      "'How We Evaluate' content on clinical due diligence",
      "Founder testimonials or case studies",
      "FortySix relationship explanation",
      "GP specialty mapping (which GP evaluates which domain)",
    ],
  },
  {
    stage: "Decision",
    mindset: "I want PhyCap on my cap table. I need terms, GP engagement commitment, and physician network access.",
    touchpoints: [
      "Term sheet and investment agreement review",
      "Deep-dive meeting with relevant GP(s)",
      "Reference calls with portfolio founders",
      "Co-investment discussions with FortySix and round participants",
    ],
    frictionPoints: [
      "GP response times may lag if in surgery or on clinical rotations",
      "Fund I size means PhyCap is rarely lead investor",
      "No established pattern of co-investment cadence beyond FortySix",
    ],
    contentNeeded: [
      "Term sheet standards and investment process timeline",
      "Post-investment GP engagement model documentation",
      "Innovation Circle access for portfolio companies",
    ],
  },
  {
    stage: "Onboarding",
    mindset: "Capital is in the bank. Now I need to activate the physician network for validation, pilots, and advisory.",
    touchpoints: [
      "Post-investment kickoff with assigned GP(s)",
      "Introduction to Innovation Circle and relevant physician contacts",
      "Quarterly reporting cadence established",
      "FortySix operational support introduction",
    ],
    frictionPoints: [
      "GP-to-company specialty mismatch may feel superficial",
      "Innovation Circle participation is voluntary",
      "Founder expectations for GP hours may exceed capacity",
    ],
    contentNeeded: [
      "Portfolio company onboarding guide",
      "GP-to-company matching document",
      "Innovation Circle engagement playbook",
    ],
  },
  {
    stage: "Retention",
    mindset: "PhyCap's network opened doors that would have taken 18 months. I want continued support through my next fundraise.",
    touchpoints: [
      "Ongoing GP advisory (monthly or quarterly check-ins)",
      "Follow-on investment discussions",
      "Health system introduction facilitation",
      "Clinical validation and evidence generation support",
    ],
    frictionPoints: [
      "Fund I reserve capacity limits follow-on ability",
      "GP bandwidth divides across growing portfolio",
      "Physician network introductions depend on individual GP relationships",
    ],
    contentNeeded: [
      "Follow-on investment policy documentation",
      "Health system introduction process",
      "Clinical evidence generation guidance",
    ],
  },
  {
    stage: "Advocacy",
    mindset: "I tell every healthcare founder they need physician investors, and PhyCap is the real version of that.",
    touchpoints: [
      "Founder referrals of other healthcare startups to PhyCap",
      "Speaking at PhyCap events about portfolio experience",
      "Co-authored content with PhyCap GPs",
      "Participation in Women's Health Nexus as portfolio showcase",
    ],
    frictionPoints: [
      "Founders may hesitate to endorse a Fund I without demonstrated returns",
      "Co-authored content requires coordination between busy parties",
      "Competitive dynamics may limit public investor endorsement",
    ],
    contentNeeded: [
      "Portfolio company showcase for events and website",
      "Co-branded GP + founder content opportunities",
      "Case study format highlighting physician-led evaluation",
    ],
  },
];

export const brokenPaths = {
  headers: ["Broken Path", "Journey Affected", "Stage", "Impact"],
  rows: [
    ["LEARN page not accessible", "Physician LP", "Consideration", "Blocks self-serve education"],
    ["INVEST page not accessible", "Physician LP", "Decision", "Blocks commitment pathway"],
    ["PITCH page not accessible", "Healthcare Founder", "Consideration", "Blocks structured deal flow intake"],
    ["Multiple competing CTAs", "Both", "All stages", "Dilutes user intent; no clear single path"],
    ["No portfolio showcase", "Both", "Consideration", "Limits social proof and track record evaluation"],
    ["Contact through info@46.capital only", "Both", "Consideration", "General inbox creates uncertainty"],
  ],
};

export const journeyKeyTakeaway =
  "Both journeys share a common structural failure: the highest-intent actions (LEARN, INVEST, PITCH) are inaccessible on the website. Every prospect who clicks these links and finds nothing is a lost conversion. The conversion path dead-ends at the moment of highest intent.";
