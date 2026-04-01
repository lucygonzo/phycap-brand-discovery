// Identity data: archetype, personality, narrative, positioning, messaging

export const archetypeData = {
  name: "Insider Precision",
  oneLiner:
    "PhyCap exists because ten physicians looked at the healthcare system they spent their careers inside and decided to invest in what actually works.",
  definition:
    "The feeling of being the person in the room who sees what everyone else misses because they have stood inside the system that is broken.",
  notThis: [
    {
      label: "Physician Empowerment",
      reason:
        "Implies transfer of power; PhyCap's physicians already have the insight. They lacked the capital structure to deploy it.",
    },
    {
      label: "Clinical Authority",
      reason:
        "Implies institutional credibility. PhyCap is a fund built by practitioners who saw the system fail from the inside.",
    },
  ],
  manifestations: [
    {
      dimension: "Voice",
      expression:
        "Speaks from inside the system, not about it. Uses clinical language naturally, not performatively.",
    },
    {
      dimension: "Visual",
      expression:
        "Forest green and gold on cream. Documentary-style B&W clinical photography. Medical journal, not tech startup.",
    },
    {
      dimension: "Content",
      expression:
        "NEJM-formatted thought leadership: evidence-first, data-supported, clinically grounded.",
    },
    {
      dimension: "Community",
      expression:
        "The Innovation Circle convenes insiders. It does not educate outsiders.",
    },
    {
      dimension: "Diligence",
      expression:
        "Clinical Precision is the process, not the tagline. Every deal reviewed by the full specialty roster.",
    },
    {
      dimension: "LP Recruitment",
      expression:
        "You are not being invited to invest. You are being recognized as someone whose insight has investment-grade value.",
    },
  ],
  archetypeScenario:
    "When Paul Slosar reviews a workflow optimization pitch, he does not evaluate the slide deck. He reconstructs the clinical environment the software claims to improve. After 28 years of spine surgery, he knows that a pre-authorization process adding six weeks to a referral that warrants six days is not a workflow inefficiency. It is a systems failure with a patient cost. A generalist VC sees a TAM slide and a competitive matrix. Paul sees the hallway between the supply closet and the patient bed, the 14 steps a nurse walks because three systems cannot share a single data field. That gap between what a generalist investor evaluates and what a physician investor sees is the entire premise of PhyCap.",
};

export interface PersonalityTrait {
  trait: string;
  inPractice: string;
  evidence: string;
  before: string;
  beforeSource: string;
  after: string;
}

export const personalityTraits: PersonalityTrait[] = [
  {
    trait: "Precise",
    inPractice:
      "Always include specific numbers, named conditions, cited sources, or concrete examples. Avoid 'many,' 'significant,' 'transformative.'",
    evidence:
      "Check sizes stated as ranges ($150K-$500K). Tagline is service-marked. Exact numbers on homepage (168+ years, 13+ specialties).",
    before: "a transformative initiative created by and for physicians",
    beforeSource: "from current positioning",
    after: "a fund led by 10 physician GPs spanning 13+ specialties, writing $150K-$500K checks into clinical workflow, SaMD, and women's health companies",
  },
  {
    trait: "Insider",
    inPractice:
      "Speak from the perspective of someone who has been in the room. 'We have seen' rather than 'research shows.'",
    evidence:
      "LP testimonials use first-person clinical authority. GP team is composed of practitioners, not analysts.",
    before: "dedicated to shaping the future of healthcare",
    beforeSource: "generic, external observer voice",
    after: "built by physicians who spent their careers inside the system they are now investing to fix",
  },
  {
    trait: "Reserved",
    inPractice:
      "Never use urgency language ('limited spots,' 'act now'). Exclusivity is communicated through quality, not scarcity.",
    evidence:
      "Understated design (Forest green, cream, B&W photography). Avoids exclamation points and hyperbolic claims.",
    before: "more than just a Venture Capital Fund",
    beforeSource: "overselling with vague superlative",
    after: "Let the thesis and credentials speak. No claim of being \"more than\" anything.",
  },
  {
    trait: "Collegial",
    inPractice:
      "Use 'we' to include the LP and GP community. Avoid hierarchical language. The relationship is collaborative.",
    evidence:
      "LP testimonials reveal a peer-to-peer relationship. James Newman MD describes 'collaborating with colleagues.'",
    before: "healthcare professionals",
    beforeSource: "broad, impersonal",
    after: "physician colleagues who bring clinical judgment to every investment decision",
  },
  {
    trait: "Mission-Weighted",
    inPractice:
      "Always connect investment activity to clinical and patient outcomes. Lead with what the returns represent, not the returns themselves.",
    evidence:
      "Women's Health Nexus framed around healthcare equity. Investment thesis includes 'Health Inequity' as a named focus.",
    before: "innovation backed by physician-led venture capital",
    beforeSource: "generic mission language",
    after: "capital directed by the clinicians who treat the patients the system underserves",
  },
];

