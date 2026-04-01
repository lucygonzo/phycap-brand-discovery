import { useState } from "react";
import {
  SectionHeader,
  StatCard,
  Badge,
} from "@/components/BrandComponents";
import { ClipboardCheck } from "lucide-react";

const sections = [
  { name: "00 Overview", completion: 75, blocker: "Kate Input" },
  { name: "01 Identity", completion: 60, blocker: "Kate Input" },
  { name: "02 Company", completion: 70, blocker: "Kate Input" },
  { name: "03 Visual", completion: 45, blocker: "Kate Input + Site Inspection" },
  { name: "04 Verbal", completion: 55, blocker: "Kate Input" },
  { name: "05 Services", completion: 50, blocker: "GP Interviews" },
  { name: "06 Audience", completion: 55, blocker: "Kate Input + GP Interviews" },
  { name: "07 Competitive", completion: 40, blocker: "Kate Input" },
  { name: "08 Digital", completion: 30, blocker: "Site Inspection" },
  { name: "09 Go-to-Market", completion: 35, blocker: "Kate Input + GP Interviews" },
  { name: "10 Journey", completion: 30, blocker: "Kate Input + GP Interviews" },
  { name: "11 Product", completion: 40, blocker: "Kate Input" },
  { name: "12 Portfolio", completion: 20, blocker: "Kate Input" },
  { name: "13 Workspace", completion: 80, blocker: "Minor gaps only" },
  { name: "14 Gap Analysis", completion: 70, blocker: "Post-meeting update" },
  { name: "15 Revenue Model", completion: 25, blocker: "Kate Input + GP Interviews" },
  { name: "16 Decision Log", completion: 85, blocker: "Minor gaps only" },
  { name: "17 Report Card", completion: 90, blocker: "Post-meeting update" },
  { name: "18 GP Content", completion: 65, blocker: "GP Interviews" },
];

const overallCompletion = Math.round(
  sections.reduce((sum, s) => sum + s.completion, 0) / sections.length
);

type BlockerFilter = "all" | "Kate Input" | "Site Inspection" | "GP Interviews";

const blockerFilters: { label: string; value: BlockerFilter }[] = [
  { label: "All", value: "all" },
  { label: "Kate Input", value: "Kate Input" },
  { label: "Site Inspection", value: "Site Inspection" },
  { label: "GP Interviews", value: "GP Interviews" },
];

function completionColor(pct: number): string {
  if (pct >= 70) return "oklch(0.55 0.18 145)";
  if (pct >= 40) return "oklch(0.70 0.15 70)";
  return "oklch(0.55 0.20 25)";
}

function completionBadge(pct: number): "green" | "amber" | "red" {
  if (pct >= 70) return "green";
  if (pct >= 40) return "amber";
  return "red";
}

export default function ReportCardTab() {
  const [filter, setFilter] = useState<BlockerFilter>("all");

  const filtered = filter === "all"
    ? sections
    : sections.filter((s) => s.blocker.includes(filter));

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="13"
        title="Report Card"
        subtitle="Section-by-section completion tracker for the Brand Strategy Vault."
      />

      {/* Large overall stat + summary row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard value={`${overallCompletion}%`} label="Overall Vault Completion" note="Average across all 19 sections." accent />
        <StatCard value="19" label="Total Sections" note="Overview (00) through GP Content (18)." />
        <StatCard value="8" label="Ready After Kate Meeting" note="Can be finalized after April 3." />
        <StatCard value="6" label="Need GP Interviews" note="Require direct GP input." />
      </div>

      {/* Filterable pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {blockerFilters.map((bf) => {
          const isActive = filter === bf.value;
          return (
            <button
              key={bf.value}
              onClick={() => setFilter(bf.value)}
              className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all"
              style={{
                background: isActive ? "var(--card)" : "var(--muted)",
                color: isActive ? "var(--phycap-gold)" : "var(--muted-foreground)",
                border: isActive ? "1px solid var(--phycap-gold)" : "1px solid var(--border)",
              }}
            >
              {bf.label}
              {bf.value !== "all" && (
                <span className="ml-1.5 opacity-60">
                  ({sections.filter((s) => s.blocker.includes(bf.value)).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3-column compact grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
        {filtered.map((s, i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium truncate" style={{ color: "var(--foreground)" }}>
                {s.name}
              </span>
              <span
                className="mono-font text-xs font-bold flex-shrink-0 ml-2"
                style={{ color: completionColor(s.completion) }}
              >
                {s.completion}%
              </span>
            </div>

            {/* Mini progress bar */}
            <div className="h-1.5 rounded-full mb-2" style={{ background: "var(--muted)" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${s.completion}%`, background: completionColor(s.completion) }}
              />
            </div>

            {/* Blocker badge */}
            <Badge variant={completionBadge(s.completion)}>
              {s.blocker}
            </Badge>
          </div>
        ))}
      </div>

      {/* Compact icon legend */}
      <div
        className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[10px]"
        style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
      >
        <ClipboardCheck size={12} style={{ color: "var(--phycap-gold)" }} />
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.55 0.18 145)" }} /> 70%+
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.70 0.15 70)" }} /> 40-69%
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.55 0.20 25)" }} /> Below 40%
        </span>
      </div>
    </div>
  );
}
