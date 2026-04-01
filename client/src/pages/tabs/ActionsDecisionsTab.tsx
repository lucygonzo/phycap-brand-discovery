import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  Badge,
  HighlightBlock,
  InfoRow,
} from "@/components/BrandComponents";
import {
  decisionLogMeta,
  confirmedDecisions,
  pendingDecisions,
  decisionAuthority,
} from "@/lib/decisionLogData";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import { Target, Calendar, Rocket, GitBranch, CheckCircle, Clock, Users } from "lucide-react";

/* ============================================================
   ACTION PHASES DATA (from ActionsTab)
   ============================================================ */
const phases = [
  {
    number: "Phase 1",
    title: "Pre-Kate Meeting",
    timeline: "Before Friday, April 3, 2026",
    objective:
      "Surface every unresolved brand system decision so Kate can approve, adjust, or reject in a single working session. No decision should require a follow-up meeting.",
    variant: "gold" as const,
    badgeVariant: "amber" as const,
    badgeLabel: "Next Milestone",
    items: [
      { id: "1.1", title: "Email Domain Confusion", problem: "Contact email info@46.capital creates confusion about fund identity.", decision: "Confirm @phycapfund.com as primary. Decide whether @46.capital remains as redirect." },
      { id: "1.2", title: "Typography Confirmation", problem: "Brand vault cannot document typography without knowing live site fonts.", decision: "RESOLVED: Marcellus + Roboto confirmed via site inspection." },
      { id: "1.3", title: "Brand Archetype Ratification", problem: "Insider Precision proposed but not formally ratified.", decision: "Confirm Insider Precision as governing archetype, or specify adjustments." },
      { id: "1.4", title: "FortySix Capital Visibility", problem: "Relationship between PhyCap and FortySix Capital unclear in public materials.", decision: "Select co-brand visibility model: invisible, subtle notation, or parallel presence." },
      { id: "1.5", title: "Logo Assets Kit", problem: "Only two 120px PNG files exist. Insufficient for professional brand deployment.", decision: "Confirm logo mark is final and approve full asset kit production." },
    ],
  },
  {
    number: "Phase 2",
    title: "Brand HQ Live",
    timeline: "April 2026",
    objective:
      "Deliver the complete Brand Strategy Vault, GP playbooks, and visual identity documentation. PhyCap has a single source of truth for all brand decisions.",
    variant: "forest" as const,
    badgeVariant: "blue" as const,
    badgeLabel: "Documentation",
    items: [
      { id: "2.1", title: "Brand Strategy Vault Completion", problem: "Finalize all 19 vault sections with Kate-approved decisions integrated.", decision: "Close all gaps identified in the completion tracker." },
      { id: "2.2", title: "Visual Identity System", problem: "Typography guide, color rules, logo usage, and imagery direction needed.", decision: "Complete documentation with confirmed fonts, palette, and photography direction." },
      { id: "2.3", title: "GP Content Playbooks", problem: "Individual brand profiles, calendar framework, and LinkedIn guides needed.", decision: "Deliver four GP playbooks with voice profiles and topic clusters." },
      { id: "2.4", title: "Live Site Audit", problem: "Full inspection of phycapfund.com not yet completed.", decision: "Produce design, copy, UX, and SEO audit with recommendations." },
    ],
  },
  {
    number: "Phase 3",
    title: "Template Library and Content Launch",
    timeline: "May through June 2026",
    objective:
      "Move from strategy to execution. GPs begin posting. Templates enable consistent output without bottlenecks.",
    variant: "default" as const,
    badgeVariant: "green" as const,
    badgeLabel: "Execution",
    items: [
      { id: "3.1", title: "Template Library", problem: "LinkedIn, announcement, LP update, pitch deck, and one-pager templates needed.", decision: "Produce brand-aligned templates for all recurring content types." },
      { id: "3.2", title: "Content Calendar Launch", problem: "Month 1 calendar, GP-adapted versions, and cross-posting rules needed.", decision: "Generate and distribute first monthly planning document." },
      { id: "3.3", title: "GP Content Activation", problem: "GPs need to begin posting on schedule.", decision: "Paul and Vipul start Week 1 of May. Robin and Tim start Week 2 of May." },
      { id: "3.4", title: "Women's Health Nexus Positioning", problem: "Decide whether WHN is an event, a content series, or both.", decision: "Recommended: Both. Annual event (Q4 2026) plus year-round content from Robin." },
    ],
  },
];

const dependencies = [
  { from: "Phase 1 (Kate Decisions)", to: "Phase 2 (Documentation)" },
  { from: "Phase 2 (Playbooks)", to: "Phase 3 (Content Launch)" },
  { from: "Phase 1 (Typography)", to: "Phase 2 (Templates)" },
  { from: "Phase 1 (Logo Kit)", to: "Phase 2 (Visual System)" },
  { from: "Phase 1 (Email Domain)", to: "Phase 3 (GP Signatures)" },
];

