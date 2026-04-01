import {
  competitorDensity,
  scrubComparison,
  swotData,
  positioningMatrix,
  whitespaceEvidence,
  competitiveKeyTakeaway,
} from "@/lib/competitiveData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  Divider,
  SubTitle,
  Badge,
  DataTable,
  HighlightBlock,
} from "@/components/BrandComponents";
import { Shield, Swords, Grid3X3, Crosshair, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";

const gold = "var(--phycap-gold)";

function ThreatBadge({ level }: { level: string }) {
  const variant = level === "High" ? "red" : level === "Medium" ? "amber" : level === "Low-Medium" ? "amber" : "green";
  return <Badge variant={variant}>{level}</Badge>;
}

export default function CompetitiveTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="08"
        title="Competitive Landscape"
        subtitle="Direct competitors, positioning matrix, SWOT analysis, and the whitespace territory PhyCap can own."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={competitiveKeyTakeaway} />

      <Divider />

      {/* Competitive Density */}
      <SubTitle icon={<Swords size={16} />}>Competitive Density Map</SubTitle>
      <div className="overflow-x-auto rounded-lg mb-8" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              {competitorDensity.headers.map((h, i) => (
                <th key={i} className="px-4 py-2.5 text-left font-medium text-xs" style={{ color: "var(--muted-foreground)", borderBottom: "1px solid var(--border)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitorDensity.rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: ri < competitorDensity.rows.length - 1 ? "1px solid var(--border)" : "none" }}>
                <td className="px-4 py-2.5 text-[13px]" style={{ color: "var(--foreground)" }}>{row[0]}</td>
                <td className="px-4 py-2.5 text-[13px] font-medium" style={{ color: "var(--foreground)" }}>{row[1]}</td>
                <td className="px-4 py-2.5 text-[13px]"><ThreatBadge level={row[2]} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Divider />

      {/* Scrub Capital Head-to-Head */}
      <SubTitle icon={<Crosshair size={16} />}>Head-to-Head: PhyCap vs. Scrub Capital</SubTitle>
      <DataTable headers={scrubComparison.headers} rows={scrubComparison.rows} />

      <Divider />

      {/* SWOT 2x2 Grid */}
      <SubTitle icon={<Grid3X3 size={16} />}>SWOT Analysis</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Strengths */}
        <Card title="Strengths" variant="forest">
          <div className="space-y-3">
            {swotData.strengths.map((s) => (
              <div key={s.id}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Badge variant="green">{s.id}</Badge>
                  <span className="font-medium text-xs">{s.title}</span>
                </div>
                <p className="text-xs ml-8" style={{ color: "var(--muted-foreground)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Weaknesses */}
        <Card title="Weaknesses" variant="amber">
          <div className="space-y-3">
            {swotData.weaknesses.map((w) => (
              <div key={w.id}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Badge variant="amber">{w.id}</Badge>
                  <span className="font-medium text-xs">{w.title}</span>
                </div>
                <p className="text-xs ml-8" style={{ color: "var(--muted-foreground)" }}>{w.body}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Opportunities */}
        <Card title="Opportunities" variant="gold">
          <div className="space-y-3">
            {swotData.opportunities.map((o) => (
              <div key={o.id}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Badge variant="blue">{o.id}</Badge>
                  <span className="font-medium text-xs">{o.title}</span>
                </div>
                <p className="text-xs ml-8" style={{ color: "var(--muted-foreground)" }}>{o.body}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Threats */}
        <Card title="Threats" variant="red">
          <div className="space-y-3">
            {swotData.threats.map((t) => (
              <div key={t.id}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Badge variant="red">{t.id}</Badge>
                  <span className="font-medium text-xs">{t.title}</span>
                </div>
                <p className="text-xs ml-8" style={{ color: "var(--muted-foreground)" }}>{t.body}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Divider />

      {/* Positioning Matrix */}
      <SubTitle icon={<Target size={16} />}>Positioning Matrix</SubTitle>
      <HighlightBlock variant="forest" label="AXES">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-medium">X-Axis: Community Focus</span>
            <p style={{ color: "var(--muted-foreground)" }}>Institutional LP Model (left) to Physician LP Model (right)</p>
          </div>
          <div>
            <span className="font-medium">Y-Axis: Clinical Depth</span>
            <p style={{ color: "var(--muted-foreground)" }}>Generalist Clinician (bottom) to Specialist Physician-Led (top)</p>
          </div>
        </div>
      </HighlightBlock>
      <DataTable headers={positioningMatrix.headers} rows={positioningMatrix.rows} />

      <Divider />

      {/* Whitespace */}
      <SubTitle icon={<Shield size={16} />}>Whitespace: The Insider Precision Territory</SubTitle>
      <HighlightBlock variant="gold" label="THE CLAIM">
        <p className="text-sm">The intersection of specialist physician-led clinical depth and institutional investment rigor is not occupied by any competitor. This is not a theoretical brand position. The evidence shows a visible gap.</p>
      </HighlightBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {whitespaceEvidence.map((e, i) => (
          <Card key={i} title={e.title} variant={i % 2 === 0 ? "forest" : "gold"}>
            <p>{e.body}</p>
          </Card>
        ))}
      </div>

      <HighlightBlock variant="forest" label="DEFENSIBILITY">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div><span className="font-medium">GP Team:</span> Recruiting 10+ physician GPs across 13+ specialties takes years</div>
          <div><span className="font-medium">Culture Bridge:</span> Most physician groups default to angel investing. Building a fund requires bridging two professional cultures.</div>
          <div><span className="font-medium">Event Franchise:</span> Women's Health Nexus is a first-mover advantage hard to displace once established</div>
          <div><span className="font-medium">Thesis Compounding:</span> The longer PhyCap invests in these areas, the deeper the pattern recognition</div>
        </div>
      </HighlightBlock>
    </div>
  );
}
