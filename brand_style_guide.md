# MÖTE — BRAND STYLE GUIDE & UI KIT
> **Premium Specialty Coffee & Swedish Fika**  
> *Design System & Digital Experience Tokens*

---

## 1. COLOR PALETTE
The color palette represents **Nordic Luxury**—clean, natural, and grounded in Swedish landscape elements. The warm tones are inspired by pastries and Scandinavian wood, while the deep greens resemble dense Swedish pine forests.

### Primary Neutrals (Backgrounds)
*   **Nordic Alabaster (Primary)**
    *   **HEX:** `#F7F4EF`
    *   **CSS Variable:** `--bg-primary`
    *   **Role:** Used as the base canvas for the entire experience. Provides a warm, premium, and calm backdrop.
*   **Pebble Grey (Secondary)**
    *   **HEX:** `#EFEBE4`
    *   **CSS Variable:** `--bg-secondary`
    *   **Role:** Used to demarcate sub-sections (e.g., gallery, pairing guides) and provide subtle container contrasts.
*   **Soft Driftwood (Tertiary)**
    *   **HEX:** `#E8E3DA`
    *   **CSS Variable:** `--bg-tertiary`
    *   **Role:** Accent grey/beige used for subtle background blocks and outline cards.
*   **Pure Snowy White**
    *   **HEX:** `#FFFFFF`
    *   **CSS Variable:** `--white`
    *   **Role:** Clean contrast highlight color, used for copy overlaying dark sections.

### Text & Hierarchy
*   **Charcoal Onyx (Primary Text)**
    *   **HEX:** `#1A1A18`
    *   **CSS Variable:** `--text-primary`
    *   **Role:** Body text, headings, and core labels. High contrast yet softer than pure black.
*   **Warm Taupe (Secondary Text)**
    *   **HEX:** `#6B6560`
    *   **CSS Variable:** `--text-secondary`
    *   **Role:** Descriptions, secondary copy, navigation links, and resting button states.
*   **Muted Clay (Tertiary Text)**
    *   **HEX:** `#9A9490`
    *   **CSS Variable:** `--text-tertiary`
    *   **Role:** Captions, counts, meta data, and subtle details.

### Brand Accents
*   **Swedish Fir (Accent Deep)**
    *   **HEX:** `#2C3E2D`
    *   **CSS Variable:** `--accent-deep`
    *   **Role:** The flagship brand color. Used for active cards, dark callout sections, footers, and prominent visual blocks.
*   **Honey Amber (Accent Warm)**
    *   **HEX:** `#C47D2A`
    *   **CSS Variable:** `--accent-warm`
    *   **Role:** Primary action highlight. Represents the warmth of freshly baked Fika buns and hot coffee. Used for hover borders, underlines, and eyebrow labels.
*   **Warm Parchment (Accent Cream)**
    *   **HEX:** `#E8DFD0`
    *   **CSS Variable:** `--accent-cream`
    *   **Role:** Warm background elements and soft decorative fills.
*   **Whisper Moss (Subtle Border)**
    *   **HEX:** `rgba(44, 62, 45, 0.06)`
    *   **CSS Variable:** `--border-subtle`
    *   **Role:** A transparent touch of Forest Green used to create extremely lightweight borders.

---

## 2. TYPOGRAPHY SYSTEM
A sophisticated combination of high-contrast typography: a cinematic display serif for headings, a modern editorial optical serif for subtitles, and a highly readable geometric sans-serif for information delivery.

### Display Typography
*   **Font Family:** `'DM Serif Display', serif`
    *   **CSS Variable:** `--font-display`
    *   **Role:** Main Hero heading (`<h1>`), primary branding title (`MÖTE`), and big definition headlines.
    *   **Weight:** `400` (Regular)
    *   **Aesthetic:** Cinematic, bold, classical Swedish branding.

