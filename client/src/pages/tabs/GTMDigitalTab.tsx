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
  websiteNavItems,
  missingSiteElements,
  socialStats,
  socialPlatforms,
  contentPillars,
  seoKeywords,
  seoTimeline,
  websitePriorities,
  gpContentTiers,
  digitalKeyTakeaway,
} from "@/lib/digitalData";
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
import SubTabNav from "@/components/SubTabNav";
import {
  Rocket, BarChart3, Megaphone, Calendar, CheckCircle, Layers,
  Globe, Share2, FileText, Search, Users,
} from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  if (status === "Live") return <Badge variant="green">Live</Badge>;
  if (status === "Inaccessible") return <Badge variant="red">Inaccessible</Badge>;
  if (status.startsWith("Missing")) return <Badge variant="amber">Missing</Badge>;
  return <Badge variant="muted">{status}</Badge>;
}

/* ---- Strategy sub-tab (GTM fit, growth motions, pillars) ---- */
function StrategyContent() {
  return (
    <>
      <KeyTakeaway label="KEY TAKEAWAY" text={gtmKeyTakeaway} />

      <Divider />

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
    </>
  );
}

/* ---- Channels sub-tab (channel ranking, budget) ---- */
function ChannelsContent() {
  return (
    <>
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
    </>
  );
}

/* ---- Timeline sub-tab (launch phases) ---- */
function TimelineContent() {
  return (
    <>
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
    </>
  );
}

/* ---- Website sub-tab (from DigitalTab) ---- */
function WebsiteContent() {
  return (
    <>
      <KeyTakeaway label="KEY TAKEAWAY" text={digitalKeyTakeaway} />

      <SubTitle icon={<Globe size={16} />}>Website Audit</SubTitle>
      <div className="overflow-x-auto rounded-lg mb-6" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              <th className="px-4 py-2.5 text-left font-medium text-xs" style={{ color: "var(--muted-foreground)", borderBottom: "1px solid var(--border)" }}>Page</th>
              <th className="px-4 py-2.5 text-left font-medium text-xs" style={{ color: "var(--muted-foreground)", borderBottom: "1px solid var(--border)" }}>Status</th>
              <th className="px-4 py-2.5 text-left font-medium text-xs" style={{ color: "var(--muted-foreground)", borderBottom: "1px solid var(--border)" }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {websiteNavItems.map((item, i) => (
              <tr key={i} style={{ borderBottom: i < websiteNavItems.length - 1 ? "1px solid var(--border)" : "none" }}>
                <td className="px-4 py-2.5 text-[13px] font-medium" style={{ color: "var(--foreground)" }}>{item.page}</td>
                <td className="px-4 py-2.5"><StatusBadge status={item.status} /></td>
                <td className="px-4 py-2.5 text-[13px]" style={{ color: "var(--muted-foreground)" }}>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubTitle>Missing Structural Elements</SubTitle>
      <DataTable headers={missingSiteElements.headers} rows={missingSiteElements.rows} />

      <div className="mt-6">
        <SubTitle>Website Priority Roadmap</SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {websitePriorities.map((p, i) => (
            <Card key={i} title={p.timeframe} variant={i === 0 ? "red" : i === 1 ? "amber" : "default"}>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="text-xs flex gap-2">
                    <span style={{ color: "var(--phycap-gold)" }}>+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Social sub-tab (from DigitalTab) ---- */
function SocialContent() {
  return (
    <>
      <SubTitle icon={<Share2 size={16} />}>Social Media Audit</SubTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {socialStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 3} />
        ))}
      </div>

      <DataTable headers={socialPlatforms.headers} rows={socialPlatforms.rows} />

      <div className="mt-6">
        <SubTitle icon={<Users size={16} />}>GP Content Activation Tiers</SubTitle>
        <DataTable headers={gpContentTiers.headers} rows={gpContentTiers.rows} />
      </div>
    </>
  );
}

/* ---- Content sub-tab (from DigitalTab) ---- */
function ContentStrategyContent() {
  return (
    <>
      <SubTitle icon={<FileText size={16} />}>Content Pillar Framework</SubTitle>
      <HighlightBlock variant="forest" label="THE OWNERSHIP GAP">
        <p className="text-xs">When PhyCap publishes about broad AI trends, it competes with Rock Health, a16z Bio, and STAT News. PhyCap will lose. When PhyCap publishes about how a radiologist evaluates an AI diagnostic tool differently than a VC associate, it has no competition. Zero.</p>
      </HighlightBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contentPillars.map((pillar, i) => (
          <Card key={i} title={pillar.name} variant={pillar.status.includes("High Priority") ? "gold" : pillar.status.includes("Underleveraged") ? "amber" : "forest"}>
            <div className="flex gap-2 mb-2">
              <Badge variant={pillar.status === "Owned" ? "green" : "amber"}>{pillar.status}</Badge>
              <Badge variant="muted">{pillar.cadence}</Badge>
            </div>
            <p>{pillar.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

/* ---- SEO sub-tab (from DigitalTab) ---- */
function SeoContent() {
  return (
    <>
      <SubTitle icon={<Search size={16} />}>SEO Baseline</SubTitle>
      <HighlightBlock variant="gold" label="SEO STRATEGY">
        <p className="text-xs">The strategy is not to outrank established competitors on their terms. The strategy is to own the terms they do not compete for: "physician-led venture capital," "physician venture fund," "clinical precision investing," and the intersection of clinical specialty keywords with investment keywords.</p>
      </HighlightBlock>

      <SubTitle>Keyword Gap Analysis</SubTitle>
      <DataTable headers={seoKeywords.headers} rows={seoKeywords.rows} />

      <div className="mt-6">
        <SubTitle>SEO Timeline</SubTitle>
        <DataTable headers={seoTimeline.headers} rows={seoTimeline.rows} />
      </div>
    </>
  );
}

/* ---- Main Go-to-Market Tab ---- */
const subTabs = [
  { id: "strategy", label: "Strategy" },
  { id: "channels", label: "Channels" },
  { id: "timeline", label: "Timeline" },
  { id: "website", label: "Website" },
  { id: "social", label: "Social" },
  { id: "content", label: "Content" },
  { id: "seo", label: "SEO" },
];

export default function GTMDigitalTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="09"
        title="Go-to-Market"
        subtitle="GTM strategy, channel prioritization, launch timeline, and digital presence audit."
      />

      <SubTabNav tabs={subTabs} defaultTab="strategy">
        {(active) => {
          if (active === "strategy") return <StrategyContent />;
          if (active === "channels") return <ChannelsContent />;
          if (active === "timeline") return <TimelineContent />;
          if (active === "website") return <WebsiteContent />;
          if (active === "social") return <SocialContent />;
          if (active === "content") return <ContentStrategyContent />;
          if (active === "seo") return <SeoContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
