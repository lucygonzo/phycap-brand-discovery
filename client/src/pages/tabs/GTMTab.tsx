import {
  gtmFitScores,
  gtmOverallScore,
  growthMotions,
  channelRankings,
  budgetAllocation,
  launchTimeline,
  phase2ExitCriteria,
  phase3ExitCriteria,
  strategyPillars,
  gtmKeyTakeaway,
} from "@/lib/gtmData";
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
  ScoreBar,
} from "@/components/BrandComponents";
import { Rocket, BarChart3, Megaphone, Calendar, CheckCircle, Layers } from "lucide-react";

export default function GTMTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="11"
        title="Go-to-Market"
        subtitle="GTM strategy, channel prioritization, and launch timeline for PhyCap's brand deployment and growth."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={gtmKeyTakeaway} />

      <Divider />

      {/* GTM Fit Score */}
      <SubTitle icon={<BarChart3 size={16} />}>GTM Fit Score</SubTitle>
      <div className="mb-4">
        <StatCard value={gtmOverallScore.value} label={gtmOverallScore.label} note={gtmOverallScore.note} accent />
      </div>
      <div className="rounded-lg p-5 mb-8" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        {gtmFitScores.map((item, i) => (
          <ScoreBar key={i} label={item.dimension} score={item.score} max={5} />
        ))}
      </div>

      <Divider />

      {/* Growth Motions */}
      <SubTitle icon={<Rocket size={16} />}>Primary Growth Motions</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {growthMotions.map((m, i) => (
          <Card key={i} title={m.name} variant={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>
            <p className="mb-2">{m.description}</p>
            <Badge variant="blue">{m.keyChannel}</Badge>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Strategy Pillars */}
      <SubTitle icon={<Layers size={16} />}>Strategy Pillars</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {strategyPillars.map((p, i) => (
          <div key={i} className="rounded-lg p-4" style={{ background: "var(--card)", border: "1px solid var(--border)", borderTop: "2px solid var(--phycap-gold)" }}>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="gold">{p.timing}</Badge>
            </div>
            <h4 className="font-medium text-sm mb-1" style={{ color: "var(--foreground)" }}>{p.name}</h4>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.objective}</p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Channel Rankings */}
      <SubTitle icon={<Megaphone size={16} />}>Channel Prioritization</SubTitle>
      <div className="space-y-3 mb-8">
        {channelRankings.map((ch, i) => (
          <Card key={i} title={ch.channel} variant={ch.tier.includes("Tier 1") ? "forest" : ch.tier.includes("Tier 2") ? "gold" : "default"}>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant={ch.tier.includes("Tier 1") ? "green" : ch.tier.includes("Tier 2") ? "amber" : "muted"}>{ch.tier}</Badge>
              <Badge variant="blue">Investment: {ch.investment}</Badge>
            </div>
            <p className="mb-2">{ch.rationale}</p>
            <div className="text-xs font-medium" style={{ color: "var(--phycap-gold)" }}>Target: {ch.target}</div>
          </Card>
        ))}
      </div>

      <SubTitle>Budget Allocation</SubTitle>
      <DataTable headers={budgetAllocation.headers} rows={budgetAllocation.rows} />

      <HighlightBlock variant="forest" label="CHANNEL INTERACTION MODEL">
        <div className="text-xs space-y-1" style={{ fontFamily: "monospace" }}>
          <p>LinkedIn (GP Posts) &rarr; Drives awareness and inbound interest</p>
          <p>&nbsp;&nbsp;&darr;</p>
          <p>Events / Webinars &rarr; Converts interest into relationships</p>
          <p>&nbsp;&nbsp;&darr;</p>
          <p>Substack / Content &rarr; Deepens engagement and builds authority</p>
          <p>&nbsp;&nbsp;&darr;</p>
          <p>Email Nurture &rarr; Maintains relationship through LP decision cycle</p>
          <p>&nbsp;&nbsp;&darr;</p>
          <p>LP Commitment / Founder Deal Flow</p>
        </div>
      </HighlightBlock>

      <Divider />

      {/* Launch Timeline */}
      <SubTitle icon={<Calendar size={16} />}>Launch Timeline</SubTitle>
      <div className="space-y-4 mb-8">
        {launchTimeline.map((phase, i) => (
          <Card key={i} title={phase.phase} variant={i === 0 ? "red" : i === 1 ? "gold" : "forest"}>
            <p className="text-xs font-medium mb-3" style={{ color: "var(--phycap-gold)" }}>Goal: {phase.goal}</p>
            <ul className="space-y-1.5">
              {phase.items.map((item, j) => (
                <li key={j} className="text-xs flex gap-2">
                  <span style={{ color: "var(--phycap-gold)" }}>+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Exit Criteria */}
      <SubTitle icon={<CheckCircle size={16} />}>Phase Exit Criteria</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card title="Phase 2 Exit Criteria (End of April)" variant="gold">
          <ul className="space-y-1.5">
            {phase2ExitCriteria.map((c, i) => (
              <li key={i} className="text-xs flex gap-2">
                <span style={{ color: "var(--phycap-gold)" }}>&#9744;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Phase 3 Exit Criteria (End of June)" variant="forest">
          <ul className="space-y-1.5">
            {phase3ExitCriteria.map((c, i) => (
              <li key={i} className="text-xs flex gap-2">
                <span style={{ color: "var(--phycap-gold)" }}>&#9744;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
