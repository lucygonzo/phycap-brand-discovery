import {
  thesisSummary,
  fundParameters,
  thesisPillars,
  integratedLogic,
  diligenceSteps,
  gpDiligenceLenses,
} from "@/lib/thesisData";
import {
  differentiators,
  productKeyTakeaway,
} from "@/lib/productData";
import {
  portfolioMeta,
  portfolioStats,
  showcasePrinciples,
  showcasePhases,
  validationLevels,
  requiredFields,
  confidentialitySteps,
} from "@/lib/portfolioData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  Badge,
  DataTable,
  HighlightBlock,
  InfoRow,
} from "@/components/BrandComponents";
import SubTabNav from "@/components/SubTabNav";
import {
  Target, Layers, Search, CheckCircle,
  TrendingUp, Briefcase, Shield, FileText,
} from "lucide-react";

/* ---- Thesis sub-tab (from ThesisTab: pillars + fund params) ---- */
function ThesisContent() {
  return (
    <>
      <KeyTakeaway label="THESIS SUMMARY" text={thesisSummary} />

      <SubTitle icon={<Target size={16} />}>Fund Parameters</SubTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {fundParameters.map((fp, i) => (
          <StatCard key={i} value={fp.value} label={fp.parameter} accent={i === 0} />
        ))}
      </div>

      <Divider />

      <SubTitle icon={<Layers size={16} />}>The Three Pillars</SubTitle>
      <div className="space-y-4 mb-8">
        {thesisPillars.map((pillar, i) => (
          <Card
            key={i}
            title={`${pillar.pillar}: ${pillar.label}`}
            variant={i === 0 ? "forest" : i === 1 ? "gold" : "amber"}
          >
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge variant={i === 0 ? "green" : i === 1 ? "gold" : "amber"}>
                  {pillar.frame}
                </Badge>
              </div>
              <HighlightBlock label="WHAT PHYCAP EVALUATES">
                <p>{pillar.whatPhyCapEvaluates}</p>
              </HighlightBlock>
              <HighlightBlock variant="forest" label="WHY CLINICAL INSIGHT MATTERS">
                <p>{pillar.whyClinicalInsightMatters}</p>
              </HighlightBlock>
              <HighlightBlock variant="amber" label="EXCLUSIONS">
                <p>{pillar.exclusions}</p>
              </HighlightBlock>
            </div>
          </Card>
        ))}
      </div>

      <SubTitle>Integrated Logic: Nested Pillars</SubTitle>
      <KeyTakeaway
        label="HIGHEST-VALUE INTERSECTION"
        text="A deal that addresses all three pillars (a software-based medical device that optimizes a clinical workflow for an underserved women's health population) represents the highest-value intersection of PhyCap's thesis."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {integratedLogic.map((il, i) => (
          <Card key={i} title={il.layer} variant={i === 0 ? "forest" : i === 1 ? "gold" : "amber"}>
            <p>{il.explanation}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

/* ---- Diligence sub-tab (from ThesisTab: process + GP lenses) ---- */
function DiligenceContent() {
  return (
    <>
      <SubTitle icon={<Search size={16} />}>The Diligence Process</SubTitle>
      <HighlightBlock variant="forest" label="WHAT 'INVESTING WITH CLINICAL PRECISION' MEANS">
        <p>
          When a company enters PhyCap's diligence pipeline, the product is evaluated by physicians
          who have practiced in the clinical domains where the product will be used.
          The tagline is not a marketing phrase. It is a description of an operational reality.
        </p>
      </HighlightBlock>

      <div className="space-y-3 mb-8">
        {diligenceSteps.map((step) => (
          <div
            key={step.step}
            className="flex gap-4 items-start p-4 rounded-lg"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "var(--phycap-forest)", color: "var(--phycap-gold)" }}
            >
              {step.step}
            </div>
            <div>
              <div className="font-medium text-sm mb-1" style={{ color: "var(--foreground)" }}>
                {step.title}
              </div>
              <div className="text-[13px]" style={{ color: "var(--muted-foreground)" }}>
                {step.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      <SubTitle icon={<CheckCircle size={16} />}>What Each GP Catches</SubTitle>
      <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
        Each GP reviews deals through the specific clinical lens their specialty provides.
        A generalist VC asks: "Is this a good investment?" PhyCap's GPs ask: "Will this product survive
        contact with actual clinical practice in my specialty?"
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {gpDiligenceLenses.map((gp, i) => (
          <Card key={i} title={gp.gp} variant="forest">
            <div className="space-y-2">
              <Badge variant="blue">{gp.specialty}</Badge>
              <InfoRow label="Asks" value={gp.asks} />
              <InfoRow label="Catches" value={gp.catches} />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

/* ---- Differentiators sub-tab (from ProductTab) ---- */
function DifferentiatorsContent() {
  return (
    <>
      <KeyTakeaway label="KEY TAKEAWAY" text={productKeyTakeaway} />

      <SubTitle icon={<TrendingUp size={16} />}>Five Differentiators</SubTitle>
      <HighlightBlock variant="gold" label="WHAT THESE ARE">
        <p className="text-xs">Five things PhyCap can say that no competitor in physician-led healthcare VC can also say. Each is backed by specific, verifiable evidence. These are not aspirations; they describe what is actually true right now.</p>
      </HighlightBlock>

      <div className="space-y-4 mb-8">
        {differentiators.map((d, i) => (
          <div key={i} className="rounded-lg p-5" style={{ background: "var(--card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--phycap-gold)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: "var(--phycap-forest)", color: "var(--phycap-gold)" }}
              >
                {i + 1}
              </div>
              <h4 className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{d.title}</h4>
              <Badge variant={d.durability === "High" ? "green" : "amber"}>Durability: {d.durability}</Badge>
            </div>
            <div className="space-y-0 ml-10">
              <InfoRow label="The Claim" value={d.claim} />
              <InfoRow label="vs. Competitors" value={d.vsCompetitor} />
              <InfoRow label="Defensibility" value={d.risk} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---- Portfolio sub-tab (from PortfolioTab) ---- */
function PortfolioContent() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {portfolioStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={portfolioMeta.keyTakeaway} />

      <Divider />

      <SubTitle icon={<Briefcase size={16} />}>Current Portfolio</SubTitle>
      <HighlightBlock variant="forest" label="BIOREACT">
        <p className="mb-2">
          Only publicly confirmed portfolio company. Thesis alignment to be documented.
          As the sole visible investment, BioReact carries outsized weight in how founders, LPs, and competitors perceive PhyCap's investment judgment.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="green">Publicly Confirmed</Badge>
          <Badge variant="amber">Thesis Alignment TBD</Badge>
          <Badge variant="amber">Showcase Content Needed</Badge>
        </div>
      </HighlightBlock>

      <Divider />

      <SubTitle icon={<Shield size={16} />}>Showcase Design Principles</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {showcasePrinciples.map((p, i) => (
          <Card key={i} title={p.title} variant="forest">
            <p>{p.body}</p>
          </Card>
        ))}
      </div>

      <Divider />

      <SubTitle icon={<Layers size={16} />}>Showcase Scaling Plan</SubTitle>
      <div className="space-y-4 mb-8">
        {showcasePhases.map((phase, i) => (
          <Card key={i} title={phase.phase} variant={i === 0 ? "gold" : "default"}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={i === 0 ? "green" : "muted"}>{phase.status}</Badge>
            </div>
            <ul className="space-y-1.5">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span style={{ color: "var(--phycap-gold)", marginTop: "2px" }}>&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Divider />

      <SubTitle icon={<CheckCircle size={16} />}>Clinical Validation Framework</SubTitle>
      <DataTable
        headers={["Level", "Requirement", "Description"]}
        rows={validationLevels.map((v) => [v.level, v.requirement, v.description])}
      />

      <Divider />

      <SubTitle icon={<FileText size={16} />}>Required Showcase Fields</SubTitle>
      <DataTable
        headers={["Field", "Description"]}
        rows={requiredFields.map((f) => [f.field, f.description])}
      />

      <Divider />

      <SubTitle icon={<Shield size={16} />}>Confidentiality Protocol</SubTitle>
      <Card title="Before Publishing Any Portfolio Information" variant="amber">
        <ol className="space-y-2">
          {confidentialitySteps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                style={{ background: "var(--phycap-gold)", color: "var(--phycap-forest)" }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Card>
    </>
  );
}

/* ---- Main Thesis & Portfolio Tab ---- */
const subTabs = [
  { id: "thesis", label: "Thesis" },
  { id: "diligence", label: "Diligence" },
  { id: "differentiators", label: "Differentiators" },
  { id: "portfolio", label: "Portfolio" },
];

export default function ThesisPortfolioTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="08"
        title="Thesis & Portfolio"
        subtitle="Investment framework, clinical diligence process, competitive differentiators, and portfolio showcase."
      />

      <SubTabNav tabs={subTabs} defaultTab="thesis">
        {(active) => {
          if (active === "thesis") return <ThesisContent />;
          if (active === "diligence") return <DiligenceContent />;
          if (active === "differentiators") return <DifferentiatorsContent />;
          if (active === "portfolio") return <PortfolioContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
