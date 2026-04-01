import {
  SectionHeader,
  KeyTakeaway,
  StatCard,
  Divider,
  SubTitle,
  ScoreBar,
  Badge,
  Card,
  HighlightBlock,
} from "@/components/BrandComponents";
import { ClipboardCheck, TrendingUp, AlertCircle } from "lucide-react";

const sections = [
  { name: "00 Overview", completion: 75, blocker: "Kate Input" },
  { name: "01 Identity", completion: 60, blocker: "Kate Input" },
  { name: "02 Company", completion: 70, blocker: "Kate Input" },
  { name: "03 Visual", completion: 45, blocker: "Kate Input + Site Inspection" },
  { name: "04 Verbal", completion: 55, blocker: "Kate Input" },
  { name: "05 Services", completion: 50, blocker: "GP Interviews" },
  { name: "06 Audience", completion: 55, blocker: "Kate Input + GP Interviews" },
  { name: "07 Competitive", completion: 40, blocker: "Kate Input" },
  { name: "08 Digital", completion: 30, blocker: "Site Inspection" },
  { name: "09 Go-to-Market", completion: 35, blocker: "Kate Input + GP Interviews" },
  { name: "10 Journey", completion: 30, blocker: "Kate Input + GP Interviews" },
  { name: "11 Product", completion: 40, blocker: "Kate Input" },
  { name: "12 Portfolio", completion: 20, blocker: "Kate Input" },
  { name: "13 Workspace", completion: 80, blocker: "Minor gaps only" },
  { name: "14 Gap Analysis", completion: 70, blocker: "Post-meeting update" },
  { name: "15 Revenue Model", completion: 25, blocker: "Kate Input + GP Interviews" },
  { name: "16 Decision Log", completion: 85, blocker: "Minor gaps only" },
  { name: "17 Report Card", completion: 90, blocker: "Post-meeting update" },
  { name: "18 GP Content", completion: 65, blocker: "GP Interviews" },
];

const overallCompletion = Math.round(
  sections.reduce((sum, s) => sum + s.completion, 0) / sections.length
);

const readyAfterKate = ["00 Overview", "01 Identity", "02 Company", "04 Verbal", "13 Workspace", "14 Gap Analysis", "16 Decision Log", "17 Report Card"];
const needsSiteInspection = ["03 Visual", "08 Digital"];
const needsGPInterviews = ["05 Services", "06 Audience", "09 Go-to-Market", "10 Journey", "15 Revenue Model", "18 GP Content"];

export default function ReportCardTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="17"
        title="Report Card"
        subtitle="Section-by-section completion tracker for the Brand Strategy Vault. Scores reflect professional judgment based on raw discovery data, research, and confirmed decisions."
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard value={`${overallCompletion}%`} label="Overall Vault Completion" note="Average across all 19 sections." accent />
        <StatCard value="19" label="Total Sections" note="From Overview (00) through GP Content (18)." />
        <StatCard value="8" label="Ready After Kate Meeting" note="Can be finalized once Kate approves on April 3." />
        <StatCard value="6" label="Need GP Interviews" note="Require direct input from one or more GPs." />
      </div>

      <KeyTakeaway
        label="KEY TAKEAWAY"
        text="The vault is approximately 52% complete. The Kate meeting on April 3 is the single largest unlock: eight sections can move to finalization immediately after. The lowest-scoring sections (Journey 30%, Digital 30%, Revenue 25%, Portfolio 20%) have the most dependencies and longest lead times."
      />

      <Divider />

      {/* Completion Bars */}
      <SubTitle icon={<ClipboardCheck size={16} />}>Section-by-Section Completion</SubTitle>
      <div className="mb-8">
        {sections.map((s, i) => (
          <ScoreBar key={i} label={s.name} score={s.completion / 10} max={10} />
        ))}
      </div>

      <Divider />

      {/* Blocker Details */}
      <SubTitle icon={<AlertCircle size={16} />}>Blocker Analysis</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card title="Ready After Kate Meeting" variant="forest">
          <p className="mb-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
            8 sections can be finalized once decisions are approved on April 3.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {readyAfterKate.map((s, i) => (
              <Badge key={i} variant="green">{s}</Badge>
            ))}
          </div>
        </Card>

        <Card title="Need Site Inspection" variant="amber">
          <p className="mb-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
            2 sections require live site audit data not yet collected.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {needsSiteInspection.map((s, i) => (
              <Badge key={i} variant="amber">{s}</Badge>
            ))}
          </div>
        </Card>

        <Card title="Need GP Interviews" variant="gold">
          <p className="mb-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
            6 sections require direct input from one or more GPs.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {needsGPInterviews.map((s, i) => (
              <Badge key={i} variant="gold">{s}</Badge>
            ))}
          </div>
        </Card>
      </div>

      <Divider />

      {/* Priority Sections */}
      <SubTitle icon={<TrendingUp size={16} />}>Priority Focus Areas</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <HighlightBlock variant="amber" label="HIGHEST RISK">
          <p className="font-medium mb-1">Sections 09 (Go-to-Market) and 10 (Journey)</p>
          <p>
            Lowest completion (35% and 30%) with the most dependencies. These are the most complex sections
            and may require multiple rounds of input. Flag as long-lead items.
          </p>
        </HighlightBlock>

        <HighlightBlock variant="amber" label="HIGHEST IMPACT">
          <p className="font-medium mb-1">Section 12 (Portfolio) at 20%</p>
          <p>
            BioReact is the only confirmed company. Portfolio credibility gap is one of PhyCap's
            top brand challenges. Requires Kate input and company coordination.
          </p>
        </HighlightBlock>

        <HighlightBlock variant="forest" label="NEAR COMPLETE">
          <p className="font-medium mb-1">Section 17 (Report Card) at 90%</p>
          <p>
            This tracker. Needs post-Kate-meeting updated scores and quarterly review schedule.
          </p>
        </HighlightBlock>

        <HighlightBlock variant="forest" label="NEAR COMPLETE">
          <p className="font-medium mb-1">Section 16 (Decision Log) at 85%</p>
          <p>
            Confirmed and pending decisions cataloged. Needs historical decision context and meeting notes.
          </p>
        </HighlightBlock>
      </div>
    </div>
  );
}
