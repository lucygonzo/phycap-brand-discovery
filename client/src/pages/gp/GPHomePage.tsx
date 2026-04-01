import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import type { GPProfile } from "@/lib/gpContentData";
import { gpProfiles, linkedInBannerSpecs, photoTreatment } from "@/lib/gpContentData";
import { gpSubBrands, fundDisclaimer, voiceSignals } from "@/lib/gpSubBrandData";
import type { GPSubBrand, SamplePost, ColorSpec } from "@/lib/gpSubBrandData";
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
  { id: "subbrand", label: "Sub-Brand" },
  { id: "territories", label: "Territories" },
  { id: "topics", label: "Topics" },
  { id: "sampleposts", label: "Sample Posts" },
  { id: "visualdirection", label: "Visual" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "compliance", label: "Compliance" },
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

const statusConfig: Record<string, { label: string; variant: "green" | "amber" | "blue" | "muted" | "gold" | "red" }> = {
  idea: { label: "Idea", variant: "muted" },
  drafted: { label: "Drafted", variant: "amber" },
  scheduled: { label: "Scheduled", variant: "blue" },
  published: { label: "Published", variant: "green" },
  pipeline: { label: "Pipeline", variant: "muted" },
  draft: { label: "Draft", variant: "amber" },
  review: { label: "In Review", variant: "gold" },
  approved: { label: "Approved", variant: "green" },
  "needs-review": { label: "Needs Review", variant: "amber" },
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

  // Sub-brand data for this GP
  const subBrand = gpSubBrands[gp.slug];

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
        <nav className="flex-1 px-4 pb-4 overflow-y-auto">
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

            {/* One Thing Only - Pull Quote (uses GP's secondary typeface) */}
            <div
              className="mt-8 pl-5"
              style={{
                borderLeft: `3px solid ${gp.gpColor === "#F5F2F0" ? gold : "oklch(0.77 0.07 72 / 0.6)"}`,
              }}
            >
              <p
                className="italic"
                style={{
                  fontFamily: subBrand?.secondaryTypeface.family || "'Marcellus', serif",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: textColor,
                  lineHeight: 1.4,
                  opacity: 0.9,
                }}
              >
                &ldquo;{gp.oneThingOnly}&rdquo;
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

          {/* ---------- SUB-BRAND IDENTITY ---------- */}
          {subBrand && (
            <>
              <section
                id="subbrand"
                ref={setSectionRef("subbrand")}
                className="scroll-mt-6 pt-4 pb-16"
              >
                <SectionHeading number="02" title="Sub-Brand Identity" />

                {/* Color System */}
                <p className="text-xs font-medium uppercase mb-3 mt-8" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  COLOR SYSTEM
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  <ColorSwatch
                    spec={subBrand.colorSystem.primary}
                    label="Primary"
                  />
                  <ColorSwatch
                    spec={subBrand.colorSystem.secondaryAccent}
                    label="Secondary Accent"
                  />
                  {subBrand.colorSystem.largeTextAccent && (
                    <ColorSwatch
                      spec={subBrand.colorSystem.largeTextAccent}
                      label="Large-Text Accent"
                    />
                  )}
                </div>

                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  HERO TEXT OPTIONS
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {subBrand.colorSystem.heroTextOptions.map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                      style={{ background: "var(--card)", border: `1px solid ${border}` }}
                    >
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{
                          background: opt.hex,
                          border: opt.hex === "#FFFFFF" || opt.hex === "#F5F2F0" ? `1px solid ${border}` : "none",
                        }}
                      />
                      <span style={{ color: "var(--foreground)" }}>{opt.name}</span>
                      <span className="font-mono text-[10px]" style={{ color: "var(--muted-foreground)" }}>{opt.hex}</span>
                      {opt.wcagLevel && (
                        <Badge variant={opt.wcagLevel === "AAA" ? "green" : "amber"}>{opt.wcagLevel}</Badge>
                      )}
                    </div>
                  ))}
                </div>

                {subBrand.colorSystem.neverUse.length > 0 && (
                  <div className="mb-8">
                    <HighlightBlock variant="red" label="NEVER USE">
                      {subBrand.colorSystem.neverUse.map((item, i) => (
                        <p key={i} className="text-sm">
                          <strong>{item.description}.</strong> {item.reason}.
                        </p>
                      ))}
                    </HighlightBlock>
                  </div>
                )}

                {/* Secondary Typeface Specimen */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  SECONDARY TYPEFACE
                </p>
                <div
                  className="rounded-lg p-6 mb-6"
                  style={{ background: "var(--card)", border: `1px solid ${border}` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {subBrand.secondaryTypeface.googleFontsName}
                    </span>
                    <Badge variant="muted">{subBrand.secondaryTypeface.description}</Badge>
                  </div>
                  <p className="text-xs mb-4" style={{ color: "var(--muted-foreground)" }}>
                    {subBrand.secondaryTypeface.usage}
                  </p>
                  <div className="space-y-3">
                    <p
                      style={{
                        fontFamily: subBrand.secondaryTypeface.family,
                        fontSize: "32px",
                        lineHeight: 1.2,
                        color: "var(--foreground)",
                      }}
                    >
                      Headline Specimen
                    </p>
                    <p
                      style={{
                        fontFamily: subBrand.secondaryTypeface.family,
                        fontSize: "20px",
                        lineHeight: 1.3,
                        color: "var(--foreground)",
                      }}
                    >
                      Subhead specimen for section headers and callouts
                    </p>
                    <p
                      style={{
                        fontFamily: subBrand.secondaryTypeface.family,
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Body specimen at reading size. This typeface supports pull quotes, data callouts, and accent text within {gp.name.split(",")[0]}&rsquo;s content.
                    </p>
                  </div>
                </div>

                {/* Tone Spectrum */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  TONE SPECTRUM
                </p>
                <div
                  className="rounded-lg p-5 mb-6"
                  style={{ background: "var(--card)", border: `1px solid ${border}` }}
                >
                  <div className="space-y-4">
                    {subBrand.toneSpectrum.map((dim, i) => (
                      <ToneBar key={i} dimension={dim} gpColor={gp.gpColor} />
                    ))}
                  </div>
                </div>

                {/* Content Format Rankings */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  CONTENT FORMAT RANKINGS
                </p>
                <div className="space-y-2 mb-6">
                  {subBrand.contentFormatRankings.map((item) => (
                    <div
                      key={item.rank}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg"
                      style={{ background: "var(--card)", border: `1px solid ${border}` }}
                    >
                      <span
                        className="text-lg font-bold flex-shrink-0 w-8 text-center"
                        style={{ color: gold }}
                      >
                        {item.rank}
                      </span>
                      <span className="text-sm" style={{ color: "var(--foreground)" }}>
                        {item.format}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Opening & Closing Patterns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card title="Opening Pattern" variant="forest">
                    <p className="text-xs mb-2" style={{ color: "var(--muted-foreground)" }}>
                      {subBrand.openingPattern.description}
                    </p>
                    <p
                      className="text-sm italic"
                      style={{
                        fontFamily: subBrand.secondaryTypeface.family,
                        color: "var(--foreground)",
                        paddingLeft: "12px",
                        borderLeft: `2px solid ${gold}`,
                      }}
                    >
                      &ldquo;{subBrand.openingPattern.example}&rdquo;
                    </p>
                  </Card>
                  <Card title="Closing Pattern" variant="gold">
                    <p className="text-xs mb-2" style={{ color: "var(--muted-foreground)" }}>
                      {subBrand.closingPattern.description}
                    </p>
                    <p
                      className="text-sm italic"
                      style={{
                        fontFamily: subBrand.secondaryTypeface.family,
                        color: "var(--foreground)",
                        paddingLeft: "12px",
                        borderLeft: `2px solid ${gold}`,
                      }}
                    >
                      &ldquo;{subBrand.closingPattern.example}&rdquo;
                    </p>
                  </Card>
                </div>

                {/* Signature Phrases */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  SIGNATURE PHRASES
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {subBrand.signaturePhrases.map((phrase, i) => (
                    <Badge key={i} variant="gold">&ldquo;{phrase}&rdquo;</Badge>
                  ))}
                </div>

                {/* Hashtag Strategy */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  HASHTAG STRATEGY
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card title="Shared PhyCap Tags" variant="default">
                    <div className="flex flex-wrap gap-1.5">
                      {subBrand.hashtags.shared.map((tag, i) => (
                        <Badge key={i} variant="muted">{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                  <Card title="Personal Tags" variant="default">
                    <div className="flex flex-wrap gap-1.5">
                      {subBrand.hashtags.personal.map((tag, i) => (
                        <Badge key={i} variant="gold">{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Engagement Rules */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  ENGAGEMENT RULES
                </p>
                <Card variant="default">
                  <ul className="space-y-2">
                    {subBrand.engagementRules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span style={{ color: gold, marginTop: "2px" }}>&#8226;</span>
                        <span>{rule.rule}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              <Divider />
            </>
          )}

          {/* ---------- CONTENT TERRITORIES ---------- */}
          <section
            id="territories"
            ref={setSectionRef("territories")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="03" title="Content Territories" />

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
            <SectionHeading number="04" title="30-Day Topic Queue" />

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

          {/* ---------- SAMPLE POSTS ---------- */}
          {subBrand && (
            <>
              <section
                id="sampleposts"
                ref={setSectionRef("sampleposts")}
                className="scroll-mt-6 pt-4 pb-16"
              >
                <SectionHeading number="05" title="Sample Posts" />

                <div className="space-y-6 mt-8">
                  {subBrand.samplePosts.map((post) => (
                    <SamplePostCard
                      key={post.id}
                      post={post}
                      gpName={gp.name}
                      gpTitle={gp.title}
                      gpColor={gp.gpColor}
                      typeface={subBrand.secondaryTypeface.family}
                    />
                  ))}
                </div>
              </section>

              <Divider />
            </>
          )}

          {/* ---------- VISUAL DIRECTION ---------- */}
          {subBrand && (
            <>
              <section
                id="visualdirection"
                ref={setSectionRef("visualdirection")}
                className="scroll-mt-6 pt-4 pb-16"
              >
                <SectionHeading number="06" title="Visual Direction" />

                {/* Image Style Description */}
                <p className="text-xs font-medium uppercase mb-3 mt-8" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  IMAGE STYLE
                </p>
                <Card variant="default">
                  <p className="text-sm leading-relaxed">{subBrand.visualDirection.description}</p>
                </Card>

                {/* Color Palette Strip */}
                <p className="text-xs font-medium uppercase mb-3 mt-6" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  GP COLOR PALETTE
                </p>
                <div className="flex rounded-lg overflow-hidden mb-6" style={{ height: "48px", border: `1px solid ${border}` }}>
                  <div className="flex-1 relative" style={{ background: subBrand.colorSystem.primary.hex }}>
                    <span
                      className="absolute bottom-1 left-2 text-[9px] font-mono"
                      style={{
                        color: subBrand.colorSystem.primary.hex === "#F5F2F0" || subBrand.colorSystem.primary.hex === "#D3B184"
                          ? "#122620"
                          : "#F5F2F0",
                      }}
                    >
                      {subBrand.colorSystem.primary.hex}
                    </span>
                  </div>
                  <div className="flex-1 relative" style={{ background: subBrand.colorSystem.secondaryAccent.hex }}>
                    <span
                      className="absolute bottom-1 left-2 text-[9px] font-mono"
                      style={{
                        color: subBrand.colorSystem.secondaryAccent.hex === "#D3B184" ? "#122620" : "#F5F2F0",
                      }}
                    >
                      {subBrand.colorSystem.secondaryAccent.hex}
                    </span>
                  </div>
                  {subBrand.colorSystem.largeTextAccent && (
                    <div className="flex-1 relative" style={{ background: subBrand.colorSystem.largeTextAccent.hex }}>
                      <span className="absolute bottom-1 left-2 text-[9px] font-mono" style={{ color: "#122620" }}>
                        {subBrand.colorSystem.largeTextAccent.hex}
                      </span>
                    </div>
                  )}
                  {subBrand.colorSystem.heroTextOptions.map((opt, i) => (
                    <div
                      key={i}
                      className="flex-1 relative"
                      style={{
                        background: opt.hex,
                        borderLeft: opt.hex === "#FFFFFF" || opt.hex === "#F5F2F0" ? `1px solid ${border}` : "none",
                      }}
                    >
                      <span
                        className="absolute bottom-1 left-2 text-[9px] font-mono"
                        style={{ color: opt.hex === "#FFFFFF" || opt.hex === "#F5F2F0" || opt.hex === "#D3B184" ? "#122620" : "#F5F2F0" }}
                      >
                        {opt.hex}
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI Prompt Modifier */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  AI GRAPHICS PROMPT MODIFIER
                </p>
                <div
                  className="rounded-lg p-5 mb-6"
                  style={{
                    background: "oklch(0.15 0.01 200)",
                    border: `1px solid oklch(0.30 0.01 200)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase" style={{ color: "oklch(0.55 0.01 200)", letterSpacing: "0.08em" }}>
                      Copy-paste ready
                    </span>
                    <CopyButton text={subBrand.visualDirection.aiPromptModifier} />
                  </div>
                  <p
                    className="text-sm font-mono leading-relaxed"
                    style={{ color: "oklch(0.80 0.01 200)" }}
                  >
                    {subBrand.visualDirection.aiPromptModifier}
                  </p>
                </div>

                {/* Do / Don't Visual Examples */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  VISUAL DO / DON&rsquo;T
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="rounded-lg p-5"
                    style={{
                      background: "oklch(0.55 0.18 145 / 0.06)",
                      border: "1px solid oklch(0.55 0.18 145 / 0.15)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "oklch(0.55 0.18 145)" }}>
                        &#10003;
                      </div>
                      <span className="text-xs font-semibold uppercase" style={{ letterSpacing: "0.1em", color: "oklch(0.45 0.15 145)" }}>
                        Visual Do
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
                      <li className="flex items-start gap-2">
                        <span style={{ color: "oklch(0.55 0.18 145)", marginTop: "2px" }}>&#8226;</span>
                        Use {subBrand.colorSystem.primary.name} ({subBrand.colorSystem.primary.hex}) as the dominant tone
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: "oklch(0.55 0.18 145)", marginTop: "2px" }}>&#8226;</span>
                        Render pull quotes in {subBrand.secondaryTypeface.googleFontsName}
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: "oklch(0.55 0.18 145)", marginTop: "2px" }}>&#8226;</span>
                        Maintain high contrast with {subBrand.colorSystem.secondaryAccent.name} accents
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-lg p-5"
                    style={{
                      background: "oklch(0.55 0.20 25 / 0.06)",
                      border: "1px solid oklch(0.55 0.20 25 / 0.15)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "oklch(0.55 0.20 25)" }}>
                        &#10007;
                      </div>
                      <span className="text-xs font-semibold uppercase" style={{ letterSpacing: "0.1em", color: "oklch(0.45 0.18 25)" }}>
                        Visual Don&rsquo;t
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
                      {subBrand.colorSystem.neverUse.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ color: "oklch(0.55 0.20 25)", marginTop: "2px" }}>&#8226;</span>
                          {item.description} ({item.reason})
                        </li>
                      ))}
                      <li className="flex items-start gap-2">
                        <span style={{ color: "oklch(0.55 0.20 25)", marginTop: "2px" }}>&#8226;</span>
                        Mix typefaces from other GP sub-brands
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: "oklch(0.55 0.20 25)", marginTop: "2px" }}>&#8226;</span>
                        Use stock photography that contradicts the visual direction
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <Divider />
            </>
          )}

          {/* ---------- LINKEDIN SPECS ---------- */}
          <section
            id="linkedin"
            ref={setSectionRef("linkedin")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="07" title="LinkedIn Specs" />

            {/* LinkedIn Headline */}
            {subBrand && (
              <div className="mt-8 mb-6">
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  LINKEDIN HEADLINE
                </p>
                <div
                  className="rounded-lg p-4"
                  style={{ background: "var(--card)", border: `1px solid ${border}`, borderLeft: `3px solid ${gold}` }}
                >
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {subBrand.linkedInHeadline}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    &ldquo;{gp.ctaLanguage}&rdquo;
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

          {/* ---------- COMPLIANCE ---------- */}
          {subBrand && (
            <>
              <section
                id="compliance"
                ref={setSectionRef("compliance")}
                className="scroll-mt-6 pt-4 pb-16"
              >
                <SectionHeading number="08" title="Compliance & Approval" />

                {/* Fund Disclaimer */}
                <p className="text-xs font-medium uppercase mb-3 mt-8" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  FUND DISCLAIMER
                </p>
                <div
                  className="rounded-lg p-4 mb-6"
                  style={{
                    background: "var(--card)",
                    border: `1px solid ${border}`,
                    borderLeft: "3px solid oklch(0.55 0.20 25)",
                  }}
                >
                  <p className="text-sm italic leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {fundDisclaimer}
                  </p>
                  <p className="text-[10px] mt-2" style={{ color: "var(--muted-foreground)" }}>
                    Required on all investment-related posts, shared across all GPs.
                  </p>
                </div>

                {/* Approval Workflow */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  APPROVAL WORKFLOW
                </p>
                <div className="space-y-2 mb-6">
                  {subBrand.complianceApprovals.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg"
                      style={{ background: "var(--card)", border: `1px solid ${border}` }}
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          background: item.color === "green"
                            ? "oklch(0.55 0.18 145)"
                            : item.color === "amber"
                            ? "oklch(0.75 0.15 70)"
                            : "oklch(0.55 0.20 25)",
                        }}
                      />
                      <span className="text-sm flex-1" style={{ color: "var(--foreground)" }}>
                        {item.contentType}
                      </span>
                      <Badge
                        variant={item.color === "green" ? "green" : item.color === "amber" ? "amber" : "red"}
                      >
                        {item.approvalLevel === "none"
                          ? "No review required"
                          : item.approvalLevel === "kate-review"
                          ? "Kate review"
                          : item.approvalLevel === "kate-plus-legal"
                          ? "Kate + Legal"
                          : "Kate + Paul final"}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Personal vs. Fund Voice */}
                <p className="text-xs font-medium uppercase mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
                  PERSONAL VS. FUND VOICE
                </p>
                <Card variant="default">
                  <div className="space-y-3">
                    {voiceSignals.map((signal, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="text-sm font-mono px-2 py-0.5 rounded flex-shrink-0"
                          style={{
                            background: "oklch(0.15 0.01 200)",
                            color: "oklch(0.80 0.01 200)",
                            fontSize: "12px",
                          }}
                        >
                          {signal.phrase}
                        </span>
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                          {signal.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              <Divider />
            </>
          )}

          {/* ---------- WORKSPACE ---------- */}
          <section
            id="workspace"
            ref={setSectionRef("workspace")}
            className="scroll-mt-6 pt-4 pb-16"
          >
            <SectionHeading number="09" title="Workspace" />

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
            &ldquo;{item}&rdquo;
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- COLOR SWATCH ---------- */

function ColorSwatch({ spec, label }: { spec: ColorSpec; label: string }) {
  const isLight = spec.hex === "#F5F2F0" || spec.hex === "#D3B184" || spec.hex === "#FFFFFF";
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: `1px solid ${border}` }}
    >
      <div
        className="px-4 py-6 flex items-end justify-between"
        style={{ background: spec.hex, minHeight: "80px" }}
      >
        <span
          className="font-mono text-xs font-medium"
          style={{ color: isLight ? "#122620" : "#F5F2F0" }}
        >
          {spec.hex}
        </span>
        {spec.wcagLevel && (
          <span
            className="text-[10px] font-bold px-1.5 py-0.5 rounded"
            style={{
              background: isLight ? "oklch(0 0 0 / 0.08)" : "oklch(1 0 0 / 0.15)",
              color: isLight ? "#122620" : "#F5F2F0",
            }}
          >
            {spec.wcagLevel}
          </span>
        )}
      </div>
      <div className="px-4 py-3" style={{ background: "var(--card)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
            {spec.name}
          </span>
          <span className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>
            {label}
          </span>
        </div>
        <p className="text-[11px] leading-snug" style={{ color: "var(--muted-foreground)" }}>
          {spec.usage}
        </p>
        {spec.contrastRatio && (
          <p className="text-[10px] font-mono mt-1" style={{ color: "var(--muted-foreground)" }}>
            {spec.contrastRatio}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- TONE BAR ---------- */

function ToneBar({ dimension, gpColor }: { dimension: { leftLabel: string; rightLabel: string; leftScore: number; rightScore: number }; gpColor: string }) {
  // leftScore is 1-10, position the dot accordingly
  const position = ((dimension.leftScore - 1) / 9) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
          {dimension.leftLabel}
        </span>
        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          {dimension.rightLabel}
        </span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "var(--muted)" }}>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2"
          style={{
            left: `${position}%`,
            transform: `translate(-50%, -50%)`,
            background: gpColor === "#F5F2F0" ? "#122620" : gpColor,
            borderColor: gpColor === "#F5F2F0" ? "var(--border)" : "oklch(1 0 0 / 0.3)",
          }}
        />
        {/* Score label */}
        <span
          className="absolute text-[9px] font-bold"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
            top: "-16px",
            color: "var(--muted-foreground)",
          }}
        >
          {dimension.leftScore}
        </span>
      </div>
    </div>
  );
}

/* ---------- SAMPLE POST CARD ---------- */

function SamplePostCard({
  post,
  gpName,
  gpTitle,
  gpColor,
  typeface,
}: {
  post: SamplePost;
  gpName: string;
  gpTitle: string;
  gpColor: string;
  typeface: string;
}) {
  const cfg = statusConfig[post.status] || statusConfig.draft;
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--card)", border: `1px solid ${border}` }}
    >
      {/* LinkedIn-style header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              background: gpColor,
              color: gpColor === "#F5F2F0" || gpColor === "#D3B184" ? "#122620" : "#F5F2F0",
              border: gpColor === "#F5F2F0" ? `1px solid ${border}` : "none",
            }}
          >
            {gpName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
              {gpName.split(",")[0]}
            </p>
            <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
              {gpTitle} &middot; {post.format}
            </p>
          </div>
        </div>
        <Badge variant={cfg.variant}>{cfg.label}</Badge>
      </div>

      {/* Post title */}
      <div className="px-5 pb-2">
        <p
          className="font-semibold text-sm"
          style={{
            fontFamily: typeface,
            color: "var(--foreground)",
          }}
        >
          {post.title}
        </p>
      </div>

      {/* Post body */}
      <div className="px-5 pb-4">
        <p
          className="text-sm leading-relaxed whitespace-pre-line"
          style={{ color: "var(--foreground)" }}
        >
          {post.body}
        </p>
      </div>

      {/* Hashtags */}
      <div className="px-5 pb-3">
        <div className="flex flex-wrap gap-1">
          {post.hashtags.map((tag, i) => (
            <span
              key={i}
              className="text-xs"
              style={{ color: "oklch(0.55 0.10 250)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visual direction note + char count */}
      <div
        className="px-5 py-3 flex items-start justify-between gap-4"
        style={{
          background: "var(--muted)",
          borderTop: `1px solid ${border}`,
        }}
      >
        <div>
          <p className="text-[10px] font-medium uppercase mb-1" style={{ color: "var(--muted-foreground)", letterSpacing: "0.06em" }}>
            Visual Direction
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            {post.visualDirectionNote}
          </p>
        </div>
        <span
          className="text-[10px] font-mono flex-shrink-0 px-2 py-1 rounded"
          style={{ background: "var(--card)", color: "var(--muted-foreground)", border: `1px solid ${border}` }}
        >
          ~{post.charCount} chars
        </span>
      </div>
    </div>
  );
}

/* ---------- COPY BUTTON ---------- */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="text-[10px] font-mono px-2 py-1 rounded transition-colors"
      style={{
        background: copied ? "oklch(0.55 0.18 145 / 0.2)" : "oklch(1 0 0 / 0.08)",
        color: copied ? "oklch(0.65 0.18 145)" : "oklch(0.60 0.01 200)",
        border: "1px solid oklch(1 0 0 / 0.1)",
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
