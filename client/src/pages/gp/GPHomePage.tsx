import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import type { GPProfile } from "@/lib/gpContentData";
import { gpProfiles, linkedInBannerSpecs, photoTreatment } from "@/lib/gpContentData";
import {
  Badge,
  Card,
  HighlightBlock,
  InfoRow,
  Divider,
} from "@/components/BrandComponents";

/* ============================================================
   CONSTANTS
   ============================================================ */
const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";
const border = "var(--border)";

const GP_SECTIONS = [
  { id: "voice", label: "Voice" },
  { id: "territories", label: "Territories" },
  { id: "topics", label: "Topics" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "workspace", label: "Workspace" },
] as const;

/* ============================================================
   HELPERS
   ============================================================ */
function gpTextColor(gpColor: string): string {
  return gpColor === "#F5F2F0" ? "#122620" : "#F5F2F0";
}

function gpMutedTextColor(gpColor: string): string {
  return gpColor === "#F5F2F0" ? "oklch(0.45 0.02 60)" : "oklch(0.70 0.01 60)";
}

function gpSubtleTextColor(gpColor: string): string {
  return gpColor === "#F5F2F0" ? "oklch(0.55 0.02 60)" : "oklch(0.60 0.01 60)";
}

const statusConfig: Record<string, { label: string; variant: "green" | "amber" | "blue" | "muted" | "gold" }> = {
  idea: { label: "Idea", variant: "muted" },
  drafted: { label: "Drafted", variant: "amber" },
  scheduled: { label: "Scheduled", variant: "blue" },
  published: { label: "Published", variant: "green" },
  pipeline: { label: "Pipeline", variant: "muted" },
  draft: { label: "Draft", variant: "amber" },
  review: { label: "In Review", variant: "gold" },
};

/* ============================================================
   MAIN GP HOME PAGE COMPONENT
   ============================================================ */
export default function GPHomePage({ slug }: { slug: string }) {
  const gp = gpProfiles.find((p) => p.slug === slug);
  if (!gp) return <div className="p-8">GP not found.</div>;

  return <GPPageLayout gp={gp} />;
}