/* ---- Phase sub-tab content (from ActionsTab) ---- */
function PhaseContent({ phaseIndex }: { phaseIndex: number }) {
  const phase = phases[phaseIndex];
  if (!phase) return null;

  return (
    <>
      <SubTitle icon={phaseIndex === 0 ? <Target size={16} /> : phaseIndex === 1 ? <Calendar size={16} /> : <Rocket size={16} />}>
        {phase.number}: {phase.title}
      </SubTitle>

      <HighlightBlock variant={phase.variant} label={phase.timeline.toUpperCase()}>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={phase.badgeVariant}>{phase.badgeLabel}</Badge>
        </div>
        <p>{phase.objective}</p>
      </HighlightBlock>

      <div className="space-y-3 mt-4">
        {phase.items.map((item) => (
          <Card key={item.id} title={`${item.id} ${item.title}`} variant={phase.variant}>
            <p className="mb-2">
              <span className="font-medium text-xs" style={{ color: "var(--muted-foreground)" }}>Context: </span>
              {item.problem}
            </p>
            <p>
              <span className="font-medium text-xs" style={{ color: "var(--muted-foreground)" }}>Decision: </span>
              {item.decision}
            </p>
          </Card>
        ))}
      </div>

      {/* Dependencies (shown in Phase 1) */}
      {phaseIndex === 0 && (
        <>
          <Divider />

          <SubTitle icon={<GitBranch size={16} />}>Phase Dependencies</SubTitle>
          <Card title="Dependency Chain" variant="default">
            <div className="space-y-2">
              {dependencies.map((dep, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Badge variant="muted">{dep.from}</Badge>
                  <span style={{ color: "var(--phycap-gold)" }}>&#8594;</span>
                  <Badge variant="blue">{dep.to}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Divider />

          <SubTitle icon={<Target size={16} />}>Timeline Risks</SubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card title="Decision Delays" variant="amber">
              <p>Phase 1 assumes all decisions resolve in one Kate meeting. If any require additional stakeholder input, Phase 2 start dates shift.</p>
            </Card>
            <Card title="Design Vendor" variant="amber">
              <p>No designer or agency identified for logo asset kit production. Kate needs to confirm whether this is in-house or requires sourcing.</p>
            </Card>
            <Card title="GP Availability" variant="amber">
              <p>Phase 3 assumes all four GPs are available and willing to begin posting in May. Individual schedules and comfort levels not confirmed.</p>
            </Card>
            <Card title="Budget" variant="amber">
              <p>No budget discussed for template design, content tools, or event production. Phase 3 scope may need adjustment based on resources.</p>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

/* ---- Confirmed decisions sub-tab (from DecisionLogTab) ---- */
function ConfirmedContent() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard value="7" label="Confirmed Decisions" note="Final unless explicitly reopened." accent />
        <StatCard value="7" label="Pending Decisions" note="Awaiting Kate on April 3." />
        <StatCard value="Apr 3" label="Kate Meeting" note="Target resolution date." />
        <StatCard value="4" label="Decision Owners" note="Kate, Paul, GPs, Dutch." />
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={decisionLogMeta.keyTakeaway} />

      <SubTitle icon={<CheckCircle size={16} />}>Confirmed Decisions</SubTitle>
      <div className="space-y-2">
        {confirmedDecisions.map((d) => (
          <ExpandableCard
            key={d.id}
            title={d.title}
            subtitle={`${d.date} | ${d.owner}`}
            badge={<Badge variant="green">Confirmed</Badge>}
          >
            <p>{d.summary}</p>
          </ExpandableCard>
        ))}
      </div>

      {/* Decision Authority */}
      <Divider />
      <SubTitle icon={<Users size={16} />}>Decision Authority</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {decisionAuthority.map((da, i) => (
          <HighlightBlock key={i} variant="forest" label={da.person.toUpperCase()}>
            <p>{da.scope}</p>
          </HighlightBlock>
        ))}
      </div>
    </>
  );
}

/* ---- Pending decisions sub-tab (from DecisionLogTab) ---- */
function PendingContent() {
  return (
    <>
      <SubTitle icon={<Clock size={16} />}>Pending Decisions</SubTitle>
      <HighlightBlock variant="amber" label="AWAITING KATE MEETING, APRIL 3">
        <p>
          Best-guess recommendations are applied and proceeding as if confirmed.
          Kate should confirm or adjust on Friday.
        </p>
      </HighlightBlock>

      <div className="space-y-2 mt-4">
        {pendingDecisions.map((d) => (
          <ExpandableCard
            key={d.id}
            title={d.title}
            subtitle={d.owner}
            badge={
              <div className="flex gap-1.5">
                <Badge variant="amber">Pending</Badge>
                <Badge variant={d.urgency === "High" ? "red" : d.urgency === "Medium" ? "amber" : "muted"}>
                  {d.urgency}
                </Badge>
              </div>
            }
          >
            <div className="space-y-2">
              <p>{d.description}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>Recommendation:</span>
                <Badge variant="blue">{d.recommendation}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>Friday Action:</span>
                <span className="text-xs" style={{ color: "var(--foreground)" }}>{d.fridayAction}</span>
              </div>
            </div>
          </ExpandableCard>
        ))}
      </div>
    </>
  );
}

/* ---- Main Actions & Decisions Tab ---- */
const subTabs = [
  { id: "phase1", label: "Phase 1" },
  { id: "phase2", label: "Phase 2" },
  { id: "phase3", label: "Phase 3" },
  { id: "confirmed", label: "Confirmed" },
  { id: "pending", label: "Pending" },
];

export default function ActionsDecisionsTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="12"
        title="Actions & Decisions"
        subtitle="Three-phase roadmap, confirmed decisions, and pending items for Kate's approval."
      />

      <KeyTakeaway
        label="NEXT MILESTONE"
        text="Kate meeting on Friday, April 3, 2026. Every unresolved brand system decision should be surfaced so Kate can approve, adjust, or reject in a single working session."
      />

      <SubTabNav tabs={subTabs} defaultTab="phase1">
        {(active) => {
          if (active === "phase1") return <PhaseContent phaseIndex={0} />;
          if (active === "phase2") return <PhaseContent phaseIndex={1} />;
          if (active === "phase3") return <PhaseContent phaseIndex={2} />;
          if (active === "confirmed") return <ConfirmedContent />;
          if (active === "pending") return <PendingContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
