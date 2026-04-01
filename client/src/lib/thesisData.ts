export const thesisSummary = "PhyCap's investment thesis is a single insight expressed through three interdependent pillars, each targeting a specific dimension of the same moment: when care is delivered and clinical decisions are made.";

export const fundParameters = [
  { parameter: "Check size", value: "$150,000 to $500,000" },
  { parameter: "Stage", value: "Seed through Series A" },
  { parameter: "Exclusions", value: "Life sciences, pharmaceuticals" },
  { parameter: "Geography", value: "United States (primary)" },
  { parameter: "Fund vintage", value: "2024" },
  { parameter: "Target fund size", value: "$10M (per PitchBook)" },
];

export const thesisPillars: {
  pillar: string;
  label: string;
  frame: string;
  whatPhyCapEvaluates: string;
  whyClinicalInsightMatters: string;
  exclusions: string;
}[] = [
  {
    pillar: "Pillar 1",
    label: "Clinical Care Delivery Workflow Optimization",
    frame: "The Moment",
    whatPhyCapEvaluates: "Software and tools that reduce friction in the clinical workflow: documentation platforms, scheduling and coordination tools, decision support systems, referral management, and any technology between the physician's intention and the patient's outcome.",
    whyClinicalInsightMatters: "A generalist VC evaluates by market size and growth metrics. PhyCap's GPs ask: Does this tool actually fit into a 7-minute primary care appointment? Will a surgeon stop mid-procedure to interact with this? Does this documentation platform create more work than it eliminates?",
    exclusions: "Administrative workflow tools that do not touch the clinical encounter (billing-only software, HR platforms).",
  },
  {
    pillar: "Pillar 2",
    label: "Software as a Medical Device (SaMD)",
    frame: "The Device",
    whatPhyCapEvaluates: "Diagnostic algorithms, clinical decision support software, imaging analysis tools, monitoring software, and any product requiring or benefiting from FDA clearance as a medical device. FDA Class I and Class II.",
    whyClinicalInsightMatters: "Giovanni Lorenz (radiology) evaluates whether AI-driven imaging accuracy claims hold in real-world clinical image quality. Paul Slosar (former CMO, Titan Spine/Medtronic) assesses whether regulatory strategy is viable and whether physicians will adopt software-based devices.",
    exclusions: "Class III SaMD (high-risk, PMA). Life sciences software. Pharmaceutical decision tools. Hardware devices.",
  },
  {
    pillar: "Pillar 3",
    label: "Women's Health and Health Inequity",
    frame: "The Patient",
    whatPhyCapEvaluates: "Technologies addressing gaps in women's healthcare delivery: reproductive health platforms, maternal health monitoring, menopause management, diagnostic tools calibrated for female physiology, and innovations targeting health inequities.",
    whyClinicalInsightMatters: "Robin Noble's 20+ years of OB-GYN practice provides a direct window into what is missing, broken, and adoptable. Her MHCDS training adds systems-level evaluation of delivery context. The Women's Health Nexus (200+ attendees) proved PhyCap convenes the ecosystem, not just invests in it.",
    exclusions: "Consumer wellness products marketed as clinical tools without evidence base.",
  },
];

export const integratedLogic = [
  { layer: "The MOMENT (Pillar 1)", explanation: "Clinical workflow optimization is the context. Every healthcare technology product must integrate into a clinical workflow to create value." },
  { layer: "The DEVICE (Pillar 2)", explanation: "SaMD is the instrument. Within that workflow, the software-based medical device is the specific tool PhyCap evaluates." },
  { layer: "The PATIENT (Pillar 3)", explanation: "Women's Health is the patient population. Within the workflow, using the SaMD device, PhyCap asks: who is this technology serving? Are the most underserved populations included?" },
];

export const diligenceSteps: { step: number; title: string; detail: string }[] = [
  { step: 1, title: "Deal enters pipeline", detail: "500+ deals screened annually from network referrals, inbound applications, event connections, and GP personal networks." },
  { step: 2, title: "Thesis alignment check", detail: "Does the deal fit the three pillars (Workflow Optimization, SaMD, Women's Health)? Explicit exclusion of life sciences and pharmaceuticals." },
  { step: 3, title: "GP specialty assignment", detail: "Deal routed to GP(s) whose clinical specialty is most relevant. Surgical workflow to Paul and Fred. Women's health to Robin. Emergency tools to Vipul. Imaging AI to Giovanni." },
  { step: 4, title: "Clinical diligence", detail: "Assigned GP(s) evaluate through their specialty lens: Will it work in their clinical environment? Does evidence support the claims? Is adoption realistic for peers?" },
  { step: 5, title: "Systems review", detail: "Paul and Robin apply MHCDS training to evaluate interaction with the broader delivery system. Not just 'does it work?' but 'how does it change the workflow around it?'" },
  { step: 6, title: "Cross-specialty check", detail: "Broader GP team weighs in on dimensions outside the primary reviewer's specialty. An orthopedic tool may affect IM referrals, radiology imaging, or ER triage." },
  { step: 7, title: "Investment decision", detail: "The GPs who reviewed the deal are the investors making the decision. No advisory board intermediary. No external consultants overriding clinical judgment." },
];

export const gpDiligenceLenses: { gp: string; specialty: string; asks: string; catches: string }[] = [
  {
    gp: "Paul Slosar, MD, MHCDS",
    specialty: "Orthopedics / Spine Surgery",
    asks: "How does this fit into a surgical workflow? Will a surgeon stop mid-procedure? Does adoption require changing established protocols?",
    catches: "Products that look good in demos but fail in the OR. SaMD whose regulatory strategy underestimates evidence requirements for surgical adoption.",
  },
  {
    gp: "Robin Noble, MD, MHCDS",
    specialty: "OB-GYN",
    asks: "Does this women's health product address a clinical gap or a market gap? Is the evidence plan designed for OB-GYN care-delivery realities?",
    catches: "Products built on male-normed clinical assumptions. 'FemTech' that repackages consumer wellness without medical-grade evidence.",
  },
  {
    gp: "Vipul Kella, MD, MBA",
    specialty: "Emergency Medicine",
    asks: "Does this work in real time? Can it function in the chaos and urgency of an ER? Does it require physician attention an ER doc cannot spare?",
    catches: "Products that perform in controlled settings but fail under speed and pressure. Workflow tools that assume 15 minutes per patient when ER physicians have 3.",
  },
  {
    gp: "Tim Martens, MD, PhD",
    specialty: "Pediatric Cardiothoracic Surgery",
    asks: "Can this technology be trusted in the highest-stakes environment? Does it account for pediatric physiology?",
    catches: "Products designed for adults but marketed as pediatric-compatible without adequate evidence. Devices untested against pediatric anatomy requirements.",
  },
  {
    gp: "Joseph Jasser, MD, MBA",
    specialty: "Internal Medicine",
    asks: "Does this integrate with primary care workflow? Will an internist managing 20+ patients per day adopt this tool?",
    catches: "Products that solve problems internists do not prioritize. Tools adding documentation burden in an already overwhelmed specialty.",
  },
  {
    gp: "Giovanni Lorenz, MD",
    specialty: "Radiology / Cardiothoracic",
    asks: "How does this diagnostic SaMD perform against radiologist accuracy? What are the false positive/negative rates?",
    catches: "AI imaging products whose accuracy claims rely on curated datasets rather than real-world clinical image quality.",
  },
];
