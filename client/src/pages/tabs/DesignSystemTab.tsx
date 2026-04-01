import {
  colorPalette,
  paletteRatios,
  typographyData,
  typeHierarchy,
  logoData,
  designPrinciples,
  competitorVisualMap,
  photoTreatment,
} from "@/lib/visualIdentityData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  Divider,
  SubTitle,
  DataTable,
  InfoRow,
  HighlightBlock,
  Badge,
} from "@/components/BrandComponents";
import SubTabNav from "@/components/SubTabNav";
import { Palette, Type, Image, Layers, Eye, Camera } from "lucide-react";

/* ---- Color sub-tab ---- */
function ColorContent() {
  return (
    <>
      <KeyTakeaway
        label="PALETTE POSITION"
        text="The Forest green + Gold + Cream palette with desaturated B&W clinical photography occupies a position no competitor has claimed: the 'editorial authority + membership exclusivity' quadrant."
      />

      {/* Color swatches */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {colorPalette.filter((c) => !c.retired).map((color, i) => (
          <div key={i} className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <div
              className="h-20 flex items-end p-2"
              style={{ background: color.hex }}
            >
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded"
                style={{
                  color: ["#FFFFFF", "#F5F2F0"].includes(color.hex) ? "#070808" : "#FFFFFF",
                  background: ["#FFFFFF", "#F5F2F0"].includes(color.hex) ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.3)",
                }}
              >
                {color.hex}
              </span>
            </div>
            <div className="p-3" style={{ background: "var(--card)" }}>
              <div className="font-medium text-sm mb-1" style={{ color: "var(--foreground)" }}>
                {color.name}
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                {color.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Color detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {colorPalette.filter((c) => !c.retired).map((color, i) => (
          <Card key={i} title={`${color.name} ${color.hex}`}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full" style={{ background: color.hex, border: "1px solid var(--border)" }} />
                <Badge variant="gold">{color.role}</Badge>
              </div>
              <p className="text-xs">{color.usage}</p>
              <p className="text-xs italic" style={{ color: "var(--muted-foreground)" }}>
                Do not: {color.doNot}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Palette Ratios */}
      <SubTitle>Palette Ratios</SubTitle>
      <DataTable
        headers={["Proportion", "Colors", "Purpose"]}
        rows={paletteRatios.map((r) => [r.range, r.colors, r.purpose])}
      />

      {/* Retired color note */}
      <HighlightBlock variant="amber" label="RETIRED COLOR">
        <p>Slate #404747 has been retired. Replace with Dark Slate #1F2D35 or Blue Black #070808 in existing assets.</p>
      </HighlightBlock>
    </>
  );
}

/* ---- Typography sub-tab ---- */
function TypographyContent() {
  return (
    <>
      <SubTitle icon={<Type size={16} />}>Typography</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card title="Headlines: Marcellus" variant="forest">
          <div className="space-y-2">
            <Badge variant="green">Google Fonts (free)</Badge>
            <p className="text-xs">{typographyData.headline.classification}</p>
            <p>{typographyData.headline.whyItWorks}</p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Weights: {typographyData.headline.weights.join(", ")}
            </p>
          </div>
        </Card>
        <Card title="Body: Roboto" variant="forest">
          <div className="space-y-2">
            <Badge variant="green">Google Fonts (free)</Badge>
            <p className="text-xs">{typographyData.body.classification}</p>
            <p>{typographyData.body.whyItWorks}</p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Weights: {typographyData.body.weights.join(", ")}
            </p>
          </div>
        </Card>
      </div>

      <SubTitle>Typography Hierarchy</SubTitle>
      <DataTable
        headers={["Level", "Font", "Size", "Usage"]}
        rows={typeHierarchy.map((t) => [t.level, t.font, t.size, t.usage])}
      />
    </>
  );
}

/* ---- Logo sub-tab ---- */
function LogoContent() {
  return (
    <>
      <SubTitle icon={<Image size={16} />}>Logo Usage</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {logoData.files.map((f, i) => (
          <Card key={i} title={f.name} variant="default">
            <p>{f.use}</p>
          </Card>
        ))}
      </div>

      <SubTitle>Logo Anatomy</SubTitle>
      <div className="mb-6">
        {logoData.anatomy.map((a, i) => (
          <InfoRow key={i} label={a.element} value={a.description} />
        ))}
        <InfoRow label="Safe Zone" value={logoData.safeZone} />
      </div>

      <HighlightBlock variant="amber" label="MISSING LOGO ASSETS">
        <ul className="list-disc list-inside space-y-1">
          {logoData.missingAssets.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </HighlightBlock>

      <Divider />

      {/* Design Principles */}
      <SubTitle icon={<Layers size={16} />}>Design Principles</SubTitle>
      <KeyTakeaway
        label="VISUAL TARGET"
        text="PhyCap's visual identity sits at the intersection of medical editorial authority, luxury membership exclusivity, and modern venture capital design."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {designPrinciples.map((dp, i) => (
          <Card key={i} title={dp.register} variant={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>
            <div className="space-y-2">
              <p>{dp.description}</p>
              <p className="text-xs italic" style={{ color: "var(--muted-foreground)" }}>
                References: {dp.references}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Competitor visual */}
      <SubTitle icon={<Eye size={16} />}>Competitor Visual Map</SubTitle>
      <DataTable
        headers={["Competitor", "Palette", "Visual Feel"]}
        rows={competitorVisualMap.map((c) => [c.competitor, c.palette, c.feel])}
      />
      <HighlightBlock variant="forest" label="PHYCAP'S GREENSPACE">
        <p>
          No competitor occupies the Forest green + Gold + Cream territory with desaturated B&W clinical photography.
          Competitors skew toward tech-startup freshness (Scrub Capital, Rock Health) or institutional corporate (LRVHealth, SV Health).
          PhyCap sits alone in the "editorial authority + membership exclusivity" quadrant.
        </p>
      </HighlightBlock>
    </>
  );
}

/* ---- Photography sub-tab ---- */
function PhotographyContent() {
  return (
    <>
      <SubTitle icon={<Camera size={16} />}>Photography Treatment</SubTitle>
      <KeyTakeaway label="PHOTO GOAL" text={photoTreatment.goal} />

      <DataTable
        headers={["Setting", "Value"]}
        rows={photoTreatment.quickRef.map((s) => [s.setting, s.value])}
      />

      <SubTitle>Photography "Do Not" Rules</SubTitle>
      <div className="space-y-2 mb-8">
        {photoTreatment.doNotRules.map((r, i) => (
          <HighlightBlock key={i} variant="amber">
            <p>{r}</p>
          </HighlightBlock>
        ))}
      </div>
    </>
  );
}

/* ---- AI Graphics sub-tab (placeholder) ---- */
function AIGraphicsContent() {
  return (
    <>
      <SubTitle>AI-Generated Graphics</SubTitle>
      <HighlightBlock variant="gold" label="COMING SOON">
        <p>
          AI graphics guidelines, prompt templates, and quality standards for PhyCap visual content
          will be documented here once the design system is fully ratified.
        </p>
      </HighlightBlock>
    </>
  );
}

/* ---- Main Design System Tab ---- */
const subTabs = [
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "logo", label: "Logo" },
  { id: "photography", label: "Photography" },
  { id: "ai-graphics", label: "AI Graphics" },
];

export default function DesignSystemTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="03"
        title="Design System"
        subtitle="Color palette, typography, logo usage, design principles, and photography treatment."
      />

      <SubTabNav tabs={subTabs} defaultTab="color">
        {(active) => {
          if (active === "color") return <ColorContent />;
          if (active === "typography") return <TypographyContent />;
          if (active === "logo") return <LogoContent />;
          if (active === "photography") return <PhotographyContent />;
          if (active === "ai-graphics") return <AIGraphicsContent />;
          return null;
        }}
      </SubTabNav>
    </div>
  );
}
