// Competitive data extracted from landscape.md, swot.md, positioning-matrix.md, whitespace.md

export const competitorDensity = {
  headers: ["Category", "Competitor", "Threat Level"],
  rows: [
    ["Head-to-Head", "Scrub Capital", "High"],
    ["Head-to-Head", "Doctors Innovate Fund", "Medium"],
    ["Alternative Solution", "LRVHealth", "Low-Medium"],
    ["Industry Peer", "Catalyst Health Ventures", "Low"],
    ["Industry Peer", "SV Health Investors", "Low"],
    ["Attention Competitor", "Rock Health", "Medium"],
    ["Structural Parallel", "Healthy Ventures", "Low"],
  ],
};

export const scrubComparison = {
  headers: ["Dimension", "Scrub Capital", "PhyCap"],
  rows: [
    ["Community", "1,000+ clinicians across 40+ specialties (incl. nurses, PTs, pharmacists)", "10 GPs, 168+ years clinical experience, 13+ specialties"],
    ["GP count", "4 GPs", "10 GPs"],
    ["Check size", "$100K-$300K", "$150K-$500K"],
    ["Fund status", "Fund 1 closed oversubscribed", "Fund I in market"],
    ["Portfolio", "13 companies, 1 unicorn (Midi Health, $1B+)", "BioReact (single confirmed)"],
    ["Clinical depth", "Broad clinician base, generalist positioning", "Specialist physician-only, named specialties"],
    ["Founder proposition", "Wide clinical validation, 50+ clinicians per pitch", "Deep specialist diligence from practicing physicians"],
    ["Content", "Substack newsletter, unconference, VC Fellowship", "No regular content cadence yet"],
    ["Media advantage", "Christina Farr (350K+ followers, ex-CNBC)", "Women's Health Nexus (200+ attendees)"],
  ],
};

export const swotData = {
  strengths: [
    { id: "S1", title: "Unmatched Clinical Depth Per GP", body: "10 GPs with 168+ years across 13+ specialties. Every GP is a physician. Scrub has 4 GPs; PhyCap has 10." },
    { id: "S2", title: "Thesis Precision", body: "Three defined focus areas with explicit exclusions. Scrub Capital and Doctors Innovate Fund both cast wider nets." },
    { id: "S3", title: "Women's Health Nexus Event", body: "200+ attendees at Congressional Country Club. PhyCap owns the event, the attendee list, and the brand association." },
    { id: "S4", title: "Check Size Flexibility", body: "$150K-$500K enables lead or follow at Seed-Series A. Upper end can lead a seed round." },
    { id: "S5", title: "FortySix Co-Management", body: "Operational infrastructure, fund administration, and professional network that a standalone Fund I would lack." },
    { id: "S6", title: "Tulsa HQ Differentiation", body: "Access to Midwest and Southern healthcare systems and physician networks. Cost structure advantage." },
  ],
  weaknesses: [
    { id: "W1", title: "Fund I Limited Track Record", body: "$10M target is small by institutional standards. No prior fund returns or realized exits." },
    { id: "W2", title: "Single Confirmed Portfolio Company", body: "BioReact is the only public investment. Limits ability to showcase thesis validation." },
    { id: "W3", title: "Small Digital Footprint", body: "1,132 LinkedIn followers. Scrub has 1,000+ community members and Christina Farr's 350K+ following." },
    { id: "W4", title: "LP Recruitment Friction", body: "Physicians are time-constrained. Converting interest into commitments requires VC education most physicians lack." },
    { id: "W5", title: "No Content or Research Output", body: "Rock Health owns 'data and insight.' Scrub has a Substack and unconference. PhyCap has no regular cadence." },
  ],
  opportunities: [
    { id: "O1", title: "Insider Precision Territory Unclaimed", body: "No competitor occupies deep specialist clinical insight + institutional rigor. The intersection is open." },
    { id: "O2", title: "Women's Health Category Catalyst", body: "Funding surge + regulatory attention. Few VCs have authentic clinical credentials in Women's Health." },
    { id: "O3", title: "GP Personal Brands as Distribution", body: "10 GPs with professional networks. If half build active LinkedIn presences, reach multiplies without paid media." },
    { id: "O4", title: "SaMD Regulatory Tailwinds", body: "FDA's evolving SaMD framework creates new investable companies. PhyCap is well-positioned at the clinical-regulatory intersection." },
    { id: "O5", title: "Innovation Circle Growth", body: "A physician community creates network effects without diluting the physician-only credential signal." },
    { id: "O6", title: "Scrub Governance Vulnerabilities", body: "GP conflict of interest (Slotkin co-founded RevBio, a portfolio company). Breadth dilutes with scale." },
  ],
  threats: [
    { id: "T1", title: "Scrub Capital Momentum", body: "1,000+ members, oversubscribed fund, unicorn portfolio company, multi-channel engagement. Urgency to claim territory has increased." },
    { id: "T2", title: "Platform Consolidation", body: "Alumni Ventures (625K+ network) could launch additional physician-specific funds. Platform scale enables rapid iteration." },
    { id: "T3", title: "Health System Venture Arms", body: "Mayo Clinic, Cleveland Clinic, Mass General Brigham run internal venture arms with built-in customers." },
    { id: "T4", title: "LP Fatigue with Emerging Managers", body: "Competitive VC fundraising environment. Physicians may default to more familiar investment vehicles." },
    { id: "T5", title: "Founder Preference for Brand Names", body: "Rock Health, SV Health carry brand weight PhyCap has not yet built. Temporary but real disadvantage." },
  ],
};

