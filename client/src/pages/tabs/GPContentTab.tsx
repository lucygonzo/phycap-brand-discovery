import {
  gpContentMeta,
  gpContentStats,
  gpProfiles,
  contentSystemLayers,
  companyPageRoles,
  linkedInBannerSpecs,
  photoTreatment,
} from "@/lib/gpContentData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  StatCard,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  InfoRow,
  Badge,
} from "@/components/BrandComponents";
import SubTabNav from "@/components/SubTabNav";
import { Users, Layers, Megaphone, Image, User, MessageSquare, Calendar } from "lucide-react";

const gold = "var(--phycap-gold)";

function GPProfileCard({ gp }: { gp: typeof gpProfiles[0] }) {
  return (
    <div
      className="rounded-lg overflow-hidden mb-6"
      style={{ background: "var(--card)", border: "1px solid var(--border)" }}
    >
      {/* Profile Header */}
      <div
        className="p-5"
        style={{
          background: "var(--phycap-forest)",
          borderBottom: `2px solid ${gold}`,
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="font-medium text-base" style={{ color: "var(--phycap-cream)" }}>
              {gp.name}
            </h3>
            <p className="text-xs mt-1" style={{ color: gold }}>{gp.title}</p>
            <p className="text-xs mt-0.5" style={{ color: "oklch(0.65 0.01 60)" }}>
              {gp.specialty} | {gp.base}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <Badge variant="gold">{gp.cadence}</Badge>
            <span className="text-[10px]" style={{ color: "oklch(0.55 0.03 60)" }}>
              Banner: {gp.bannerConcept}
            </span>
          </div>
        </div>
        <p className="text-xs mt-2 italic" style={{ color: "oklch(0.72 0.03 60)" }}>
          "{gp.bannerTagline}"
        </p>
      </div>

      <div className="p-5 space-y-4">
        {/* Credentials and Support */}
        <div>
          <InfoRow label="Credentials" value={gp.credentials} />
          <InfoRow label="Support Model" value={gp.supportModel} />
          <InfoRow label="Best Format" value={gp.bestFormat} />
        </div>

        {/* Voice Traits */}
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>VOICE TRAITS</p>
          <div className="flex flex-wrap gap-1.5">
            {gp.voiceTraits.map((trait, i) => (
              <Badge key={i} variant="green">{trait}</Badge>
            ))}
          </div>
        </div>

        {/* Voice Guardrails */}
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>GUARDRAILS</p>
          <div className="flex flex-wrap gap-1.5">
            {gp.voiceGuardrails.map((g, i) => (
              <Badge key={i} variant="red">{g}</Badge>
            ))}
          </div>
        </div>

        {/* Owned Territories */}
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>OWNED CONTENT TERRITORIES</p>
          <ul className="space-y-1">
            {gp.ownedTerritories.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span style={{ color: gold, marginTop: "2px" }}>&#8226;</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shared Territories */}
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>SHARED TERRITORIES</p>
          <div className="flex flex-wrap gap-1.5">
            {gp.sharedTerritories.map((t, i) => (
              <Badge key={i} variant="muted">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Never Post */}
        <HighlightBlock variant="amber" label="NEVER POST">
          <p>{gp.neverPost}</p>
        </HighlightBlock>

        {/* Topic Ideas */}
        <div>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>TOPIC IDEAS (NEXT 30 DAYS)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {gp.topicIdeas.map((topic, i) => (
              <div
                key={i}
                className="text-xs px-2.5 py-1.5 rounded"
                style={{ background: "var(--muted)", color: "var(--foreground)" }}
              >
                {i + 1}. {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Sub-tab content sections ---- */

function OverviewContent() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {gpContentStats.map((stat, i) => (
          <StatCard key={i} value={stat.value} label={stat.label} note={stat.note} accent={i === 0} />
        ))}
      </div>

      <KeyTakeaway label="KEY TAKEAWAY" text={gpContentMeta.keyTakeaway} />

      <SubTitle icon={<Layers size={16} />}>Content System Architecture</SubTitle>
      <div className="space-y-3 mb-6">
        {contentSystemLayers.map((layer, i) => (
          <HighlightBlock key={i} variant="forest" label={`LAYER ${i + 1}`}>
            <p className="font-medium mb-1">{layer.layer}</p>
            <p>{layer.description}</p>
          </HighlightBlock>
        ))}
      </div>

      <SubTitle icon={<MessageSquare size={16} />}>Content Quality Standards</SubTitle>
      <Card title="Every PhyCap-Attributed Post Must Meet These Standards" variant="forest">
        <ul className="space-y-2">
          {[
            "Rooted in clinical experience or evidence (not abstract opinion)",
            "Connected to the investment thesis (even loosely)",
            "Free of em dashes",
            "Free of generic healthcare-AI hype without PhyCap-specific clinical insight",
            "Written in the GP's authentic voice (not homogenized across all four)",
            "Includes a perspective that only a practicing physician could credibly offer",
          ].map((std, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span style={{ color: gold, marginTop: "2px" }}>&#10003;</span>
              <span>{std}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

function CalendarContent() {
  return (
    <>
      <SubTitle icon={<Megaphone size={16} />}>Company Page vs. GP Profile Roles</SubTitle>
      <DataTable
        headers={["Content Type", "Company Page", "GP Profiles"]}
        rows={companyPageRoles.map((r) => [r.contentType, r.companyPage, r.gpRole])}
      />

      <div className="mt-8">
        <SubTitle icon={<Layers size={16} />}>Cross-Posting Protocol</SubTitle>
        <div className="space-y-3">
          <HighlightBlock variant="forest" label="COMPANY PAGE ENGAGEMENT">
            <p>Within 2 hours of a GP post going live, the company page engages (like, comment, or repost with commentary).</p>
          </HighlightBlock>
          <HighlightBlock variant="gold" label="GP AMPLIFICATION">
            <p>GPs amplify company page content on a staggered 4 to 8 hour schedule to avoid clustering.</p>
          </HighlightBlock>
          <HighlightBlock variant="forest" label="CROSS-GP COMMENTARY">
            <p>GPs comment on each other's posts with substantive clinical perspective, not generic praise.</p>
          </HighlightBlock>
        </div>
      </div>

      <div className="mt-8">
        <SubTitle>Monthly Planning Cadence</SubTitle>
        <Card variant="default">
          <div className="space-y-2 text-sm">
            <p><strong>Week 1:</strong> Planning doc published with 4 to 5 topic clusters, thesis connections, and GP assignments.</p>
            <p><strong>Week 2-3:</strong> GP-adapted briefs distributed. Paul gets scaffolding, Vipul gets idea prompts, Robin gets near-final drafts, Tim gets light briefs.</p>
            <p><strong>Week 4:</strong> Monthly review of per-GP engagement, inbound inquiries, topic performance, and network growth.</p>
          </div>
        </Card>
      </div>
    </>
  );
}

function LinkedInContent() {
  return (
    <>
      <SubTitle icon={<Image size={16} />}>Banner Specifications</SubTitle>
      <Card title="LinkedIn Banner Specs" variant="default">
        <InfoRow label="Dimensions" value={linkedInBannerSpecs.dimensions} />
        <InfoRow label="Format" value={linkedInBannerSpecs.format} />
        <InfoRow label="Safe Zone" value={linkedInBannerSpecs.safeZone} />
      </Card>

      <div className="mt-6">
        <SubTitle>Photo Treatment (PhyCap Preset)</SubTitle>
        <Card title="Headshot Processing Parameters" variant="default">
          {photoTreatment.map((p, i) => (
            <InfoRow key={i} label={p.parameter} value={p.setting} />
          ))}
        </Card>
      </div>

      <div className="mt-6">
        <SubTitle>Bio Template Structure</SubTitle>
        <HighlightBlock variant="forest" label="BIO FORMAT">
          <div className="space-y-2 text-sm">
            <p><strong>Line 1:</strong> Clinical title and specialty</p>
            <p><strong>Line 2:</strong> GP role at PhyCap</p>
            <p><strong>Line 3:</strong> Key credential (MHCDS, MBA, PhD)</p>
            <p><strong>Line 4:</strong> Banner tagline in italics</p>
          </div>
        </HighlightBlock>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {gpProfiles.map((gp, i) => (
            <Card key={i} title={gp.name} variant={i === 0 ? "forest" : "default"}>
              <InfoRow label="Banner Concept" value={gp.bannerConcept} />
              <InfoRow label="Tagline" value={gp.bannerTagline} />
              <InfoRow label="Cadence" value={gp.cadence} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default function GPContentTab() {
  const gpTabs = [
    { id: "overview", label: "Overview" },
    { id: "paul", label: "Paul Slosar" },
    { id: "vipul", label: "Vipul Kella" },
    { id: "robin", label: "Robin Noble" },
    { id: "tim", label: "Tim Martens" },
    { id: "calendar", label: "Calendar" },
    { id: "linkedin", label: "LinkedIn" },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number={gpContentMeta.sectionNumber}
        title={gpContentMeta.title}
        subtitle={gpContentMeta.subtitle}
      />

      <SubTabNav tabs={gpTabs}>
        {(activeSubTab) =>
          activeSubTab === "overview" ? (
            <OverviewContent />
          ) : activeSubTab === "paul" ? (
            <GPProfileCard gp={gpProfiles[0]} />
          ) : activeSubTab === "vipul" ? (
            <GPProfileCard gp={gpProfiles[1]} />
          ) : activeSubTab === "robin" ? (
            <GPProfileCard gp={gpProfiles[2]} />
          ) : activeSubTab === "tim" ? (
            <GPProfileCard gp={gpProfiles[3]} />
          ) : activeSubTab === "calendar" ? (
            <CalendarContent />
          ) : activeSubTab === "linkedin" ? (
            <LinkedInContent />
          ) : null
        }
      </SubTabNav>
    </div>
  );
}
