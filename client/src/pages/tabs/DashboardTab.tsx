import {
  brandMeta,
  overviewStats,
  overviewStrengths,
  overviewChallenges,
  overviewOpportunities,
  lpTestimonials,
} from "@/lib/brandData";
import {
  companyMeta,
  companyStats,
  namingRules,
  investmentAreas,
  gpRoster,
  lifecycleCoverage,
  foundingWhyNow,
  fortySixRelationship,
} from "@/lib/companyData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  InfoRow,
  HighlightBlock,
  Badge,
  QuoteBlock,
} from "@/components/BrandComponents";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import {
  TrendingUp, AlertCircle, Lightbulb, MessageSquare,
  Building2, Users, Landmark, Clock, AlertTriangle, MapPin,
} from "lucide-react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";

/* ---- Summary sub-tab (from OverviewTab) ---- */
function SummaryContent() {
  return (
    <>
      {/* Hero header */}
      <div
        className="rounded-lg mb-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${forest} 0%, oklch(0.16 0.02 163) 100%)`,
          border: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: gold }} />
        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mb-5"
                style={{ background: "oklch(0.77 0.07 72 / 0.15)", border: "1px solid oklch(0.77 0.07 72 / 0.30)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: gold }} />
                <span className="eyebrow" style={{ color: gold, fontSize: "10px" }}>BRAND HEADQUARTERS</span>
              </div>
              <h1
                className="display-font mb-4"
                style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "oklch(0.97 0.005 60)", lineHeight: 1.0 }}
              >
                PhyCap<br />
                <span style={{ color: gold }}>Brand HQ</span>
              </h1>
              <p style={{ color: "oklch(0.72 0.03 60)", fontSize: "15px", maxWidth: "520px", lineHeight: 1.65 }}>
                {brandMeta.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div style={{ color: "oklch(0.55 0.03 60)", fontSize: "11px", lineHeight: 1.8 }}>
                <div>Updated: {brandMeta.updatedDate}</div>
                <div>Physicians Capital Fund</div>
                <div>Fund I</div>
              </div>
              <div
                className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                style={{
                  background: "oklch(0.77 0.07 72 / 0.12)",
                  border: "1px solid oklch(0.77 0.07 72 / 0.28)",
                }}
              >
                <span className="eyebrow" style={{ color: gold, fontSize: "9px" }}>RESEARCH VALIDATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {overviewStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      {/* Key Takeaway */}
      <KeyTakeaway label="KEY TAKEAWAY" text={brandMeta.keyTakeaway} />

      <Divider />

      {/* Strengths */}
      <SubTitle icon={<TrendingUp size={16} />}>Strengths</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewStrengths.map((s, i) => (
          <Card key={i} title={s.title} variant="forest">
            <p>{s.body}</p>
          </Card>
        ))}
      </div>

      {/* Challenges */}
      <SubTitle icon={<AlertCircle size={16} />}>Challenges</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewChallenges.map((c, i) => (
          <Card key={i} title={c.title} variant="amber">
            <p>{c.body}</p>
          </Card>
        ))}
      </div>

      {/* Opportunities */}
      <SubTitle icon={<Lightbulb size={16} />}>Opportunities</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewOpportunities.map((o, i) => (
          <Card key={i} title={o.title} variant="gold">
            <p>{o.body}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* LP Testimonials */}
      <SubTitle icon={<MessageSquare size={16} />}>LP Testimonials</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {lpTestimonials.map((t, i) => (
          <QuoteBlock key={i} quote={t.quote} attribution={t.name} />
        ))}
      </div>
    </>
  );
}

