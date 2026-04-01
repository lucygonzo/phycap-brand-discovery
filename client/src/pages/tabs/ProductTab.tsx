import {
  fundOverview,
  thesisAreas,
  thesisExclusions,
  portfolioConstruction,
  diligenceAdvantages,
  fundRoadmap,
  innovationCircleTargets,
  differentiators,
  productKeyTakeaway,
} from "@/lib/productData";
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
import { Package, Target, Shield, Map, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function ProductTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="12"
        title="Investment Strategy"
        subtitle="Fund structure, thesis areas, portfolio construction, diligence advantages, roadmap, and the five differentiators no competitor can replicate."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={productKeyTakeaway} />

      <Divider />

      {/* Fund Overview Stats */}
      <SubTitle icon={<Package size={16} />}>Fund I Overview</SubTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {fundOverview.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <Divider />

      {/* Thesis Areas */}
      <SubTitle icon={<Target size={16} />}>Investment Thesis</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {thesisAreas.map((area, i) => (
          <Card key={i} title={area.name} variant={i === 0 ? "forest" : i === 1 ? "gold" : "amber"}>
            <p className="mb-3">{area.description}</p>
            <HighlightBlock variant={i === 0 ? "forest" : i === 1 ? "gold" : "amber"} label="ORIGIN">
              <p className="text-xs">{area.origin}</p>
            </HighlightBlock>
          </Card>
        ))}
      </div>

      <HighlightBlock variant="default" label="EXPLICIT EXCLUSIONS">
        <div className="flex gap-3">
          {thesisExclusions.map((ex, i) => (
            <Badge key={i} variant="red">{ex}</Badge>
          ))}
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Different capital structures, longer timelines, different GP backgrounds required.
          </span>
        </div>
      </HighlightBlock>

      <Divider />

      {/* Portfolio Construction */}
      <SubTitle icon={<Shield size={16} />}>Portfolio Construction</SubTitle>
      <DataTable headers={portfolioConstruction.headers} rows={portfolioConstruction.rows} />

      <Divider />

      {/* Diligence Advantages */}
      <SubTitle icon={<Lightbulb size={16} />}>Diligence Value-Add</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {diligenceAdvantages.map((adv, i) => (
          <Card key={i} title={adv.title} variant="forest">
            <p>{adv.description}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Differentiators */}
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

      <Divider />

      {/* Fund Roadmap */}
      <SubTitle icon={<Map size={16} />}>Fund Maturation Roadmap</SubTitle>
      <div className="space-y-4 mb-8">
        {fundRoadmap.map((phase, i) => (
          <Card key={i} title={`${phase.phase} (${phase.timeline})`} variant={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>
            <ul className="space-y-1.5">
              {phase.milestones.map((m, j) => (
                <li key={j} className="text-xs flex gap-2">
                  <span style={{ color: "var(--phycap-gold)" }}>+</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Innovation Circle */}
      <SubTitle icon={<Users size={16} />}>Innovation Circle Growth Targets</SubTitle>
      <DataTable headers={innovationCircleTargets.headers} rows={innovationCircleTargets.rows} />
    </div>
  );
}
