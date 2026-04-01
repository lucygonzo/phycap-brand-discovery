import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import {
  colorGuide,
  paletteRatios,
  typographyGuide,
  logoGuide,
  photographyGuide,
  voiceGuide,
  archetypeGuide,
} from "../lib/brandGuideData";

/* ============================================================
   CONSTANTS
   ============================================================ */
const SECTIONS = [
  { id: "color", number: "01", title: "Color System" },
  { id: "typography", number: "02", title: "Typography" },
  { id: "logo", number: "03", title: "Logo" },
  { id: "photography", number: "04", title: "Photography" },
  { id: "voice", number: "05", title: "Voice & Tone" },
  { id: "archetype", number: "06", title: "Brand Archetype" },
] as const;

const forest = "var(--phycap-forest)";
const gold = "var(--phycap-gold)";
const cream = "var(--phycap-cream)";
const blueBlack = "var(--phycap-blue-black)";
const border = "var(--border)";

/* ============================================================
   COPY HEX COMPONENT
   ============================================================ */
function CopyHex({ hex, light = false }: { hex: string; light?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }, [hex]);

  return (
    <button
      onClick={handleCopy}
      className="mono-font inline-flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200 cursor-pointer"
      style={{
        fontSize: "12px",
        background: light ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)",
        color: light ? "rgba(255,255,255,0.9)" : "var(--foreground)",
        border: "1px solid transparent",
      }}
      title={`Copy ${hex}`}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Copied</span>
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>{hex}</span>
        </>
      )}
    </button>
  );
}

/* ============================================================
   SECTION WRAPPER
   ============================================================ */
function Section({
  id,
  number,
  title,
  children,
  sectionRef,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  sectionRef: (el: HTMLElement | null) => void;
}) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-6"
      style={{ paddingTop: "48px", paddingBottom: "64px" }}
    >
      <div className="mb-10">
        <div
          className="eyebrow mb-2"
          style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {number}
        </div>
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            color: "var(--foreground)",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
        <div className="mt-4 h-px w-16" style={{ background: gold }} />
      </div>
      {children}
    </section>
  );
}

/* ============================================================
   SUB-SECTION HEADING
   ============================================================ */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-semibold text-base mb-4 mt-10"
      style={{ color: "var(--foreground)" }}
    >
      {children}
    </h3>
  );
}

/* ============================================================
   DO / DON'T CARD
   ============================================================ */
