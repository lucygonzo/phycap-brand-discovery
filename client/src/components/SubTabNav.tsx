import { useState } from "react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";

interface SubTab {
  id: string;
  label: string;
}

interface SubTabNavProps {
  tabs: SubTab[];
  defaultTab?: string;
  children: (activeSubTab: string) => React.ReactNode;
}

export default function SubTabNav({ tabs, defaultTab, children }: SubTabNavProps) {
  const [active, setActive] = useState(defaultTab || tabs[0].id);

  return (
    <div>
      {/* Pill navigation */}
      <div
        className="flex flex-wrap gap-1.5 mb-6 p-1 rounded-lg"
        style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="px-3 py-1.5 rounded-md text-[13px] font-medium transition-all"
              style={{
                background: isActive ? "var(--card)" : "transparent",
                color: isActive ? gold : "var(--muted-foreground)",
                boxShadow: isActive ? "0 1px 3px oklch(0 0 0 / 0.08)" : "none",
                borderBottom: isActive ? `2px solid ${gold}` : "2px solid transparent",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div key={active} className="tab-content-enter">
        {children(active)}
      </div>
    </div>
  );
}

/* ============================================================
   EXPANDABLE CARD (for GP profiles, decision items, etc.)
   ============================================================ */
export function ExpandableCard({
  title,
  subtitle,
  badge,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-lg overflow-hidden transition-all"
      style={{ background: "var(--card)", boxShadow: "0 1px 3px oklch(0 0 0 / 0.04)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{title}</div>
            {subtitle && <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{subtitle}</div>}
          </div>
          {badge}
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "var(--muted-foreground)",
          }}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="pt-3" style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--foreground)" }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   JOURNEY STEP (horizontal flow component)
   ============================================================ */
export function JourneyFlow({
  stages,
  activeStage,
  onStageClick,
}: {
  stages: { id: string; label: string; status?: "green" | "amber" | "red" }[];
  activeStage: string;
  onStageClick: (id: string) => void;
}) {
  const statusColors = {
    green: "oklch(0.55 0.18 145)",
    amber: "oklch(0.70 0.15 70)",
    red: "oklch(0.55 0.20 25)",
  };

  return (
    <div className="flex items-center gap-0 overflow-x-auto pb-2 mb-4">
      {stages.map((stage, i) => {
        const isActive = activeStage === stage.id;
        const dotColor = stage.status ? statusColors[stage.status] : "var(--muted-foreground)";
        return (
          <div key={stage.id} className="flex items-center">
            <button
              onClick={() => onStageClick(stage.id)}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all"
              style={{
                background: isActive ? "var(--card)" : "transparent",
                color: isActive ? gold : "var(--muted-foreground)",
                border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                boxShadow: isActive ? "0 1px 3px oklch(0 0 0 / 0.06)" : "none",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: dotColor }}
              />
              {stage.label}
            </button>
            {i < stages.length - 1 && (
              <div className="w-6 h-px mx-0.5 flex-shrink-0" style={{ background: "var(--border)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
