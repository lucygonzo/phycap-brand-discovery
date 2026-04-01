import {
  lpJourney,
  founderJourney,
  brokenPaths,
  journeyKeyTakeaway,
} from "@/lib/journeyData";
import type { JourneyStage } from "@/lib/journeyData";
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
import { Route, UserCheck, Briefcase, AlertTriangle } from "lucide-react";

const stageColors: Record<string, "green" | "blue" | "gold" | "amber" | "red" | "muted"> = {
  Awareness: "blue",
  Consideration: "gold",
  Decision: "amber",
  Onboarding: "green",
  Retention: "muted",
  Advocacy: "green",
};

function JourneyStageCard({ stage, index }: { stage: JourneyStage; index: number }) {
  const badgeVariant = stageColors[stage.stage] || "muted";
  return (
    <div
      className="rounded-lg p-4"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: "var(--phycap-forest)", color: "var(--phycap-gold)" }}
        >
          {index + 1}
        </div>
        <Badge variant={badgeVariant}>{stage.stage}</Badge>
      </div>

      <p className="italic text-xs mb-3" style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}>
        "{stage.mindset}"
      </p>

      <div className="mb-3">
        <div className="text-[10px] font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--phycap-gold)" }}>Touchpoints</div>
        <ul className="space-y-1">
          {stage.touchpoints.map((t, i) => (
            <li key={i} className="text-xs flex gap-1.5" style={{ color: "var(--foreground)" }}>
              <span style={{ color: "var(--phycap-gold)", flexShrink: 0 }}>+</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {stage.frictionPoints.length > 0 && (
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wider mb-1.5" style={{ color: "oklch(0.55 0.20 25)" }}>Friction Points</div>
          <ul className="space-y-1">
            {stage.frictionPoints.map((f, i) => (
              <li key={i} className="text-xs flex gap-1.5" style={{ color: "var(--muted-foreground)" }}>
                <span style={{ color: "oklch(0.55 0.20 25)", flexShrink: 0 }}>!</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function JourneyTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="09"
        title="Journey Maps"
        subtitle="End-to-end journey maps for the two primary audiences: physician LPs and healthcare founders. Each journey tracks six stages from awareness through advocacy."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={journeyKeyTakeaway} />

      <Divider />

      {/* LP Journey */}
      <SubTitle icon={<UserCheck size={16} />}>Journey 1: Physician LP Path</SubTitle>
      <HighlightBlock variant="forest" label="JOURNEY OVERVIEW">
        <p className="text-xs">Six stages from first LinkedIn post encounter through active advocacy. The journey is relationship-heavy and trust-dependent. Average timeline from first touchpoint to LP commitment: 6-18 months.</p>
      </HighlightBlock>

      <div className="space-y-3 mb-8">
        {/* Visual flow indicator */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {lpJourney.map((stage, i) => (
            <div key={i} className="flex items-center">
              <div
                className="px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap"
                style={{
                  background: i === 0 ? "var(--phycap-forest)" : "var(--muted)",
                  color: i === 0 ? "var(--phycap-gold)" : "var(--muted-foreground)",
                  border: "1px solid var(--border)",
                }}
              >
                {stage.stage}
              </div>
              {i < lpJourney.length - 1 && (
                <div className="w-4 h-px mx-0.5" style={{ background: "var(--border)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {lpJourney.map((stage, i) => (
            <JourneyStageCard key={i} stage={stage} index={i} />
          ))}
        </div>
      </div>

      <Divider />

      {/* Founder Journey */}
      <SubTitle icon={<Briefcase size={16} />}>Journey 2: Healthcare Founder Path</SubTitle>
      <HighlightBlock variant="gold" label="JOURNEY OVERVIEW">
        <p className="text-xs">Six stages from first GP content discovery through founder referral advocacy. Founders evaluate PhyCap on clinical depth, thesis alignment, and post-investment GP engagement. The journey is faster than the LP path but more competitive.</p>
      </HighlightBlock>

      <div className="space-y-3 mb-8">
        {/* Visual flow indicator */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
          {founderJourney.map((stage, i) => (
            <div key={i} className="flex items-center">
              <div
                className="px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap"
                style={{
                  background: i === 0 ? "var(--phycap-forest)" : "var(--muted)",
                  color: i === 0 ? "var(--phycap-gold)" : "var(--muted-foreground)",
                  border: "1px solid var(--border)",
                }}
              >
                {stage.stage}
              </div>
              {i < founderJourney.length - 1 && (
                <div className="w-4 h-px mx-0.5" style={{ background: "var(--border)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {founderJourney.map((stage, i) => (
            <JourneyStageCard key={i} stage={stage} index={i} />
          ))}
        </div>
      </div>

      <Divider />

      {/* Broken Paths */}
      <SubTitle icon={<AlertTriangle size={16} />}>Cross-Journey Broken Paths</SubTitle>
      <DataTable headers={brokenPaths.headers} rows={brokenPaths.rows} />
    </div>
  );
}
