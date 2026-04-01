export const voiceNorthStar = "NEJM Format Meets Equinox Energy: the authority of a peer-reviewed medical journal combined with the desirability of a premium membership brand.";

export const toneAttributes = [
  {
    attribute: "Evidence-Forward",
    doThis: "Lead with data, specific numbers, named conditions, cited sources. Present claims with the rigor a physician expects in a clinical paper.",
    dontDoThis: "Make unsubstantiated claims. Use superlatives without data. Use vague quantifiers ('many,' 'significant,' 'substantial').",
    exampleGood: "Fund I targets Seed through Series A companies with check sizes of $150K to $500K, focused on three investment priorities where clinical insight creates measurable diligence advantage.",
    exampleBad: "We invest in the most promising healthcare startups that are transforming the industry.",
  },
  {
    attribute: "Clinically Grounded",
    doThis: "Reference specific clinical realities, named specialties, and real-world practice patterns. Use medical language naturally.",
    dontDoThis: "Use medical terminology as decoration. Reference 'the healthcare system' in the abstract. Over-explain clinical concepts to physicians.",
    exampleGood: "When a workflow optimization platform claims to reduce documentation time, our diligence tests that claim against the documentation patterns of six different specialties.",
    exampleBad: "We understand the healthcare challenges facing physicians today.",
  },
  {
    attribute: "Understated Confidence",
    doThis: "State differentiators as facts, not boasts. Let MHCDS, 168+ years, and 13+ specialties speak for themselves. Confidence comes from specificity.",
    dontDoThis: "Use exclamation points. Use language that sounds like pitching. Over-claim.",
    exampleGood: "Two of PhyCap's GPs hold Dartmouth's Master of Health Care Delivery Science. No other physician-led fund has this credential.",
    exampleBad: "PhyCap has an incredible, industry-leading team with unmatched credentials!",
  },
  {
    attribute: "Collegial, Not Hierarchical",
    doThis: "Use 'we' to include the LP community. Address physicians as peers. Reference shared experience.",
    dontDoThis: "Position PhyCap above its audience ('we invite you,' 'we offer access,' 'we empower you').",
    exampleGood: "PhyCap exists because physicians asked a question the venture capital industry had not answered: who evaluates healthcare technology better than the clinicians who use it?",
    exampleBad: "We empower physicians to take an active role in healthcare innovation.",
  },
  {
    attribute: "Specific, Not Abstract",
    doThis: "Name the specialty, the clinical scenario, the GP who would review it. The more specific, the more credible.",
    dontDoThis: "Abstract to 'healthcare' when you mean 'surgical workflows.' Abstract to 'innovation' when you mean 'FDA Class II SaMD products.'",
    exampleGood: "Robin Noble, MD, MHCDS, reviews every women's health deal with 20+ years of OB-GYN practice informing her evaluation.",
    exampleBad: "Our team of experts evaluates innovation in the healthcare space.",
  },
];

export const sentenceRules = [
  "Vary sentence length. Alternate between short declarative sentences (impact) and longer explanatory sentences (depth).",
  "Lead with the claim, follow with the evidence. PhyCap's voice does not build suspense.",
  "No em dashes. Restructure with periods, colons, or parentheses.",
  "Avoid the 'Not X, it's Y' construction. Restructure to lead with the positive claim.",
];

export const messagingMatrix: {
  audience: string;
  headline: string;
  proofPoint: string;
  emotionalDriver: string;
  ctaLanguage: string;
  keyPhrases: string[];
}[] = [
  {
    audience: "Physician LPs",
    headline: "Your clinical insight has investment-grade value. PhyCap structures it.",
    proofPoint: "168+ years of combined clinical experience. GPs across 13+ specialties. Two Dartmouth MHCDS graduates leading diligence.",
    emotionalDriver: "'A seat at the table' (Emil Engels MD). 'Play an active role in shaping the future of medicine' (Maxwell Ginsberg MD).",
    ctaLanguage: "Join the Innovation Circle / Book an LP Conversation",
    keyPhrases: ["Physician-led diligence", "Clinical precision", "The fund where your expertise is the asset", "From the inside of medicine"],
  },
  {
    audience: "Healthcare Founders",
    headline: "The clinical diligence your product needs before it meets the market.",
    proofPoint: "Every deal reviewed by GPs spanning 13+ specialties. Clinical workflow evaluation from physicians who have used products like yours.",
    emotionalDriver: "Confidence that clinical adoption will follow investment. Investors who can actually open doors in hospitals and practices.",
    ctaLanguage: "Submit Your Pitch / See Our Investment Priorities",
    keyPhrases: ["Clinical precision in diligence", "Built-in clinical users", "Validation from the frontline", "If it works in our GPs' workflows, it works"],
  },
  {
    audience: "Innovation Circle Members",
    headline: "Where physicians who see what is broken connect with the people building what is next.",
    proofPoint: "200+ attendees at Women's Health Nexus. Webinar series with GPs. Regional meetups and working dinners.",
    emotionalDriver: "Belonging to a group of physician peers. Intellectual engagement. Proximity to deal-making without committing capital.",
    ctaLanguage: "Join the Circle / Subscribe for Insights",
    keyPhrases: ["The Innovation Circle", "Physician-led community", "Clinical perspective on what is next", "Events, education, and access"],
  },
];

