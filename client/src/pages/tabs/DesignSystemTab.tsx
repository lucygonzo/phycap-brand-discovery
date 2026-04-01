import { useState } from "react";
import {
  colorPalette,
  colorGroups,
  paletteRatios,
  accessibilityPairings,
  typographyData,
  typeHierarchy,
  typographyRules,
  logoData,
  photographyData,
  videoData,
  templateSpecs,
  aiGraphicsData,
  iconographyData,
} from "@/lib/visualIdentityData";
import {
  SectionHeader,
  KeyTakeaway,
  SubTitle,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import SubTabNav, { ExpandableCard } from "@/components/SubTabNav";
import {
  Palette,
  Type,
  Image,
  Camera,
  Video,
  LayoutTemplate,
  Sparkles,
  Shapes,
  Check,
  X,
  Copy,
  CheckCheck,
  AlertTriangle,
  Star,
  Circle,
} from "lucide-react";

/* ============================================================
   COPY BUTTON UTILITY
   ============================================================ */
function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all"
      style={{
        background: copied ? "oklch(0.45 0.15 145 / 0.15)" : "oklch(0.50 0.02 200 / 0.1)",
        color: copied ? "oklch(0.45 0.15 145)" : "var(--muted-foreground)",
        border: `1px solid ${copied ? "oklch(0.45 0.15 145 / 0.3)" : "var(--border)"}`,
      }}
    >
      {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : label}
    </button>
  );
}

/* ============================================================
   1. COLOR SUB-TAB
   ============================================================ */
