import {
  perceptionBanner,
  perceptionScores,
  averageScore,
  funnelAudits,
  gapInventory,
  gapSeveritySummary,
} from "@/lib/gapData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  SubTitle,
  DataTable,
  ScoreBar,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import SubTabNav from "@/components/SubTabNav";
import { BarChart3, AlertTriangle, Gauge, List } from "lucide-react";

const severityVariant = (s: string) =>
  s === "Critical" ? "red" as const : s === "High" ? "amber" as const : s === "Medium" ? "blue" as const : "muted" as const;

const subTabs = [
  { id: "scores", label: "Perception Scores" },
  { id: "lp-funnel", label: "LP Funnel" },
  { id: "founder-funnel", label: "Founder Funnel" },
  { id: "inventory", label: "Gap Inventory" },
];

export default function GapTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="14"
        title="Gap Analysis"
        subtitle="Perception scores, funnel audits, and a prioritized inventory of brand gaps."
      />

      <KeyTakeaway label="PERCEPTION SUMMARY" text={perceptionBanner} />

      <SubTabNav tabs={subTabs} defaultTab="scores">
        {(active) => {
          if (active === "scores") return <ScoresPane />;
          if (active === "lp-funnel") return <FunnelPane funnelIndex={0} />;
          if (active === "founder-funnel") return <FunnelPane funnelIndex={1} />;
          if (active === "inventory") return <InventoryPane />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}

/* ---- Perception Scores (compact dashboard) ---- */
function ScoresPane() {
  return (
    <div>
      {/* Stat summary row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
        <StatCard value={averageScore.toString()} label="Average Score" note="Out of 10. Amber zone." accent />
        <StatCard value="2" label="Critical Gaps" />
        <StatCard value="4" label="High-Priority" />
        <StatCard value="7" label="Total Remaining" />
      </div>

      {/* Compact score bars */}
      <SubTitle icon={<Gauge size={16} />}>Dimension Scores</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 mb-5">
        {perceptionScores.map((ps, i) => (
          <ScoreBar key={i} label={ps.dimension} score={ps.score} />
        ))}
      </div>

      {/* Detail cards in tighter grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {perceptionScores.map((ps, i) => (
          <Card
            key={i}
            title={`${ps.dimension} (${ps.score}/10)`}
            variant={ps.score >= 6 ? "forest" : ps.score >= 4 ? "gold" : "red"}
          >
            <p className="mb-2">{ps.summary}</p>
            <HighlightBlock variant="gold" label="TO IMPROVE">
              <p>{ps.toImprove}</p>
            </HighlightBlock>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---- Funnel Pane (reused for LP and Founder) ---- */
function FunnelPane({ funnelIndex }: { funnelIndex: number }) {
  const funnel = funnelAudits[funnelIndex];
  if (!funnel) return null;

  return (
    <div>
      <SubTitle icon={<BarChart3 size={16} />}>{funnel.funnel}</SubTitle>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {funnel.stages.map((s, si) => (
          <Badge key={si} variant={severityVariant(s.severity)}>
            {s.stage}: {s.severity}
          </Badge>
        ))}
      </div>

      <DataTable
        headers={["Stage", "Severity", "Detail"]}
        rows={funnel.stages.map((s) => [s.stage, s.severity, s.detail])}
      />

      {/* Highest-priority fixes relevant to this funnel */}
      <SubTitle icon={<AlertTriangle size={16} />}>Priority Fixes</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {funnelIndex === 0 ? (
          <>
            <Card title="Resolve INVEST page accessibility" variant="red">
              <p>Conversion endpoint is not publicly reachable. Revenue-impacting.</p>
            </Card>
            <Card title="Build LP qualification mechanism" variant="red">
              <p>Post-signup nurture, FAQ, and "What to Expect" content needed.</p>
            </Card>
          </>
        ) : (
          <>
            <Card title="Resolve PITCH page accessibility" variant="red">
              <p>No submission path visible. Blocks structured deal flow intake.</p>
            </Card>
            <Card title="Create founder-facing diligence content" variant="amber">
              <p>Explain the diligence process publicly so founders can self-qualify.</p>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

/* ---- Gap Inventory ---- */
function InventoryPane() {
  return (
    <div>
      <SubTitle icon={<List size={16} />}>Gap Inventory (13 Total)</SubTitle>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
        {gapSeveritySummary.map((s, i) => (
          <StatCard
            key={i}
            value={s.count.toString()}
            label={s.severity}
            note={s.gaps}
            accent={s.severity === "Critical"}
          />
        ))}
      </div>

      <div className="space-y-3">
        {gapInventory.map((gap) => (
          <Card
            key={gap.id}
            title={`Gap ${gap.id}: ${gap.title}`}
            variant={gap.severity === "Critical" ? "red" : gap.severity === "High" ? "amber" : "default"}
          >
            <div className="flex gap-2 mb-2">
              <Badge variant={severityVariant(gap.severity)}>{gap.severity}</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <HighlightBlock label="CURRENT STATE">
                <p>{gap.currentState}</p>
              </HighlightBlock>
              <HighlightBlock variant="forest" label="DESIRED STATE">
                <p>{gap.desiredState}</p>
              </HighlightBlock>
              <HighlightBlock variant="gold" label="ACTION">
                <p>{gap.action}</p>
              </HighlightBlock>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