/* ---- Company sub-tab (from CompanyTab) ---- */
function CompanyContent() {
  return (
    <>
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {companyStats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} note={s.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway
        label="FUND OVERVIEW"
        text="PhyCap is an early-stage venture capital fund that invests $150K to $500K into Seed through Series A healthcare technology companies. The fund is led by a team of practicing and former physicians who apply clinical expertise to every stage: deal sourcing, diligence, portfolio support, and post-investment guidance."
      />

      <Divider />

      {/* Company basics */}
      <SubTitle icon={<Building2 size={16} />}>Fund Details</SubTitle>
      <div className="mb-8">
        <InfoRow label="Legal Name" value={companyMeta.legalName} />
        <InfoRow label="Operating Name" value={companyMeta.operatingName} />
        <InfoRow label="Fund Name" value={companyMeta.fundName} />
        <InfoRow label="Headquarters" value={companyMeta.headquarters} />
        <InfoRow label="Target Fund Size" value={companyMeta.targetFundSize} />
        <InfoRow label="Check Size" value={companyMeta.checkSize} />
        <InfoRow label="Stage" value={companyMeta.stage} />
        <InfoRow label="Exclusions" value={companyMeta.exclusions} />
        <InfoRow label="Portfolio" value={companyMeta.portfolio} />
        <InfoRow label="Co-Manager" value={companyMeta.coManager} />
      </div>

      {/* Naming */}
      <SubTitle>Naming Conventions</SubTitle>
      <DataTable
        headers={["Context", "Name to Use"]}
        rows={namingRules.map((r) => [r.context, r.name])}
      />

      <Divider />

      {/* Investment Areas */}
      <SubTitle icon={<Landmark size={16} />}>Investment Areas</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {investmentAreas.map((area, i) => (
          <Card key={i} title={area.title} variant={i === 0 ? "forest" : i === 1 ? "gold" : "amber"}>
            <p>{area.description}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* FortySix Relationship */}
      <SubTitle icon={<AlertTriangle size={16} />}>FortySix Capital Relationship</SubTitle>
      <HighlightBlock variant="amber" label="BRAND COHERENCE ISSUE">
        <p className="mb-3">{fortySixRelationship.summary}</p>
        <p className="font-medium text-xs mb-2">Currently visible in:</p>
        <ul className="list-disc list-inside space-y-1">
          {fortySixRelationship.visibleIn.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <p className="mt-3 font-medium text-xs">
          Recommendation: {fortySixRelationship.recommendation}
        </p>
      </HighlightBlock>
    </>
  );
}

/* ---- Team sub-tab (GP roster from CompanyTab) ---- */
function TeamContent() {
  return (
    <>
      <SubTitle icon={<Users size={16} />}>GP Roster</SubTitle>
      <p className="text-xs mb-4" style={{ color: "var(--muted-foreground)" }}>
        Click any GP to expand their full profile and diligence lens.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {gpRoster.map((gp, i) => (
          <ExpandableCard
            key={i}
            title={gp.name}
            subtitle={gp.specialty}
            badge={
              <Badge variant={gp.credentials.includes("MHCDS") ? "gold" : "green"}>
                {gp.role}
              </Badge>
            }
          >
            <div className="space-y-2">
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {gp.credentials}
              </p>
              <HighlightBlock variant="forest" label="DILIGENCE LENS">
                <p>{gp.diligenceLens}</p>
              </HighlightBlock>
            </div>
          </ExpandableCard>
        ))}
      </div>

      {/* Lifecycle Coverage */}
      <SubTitle>Clinical Lifecycle Coverage</SubTitle>
      <p className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
        Together, the GP roster covers the full arc of human medicine. No competing physician-led fund has this breadth.
      </p>
      <DataTable
        headers={["Clinical Domain", "GP", "Specialty"]}
        rows={lifecycleCoverage.map((r) => [r.domain, r.gp, r.specialty])}
      />
    </>
  );
}

/* ---- Founding Story sub-tab (from CompanyTab) ---- */
function FoundingStoryContent() {
  return (
    <>
      <SubTitle icon={<Clock size={16} />}>Why Now</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {foundingWhyNow.map((item, i) => (
          <Card key={i} title={item.title} variant="forest">
            <p>{item.detail}</p>
          </Card>
        ))}
      </div>

      <SubTitle icon={<MapPin size={16} />}>Why Tulsa</SubTitle>
      <HighlightBlock variant="forest" label="STRATEGIC LOCATION">
        <p>
          Operating from Tulsa provides cost structure advantage, proximity to underserved healthcare markets,
          the FortySix Capital partnership for operational infrastructure, and positioning in an emerging
          innovation corridor outside the coastal VC hubs.
          The message is not "We are based in Tulsa." The message is "We chose to build where
          the healthcare system's failures are most visible, not where the venture capital industry is most comfortable."
        </p>
      </HighlightBlock>
    </>
  );
}

/* ---- Main Dashboard Tab ---- */
const subTabs = [
  { id: "summary", label: "Summary" },
  { id: "company", label: "Company" },
  { id: "team", label: "Team" },
  { id: "founding", label: "Founding Story" },
];

export default function DashboardTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="01"
        title="Dashboard"
        subtitle="Executive summary, company profile, and team."
      />

      <SubTabNav tabs={subTabs} defaultTab="summary">
        {(active) => {
          if (active === "summary") return <SummaryContent />;
          if (active === "company") return <CompanyContent />;
          if (active === "team") return <TeamContent />;
          if (active === "founding") return <FoundingStoryContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