function ColorContent() {
  return (
    <>
      <KeyTakeaway
        label="PALETTE POSITION"
        text="The Forest green + Gold + Cream palette occupies a position no competitor has claimed: the 'editorial authority + membership exclusivity' quadrant. No other physician-focused fund uses this territory."
      />

      {/* Color groups */}
      {colorGroups.map((group) => {
        const colors = colorPalette.filter(
          (c) => c.group === group.key && !c.retired
        );
        if (colors.length === 0) return null;
        return (
          <div key={group.key} className="mb-8">
            <div className="eyebrow mb-3" style={{ color: "var(--phycap-gold)" }}>
              {group.label}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Large swatch with hex overlay */}
                  <div
                    className="h-16 flex items-end justify-between p-3"
                    style={{ background: color.hex }}
                  >
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded mono-font"
                      style={{
                        color: ["#FFFFFF", "#F5F2F0"].includes(color.hex)
                          ? "#070808"
                          : "#FFFFFF",
                        background: ["#FFFFFF", "#F5F2F0"].includes(color.hex)
                          ? "rgba(0,0,0,0.06)"
                          : "rgba(0,0,0,0.25)",
                      }}
                    >
                      {color.hex}
                    </span>
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded"
                      style={{
                        color: ["#FFFFFF", "#F5F2F0"].includes(color.hex)
                          ? "#070808"
                          : "#F5F2F0",
                        background: ["#FFFFFF", "#F5F2F0"].includes(color.hex)
                          ? "rgba(0,0,0,0.06)"
                          : "rgba(255,255,255,0.1)",
                      }}
                    >
                      {color.name}
                    </span>
                  </div>
                  {/* Info block */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="gold">{color.role}</Badge>
                    </div>
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "var(--foreground)" }}
                    >
                      {color.usage}
                    </p>
                    <p
                      className="text-[12px] leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <span className="font-medium">Do not:</span> {color.doNot}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Palette Ratios - Stacked Bar */}
      <SubTitle>Palette Ratios</SubTitle>
      <div className="mb-6">
        <div
          className="flex rounded-lg overflow-hidden h-10 mb-3"
          style={{ border: "1px solid var(--border)" }}
        >
          {paletteRatios.map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-center relative"
              style={{
                width: `${r.pct}%`,
                background:
                  r.hex.length > 1
                    ? `linear-gradient(90deg, ${r.hex.join(", ")})`
                    : r.hex[0],
              }}
            >
              <span
                className="text-[10px] font-bold mono-font"
                style={{
                  color: r.pct >= 25 && r.hex[0] !== "#FFFFFF" && r.hex[0] !== "#F5F2F0"
                    ? "#FFFFFF"
                    : "#070808",
                }}
              >
                {r.pct}%
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {paletteRatios.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {r.hex.map((h, hi) => (
                  <div
                    key={hi}
                    className="w-3 h-3 rounded-full"
                    style={{ background: h, border: "1px solid var(--border)" }}
                  />
                ))}
              </div>
              <div>
                <div
                  className="text-[11px] font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {r.pct}% {r.colors}
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {r.purpose}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility Pairings */}
      <SubTitle>Accessibility Pairings</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {accessibilityPairings.map((p, i) => (
          <div
            key={i}
            className="rounded-lg p-3 flex items-center gap-3"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {/* Swatch pair */}
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center text-xs font-bold"
                style={{ background: p.bg, color: p.fg }}
              >
                Aa
              </div>
            </div>
            <div>
              <div
                className="text-[11px] font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {p.fgName} on {p.bgName}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="mono-font text-[11px] font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {p.ratio}
                </span>
                <Badge variant="green">{p.grade}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Retired color note */}
      <HighlightBlock variant="amber" label="RETIRED COLOR">
        <p>
          Slate #404747 has been retired. Replace with Dark Slate #1F2D35 or
          Blue Black #070808 in existing assets.
        </p>
      </HighlightBlock>
    </>
  );
}

/* ============================================================
   2. TYPOGRAPHY SUB-TAB
   ============================================================ */
function TypographyContent() {
  return (
    <>
      {/* Font specimens */}
      <SubTitle>Font Specimens</SubTitle>

      {/* Marcellus hero specimen */}
      <div
        className="rounded-lg p-8 mb-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="eyebrow mb-3" style={{ color: "var(--phycap-gold)" }}>
          MARCELLUS / HEADLINE
        </div>
        <div
          className="display-font mb-4"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
            color: "var(--foreground)",
          }}
        >
          Investing with Clinical Precision
        </div>
        <div
          className="display-font text-[20px] leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
          Ww Xx Yy Zz
        </div>
        <div
          className="display-font text-[20px] mt-1"
          style={{ color: "var(--muted-foreground)" }}
        >
          0 1 2 3 4 5 6 7 8 9
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge variant="green">Google Fonts (free)</Badge>
          <Badge variant="muted">Regular weight only</Badge>
        </div>
      </div>

      {/* Roboto body specimen */}
      <div
        className="rounded-lg p-8 mb-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="eyebrow mb-3" style={{ color: "var(--phycap-gold)" }}>
          ROBOTO / BODY
        </div>
        <p
          className="text-[16px] leading-[1.65] mb-4"
          style={{ color: "var(--foreground)", maxWidth: "600px" }}
        >
          PhyCap is the first physician-led venture capital fund built for
          physicians who want to invest in healthcare companies with clinical
          precision. The fund combines deep medical expertise with institutional
          investment discipline.
        </p>
        <div
          className="text-[18px] leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
          Ww Xx Yy Zz
        </div>
        <div
          className="text-[18px] mt-1"
          style={{ color: "var(--muted-foreground)" }}
        >
          0 1 2 3 4 5 6 7 8 9
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge variant="green">Google Fonts (free)</Badge>
          <Badge variant="muted">400 / 500 / 700</Badge>
        </div>
      </div>

      {/* Pairing example - LinkedIn post preview */}
      <SubTitle>Pairing Preview</SubTitle>
      <div
        className="rounded-lg overflow-hidden mb-8 max-w-md"
        style={{ border: "1px solid var(--border)" }}
      >
        <div
          className="p-6"
          style={{ background: "#122620" }}
        >
          <div
            className="eyebrow mb-2"
            style={{ color: "#D3B184", fontSize: "9px" }}
          >
            PHYCAP INSIGHT
          </div>
          <div
            className="display-font text-[22px] leading-tight mb-3"
            style={{ color: "#FFFFFF" }}
          >
            Precision Over Volume: Why Physician-Led Due Diligence Changes Everything
          </div>
          <div className="w-8 h-0.5 mb-3" style={{ background: "#D3B184" }} />
          <p
            className="text-[13px] leading-[1.6]"
            style={{ color: "#F5F2F0" }}
          >
            When the person evaluating a medical device has performed the
            procedure 3,000 times, the diligence conversation changes
            fundamentally.
          </p>
        </div>
        <div
          className="px-6 py-3 flex items-center justify-between"
          style={{ background: "#1F2D35" }}
        >
          <span className="text-[10px]" style={{ color: "#D3B184" }}>
            LinkedIn Post Preview
          </span>
          <img
            src={logoData.lightLogo}
            alt="PhyCap"
            className="h-5 opacity-70"
          />
        </div>
      </div>

      {/* Type hierarchy - visual ladder */}
      <SubTitle>Type Hierarchy</SubTitle>
      <div className="space-y-1 mb-8">
        {typeHierarchy.map((t, i) => (
          <div
            key={i}
            className="rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
            style={{
              background: "var(--card)",
              borderLeft: `3px solid ${
                t.useDisplayFont ? "var(--phycap-gold)" : "var(--border)"
              }`,
            }}
          >
            {/* Rendered specimen */}
            <div className="sm:w-1/2">
              <span
                className={t.useDisplayFont ? "display-font" : ""}
                style={{
                  fontSize: `${Math.min(t.renderSize, 40)}px`,
                  lineHeight: 1.2,
                  color: "var(--foreground)",
                  fontWeight: (t as Record<string, unknown>).fontWeight as number | undefined,
                  textTransform: (t as Record<string, unknown>).uppercase ? "uppercase" : undefined,
                  letterSpacing: (t as Record<string, unknown>).letterSpacing as string | undefined,
                }}
              >
                {t.level === "Stat Numbers" ? "$47M" : t.level}
              </span>
            </div>
            {/* Meta */}
            <div className="sm:w-1/2 flex flex-wrap gap-x-4 gap-y-1">
              <span
                className="text-[11px] mono-font"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.font}
              </span>
              <span
                className="text-[11px] mono-font"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.size}
              </span>
              <span
                className="text-[11px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.usage}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Typography rules */}
      <SubTitle>Rules</SubTitle>
      <div className="space-y-2 mb-6">
        {typographyRules.map((r, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-[13px]"
            style={{ color: "var(--foreground)" }}
          >
            <Check
              size={14}
              className="flex-shrink-0 mt-0.5"
              style={{ color: "var(--phycap-gold)" }}
            />
            <span>{r.rule}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   3. LOGO SUB-TAB
   ============================================================ */
function LogoContent() {
  return (
    <>
      {/* Logo display */}
      <SubTitle>Logo Variants</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Light logo on Forest */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="h-40 flex items-center justify-center p-6"
            style={{ background: "#122620" }}
          >
            <img
              src={logoData.lightLogo}
              alt="PhyCap light logo on Forest background"
              className="max-h-16"
            />
          </div>
          <div className="p-4" style={{ background: "var(--card)" }}>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Light Logo
            </div>
            <div
              className="text-[12px]"
              style={{ color: "var(--muted-foreground)" }}
            >
              For Forest, Blue Black, and Dark Slate backgrounds
            </div>
          </div>
        </div>

        {/* Dark logo on Cream */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="h-40 flex items-center justify-center p-6"
            style={{ background: "#F5F2F0" }}
          >
            <img
              src={logoData.darkLogo}
              alt="PhyCap dark logo on Cream background"
              className="max-h-16"
            />
          </div>
          <div className="p-4" style={{ background: "var(--card)" }}>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Dark Logo
            </div>
            <div
              className="text-[12px]"
              style={{ color: "var(--muted-foreground)" }}
            >
              For White and Cream backgrounds
            </div>
          </div>
        </div>
      </div>

      {/* Safe Zone visualization */}
      <SubTitle>Safe Zone</SubTitle>
      <div
        className="rounded-lg p-8 mb-8 flex items-center justify-center"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <div className="relative inline-block">
          {/* Dotted safe-zone border */}
          <div
            className="absolute inset-0 rounded"
            style={{
              border: "2px dashed var(--phycap-gold)",
              opacity: 0.5,
              margin: "-24px",
              padding: "24px",
              width: "calc(100% + 48px)",
              height: "calc(100% + 48px)",
              top: 0,
              left: 0,
            }}
          />
          {/* Safe zone labels */}
          <div
            className="absolute text-[9px] font-medium"
            style={{
              color: "var(--phycap-gold)",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            1X
          </div>
          <div
            className="absolute text-[9px] font-medium"
            style={{
              color: "var(--phycap-gold)",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            1X
          </div>
          <div
            className="absolute text-[9px] font-medium"
            style={{
              color: "var(--phycap-gold)",
              left: "-16px",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
            }}
          >
            1X
          </div>
          <div
            className="absolute text-[9px] font-medium"
            style={{
              color: "var(--phycap-gold)",
              right: "-16px",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
            }}
          >
            1X
          </div>
          <div
            className="px-6 py-4 rounded"
            style={{ background: "#122620" }}
          >
            <img
              src={logoData.lightLogo}
              alt="PhyCap logo with safe zone"
              className="h-10"
            />
          </div>
        </div>
      </div>
      <p
        className="text-[13px] mb-8 -mt-4"
        style={{ color: "var(--muted-foreground)" }}
      >
        {logoData.safeZone}
      </p>

      {/* Usage rules */}
      <SubTitle>Usage Rules</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {logoData.usageRules.map((r, i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start gap-2 mb-2">
              <Check
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.55 0.18 145)" }}
              />
              <span
                className="text-[12px]"
                style={{ color: "var(--foreground)" }}
              >
                {r.do}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <X
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.55 0.20 25)" }}
              />
              <span
                className="text-[12px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {r.dont}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Missing assets */}
      <SubTitle>Missing Assets Tracker</SubTitle>
      <div className="space-y-2 mb-6">
        {logoData.missingAssets.map((a, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 px-3 rounded-lg"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <span
              className="text-[13px]"
              style={{ color: "var(--foreground)" }}
            >
              {a.asset}
            </span>
            <Badge
              variant={
                a.priority === "Critical"
                  ? "red"
                  : a.priority === "Important"
                  ? "amber"
                  : "muted"
              }
            >
              {a.priority}
            </Badge>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   4. PHOTOGRAPHY SUB-TAB
   ============================================================ */
function PhotographyContent() {
  return (
    <>
      {/* Style Direction */}
      <KeyTakeaway label="STYLE DIRECTION" text={photographyData.styleDirection} />

      {/* Mood Board */}
      <SubTitle>Mood Board Direction</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {photographyData.moodBoard.map((ref) => (
          <div
            key={ref.id}
            className="rounded-lg p-4"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: "#122620", color: "#D3B184" }}
              >
                {ref.id}
              </div>
              <span
                className="text-[10px] font-medium"
                style={{ color: "var(--phycap-gold)" }}
              >
                {ref.keywords}
              </span>
            </div>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              {ref.description}
            </p>
          </div>
        ))}
      </div>

      {/* Lightroom Preset - Visual Reference Card */}
      <SubTitle>Lightroom Preset: PhyCap Editorial Warm</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {photographyData.lightroomPreset.sections.map((section, si) => (
          <div
            key={si}
            className="rounded-lg p-4"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="eyebrow mb-3"
              style={{ color: "var(--phycap-gold)" }}
            >
              {section.label}
            </div>
            <div className="space-y-1.5">
              {section.settings.map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {s.key}
                  </span>
                  <span
                    className="text-[12px] mono-font font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Copyable preset block */}
      <div
        className="rounded-lg overflow-hidden mb-8"
        style={{ border: "1px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: "#1a1a2e", borderBottom: "1px solid #2a2a3e" }}
        >
          <span className="text-[11px] font-medium" style={{ color: "#a0a0b0" }}>
            PhyCap Editorial Warm - Copy to Lightroom
          </span>
          <CopyButton text={photographyData.lightroomPresetRaw} label="Copy Preset" />
        </div>
        <pre
          className="p-4 text-[12px] leading-relaxed overflow-x-auto mono-font"
          style={{ background: "#0f0f1a", color: "#c8c8d8", margin: 0 }}
        >
          {photographyData.lightroomPresetRaw}
        </pre>
      </div>

      {/* Subject Do/Don't */}
      <SubTitle>Subject Guidelines</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* DO column */}
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--card)",
            borderTop: "3px solid oklch(0.55 0.18 145)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Check size={16} style={{ color: "oklch(0.55 0.18 145)" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Do
            </span>
          </div>
          <div className="space-y-2">
            {photographyData.subjectDo.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--foreground)" }}
              >
                <span style={{ color: "oklch(0.55 0.18 145)" }}>+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DON'T column */}
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--card)",
            borderTop: "3px solid oklch(0.55 0.20 25)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <X size={16} style={{ color: "oklch(0.55 0.20 25)" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Do Not
            </span>
          </div>
          <div className="space-y-2">
            {photographyData.subjectDont.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span style={{ color: "oklch(0.55 0.20 25)" }}>&ndash;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick visual test */}
      <HighlightBlock variant="gold" label="QUICK VISUAL TEST">
        <p>{photographyData.quickTest}</p>
      </HighlightBlock>
    </>
  );
}

/* ============================================================
   5. VIDEO SUB-TAB
   ============================================================ */
function VideoContent() {
  return (
    <>
      <KeyTakeaway label="STYLE DIRECTION" text={videoData.styleDirection} />

      {/* Video Specs */}
      <SubTitle>Video Types and Specs</SubTitle>
      <div className="overflow-x-auto rounded-lg mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              {["Type", "Duration", "Aspect", "Resolution", "Use Case"].map(
                (h, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 text-left font-medium text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {videoData.specs.map((s, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < videoData.specs.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <td
                  className="px-4 py-2.5 text-[13px] font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.type}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px] mono-font"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.duration}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px] mono-font"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.aspect}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px] mono-font"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.resolution}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {s.useCase}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Treatment Rules */}
      <SubTitle>Video Treatment Rules</SubTitle>
      <div className="space-y-2 mb-8">
        {videoData.treatmentRules.map((rule, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-2 text-[13px]"
            style={{
              color: "var(--foreground)",
              borderBottom: "1px solid oklch(0.50 0.01 200 / 0.05)",
            }}
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: "oklch(0.50 0.02 200 / 0.08)",
                color: "var(--muted-foreground)",
              }}
            >
              {i + 1}
            </span>
            <span>{rule}</span>
          </div>
        ))}
      </div>

      {/* Lower Third Template Mockup */}
      <SubTitle>Lower Third Template</SubTitle>
      <div
        className="rounded-lg p-8 mb-8 flex items-end justify-center"
        style={{
          background: "linear-gradient(135deg, #1F2D35 0%, #122620 100%)",
          minHeight: "200px",
          border: "1px solid var(--border)",
        }}
      >
        <div className="w-full max-w-sm">
          <div
            className="flex items-center justify-between px-4 py-3 rounded-sm"
            style={{ background: "#122620" }}
          >
            <div>
              <div
                className="display-font text-[16px]"
                style={{ color: "#D3B184", lineHeight: 1.2 }}
              >
                Dr. Sarah Chen
              </div>
              <div
                className="text-[12px] mt-0.5"
                style={{ color: "#F5F2F0" }}
              >
                General Partner, Cardiology
              </div>
            </div>
            <img
              src={logoData.lightLogo}
              alt="PhyCap"
              className="h-6 opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Video Do/Don't */}
      <SubTitle>Video Do / Do Not</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--card)",
            borderTop: "3px solid oklch(0.55 0.18 145)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Check size={16} style={{ color: "oklch(0.55 0.18 145)" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Do
            </span>
          </div>
          <div className="space-y-2">
            {videoData.videoDo.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--foreground)" }}
              >
                <span style={{ color: "oklch(0.55 0.18 145)" }}>+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--card)",
            borderTop: "3px solid oklch(0.55 0.20 25)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <X size={16} style={{ color: "oklch(0.55 0.20 25)" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Do Not
            </span>
          </div>
          <div className="space-y-2">
            {videoData.videoDont.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span style={{ color: "oklch(0.55 0.20 25)" }}>&ndash;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   6. TEMPLATES SUB-TAB
   ============================================================ */
function TemplatesContent() {
  return (
    <>
      <KeyTakeaway
        label="TEMPLATE SYSTEM"
        text="Every content format Kate produces follows a defined spec: dimensions, layout rules, typography placement, and color application. These templates ensure every asset reads as unmistakably PhyCap."
      />

      {/* Specs table */}
      <SubTitle>Format Specifications</SubTitle>
      <div className="overflow-x-auto rounded-lg mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              {["Format", "Dimensions", "Layout", "Notes"].map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-2.5 text-left font-medium text-xs"
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
            {templateSpecs.map((t, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < templateSpecs.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <td
                  className="px-4 py-2.5 text-[13px] font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.format}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px] mono-font"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.dimensions}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px]"
                  style={{ color: "var(--foreground)" }}
                >
                  {t.layout}
                </td>
                <td
                  className="px-4 py-2.5 text-[13px]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {t.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Template Mockups */}
      <SubTitle>Template Mockups</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Quote Card Mockup */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="eyebrow px-4 pt-3 pb-1" style={{ color: "var(--phycap-gold)" }}>
            QUOTE CARD (1080x1080)
          </div>
          <div className="p-4">
            <div
              className="rounded-md flex flex-col justify-between p-6"
              style={{
                background: "#122620",
                aspectRatio: "1",
                maxHeight: "240px",
              }}
            >
              <div
                className="display-font text-[36px] leading-none"
                style={{ color: "#D3B184" }}
              >
                &ldquo;
              </div>
              <div className="flex-1 flex items-center justify-center px-4">
                <p
                  className="display-font text-[13px] text-center leading-relaxed italic"
                  style={{ color: "#F5F2F0" }}
                >
                  When physicians invest in what they know, the outcomes speak for themselves.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="w-6 h-px mb-1.5" style={{ background: "#D3B184" }} />
                  <span className="text-[10px]" style={{ color: "#D3B184" }}>
                    Dr. James Park, GP
                  </span>
                </div>
                <img
                  src={logoData.lightLogo}
                  alt="PhyCap"
                  className="h-4 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stat Graphic Mockup */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="eyebrow px-4 pt-3 pb-1" style={{ color: "var(--phycap-gold)" }}>
            STAT GRAPHIC (1080x1080)
          </div>
          <div className="p-4">
            <div
              className="rounded-md flex flex-col items-center justify-center p-6"
              style={{
                background: "#F5F2F0",
                aspectRatio: "1",
                maxHeight: "240px",
              }}
            >
              <div
                className="display-font"
                style={{
                  fontSize: "56px",
                  color: "#D3B184",
                  lineHeight: 1,
                }}
              >
                $47M
              </div>
              <p
                className="text-[13px] text-center mt-2"
                style={{ color: "#070808" }}
              >
                Deployed across 12 portfolio companies
              </p>
              <p
                className="text-[9px] mt-3"
                style={{ color: "#1F2D35" }}
              >
                Source: PhyCap Q4 2025 Report
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Post Mockup */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="eyebrow px-4 pt-3 pb-1" style={{ color: "var(--phycap-gold)" }}>
            LINKEDIN POST (1200x1200)
          </div>
          <div className="p-4">
            <div
              className="rounded-md flex flex-col justify-between p-6"
              style={{
                background: "#FFFFFF",
                aspectRatio: "1",
                maxHeight: "240px",
                border: "1px solid #e0ddd8",
              }}
            >
              <div>
                <div
                  className="eyebrow mb-2"
                  style={{ color: "#D3B184", fontSize: "8px" }}
                >
                  PHYCAP PERSPECTIVE
                </div>
                <div
                  className="display-font text-[16px] leading-tight"
                  style={{ color: "#070808" }}
                >
                  Why Physician-Led Diligence Finds What Others Miss
                </div>
              </div>
              <div className="w-full h-px my-3" style={{ background: "#D3B184" }} />
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "#070808" }}
              >
                Clinical expertise changes the diligence conversation at a fundamental level.
              </p>
              <div className="flex items-center justify-end mt-2">
                <img
                  src={logoData.darkLogo}
                  alt="PhyCap"
                  className="h-4 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Graphic Mockup */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="eyebrow px-4 pt-3 pb-1" style={{ color: "var(--phycap-gold)" }}>
            EVENT GRAPHIC (1200x628)
          </div>
          <div className="p-4">
            <div
              className="rounded-md flex flex-col justify-between p-6 relative overflow-hidden"
              style={{
                background: "#122620",
                aspectRatio: "1200/628",
                maxHeight: "160px",
              }}
            >
              {/* Simulated photo overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(18,38,32,0.85), rgba(31,45,53,0.7))",
                }}
              />
              <div className="relative z-10">
                <div className="w-8 h-0.5 mb-2" style={{ background: "#D3B184" }} />
                <div
                  className="display-font text-[18px] leading-tight"
                  style={{ color: "#F5F2F0" }}
                >
                  Women's Health Nexus
                </div>
                <div
                  className="display-font text-[18px] leading-tight"
                  style={{ color: "#F5F2F0" }}
                >
                  2026
                </div>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px]" style={{ color: "#D3B184" }}>
                  May 15-16 / San Francisco, CA
                </span>
                <img
                  src={logoData.lightLogo}
                  alt="PhyCap"
                  className="h-4 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   7. AI GRAPHICS SUB-TAB
   ============================================================ */
function AIGraphicsContent() {
  return (
    <>
      <KeyTakeaway
        label="HOW TO USE"
        text="Copy the master prompt below and paste it at the beginning of any image generation request (Midjourney, DALL-E, Firefly, etc.). Then append the format-specific modifier for the content type you need."
      />

      {/* Master prompt */}
      <SubTitle>Master Prompt</SubTitle>
      <div
        className="rounded-lg overflow-hidden mb-8"
        style={{ border: "1px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: "#1a1a2e", borderBottom: "1px solid #2a2a3e" }}
        >
          <span
            className="text-[11px] font-medium"
            style={{ color: "#a0a0b0" }}
          >
            Master Prompt - Prepend to all image generation requests
          </span>
          <CopyButton text={aiGraphicsData.masterPrompt} label="Copy Prompt" />
        </div>
        <pre
          className="p-4 text-[12px] leading-relaxed overflow-x-auto whitespace-pre-wrap mono-font"
          style={{ background: "#0f0f1a", color: "#c8c8d8", margin: 0 }}
        >
          {aiGraphicsData.masterPrompt}
        </pre>
      </div>

      {/* Per-format modifiers */}
      <SubTitle>Format-Specific Modifiers</SubTitle>
      <div className="space-y-3 mb-8">
        {aiGraphicsData.formatModifiers.map((fm, i) => (
          <ExpandableCard key={i} title={fm.format} subtitle="Append to master prompt">
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="flex items-center justify-between px-3 py-1.5"
                style={{
                  background: "#1a1a2e",
                  borderBottom: "1px solid #2a2a3e",
                }}
              >
                <span
                  className="text-[10px]"
                  style={{ color: "#a0a0b0" }}
                >
                  {fm.format} modifier
                </span>
                <CopyButton text={fm.prompt} />
              </div>
              <pre
                className="p-3 text-[12px] leading-relaxed overflow-x-auto whitespace-pre-wrap mono-font"
                style={{
                  background: "#0f0f1a",
                  color: "#c8c8d8",
                  margin: 0,
                }}
              >
                {fm.prompt}
              </pre>
            </div>
          </ExpandableCard>
        ))}
      </div>

      {/* Negative Prompts */}
      <SubTitle>Negative Prompts</SubTitle>
      <div
        className="rounded-lg overflow-hidden mb-8"
        style={{ border: "1px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: "#1a1a2e", borderBottom: "1px solid #2a2a3e" }}
        >
          <span
            className="text-[11px] font-medium"
            style={{ color: "#a0a0b0" }}
          >
            Negative Prompts - Add to exclude unwanted elements
          </span>
          <CopyButton
            text={aiGraphicsData.negativePrompts}
            label="Copy"
          />
        </div>
        <pre
          className="p-4 text-[12px] leading-relaxed overflow-x-auto whitespace-pre-wrap mono-font"
          style={{ background: "#0f0f1a", color: "#e07070", margin: 0 }}
        >
          {aiGraphicsData.negativePrompts}
        </pre>
      </div>

      {/* Style modifiers */}
      <SubTitle>Style Modifiers by Mood</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {aiGraphicsData.styleModifiers.map((sm, i) => (
          <div
            key={i}
            className="rounded-lg p-4"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {sm.mood}
              </span>
              <CopyButton text={sm.modifier} />
            </div>
            <p
              className="text-[13px]"
              style={{ color: "var(--muted-foreground)" }}
            >
              {sm.modifier}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   8. ICONOGRAPHY SUB-TAB
   ============================================================ */
function IconographyContent() {
  return (
    <>
      <KeyTakeaway
        label="ICON LANGUAGE"
        text="PhyCap uses line icons exclusively. The visual language favors precision, systems thinking, and restrained elegance over decorative or playful illustration."
      />

      {/* Icon style specs */}
      <SubTitle>Icon Style</SubTitle>
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
      >
        {Object.entries(iconographyData.style).map(([key, value]) => (
          <div
            key={key}
            className="rounded-lg p-3"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="text-[10px] font-medium mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (s) => s.toUpperCase())}
            </div>
            <div
              className="text-[13px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Size scale */}
      <SubTitle>Size Scale</SubTitle>
      <div className="flex flex-wrap gap-6 items-end mb-8 p-6 rounded-lg" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        {iconographyData.sizes.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center"
              style={{ width: s.size, height: s.size }}
            >
              {i === 0 && <Circle size={16} style={{ color: "var(--phycap-forest)" }} />}
              {i === 1 && <Star size={20} style={{ color: "var(--phycap-forest)" }} />}
              {i === 2 && <Shapes size={24} style={{ color: "var(--phycap-forest)" }} />}
              {i === 3 && <Sparkles size={32} style={{ color: "var(--phycap-forest)" }} />}
            </div>
            <div className="text-center">
              <div
                className="mono-font text-[11px] font-bold"
                style={{ color: "var(--foreground)" }}
              >
                {s.size}
              </div>
              <div
                className="text-[10px]"
                style={{ color: "var(--muted-foreground)" }}
              >
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Color on dark/light demo */}
      <SubTitle>Color Context</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div
          className="rounded-lg p-6 flex items-center gap-4"
          style={{ background: "#F5F2F0", border: "1px solid var(--border)" }}
        >
          <Camera size={24} style={{ color: "#122620" }} />
          <Star size={24} style={{ color: "#122620" }} />
          <Shapes size={24} style={{ color: "#122620" }} />
          <Sparkles size={24} style={{ color: "#122620" }} />
          <span className="text-[11px] ml-auto" style={{ color: "#122620" }}>
            Forest on light
          </span>
        </div>
        <div
          className="rounded-lg p-6 flex items-center gap-4"
          style={{ background: "#122620" }}
        >
          <Camera size={24} style={{ color: "#D3B184" }} />
          <Star size={24} style={{ color: "#D3B184" }} />
          <Shapes size={24} style={{ color: "#FFFFFF" }} />
          <Sparkles size={24} style={{ color: "#FFFFFF" }} />
          <span className="text-[11px] ml-auto" style={{ color: "#D3B184" }}>
            Gold / White on dark
          </span>
        </div>
      </div>

      {/* Approved sets */}
      <SubTitle>Approved Icon Sets</SubTitle>
      <div className="space-y-2 mb-8">
        {iconographyData.approvedSets.map((set, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 px-4 rounded-lg"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <span
                className="text-[13px] font-medium"
                style={{ color: "var(--foreground)" }}
              >
                {set.name}
              </span>
              <span
                className="text-[12px] ml-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                {set.note}
              </span>
            </div>
            <Badge variant={i === 0 ? "green" : i === 1 ? "blue" : "gold"}>
              {set.role}
            </Badge>
          </div>
        ))}
      </div>

      {/* Usage rules */}
      <SubTitle>Usage Rules</SubTitle>
      <div className="space-y-2 mb-8">
        {iconographyData.usageRules.map((rule, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-[13px]"
            style={{ color: "var(--foreground)" }}
          >
            {rule.startsWith("Never") ? (
              <X
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.55 0.20 25)" }}
              />
            ) : (
              <Check
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--phycap-gold)" }}
              />
            )}
            <span>{rule}</span>
          </div>
        ))}
      </div>

      {/* Medical icon guidelines */}
      <SubTitle>Medical / Clinical Icon Guidelines</SubTitle>
      <div className="space-y-2 mb-6">
        {iconographyData.medicalGuidelines.map((g, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-[13px]"
            style={{ color: "var(--foreground)" }}
          >
            <AlertTriangle
              size={14}
              className="flex-shrink-0 mt-0.5"
              style={{ color: "oklch(0.70 0.15 70)" }}
            />
            <span>{g}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   MAIN TAB
   ============================================================ */
const subTabs = [
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "logo", label: "Logo" },
  { id: "photography", label: "Photography" },
  { id: "video", label: "Video" },
  { id: "templates", label: "Templates" },
  { id: "ai-graphics", label: "AI Graphics" },
  { id: "iconography", label: "Iconography" },
];

export default function DesignSystemTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="03"
        title="Design System"
        subtitle="Color, typography, logo, photography, video, templates, AI graphics, and iconography. The complete visual reference for producing on-brand PhyCap content."
      />

      <SubTabNav tabs={subTabs} defaultTab="color">
        {(active) => {
          if (active === "color") return <ColorContent />;
          if (active === "typography") return <TypographyContent />;
          if (active === "logo") return <LogoContent />;
          if (active === "photography") return <PhotographyContent />;
          if (active === "video") return <VideoContent />;
          if (active === "templates") return <TemplatesContent />;
          if (active === "ai-graphics") return <AIGraphicsContent />;
          if (active === "iconography") return <IconographyContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
