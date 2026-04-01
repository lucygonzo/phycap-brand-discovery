# Typography

## Font Identification

**Status**: Confirmed from live site inspection (March 31, 2026).

### Headlines: Marcellus
**Font**: Marcellus (Google Fonts)
**Designer**: Astigmatic
**Classification**: Transitional serif with classical Roman letterform proportions. Inspired by ancient Roman inscription capitals with modern refinement. The high contrast between thick and thin strokes communicates editorial authority and institutional weight.
**Where it appears**: Hero headlines ("Investing with Clinical Precision"), section titles, feature headings, stat numbers.
**Why it works for PhyCap**: Marcellus carries the gravitas of carved stone inscriptions, which aligns with the "clinical precision" positioning. The font reads as institutional and authoritative without being ornate. It is a free Google Font, which simplifies licensing for web, email, templates, and GP content.

### Body Copy and Navigation: Roboto
**Font**: Roboto (Google Fonts)
**Designer**: Christian Robertson (Google)
**Classification**: Neo-grotesque sans-serif with a dual nature: mechanical skeleton with largely geometric forms, combined with friendly and open curves. The most widely deployed Google Font.
**Where it appears**: Body paragraphs, navigation menu items, CTAs, form labels, descriptions, subheadings, eyebrow labels (all caps with tracking).
**Weights in use**: Regular (400) for body text, Medium (500) for navigation and UI elements, Bold (700) for emphasis and subheadings.
**Why it works for PhyCap**: Roboto is highly legible at all sizes, familiar to readers (reducing cognitive friction), and available in every weight. Its clean, clinical feel matches the precision positioning without being cold. As a Google Font, it loads fast and requires no licensing.

### Labels: Roboto (All-Caps Treatment)
**Font**: Roboto Bold or Medium
**Treatment**: Uppercase, generous letter-spacing (tracking 0.1em-0.15em)
**Where it appears**: Eyebrow labels ("TRANSFORMATIVE," "STRATEGIC ADVANTAGE," "CLINICAL CARE DELIVERY WORKFLOW OPTIMIZATION"), section markers, category indicators, navigation menu.
**Color**: Gold #D3B184 on dark backgrounds, Forest #122620 on light backgrounds.

### Licensing Note
Both Marcellus and Roboto are free Google Fonts licensed under the Apache License 2.0. They can be used without restriction across web, print, email, presentations, templates, and any other PhyCap materials. No font licensing costs or usage limitations apply.

---

## Typography Hierarchy Rules

### Level 1: Hero Headlines
- Font: Marcellus
- Weight: Regular (Marcellus has one weight)
- Size: 48-72px (desktop), 32-48px (mobile)
- Line height: 1.1-1.2
- Color: White (on Forest/dark backgrounds) or Blue Black (on light backgrounds)
- Usage: One per page. The single most important statement.

### Level 2: Section Headlines
- Font: Marcellus
- Weight: Regular
- Size: 32-40px (desktop), 24-32px (mobile)
- Line height: 1.2-1.3
- Color: Blue Black (on light backgrounds) or White (on dark backgrounds)
- Usage: Major section dividers. 2-4 per page.

### Level 3: Subheadlines
- Font: Roboto
- Weight: Semibold (600)
- Size: 20-24px (desktop), 18-20px (mobile)
- Line height: 1.3-1.4
- Color: Blue Black or Forest
- Usage: Content section headers within major sections.

### Level 4: Body Copy
- Font: Roboto
- Weight: Regular (400)
- Size: 16-18px (desktop), 15-16px (mobile)
- Line height: 1.5-1.6
- Color: Blue Black #070808
- Usage: All paragraph text. Maximum line length: 65-75 characters for readability.

### Level 5: Eyebrow Labels
- Font: Roboto
- Weight: Medium (500) or Semibold (600)
- Size: 12-14px
- Letter-spacing: 0.1em-0.15em (generous tracking)
- Transform: Uppercase
- Color: Gold #D3B184 (on dark backgrounds) or Forest #122620 (on light backgrounds)
- Usage: Category markers, section labels, metadata. Examples: "TRANSFORMATIVE," "INVESTMENT PRIORITIES," "01/."

### Level 6: Captions and Metadata
- Font: Roboto
- Weight: Regular (400)
- Size: 12-14px
- Line height: 1.4
- Color: Dark Slate #1F2D35 (subdued)
- Usage: Image captions, dates, author credits, footer text.

### Stat Numbers
- Font: Marcellus or Roboto Bold
- Weight: Bold or Black
- Size: 48-72px (display size, matching headline treatment)
- Color: Gold #D3B184, White, or Forest #122620 depending on background
- Usage: "168+," "21," "13+," "10+," "500+." Numbers displayed as graphic elements, not body text.

---

## Typography Do's and Don'ts

**Do**:
- Maintain the serif/sans-serif pairing consistently. Headlines always serif, body always sans.
- Use generous line height (1.5+) for body text. Medical professionals read dense content all day; give them breathing room.
- Use the eyebrow label pattern (uppercase, tracked, small) for category markers and section identifiers.
- Use stat numbers at display size with emphasis treatment. PhyCap's numbers are strong; let them fill space.

**Do not**:
- Use the serif font for body paragraphs. The serif is a display face; it loses legibility below 20px.
- Use decorative or script fonts anywhere. PhyCap's visual language is clinical and precise, not decorative.
- Mix more than two typefaces. The serif/sans pairing is complete. A third font introduces visual noise.
- Use condensed or narrow type treatments. PhyCap's typography is open and generous, reflecting the editorial quality aspiration.

---

## Gaps in This Section

- ~~Exact font names are not confirmed.~~ **RESOLVED.** Marcellus (headlines) and Roboto (body/navigation/labels) confirmed from live site inspection March 31, 2026. Both are free Google Fonts, no licensing concerns.
- **Font fallback stack**: The CSS fallback fonts should be specified for email and contexts where Google Fonts may not load. Recommended: Georgia as Marcellus fallback, Arial or Helvetica as Roboto fallback.
- **Marcellus weight limitation**: Marcellus is available in only one weight (Regular). This means headline emphasis must come from size, color, or case rather than bold weight. If bold headline treatments are needed, consider Marcellus SC (small caps variant) or rely on Roboto Bold for secondary headings that need weight variation.
