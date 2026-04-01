export const archetypeData = {
  name: "Insider Precision",
  oneLiner: "PhyCap exists because ten physicians looked at the healthcare system they spent their careers inside and decided to invest in what actually works.",
  definition: "The feeling of being the person in the room who sees what everyone else misses because they have stood inside the system that is broken.",
  notThis: [
    { label: "Not 'Physician Empowerment'", reason: "Empowerment implies a transfer of power. PhyCap's physicians already have the insight. They lacked the capital structure to deploy it." },
    { label: "Not 'Clinical Authority'", reason: "Authority implies institutional credibility. PhyCap is a fund built by practitioners who saw the system fail from the inside." },
  ],
  manifestations: [
    { dimension: "Voice", expression: "Speaks from inside the system, not about it. Uses clinical language naturally, not performatively." },
    { dimension: "Visual", expression: "Forest green and gold on cream. Documentary-style B&W clinical photography. Medical journal, not tech startup." },
    { dimension: "Content", expression: "NEJM-formatted thought leadership: evidence-first, data-supported, clinically grounded." },
    { dimension: "Community", expression: "The Innovation Circle convenes insiders. It does not educate outsiders." },
    { dimension: "Diligence", expression: "Clinical Precision is the process, not the tagline. Every deal reviewed by the full specialty roster." },
    { dimension: "LP Recruitment", expression: "You are not being invited to invest. You are being recognized as someone whose insight has investment-grade value." },
  ],
};

export const personalityTraits = [
  {
    trait: "Precise",
    inPractice: "Always include specific numbers, named conditions, cited sources, or concrete examples. Avoid 'many,' 'significant,' 'transformative.'",
    evidence: "Check sizes stated as ranges ($150K-$500K). Tagline is service-marked. Exact numbers on homepage (168+ years, 13+ specialties).",
  },
  {
    trait: "Insider",
    inPractice: "Speak from the perspective of someone who has been in the room. 'We have seen' rather than 'research shows.'",
    evidence: "LP testimonials use first-person clinical authority. GP team is composed of practitioners, not analysts.",
  },
  {
    trait: "Reserved",
    inPractice: "Never use urgency language ('limited spots,' 'act now'). Exclusivity is communicated through quality, not scarcity.",
    evidence: "Understated design (Forest green, cream, B&W photography). Avoids exclamation points and hyperbolic claims.",
  },
  {
    trait: "Collegial",
    inPractice: "Use 'we' to include the LP and GP community. Avoid hierarchical language. The relationship is collaborative.",
    evidence: "LP testimonials reveal a peer-to-peer relationship. James Newman MD describes 'collaborating with colleagues.'",
  },
  {
    trait: "Mission-Weighted",
    inPractice: "Always connect investment activity to clinical and patient outcomes. Lead with what the returns represent, not the returns themselves.",
    evidence: "Women's Health Nexus framed around healthcare equity. Investment thesis includes 'Health Inequity' as a named focus.",
  },
];

export const personalitySpectrum = [
  { dimension: "Formal vs. Casual", position: "Formal-leaning", note: "Medical journal tone. Collegial warmth within formal structure." },
  { dimension: "Data-driven vs. Narrative", position: "Data-first", note: "Lead with evidence, then interpret. Never lead with story alone." },
  { dimension: "Exclusive vs. Inclusive", position: "Earned exclusivity", note: "Community open to physicians. Fund is selective. Exclusivity comes from clinical qualification." },
  { dimension: "Bold vs. Understated", position: "Understated", note: "Let credentials and thesis speak. Do not claim greatness; demonstrate it through specificity." },
  { dimension: "Urgent vs. Patient", position: "Patient", note: "Present the case with the same thoroughness a physician uses in clinical decision-making." },
];

export const coreNarrative = {
  brandAnchor: "The people who understand healthcare best have been structurally excluded from deciding how it changes.",
  momentOfTruth: {
    moment: "Clinical Care Delivery Workflow Optimization. The exact moment when care is delivered.",
    device: "Software as a Medical Device. The tool in the physician's hands at that moment.",
    patient: "Women's Health and Health Inequity. The patient most historically underserved at that moment.",
  },
  narrativeArc: [
    { act: "The Problem", summary: "Healthcare innovation is built backwards. VCs invest based on market size, not clinical utility. Physicians are consulted late, if at all." },
    { act: "The Insight", summary: "Clinical judgment is capital. A spine surgeon knows in minutes whether a workflow tool will survive an actual operating room." },
    { act: "The Fund", summary: "Ten physicians, 168+ years inside the system. They do not advise. They invest. They do not consult. They lead diligence." },
    { act: "The Invitation", summary: "For physician LPs: a structural correction. For founders: the hardest clinical test before entering the market. Passing it means something." },
  ],
};

export const positioningStatement = {
  current: "Physicians Capital Fund is more than just a Venture Capital Fund: it's a transformative initiative created by and for physicians and healthcare professionals, dedicated to shaping the future of healthcare.",
  currentProblems: ["Vague", "Interchangeable with any healthcare fund", "No specificity about differentiators", "Uses four generic phrases"],
  replacement: "PhyCap is a physician-led venture capital fund that invests at the moment of truth in medicine: where care is delivered, where software meets clinical workflow, and where the most underserved patients wait longest for innovation. Our GPs bring 168+ years of direct clinical experience across 13+ specialties, including two Dartmouth-trained healthcare delivery scientists, to a diligence process built on the principle that the people who understand healthcare systems from the inside are the ones who should decide which technologies enter them.",
  variants: [
    { label: "50-word version", text: "PhyCap is a physician-led venture fund investing at the moment of truth in medicine. Our GPs bring 168+ years of clinical experience across 13+ specialties to evaluate healthcare technology at the point of care. We invest in workflow optimization, software-based medical devices, and women's health innovation." },
    { label: "25-word version", text: "PhyCap is a physician-led VC fund investing in healthcare technology at the point of care. Clinical insight, structured as capital." },
    { label: "One-line version", text: "Physician-led venture capital investing at the moment of truth in medicine." },
  ],
};

export const messagingHierarchy = {
  primary: "Clinical insight, structured as capital.",
  audiences: [
    {
      audience: "Physician LPs",
      headline: "Your clinical insight has investment-grade value. PhyCap structures it.",
      emotionalDriver: "Repatriation of structural agency. Physicians feel excluded from healthcare decision-making.",
      cta: "Join the Innovation Circle / Book an LP Conversation",
    },
    {
      audience: "Healthcare Founders",
      headline: "The hardest clinical diligence your product will face before it enters the market.",
      emotionalDriver: "Credibility and clinical adoption confidence. Founders want clinical validation, not just capital.",
      cta: "Submit Your Pitch / See Our Investment Priorities",
    },
    {
      audience: "Innovation Circle Members",
      headline: "Where physicians who see what is broken connect with the people building what comes next.",
      emotionalDriver: "Belonging and intellectual engagement without committing capital.",
      cta: "Join the Circle / Subscribe for Insights",
    },
  ],
};

export const messagingGaps = [
  "The MHCDS story: no content explains what the credential is, why it matters, or how it changes diligence.",
  "The diligence process: the tagline promises precision but the website never shows the process.",
  "LP transformation stories: testimonials are strong but static. No 'after' narratives exist.",
  "The Women's Health Nexus: treated as a past event, not a recurring franchise.",
  "The FortySix Capital relationship: unexplained co-management creates confusion.",
  "Founder success indicators: no founder testimonials, case studies, or portfolio narratives.",
];
