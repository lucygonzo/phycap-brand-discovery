import {
  voiceNorthStar,
  toneAttributes,
  sentenceRules,
  messagingMatrix,
  copyBlocks,
  whatNotToSay,
  taglines,
} from "@/lib/verbalIdentityData";
import {
  SectionHeader,
  KeyTakeaway,
  Card,
  Divider,
  SubTitle,
  DataTable,
  HighlightBlock,
  Badge,
  InfoRow,
  QuoteBlock,
} from "@/components/BrandComponents";
import { Mic, MessageSquare, Hash, Ban, BookOpen, Bookmark } from "lucide-react";

export default function VerbalTab() {
  return (
    <div className="p-6 max-w-5xl">
      <SectionHeader
        number="04"
        title="Verbal Identity"
        subtitle="Voice guidelines, messaging matrix, copy blocks, taglines, and the language retirement list."
      />

      {/* Voice North Star */}
      <KeyTakeaway label="VOICE NORTH STAR" text={voiceNorthStar} />

      <Divider />

      {/* Tone Attributes */}
      <SubTitle icon={<Mic size={16} />}>Tone Attributes</SubTitle>
      <div className="space-y-4 mb-8">
        {toneAttributes.map((ta, i) => (
          <Card key={i} title={ta.attribute} variant="forest">
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <HighlightBlock variant="forest" label="DO THIS">
                  <p>{ta.doThis}</p>
                </HighlightBlock>
                <HighlightBlock variant="amber" label="DO NOT">
                  <p>{ta.dontDoThis}</p>
                </HighlightBlock>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <HighlightBlock variant="gold" label="GOOD EXAMPLE">
                  <p className="italic">{ta.exampleGood}</p>
                </HighlightBlock>
                <HighlightBlock label="BAD EXAMPLE">
                  <p className="italic line-through" style={{ opacity: 0.7 }}>{ta.exampleBad}</p>
                </HighlightBlock>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sentence Rules */}
      <SubTitle icon={<BookOpen size={16} />}>Sentence Structure Rules</SubTitle>
      <div className="space-y-2 mb-8">
        {sentenceRules.map((r, i) => (
          <HighlightBlock key={i} variant="forest">
            <p>{r}</p>
          </HighlightBlock>
        ))}
      </div>

      <Divider />

      {/* Messaging Matrix */}
      <SubTitle icon={<MessageSquare size={16} />}>Messaging Matrix</SubTitle>
      <div className="space-y-4 mb-8">
        {messagingMatrix.map((m, i) => (
          <Card key={i} title={m.audience} variant={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>
            <div className="space-y-2">
              <InfoRow label="Headline" value={m.headline} />
              <InfoRow label="Proof Point" value={m.proofPoint} />
              <InfoRow label="Emotional Driver" value={m.emotionalDriver} />
              <InfoRow label="CTA" value={m.ctaLanguage} />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {m.keyPhrases.map((kp, ki) => (
                  <Badge key={ki} variant="gold">{kp}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Copy Blocks */}
      <SubTitle icon={<Bookmark size={16} />}>Ready-to-Use Copy Blocks</SubTitle>
      <div className="space-y-4 mb-8">
        {copyBlocks.map((cb, i) => (
          <Card key={i} title={cb.label} variant="default">
            <p>{cb.text}</p>
          </Card>
        ))}
      </div>

      <Divider />

      {/* Taglines */}
      <SubTitle icon={<Hash size={16} />}>Taglines</SubTitle>
      <KeyTakeaway label="PRIMARY TAGLINE (CONFIRMED)" text={taglines.primary.text + " " + taglines.primary.note} />

      <SubTitle>Supporting Taglines</SubTitle>
      <DataTable
        headers={["Context", "Tagline"]}
        rows={taglines.supporting.map((t) => [t.context, t.tagline])}
      />

      <SubTitle>GP Personal Taglines</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {taglines.gpTaglines.map((g, i) => (
          <QuoteBlock key={i} quote={g.tagline} attribution={g.gp} />
        ))}
      </div>

      <SubTitle>Content Series Names</SubTitle>
      <DataTable
        headers={["Series Name", "Purpose"]}
        rows={taglines.contentSeries.map((c) => [c.name, c.purpose])}
      />

      <Divider />

      {/* What Not to Say */}
      <SubTitle icon={<Ban size={16} />}>What Not to Say</SubTitle>
      <HighlightBlock variant="gold" label="UNIVERSAL RULE">
        <p>
          If a phrase could be copied onto any healthcare fund's website without modification,
          it is not specific enough for PhyCap. Every sentence should contain at least one element
          only PhyCap can claim: a named credential, a specific number, a clinical specialty,
          or a process detail.
        </p>
      </HighlightBlock>

      <DataTable
        headers={["Retire This", "Why It Fails", "Replacement Direction"]}
        rows={whatNotToSay.map((w) => [w.phrase, w.problem, w.replacement])}
      />
    </div>
  );
}
