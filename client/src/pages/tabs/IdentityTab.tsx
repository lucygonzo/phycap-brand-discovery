import {
  archetypeData,
  personalityTraits,
  coreNarrative,
  positioningStatement,
  messagingHierarchy,
  messagingGaps,
  competitiveMessaging,
  languageValidations,
} from "@/lib/identityData";
import {
  SectionHeader,
  KeyTakeaway,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  Badge,
  InfoRow,
} from "@/components/BrandComponents";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import {
  Fingerprint,
  BookOpen,
  Target,
  MessageCircle,
  Compass,
} from "lucide-react";

const forest = "var(--phycap-forest)";
const gold = "var(--phycap-gold)";
const amber = "oklch(0.75 0.15 70)";

const SUB_TABS = [
  { id: "archetype", label: "Archetype" },
  { id: "personality", label: "Personality" },
  { id: "narrative", label: "Narrative" },
  { id: "positioning", label: "Positioning" },
  { id: "messaging", label: "Messaging" },
];

/* ============================================================
   ARCHETYPE SUB-TAB
   ============================================================ */
function ArchetypeSection() {
  return (
    <div>
      <SubTitle icon={<Fingerprint size={16} />}>
        Brand Archetype: Insider Precision
      </SubTitle>
      <KeyTakeaway label="DEFINITION" text={archetypeData.definition} />

      <HighlightBlock variant="forest">
        <p style={{ fontSize: "15px", lineHeight: 1.7 }}>
          {archetypeData.oneLiner}
        </p>
      </HighlightBlock>

      {/* Not-this inline treatment */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-8 px-4 py-3 rounded-lg"
        style={{ background: "var(--muted)" }}
      >
        {archetypeData.notThis.map((item, i) => (
          <div key={i} className="flex-1 flex items-start gap-2">
            <span
              className="text-sm line-through"
              style={{ color: "var(--muted-foreground)" }}
            >
              {item.label}
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--muted-foreground)", lineHeight: 1.5 }}
            >
              ({item.reason})
            </span>
          </div>
        ))}
      </div>

      <SubTitle>How the Archetype Manifests</SubTitle>
      <DataTable
        headers={["Dimension", "Insider Precision Expression"]}
        rows={archetypeData.manifestations.map((m) => [
          m.dimension,
          m.expression,
        ])}
      />

      {/* Archetype Scenario */}
      <div className="mt-8 mb-4">
        <div
          className="eyebrow mb-2"
          style={{ color: forest, fontSize: "9px" }}
        >
          THE INSIDER PRECISION LENS IN PRACTICE
        </div>
        <div
          className="pl-4"
          style={{
            borderLeft: `3px solid ${forest}`,
          }}
        >
          <p
            style={{
              color: "var(--foreground)",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            {archetypeData.archetypeScenario}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PERSONALITY SUB-TAB
   ============================================================ */
function PersonalitySection() {
  return (
    <div>
      <SubTitle icon={<BookOpen size={16} />}>Brand Personality Traits</SubTitle>
      <p
        className="mb-6 text-sm"
        style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}
      >
        Five traits define how PhyCap communicates. Each trait includes a rule
        for practice and a before/after correction drawn from actual PhyCap
        website copy.
      </p>

      <div className="space-y-2 mb-8">
        {personalityTraits.map((t, i) => (
          <ExpandableCard
            key={i}
            title={t.trait}
            subtitle={t.inPractice}
          >
            <div className="space-y-4">
              <div>
                <div
                  className="eyebrow mb-1"
                  style={{ color: "var(--muted-foreground)", fontSize: "9px" }}
                >
                  EVIDENCE
                </div>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>
                  {t.evidence}
                </p>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-lg"
                style={{ background: "var(--muted)" }}
              >
                <div>
                  <div
                    className="eyebrow mb-1"
                    style={{
                      color: "oklch(0.55 0.20 25)",
                      fontSize: "9px",
                    }}
                  >
                    BEFORE
                  </div>
                  <p
                    className="text-sm italic"
                    style={{ color: "var(--foreground)" }}
                  >
                    "{t.before}"
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {t.beforeSource}
                  </p>
                </div>
                <div>
                  <div
                    className="eyebrow mb-1"
                    style={{ color: forest, fontSize: "9px" }}
                  >
                    AFTER
                  </div>
                  <p className="text-sm" style={{ color: "var(--foreground)" }}>
                    {t.after}
                  </p>
                </div>
              </div>
            </div>
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   NARRATIVE SUB-TAB
   ============================================================ */
function NarrativeSection() {
  return (
    <div>
      <SubTitle icon={<Target size={16} />}>Core Narrative</SubTitle>

      {/* Brand Anchor */}
      <KeyTakeaway label="BRAND ANCHOR" text={coreNarrative.brandAnchor} />

      {/* Moment of Truth Story */}
      <SubTitle>The Moment of Truth</SubTitle>
      <div
        className="rounded-lg p-6 mb-8"
        style={{ background: "var(--phycap-cream)" }}
      >
        {coreNarrative.momentOfTruthStory
          .split("\n\n")
          .map((paragraph, i) => {
            // Apply accent bars to the three convergence paragraphs
            const isWorkflow = paragraph.startsWith("The workflow is broken");
            const isDevice = paragraph.startsWith("The device is absent");
            const isPatient = paragraph.startsWith("The patient is underserved");
            const isConvergence = isWorkflow || isDevice || isPatient;
            const accentColor = isWorkflow
              ? forest
              : isDevice
                ? gold
                : isPatient
                  ? amber
                  : undefined;

            if (isConvergence) {
              return (
                <div
                  key={i}
                  className="pl-4 my-4"
                  style={{ borderLeft: `3px solid ${accentColor}` }}
                >
                  <p
                    style={{
                      color: "var(--foreground)",
                      fontSize: "14px",
                      lineHeight: 1.75,
                    }}
                  >
                    {paragraph}
                  </p>
                </div>
              );
            }
            return (
              <p
                key={i}
                className="mb-4"
                style={{
                  color: "var(--foreground)",
                  fontSize: "14px",
                  lineHeight: 1.75,
                }}
              >
                {paragraph}
              </p>
            );
          })}
      </div>

      {/* Narrative Arc as vertical timeline */}
      <SubTitle>Narrative Arc</SubTitle>
      <div className="relative mb-8 ml-4">
        {/* Vertical connecting line */}
        <div
          className="absolute left-3 top-2 bottom-2"
          style={{
            width: "2px",
            background: "var(--border)",
          }}
        />
        {coreNarrative.narrativeArc.map((act, i) => (
          <div key={i} className="relative flex gap-5 pb-6 last:pb-0">
            {/* Step number */}
            <div
              className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: "var(--card)",
                color: gold,
                border: `2px solid ${gold}`,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            {/* Content */}
            <div className="pt-0.5">
              <div
                className="font-medium text-sm mb-1"
                style={{ color: "var(--foreground)" }}
              >
                {act.act}
              </div>
              <p
                className="text-sm"
                style={{
                  color: "var(--foreground)",
                  lineHeight: 1.65,
                  opacity: 0.85,
                }}
              >
                {act.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   POSITIONING SUB-TAB
   ============================================================ */
function PositioningSection() {
  return (
    <div>
      <SubTitle icon={<Compass size={16} />}>Positioning Statement</SubTitle>

      {/* Replacement as hero */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          background: "var(--card)",
          borderLeft: `4px solid ${forest}`,
          boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)",
        }}
      >
        <div className="eyebrow mb-3" style={{ color: forest, fontSize: "9px" }}>
          POSITIONING STATEMENT
        </div>
        <p
          style={{
            color: "var(--foreground)",
            fontSize: "16px",
            lineHeight: 1.75,
          }}
        >
          {positioningStatement.replacement}
        </p>
      </div>

      {/* Variants as compact rows */}
      <SubTitle>Length Variants</SubTitle>
      <div className="mb-8">
        {positioningStatement.variants.map((v, i) => (
          <InfoRow key={i} label={v.label} value={v.text} />
        ))}
      </div>

      {/* Old statement collapsed */}
      <ExpandableCard title="Previous positioning (retired)">
        <div className="space-y-3">
          <p className="italic text-sm" style={{ color: "var(--foreground)" }}>
            "{positioningStatement.current}"
          </p>
          <div className="flex flex-wrap gap-1.5">
            {positioningStatement.currentProblems.map((p, i) => (
              <Badge key={i} variant="red">
                {p}
              </Badge>
            ))}
          </div>
        </div>
      </ExpandableCard>
    </div>
  );
}

/* ============================================================
   MESSAGING SUB-TAB
   ============================================================ */
function MessagingSection() {
  const severityBadge = (severity: string) => {
    const variant =
      severity === "Critical" ? "red" : severity === "Important" ? "amber" : "muted";
    return <Badge variant={variant}>{severity}</Badge>;
  };

  return (
    <div>
      <SubTitle icon={<MessageCircle size={16} />}>
        Messaging Hierarchy
      </SubTitle>
      <KeyTakeaway
        label="PRIMARY MESSAGE (ALL AUDIENCES)"
        text={messagingHierarchy.primary}
      />

      {/* Audience-specific messaging */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {messagingHierarchy.audiences.map((a, i) => (
          <div
            key={i}
            className="rounded-lg p-5"
            style={{
              background: "var(--card)",
              borderTop: `2px solid ${i === 0 ? forest : i === 1 ? gold : "var(--border)"}`,
              boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)",
            }}
          >
            <h3
              className="font-medium text-sm mb-3"
              style={{ color: "var(--foreground)" }}
            >
              {a.audience}
            </h3>
            <div className="space-y-2">
              <InfoRow label="Headline" value={a.headline} />
              <InfoRow label="Emotional Driver" value={a.emotionalDriver} />
              <InfoRow label="CTA" value={a.cta} />
            </div>
          </div>
        ))}
      </div>

      {/* Language Validation */}
      <SubTitle>Language Validation</SubTitle>
      <p
        className="mb-4 text-sm"
        style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}
      >
        Recommended messaging mapped to actual LP language, confirming
        resonance with the target audience.
      </p>
      <div className="overflow-x-auto rounded-lg mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              <th
                className="px-4 py-2.5 text-left font-medium text-xs"
                style={{
                  color: "var(--muted-foreground)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Recommended Message
              </th>
              <th
                className="px-4 py-2.5 text-left font-medium text-xs"
                style={{
                  color: "var(--muted-foreground)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                LP Signal
              </th>
              <th
                className="px-4 py-2.5 text-left font-medium text-xs"
                style={{
                  color: "var(--muted-foreground)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {languageValidations.map((lv, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < languageValidations.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <td
                  className="px-4 py-2.5 text-[13px] font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  "{lv.message}"
                </td>
                <td
                  className="px-4 py-2.5 text-[13px] italic"
                  style={{ color: "var(--foreground)" }}
                >
                  "{lv.lpSignal}"
                </td>
                <td
                  className="px-4 py-2.5 text-[13px]"
                  style={{ color: forest }}
                >
                  {lv.source}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Divider />

      {/* Competitive Messaging Comparison */}
      <SubTitle>How PhyCap's Message Differs</SubTitle>
      <div className="overflow-x-auto rounded-lg mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              {[
                "Fund",
                "Primary Message",
                "Emotional Appeal",
                "Implied Promise",
                "PhyCap's Advantage",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2.5 text-left font-medium text-xs"
                  style={{
                    color: "var(--muted-foreground)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitiveMessaging.map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < competitiveMessaging.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  background:
                    row.fund === "PhyCap"
                      ? "oklch(0.55 0.18 145 / 0.04)"
                      : "transparent",
                }}
              >
                <td
                  className="px-3 py-2.5 text-[13px] font-medium"
                  style={{
                    color:
                      row.fund === "PhyCap" ? forest : "var(--foreground)",
                  }}
                >
                  {row.fund}
                </td>
                <td
                  className="px-3 py-2.5 text-[13px]"
                  style={{ color: "var(--foreground)" }}
                >
                  {row.primaryMessage}
                </td>
                <td
                  className="px-3 py-2.5 text-[13px]"
                  style={{ color: "var(--foreground)" }}
                >
                  {row.emotionalAppeal}
                </td>
                <td
                  className="px-3 py-2.5 text-[13px]"
                  style={{ color: "var(--foreground)" }}
                >
                  {row.impliedPromise}
                </td>
                <td
                  className="px-3 py-2.5 text-[13px]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {row.phycapAdvantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Divider />

      {/* Messaging Gaps */}
      <SubTitle>Messaging Gaps</SubTitle>
      <div className="space-y-2 mb-8">
        {messagingGaps.map((g, i) => (
          <ExpandableCard
            key={i}
            title={g.name}
            badge={severityBadge(g.severity)}
          >
            <div className="space-y-3">
              <p className="text-sm" style={{ color: "var(--foreground)" }}>
                {g.description}
              </p>
              <HighlightBlock variant="gold" label="ACTION">
                <p>{g.action}</p>
              </HighlightBlock>
            </div>
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   MAIN TAB
   ============================================================ */
export default function IdentityTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="02"
        title="Brand Identity"
        subtitle="Archetype, personality, core narrative, positioning statement, and messaging hierarchy."
      />

      <SubTabNav tabs={SUB_TABS} defaultTab="archetype">
        {(activeSubTab) => {
          switch (activeSubTab) {
            case "archetype":
              return <ArchetypeSection />;
            case "personality":
              return <PersonalitySection />;
            case "narrative":
              return <NarrativeSection />;
            case "positioning":
              return <PositioningSection />;
            case "messaging":
              return <MessagingSection />;
            default:
              return null;
          }
        }}
      </SubTabNav>
    </div>
  );
}
