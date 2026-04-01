import { useState } from "react";
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
  SubTitle,
  Badge,
  DataTable,
  HighlightBlock,
} from "@/components/BrandComponents";
import SubTabNav, { JourneyFlow } from "@/components/SubTabNav";
import { AlertTriangle } from "lucide-react";

const subTabs = [
  { id: "lp", label: "Physician LP Journey" },
  { id: "founder", label: "Founder Journey" },
];

const stageStatus: Record<string, "green" | "amber" | "red"> = {
  Awareness: "amber",
  Consideration: "red",
  Decision: "red",
  Onboarding: "amber",
  Retention: "amber",
  Advocacy: "green",
};

export default function JourneyTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="09"
        title="Journey Maps"
        subtitle="End-to-end journey maps for physician LPs and healthcare founders. Click a stage to explore its details."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={journeyKeyTakeaway} />

      <SubTabNav tabs={subTabs} defaultTab="lp">
        {(active) => {
          if (active === "lp") return <JourneyPane stages={lpJourney} variant="forest" />;
          if (active === "founder") return <JourneyPane stages={founderJourney} variant="gold" />;
          return null;
        }}
      </SubTabNav>

      {/* Broken paths (always visible) */}
      <SubTitle icon={<AlertTriangle size={16} />}>Cross-Journey Broken Paths</SubTitle>
      <DataTable headers={brokenPaths.headers} rows={brokenPaths.rows} />
    </div>
  );
}

/* ---- Interactive Journey Pane ---- */
function JourneyPane({ stages, variant }: { stages: JourneyStage[]; variant: "forest" | "gold" }) {
  const [activeStage, setActiveStage] = useState(stages[0].stage);
  const current = stages.find((s) => s.stage === activeStage) || stages[0];

  const flowStages = stages.map((s) => ({
    id: s.stage,
    label: s.stage,
    status: stageStatus[s.stage] || ("amber" as const),
  }));

  return (
    <div>
      {/* Horizontal step flow */}
      <JourneyFlow
        stages={flowStages}
        activeStage={activeStage}
        onStageClick={setActiveStage}
      />

      {/* Active stage detail */}
      <Card title={current.stage} variant={variant}>
        <p className="italic text-xs mb-4" style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}>
          "{current.mindset}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Touchpoints */}
          <HighlightBlock variant={variant} label="TOUCHPOINTS">
            <ul className="space-y-1">
              {current.touchpoints.map((t, i) => (
                <li key={i} className="text-xs flex gap-1.5">
                  <span style={{ color: "var(--phycap-gold)", flexShrink: 0 }}>+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </HighlightBlock>

          {/* Friction Points */}
          {current.frictionPoints.length > 0 && (
            <HighlightBlock variant="amber" label="FRICTION POINTS">
              <ul className="space-y-1">
                {current.frictionPoints.map((f, i) => (
                  <li key={i} className="text-xs flex gap-1.5">
                    <span style={{ color: "oklch(0.55 0.20 25)", flexShrink: 0 }}>!</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </HighlightBlock>
          )}

          {/* Content Needed */}
          {current.contentNeeded.length > 0 && (
            <HighlightBlock variant="gold" label="CONTENT NEEDED">
              <ul className="space-y-1">
                {current.contentNeeded.map((c, i) => (
                  <li key={i} className="text-xs flex gap-1.5">
                    <span style={{ color: "var(--phycap-gold)", flexShrink: 0 }}>+</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </HighlightBlock>
          )}
        </div>
      </Card>

      {/* Mini stage overview badges */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {stages.map((s, i) => (
          <Badge key={i} variant={stageStatus[s.stage] === "green" ? "green" : stageStatus[s.stage] === "red" ? "red" : "amber"}>
            {s.stage}: {s.frictionPoints.length} friction
          </Badge>
        ))}
      </div>
    </div>
  );
}
