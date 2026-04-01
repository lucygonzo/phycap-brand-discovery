import {
  audienceStats,
  segments,
  personaLP,
  personaFounder,
  psychographicValues,
  psychographicFears,
  crossSegmentTable,
  tamSamOam,
  lpDiscoveryChannels,
  founderDiscoveryChannels,
} from "@/lib/audienceData";
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
import { Users, UserCheck, Target, Brain, Map, BarChart3 } from "lucide-react";

/* ---- Sub-tab content sections ---- */

function SegmentsContent() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {audienceStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway
        label="KEY INSIGHT"
        text="PhyCap does not have a TAM problem on the LP side. The challenge is conversion, not addressable market. The fund needs to move physicians from 'interested' to 'committed' more efficiently. The LEARN and INVEST pages being inaccessible means conversion happens only through direct GP relationships and events."
      />

      <SubTitle icon={<Target size={16} />}>Segment Priority Matrix</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {segments.map((seg, i) => (
          <Card key={i} title={seg.name} variant={i < 2 ? "forest" : "gold"}>
            <div className="flex gap-2 mb-2">
              <Badge variant={seg.priority === "Critical" ? "red" : "amber"}>{seg.priority}</Badge>
              <Badge variant="green">Revenue: {seg.revenueImpact}</Badge>
              <Badge variant="blue">Brand: {seg.brandBuilding}</Badge>
            </div>
            <p>{seg.description}</p>
          </Card>
        ))}
      </div>

      <SubTitle icon={<Map size={16} />}>Discovery Channels</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="How Physician LPs Find PhyCap" variant="forest">
          <ul className="space-y-2">
            {lpDiscoveryChannels.map((ch, i) => (
              <li key={i} className="text-xs flex gap-2">
                <span style={{ color: "var(--phycap-gold)" }}>+</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="How Founders Find PhyCap" variant="gold">
          <ul className="space-y-2">
            {founderDiscoveryChannels.map((ch, i) => (
              <li key={i} className="text-xs flex gap-2">
                <span style={{ color: "var(--phycap-gold)" }}>+</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

function PersonasContent() {
  return (
    <>
      <SubTitle icon={<UserCheck size={16} />}>Persona: Physician LP</SubTitle>
      <div className="rounded-lg p-5 mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          <div>
            <h3 className="font-medium text-base" style={{ color: "var(--foreground)" }}>{personaLP.name}</h3>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{personaLP.title}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">Age {personaLP.age}</Badge>
            <Badge variant="muted">{personaLP.location}</Badge>
            <Badge variant="gold">{personaLP.status}</Badge>
          </div>
        </div>
        <div className="space-y-0">
          <InfoRow label="Income" value={personaLP.income} />
          <InfoRow label="Net Worth" value={personaLP.netWorth} />
          <InfoRow label="Core Motivation" value={personaLP.coreMotivation} />
          <InfoRow label="Identity Signal" value={personaLP.identitySignal} />
          <InfoRow label="Trust Threshold" value={personaLP.trustThreshold} />
        </div>
      </div>

      <HighlightBlock variant="forest" label="LP DECISION JOURNEY">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {personaLP.journeyStages.map((s, i) => (
            <div key={i} className="text-sm">
              <div className="font-medium mb-1" style={{ color: "var(--phycap-gold)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.stage}</div>
              <p className="italic text-xs" style={{ color: "var(--muted-foreground)" }}>"{s.quote}"</p>
            </div>
          ))}
        </div>
      </HighlightBlock>

      <Divider />

      <SubTitle icon={<UserCheck size={16} />}>Persona: Healthcare Founder</SubTitle>
      <div className="rounded-lg p-5 mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          <div>
            <h3 className="font-medium text-base" style={{ color: "var(--foreground)" }}>{personaFounder.name}</h3>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{personaFounder.title}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">Age {personaFounder.age}</Badge>
            <Badge variant="muted">{personaFounder.location}</Badge>
            <Badge variant="gold">{personaFounder.status}</Badge>
          </div>
        </div>
        <div className="space-y-0">
          <InfoRow label="Product" value={personaFounder.product} />
          <InfoRow label="Stage" value={personaFounder.stage} />
          <InfoRow label="Core Motivation" value={personaFounder.coreMotivation} />
          <InfoRow label="Credibility Need" value={personaFounder.credibilityNeed} />
        </div>
      </div>

      <HighlightBlock variant="gold" label="FOUNDER DECISION JOURNEY">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {personaFounder.journeyStages.map((s, i) => (
            <div key={i} className="text-sm">
              <div className="font-medium mb-1" style={{ color: "var(--phycap-gold)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.stage}</div>
              <p className="italic text-xs" style={{ color: "var(--muted-foreground)" }}>"{s.quote}"</p>
            </div>
          ))}
        </div>
      </HighlightBlock>
    </>
  );
}

function PsychographicsContent() {
  return (
    <>
      <SubTitle icon={<Brain size={16} />}>Core Values</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card title="Physician LP Values" variant="forest">
          <div className="space-y-3">
            {psychographicValues.lp.map((v, i) => (
              <div key={i}>
                <div className="font-medium text-xs mb-0.5">{v.value}</div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Healthcare Founder Values" variant="gold">
          <div className="space-y-3">
            {psychographicValues.founder.map((v, i) => (
              <div key={i}>
                <div className="font-medium text-xs mb-0.5">{v.value}</div>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <SubTitle>Fears and Concerns</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card title="LP Fears" variant="amber">
          <div className="flex flex-wrap gap-2">
            {psychographicFears.lp.map((f, i) => (
              <Badge key={i} variant="amber">{f}</Badge>
            ))}
          </div>
        </Card>
        <Card title="Founder Fears" variant="amber">
          <div className="flex flex-wrap gap-2">
            {psychographicFears.founder.map((f, i) => (
              <Badge key={i} variant="amber">{f}</Badge>
            ))}
          </div>
        </Card>
      </div>

      <SubTitle>Cross-Segment Psychographic Patterns</SubTitle>
      <DataTable headers={crossSegmentTable.headers} rows={crossSegmentTable.rows} />
    </>
  );
}

function MarketSizingContent() {
  return (
    <>
      <SubTitle icon={<BarChart3 size={16} />}>TAM / SAM / OAM</SubTitle>
      <DataTable headers={tamSamOam.headers} rows={tamSamOam.rows} />

      <div className="mt-8">
        <HighlightBlock variant="forest" label="LP MARKET SUMMARY">
          <div className="space-y-2 text-sm">
            <p><strong>Total Addressable Market:</strong> ~450K accredited physician investors in the US, representing ~$67.5B in investable capital.</p>
            <p><strong>Serviceable Market:</strong> ~15K innovation-engaged physicians who are accredited, alternative-investment-active, and healthcare-innovation-engaged.</p>
            <p><strong>Obtainable Market:</strong> 150 to 250 physician LPs across Fund I and Fund II at an average commitment of $200K.</p>
          </div>
        </HighlightBlock>
      </div>

      <div className="mt-6">
        <HighlightBlock variant="gold" label="FOUNDER MARKET SUMMARY">
          <div className="space-y-2 text-sm">
            <p><strong>Total Addressable Market:</strong> ~$5 to 10B in total Seed-Series A healthcare tech investment annually.</p>
            <p><strong>Serviceable Market:</strong> 300 to 500 thesis-aligned startups per year fitting at least one PhyCap thesis area.</p>
            <p><strong>Obtainable Market:</strong> ~$6 to 8M in Fund I deployment across the portfolio.</p>
          </div>
        </HighlightBlock>
      </div>
    </>
  );
}

export default function AudienceTab() {
  const subTabs = [
    { id: "segments", label: "Segments" },
    { id: "personas", label: "Personas" },
    { id: "psychographics", label: "Psychographics" },
    { id: "market-sizing", label: "Market Sizing" },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="07"
        title="Audience"
        subtitle="Segmentation, personas, psychographics, and market sizing for PhyCap's two primary audiences: physician LPs and healthcare founders."
      />

      <SubTabNav tabs={subTabs}>
        {(activeSubTab) =>
          activeSubTab === "segments" ? (
            <SegmentsContent />
          ) : activeSubTab === "personas" ? (
            <PersonasContent />
          ) : activeSubTab === "psychographics" ? (
            <PsychographicsContent />
          ) : activeSubTab === "market-sizing" ? (
            <MarketSizingContent />
          ) : null
        }
      </SubTabNav>
    </div>
  );
}
