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
  Divider,
  SubTitle,
  DataTable,
  ScoreBar,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import { BarChart3, AlertTriangle, Gauge, List } from "lucide-react";

const severityVariant = (s: string) =>
  s === "Critical" ? "red" as const : s === "High" ? "amber" as const : s === "Medium" ? "blue" as const : "muted" as const;

export default function GapTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="14"
        title="Gap Analysis"
        subtitle="Perception scores, funnel audits, and a prioritized inventory of brand gaps."
      />

      {/* Perception Banner */}
      <KeyTakeaway label="PERCEPTION SUMMARY" text={perceptionBanner} />

      {/* Average score */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard value={averageScore.toString()} label="Average Perception Score" note="Out of 10. Amber zone." accent />
        <StatCard value="2" label="Critical Gaps" note="MHCDS invisible. Conversion pages inaccessible." />
        <StatCard value="4" label="High-Priority Gaps" note="Contact email, portfolio, positioning, diligence process." />
        <StatCard value="7" label="Total Gaps Remaining" note="6 medium, 1 low (resolved)." />
      </div>

      <Divider />

      {/* Perception Scores */}
      <SubTitle icon={<Gauge size={16} />}>Perception Dimension Scores</SubTitle>
      <div className="mb-8">
        {perceptionScores.map((ps, i) => (
          <ScoreBar key={i} label={ps.dimension} score={ps.score} />
        ))}
      </div>

      {/* Score detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {perceptionScores.map((ps, i) => (
          <Card
            key={i}
            title={`${ps.dimension} (${ps.score}/10)`}
            variant={ps.score >= 6 ? "forest" : ps.score >= 4 ? "gold" : "red"}
          >
            <div className="space-y-2">
              <p>{ps.summary}</p>
              <HighlightBlock variant="gold" label="TO IMPROVE">
                <p>{ps.toImprove}</p>
              </HighlightBlock>
            </div>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Funnel Audits */}
      <SubTitle icon={<BarChart3 size={16} />}>Funnel Audits</SubTitle>
      {funnelAudits.map((funnel, fi) => (
        <div key={fi} className="mb-8">
          <h3 className="font-medium text-sm mb-4" style={{ color: "var(--foreground)" }}>
            {funnel.funnel}
          </h3>
          <DataTable
            headers={["Stage", "Severity", "Detail"]}
            rows={funnel.stages.map((s) => [s.stage, s.severity, s.detail])}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {funnel.stages.map((s, si) => (
              <Badge key={si} variant={severityVariant(s.severity)}>
                {s.stage}: {s.severity}
              </Badge>
            ))}
          </div>
        </div>
      ))}

      <Divider />

      {/* Gap Inventory */}
      <SubTitle icon={<List size={16} />}>Gap Inventory (13 Total)</SubTitle>

      {/* Severity summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
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

      {/* Individual gaps */}
      <div className="space-y-4 mb-8">
        {gapInventory.map((gap) => (
          <Card
            key={gap.id}
            title={`Gap ${gap.id}: ${gap.title}`}
            variant={gap.severity === "Critical" ? "red" : gap.severity === "High" ? "amber" : "default"}
          >
            <div className="space-y-2">
              <div className="flex gap-2 mb-2">
                <Badge variant={severityVariant(gap.severity)}>{gap.severity}</Badge>
              </div>
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

      <Divider />

      <SubTitle icon={<AlertTriangle size={16} />}>Highest-Priority Fixes</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card title="1. Resolve INVEST and PITCH page accessibility" variant="red">
          <p>Both funnels' critical conversion endpoints are not publicly reachable. Revenue-impacting.</p>
        </Card>
        <Card title="2. Build LP qualification mechanism" variant="red">
          <p>Post-signup nurture, FAQ, and "What to Expect" content to move physicians from interested to qualified.</p>
        </Card>
        <Card title="3. Clarify CTA hierarchy per audience" variant="amber">
          <p>Reduce choice paralysis at the qualification stage. One primary CTA per audience per page.</p>
        </Card>
        <Card title="4. Create founder-facing diligence content" variant="amber">
          <p>Explain the diligence process publicly. Make "Investing with Clinical Precision" observable, not just a tagline.</p>
        </Card>
      </div>
    </div>
  );
}
