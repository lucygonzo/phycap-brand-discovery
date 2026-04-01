import type { ReactNode } from "react";

const forest = "var(--phycap-forest)";
const gold = "var(--phycap-gold)";
const border = "var(--border)";
const mutedText = "var(--muted-foreground)";

/* ============================================================
   SECTION HEADER
   ============================================================ */
export function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="eyebrow mb-2" style={{ color: gold }}>
        {number}
      </div>
      <h1 className="display-font" style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--foreground)", lineHeight: 1.1 }}>
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2" style={{ color: mutedText, fontSize: "15px", maxWidth: "600px", lineHeight: 1.65 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   KEY TAKEAWAY
   ============================================================ */
export function KeyTakeaway({ text, label }: { text: string; label?: string }) {
  return (
    <div
      className="rounded-lg p-5 mb-6"
      style={{ background: "var(--card)", borderLeft: `3px solid ${gold}` }}
    >
      {label && <div className="eyebrow mb-2" style={{ color: gold }}>{label}</div>}
      <p style={{ color: "var(--foreground)", fontSize: "15px", lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}

/* ============================================================
   CARD
   ============================================================ */
type CardVariant = "default" | "forest" | "gold" | "amber" | "red";

const accentColors: Record<CardVariant, string> = {
  default: border,
  forest: forest,
  gold: gold,
  amber: "oklch(0.75 0.15 70)",
  red: "oklch(0.55 0.20 25)",
};

export function Card({
  title,
  children,
  variant = "default",
  icon,
}: {
  title?: string;
  children: ReactNode;
  variant?: CardVariant;
  icon?: ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-5"
      style={{
        background: "var(--card)",
        borderTop: `2px solid ${accentColors[variant]}`,
        boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)",
      }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <span style={{ color: accentColors[variant] }}>{icon}</span>}
          <h3 className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{title}</h3>
        </div>
      )}
      <div style={{ color: "var(--foreground)", fontSize: "14px", lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

/* ============================================================
   STAT CARD
   ============================================================ */
export function StatCard({
  value,
  label,
  note,
  accent,
}: {
  value: string;
  label: string;
  note?: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        background: accent ? forest : "var(--card)",
      }}
    >
      <div
        className="display-font mb-1"
        style={{
          fontSize: "28px",
          color: accent ? gold : "var(--foreground)",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        className="text-xs font-medium"
        style={{ color: accent ? "oklch(0.85 0.01 60)" : mutedText }}
      >
        {label}
      </div>
      {note && (
        <div
          className="text-[10px] mt-1.5 leading-snug"
          style={{ color: accent ? "oklch(0.65 0.01 60)" : "oklch(0.50 0.02 200)" }}
        >
          {note}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   DIVIDER
   ============================================================ */
export function Divider() {
  return <hr className="my-8" style={{ borderColor: border }} />;
}

/* ============================================================
   SUBTITLE
   ============================================================ */
export function SubTitle({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4 mt-8">
      {icon && <span style={{ color: gold }}>{icon}</span>}
      <h2 className="font-medium text-base" style={{ color: "var(--foreground)" }}>{children}</h2>
      <div className="flex-1 h-px ml-3" style={{ background: border }} />
    </div>
  );
}

/* ============================================================
   BADGE
   ============================================================ */
type BadgeVariant = "green" | "amber" | "red" | "blue" | "muted" | "gold";

const badgeColors: Record<BadgeVariant, { bg: string; text: string; border: string }> = {
  green: { bg: "oklch(0.70 0.15 145 / 0.12)", text: "oklch(0.45 0.15 145)", border: "oklch(0.70 0.15 145 / 0.25)" },
  amber: { bg: "oklch(0.75 0.12 70 / 0.12)", text: "oklch(0.50 0.12 70)", border: "oklch(0.75 0.12 70 / 0.25)" },
  red: { bg: "oklch(0.55 0.15 25 / 0.12)", text: "oklch(0.45 0.18 25)", border: "oklch(0.55 0.15 25 / 0.25)" },
  blue: { bg: "oklch(0.60 0.12 250 / 0.12)", text: "oklch(0.45 0.12 250)", border: "oklch(0.60 0.12 250 / 0.25)" },
  muted: { bg: "oklch(0.50 0.02 200 / 0.08)", text: mutedText, border: "oklch(0.50 0.02 200 / 0.15)" },
  gold: { bg: "oklch(0.77 0.07 72 / 0.15)", text: "oklch(0.55 0.10 72)", border: "oklch(0.77 0.07 72 / 0.30)" },
};

export function Badge({ children, variant = "muted" }: { children: ReactNode; variant?: BadgeVariant }) {
  const c = badgeColors[variant];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {children}
    </span>
  );
}

/* ============================================================
   DATA TABLE
   ============================================================ */
export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "var(--muted)" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-2.5 text-left font-medium text-xs"
                style={{ color: mutedText, borderBottom: `1px solid ${border}` }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: ri < rows.length - 1 ? `1px solid ${border}` : "none" }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2.5 text-[13px]" style={{ color: "var(--foreground)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================
   HIGHLIGHT BLOCK
   ============================================================ */
export function HighlightBlock({
  children,
  variant = "default",
  label,
}: {
  children: ReactNode;
  variant?: "default" | "forest" | "gold" | "amber";
  label?: string;
}) {
  const accentMap = {
    default: border,
    forest: forest,
    gold: gold,
    amber: "oklch(0.75 0.15 70)",
  };
  return (
    <div
      className="pl-4 mb-4"
      style={{
        borderLeft: `3px solid ${accentMap[variant]}`,
      }}
    >
      {label && <div className="eyebrow mb-1.5" style={{ color: accentMap[variant], fontSize: "9px" }}>{label}</div>}
      <div style={{ color: "var(--foreground)", fontSize: "14px", lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

/* ============================================================
   INFO ROW
   ============================================================ */
export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2.5" style={{ borderBottom: `1px solid oklch(0.50 0.01 200 / 0.05)` }}>
      <span className="text-xs font-medium flex-shrink-0 w-32" style={{ color: mutedText }}>{label}</span>
      <span className="text-sm" style={{ color: "var(--foreground)" }}>{value}</span>
    </div>
  );
}

/* ============================================================
   SCORE BAR (for perception scores)
   ============================================================ */
export function ScoreBar({ label, score, max = 10 }: { label: string; score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color = score >= 6 ? "oklch(0.55 0.18 145)" : score >= 4 ? "oklch(0.70 0.15 70)" : "oklch(0.55 0.20 25)";
  const statusLabel = score >= 6 ? "Green" : score >= 4 ? "Amber" : "Red";

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{label}</span>
        <div className="flex items-center gap-2">
          <Badge variant={score >= 6 ? "green" : score >= 4 ? "amber" : "red"}>{statusLabel}</Badge>
          <span className="mono-font text-xs font-bold" style={{ color }}>{score}/{max}</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "var(--muted)" }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

/* ============================================================
   QUOTE BLOCK (for LP testimonials)
   ============================================================ */
export function QuoteBlock({ quote, attribution, credential }: { quote: string; attribution: string; credential?: string }) {
  return (
    <div className="rounded-lg p-5 mb-4" style={{ background: "var(--phycap-cream)" }}>
      <div className="display-font text-3xl mb-2" style={{ color: gold, lineHeight: 0.5 }}>"</div>
      <p className="italic text-sm mb-3" style={{ color: "var(--foreground)", lineHeight: 1.7 }}>{quote}</p>
      <div className="flex items-center gap-2">
        <div className="w-6 h-px" style={{ background: gold }} />
        <span className="text-xs font-medium" style={{ color: forest }}>{attribution}</span>
        {credential && <span className="text-xs" style={{ color: mutedText }}>{credential}</span>}
      </div>
    </div>
  );
}
