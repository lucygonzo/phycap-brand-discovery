import {
  revenueMeta,
  revenueStats,
  revenueComponents,
  physicianLPProfile,
  physicianFamiliarityGaps,
  lpFacingTopics,
  fundIIPath,
  ancillaryRevenue,
} from "@/lib/revenueData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  InfoRow,
  Badge,
} from "@/components/BrandComponents";
import { DollarSign, Users, TrendingUp, AlertCircle, ArrowRight } from "lucide-react";

export default function RevenueTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={revenueMeta.sectionNumber}
        title={revenueMeta.title}
        subtitle={revenueMeta.subtitle}
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {revenueStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={revenueMeta.keyTakeaway} />

      <Divider />

      {/* Revenue Components */}
      <SubTitle icon={<DollarSign size={16} />}>Revenue Components</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {revenueComponents.map((comp, i) => (
          <Card key={i} title={comp.title} variant="forest">
            <p className="mb-2">{comp.description}</p>
            <div className="mt-3 flex items-center gap-2 mb-2">
              <Badge variant="gold">{comp.range}</Badge>
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--muted-foreground)" }}>
              {comp.fundINote}
            </p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Physician LP Profile */}
      <SubTitle icon={<Users size={16} />}>Physician LP Economics</SubTitle>
      <HighlightBlock variant="gold" label="LP PROFILE">
        <p className="mb-3">
          PhyCap's LP base includes practicing physicians who are, in many cases, first-time VC fund investors.
          High-income professionals with limited experience in illiquid alternative investments.
        </p>
      </HighlightBlock>

      <div className="mb-6">
        <InfoRow label="Income Range" value={physicianLPProfile.incomeRange} />
        <InfoRow label="Student Debt" value={physicianLPProfile.studentDebt} />
        <InfoRow label="Min Investment" value={physicianLPProfile.minimumInvestment} />
        <InfoRow label="Hold Period" value={physicianLPProfile.holdPeriod} />
        <InfoRow label="Capital Calls" value={physicianLPProfile.capitalCalls} />
      </div>

      <Card title="Physician Familiarity Gaps" variant="amber">
        <p className="mb-3">
          Most physician LPs have no prior experience with these VC fund mechanics.
          This is an LP education opportunity that builds trust and long-term loyalty.
        </p>
        <div className="flex flex-wrap gap-2">
          {physicianFamiliarityGaps.map((gap, i) => (
            <Badge key={i} variant="amber">{gap}</Badge>
          ))}
        </div>
      </Card>

      <Divider />

      {/* LP-Facing Topics */}
      <SubTitle icon={<TrendingUp size={16} />}>LP-Appropriate Revenue Topics</SubTitle>
      <DataTable
        headers={["Topic", "Why LP-Facing"]}
        rows={lpFacingTopics.map((t) => [t.topic, t.reason])}
      />

      <Divider />

      {/* Path to Fund II */}
      <SubTitle icon={<ArrowRight size={16} />}>Path to Fund II Economics</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {fundIIPath.map((item, i) => (
          <StatCard key={i} value={item.value} label={item.label} note={item.note} accent={i === 0} />
        ))}
      </div>

      <Divider />

      {/* Ancillary Revenue */}
      <SubTitle icon={<AlertCircle size={16} />}>Ancillary Revenue Considerations</SubTitle>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {ancillaryRevenue.map((item, i) => (
          <HighlightBlock
            key={i}
            variant={item.recommendation.includes("Not") ? "amber" : "default"}
            label={item.source.toUpperCase()}
          >
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={item.recommendation.includes("Not") ? "red" : "amber"}>
                {item.recommendation}
              </Badge>
            </div>
            <p>{item.reason}</p>
          </HighlightBlock>
        ))}
      </div>
    </div>
  );
}