export const copyBlocks: { label: string; text: string }[] = [
  { label: "One-Liner", text: "PhyCap is a physician-led venture capital fund investing at the moment of truth in medicine." },
  { label: "Two-Sentence", text: "PhyCap invests in healthcare technology at the point of care: the workflow, the device, the underserved patient. Our GPs bring 168+ years of clinical experience across 13+ specialties to a diligence process that no generalist fund can replicate." },
  { label: "LinkedIn Bio", text: "PhyCap (Physicians Capital Fund) is a physician-led early-stage venture capital fund investing in Clinical Care Delivery Workflow Optimization, Software as a Medical Device (SaMD), and Women's Health. Led by GPs with 168+ years of combined clinical experience across 13+ specialties, including two Dartmouth MHCDS graduates, PhyCap applies clinical precision to every stage of the investment process. Investing with Clinical Precision. phycapfund.com" },
  { label: "Pitch Intro", text: "PhyCap is a physician-led venture fund. We invest $150K to $500K in Seed through Series A healthcare technology companies across three areas: workflow optimization, software-based medical devices, and women's health. Our GP team includes ten physicians and healthcare professionals spanning 13+ medical specialties, from pediatric cardiothoracic surgery to emergency medicine to OB-GYN. Two of our lead GPs hold Dartmouth's Master of Health Care Delivery Science, a graduate degree in healthcare systems architecture. When a deal enters our pipeline, every clinical angle is covered by a specialist who has practiced in that domain. That is what we mean by Investing with Clinical Precision." },
  { label: "Community Invitation", text: "The Physician-Led Innovation Circle is where clinicians who see the healthcare system's structural failures connect with the founders building what comes next. Members receive access to thought leadership, webinar series, regional events, and a network of physician peers across 10+ states. The Circle is free to join. The conversation is substantive." },
];

export const whatNotToSay: { phrase: string; problem: string; replacement: string }[] = [
  { phrase: "More than just a Venture Capital Fund", problem: "Every fund says this. The 'more than just' construction concedes the baseline and vaguely gestures at something without naming it.", replacement: "State what PhyCap is, specifically. No 'more than.' The specificity is the differentiator." },
  { phrase: "Transformative initiative", problem: "'Transformative' is one of the most overused words in healthcare and VC. 'Initiative' suggests a project, not a fund with capital.", replacement: "Name what PhyCap transforms. The verb works only when the object is named." },
  { phrase: "Shaping the future of healthcare", problem: "Every healthcare company claims this. Positions impact in the future rather than the present.", replacement: "Name which future, for which patients, through which mechanism. Use present tense." },
  { phrase: "Connected ecosystem of successful healthcare experts", problem: "Generic community language. 'Successful' is subjective. 'Healthcare experts' is vague.", replacement: "Name the community and what makes it distinct. Surgeons, OB-GYNs, and ER physicians, not 'experts.'" },
  { phrase: "Dedicated to", problem: "Passive construction. Dedication is an intention, not an action.", replacement: "Replace with active verbs. 'Invests in' not 'dedicated to improving.'" },
  { phrase: "Empower medical professionals", problem: "Implies a transfer of power from PhyCap to physicians. Contradicts insider precision archetype.", replacement: "'Recognize' or 'structure.' Physicians already have the insight. PhyCap creates the mechanism." },
  { phrase: "Bridging the gap", problem: "Positions PhyCap as infrastructure (a bridge) rather than an active participant. PhyCap is the clinician in the room.", replacement: "'PhyCap brings clinical diligence to healthcare technology investment.'" },
  { phrase: "Driving a new standard", problem: "Aspirational without being specific. What is the standard? New compared to what?", replacement: "Name the standard. 'PhyCap evaluates every deal from 13+ clinical perspectives. That is the standard.'" },
  { phrase: "The future of", problem: "Overused. PhyCap's strength is in the present: the insight, physicians, and diligence that exist now.", replacement: "Replace with present-tense specificity." },
];

export const taglines = {
  primary: { text: "Investing with Clinical Precision\u2120", note: "Service-marked and confirmed. Occupies territory no competitor has claimed." },
  supporting: [
    { context: "Elevator pitch / bios", tagline: "Clinical insight, structured as capital." },
    { context: "LP-facing materials", tagline: "The physicians in the room are the investors making the decision." },
    { context: "Short-form / events", tagline: "Where medicine meets capital." },
    { context: "Investment thesis", tagline: "At the moment of truth in medicine." },
    { context: "Three pillars visual", tagline: "The workflow. The device. The patient." },
    { context: "Innovation Circle", tagline: "The Circle sees what others miss." },
    { context: "Community to LP", tagline: "Start with insight. Stay for the investment." },
    { context: "Events", tagline: "The conversations that change care." },
  ],
  gpTaglines: [
    { gp: "Paul Slosar", tagline: "Systems architect of healthcare investment." },
    { gp: "Vipul Kella", tagline: "Emergency medicine meets venture capital." },
    { gp: "Robin Noble", tagline: "The clinical case for women's health innovation." },
    { gp: "Tim Martens", tagline: "From the operating room to the Innovation Circle." },
  ],
  contentSeries: [
    { name: "The Clinical Lens", purpose: "Recurring GP-authored thought leadership" },
    { name: "Deal Anatomy", purpose: "Clinical dimensions of healthcare technology categories" },
    { name: "The Precision Report", purpose: "Newsletter or quarterly insights publication" },
  ],
};
