import { Link } from "wouter";
import {
  gpContentMeta,
  gpContentStats,
  gpProfiles,
  contentSystemLayers,
  companyPageRoles,
  linkedInBannerSpecs,
  photoTreatment,
  contentCalendar,
} from "@/lib/gpContentData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Badge,
  DataTable,
  HighlightBlock,
  InfoRow,
  SubTitle,
  Divider,
} from "@/components/BrandComponents";
import SubTabNav from "@/components/SubTabNav";
import { Network, Building2, Calendar, Image, ArrowRight, Layers } from "lucide-react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";
const border = "var(--border)";

/* ============================================================
   GP COLOR HELPERS
   ============================================================ */
function gpTextColor(gpColor: string): string {
  // Tim's cream background needs forest text; everyone else uses light text
  return gpColor === "#F5F2F0" ? "#122620" : "#F5F2F0";
}

/* ============================================================
   NETWORK MAP SUB-TAB
   ============================================================ */
function NetworkMapContent() {
  return (
    <>
      <KeyTakeaway
        label="HOUSE OF BRANDS MODEL"
        text="PhyCap operates a coordinated content network, not a single company voice. The company page anchors the thesis. Four GP personal brands refract that thesis through distinct clinical lenses, reaching audiences the company page alone would never touch. Each GP owns specific content territories while sharing others, creating a web of credibility that compounds with every post."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {gpContentStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      {/* Hub-Spoke Visualization */}
      <SubTitle icon={<Network size={16} />}>Content Network Architecture</SubTitle>

      <div className="relative mb-10">
        {/* Hub-Spoke Grid Layout */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto" style={{ gridTemplateRows: "auto auto auto" }}>

          {/* Top row: Paul (left) and Vipul (right) */}
          <div className="col-start-1 row-start-1">
            <GPSpokeCard gp={gpProfiles[0]} />
          </div>
          <div className="col-start-2 row-start-1 flex items-end justify-center pb-2">
            <ConnectorLine direction="vertical" />
          </div>
          <div className="col-start-3 row-start-1">
            <GPSpokeCard gp={gpProfiles[1]} />
          </div>

          {/* Middle row: Connector | Hub | Connector */}
          <div className="col-start-1 row-start-2 flex items-center justify-end pr-2">
            <ConnectorLine direction="horizontal" />
          </div>
          <div className="col-start-2 row-start-2">
            <div
              className="rounded-xl p-5 text-center"
              style={{
                background: forest,
                border: `2px solid ${gold}`,
                boxShadow: "0 4px 24px oklch(0 0 0 / 0.15)",
              }}
            >
              <div className="display-font text-lg mb-1" style={{ color: gold }}>
                PhyCap
              </div>
              <div className="text-xs font-medium mb-2" style={{ color: "oklch(0.85 0.01 60)" }}>
                Investment Thesis
              </div>
              <div className="text-[10px] leading-relaxed" style={{ color: "oklch(0.65 0.01 60)" }}>
                Physician-led healthcare venture investing at the point of care
              </div>
            </div>
          </div>
          <div className="col-start-3 row-start-2 flex items-center justify-start pl-2">
            <ConnectorLine direction="horizontal" />
          </div>

          {/* Bottom row: Robin (left) and Tim (right) */}
          <div className="col-start-1 row-start-3">
            <GPSpokeCard gp={gpProfiles[2]} />
          </div>
          <div className="col-start-2 row-start-3 flex items-start justify-center pt-2">
            <ConnectorLine direction="vertical" />
          </div>
          <div className="col-start-3 row-start-3">
            <GPSpokeCard gp={gpProfiles[3]} />
          </div>
        </div>
      </div>

      {/* Content Flow */}
      <SubTitle icon={<Layers size={16} />}>Content Flow</SubTitle>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {[
          "Thesis",
          "Monthly Plan",
          "GP Briefs",
          "Individual Posts",
          "Cross-amplification",
        ].map((step, i, arr) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="px-4 py-2.5 rounded-lg text-sm font-medium"
              style={{
                background: i === 0 ? forest : "var(--card)",
                color: i === 0 ? gold : "var(--foreground)",
                border: i === 0 ? "none" : `1px solid ${border}`,
              }}
            >
              {step}
            </div>
            {i < arr.length - 1 && (
              <ArrowRight size={14} style={{ color: gold, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* System Layers */}
      <SubTitle icon={<Layers size={16} />}>Content System Architecture</SubTitle>
      <div className="space-y-3 mb-6">
        {contentSystemLayers.map((layer, i) => (
          <HighlightBlock key={i} variant="forest" label={`LAYER ${i + 1}`}>
            <p className="font-medium mb-1">{layer.layer}</p>
            <p>{layer.description}</p>
          </HighlightBlock>
        ))}
      </div>
    </>
  );
}

/* ---- Spoke Card for GP in hub visualization ---- */
function GPSpokeCard({ gp }: { gp: typeof gpProfiles[0] }) {
  const textColor = gpTextColor(gp.gpColor);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <div
      className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
      style={{ border: `1px solid ${border}` }}
    >
      {/* Color accent bar */}
      <div className="h-1.5" style={{ background: gp.gpColor }} />

      <div className="p-4" style={{ background: "var(--card)" }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
              {gp.name.split(",")[0]}
            </h4>
            <p className="text-[11px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>
              {gp.specialty}
            </p>
          </div>
        </div>

        <p className="text-xs italic mb-3 leading-relaxed" style={{ color: "var(--foreground)" }}>
          "{gp.oneThingOnly}"
        </p>

        <div className="flex items-center justify-between">
          <Badge variant="gold">{gp.cadence}</Badge>
          <Link
            href={`${base}/gp/${gp.slug}`}
            className="inline-flex items-center gap-1 text-[11px] font-medium transition-colors"
            style={{ color: gold }}
          >
            View Homebase
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---- Connector lines for hub-spoke ---- */
function ConnectorLine({ direction }: { direction: "horizontal" | "vertical" }) {
  if (direction === "horizontal") {
    return (
      <div className="flex items-center gap-1">
        <div className="w-6 h-px" style={{ background: gold, opacity: 0.4 }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: gold, opacity: 0.6 }} />
        <div className="w-6 h-px" style={{ background: gold, opacity: 0.4 }} />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-px h-6" style={{ background: gold, opacity: 0.4 }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: gold, opacity: 0.6 }} />
      <div className="w-px h-6" style={{ background: gold, opacity: 0.4 }} />
    </div>
  );
}

/* ============================================================
   COMPANY PAGE SUB-TAB
   ============================================================ */
function CompanyPageContent() {
  return (
    <>
      <KeyTakeaway
        label="COMPANY PAGE STRATEGY"
        text="The PhyCap company page serves as the institutional voice of the fund. It publishes official announcements, amplifies GP content with thesis-level framing, and maintains the brand's credibility baseline. The company page never competes with GP voices for attention; it elevates them."
      />

      <SubTitle>Company Page vs. GP Profile Roles</SubTitle>
      <DataTable
        headers={["Content Type", "Company Page", "GP Profiles"]}
        rows={companyPageRoles.map((r) => [r.contentType, r.companyPage, r.gpRole])}
      />

      <div className="mt-8">
        <SubTitle>When the Company Page Posts Independently</SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Independent Publishing" variant="forest">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>Fund announcements and milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>Portfolio company news (official)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>Quarterly thesis framework updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>Event promotions and community announcements</span>
              </li>
            </ul>
          </Card>
          <Card title="Amplification Mode" variant="gold">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>GP thesis posts (reposted with framing sentence)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>GP clinical insight posts (engage with comment)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>GP event recaps (repost with community frame)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>GP policy analysis (repost for broad audience reach)</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <SubTitle>Investment Announcement Sequencing</SubTitle>
        <div className="space-y-3">
          {[
            { step: "1", label: "COMPANY PAGE", detail: "Publishes the official investment announcement. Professional tone, key terms, fund thesis connection." },
            { step: "2", label: "LEAD GP (PAUL)", detail: "Adds personal commentary within 4 hours. Connects the investment to the thesis narrative he has been building." },
            { step: "3", label: "RELEVANT GP", detail: "The GP whose clinical specialty aligns with the investment adds their clinical perspective within 8 hours." },
            { step: "4", label: "REMAINING GPS", detail: "Other GPs amplify over 24 hours with brief, authentic engagement (comments, reposts with personal note)." },
          ].map((item) => (
            <HighlightBlock key={item.step} variant={item.step === "1" ? "forest" : "gold"} label={`STEP ${item.step}`}>
              <p className="font-medium mb-1">{item.label}</p>
              <p>{item.detail}</p>
            </HighlightBlock>
          ))}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   CONTENT CALENDAR SUB-TAB
   ============================================================ */
function ContentCalendarContent() {
  return (
    <>
      <SubTitle icon={<Calendar size={16} />}>Monthly Calendar Structure</SubTitle>
      <div className="space-y-3 mb-8">
        {contentCalendar.monthlyStructure.map((week, i) => (
          <Card key={i} title={week.week} variant={i === 0 ? "forest" : "default"}>
            <p className="font-medium text-sm mb-1" style={{ color: gold }}>{week.focus}</p>
            <p className="text-sm">{week.detail}</p>
          </Card>
        ))}
      </div>

      <SubTitle>Topic Cluster Ownership</SubTitle>
      <DataTable
        headers={["Topic Cluster", "Primary Owner", "Supporting GPs", "Cadence"]}
        rows={contentCalendar.topicOwnership.map((t) => [
          t.cluster,
          t.primary,
          t.supporting.length > 0 ? t.supporting.join(", ") : "Solo",
          t.cadence,
        ])}
      />

      <div className="mt-8">
        <SubTitle>Cross-Posting Rules</SubTitle>
        <Card title="Engagement Protocol" variant="forest">
          <ul className="space-y-2">
            {contentCalendar.crossPostingRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

/* ============================================================
   LINKEDIN SPECS SUB-TAB
   ============================================================ */
function LinkedInSpecsContent() {
  return (
    <>
      <SubTitle icon={<Image size={16} />}>Banner Specifications</SubTitle>
      <Card title="LinkedIn Banner Specs" variant="default">
        <InfoRow label="Dimensions" value={linkedInBannerSpecs.dimensions} />
        <InfoRow label="Format" value={linkedInBannerSpecs.format} />
        <InfoRow label="Safe Zone" value={linkedInBannerSpecs.safeZone} />
      </Card>

      <div className="mt-6">
        <SubTitle>Photo Treatment (PhyCap Preset)</SubTitle>
        <Card title="Headshot Processing Parameters" variant="default">
          {photoTreatment.map((p, i) => (
            <InfoRow key={i} label={p.parameter} value={p.setting} />
          ))}
        </Card>
      </div>

      <div className="mt-6">
        <SubTitle>Per-GP Banner and Bio Details</SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gpProfiles.map((gp, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid ${border}` }}
            >
              {/* Color header bar */}
              <div
                className="p-4"
                style={{ background: gp.gpColor }}
              >
                <h4
                  className="font-medium text-sm"
                  style={{ color: gpTextColor(gp.gpColor) }}
                >
                  {gp.name.split(",")[0]}
                </h4>
                <p
                  className="text-xs mt-0.5 italic"
                  style={{ color: gpTextColor(gp.gpColor), opacity: 0.8 }}
                >
                  "{gp.bannerTagline}"
                </p>
              </div>
              <div className="p-4 space-y-2" style={{ background: "var(--card)" }}>
                <InfoRow label="Banner Concept" value={gp.bannerConcept} />
                <InfoRow label="Cadence" value={gp.cadence} />
                <InfoRow label="Photo Notes" value={gp.photoNotes} />
                <div className="pt-2">
                  <p className="text-[10px] font-medium uppercase mb-1.5" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                    BIO TEMPLATE
                  </p>
                  <div className="text-xs space-y-0.5">
                    {gp.bioTemplate.map((line, li) => (
                      <p key={li} style={{ color: "var(--foreground)" }}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-[10px] font-medium uppercase mb-1" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                    CTA LANGUAGE
                  </p>
                  <p className="text-xs italic" style={{ color: "var(--foreground)" }}>
                    "{gp.ctaLanguage}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */
export default function GPContentTab() {
  const subTabs = [
    { id: "network", label: "Network Map" },
    { id: "company-page", label: "Company Page" },
    { id: "calendar", label: "Content Calendar" },
    { id: "linkedin", label: "LinkedIn Specs" },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={gpContentMeta.sectionNumber}
        title={gpContentMeta.title}
        subtitle={gpContentMeta.subtitle}
      />

      <SubTabNav tabs={subTabs}>
        {(activeSubTab) =>
          activeSubTab === "network" ? (
            <NetworkMapContent />
          ) : activeSubTab === "company-page" ? (
            <CompanyPageContent />
          ) : activeSubTab === "calendar" ? (
            <ContentCalendarContent />
          ) : activeSubTab === "linkedin" ? (
            <LinkedInSpecsContent />
          ) : null
        }
      </SubTabNav>
    </div>
  );
}
