import { useState } from "react";
import { Link } from "wouter";
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
  namingPronunciation,
  namingNeverList,
  investmentAreas,
  gpRoster,
  lifecycleCoverage,
  foundingWhyNow,
  fortySixRelationship,
} from "@/lib/companyData";
import { gpProfiles } from "@/lib/gpContentData";
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
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import {
  TrendingUp, AlertCircle, Lightbulb, MessageSquare,
  Building2, Users, Landmark, Clock, MapPin, Info,
  Volume2, XCircle, Handshake,
} from "lucide-react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";
const mutedText = "var(--muted-foreground)";

/* ---- Stat usage hints for tooltip-style display (Fix #1) ---- */
const statUsageHints = [
  "Use in LP deck slide 3",
  "Reference in founder-facing materials",
  "Use in pipeline and deal flow slides",
  "Reference in event marketing and LP recruitment",
];

/* ---- Key phrases to highlight in testimonials (Fix #3) ---- */
const testimonialHighlights: Record<number, string[]> = {
  0: ["diversify into early-stage opportunities normally out of reach", "intellectually rewarding"],
  1: ["healthcare system is unsustainable", "physician-led venture capital"],
  2: ["seat at the table", "shape the future of healthcare", "diverse community of clinical leaders"],
  3: ["play an active role in shaping the future of medicine", "forward-thinking, tech-driven changes"],
};

function highlightPhrases(text: string, phrases: string[]) {
  if (!phrases || phrases.length === 0) return text;
  const parts: (string | { highlighted: string })[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let earliestPhrase = "";

    for (const phrase of phrases) {
      const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestPhrase = phrase;
      }
    }

    if (earliestPhrase === "") {
      parts.push(remaining);
      break;
    }

    if (earliestIndex > 0) {
      parts.push(remaining.substring(0, earliestIndex));
    }
    parts.push({ highlighted: remaining.substring(earliestIndex, earliestIndex + earliestPhrase.length) });
    remaining = remaining.substring(earliestIndex + earliestPhrase.length);
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            style={{
              fontWeight: 600,
              textDecoration: "underline",
              textDecorationColor: gold,
              textUnderlineOffset: "3px",
            }}
          >
            {part.highlighted}
          </span>
        )
      )}
    </>
  );
}

/* ---- GP avatar helper (Fix #7) ---- */
const gpSlugsWithPages = ["paul-slosar", "vipul-kella", "robin-noble", "tim-martens"];

function getGPColor(name: string): string {
  const profile = gpProfiles.find((p) => p.name.startsWith(name.split(" ")[0]));
  return profile?.gpColor || forest;
}

function getGPSlug(name: string): string | null {
  const profile = gpProfiles.find((p) => p.name.startsWith(name.split(" ")[0]));
  if (profile && gpSlugsWithPages.includes(profile.slug)) return profile.slug;
  return null;
}

