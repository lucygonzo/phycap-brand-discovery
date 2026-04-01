# Color Palette

## Confirmed Brand Palette

All hex values confirmed in the client brief. RGB and OKLCH values derived from hex. Slate #404747 is retired.

---

### Forest #122620
**Role**: Primary brand color. The anchor of the PhyCap visual system.
- **HEX**: #122620
- **RGB**: 18, 38, 32
- **OKLCH**: oklch(0.20 0.03 163)
- **Usage**: Header backgrounds, footer backgrounds, primary section backgrounds, CTA button backgrounds (on light backgrounds), logo mark fill on light backgrounds. Forest is the color that says "PhyCap." When in doubt about which dark color to use, choose Forest over Blue Black or Dark Slate.
- **When to use Forest vs. Blue Black**: Forest is the brand dark. Use it for any element that should feel distinctly PhyCap (headers, footers, hero sections, branded cards). Blue Black is the utility dark. Use it for body text, secondary backgrounds where Forest would be too dominant, and situations requiring near-black without pure black.
- **Do not**: Use Forest for body text (too dark-green to read easily at small sizes). Do not pair Forest with Dark Slate in adjacent sections (too similar, creates muddiness).

---

### Gold #D3B184
**Role**: Sole accent color. The signal of importance and distinction.
- **HEX**: #D3B184
- **RGB**: 211, 177, 132
- **OKLCH**: oklch(0.77 0.07 72)
- **Usage**: Eyebrow labels ("TRANSFORMATIVE," "STRATEGIC ADVANTAGE"), accent lines and dividers, icon highlights, hover states on Forest backgrounds, the "precision" signal in data visualizations. Gold appears sparingly. It marks what matters most.
- **When Gold appears**: On labels that signal category or status. On accent elements within Forest or Blue Black sections. On border treatments and divider lines. On stat numbers or key metrics that need emphasis.
- **When Gold does not appear**: As a background color (too light for large areas, too warm for the clinical tone). As body text (insufficient contrast on both light and dark backgrounds). As a CTA button color (Forest handles CTAs). In photography or image treatments (Gold is a graphic element, not a photo filter).
- **Do not**: Overuse Gold. Its power comes from restraint. If Gold appears in more than 10-15% of a layout's accent elements, it loses its signal function.

---

### Blue Black #070808
**Role**: Dark workhorse. Near-black with minimal blue shift.
- **HEX**: #070808
- **RGB**: 7, 8, 8
- **OKLCH**: oklch(0.06 0.00 200)
- **Usage**: Body text on light backgrounds, secondary dark backgrounds where Forest would be too branded (e.g., code blocks, data tables, technical content), dark overlay on imagery. Blue Black is functionally black but avoids the harshness of pure #000000.
- **Do not**: Use Blue Black where Forest should be used. If the element is a "PhyCap moment" (header, footer, hero, branded card), use Forest. If the element is structural (text, tables, utility backgrounds), use Blue Black.

---

### Dark Slate #1F2D35
**Role**: Supporting dark. Mid-range dark for depth and layering.
- **HEX**: #1F2D35
- **RGB**: 31, 45, 53
- **OKLCH**: oklch(0.24 0.03 228)
- **Usage**: Secondary section backgrounds where Forest would be too heavy and Cream/White would be too light. Card backgrounds on Forest sections. Dropdown and navigation hover states. Dark Slate adds depth to dark-on-dark compositions without competing with Forest's brand identity.
- **Do not**: Use as a primary background color. Dark Slate supports Forest; it does not replace it.

---

### Cream #F5F2F0
**Role**: Warm light background. The alternative to white.
- **HEX**: #F5F2F0
- **RGB**: 245, 242, 240
- **OKLCH**: oklch(0.96 0.01 60)
- **Usage**: Alternating section backgrounds (between white and cream), form backgrounds, card backgrounds on white sections, the warm-toned light that softens the clinical precision of Forest and Blue Black. Cream adds approachability without sacrificing professionalism.
- **When to use Cream vs. White**: Cream for sections that feel editorial, warm, or community-oriented (testimonials, team bios, event content). White for sections that feel data-driven, precise, or transactional (investment thesis details, forms, pricing/structure information).
- **Do not**: Use Cream as text color. Use Cream on Forest backgrounds (insufficient contrast).

---

### White #FFFFFF
**Role**: Primary light background.
- **HEX**: #FFFFFF
- **RGB**: 255, 255, 255
- **OKLCH**: oklch(1.00 0.00 0)
- **Usage**: Primary page backgrounds, section backgrounds for data-heavy content, reversed text on Forest/Blue Black/Dark Slate backgrounds, modal and overlay backgrounds.
- **Do not**: Use pure white text directly on Gold (insufficient contrast).

---

### Black #000000
**Role**: Utility only.
- **HEX**: #000000
- **RGB**: 0, 0, 0
- **OKLCH**: oklch(0.00 0.00 0)
- **Usage**: Absolute black for utility purposes only: SVG icon fills where color is irrelevant, border treatments requiring maximum contrast, print-specific applications. In digital applications, prefer Blue Black #070808 over pure black for text and UI elements.
- **Do not**: Use as a background color (too harsh). Use as body text color when Blue Black is available. Use as a brand color.

---

### Slate #404747 (RETIRED)
- **HEX**: #404747
- **Note**: This color has been retired from the active palette. Do not use in new materials. If it appears in existing assets, replace with Dark Slate #1F2D35 or Blue Black #070808 depending on context.

---

## Palette Ratios

For a typical PhyCap page or layout:
- **60%**: White #FFFFFF and Cream #F5F2F0 (light backgrounds, breathing room)
- **25%**: Forest #122620 and Blue Black #070808 (dark sections, text, structure)
- **10%**: Dark Slate #1F2D35 (depth, layering, secondary dark elements)
- **5%**: Gold #D3B184 (accents, labels, the precision signal)

---

## Gaps in This Section

- OKLCH values are calculated from hex values and should be verified against the actual CSS implementation on the website.
- The palette does not include an error/warning red or a success green for UI states (form validation, error messages). If the website or future applications require these, they should be defined as functional colors that complement the brand palette without competing with it. Recommended: a desaturated red (something in the #8B3A3A range) and a desaturated green close to Forest but lighter.
- Gradient usage is not documented. The Raw Discovery noted a question about gradient usage. If gradients exist on the site (Forest-to-Blue Black, Gold-to-Cream), they should be documented with start/end values and direction rules.
