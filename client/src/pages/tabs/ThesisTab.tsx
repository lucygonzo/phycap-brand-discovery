import {
  thesisSummary,
  fundParameters,
  thesisPillars,
  integratedLogic,
  diligenceSteps,
  gpDiligenceLenses,
} from "@/lib/thesisData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  InfoRow,
  Badge,
} from "@/components/BrandComponents";
import { Target, Layers, Search, CheckCircle } from "lucide-react";

export default function ThesisTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="05"
        title="Investment Thesis"
        subtitle="The three-pillar investment framework, fund parameters, and the clinical diligence process that operationalizes 'Investing with Clinical Precision.'"
      />

      <KeyTakeaway label="THESIS SUMMARY" text={thesisSummary} />

      {/* Fund Parameters */}
      <SubTitle icon={<Target size={16} />}>Fund Parameters</SubTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {fundParameters.map((fp, i) => (
          <StatCard
            key={i}
            value={fp.value}
            label={fp.parameter}
            accent={i === 0}
          />
        ))}
      </div>

      <Divider />

      {/* Three Pillars */}
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

      {/* Integrated Logic */}
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

      <Divider />

      {/* Diligence Process */}
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

      {/* GP Diligence Lenses */}
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
    </div>
  );
}
