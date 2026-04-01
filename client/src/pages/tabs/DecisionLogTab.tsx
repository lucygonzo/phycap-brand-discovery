import {
  decisionLogMeta,
  confirmedDecisions,
  pendingDecisions,
  decisionAuthority,
} from "@/lib/decisionLogData";
import {
  SectionHeader,
  KeyTakeaway,
  StatCard,
  SubTitle,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import { CheckCircle, Clock, Users } from "lucide-react";

const subTabs = [
  { id: "confirmed", label: "Confirmed" },
  { id: "pending", label: "Pending" },
];

export default function DecisionLogTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={decisionLogMeta.sectionNumber}
        title={decisionLogMeta.title}
        subtitle={decisionLogMeta.subtitle}
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard value="7" label="Confirmed Decisions" note="Final unless explicitly reopened." accent />
        <StatCard value="7" label="Pending Decisions" note="Awaiting Kate on April 3." />
        <StatCard value="Apr 3" label="Kate Meeting" note="Target resolution date." />
        <StatCard value="4" label="Decision Owners" note="Kate, Paul, GPs, Dutch." />
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={decisionLogMeta.keyTakeaway} />

      <SubTabNav tabs={subTabs} defaultTab="confirmed">
        {(active) => {
          if (active === "confirmed") return <ConfirmedPane />;
          if (active === "pending") return <PendingPane />;
          return null;
        }}
      </SubTabNav>

      {/* Decision Authority (always visible) */}
      <SubTitle icon={<Users size={16} />}>Decision Authority</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {decisionAuthority.map((da, i) => (
          <HighlightBlock key={i} variant="forest" label={da.person.toUpperCase()}>
            <p>{da.scope}</p>
          </HighlightBlock>
        ))}
      </div>
    </div>
  );
}

/* ---- Confirmed ---- */
function ConfirmedPane() {
  return (
    <div>
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
    </div>
  );
}

/* ---- Pending ---- */
function PendingPane() {
  return (
    <div>
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
    </div>
  );
}
