import {
  decisionLogMeta,
  confirmedDecisions,
  pendingDecisions,
  decisionAuthority,
} from "@/lib/decisionLogData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

export default function DecisionLogTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={decisionLogMeta.sectionNumber}
        title={decisionLogMeta.title}
        subtitle={decisionLogMeta.subtitle}
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard value="7" label="Confirmed Decisions" note="Final unless explicitly reopened by Kate or GP team." accent />
        <StatCard value="7" label="Pending Decisions" note="Recommended directions applied. Awaiting Kate on April 3." />
        <StatCard value="Apr 3" label="Kate Meeting" note="Target resolution date for all pending decisions." />
        <StatCard value="4" label="Decision Owners" note="Kate, Paul, individual GPs, and Dutch Rojas." />
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={decisionLogMeta.keyTakeaway} />

      <Divider />

      {/* Confirmed Decisions */}
      <SubTitle icon={<CheckCircle size={16} />}>Confirmed Decisions</SubTitle>
      <div className="space-y-3 mb-8">
        {confirmedDecisions.map((d) => (
          <Card key={d.id} title={d.title} variant="forest">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="green">Confirmed</Badge>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{d.date}</span>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>| {d.owner}</span>
            </div>
            <p>{d.summary}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Pending Decisions */}
      <SubTitle icon={<Clock size={16} />}>Pending Decisions</SubTitle>
      <HighlightBlock variant="amber" label="AWAITING KATE MEETING, APRIL 3">
        <p>
          Best-guess recommendations are applied to all items and proceeding as if confirmed.
          Kate should confirm or adjust on Friday. Items will be promoted to confirmed after approval.
        </p>
      </HighlightBlock>

      <div className="space-y-3 mt-4 mb-8">
        {pendingDecisions.map((d) => (
          <Card key={d.id} title={d.title} variant="amber">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="amber">Pending</Badge>
              <Badge variant={d.urgency === "High" ? "red" : d.urgency === "Medium" ? "amber" : "muted"}>
                {d.urgency} Urgency
              </Badge>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{d.owner}</span>
            </div>
            <p className="mb-2">{d.description}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>Recommendation:</span>
              <Badge variant="blue">{d.recommendation}</Badge>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>Friday Action:</span>
              <span className="text-xs" style={{ color: "var(--foreground)" }}>{d.fridayAction}</span>
            </div>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Decision Tracking Table */}
      <SubTitle icon={<Shield size={16} />}>Decision Tracking Summary</SubTitle>
      <DataTable
        headers={["#", "Decision", "Owner", "Status", "Kate Action Friday"]}
        rows={pendingDecisions.map((d) => [
          String(d.id),
          d.title,
          d.owner,
          `Recommended: ${d.recommendation}`,
          d.fridayAction,
        ])}
      />

      <Divider />

      {/* Decision Authority */}
      <SubTitle icon={<Users size={16} />}>Decision Authority</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {decisionAuthority.map((da, i) => (
          <HighlightBlock key={i} variant="forest" label={da.person.toUpperCase()}>
            <p>{da.scope}</p>
          </HighlightBlock>
        ))}
      </div>
    </div>
  );
}
