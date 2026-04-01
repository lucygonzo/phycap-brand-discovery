# AI Graphics Master Prompt

## For Kate: Copy-Paste Master Style Prompt

This is a ready-to-use prompt block. Prepend it to any image generation request in Claude, Midjourney, ChatGPT/DALL-E, or other AI image tools to get on-brand PhyCap output.

---

## THE MASTER PROMPT

Copy everything between the START and END markers below:

--- START PHYCAP MASTER STYLE PROMPT ---

BRAND: PhyCap (Physicians Capital Fund). Physician-led venture capital. Visual identity: medical editorial authority meets private membership exclusivity. Think NEJM journal cover meets Equinox marketing meets J.P. Morgan Private Bank.

COLOR PALETTE (strict):
- Primary dark: Forest green #122620 (deep, rich, nearly black-green)
- Accent: Gold #D3B184 (muted, warm, used sparingly for emphasis and labels only)
- Dark workhorse: Blue Black #070808 (for text and secondary dark areas)
- Supporting dark: Dark Slate #1F2D35 (for depth and layering)
- Light backgrounds: Cream #F5F2F0 (warm off-white) and White #FFFFFF
- NEVER use: bright greens, teals, blues, reds, oranges, purples, or any saturated color outside this palette
- Gold appears in 5-10% of the composition at most. It is the precision signal, not a primary color.

TYPOGRAPHY RULES:
- Headlines: Marcellus (Google Font). Classical Roman serif, elegant, high contrast, authoritative. Only one weight available (Regular), so use size and color for emphasis.
- Body text: Roboto (Google Font). Neo-grotesque sans-serif. Clean, readable, professional. Use Regular (400) for body, Medium (500) for UI, Bold (700) for emphasis.
- Labels and categories: ALL CAPS, small size, wide letter-spacing, in Gold on dark backgrounds or Forest on light backgrounds.
- Stat numbers (168+, 500+, etc.): Display size, serif or bold sans, treated as graphic elements.
- NEVER use: script fonts, decorative fonts, handwriting, condensed type, or more than two typefaces.

PHOTOGRAPHY STYLE:
- Heavily desaturated, approaching near-monochrome but not fully black and white.
- High contrast with lifted shadows (matte/film quality, not crushed blacks).
- Cool color temperature with a subtle Forest green tint in the shadows.
- Documentary/editorial feel: real clinical environments, real instruments, real hands.
- Subjects: surgeons in masks, clinical hands at work, medical instruments, operating room perspectives, stethoscopes, surgical fields. Close-up, intimate, human-focused.
- NEVER use: stock photo compositions (handshakes, whiteboards, diverse-group-around-table), warm/golden lighting, fully saturated colors, tech-futuristic imagery (holograms, digital overlays, glowing interfaces), or prominently visible faces (except designated GP headshots).

AI IMAGE GENERATION STYLE:
- Photorealistic with editorial quality. Not illustrative, not painterly, not cartoon.
- Desaturated, high-contrast, dramatic lighting (directional light from above or side).
- Shallow depth of field preferred (subject in focus, background soft).
- Composition: rule of thirds, generous negative space, room for text overlay.
- If generating abstract or graphic elements: use the PhyCap palette strictly. Geometric, minimal, architectural. No organic shapes, no gradients into off-palette colors.

NEGATIVE PROMPTS (things to explicitly avoid):
- No bright or saturated colors
- No warm/golden/amber lighting
- No smiling faces in clinical imagery
- No stock photo compositions
- No tech-futuristic elements (holograms, digital overlays, glowing screens)
- No decorative or script typography
- No rounded, playful, or startup-style design elements
- No emoji or casual graphic elements
- No gradients that introduce colors outside the palette
- No lens flare, bokeh circles, or dramatic lighting effects

