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
} from "@/components/BrandComponents";
import { Building2, Users, Landmark, Clock, AlertTriangle, MapPin } from "lucide-react";

export default function CompanyTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="02"
        title="Company Profile"
        subtitle="Legal structure, team composition, investment parameters, and the founding narrative behind PhyCap."
      />

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

      {/* GP Roster */}
      <SubTitle icon={<Users size={16} />}>GP Roster</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {gpRoster.map((gp, i) => (
          <Card key={i} title={gp.name} variant={gp.credentials.includes("MHCDS") ? "gold" : "default"}>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="green">{gp.role}</Badge>
                <Badge variant="blue">{gp.specialty}</Badge>
              </div>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {gp.credentials}
              </p>
              <p>{gp.diligenceLens}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Lifecycle Coverage */}
      <SubTitle>Clinical Lifecycle Coverage</SubTitle>
      <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
        Together, the GP roster covers the full arc of human medicine. No competing physician-led fund has this breadth.
      </p>
      <DataTable
        headers={["Clinical Domain", "GP", "Specialty"]}
        rows={lifecycleCoverage.map((r) => [r.domain, r.gp, r.specialty])}
      />

      <Divider />

      {/* Founding Story */}
      <SubTitle icon={<Clock size={16} />}>Why Now</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
    </div>
  );
}
