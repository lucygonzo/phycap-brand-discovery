import {
  brandMeta,
  overviewStats,
  overviewStrengths,
  overviewChallenges,
  overviewOpportunities,
  lpTestimonials,
} from "@/lib/brandData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  QuoteBlock,
} from "@/components/BrandComponents";
import { TrendingUp, AlertCircle, Lightbulb, MessageSquare } from "lucide-react";

const gold = "var(--phycap-gold)";
const forest = "var(--phycap-forest)";

export default function OverviewTab() {
  return (
    <div className="p-6 max-w-5xl">
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

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {overviewStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      {/* Key Takeaway */}
      <KeyTakeaway label="KEY TAKEAWAY" text={brandMeta.keyTakeaway} />

      <Divider />

      {/* Strengths */}
      <SubTitle icon={<TrendingUp size={16} />}>Strengths</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewStrengths.map((s, i) => (
          <Card key={i} title={s.title} variant="forest">
            <p>{s.body}</p>
          </Card>
        ))}
      </div>

      {/* Challenges */}
      <SubTitle icon={<AlertCircle size={16} />}>Challenges</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewChallenges.map((c, i) => (
          <Card key={i} title={c.title} variant="amber">
            <p>{c.body}</p>
          </Card>
        ))}
      </div>

      {/* Opportunities */}
      <SubTitle icon={<Lightbulb size={16} />}>Opportunities</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {overviewOpportunities.map((o, i) => (
          <Card key={i} title={o.title} variant="gold">
            <p>{o.body}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* LP Testimonials */}
      <SubTitle icon={<MessageSquare size={16} />}>LP Testimonials</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {lpTestimonials.map((t, i) => (
          <QuoteBlock key={i} quote={t.quote} attribution={t.name} />
        ))}
      </div>
    </div>
  );
}
