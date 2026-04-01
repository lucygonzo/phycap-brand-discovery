import {
  portfolioMeta,
  portfolioStats,
  showcasePrinciples,
  showcasePhases,
  validationLevels,
  requiredFields,
  confidentialitySteps,
} from "@/lib/portfolioData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  Badge,
} from "@/components/BrandComponents";
import { Briefcase, Shield, Layers, CheckCircle, FileText } from "lucide-react";

export default function PortfolioTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={portfolioMeta.sectionNumber}
        title={portfolioMeta.title}
        subtitle={portfolioMeta.subtitle}
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {portfolioStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={portfolioMeta.keyTakeaway} />

      <Divider />

      {/* BioReact Spotlight */}
      <SubTitle icon={<Briefcase size={16} />}>Current Portfolio</SubTitle>
      <HighlightBlock variant="forest" label="BIOREACT">
        <p className="mb-2">
          Only publicly confirmed portfolio company. Thesis alignment to be documented.
          As the sole visible investment, BioReact carries outsized weight in how founders, LPs, and competitors perceive PhyCap's investment judgment.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="green">Publicly Confirmed</Badge>
          <Badge variant="amber">Thesis Alignment TBD</Badge>
          <Badge variant="amber">Showcase Content Needed</Badge>
        </div>
      </HighlightBlock>

      <Divider />

      {/* Showcase Principles */}
      <SubTitle icon={<Shield size={16} />}>Showcase Design Principles</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {showcasePrinciples.map((p, i) => (
          <Card key={i} title={p.title} variant="forest">
            <p>{p.body}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Scaling Phases */}
      <SubTitle icon={<Layers size={16} />}>Showcase Scaling Plan</SubTitle>
      <div className="space-y-4 mb-8">
        {showcasePhases.map((phase, i) => (
          <Card key={i} title={phase.phase} variant={i === 0 ? "gold" : "default"}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={i === 0 ? "green" : "muted"}>{phase.status}</Badge>
            </div>
            <ul className="space-y-1.5">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span style={{ color: "var(--phycap-gold)", marginTop: "2px" }}>&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Clinical Validation Levels */}
      <SubTitle icon={<CheckCircle size={16} />}>Clinical Validation Framework</SubTitle>
      <DataTable
        headers={["Level", "Requirement", "Description"]}
        rows={validationLevels.map((v) => [v.level, v.requirement, v.description])}
      />

      <Divider />

      {/* Required Fields */}
      <SubTitle icon={<FileText size={16} />}>Required Showcase Fields</SubTitle>
      <DataTable
        headers={["Field", "Description"]}
        rows={requiredFields.map((f) => [f.field, f.description])}
      />

      <Divider />

      {/* Confidentiality Protocol */}
      <SubTitle icon={<Shield size={16} />}>Confidentiality Protocol</SubTitle>
      <Card title="Before Publishing Any Portfolio Information" variant="amber">
        <ol className="space-y-2">
          {confidentialitySteps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                style={{ background: "var(--phycap-gold)", color: "var(--phycap-forest)" }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