function GPAvatar({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .filter((w) => !w.includes(","))
    .map((w) => w[0])
    .join("")
    .substring(0, 2);
  const color = getGPColor(name);
  const isLight = color === "#F5F2F0" || color === "#D3B184";

  return (
    <div
      className="flex-shrink-0 rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: color,
        border: isLight ? "1px solid var(--border)" : "none",
      }}
    >
      <span
        className="font-medium"
        style={{
          fontSize: size * 0.36,
          color: isLight ? "var(--foreground)" : "oklch(0.92 0.01 60)",
          lineHeight: 1,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

/* ---- Strategic Landscape filter pills (Fix #2) ---- */
type LandscapeFilter = "strengths" | "challenges" | "opportunities";

function StrategicLandscape() {
  const [filter, setFilter] = useState<LandscapeFilter>("strengths");

  const filters: { id: LandscapeFilter; label: string; icon: React.ReactNode; variant: "forest" | "amber" | "gold" }[] = [
    { id: "strengths", label: "Strengths", icon: <TrendingUp size={13} />, variant: "forest" },
    { id: "challenges", label: "Challenges", icon: <AlertCircle size={13} />, variant: "amber" },
    { id: "opportunities", label: "Opportunities", icon: <Lightbulb size={13} />, variant: "gold" },
  ];

  const items =
    filter === "strengths"
      ? overviewStrengths
      : filter === "challenges"
      ? overviewChallenges
      : overviewOpportunities;

  const activeFilter = filters.find((f) => f.id === filter)!;

  return (
    <div className="mb-8">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f) => {
          const isActive = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: isActive ? "var(--card)" : "transparent",
                color: isActive ? gold : mutedText,
                border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                boxShadow: isActive ? "0 1px 3px oklch(0 0 0 / 0.06)" : "none",
              }}
            >
              {f.icon}
              {f.label}
              <span
                className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full"
                style={{
                  background: isActive ? "oklch(0.77 0.07 72 / 0.15)" : "oklch(0.50 0.02 200 / 0.1)",
                  color: isActive ? gold : mutedText,
                }}
              >
                {f.id === "strengths"
                  ? overviewStrengths.length
                  : f.id === "challenges"
                  ? overviewChallenges.length
                  : overviewOpportunities.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expandable items */}
      <div className="grid grid-cols-1 gap-2">
        {items.map((item, i) => (
          <ExpandableCard
            key={`${filter}-${i}`}
            title={item.title}
            badge={<Badge variant={activeFilter.variant === "forest" ? "green" : activeFilter.variant}>{activeFilter.label}</Badge>}
          >
            <p>{item.body}</p>
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
}

/* ---- Summary sub-tab ---- */
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

      {/* Fix #1: Proof Points section label */}
      <div className="mb-2">
        <div className="eyebrow mb-1" style={{ color: gold, fontSize: "10px" }}>PROOF POINTS</div>
        <p className="text-xs" style={{ color: mutedText, lineHeight: 1.6, maxWidth: "640px" }}>
          Key metrics that demonstrate PhyCap's competitive position. Use these in pitch materials, LP conversations, and content.
        </p>
      </div>

      {/* Stats row with usage hints */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {overviewStats.map((stat, i) => (
          <div key={i} className="relative">
            <StatCard value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
            <div
              className="flex items-center gap-1 mt-1.5 px-1"
              title={statUsageHints[i]}
            >
              <Info size={10} style={{ color: gold, flexShrink: 0 }} />
              <span className="text-[9px]" style={{ color: mutedText }}>{statUsageHints[i]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Takeaway */}
      <KeyTakeaway label="KEY TAKEAWAY" text={brandMeta.keyTakeaway} />

      <Divider />

      {/* Fix #2: Strategic Landscape with filter pills */}
      <SubTitle icon={<TrendingUp size={16} />}>Strategic Landscape</SubTitle>
      <StrategicLandscape />

      <Divider />

      {/* Fix #3: LP Testimonials with context framing */}
      <SubTitle icon={<MessageSquare size={16} />}>LP Testimonials</SubTitle>

      <HighlightBlock variant="forest" label="WHY THESE MATTER">
        <p className="mb-2">
          These LP testimonials reveal what physicians actually want from PhyCap. The pattern across all four: structural agency over healthcare decision-making, not just portfolio returns. This insight shapes messaging, positioning, and LP recruitment strategy.
        </p>
        <p className="text-xs" style={{ color: mutedText }}>
          Pull these quotes for LP-facing content, pitch decks, and community marketing. The underlined phrases below are the highest-value language for reuse.
        </p>
      </HighlightBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {lpTestimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-lg p-5 mb-0"
            style={{ background: "var(--phycap-cream)", border: "1px solid var(--border)" }}
          >
            <div className="display-font text-3xl mb-2" style={{ color: gold, lineHeight: 0.5 }}>"</div>
            <p className="italic text-sm mb-3" style={{ color: "var(--foreground)", lineHeight: 1.7 }}>
              {highlightPhrases(t.quote, testimonialHighlights[i] || [])}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px" style={{ background: gold }} />
              <span className="text-xs font-medium" style={{ color: forest }}>{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---- Company sub-tab ---- */
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

      {/* Fix #4: Fund Details in 2-column layout */}
      <SubTitle icon={<Building2 size={16} />}>Fund Details</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mb-8">
        <div>
          <InfoRow label="Legal Name" value={companyMeta.legalName} />
          <InfoRow label="Operating Name" value={companyMeta.operatingName} />
          <InfoRow label="Fund Name" value={companyMeta.fundName} />
          <InfoRow label="Headquarters" value={companyMeta.headquarters} />
          <InfoRow label="Co-Manager" value={companyMeta.coManager} />
        </div>
        <div>
          <InfoRow label="Target Fund Size" value={companyMeta.targetFundSize} />
          <InfoRow label="Check Size" value={companyMeta.checkSize} />
          <InfoRow label="Stage" value={companyMeta.stage} />
          <InfoRow label="Exclusions" value={companyMeta.exclusions} />
          <InfoRow label="Portfolio" value={companyMeta.portfolio} />
        </div>
      </div>

      {/* Fix #5: Naming Conventions with pronunciation and verbal rules */}
      <SubTitle icon={<Volume2 size={16} />}>Naming Conventions</SubTitle>

      {/* Pronunciation block */}
      <div
        className="rounded-lg p-4 mb-4 flex items-start gap-3"
        style={{ background: "var(--card)", border: "1px solid var(--border)", borderLeft: `3px solid ${gold}` }}
      >
        <Volume2 size={18} style={{ color: gold, flexShrink: 0, marginTop: 2 }} />
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-medium text-sm" style={{ color: "var(--foreground)" }}>PhyCap</span>
            <span className="text-sm" style={{ color: gold }}>= "{namingPronunciation.phonetic}"</span>
          </div>
          <p className="text-xs mb-1" style={{ color: mutedText }}>{namingPronunciation.origin}</p>
          <p className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{namingPronunciation.verbalRule}</p>
        </div>
      </div>

      {/* When to use which name */}
      <DataTable
        headers={["Context", "Name to Use"]}
        rows={namingRules.map((r) => [r.context, r.name])}
      />

      {/* Never list */}
      <div className="mt-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <XCircle size={14} style={{ color: "oklch(0.55 0.20 25)" }} />
          <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>Never use these</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {namingNeverList.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs"
              style={{ background: "oklch(0.55 0.20 25 / 0.06)", border: "1px solid oklch(0.55 0.20 25 / 0.15)" }}
              title={item.reason}
            >
              <span className="font-medium line-through" style={{ color: "oklch(0.55 0.20 25)" }}>{item.wrong}</span>
              <span style={{ color: mutedText }}>{item.reason}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] mb-4" style={{ color: mutedText }}>
        This also lives in the Brand Guide for external partners.
      </p>

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

      {/* Fix #6: FortySix Capital with forest variant and clearer structure */}
      <SubTitle icon={<Handshake size={16} />}>FortySix Capital Relationship</SubTitle>
      <HighlightBlock variant="forest" label="OPERATIONAL PARTNERSHIP">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-medium text-xs mb-2" style={{ color: gold }}>What FortySix Capital does</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              {fortySixRelationship.whatFortySixDoes.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-xs mb-2" style={{ color: gold }}>What PhyCap does</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              {fortySixRelationship.whatPhyCapDoes.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-medium text-xs mb-2">When to mention FortySix</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              {fortySixRelationship.whenToMention.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-xs mb-2">When NOT to mention FortySix</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              {fortySixRelationship.whenNotToMention.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="rounded-md p-3 text-xs"
          style={{ background: "oklch(0.77 0.07 72 / 0.08)", border: "1px solid oklch(0.77 0.07 72 / 0.18)" }}
        >
          <span className="font-medium" style={{ color: gold }}>Email:</span>{" "}
          {fortySixRelationship.emailIssue}
        </div>
      </HighlightBlock>
    </>
  );
}

/* ---- Team sub-tab (Fix #7: avatars and GP page links) ---- */
function TeamContent() {
  return (
    <>
      <SubTitle icon={<Users size={16} />}>GP Roster</SubTitle>
      <p className="text-xs mb-4" style={{ color: mutedText }}>
        Click any GP to expand their full profile and diligence lens.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {gpRoster.map((gp, i) => {
          const slug = getGPSlug(gp.name);
          return (
            <ExpandableCard
              key={i}
              title={gp.name}
              subtitle={gp.specialty}
              badge={
                <div className="flex items-center gap-2">
                  <GPAvatar name={gp.name} size={28} />
                  <Badge variant={gp.credentials.includes("MHCDS") ? "gold" : "green"}>
                    {gp.role}
                  </Badge>
                </div>
              }
            >
              <div className="space-y-2">
                <p className="text-xs" style={{ color: mutedText }}>
                  {gp.credentials}
                </p>
                <HighlightBlock variant="forest" label="DILIGENCE LENS">
                  <p>{gp.diligenceLens}</p>
                </HighlightBlock>
                {slug && (
                  <Link
                    href={`/gp/${slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium mt-1"
                    style={{ color: gold }}
                  >
                    View Homebase
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </ExpandableCard>
          );
        })}
      </div>

      {/* Lifecycle Coverage */}
      <SubTitle>Clinical Lifecycle Coverage</SubTitle>
      <p className="text-xs mb-3" style={{ color: mutedText }}>
        Together, the GP roster covers the full arc of human medicine. No competing physician-led fund has this breadth.
      </p>
      <DataTable
        headers={["Clinical Domain", "GP", "Specialty"]}
        rows={lifecycleCoverage.map((r) => [r.domain, r.gp, r.specialty])}
      />
    </>
  );
}

/* ---- Founding Story sub-tab ---- */
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