LAYOUT AND COMPOSITION:
- Editorial grid structure: clear hierarchy, generous whitespace, structured alignment.
- Text placement: headlines serif, body sans, labels uppercase tracked.
- Dark sections use Forest #122620 as background with White or Gold text.
- Light sections use Cream #F5F2F0 or White with Blue Black text and Forest accents.
- Gold #D3B184 appears only as accent: labels, divider lines, small graphic elements. Never as a background.

BRAND VOICE IN TEXT-CONTAINING GRAPHICS:
- Precise, clinical, evidence-based language. No exclamation points.
- Medical journal authority meets private membership tone.
- No startup jargon, no hype language, no "revolutionary" or "game-changing."
- Use specific numbers, named specialties, and concrete claims.
- No em dashes in any text.

--- END PHYCAP MASTER STYLE PROMPT ---

---

## Per-Format Addendums

Append these to the master prompt when generating specific formats:

### LinkedIn Post Image (1200x627 or 1080x1080)
```
FORMAT: LinkedIn post graphic. 1200x627px landscape or 1080x1080px square.
Layout: Large headline text (serif) over Forest #122620 background. Gold #D3B184
eyebrow label above headline. Room for 2-3 lines of supporting text in sans-serif
White. PhyCap logo in bottom corner (small, white version). Clean, minimal,
editorial. Looks like a medical journal article preview card.
```

### LinkedIn Banner (1584x396)
```
FORMAT: LinkedIn profile/company banner. 1584x396px.
Layout: Wide horizontal composition. Left third: desaturated clinical photography
(close-up surgical or clinical scene). Right two-thirds: Forest #122620 solid or
gradient with headline text in white serif. Gold accent line separating photo
from text area. PhyCap wordmark in bottom right corner. Minimal, authoritative.
```

### Email Header (600x200)
```
FORMAT: Email header graphic. 600x200px.
Layout: Forest #122620 background. PhyCap logo centered or left-aligned in
white. Optional: Gold #D3B184 thin line below logo. Minimal text (newsletter
title or date only). Clean, institutional, recognizable.
```

### Stat Graphic (1080x1080)
```
FORMAT: Stat highlight square. 1080x1080px.
Layout: Forest #122620 background. Large stat number (e.g., "168+") centered
in white serif font at display size. Gold #D3B184 eyebrow label above the
number (e.g., "YEARS OF CLINICAL EXPERIENCE"). 1-2 lines of context text
below in small white sans-serif. PhyCap logo small in corner. The number
dominates. Everything else is secondary.
```

### Quote Card (1080x1080)
```
FORMAT: Testimonial/quote card. 1080x1080px.
Layout: Cream #F5F2F0 background. Quote text in Blue Black #070808 serif
font, left-aligned, with oversized opening quotation mark in Gold #D3B184.
Attribution line below in Forest green sans-serif (name, MD credential,
specialty). Thin Gold line separating quote from attribution. PhyCap logo
small in bottom corner. Clean, editorial, respects the speaker.
```

### Event Graphic (1080x1350 or 1200x627)
```
FORMAT: Event promotion graphic. 1080x1350px portrait or 1200x627px landscape.
Layout: Top section: desaturated clinical photography or venue photography with
Forest #122620 overlay at 60% opacity. Event name in white serif headline.
Date, location, and details in Gold #D3B184 and white sans-serif. Bottom
section: Forest solid with sponsor logos in white and PhyCap logo.
Formal, institutional, signals significance.
```

---

## Gaps in This Section

- The master prompt has not been tested across all AI image generation platforms. Claude, Midjourney v6+, and DALL-E 3 respond differently to style prompts. Kate should test the prompt on her preferred platform and note any adjustments needed for consistent output.
- ~~Exact font names (when confirmed) should replace the "similar to" references in the typography section.~~ **RESOLVED.** Marcellus and Roboto confirmed and updated.
- The prompt does not include instructions for generating GP headshot treatments or team photography. If AI-assisted headshot editing is needed, a separate prompt for portrait treatment should be created.
- Video thumbnail templates are not included. If PhyCap produces video content, a thumbnail prompt addendum should be added.