### Editorial Serif
*   **Font Family:** `'Fraunces', serif`
    *   **CSS Variable:** `--font-serif`
    *   **Role:** Section headings (`<h2>`, `<h3>`), quotes, emphasis terms, and decorative button elements.
    *   **Weights Used:** `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold)
    *   **Aesthetic:** Elegant, organic serif curves that add high editorial texture.

### Interface Sans-Serif
*   **Font Family:** `'Inter', sans-serif`
    *   **CSS Variable:** `--font-sans`
    *   **Role:** Body copy, buttons, labels, navigation items, and footer specifications.
    *   **Weights Used:** `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold)
    *   **Aesthetic:** Clean, highly legible, modern geometric sans-serif.

---

## 3. INTERACTIVE UI COMPONENTS
MÖTE implements premium, motion-centric component styling characterized by soft animations, structural borders, and playful transitions.

### A. Menu Pills / Tabs (`.menu-tab-btn`)
*   **Layout:** Pill-shaped (`border-radius: 100px`), with padding of `0.7rem 1.8rem`.
*   **Typography:** Sans-serif (`var(--font-sans)`), uppercase, font-size `0.75rem`, weight `600`, letter-spacing `0.1em`.
*   **Resting State:** Thin borders (`--border-subtle`), taupe text (`--text-secondary`).
*   **Hover State:** Text and borders transition smoothly (`0.35s`) to Honey Amber (`--accent-warm`).
*   **Active State:** Switches background to Forest Green (`--accent-deep`) and text to Nordic Alabaster (`--bg-primary`).

### B. Segment Card Selectors (`.pairing-btn`)
*   **Layout:** Structured block with rounded corners (`border-radius: 6px`), padding `1.2rem 1.5rem`.
*   **Typography:** Integrated numerical index (`.btn-num` in Fraunces Serif) + text label (`.btn-text` in Inter Sans).
*   **Resting State:** Nordic Alabaster background, thin moss borders.
*   **Hover State:** Border transitions to Honey Amber. The button moves slightly right (`transform: translateX(4px)`) using an exponential ease (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   **Active State:** Background becomes Forest Green, border matches, text shifts to Alabaster, and a soft forest shadow is projected (`box-shadow: 0 8px 25px rgba(44, 62, 45, 0.15)`).

### C. Editorial Action Links (`.directions-link`)
*   **Layout:** Inline flex layout with an SVG arrow icon.
*   **Typography:** Inter Sans, uppercase, font-size `0.78rem`, weight `600`, letter-spacing `0.12em`.
*   **Resting State:** Forest Green color with matching underline border (`border-bottom: 1.5px solid var(--accent-deep)`).
*   **Hover State:** Underline and text switch to Honey Amber. The layout gap expands (`gap: 1rem`), and the arrow SVG slides slightly to the right (`transform: translateX(3px)`) for a dynamic cue.

### D. Floating Back-to-Top Button (`.back-to-top`)
*   **Layout:** Fixed circular button (`border-radius: 50%`), `44px` diameter.
*   **Colorway:** Forest Green background, Nordic Alabaster arrow icon.
*   **Transitions:** Pops up smoothly from bottom-right (`opacity: 0`, `transform: translateY(10px)` -> `opacity: 1`, `transform: translateY(0)`).
*   **Hover State:** Background turns Honey Amber, button moves up (`transform: translateY(-2px)`), and shadow deepens (`box-shadow: 0 12px 30px rgba(196, 125, 42, 0.2)`).

---

## 4. SYSTEM INTERACTIONS & MOTION TOKENS
All elements are choreographed using premium web motion guidelines:

*   **Parallax Hover (`.magnetic`):** Buttons utilize JavaScript to dynamically follow the user's mouse movement slightly (25% translation), giving components a tangible, magnetic texture.
*   **Transition Timing:**
    *   *Fast:* `0.35s` (used for hover highlights, link movements, color transitions).
    *   *Medium:* `0.7s` (used for menu tab switches, scroll reveal fades).
    *   *Slow:* `1.2s` (used for image scaling and slow parallax entrance effects).
*   **Ease Function:** Exponential ease (`cubic-bezier(0.16, 1, 0.3, 1)`) for premium, organic deceleration.