export const coreNarrative = {
  brandAnchor:
    "The people who understand healthcare best have been structurally excluded from deciding how it changes.",
  momentOfTruth: {
    moment:
      "Clinical Care Delivery Workflow Optimization. The exact moment when care is delivered.",
    device:
      "Software as a Medical Device. The tool in the physician's hands at that moment.",
    patient:
      "Women's Health and Health Inequity. The patient most historically underserved at that moment.",
  },
  momentOfTruthStory: `Consider a single clinical encounter. A woman in her early fifties visits her physician reporting hot flashes, sleep disruption, and cognitive fog. Her symptoms have been dismissed twice before. At the moment of care delivery, three gaps converge:

The workflow is broken. Her provider has 12 minutes for this visit. The intake form did not capture menopause-related symptoms because the template was designed for acute conditions. The EHR flags no clinical decision support for menopause management because none was built into the system.

The device is absent. No software-based diagnostic tool exists in this workflow to score symptom severity, flag evidence-based treatment protocols, or connect this patient to a specialist who completed more than the 4 hours of menopause training the average OB-GYN residency provides.

The patient is underserved by design. She represents 1.1 billion postmenopausal women worldwide, a population whose standard of care has not meaningfully changed in two decades, in a market that received $2.6 billion in venture investment in 2024 but where 71% of startups have not reached Series A.

PhyCap invests at the intersection of all three: the workflow (Clinical Care Delivery Workflow Optimization), the device (Software as a Medical Device), and the patient (Women's Health and Health Inequity). The "moment of truth" is not a metaphor. It is the specific clinical encounter where all three failures converge and where the right technology, evaluated by physicians who have lived inside that encounter, can intervene.`,
  narrativeArc: [
    {
      act: "The Problem",
      summary:
        "Healthcare innovation is built backwards. VCs invest based on market size, not clinical utility. Physicians are consulted late, if at all.",
    },
    {
      act: "The Insight",
      summary:
        "Clinical judgment is capital. A spine surgeon knows in minutes whether a workflow tool will survive an actual operating room.",
    },
    {
      act: "The Fund",
      summary:
        "Ten physicians, 168+ years inside the system. They do not advise. They invest. They do not consult. They lead diligence.",
    },
    {
      act: "The Invitation",
      summary:
        "For physician LPs: a structural correction. For founders: the hardest clinical test before entering the market. Passing it means something.",
    },
  ],
};

export const positioningStatement = {
  current:
    "Physicians Capital Fund is more than just a Venture Capital Fund: it's a transformative initiative created by and for physicians and healthcare professionals, dedicated to shaping the future of healthcare.",
  currentProblems: [
    "Vague",
    "Interchangeable with any healthcare fund",
    "No specificity about differentiators",
    "Uses four generic phrases",
  ],
  replacement:
    "PhyCap is a physician-led venture capital fund that invests at the moment of truth in medicine: where care is delivered, where software meets clinical workflow, and where the most underserved patients wait longest for innovation. Our GPs bring 168+ years of direct clinical experience across 13+ specialties, including two Dartmouth-trained healthcare delivery scientists, to a diligence process built on the principle that the people who understand healthcare systems from the inside are the ones who should decide which technologies enter them.",
  variants: [
    {
      label: "50-word version",
      text: "PhyCap is a physician-led venture fund investing at the moment of truth in medicine. Our GPs bring 168+ years of clinical experience across 13+ specialties to evaluate healthcare technology at the point of care. We invest in workflow optimization, software-based medical devices, and women's health innovation.",
    },
    {
      label: "25-word version",
      text: "PhyCap is a physician-led VC fund investing in healthcare technology at the point of care. Clinical insight, structured as capital.",
    },
    {
      label: "One-line version",
      text: "Physician-led venture capital investing at the moment of truth in medicine.",
    },
  ],
};