export const positioningMatrix = {
  headers: ["Competitor", "Clinical Depth", "Community Focus", "Quadrant"],
  rows: [
    ["PhyCap", "Highest (10 physician GPs, 13+ specialties)", "Physician LP model", "Upper Right"],
    ["Scrub Capital", "Below center (broad clinician base)", "Clinician LP, broader definition", "Center Right, Below Center"],
    ["Doctors Innovate Fund", "Low (passive physician LPs)", "Physician LPs via platform", "Lower Right"],
    ["LRVHealth", "Below center (institutional relationships)", "Institutional LP base", "Center Left, Below Center"],
    ["SV Health Investors", "Above center ($4B healthcare)", "Fully institutional", "Upper Left"],
    ["Rock Health", "Below center (research-driven)", "Institutional/corporate LPs", "Lower Left"],
    ["Catalyst Health Ventures", "Above center (MedTech specialist)", "Institutional LP model", "Upper Left"],
    ["Healthy Ventures", "Below center (broad infrastructure)", "Center", "Center, Below Center"],
  ],
};

export const whitespaceEvidence = [
  {
    title: "No Competitor Combines Named Specialist GPs with Fund Discipline",
    body: "Scrub aggregates from 1,000+ clinicians without attributing diligence to named specialists. Doctors Innovate Fund has physician capital but not physician-led decisions. LRVHealth has institutional access but no individual physician authority.",
  },
  {
    title: "Positioning Matrix Confirms an Empty Quadrant",
    body: "The upper right quadrant (Specialist Physician-Led + Physician LP Model) contains only PhyCap. No competitor is moving toward that quadrant. Scrub expands horizontally; others are structurally institutional.",
  },
  {
    title: "Founders Must Choose Between Clinical Insight and Investment Professionalism",
    body: "No single fund offers both specialty-level clinical depth and institutional fund mechanics (proper term sheets, reserve strategy, portfolio construction). PhyCap fills that gap.",
  },
  {
    title: "Visual and Verbal Territory is Unclaimed",
    body: "Teal/community-first: Scrub Capital. Blue/institutional: Doctors Innovate Fund. Enterprise: LRVHealth. Data-forward: Rock Health. Forest/Gold specialist precision: Nobody.",
  },
  {
    title: "Women's Health Focus Creates a Thematic Anchor",
    body: "Women's Health Nexus (200+ attendees) is a proprietary event no other physician-led VC has replicated. Category ownership is available.",
  },
];

export const competitiveKeyTakeaway =
  "The upper right quadrant of the positioning matrix (specialist physician-led + physician LP model) is empty except for PhyCap. Scrub Capital is the nearest competitor but moving horizontally toward community breadth, not vertically toward specialist depth. The Insider Precision territory is defensible because occupying it requires both physician GPs (hard to recruit) and physician LPs (hard to convert) simultaneously.";
