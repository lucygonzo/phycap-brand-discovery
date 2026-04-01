// Digital data extracted from website-audit.md, social-audit.md, content-strategy.md, seo-baseline.md

export const websiteNavItems = [
  { page: "Home", status: "Live", notes: "Rich thesis content, Paul Slosar video. Competing CTAs dilute intent." },
  { page: "About / Thesis", status: "Live", notes: "Clinical precision positioning is evident." },
  { page: "Team", status: "Live", notes: "Accordion format creates friction. 10 GPs listed." },
  { page: "Community", status: "Live", notes: "4 LP testimonials. No Innovation Circle details." },
  { page: "Resources", status: "Live", notes: "8+ articles. No categorization, dates, or author attribution." },
  { page: "LEARN", status: "Inaccessible", notes: "Highest-intent LP page. Blocks self-serve education." },
  { page: "INVEST", status: "Inaccessible", notes: "Commitment pathway dead-ends at general inbox." },
  { page: "PITCH", status: "Inaccessible", notes: "Founder intake blocked. Forces unstructured inbound." },
  { page: "Contact", status: "Live", notes: "Single inbox (info@46.capital). No form. No expected response time." },
];

export const missingSiteElements = {
  headers: ["Element", "Status", "Impact"],
  rows: [
    ["Portfolio page", "Missing", "Cannot demonstrate active deployment or thesis in practice"],
    ["As Seen In / Media bar", "Missing", "No third-party credibility signals"],
    ["Newsletter signup", "Missing", "No mechanism to capture Awareness-stage visitors"],
    ["Founder intake form", "Missing (PITCH inaccessible)", "Unstructured deal flow intake"],
    ["LP education pathway", "Missing (LEARN inaccessible)", "No self-serve education for prospective LPs"],
    ["LP commitment pathway", "Missing (INVEST inaccessible)", "No self-serve commitment process"],
  ],
};

export const socialStats = [
  { value: "1,132", label: "LinkedIn Company Followers", note: "Brand awareness constraint. Target: 2,500 by Q3 2026." },
  { value: "6-38", label: "Reactions Per Post", note: "0.5-3.4% engagement rate. Reasonable for niche B2B." },
  { value: "2-4x", label: "Posts Per Week", note: "Strong cadence for Fund I. Consistent with thesis areas." },
  { value: "2 of 10", label: "Active GP Voices", note: "Paul Slosar and Dutch Rojas. 80% of GP content capacity is dormant." },
];

export const socialPlatforms = {
  headers: ["Platform", "Presence", "Activity", "Strategic Role"],
  rows: [
    ["LinkedIn (Company)", "Active", "High (2-4x/week)", "Primary brand channel"],
    ["LinkedIn (GP Profiles)", "Variable", "High (Paul, Dutch)", "Primary awareness driver"],
    ["X/Twitter", "Listed", "Low", "Secondary; selective cross-posting only"],
    ["YouTube", "Video hosting", "Low", "Utility (Paul overview video). Not channel building."],
    ["Instagram/Facebook/TikTok", "None", "N/A", "Appropriately absent for B2B audience"],
  ],
};

export const contentPillars = [
  {
    name: "Clinical Precision Investing",
    status: "Owned",
    description: "How physician clinical judgment applies to deal evaluation. No other fund can produce this with the same credibility.",
    cadence: "2x per month",
  },
  {
    name: "The Physician's Stake",
    status: "Owned",
    description: "Why physicians should participate in healthcare capital allocation. Feeds the LP pipeline directly.",
    cadence: "2x per month",
  },
  {
    name: "Specialty Deep Dives",
    status: "Owned, Underleveraged",
    description: "Specialty-specific analysis from each GP. Turns '13 specialties' from a stat into a content engine.",
    cadence: "1x per month (rotating GPs)",
  },
  {
    name: "Women's Health / Health Equity",
    status: "Owned, High Priority",
    description: "Investment case for women's health tech. Robin Noble's clinical authority + Women's Health Nexus event.",
    cadence: "2x per month",
  },
  {
    name: "SaMD / Regulatory Intelligence",
    status: "Owned, Niche",
    description: "FDA SaMD landscape from a clinician-investor perspective. Attracts exactly the right founders.",
    cadence: "1x per month",
  },
];

export const seoKeywords = {
  headers: ["Keyword", "Search Volume", "Competition", "PhyCap Position", "Priority"],
  rows: [
    ["physician-led venture capital", "Very low (10-50)", "Very low", "Not visible", "Critical"],
    ["physician venture fund", "Very low (10-30)", "Very low", "Not visible", "Critical"],
    ["physician investor", "Low (100-300)", "Moderate", "Not visible", "High"],
    ["clinical precision investing", "Near zero", "None", "Not ranking (PhyCap's own term)", "High"],
    ["doctors investing in healthcare", "Low (50-150)", "Low", "Not visible", "High"],
    ["SaMD investment", "Low (50-100)", "Low-Moderate", "Not visible", "Medium-High"],
    ["women's health VC", "Low (30-80)", "Low-Moderate", "Not visible", "Medium-High"],
    ["healthcare VC", "Medium (500-1K)", "High", "Not ranking", "Medium"],
  ],
};

export const seoTimeline = {
  headers: ["Timeframe", "Expected Outcome"],
  rows: [
    ["Month 1-3", "Technical foundations: meta tags, schema, Search Console. Begin ranking for brand terms."],
    ["Month 3-6", "Thesis landing pages indexed. Begin ranking for Tier 1 keywords."],
    ["Month 6-12", "Resources library grows. Ranking for long-tail keywords. Organic traffic measurable."],
    ["Month 12-18", "Domain authority builds through backlinks. Competitive for SaMD, Women's Health VC terms."],
    ["Month 18-24", "Top organic result for 'physician-led venture capital.' Organic traffic becomes meaningful."],
  ],
};

export const websitePriorities = [
  { timeframe: "Immediate (30 days)", items: ["Make LEARN, INVEST, PITCH pages accessible", "Add portfolio section with BioReact", "Add publication dates and author attribution to Resources"] },
  { timeframe: "Short-Term (90 days)", items: ["Replace Team page accordion with expanded bio cards", "Add two-path CTA architecture (LP path, Founder path)", "Add newsletter signup and contact form with routing", "Add event showcase section (Women's Health Nexus)"] },
  { timeframe: "Medium-Term (6 months)", items: ["Build dedicated audience landing pages", "Implement content categorization on Resources", "Add media/recognition bar to homepage", "Develop SEO-optimized content strategy"] },
];

export const gpContentTiers = {
  headers: ["Tier", "GPs", "Commitment"],
  rows: [
    ["Tier 1 (High Activity)", "Paul Slosar, Dutch Rojas", "Continue 2-4x/week posting. Content models for other GPs."],
    ["Tier 2 (Monthly)", "Robin Noble, Vipul Kella, Giovanni Lorenz, Joseph Jasser", "1 LinkedIn post/month from their clinical domain. Engage 2-3x/week."],
    ["Tier 3 (Quarterly)", "Tim Martens, Fred Liss, Jerald Dawkins, Alex Tang", "1 post/quarter. 1 specialty article/year. Engage 1-2x/week."],
  ],
};

export const digitalKeyTakeaway =
  "PhyCap's website captures attention but cannot convert it. The three highest-intent pages (LEARN, INVEST, PITCH) are inaccessible, the contact email routes through FortySix Capital, and 80% of GP content capacity is dormant. The strategic positioning is strong; execution infrastructure is the bottleneck.";