export const messagingHierarchy = {
  primary: "Clinical insight, structured as capital.",
  audiences: [
    {
      audience: "Physician LPs",
      headline:
        "Your clinical insight has investment-grade value. PhyCap structures it.",
      emotionalDriver:
        "Repatriation of structural agency. Physicians feel excluded from healthcare decision-making.",
      cta: "Join the Innovation Circle / Book an LP Conversation",
    },
    {
      audience: "Healthcare Founders",
      headline:
        "The hardest clinical diligence your product will face before it enters the market.",
      emotionalDriver:
        "Credibility and clinical adoption confidence. Founders want clinical validation, not just capital.",
      cta: "Submit Your Pitch / See Our Investment Priorities",
    },
    {
      audience: "Innovation Circle Members",
      headline:
        "Where physicians who see what is broken connect with the people building what comes next.",
      emotionalDriver:
        "Belonging and intellectual engagement without committing capital.",
      cta: "Join the Circle / Subscribe for Insights",
    },
  ],
};

export interface MessagingGap {
  name: string;
  severity: "Critical" | "Important" | "Monitor";
  description: string;
  action: string;
}

export const messagingGaps: MessagingGap[] = [
  {
    name: "MHCDS story untold",
    severity: "Critical",
    description:
      "No content explains what the credential is, why it matters, or how it changes diligence.",
    action:
      "Build a content pillar: what the credential covers, why it changes diligence, how it differs from an MBA.",
  },
  {
    name: "Diligence process invisible",
    severity: "Critical",
    description:
      "The tagline promises precision but the website never shows the process.",
    action:
      "Create a visual walkthrough of how a deal moves through the 10-GP review, naming which specialty evaluates what.",
  },
  {
    name: "LP transformation stories missing",
    severity: "Important",
    description:
      "Testimonials are strong but static. No 'after' narratives exist.",
    action:
      "Interview 2-3 LPs about their journey from interest to investment. Document the \"after\" narrative.",
  },
  {
    name: "Women's Health Nexus treated as past event",
    severity: "Important",
    description:
      "Positioned as a single event rather than a recurring franchise with its own brand identity.",
    action:
      "Establish as a recurring franchise with its own sub-brand, landing page, and content series.",
  },
  {
    name: "FortySix relationship unexplained",
    severity: "Important",
    description:
      "The co-management relationship creates confusion about PhyCap's independence.",
    action:
      "Addressed in Dashboard. Cross-reference the operational partnership framing.",
  },
  {
    name: "Founder success indicators absent",
    severity: "Critical",
    description:
      "No founder testimonials, case studies, or portfolio narratives exist on the website.",
    action:
      "Secure BioReact founder testimonial. Build a portfolio showcase template for future companies.",
  },
];

export interface CompetitiveMessagingRow {
  fund: string;
  primaryMessage: string;
  emotionalAppeal: string;
  impliedPromise: string;
  phycapAdvantage: string;
}

export const competitiveMessaging: CompetitiveMessagingRow[] = [
  {
    fund: "PhyCap",
    primaryMessage: "Clinical insight, structured as capital",
    emotionalAppeal: "Agency, precision, insider authority",
    impliedPromise: "Your expertise has investment-grade value",
    phycapAdvantage: "Specialist depth per GP",
  },
  {
    fund: "Scrub Capital",
    primaryMessage: "Clinician-Powered Investing",
    emotionalAppeal: "Community, belonging, collective action",
    impliedPromise: "Join a movement of healthcare professionals",
    phycapAdvantage: "Breadth dilutes the credential signal",
  },
  {
    fund: "Rock Health",
    primaryMessage: "The knowledge layer of digital health",
    emotionalAppeal: "Intelligence, being informed",
    impliedPromise: "We know more about the market than anyone",
    phycapAdvantage: "Data is not clinical judgment",
  },
  {
    fund: "Doctors Innovate Fund",
    primaryMessage: "Invest alongside doctor-entrepreneurs",
    emotionalAppeal: "Access, passive participation",
    impliedPromise: "Get VC returns without the work",
    phycapAdvantage: "Passive capital, not active diligence",
  },
];

export interface LanguageValidation {
  message: string;
  lpSignal: string;
  source: string;
}

export const languageValidations: LanguageValidation[] = [
  {
    message: "Your clinical insight has investment-grade value",
    lpSignal: "a seat at the table",
    source: "Emil Engels, MD",
  },
  {
    message: "The hardest clinical diligence",
    lpSignal: "colleagues who bring sharp insights",
    source: "James Newman, MD",
  },
  {
    message: "Repatriation of structural agency",
    lpSignal: "play an active role in shaping the future of medicine",
    source: "Maxwell Ginsberg, MD",
  },
];
