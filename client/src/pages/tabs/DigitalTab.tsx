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
import { Globe, Share2, FileText, Search, Layers, Users } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  if (status === "Live") return <Badge variant="green">Live</Badge>;
  if (status === "Inaccessible") return <Badge variant="red">Inaccessible</Badge>;
  if (status.startsWith("Missing")) return <Badge variant="amber">Missing</Badge>;
  return <Badge variant="muted">{status}</Badge>;
}

export default function DigitalTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="10"
        title="Digital Presence"
        subtitle="Website audit, social media assessment, content strategy, and SEO baseline for PhyCap's digital ecosystem."
      />

      <KeyTakeaway label="KEY TAKEAWAY" text={digitalKeyTakeaway} />

      <Divider />

      {/* Website Audit */}
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

      <div className="mt-6 mb-8">
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

      <Divider />

      {/* Social Media */}
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

      <Divider />

      {/* Content Strategy */}
      <SubTitle icon={<FileText size={16} />}>Content Pillar Framework</SubTitle>
      <HighlightBlock variant="forest" label="THE OWNERSHIP GAP">
        <p className="text-xs">When PhyCap publishes about broad AI trends, it competes with Rock Health, a16z Bio, and STAT News. PhyCap will lose. When PhyCap publishes about how a radiologist evaluates an AI diagnostic tool differently than a VC associate, it has no competition. Zero.</p>
      </HighlightBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

      <Divider />

      {/* SEO */}
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
    </div>
  );
}
