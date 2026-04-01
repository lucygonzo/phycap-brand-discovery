import { useState } from "react";
import {
  competitors,
  categories,
  scrubComparison,
  swotData,
  positioningMatrix,
  whitespaceEvidence,
  competitiveKeyTakeaway,
  type CompetitorProfile,
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
  InfoRow,
} from "@/components/BrandComponents";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import { Shield, Swords, Grid3X3, Crosshair, Target } from "lucide-react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";

function ThreatBadge({ level }: { level: string }) {
  const variant = level === "High" ? "red" : level === "Medium" ? "amber" : level === "Low-Medium" ? "amber" : "green";
  return <Badge variant={variant}>{level}</Badge>;
}

function CompetitorCard({ c }: { c: CompetitorProfile }) {
  return (
    <ExpandableCard
      title={c.name}
      subtitle={`"${c.positioning}"`}
      badge={<ThreatBadge level={c.threatLevel} />}
    >
      <div className="space-y-3">
        {/* Color + category header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 rounded"
            style={{ background: c.brandColor, border: "1px solid var(--border)" }}
          />
          <div>
            <Badge variant="muted">{c.category}</Badge>
          </div>
        </div>

        <InfoRow label="What they do" value={c.whatTheyDo} />
        <InfoRow label="Built for" value={c.builtFor} />
        <InfoRow label="Brand feel" value={c.brandFeel} />
        <InfoRow label="Fund details" value={c.fundDetails} />
        <InfoRow label="Check size" value={c.checkSize} />
        <InfoRow label="Portfolio" value={c.portfolio} />
        <InfoRow label="Community" value={c.community} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <HighlightBlock variant="forest" label="STRENGTH">
            <p className="text-xs">{c.strength}</p>
          </HighlightBlock>
          <HighlightBlock variant="amber" label="WEAKNESS">
            <p className="text-xs">{c.weakness}</p>
          </HighlightBlock>
          <HighlightBlock variant="gold" label="PHYCAP EDGE">
            <p className="text-xs">{c.phycapEdge}</p>
          </HighlightBlock>
        </div>
      </div>
    </ExpandableCard>
  );
}

/* ---- Sub-tab content sections ---- */

function LandscapeContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all"
    ? competitors
    : competitors.filter((c) => c.categoryId === activeCategory);

  return (
    <>
      <KeyTakeaway label="KEY TAKEAWAY" text={competitiveKeyTakeaway} />

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = cat.id === "all" ? competitors.length : competitors.filter((c) => c.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5"
              style={{
                background: isActive ? forest : "var(--muted)",
                color: isActive ? gold : "var(--muted-foreground)",
                border: isActive ? `1px solid ${gold}` : "1px solid var(--border)",
              }}
            >
              {cat.label}
              <span
                className="px-1.5 py-0.5 rounded-full text-[10px]"
                style={{
                  background: isActive ? "oklch(0.77 0.07 72 / 0.2)" : "oklch(0.50 0.02 200 / 0.1)",
                  color: isActive ? gold : "var(--muted-foreground)",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Competitor cards */}
      <div className="space-y-3 mb-8">
        {filtered.map((c) => (
          <CompetitorCard key={c.name} c={c} />
        ))}
      </div>

      <SubTitle icon={<Crosshair size={16} />}>Head-to-Head: PhyCap vs. Scrub Capital</SubTitle>
      <DataTable headers={scrubComparison.headers} rows={scrubComparison.rows} />
    </>
  );
}

function SwotContent() {
  return (
    <>
      <SubTitle icon={<Grid3X3 size={16} />}>SWOT Analysis</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
    </>
  );
}

function PositioningContent() {
  return (
    <>
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
    </>
  );
}

function WhitespaceContent() {
  return (
    <>
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
    </>
  );
}

export default function CompetitiveTab() {
  const subTabs = [
    { id: "landscape", label: "Landscape" },
    { id: "swot", label: "SWOT" },
    { id: "positioning", label: "Positioning" },
    { id: "whitespace", label: "Whitespace" },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="07"
        title="Competitive Landscape"
        subtitle="Direct competitors, positioning matrix, SWOT analysis, and the whitespace territory PhyCap can own."
      />

      <SubTabNav tabs={subTabs}>
        {(activeSubTab) =>
          activeSubTab === "landscape" ? (
            <LandscapeContent />
          ) : activeSubTab === "swot" ? (
            <SwotContent />
          ) : activeSubTab === "positioning" ? (
            <PositioningContent />
          ) : activeSubTab === "whitespace" ? (
            <WhitespaceContent />
          ) : null
        }
      </SubTabNav>
    </div>
  );
}
