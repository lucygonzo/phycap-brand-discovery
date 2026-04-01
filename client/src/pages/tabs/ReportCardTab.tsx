import { useState } from "react";
import {
  SectionHeader,
  StatCard,
  Badge,
  HighlightBlock,
} from "@/components/BrandComponents";
import { ExpandableCard } from "@/components/SubTabNav";
import { ClipboardCheck, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

interface SectionScore {
  name: string;
  completion: number;
  context: string;
  whatsWorking: string;
  toImprove: string;
  blocker: string;
}

const sections: SectionScore[] = [
  {
    name: "Dashboard",
    completion: 75,
    context: "Executive summary, proof points, and team highlights are strong. Company profile is comprehensive. The GP roster covers all 10 members with clinical specialties and diligence implications.",
    whatsWorking: "Proof point stat boxes with sourced data. GP lifecycle coverage narrative. Paul and Robin MHCDS research fully integrated.",
    toImprove: "Team photos needed for GP cards. FortySix Capital co-brand decision still pending from Kate. Founding story needs direct quotes from Paul and Dutch (podcast or interview transcripts).",
    blocker: "Kate Input",
  },
  {
    name: "Identity",
    completion: 60,
    context: "Insider Precision archetype is developed with evidence. Core narrative and positioning replacement are drafted. Personality traits have specific examples. Messaging hierarchy covers all three audiences.",
    whatsWorking: "Archetype framework grounded in competitive evidence, not generic theory. Replacement positioning statement written and ready for review.",
    toImprove: "Kate needs to confirm or adjust the Insider Precision direction. The personality spectrum needs validation against how the GPs actually talk (GP interview dependency). Messaging hierarchy needs real-world testing with LP and founder audiences.",
    blocker: "Kate Input",
  },
  {
    name: "Design System",
    completion: 45,
    context: "Color palette is confirmed and documented with hex, RGB, and OKLCh values. Typography confirmed as Marcellus + Roboto from site inspection. GP sub-brand colors verified for WCAG accessibility. Logo files identified but asset gaps remain.",
    whatsWorking: "Confirmed palette with usage rules. Photo treatment preset is a standalone deliverable. AI graphics master prompt is copy-paste ready. GP color system passes WCAG AA/AAA.",
    toImprove: "SVG logo files do not exist yet (only PNG from CDN). Icon-only mark, stacked lockup, and favicon all missing. Design principles section needs visual reference boards. Competitor visual greenspace analysis is directional but needs live screenshots.",
    blocker: "Kate Input + Site Inspection",
  },
  {
    name: "Voice",
    completion: 55,
    context: "Voice guidelines written with NEJM/JAMA meets Equinox framing. Do/don't examples are PhyCap-specific. Copy blocks (one-liner through fund overview paragraph) are ready to use. What-not-to-say list targets specific phrases from the current site.",
    whatsWorking: "The retire list names the exact vague phrases and provides replacement direction. Copy blocks are production-ready. Tone attributes have concrete examples.",
    toImprove: "Messaging matrix needs real audience testing. The gap between how Paul writes vs. how Robin writes vs. how the company page should write needs sharper rules. Supporting taglines at multiple lengths need Kate's approval.",
    blocker: "Kate Input",
  },
  {
    name: "Gaps",
    completion: 70,
    context: "Perception scores across 8 dimensions are rated with color coding. Both funnel audits (LP and Founder) map specific friction points. 13 gaps in the inventory each have severity ratings and action directions.",
    whatsWorking: "The funnel audits identify the LEARN/INVEST/PITCH page inaccessibility as the primary conversion blocker. Gap inventory is actionable (each gap has a direction, not just a label).",
    toImprove: "Perception scores are estimated from the Raw Discovery and site audit, not from external brand perception research. Funnel friction points need validation from actual LP and founder conversion data (which PhyCap may not yet track). Post-Kate meeting, several gaps may be resolved or re-prioritized.",
    blocker: "Post-meeting update",
  },
  {
    name: "Audience & Journey",
    completion: 50,
    context: "Two primary segments defined with testimonial language from actual LPs. Personas grounded in real frustration patterns (structural exclusion, not just returns). Journey maps cover 6 stages for both audiences. TAM/SAM/OAM uses verified market data.",
    whatsWorking: "LP persona built from Brian Russell, Emil Engels, and Maxwell Ginsberg testimonials. The 'repatriation of power' insight is specific and differentiating. Market sizing uses FSMB, Medscape, and Rock Health data.",
    toImprove: "Founder persona is constructed from general market knowledge, not PhyCap-specific founder interviews. Journey maps identify friction but have no conversion rate data to quantify the leaks. Psychographic media habits are reasonable estimates, not surveyed.",
    blocker: "Kate Input + GP Interviews",
  },
  {
    name: "Competitive",
    completion: 65,
    context: "7 competitors profiled across the 6-category framework with expandable cards. Scrub Capital deep dive is comprehensive (1,000+ members, 13 portfolio companies, unicorn, 4 GPs, exact brand colors). SWOT, positioning matrix, and whitespace analysis are complete.",
    whatsWorking: "Scrub Capital profile is the deepest competitive analysis in the vault. Positioning matrix confirms PhyCap's empty upper-right quadrant. Whitespace evidence is backed by 5 specific data points.",
    toImprove: "No primary research on competitor LP terms (fees, carry, minimums). Founder perception data is missing (how founders rank these competitors). Scrub Capital's community engagement depth could be tracked over time. LOUD Capital not yet profiled.",
    blocker: "Ongoing monitoring",
  },
  {
    name: "Thesis & Portfolio",
    completion: 35,
    context: "Three investment pillars fully developed with the 'moment of truth' framing. Diligence process makes the GP roster's specialties operational. Five differentiators each backed by evidence. Portfolio section has only BioReact as a confirmed company.",
    whatsWorking: "The diligence process section is the most concrete expression of 'Investing with Clinical Precision' in the vault. Differentiator durability assessment is honest about what is and is not defensible.",
    toImprove: "BioReact is the only public portfolio company, limiting showcase capability. The portfolio template is a placeholder until more investments close. Fund I deployment pace and reserve strategy are not confirmed. Innovation Circle growth targets need validation.",
    blocker: "Kate Input + GP Interviews",
  },
  {
    name: "Go-to-Market",
    completion: 35,
    context: "GTM fit score, growth motions, channel rankings, and launch timeline are structured. Website audit identifies specific page-level issues. Social audit covers LinkedIn company page and all GP profiles. SEO baseline with keyword gap analysis is complete.",
    whatsWorking: "Channel prioritization is specific (LinkedIn GP brands as primary channel, events second). The 3-phase launch timeline is anchored to Friday's Kate meeting. Website audit names the accordion team page and inaccessible LEARN/INVEST/PITCH pages as top issues.",
    toImprove: "Content strategy pillar ownership needs GP buy-in. SEO projections (18-24 months to own 'physician-led venture capital') need budget commitment. Social audit recommendations need prioritization from Kate. Website redesign scope is undefined.",
    blocker: "Kate Input + GP Interviews",
  },
  {
    name: "Content Network",
    completion: 65,
    context: "Hub-spoke architecture designed. All 4 GP sub-brands built with color systems, voice guidelines, secondary typefaces, sample posts, visual direction, and AI graphics prompts. LinkedIn specs per GP are detailed.",
    whatsWorking: "GP homebase pages are the most production-ready section of the vault. Sample posts are written in each GP's voice and ready for Kate's review. AI graphics prompt modifiers are copy-paste ready. Accessibility-verified color systems for all 4 GPs.",
    toImprove: "No GP has reviewed their own profile or sample posts yet. Posting cadences are recommendations, not confirmed commitments. Content calendar needs its first real monthly plan (currently structural template only). Cross-posting rules need testing in practice.",
    blocker: "GP Interviews",
  },
  {
    name: "Revenue",
    completion: 25,
    context: "Standard VC fund economics (management fee, carried interest) documented at a general level. Physician LP economics framed from their perspective. Guidance on what belongs in Brand HQ vs. internal-only materials.",
    whatsWorking: "The Brand HQ vs. internal content boundary is clearly defined. Physician LP perspective (minimum investment, hold period, context of student debt) is well-framed.",
    toImprove: "PhyCap-specific fee structure and carry terms are not confirmed (treated as confidential). Fund II path and ancillary revenue are speculative. LP economics need actual PhyCap terms, not industry averages.",
    blocker: "Kate Input + Confidential",
  },
  {
    name: "Actions & Decisions",
    completion: 80,
    context: "Three action phases anchor to Friday's Kate meeting. Phase 1 has 5 specific decision items. 7 confirmed decisions documented. 7 pending decisions have owners, urgency levels, and recommendations.",
    whatsWorking: "Phase 1 items are the most time-sensitive and clearly scoped. Confirmed decisions (palette, logo files, GP cadences, em dash prohibition) create a foundation. Pending decisions each have a recommended direction.",
    toImprove: "Post-Kate meeting, Phase 1 items move to confirmed or adjusted. Phase 2 and 3 timelines may shift based on Friday's decisions. Decision authority framework needs Kate's sign-off.",
    blocker: "Post-meeting update",
  },
  {
    name: "Report Card",
    completion: 90,
    context: "This tracker itself. Updated in real-time as sections are completed or blocked. Blocker analysis categorizes what is waiting on Kate, site inspection, or GP interviews.",
    whatsWorking: "Comprehensive coverage of all vault sections. Blocker categorization helps prioritize the Kate meeting agenda.",
    toImprove: "Completion percentages will shift after Friday's meeting. Some sections may jump 15-20% once Kate confirms pending decisions.",
    blocker: "Post-meeting update",
  },
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

function StatusIcon({ pct }: { pct: number }) {
  if (pct >= 70) return <CheckCircle2 size={14} style={{ color: "oklch(0.55 0.18 145)" }} />;
  if (pct >= 40) return <TrendingUp size={14} style={{ color: "oklch(0.70 0.15 70)" }} />;
  return <AlertTriangle size={14} style={{ color: "oklch(0.55 0.20 25)" }} />;
}

export default function ReportCardTab() {
  const [filter, setFilter] = useState<BlockerFilter>("all");

  const filtered = filter === "all"
    ? sections
    : sections.filter((s) => s.blocker.includes(filter));

  const greenCount = sections.filter((s) => s.completion >= 70).length;
  const amberCount = sections.filter((s) => s.completion >= 40 && s.completion < 70).length;
  const redCount = sections.filter((s) => s.completion < 40).length;

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="13"
        title="Report Card"
        subtitle="How ready is this Brand HQ to guide real decisions."
      />

      {/* Framing block */}
      <div
        className="rounded-lg p-4 mb-6"
        style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
      >
        <div className="flex items-start gap-3">
          <ClipboardCheck size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--phycap-gold)" }} />
          <div>
            <p className="text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
              This tracks the Brand HQ deliverable, not PhyCap's brand health.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              A section at 45% means our documentation still has gaps that need your input or asset delivery to close. It does not mean that area of PhyCap's brand is weak. The actual brand health assessment lives in the <strong>Gaps</strong> tab, where perception scores and funnel audits evaluate PhyCap as a company. This page answers a different question: "How complete is each section of this Brand HQ as a working tool for Kate and the team?"
            </p>
          </div>
        </div>
      </div>

      {/* Overall stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard value={`${overallCompletion}%`} label="Deliverable Readiness" note="Average documentation completeness across all 13 sections." accent />
        <StatCard value={`${greenCount}`} label="Ready to Use (70%+)" note="These sections can guide decisions today." />
        <StatCard value={`${amberCount}`} label="Needs Input (40-69%)" note="Foundation built. Waiting on Kate, GPs, or asset delivery." />
        <StatCard value={`${redCount}`} label="In Development (<40%)" note="Framework in place. Requires confirmed data or approvals to complete." />
      </div>

      {/* Filter pills */}
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

      {/* Section cards with context */}
      <div className="space-y-2.5 mb-6">
        {filtered.map((s, i) => (
          <ExpandableCard
            key={i}
            title={s.name}
            subtitle={s.context.split(".")[0] + "."}
            badge={
              <div className="flex items-center gap-2">
                <StatusIcon pct={s.completion} />
                <span
                  className="mono-font text-xs font-bold"
                  style={{ color: completionColor(s.completion) }}
                >
                  {s.completion}%
                </span>
              </div>
            }
          >
            <div className="space-y-3">
              {/* Progress bar */}
              <div className="h-2 rounded-full" style={{ background: "var(--muted)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${s.completion}%`, background: completionColor(s.completion) }}
                />
              </div>

              {/* Context */}
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {s.context}
              </p>

              {/* What's working + To improve side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <HighlightBlock variant="forest" label="WHAT'S WORKING">
                  <p className="text-xs">{s.whatsWorking}</p>
                </HighlightBlock>
                <HighlightBlock variant="amber" label="TO IMPROVE">
                  <p className="text-xs">{s.toImprove}</p>
                </HighlightBlock>
              </div>

              {/* Blocker */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium uppercase" style={{ color: "var(--muted-foreground)", letterSpacing: "0.05em" }}>
                  Primary blocker:
                </span>
                <Badge variant={completionBadge(s.completion)}>{s.blocker}</Badge>
              </div>
            </div>
          </ExpandableCard>
        ))}
      </div>

      {/* Legend */}
      <div
        className="flex items-center gap-4 px-4 py-2.5 rounded-lg text-[10px]"
        style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
      >
        <ClipboardCheck size={12} style={{ color: "var(--phycap-gold)" }} />
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={10} style={{ color: "oklch(0.55 0.18 145)" }} /> 70%+ Ready to use
        </span>
        <span className="flex items-center gap-1.5">
          <TrendingUp size={10} style={{ color: "oklch(0.70 0.15 70)" }} /> 40-69% Needs input
        </span>
        <span className="flex items-center gap-1.5">
          <AlertTriangle size={10} style={{ color: "oklch(0.55 0.20 25)" }} /> Below 40% In development
        </span>
      </div>
    </div>
  );
}
