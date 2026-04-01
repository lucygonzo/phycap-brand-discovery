# Photo Treatment Preset

## For Kate: PhyCap Photography Treatment

This file is a standalone deliverable. Use these settings in Lightroom, Lightroom Mobile, or any photo editor that supports equivalent adjustments. The goal is to produce the desaturated, high-contrast, Forest-graded clinical photography visible on phycapfund.com.

---

## Lightroom / Lightroom Mobile Settings

### Basic Panel
- **White Balance**: Slightly cool. Temperature: -5 to -10 (shift toward blue-green, away from warm/orange). Tint: +5 (slight magenta to prevent green cast).
- **Exposure**: 0 to +0.3 (keep exposure neutral, do not brighten).
- **Contrast**: +25 to +35 (significant contrast boost for the dramatic, documentary feel).
- **Highlights**: -40 to -50 (pull back blown highlights, retain detail in bright areas like scrubs, lights).
- **Shadows**: +15 to +25 (open shadows slightly, keep them present but readable).
- **Whites**: -10 to -15 (keep the brightest whites from clipping).
- **Blacks**: -20 to -30 (crush the deepest blacks slightly for that editorial density).

### Tone Curve
- **Shadows**: Lift the shadow point slightly (raise the bottom-left anchor 5-10%). This prevents pure black and creates the matte/film quality visible in the site photography.
- **Highlights**: Pull down slightly to contain brightness.
- **Overall curve**: Gentle S-curve with a lifted shadow floor.

### Color / HSL
- **Saturation**: Global saturation -40 to -55. This is the most important setting. PhyCap photography is heavily desaturated, approaching near-monochrome while retaining a trace of color temperature.
- **Green Hue**: Shift greens toward teal/Forest (-10 to -15 on the hue slider).
- **Green Saturation**: -30 to -40 (further desaturate any green present, preventing clinical greens from becoming distracting).
- **Orange/Red Saturation**: -20 to -30 (desaturate skin tones to prevent warmth from dominating the cool clinical feel).
- **Blue Saturation**: -15 to -20 (desaturate ambient blues from scrubs, surgical masks, equipment).

### Color Grading (Split Toning)
- **Shadows**: Hue 163 (Forest green), Saturation 8-12. This is the Forest green color grade in the shadows that gives PhyCap photography its brand-specific tone. The shadows should carry a barely perceptible green tint that connects the photo to the brand palette.
- **Midtones**: Hue 60-70 (warm/gold), Saturation 3-5. A trace of warmth in the midtones prevents the image from feeling cold. This is subtle.
- **Highlights**: Hue 40-50 (warm cream), Saturation 3-5. The lightest areas carry a faint cream warmth. Not yellow. Cream.
- **Balance**: -20 to -30 (bias the color grading toward shadows, where the Forest green tint lives).

### Detail
- **Sharpening**: Amount 30-40, Radius 1.0, Detail 25. Moderate sharpening for the documentary texture.
- **Noise Reduction**: Luminance 10-15. Light noise reduction to preserve texture.

### Effects
- **Vignetting**: -10 to -15. Subtle darkening of corners for the editorial, intimate feel. Not heavy.
- **Grain**: Amount 10-15, Size 25, Roughness 50. Optional. Light film grain adds texture consistent with the documentary/editorial aesthetic. Skip if the image is already textured.

---

## The Five "Do Not" Rules for PhyCap Photography

### 1. Do not use warm photography.
PhyCap images should feel cool, clinical, and restrained. No golden hour lighting, no warm color casts, no amber tones. If a photo feels "cozy" or "inviting," it is too warm. The warmth in PhyCap's brand comes from Gold accents and community language, not from photography.

### 2. Do not use stock photo compositions.
No handshakes. No people pointing at whiteboards. No diverse-group-around-table setups. No stethoscope-draped-over-laptop. PhyCap photography should feel documentary: captured in real clinical environments, showing real work, with real hands and real instruments. If the image could appear on a generic "Healthcare Solutions" landing page, it fails the PhyCap test.

### 3. Do not use fully saturated color.
Every PhyCap photo should be significantly desaturated (-40 to -55 global saturation). The images should approach monochrome while retaining enough color information to feel real rather than artificially B&W. Fully saturated clinical photography (bright blue scrubs, vivid red blood, neon green monitors) belongs to hospital marketing, not PhyCap.

### 4. Do not show faces prominently unless they are GP team members.
The clinical photography on PhyCap's site shows surgeons in masks, hands in gloves, instruments in action. Faces are obscured, turned away, or cropped. This creates universality (any physician can see themselves in the image) and avoids the stock-photo problem of recognizable models. GP headshots are the exception: team member photos should show faces clearly and professionally.

### 5. Do not use tech-forward or futuristic imagery.
No holographic displays, no AI-generated molecular structures, no digital overlays on clinical scenes. PhyCap invests in technology, but its visual identity is grounded in clinical reality, not technological aspiration. The photography should feel like what a surgeon sees in the operating room, not what a graphic designer imagines the future of medicine looks like.

---

## Quick Reference Card

| Setting | Value |
|---------|-------|
| Temperature | -5 to -10 (cool) |
| Contrast | +25 to +35 |
| Highlights | -40 to -50 |
| Shadows | +15 to +25 |
| Global Saturation | -40 to -55 |
| Shadow Color Grade | Hue 163, Sat 8-12 (Forest green) |
| Midtone Color Grade | Hue 60-70, Sat 3-5 (warm) |
| Vignetting | -10 to -15 |
| Grain | Amount 10-15 (optional) |

---

## Gaps in This Section

- These settings are approximated from the visual appearance of the website photography. If the original photographer or designer has a Lightroom preset file (.xmp or .lrtemplate), that should be used as the canonical reference and these settings should be updated to match.
- Mobile photography: GP team members taking photos at events or in clinical settings should use these settings as a starting point in Lightroom Mobile. The key settings that must be applied for brand consistency are: cool temperature, heavy desaturation (-40+), and the Forest green shadow color grade.
- Video treatment: If PhyCap produces video content (beyond the existing YouTube embed), a corresponding color grading LUT should be created from these settings for use in Premiere Pro, DaVinci Resolve, or Final Cut Pro.