function DoDontCard({
  type,
  items,
}: {
  type: "do" | "dont";
  items: string[];
}) {
  const isDo = type === "do";
  return (
    <div
      className="rounded-lg p-5 flex-1 min-w-[260px]"
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
          {isDo ? "Do" : "Don't"}
        </span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   VOICE EXAMPLE CARD
   ============================================================ */
function VoiceExampleCard({
  type,
  text,
}: {
  type: "do" | "dont";
  text: string;
}) {
  const isDo = type === "do";
  return (
    <div
      className="rounded-lg p-4 flex-1 min-w-[260px]"
      style={{
        background: isDo ? "oklch(0.55 0.18 145 / 0.06)" : "oklch(0.55 0.20 25 / 0.06)",
        borderLeft: `3px solid ${isDo ? "oklch(0.55 0.18 145)" : "oklch(0.55 0.20 25)"}`,
      }}
    >
      <div
        className="text-[10px] font-semibold uppercase mb-2"
        style={{
          letterSpacing: "0.12em",
          color: isDo ? "oklch(0.45 0.15 145)" : "oklch(0.45 0.18 25)",
        }}
      >
        {isDo ? "Write this" : "Not this"}
      </div>
      <p className="text-sm italic leading-relaxed" style={{ color: "var(--foreground)" }}>
        "{text}"
      </p>
    </div>
  );
}

/* ============================================================
   MOBILE SIDEBAR TOGGLE
   ============================================================ */
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

/* ============================================================
   MAIN BRAND GUIDE PAGE
   ============================================================ */
export default function BrandGuide() {
  const [activeSection, setActiveSection] = useState("color");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* IntersectionObserver for active sidebar state */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
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

  return (
    <div className="flex min-h-screen" style={{ background: "var(--background)" }}>
      {/* ============================================================
         SIDEBAR (sticky, Forest background)
         ============================================================ */}
      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 flex flex-col
          transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0
          ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          background: forest,
          borderRight: "1px solid var(--sidebar-border)",
        }}
      >
        {/* Logo area */}
        <div className="p-6 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium transition-colors"
            style={{ color: "oklch(0.65 0.01 60)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Brand HQ
          </Link>
          <div className="mt-5">
            <div
              className="display-font text-lg"
              style={{ color: "var(--sidebar-foreground)", lineHeight: 1.2 }}
            >
              PhyCap
            </div>
            <div
              className="display-font text-lg"
              style={{ color: gold, lineHeight: 1.2 }}
            >
              Brand Guide
            </div>
          </div>
          <p
            className="mt-3 text-xs leading-relaxed"
            style={{ color: "oklch(0.60 0.01 60)" }}
          >
            The authoritative reference for creating PhyCap-branded materials.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px" style={{ background: "var(--sidebar-border)" }} />

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {SECTIONS.map(({ id, number, title }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left px-3 py-2.5 rounded-md mb-1 transition-all duration-200 flex items-center gap-3 cursor-pointer"
                style={{
                  background: isActive ? "var(--sidebar-muted)" : "transparent",
                  color: isActive ? gold : "oklch(0.65 0.01 60)",
                }}
              >
                <span
                  className="mono-font text-[10px] font-medium flex-shrink-0"
                  style={{ color: isActive ? gold : "oklch(0.45 0.01 60)", width: "18px" }}
                >
                  {number}
                </span>
                <span className="text-sm font-medium">{title}</span>
                {isActive && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: gold }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 pt-4">
          <div className="h-px mb-4" style={{ background: "var(--sidebar-border)" }} />
          <div className="text-[10px]" style={{ color: "oklch(0.45 0.01 60)" }}>
            Physicians Capital Fund
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "oklch(0.40 0.01 60)" }}>
            Investing with Clinical Precision{"\u2120"}
          </div>
        </div>
      </aside>

      {/* ============================================================
         MAIN CONTENT
         ============================================================ */}
      <main className="flex-1 min-w-0">
        {/* Mobile header */}
        <div
          className="sticky top-0 z-30 lg:hidden flex items-center gap-3 px-4 py-3"
          style={{ background: forest, borderBottom: `1px solid var(--sidebar-border)` }}
        >
          <button
            onClick={() => setMobileNavOpen(true)}
            className="text-white p-1 cursor-pointer"
          >
            <MenuIcon />
          </button>
          <span className="display-font text-sm" style={{ color: "var(--sidebar-foreground)" }}>
            PhyCap Brand Guide
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div style={{ paddingTop: "48px", paddingBottom: "32px" }}>
            <div className="eyebrow mb-3" style={{ color: gold, fontSize: "10px" }}>
              BRAND GUIDE
            </div>
            <h1
              className="display-font"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                color: "var(--foreground)",
                lineHeight: 1.08,
                maxWidth: "600px",
              }}
            >
              Investing with Clinical Precision
            </h1>
            <p
              className="mt-4"
              style={{
                color: "var(--muted-foreground)",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "540px",
              }}
            >
              This guide defines the visual and verbal identity of Physicians Capital Fund.
              Use it to create materials that are precise, authoritative, and unmistakably PhyCap.
            </p>
          </div>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             01 — COLOR SYSTEM
             ============================================================ */}
          <Section id="color" number="01" title="Color System" sectionRef={setSectionRef("color")}>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-foreground)", maxWidth: "560px" }}>
              The PhyCap palette sits at the intersection of medical editorial, luxury membership,
              and modern venture capital. Forest green and gold on cream evokes private banking,
              clinical authority, and institutional trust.
            </p>

            {/* Color Swatches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {colorGuide.map((color) => {
                const isLight = ["Cream", "White"].includes(color.name);
                const swatchBg = color.hex;
                const textOnSwatch = isLight ? "#070808" : "#FFFFFF";
                return (
                  <div
                    key={color.name}
                    className="rounded-lg overflow-hidden"
                    style={{ border: `1px solid ${border}` }}
                  >
                    {/* Color block */}
                    <div
                      className="p-5 flex flex-col justify-between"
                      style={{
                        background: swatchBg,
                        minHeight: "140px",
                        color: textOnSwatch,
                      }}
                    >
                      <div>
                        <div className="font-semibold text-sm">{color.name}</div>
                        <div className="text-xs mt-0.5 opacity-80">{color.role}</div>
                      </div>
                      <div className="mt-4">
                        <CopyHex hex={color.hex} light={!isLight} />
                      </div>
                    </div>
                    {/* Details */}
                    <div className="p-4" style={{ background: "var(--card)" }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="mono-font text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                          {color.oklch}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {color.usage}
                      </p>
                      {color.accessibilityNote && (
                        <div
                          className="mt-2 px-2 py-1.5 rounded text-[11px] leading-snug"
                          style={{
                            background: "oklch(0.60 0.12 250 / 0.08)",
                            color: "oklch(0.45 0.12 250)",
                          }}
                        >
                          {color.accessibilityNote}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Palette Ratios */}
            <SubHeading>Palette Ratios</SubHeading>
            <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
              For a typical PhyCap page or layout:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {paletteRatios.map((r) => (
                <div
                  key={r.label}
                  className="rounded-lg p-4"
                  style={{ background: "var(--card)", border: `1px solid ${border}` }}
                >
                  <div
                    className="display-font text-2xl mb-1"
                    style={{ color: gold, lineHeight: 1.1 }}
                  >
                    {r.percentage}
                  </div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--foreground)" }}>
                    {r.label}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                    {r.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Color Do/Don't for each */}
            <SubHeading>Usage Rules by Color</SubHeading>
            <div className="space-y-4">
              {colorGuide
                .filter((c) => c.doRules.length > 0 || c.dontRules.length > 0)
                .slice(0, 5) // Show the most important 5
                .map((color) => (
                  <div key={color.name}>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-4 h-4 rounded-sm flex-shrink-0"
                        style={{
                          background: color.hex,
                          border: ["Cream", "White"].includes(color.name) ? `1px solid ${border}` : "none",
                        }}
                      />
                      <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                        {color.name}
                      </span>
                      <CopyHex hex={color.hex} />
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <DoDontCard type="do" items={color.doRules} />
                      <DoDontCard type="dont" items={color.dontRules} />
                    </div>
                  </div>
                ))}
            </div>
          </Section>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             02 — TYPOGRAPHY
             ============================================================ */}
          <Section id="typography" number="02" title="Typography" sectionRef={setSectionRef("typography")}>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-foreground)", maxWidth: "560px" }}>
              The serif/sans-serif pairing of Marcellus and Roboto produces content that
              physicians take seriously. Headlines carry institutional gravitas. Body text
              delivers clinical clarity.
            </p>

            {/* Font Specimens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Marcellus */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${border}` }}
              >
                <div className="p-6" style={{ background: forest }}>
                  <div
                    className="display-font"
                    style={{ fontSize: "42px", color: "#FFFFFF", lineHeight: 1.1 }}
                  >
                    Aa
                  </div>
                  <div
                    className="display-font mt-2"
                    style={{ fontSize: "14px", color: gold, letterSpacing: "0.02em" }}
                  >
                    Marcellus
                  </div>
                </div>
                <div className="p-5" style={{ background: "var(--card)" }}>
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--muted-foreground)" }}>
                    {typographyGuide.headline.classification}
                  </div>
                  <div className="text-xs mb-2" style={{ color: "var(--muted-foreground)" }}>
                    {typographyGuide.headline.source}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {typographyGuide.headline.description}
                  </p>
                  <div className="mt-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
                    Weights: {typographyGuide.headline.weights.join(", ")}
                  </div>
                  <div className="mono-font text-[11px] mt-1" style={{ color: "var(--muted-foreground)" }}>
                    Fallback: {typographyGuide.headline.fallback}
                  </div>
                </div>
              </div>

              {/* Roboto */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${border}` }}
              >
                <div className="p-6" style={{ background: cream }}>
                  <div
                    style={{ fontSize: "42px", color: blueBlack, lineHeight: 1.1, fontFamily: "Roboto, Arial, sans-serif" }}
                  >
                    Aa
                  </div>
                  <div
                    className="mt-2 font-medium"
                    style={{ fontSize: "14px", color: forest }}
                  >
                    Roboto
                  </div>
                </div>
                <div className="p-5" style={{ background: "var(--card)" }}>
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--muted-foreground)" }}>
                    {typographyGuide.body.classification}
                  </div>
                  <div className="text-xs mb-2" style={{ color: "var(--muted-foreground)" }}>
                    {typographyGuide.body.source}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {typographyGuide.body.description}
                  </p>
                  <div className="mt-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
                    Weights: {typographyGuide.body.weights.join(", ")}
                  </div>
                  <div className="mono-font text-[11px] mt-1" style={{ color: "var(--muted-foreground)" }}>
                    Fallback: {typographyGuide.body.fallback}
                  </div>
                </div>
              </div>
            </div>

            {/* Type Scale Specimens */}
            <SubHeading>Type Scale</SubHeading>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              {typographyGuide.hierarchy.map((level, i) => {
                const isSerif = level.font === "Marcellus";
                const specimenSize =
                  level.level === "Hero Headlines" ? "clamp(28px, 4vw, 48px)" :
                  level.level === "Section Headlines" ? "clamp(22px, 3vw, 36px)" :
                  level.level === "Subheadlines" ? "20px" :
                  level.level === "Body Copy" ? "16px" :
                  level.level === "Eyebrow Labels" ? "12px" :
                  level.level === "Captions" ? "13px" :
                  "clamp(28px, 4vw, 48px)";

                return (
                  <div
                    key={level.level}
                    className="flex flex-col md:flex-row"
                    style={{
                      borderBottom: i < typographyGuide.hierarchy.length - 1 ? `1px solid ${border}` : "none",
                    }}
                  >
                    {/* Specimen */}
                    <div
                      className="p-5 md:w-1/2 flex items-center"
                      style={{
                        background: level.level === "Stat Numbers" ? forest : "var(--card)",
                      }}
                    >
                      <span
                        className={isSerif ? "display-font" : ""}
                        style={{
                          fontSize: specimenSize,
                          fontWeight: level.weight.includes("600") ? 600 : level.weight.includes("500") ? 500 : level.weight.includes("700") ? 700 : 400,
                          color: level.level === "Stat Numbers" ? gold :
                            level.level === "Eyebrow Labels" ? forest : "var(--foreground)",
                          letterSpacing: level.letterSpacing ? "0.12em" : undefined,
                          textTransform: level.transform as React.CSSProperties["textTransform"],
                          lineHeight: 1.2,
                        }}
                      >
                        {level.level === "Eyebrow Labels"
                          ? "CLINICAL PRECISION"
                          : level.level === "Stat Numbers"
                          ? "168+"
                          : level.level === "Captions"
                          ? "March 31, 2026"
                          : "Investing with Clinical Precision"}
                      </span>
                    </div>
                    {/* Details */}
                    <div className="p-5 md:w-1/2" style={{ background: "var(--muted)" }}>
                      <div className="text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
                        {level.level}
                      </div>
                      <div className="space-y-0.5 text-xs" style={{ color: "var(--muted-foreground)" }}>
                        <div>
                          <span className="font-medium">Font:</span> {level.font}
                        </div>
                        <div>
                          <span className="font-medium">Weight:</span> {level.weight}
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> {level.sizeDesktop} (desktop) / {level.sizeMobile} (mobile)
                        </div>
                        <div>
                          <span className="font-medium">Line height:</span> {level.lineHeight}
                        </div>
                        {level.letterSpacing && (
                          <div>
                            <span className="font-medium">Letter spacing:</span> {level.letterSpacing}
                          </div>
                        )}
                        <div className="mt-1.5 pt-1.5" style={{ borderTop: `1px solid ${border}` }}>
                          {level.usage}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Typography Do/Don't */}
            <SubHeading>Typography Rules</SubHeading>
            <div className="flex flex-wrap gap-4">
              <DoDontCard type="do" items={typographyGuide.doRules} />
              <DoDontCard type="dont" items={typographyGuide.dontRules} />
            </div>
          </Section>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             03 — LOGO
             ============================================================ */}
          <Section id="logo" number="03" title="Logo" sectionRef={setSectionRef("logo")}>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-foreground)", maxWidth: "560px" }}>
              The P/C monogram with integrated medical cross is the primary brand mark.
              The cross signals healthcare without being overtly clinical.
              The monogram is compact and recognizable at small sizes.
            </p>

            {/* Logo Anatomy */}
            <SubHeading>Logo Anatomy</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Primary Mark", desc: logoGuide.anatomy.primaryMark },
                { label: "Wordmark", desc: logoGuide.anatomy.wordmark },
                { label: "Full Lockup", desc: logoGuide.anatomy.fullLockup },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-4"
                  style={{ background: "var(--card)", border: `1px solid ${border}` }}
                >
                  <div className="eyebrow mb-2" style={{ color: gold, fontSize: "9px" }}>
                    {item.label}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Confirmed Files */}
            <SubHeading>Confirmed Logo Files</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {logoGuide.confirmedFiles.map((file) => (
                <div
                  key={file.filename}
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${border}` }}
                >
                  <div
                    className="p-8 flex items-center justify-center"
                    style={{
                      background: file.filename.includes("dark") ? cream : forest,
                      minHeight: "100px",
                    }}
                  >
                    <span
                      className="mono-font text-xs"
                      style={{
                        color: file.filename.includes("dark") ? blueBlack : "oklch(0.65 0.01 60)",
                      }}
                    >
                      {file.filename}
                    </span>
                  </div>
                  <div className="p-4" style={{ background: "var(--card)" }}>
                    <div className="text-xs font-medium mb-1" style={{ color: "var(--foreground)" }}>
                      {file.useOn}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {file.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Safe Zone */}
            <SubHeading>Safe Zone System</SubHeading>
            <div
              className="rounded-lg p-5 mb-8"
              style={{
                background: "var(--card)",
                border: `1px solid ${border}`,
                borderLeft: `3px solid ${gold}`,
              }}
            >
              <div className="space-y-2 text-sm" style={{ color: "var(--foreground)" }}>
                <p><span className="font-semibold">X-unit:</span> {logoGuide.safeZone.xUnit}</p>
                <p><span className="font-semibold">Minimum:</span> {logoGuide.safeZone.minimum}</p>
                <p><span className="font-semibold">Preferred:</span> {logoGuide.safeZone.preferred}</p>
              </div>
            </div>

            {/* Minimum Sizes */}
            <SubHeading>Minimum Sizes</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {(["digital", "print"] as const).map((context) => (
                <div
                  key={context}
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${border}` }}
                >
                  <div
                    className="px-4 py-2.5 text-xs font-medium uppercase"
                    style={{
                      letterSpacing: "0.1em",
                      background: "var(--muted)",
                      color: "var(--muted-foreground)",
                      borderBottom: `1px solid ${border}`,
                    }}
                  >
                    {context}
                  </div>
                  <div style={{ background: "var(--card)" }}>
                    {logoGuide.minimumSizes[context].map((item, i) => (
                      <div
                        key={item.variant}
                        className="px-4 py-3 flex justify-between items-center text-sm"
                        style={{
                          borderBottom:
                            i < logoGuide.minimumSizes[context].length - 1
                              ? `1px solid ${border}`
                              : "none",
                        }}
                      >
                        <span style={{ color: "var(--foreground)" }}>{item.variant}</span>
                        <span className="mono-font text-xs" style={{ color: "var(--muted-foreground)" }}>
                          {item.size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Logo Do/Don't */}
            <SubHeading>Logo Rules</SubHeading>
            <div className="flex flex-wrap gap-4 mb-8">
              <DoDontCard type="do" items={logoGuide.doRules} />
              <DoDontCard type="dont" items={logoGuide.dontRules} />
            </div>

            {/* Outstanding Assets */}
            <SubHeading>Outstanding Assets Needed</SubHeading>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid ${border}` }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--muted)" }}>
                    <th
                      className="px-4 py-2.5 text-left text-xs font-medium"
                      style={{ color: "var(--muted-foreground)", borderBottom: `1px solid ${border}` }}
                    >
                      Asset
                    </th>
                    <th
                      className="px-4 py-2.5 text-left text-xs font-medium"
                      style={{ color: "var(--muted-foreground)", borderBottom: `1px solid ${border}` }}
                    >
                      Priority
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logoGuide.outstandingAssets.map((item, i) => (
                    <tr
                      key={item.asset}
                      style={{
                        borderBottom:
                          i < logoGuide.outstandingAssets.length - 1
                            ? `1px solid ${border}`
                            : "none",
                      }}
                    >
                      <td className="px-4 py-2.5 text-[13px]" style={{ color: "var(--foreground)" }}>
                        {item.asset}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium"
                          style={{
                            background: item.priority === "High" ? "oklch(0.55 0.20 25 / 0.10)" : "oklch(0.75 0.12 70 / 0.12)",
                            color: item.priority === "High" ? "oklch(0.45 0.18 25)" : "oklch(0.50 0.12 70)",
                            border: `1px solid ${item.priority === "High" ? "oklch(0.55 0.20 25 / 0.20)" : "oklch(0.75 0.12 70 / 0.25)"}`,
                          }}
                        >
                          {item.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             04 — PHOTOGRAPHY
             ============================================================ */}
          <Section id="photography" number="04" title="Photography" sectionRef={setSectionRef("photography")}>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-foreground)", maxWidth: "560px" }}>
              {photographyGuide.overview}
            </p>

            {/* Lightroom Settings Card */}
            <SubHeading>Lightroom Preset Settings</SubHeading>
            <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
              Apply these settings in Lightroom, Lightroom Mobile, or any equivalent photo editor
              to produce on-brand PhyCap photography.
            </p>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              {/* Header */}
              <div
                className="px-5 py-3.5 flex items-center gap-3"
                style={{ background: forest }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={gold.replace("var(--phycap-gold)", "#D3B184")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#D3B184" }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
                <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
                  PhyCap Photo Treatment
                </span>
                <span
                  className="ml-auto text-[10px] uppercase font-medium"
                  style={{ color: "#D3B184", letterSpacing: "0.1em" }}
                >
                  Quick Reference
                </span>
              </div>
              {/* Settings grid */}
              <div style={{ background: "var(--card)" }}>
                {photographyGuide.presetSettings.map((s, i) => (
                  <div
                    key={s.setting}
                    className="flex items-center justify-between px-5 py-3"
                    style={{
                      borderBottom:
                        i < photographyGuide.presetSettings.length - 1
                          ? `1px solid ${border}`
                          : "none",
                    }}
                  >
                    <span className="text-sm" style={{ color: "var(--foreground)" }}>
                      {s.setting}
                    </span>
                    <span className="mono-font text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tone Curve */}
            <div
              className="rounded-lg p-5 mb-10"
              style={{
                background: "var(--card)",
                border: `1px solid ${border}`,
                borderLeft: `3px solid ${gold}`,
              }}
            >
              <div className="eyebrow mb-2" style={{ color: gold, fontSize: "9px" }}>
                TONE CURVE
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                {photographyGuide.toneCurve}
              </p>
            </div>

            {/* Five "Do Not" Rules */}
            <SubHeading>The Five Rules of PhyCap Photography</SubHeading>
            <div className="space-y-4 mb-8">
              {photographyGuide.doNotRules.map((rule, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5"
                  style={{
                    background: "oklch(0.55 0.20 25 / 0.04)",
                    border: "1px solid oklch(0.55 0.20 25 / 0.12)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mono-font text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.55 0.20 25)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                        {rule.rule}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {rule.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subjects */}
            <SubHeading>Approved Subject Matter</SubHeading>
            <div className="flex flex-wrap gap-2">
              {photographyGuide.subjects.map((subject) => (
                <span
                  key={subject}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "oklch(0.77 0.07 72 / 0.12)",
                    color: "oklch(0.50 0.10 72)",
                    border: "1px solid oklch(0.77 0.07 72 / 0.25)",
                  }}
                >
                  {subject}
                </span>
              ))}
            </div>
          </Section>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             05 — VOICE & TONE
             ============================================================ */}
          <Section id="voice" number="05" title="Voice & Tone" sectionRef={setSectionRef("voice")}>
            <div
              className="rounded-lg p-5 mb-8"
              style={{
                background: "var(--card)",
                border: `1px solid ${border}`,
                borderLeft: `3px solid ${gold}`,
              }}
            >
              <div className="eyebrow mb-2" style={{ color: gold, fontSize: "9px" }}>
                NORTH STAR
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                {voiceGuide.northStar}
              </p>
            </div>

            {/* Tone Attributes */}
            <SubHeading>Tone Attributes</SubHeading>
            <div className="space-y-6 mb-10">
              {voiceGuide.toneAttributes.map((attr) => (
                <div key={attr.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: gold }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                      {attr.name}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted-foreground)" }}>
                    {attr.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <VoiceExampleCard type="do" text={attr.doExample} />
                    <VoiceExampleCard type="dont" text={attr.dontExample} />
                  </div>
                </div>
              ))}
            </div>

            {/* Sentence Structure Rules */}
            <SubHeading>Sentence Structure Rules</SubHeading>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              {voiceGuide.sentenceRules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-5 py-3.5"
                  style={{
                    background: "var(--card)",
                    borderBottom:
                      i < voiceGuide.sentenceRules.length - 1
                        ? `1px solid ${border}`
                        : "none",
                  }}
                >
                  <span
                    className="mono-font text-[10px] font-bold flex-shrink-0 mt-1"
                    style={{ color: gold }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            {/* What Not to Say */}
            <SubHeading>What Not to Say</SubHeading>
            <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
              {voiceGuide.universalRule}
            </p>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--muted)" }}>
                    <th
                      className="px-4 py-2.5 text-left text-xs font-medium"
                      style={{ color: "var(--muted-foreground)", borderBottom: `1px solid ${border}` }}
                    >
                      Retire This Phrase
                    </th>
                    <th
                      className="px-4 py-2.5 text-left text-xs font-medium"
                      style={{ color: "var(--muted-foreground)", borderBottom: `1px solid ${border}` }}
                    >
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {voiceGuide.whatNotToSay.map((item, i) => (
                    <tr
                      key={item.phrase}
                      style={{
                        borderBottom:
                          i < voiceGuide.whatNotToSay.length - 1
                            ? `1px solid ${border}`
                            : "none",
                      }}
                    >
                      <td
                        className="px-4 py-2.5 text-[13px] font-medium"
                        style={{ color: "oklch(0.45 0.18 25)" }}
                      >
                        "{item.phrase}"
                      </td>
                      <td className="px-4 py-2.5 text-[13px]" style={{ color: "var(--muted-foreground)" }}>
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Taglines */}
            <SubHeading>Taglines</SubHeading>
            <div
              className="rounded-lg p-6 mb-6"
              style={{ background: forest }}
            >
              <div
                className="eyebrow mb-3"
                style={{ color: "#D3B184", fontSize: "9px" }}
              >
                PRIMARY TAGLINE
              </div>
              <div
                className="display-font"
                style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#FFFFFF", lineHeight: 1.2 }}
              >
                {voiceGuide.taglines.primary}
              </div>
              <p className="mt-2 text-xs" style={{ color: "oklch(0.60 0.01 60)" }}>
                Service-marked and confirmed. Occupies a territory no competitor has claimed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {voiceGuide.taglines.supporting.map((tag) => (
                <div
                  key={tag.text}
                  className="rounded-lg p-4"
                  style={{ background: "var(--card)", border: `1px solid ${border}` }}
                >
                  <p
                    className="display-font text-sm mb-2"
                    style={{ color: "var(--foreground)", lineHeight: 1.4 }}
                  >
                    "{tag.text}"
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                    {tag.context}
                  </p>
                </div>
              ))}
            </div>

            {/* Copy Blocks */}
            <SubHeading>Ready-to-Use Copy Blocks</SubHeading>
            <div className="space-y-4">
              {voiceGuide.copyBlocks.map((block) => (
                <div
                  key={block.label}
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${border}` }}
                >
                  <div
                    className="px-4 py-2 text-[10px] font-semibold uppercase"
                    style={{
                      letterSpacing: "0.1em",
                      background: "var(--muted)",
                      color: gold,
                      borderBottom: `1px solid ${border}`,
                    }}
                  >
                    {block.label}
                  </div>
                  <div className="p-4" style={{ background: "var(--card)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {block.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="h-px" style={{ background: border }} />

          {/* ============================================================
             06 — BRAND ARCHETYPE
             ============================================================ */}
          <Section id="archetype" number="06" title="Brand Archetype" sectionRef={setSectionRef("archetype")}>
            {/* Archetype Hero */}
            <div
              className="rounded-lg p-6 mb-8"
              style={{ background: forest }}
            >
              <div
                className="eyebrow mb-2"
                style={{ color: "#D3B184", fontSize: "9px" }}
              >
                THE ARCHETYPE
              </div>
              <div
                className="display-font mb-3"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#FFFFFF", lineHeight: 1.15 }}
              >
                {archetypeGuide.name}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.01 60)" }}>
                {archetypeGuide.definition}
              </p>
            </div>

            {/* One-liner */}
            <div
              className="rounded-lg p-5 mb-8"
              style={{
                background: cream,
                border: `1px solid ${border}`,
              }}
            >
              <p
                className="display-font text-base leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                "{archetypeGuide.oneLiner}"
              </p>
            </div>

            {/* Not This, Not That */}
            <SubHeading>What the Archetype is Not</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {archetypeGuide.notThisNotThat.map((item) => (
                <div
                  key={item.notThis}
                  className="rounded-lg p-5"
                  style={{
                    background: "oklch(0.55 0.20 25 / 0.04)",
                    border: "1px solid oklch(0.55 0.20 25 / 0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "oklch(0.55 0.20 25)" }}
                    >
                      Not "{item.notThis}"
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {item.why}
                  </p>
                </div>
              ))}
            </div>

            {/* Manifestations */}
            <SubHeading>How the Archetype Manifests</SubHeading>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              {archetypeGuide.manifestations.map((m, i) => (
                <div
                  key={m.dimension}
                  className="flex flex-col sm:flex-row"
                  style={{
                    borderBottom:
                      i < archetypeGuide.manifestations.length - 1
                        ? `1px solid ${border}`
                        : "none",
                  }}
                >
                  <div
                    className="px-5 py-3.5 sm:w-36 flex-shrink-0 flex items-center"
                    style={{ background: "var(--muted)" }}
                  >
                    <span
                      className="text-xs font-semibold uppercase"
                      style={{ letterSpacing: "0.08em", color: forest }}
                    >
                      {m.dimension}
                    </span>
                  </div>
                  <div className="px-5 py-3.5 flex-1" style={{ background: "var(--card)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {m.expression}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Personality Traits */}
            <SubHeading>Personality Traits</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {archetypeGuide.personalityTraits.map((t) => (
                <div
                  key={t.trait}
                  className="rounded-lg p-4"
                  style={{
                    background: "var(--card)",
                    border: `1px solid ${border}`,
                    borderTop: `2px solid ${gold}`,
                  }}
                >
                  <div className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                    {t.trait}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {t.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personality Spectrum */}
            <SubHeading>Personality Spectrum</SubHeading>
            <div
              className="rounded-lg overflow-hidden mb-10"
              style={{ border: `1px solid ${border}` }}
            >
              {archetypeGuide.personalitySpectrum.map((s, i) => (
                <div
                  key={s.dimension}
                  className="flex flex-col sm:flex-row"
                  style={{
                    borderBottom:
                      i < archetypeGuide.personalitySpectrum.length - 1
                        ? `1px solid ${border}`
                        : "none",
                  }}
                >
                  <div
                    className="px-5 py-3 sm:w-48 flex-shrink-0"
                    style={{ background: "var(--muted)" }}
                  >
                    <div className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                      {s.dimension}
                    </div>
                    <div
                      className="text-[11px] font-semibold mt-0.5"
                      style={{ color: gold }}
                    >
                      {s.position}
                    </div>
                  </div>
                  <div className="px-5 py-3 flex-1" style={{ background: "var(--card)" }}>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {s.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Footer */}
          <div className="py-12 text-center">
            <div className="h-px mb-8" style={{ background: border }} />
            <div className="display-font text-lg mb-1" style={{ color: "var(--foreground)" }}>
              PhyCap Brand Guide
            </div>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Physicians Capital Fund. Investing with Clinical Precision{"\u2120"}.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-4 text-xs font-medium transition-colors"
              style={{ color: gold }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Brand HQ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
