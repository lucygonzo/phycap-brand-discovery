// Competitive data extracted from landscape.md, swot.md, positioning-matrix.md, whitespace.md

export interface CompetitorProfile {
  name: string;
  category: string;
  categoryId: string;
  threatLevel: "High" | "Medium" | "Low-Medium" | "Low";
  positioning: string;
  whatTheyDo: string;
  builtFor: string;
  brandFeel: string;
  brandColor: string;
  fundDetails: string;
  checkSize: string;
  portfolio: string;
  community: string;
  strength: string;
  weakness: string;
  phycapEdge: string;
}

export const categories = [
  { id: "all", label: "All" },
  { id: "head-to-head", label: "Head-to-Head" },
  { id: "alt-solution", label: "Alt. Solution" },
  { id: "industry-peer", label: "Industry Peer" },
  { id: "attention", label: "Attention" },
  { id: "structural", label: "Structural" },
];

export const competitors: CompetitorProfile[] = [
  {
    name: "Scrub Capital",
    category: "Head-to-Head",
    categoryId: "head-to-head",
    threatLevel: "High",
    positioning: "Clinician-Powered Investing",
    whatTheyDo: "Physician- and clinician-led VC fund with a 1,000+ member community (branded 'Clinicians who VC'). Fund 1 closed oversubscribed beyond $10M target. 13 known portfolio companies including unicorn Midi Health ($1B+ valuation). Co-hosts 'Healthcare, Unscripted' unconference and runs a VC Fellowship program.",
    builtFor: "Clinicians broadly: physicians, nurses, PTs, OTs, pharmacists across 40+ specialties. Also healthcare founders seeking wide clinical validation.",
    brandFeel: "Teal-dominant, startup-friendly, community-forward. More accessible than institutional.",
    brandColor: "#459b8f",
    fundDetails: "$10M+ (oversubscribed), 4 GPs",
    checkSize: "$100K-$300K",
    portfolio: "13 companies, 1 unicorn (Midi Health), Canopy ($22M Series B), Spark Spine, Oshi Health, Clarity Pediatrics",
    community: "1,000+ members (up from 650 at launch). 50+ clinicians attend each pitch. VC Fellowship ($15/hr, 6-month program).",
    strength: "Community velocity (54% growth in year one), Christina Farr's 350K+ social following and media background, oversubscribed fund validates LP demand, unicorn in portfolio signals quality.",
    weakness: "Breadth dilutes clinical authority. A pharmacist and a cardiac surgeon bring fundamentally different insight. Check size caps at $300K, limiting lead positions. GP Jonathan Slotkin co-founded RevBio (portfolio company), a governance concern.",
    phycapEdge: "PhyCap has 10 physician GPs vs. Scrub's 4. Specialist depth per GP (named specialties covering the full clinical lifecycle) vs. Scrub's breadth across clinician types. PhyCap's physician-only model carries a stronger credibility signal for both LPs and founders.",
  },
  {
    name: "Doctors Innovate Fund",
    category: "Head-to-Head",
    categoryId: "head-to-head",
    threatLevel: "Medium",
    positioning: "Investing in doctor-entrepreneurs solving thorny healthtech problems",
    whatTheyDo: "Physician-focused fund on the Alumni Ventures platform (625K+ network, 1,600+ investors). Provides passive VC exposure with professional fund management. Sample portfolio includes Accolade, Kindbody, Florence Healthcare, Luma Health, Oura, SonderMind.",
    builtFor: "Physicians who want passive VC exposure without active involvement in diligence. Optimized for the physician who wants to write a check, not roll up sleeves.",
    brandFeel: "Blue, institutional, corporate. Inherits Alumni Ventures' polished financial-product aesthetic.",
    brandColor: "#1a56db",
    fundDetails: "Part of Alumni Ventures platform ($4B+ AUM across all funds)",
    checkSize: "Fund-level (diversified across ~15-20 investments)",
    portfolio: "Accolade, Kindbody, Florence Healthcare, Luma Health, Oura, SonderMind",
    community: "625K+ Alumni Ventures network, 180K+ community, 1,600+ investors across Focused Funds",
    strength: "Immediate institutional infrastructure: fund admin, legal, compliance, investor relations. Platform scale and a recognizable portfolio (Oura, SonderMind).",
    weakness: "Physicians are passive investors, not operators. No mechanism for deep clinical diligence or GP-level engagement. One of many funds on the Alumni Ventures shelf, diluting the physician-specific signal.",
    phycapEdge: "PhyCap's physicians lead diligence and make investment decisions. Doctors Innovate provides capital access; PhyCap provides clinical agency. The fundamental promise is different: invest passively (DIF) vs. invest with your expertise (PhyCap).",
  },
  {
    name: "LRVHealth",
    category: "Alternative Solution",
    categoryId: "alt-solution",
    threatLevel: "Low-Medium",
    positioning: "Transforming Healthcare From the Inside",
    whatTheyDo: "Boston-based healthcare VC with 25 years of history, 68 portfolio companies, 3 unicorns. Health system and payer LPs. Series A and B focus (later stage than PhyCap). Runs an 'Inside Healthcare' platform connecting portfolio companies with health system partners. 9 investments in 2025.",
    builtFor: "Healthcare founders at Series A/B who need health system distribution. Health systems and payers seeking structured innovation pipelines.",
    brandFeel: "Professional, enterprise-grade. Signals institutional credibility over community warmth.",
    brandColor: "#2d5f8a",
    fundDetails: "25 years, 68 companies, 3 unicorns. Active deployer (9 investments in 2025).",
    checkSize: "Series A/B (larger checks, later stage)",
    portfolio: "Phreesia, IntelyCare, Change Healthcare (acquired), Olive (acquired), Cleerly, Season Health",
    community: "Health system and payer LP relationships covering 200M+ Americans",
    strength: "Health system LP relationships create genuine commercial pathways. 25-year track record, 3 unicorns. Active pace (9 deals in 2025) signals momentum.",
    weakness: "Series A/B focus means limited overlap at seed stage. Institutional model lacks individual clinical voice. Health system priorities may not align with what seed-stage founders need.",
    phycapEdge: "Different stage (seed vs. Series A/B), different LP model (individual physicians vs. health systems). LRVHealth is a potential co-investor or follow-on partner, not a direct competitor. PhyCap's individual physician model provides a founder relationship LRV's institutional model cannot.",
  },
  {
    name: "Catalyst Health Ventures",
    category: "Industry Peer",
    categoryId: "industry-peer",
    threatLevel: "Low",
    positioning: "Investing in transformative medical technologies addressing global unmet needs",
    whatTheyDo: "MedTech-focused VC targeting physical medical devices and technologies that change clinical practice. Boston-based.",
    builtFor: "MedTech founders building hardware-dependent medical technologies and physical devices.",
    brandFeel: "Technology-forward, clinical. More device/hardware-oriented than digital health.",
    brandColor: "#3a6b8c",
    fundDetails: "Established (founded ~2008). Boston, MA.",
    checkSize: "Early-stage MedTech",
    portfolio: "MedTech device companies (not overlapping with PhyCap's SaMD focus)",
    community: "Traditional institutional LP base",
    strength: "Clear MedTech thesis with deep pattern recognition in FDA device pathways, manufacturing, and clinical trials for hardware.",
    weakness: "MedTech/hardware focus means they are not competitive in SaMD (software), digital health, or workflow optimization. Different thesis entirely.",
    phycapEdge: "Non-overlapping thesis. Catalyst is hardware devices; PhyCap is software (SaMD) and workflows. Could be a referral partner for hardware deals PhyCap passes on.",
  },
  {
    name: "SV Health Investors",
    category: "Industry Peer",
    categoryId: "industry-peer",
    threatLevel: "Low",
    positioning: "Empowering innovators to improve patients' lives",
    whatTheyDo: "Global, multi-stage healthcare investment platform with $4B+ in total commitments. Covers venture, growth, and buyout across biotechnology, pharmaceuticals, medical devices, and healthcare services. 75 IPOs/M&As.",
    builtFor: "Later-stage healthcare companies and institutional LPs seeking diversified healthcare exposure.",
    brandFeel: "Institutional, global, established. Communicates scale and longevity.",
    brandColor: "#1a3c5e",
    fundDetails: "$4B+ historical commitments, 75 IPOs/M&As",
    checkSize: "Multi-stage (venture through buyout)",
    portfolio: "Global, multi-sector. 75 exits via IPO or M&A.",
    community: "Fully institutional LP base",
    strength: "$4B in commitments and multi-stage capability. Scale is the moat. Global reach.",
    weakness: "Scale makes them irrelevant as a seed/Series A competitor. They invest in biotech and pharma (which PhyCap excludes). Sets LP expectations for what mature healthcare VC looks like, but not competitive at Fund I stage.",
    phycapEdge: "Entirely different scale and stage. SV Health is aspirational context (where healthcare VC can go at scale) rather than a competitive threat.",
  },
  {
    name: "Rock Health",
    category: "Attention Competitor",
    categoryId: "attention",
    threatLevel: "Medium",
    positioning: "The knowledge layer of digital health",
    whatTheyDo: "Three entities: Rock Health Capital (early-stage fund, ~$50M AUM, $100K-$5M checks, ~$1.5M sweet spot, 4 portfolio companies), enterprise advisory, and nonprofit research. Overall: 90 companies, 3 unicorns, 1 IPO, 21 acquisitions. Published the definitive 2025 digital health funding report ($14.2B). Founder Halle Tecco sits on Scrub Capital's editorial board.",
    builtFor: "Digital health founders, industry analysts, corporate innovation teams, journalists. Content drives their brand more than fund performance.",
    brandFeel: "Clean, data-forward, editorial. Feels more like a media/research brand than a traditional fund.",
    brandColor: "#00b4d8",
    fundDetails: "Rock Health Capital: ~$50M AUM, $100K-$5M checks. Overall: 90 companies, 3 unicorns.",
    checkSize: "$100K-$5M (sweet spot ~$1.5M)",
    portfolio: "Overall: Omada, Augmedix, CollectiveHealth. Rock Health Capital: Rosarium Health, Pear Suite, Burst (4 total).",
    community: "Research readership (industry-wide). Halle Tecco on Scrub Capital's editorial board creates cross-competitor alignment.",
    strength: "Content and research output is unmatched. Rock Health reports are cited across the industry. Three-entity structure creates multiple touchpoints. The Tecco/Scrub connection strengthens both against PhyCap.",
    weakness: "Rock Health Capital is small (~$50M AUM, 4 companies) relative to the research brand. Research brand has eclipsed the investment brand. Not physician-led and does not claim clinical depth.",
    phycapEdge: "PhyCap competes on clinical depth, not content volume. Rock Health's reports are industry infrastructure, not a brand PhyCap needs to out-publish. PhyCap's differentiator (physician diligence) is orthogonal to Rock Health's differentiator (research).",
  },
  {
    name: "Healthy Ventures",
    category: "Structural Parallel",
    categoryId: "structural",
    threatLevel: "Low",
    positioning: "Women-led healthcare infrastructure investing",
    whatTheyDo: "Women-led healthcare VC focused on healthcare infrastructure: middleware, payments, clinical trial systems. Invests in the foundational systems of healthcare delivery.",
    builtFor: "Healthcare infrastructure founders and LPs prioritizing diversity in fund management.",
    brandFeel: "Warm, modern, mission-aligned. Values-driven visual identity.",
    brandColor: "#7c3aed",
    fundDetails: "Emerging manager, healthcare infrastructure focus",
    checkSize: "Early-stage",
    portfolio: "Healthcare infrastructure companies (middleware, payments, clinical trial systems)",
    community: "Mission-aligned LP base, women-in-VC networks",
    strength: "Clear identity through women-led positioning. Aligns with broader LP demand for diverse fund managers. Infrastructure focus is differentiated.",
    weakness: "'Healthcare infrastructure' is broad enough to lack thesis specificity. The women-led positioning is a brand differentiator but not a clinical or technical moat.",
    phycapEdge: "Different thesis (infrastructure vs. clinical workflow/SaMD/women's health). Structural parallel: both are emerging managers using identity-based positioning (physician-led vs. women-led) to differentiate in healthcare VC.",
  },
];

export const competitorDensity = {
  headers: ["Category", "Competitor", "Threat Level"],
  rows: competitors.map((c) => [c.category, c.name, c.threatLevel]),
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