function GPPageLayout({ gp }: { gp: GPProfile }) {
  const [activeSection, setActiveSection] = useState("voice");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const textColor = gpTextColor(gp.gpColor);
  const mutedColor = gpMutedTextColor(gp.gpColor);
  const subtleColor = gpSubtleTextColor(gp.gpColor);

  /* IntersectionObserver for active sidebar state */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    GP_SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileNavOpen(false);
    }
  }, []);

  const setSectionRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      sectionRefs.current[id] = el;
    },
    []
  );

  // Find overlapping territories with other GPs
  const otherGPs = gpProfiles.filter((p) => p.slug !== gp.slug);

  return (
    <div className="flex min-h-screen" style={{ background: "var(--background)" }}>
      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* ============================================================
         SIDEBAR
         ============================================================ */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 flex flex-col
          transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0
          ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          background: gp.gpColor,
          borderRight: `1px solid ${gp.gpColor === "#F5F2F0" ? "var(--border)" : "oklch(1 0 0 / 0.08)"}`,
        }}
      >
        {/* Back link */}
        <div className="p-6 pb-4">
          <Link
            href={`${base}/`}
            className="inline-flex items-center gap-2 text-xs font-medium transition-colors"
            style={{ color: subtleColor }}
            onClick={() => {
              // Navigate back and set the gpcontent tab active
              // This is handled by the router
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Content Network
          </Link>

          <div className="mt-5">
            <div className="display-font text-lg" style={{ color: textColor, lineHeight: 1.2 }}>
              {gp.name.split(",")[0]}
            </div>
            <div
              className="text-xs mt-1"
              style={{ color: mutedColor }}
            >
              {gp.specialty}
            </div>
          </div>

          <div className="mt-3">
            <Badge variant="gold">{gp.cadence}</Badge>
          </div>
        </div>

        {/* Section navigation */}
        <nav className="flex-1 px-4 pb-4">
          <div
            className="eyebrow px-2 py-1.5 mb-2"
            style={{
              color: gp.gpColor === "#F5F2F0" ? gold : "oklch(0.77 0.07 72)",
              fontSize: "9px",
            }}
          >
            SECTIONS
          </div>
          {GP_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-left text-[13px] transition-colors mb-0.5"
                style={{
                  color: isActive
                    ? (gp.gpColor === "#F5F2F0" ? "#122620" : "oklch(0.77 0.07 72)")
                    : subtleColor,
                  background: isActive
                    ? (gp.gpColor === "#F5F2F0" ? "oklch(0 0 0 / 0.04)" : "oklch(1 0 0 / 0.06)")
                    : "transparent",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ============================================================
         MAIN CONTENT
         ============================================================ */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Mobile header */}
        <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3" style={{ background: gp.gpColor, borderBottom: `1px solid ${border}` }}>
          <button
            onClick={() => setMobileNavOpen(true)}
            className="p-1"
            style={{ color: textColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-sm font-medium" style={{ color: textColor }}>{gp.name.split(",")[0]}</span>
          <div style={{ width: 20 }} />
        </div>

        {/* ============================================================
           HERO HEADER
           ============================================================ */}
        <div
          className="px-8 py-12 md:px-16 md:py-16"
          style={{
            background: gp.gpColor,
            borderBottom: `2px solid ${gp.gpColor === "#F5F2F0" ? border : "oklch(1 0 0 / 0.08)"}`,
          }}
        >
          <div className="max-w-3xl">
            {/* Back link (desktop, visible in content area too) */}
            <Link
              href={`${base}/`}
              className="hidden lg:inline-flex items-center gap-2 text-xs font-medium mb-8 transition-colors"
              style={{ color: subtleColor }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Content Network
            </Link>

            <h1
              className="display-font"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                color: textColor,
                lineHeight: 1.05,
              }}
            >
              {gp.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium" style={{ color: mutedColor }}>
                {gp.specialty}
              </span>
              <span style={{ color: subtleColor }}>|</span>
              <span className="text-sm" style={{ color: mutedColor }}>
                {gp.credentials}
              </span>
              <span style={{ color: subtleColor }}>|</span>
              <span className="text-sm" style={{ color: mutedColor }}>
                {gp.base}
              </span>
            </div>

            {/* One Thing Only - Pull Quote */}
            <div
              className="mt-8 pl-5"
              style={{
                borderLeft: `3px solid ${gp.gpColor === "#F5F2F0" ? gold : "oklch(0.77 0.07 72 / 0.6)"}`,
              }}
            >
              <p
                className="display-font italic"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: textColor,
                  lineHeight: 1.4,
                  opacity: 0.9,
                }}
              >
                "{gp.oneThingOnly}"
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Badge variant="gold">{gp.cadence}</Badge>
              <Badge variant="muted">{gp.bannerConcept}</Badge>
              <Badge variant="muted">{gp.supportModel}</Badge>
            </div>

            {/* Editorial bio */}
            <p
              className="mt-6 text-sm leading-relaxed max-w-2xl"
              style={{ color: mutedColor }}
            >
              {gp.editorialBio}
            </p>
          </div>
        </div>

        {/* ============================================================
           CONTENT SECTIONS
           ============================================================ */}
        <div className="px-8 md:px-16 max-w-4xl">

          {/* ---------- VOICE & PERSONALITY ---------- */}
          <section
            id="voice"
            ref={setSectionRef("voice")}
            className="scroll-mt-6 pt-12 pb-16"
          >
            <SectionHeading number="01" title="Voice & Personality" />

            <p className="text-xs font-medium uppercase mb-3 mt-8" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              VOICE TRAITS
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {gp.voiceTraits.map((trait, i) => (
                <Badge key={i} variant="green">{trait}</Badge>
              ))}
            </div>

            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              WRITING EXAMPLES
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <DoDontColumn type="do" items={gp.voiceDo} />
              <DoDontColumn type="dont" items={gp.voiceDont} />
            </div>

            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              GUARDRAILS
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {gp.voiceGuardrails.map((g, i) => (
                <Badge key={i} variant="red">{g}</Badge>
              ))}
            </div>

            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              WRITING STYLE NOTES
            </p>
            <Card variant="default">
              <ul className="space-y-2">
                {gp.writingStyleNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: gold, marginTop: "2px" }}>&#8226;</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <Divider />

          {/* ---------- CONTENT TERRITORIES ---------- */}
          <section
            id="territories"
            ref={setSectionRef("territories")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="02" title="Content Territories" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-6">
              <Card title="Owned Territories" variant="forest">
                <ul className="space-y-2">
                  {gp.ownedTerritories.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span style={{ color: gold, marginTop: "2px" }}>&#8226;</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card title="Shared Territories" variant="gold">
                <ul className="space-y-2">
                  {gp.sharedTerritories.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span style={{ color: gold, marginTop: "2px" }}>&#8226;</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Territory Overlap Visual */}
            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              TERRITORY OVERLAP WITH OTHER GPS
            </p>
            <div className="space-y-3">
              {otherGPs.map((other) => {
                const overlap = gp.sharedTerritories.filter((t) =>
                  t.toLowerCase().includes(other.name.split(",")[0].split(" ")[0].toLowerCase())
                );
                if (overlap.length === 0) return null;
                return (
                  <div
                    key={other.slug}
                    className="rounded-lg p-4"
                    style={{ background: "var(--card)", border: `1px solid ${border}` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: other.gpColor, border: other.gpColor === "#F5F2F0" ? `1px solid ${border}` : "none" }}
                      />
                      <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        {other.name.split(",")[0]}
                      </span>
                      <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                        {other.specialty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 ml-6">
                      {overlap.map((t, i) => (
                        <Badge key={i} variant="muted">{t}</Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <Divider />

          {/* ---------- 30-DAY TOPIC QUEUE ---------- */}
          <section
            id="topics"
            ref={setSectionRef("topics")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="03" title="30-Day Topic Queue" />

            <div className="flex flex-wrap gap-2 mb-6 mt-8">
              {["All", "idea", "drafted", "scheduled", "published"].map((filter) => (
                <span
                  key={filter}
                  className="text-[10px] uppercase font-medium px-2 py-1 rounded"
                  style={{
                    background: "var(--muted)",
                    color: "var(--muted-foreground)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {filter === "All" ? `All (${gp.topicIdeas.length})` : `${statusConfig[filter]?.label} (${gp.topicIdeas.filter((t) => t.status === filter).length})`}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {gp.topicIdeas.map((item, i) => {
                const cfg = statusConfig[item.status] || statusConfig.idea;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg"
                    style={{ background: "var(--card)", border: `1px solid ${border}` }}
                  >
                    <span className="text-xs font-medium w-5 flex-shrink-0" style={{ color: "var(--muted-foreground)" }}>
                      {i + 1}
                    </span>
                    <span className="text-sm flex-1" style={{ color: "var(--foreground)" }}>
                      {item.topic}
                    </span>
                    <Badge variant={cfg.variant}>{cfg.label}</Badge>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <HighlightBlock variant="amber" label="NEVER POST">
                <p>{gp.neverPost}</p>
              </HighlightBlock>
            </div>
          </section>

          <Divider />

          {/* ---------- LINKEDIN SPECS ---------- */}
          <section
            id="linkedin"
            ref={setSectionRef("linkedin")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="04" title="LinkedIn Specs" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card title="Banner Design Direction" variant="default">
                <InfoRow label="Concept" value={gp.bannerConcept} />
                <InfoRow label="Tagline" value={gp.bannerTagline} />
                <InfoRow label="Dimensions" value={linkedInBannerSpecs.dimensions} />
                <InfoRow label="Safe Zone" value={linkedInBannerSpecs.safeZone} />
              </Card>
              <Card title="Photo Treatment" variant="default">
                <InfoRow label="Direction" value={gp.photoNotes} />
                {photoTreatment.map((p, i) => (
                  <InfoRow key={i} label={p.parameter} value={p.setting} />
                ))}
              </Card>
            </div>

            <div className="mt-6">
              <Card title="Bio Template" variant="forest">
                <div className="space-y-1 mb-4">
                  {gp.bioTemplate.map((line, i) => (
                    <p key={i} className="text-sm" style={{ color: "var(--foreground)" }}>
                      {i === gp.bioTemplate.length - 1 ? <em>{line}</em> : line}
                    </p>
                  ))}
                </div>
                <div className="pt-3" style={{ borderTop: `1px solid oklch(0.50 0.01 200 / 0.1)` }}>
                  <p className="text-[10px] font-medium uppercase mb-1" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                    CTA LANGUAGE
                  </p>
                  <p className="text-sm italic" style={{ color: "var(--foreground)" }}>
                    "{gp.ctaLanguage}"
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-6">
              <Card title="Best Content Format" variant="gold">
                <p className="text-sm">{gp.bestFormat}</p>
              </Card>
            </div>
          </section>

          <Divider />

          {/* ---------- WORKSPACE ---------- */}
          <section
            id="workspace"
            ref={setSectionRef("workspace")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="05" title="Workspace" />

            <p className="text-xs font-medium uppercase mb-3 mt-8" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              CONTENT PIPELINE
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {gp.workspaceItems.map((item, i) => {
                const cfg = statusConfig[item.status] || statusConfig.pipeline;
                return (
                  <div
                    key={i}
                    className="rounded-lg p-4"
                    style={{ background: "var(--card)", border: `1px solid ${border}` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        {item.title}
                      </h4>
                      <Badge variant={cfg.variant}>{cfg.label}</Badge>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              QUICK REFERENCE
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card title="Posting Schedule" variant="default">
                <InfoRow label="Cadence" value={gp.cadence} />
                <InfoRow label="Support Model" value={gp.supportModel} />
                <InfoRow label="Best Format" value={gp.bestFormat} />
              </Card>
              <Card title="Voice Cheat Sheet" variant="default">
                <div className="space-y-1.5">
                  {gp.voiceTraits.slice(0, 3).map((trait, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span style={{ color: "oklch(0.55 0.18 145)", marginTop: "1px" }}>&#10003;</span>
                      <span style={{ color: "var(--foreground)" }}>{trait}</span>
                    </div>
                  ))}
                  <div className="pt-1.5 mt-1.5" style={{ borderTop: `1px solid oklch(0.50 0.01 200 / 0.1)` }}>
                    {gp.voiceGuardrails.slice(0, 2).map((g, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs mb-1.5">
                        <span style={{ color: "oklch(0.55 0.20 25)", marginTop: "1px" }}>&#10007;</span>
                        <span style={{ color: "var(--foreground)" }}>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              COMPANY PAGE COORDINATION
            </p>
            <Card title="Amplification Strategy" variant="forest">
              <p className="text-sm mb-3">{gp.companyPageStrategy.postingCadence}</p>
              <p className="text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                Amplification Rule
              </p>
              <p className="text-sm mb-3">{gp.companyPageStrategy.amplificationRule}</p>
              <p className="text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                Announcement Sequence
              </p>
              <ol className="space-y-1">
                {gp.companyPageStrategy.announcementSequence.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-xs font-medium flex-shrink-0 w-5" style={{ color: gold }}>
                      {i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ============================================================
   REUSABLE SUB-COMPONENTS
   ============================================================ */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <div className="eyebrow mb-2" style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em" }}>
        {number}
      </div>
      <h2
        className="display-font"
        style={{
          fontSize: "clamp(24px, 3vw, 36px)",
          color: "var(--foreground)",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <div className="mt-3 h-px w-12" style={{ background: gold }} />
    </div>
  );
}

function DoDontColumn({ type, items }: { type: "do" | "dont"; items: string[] }) {
  const isDo = type === "do";
  return (
    <div
      className="rounded-lg p-5"
      style={{
        background: isDo ? "oklch(0.55 0.18 145 / 0.06)" : "oklch(0.55 0.20 25 / 0.06)",
        border: `1px solid ${isDo ? "oklch(0.55 0.18 145 / 0.15)" : "oklch(0.55 0.20 25 / 0.15)"}`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: isDo ? "oklch(0.55 0.18 145)" : "oklch(0.55 0.20 25)" }}
        >
          {isDo ? "\u2713" : "\u2715"}
        </div>
        <span
          className="text-xs font-semibold uppercase"
          style={{
            letterSpacing: "0.1em",
            color: isDo ? "oklch(0.45 0.15 145)" : "oklch(0.45 0.18 25)",
          }}
        >
          {isDo ? "Write This" : "Not This"}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed italic"
            style={{
              color: "var(--foreground)",
              paddingLeft: "12px",
              borderLeft: `2px solid ${isDo ? "oklch(0.55 0.18 145 / 0.3)" : "oklch(0.55 0.20 25 / 0.3)"}`,
            }}
          >
            "{item}"
          </li>
        ))}
      </ul>
    </div>
  );
}

// Re-export for use in individual GP pages
const otherGPs = gpProfiles;
