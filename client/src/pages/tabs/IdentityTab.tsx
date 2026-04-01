import {
  archetypeData,
  personalityTraits,
  personalitySpectrum,
  coreNarrative,
  positioningStatement,
  messagingHierarchy,
  messagingGaps,
} from "@/lib/identityData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  Badge,
  QuoteBlock,
  InfoRow,
} from "@/components/BrandComponents";
import { Fingerprint, BookOpen, Target, MessageCircle, AlertCircle } from "lucide-react";

export default function IdentityTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="01"
        title="Brand Identity"
        subtitle="Archetype, personality, core narrative, positioning statement, and messaging hierarchy."
      />

      {/* Archetype */}
      <SubTitle icon={<Fingerprint size={16} />}>Brand Archetype</SubTitle>
      <KeyTakeaway label="INSIDER PRECISION" text={archetypeData.definition} />
      <QuoteBlock
        quote={archetypeData.oneLiner}
        attribution="Archetype in one sentence"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {archetypeData.notThis.map((item, i) => (
          <Card key={i} title={item.label} variant="amber">
            <p>{item.reason}</p>
          </Card>
        ))}
      </div>

      <SubTitle>How the Archetype Manifests</SubTitle>
      <DataTable
        headers={["Dimension", "Insider Precision Expression"]}
        rows={archetypeData.manifestations.map((m) => [m.dimension, m.expression])}
      />

      <Divider />

      {/* Personality */}
      <SubTitle icon={<BookOpen size={16} />}>Brand Personality Traits</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {personalityTraits.map((t, i) => (
          <Card key={i} title={t.trait} variant="forest">
            <div className="space-y-2">
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {t.evidence}
              </p>
              <HighlightBlock variant="gold" label="IN PRACTICE">
                <p>{t.inPractice}</p>
              </HighlightBlock>
            </div>
          </Card>
        ))}
      </div>

      <SubTitle>Personality Spectrum</SubTitle>
      <DataTable
        headers={["Dimension", "Position", "Expression"]}
        rows={personalitySpectrum.map((s) => [s.dimension, s.position, s.note])}
      />

      <Divider />

      {/* Core Narrative */}
      <SubTitle icon={<Target size={16} />}>Core Narrative</SubTitle>
      <KeyTakeaway label="BRAND ANCHOR" text={coreNarrative.brandAnchor} />

      <SubTitle>The "Moment of Truth" Frame</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card title="The Moment" variant="forest">
          <p>{coreNarrative.momentOfTruth.moment}</p>
        </Card>
        <Card title="The Device" variant="gold">
          <p>{coreNarrative.momentOfTruth.device}</p>
        </Card>
        <Card title="The Patient" variant="amber">
          <p>{coreNarrative.momentOfTruth.patient}</p>
        </Card>
      </div>

      <SubTitle>Narrative Arc</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {coreNarrative.narrativeArc.map((act, i) => (
          <Card key={i} title={act.act} variant={i === 0 ? "amber" : i === 3 ? "gold" : "forest"}>
            <p>{act.summary}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Positioning Statement */}
      <SubTitle icon={<MessageCircle size={16} />}>Positioning Statement</SubTitle>

      <HighlightBlock variant="amber" label="CURRENT (TO BE RETIRED)">
        <p className="italic">{positioningStatement.current}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {positioningStatement.currentProblems.map((p, i) => (
            <Badge key={i} variant="red">{p}</Badge>
          ))}
        </div>
      </HighlightBlock>

      <HighlightBlock variant="forest" label="REPLACEMENT">
        <p>{positioningStatement.replacement}</p>
      </HighlightBlock>

      <SubTitle>Positioning Variants</SubTitle>
      <div className="mb-8">
        {positioningStatement.variants.map((v, i) => (
          <InfoRow key={i} label={v.label} value={v.text} />
        ))}
      </div>

      <Divider />

      {/* Messaging Hierarchy */}
      <SubTitle>Messaging Hierarchy</SubTitle>
      <KeyTakeaway label="PRIMARY MESSAGE (ALL AUDIENCES)" text={messagingHierarchy.primary} />

      <div className="grid grid-cols-1 gap-4 mb-8">
        {messagingHierarchy.audiences.map((a, i) => (
          <Card key={i} title={a.audience} variant={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>
            <div className="space-y-2">
              <InfoRow label="Headline" value={a.headline} />
              <InfoRow label="Emotional Driver" value={a.emotionalDriver} />
              <InfoRow label="CTA" value={a.cta} />
            </div>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Messaging Gaps */}
      <SubTitle icon={<AlertCircle size={16} />}>Messaging Gaps</SubTitle>
      <div className="space-y-2 mb-8">
        {messagingGaps.map((g, i) => (
          <HighlightBlock key={i} variant="amber">
            <p>{g}</p>
          </HighlightBlock>
        ))}
      </div>
    </div>
  );
}
