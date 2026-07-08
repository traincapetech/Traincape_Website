# Traincape Technology Design System
## Version 1.0.0 • Enterprise-Grade Design Language

Welcome to the official Traincape Technology Design System. This document serves as the single source of truth for all digital products, websites, and interfaces. It is designed to emulate the aesthetics and engineering standards of leading enterprise software giants like **Stripe, Vercel, Linear, and HubSpot**.

The core principles of this design language are: **Premium, Minimal, Corporate, Technical, and Human**.

---

## 1. Color System

To achieve maximum flexibility and design token reactivity, the color palette is built using HSL CSS variables, allowing theme switching (Light Mode vs. Dark Mode) via CSS variables.

### HSL Theme Variables (Base Tokens)

```css
:root {
  /* LIGHT MODE TOKENS */
  --background: 210 20% 98%;
  --foreground: 220 40% 10%;
  --card: 0 0% 100%;
  --card-foreground: 220 40% 10%;
  
  --primary: 221.2 83.2% 53.3%;
  --primary-hover: 221.2 83.2% 45%;
  --primary-foreground: 210 20% 98%;
  
  --secondary: 210 40% 96.1%;
  --secondary-hover: 210 40% 90%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  --accent: 262.1 83.3% 57.8%;
  --accent-hover: 262.1 83.3% 50%;
  --accent-foreground: 210 20% 98%;
  
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  
  --success: 142.1 76.2% 36.3%;
  --warning: 38 92% 50%;
  --danger: 346.8 77.2% 49.8%;
  --info: 199 89% 48%;
  
  --disabled: 210 40% 94%;
  --disabled-foreground: 215.4 16.3% 65%;
}

.dark {
  /* DARK MODE TOKENS (DEFAULT SYSTEM THEME) */
  --background: 224 71% 4%;
  --foreground: 210 20% 98%;
  --card: 224 71% 7%;
  --card-foreground: 210 20% 98%;
  
  --primary: 217.2 91.2% 59.8%;
  --primary-hover: 217.2 91.2% 68%;
  --primary-foreground: 224 71% 4%;
  
  --secondary: 215 27.9% 16.9%;
  --secondary-hover: 215 27.9% 22%;
  --secondary-foreground: 210 20% 98%;
  
  --accent: 263.4 70% 50.4%;
  --accent-hover: 263.4 70% 60%;
  --accent-foreground: 210 20% 98%;
  
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  
  --success: 142.1 70.6% 45.3%;
  --warning: 47.9 95.8% 53.1%;
  --danger: 346.8 87.2% 56.5%;
  --info: 199 89% 58%;
  
  --disabled: 217.2 32.6% 12%;
  --disabled-foreground: 215 20.2% 40%;
}
```

---

## 2. Typography

The default typography family is **Inter** for UI, body, labels, and metadata, paired with **Space Grotesk** (or **Outfit**) for high-impact enterprise headers.

### Typography Scale (Fluid & Responsive)

| Level | Desktop Size (rem) | Mobile Size (rem) | Line Height | Letter Spacing | Styling |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `4.5rem (72px)` | `3.0rem (48px)` | `1.05` | `-0.04em` | Font: Space Grotesk, Bold |
| **H1** | `3.0rem (48px)` | `2.25rem (36px)` | `1.15` | `-0.03em` | Font: Space Grotesk, Bold |
| **H2** | `2.25rem (36px)` | `1.75rem (28px)` | `1.2` | `-0.02em` | Font: Space Grotesk, Semibold |
| **H3** | `1.875rem (30px)` | `1.5rem (24px)` | `1.25` | `-0.02em` | Font: Space Grotesk, Semibold |
| **H4** | `1.5rem (24px)` | `1.25rem (20px)` | `1.3` | `-0.01em` | Font: Inter, Semibold |
| **H5** | `1.25rem (20px)` | `1.125rem (18px)` | `1.35` | `-0.01em` | Font: Inter, Medium |
| **Body Large**| `1.125rem (18px)` | `1.0rem (16px)` | `1.5` | `0` | Font: Inter, Regular |
| **Body** | `1.0rem (16px)` | `0.937rem (15px)` | `1.6` | `0` | Font: Inter, Regular |
| **Small** | `0.875rem (14px)` | `0.812rem (13px)` | `1.5` | `0.01em` | Font: Inter, Regular |
| **Caption** | `0.75rem (12px)` | `0.75rem (12px)` | `1.4` | `0.04em` | Font: Inter, Medium, Uppercase |
| **Button** | `0.875rem (14px)` | `0.875rem (14px)` | `1` | `0.02em` | Font: Inter, Semibold |
| **Label** | `0.875rem (14px)` | `0.812rem (13px)` | `1.2` | `0.01em` | Font: Inter, Medium |

---

## 3. Spacing System

Based on a strict **4px/8px incremental grid**, ensuring layouts stack without sub-pixel layout shifts.

### Spacing Scale

* `xs` / `1` = `4px` (`0.25rem`)
* `sm` / `2` = `8px` (`0.5rem`)
* `md` / `3` = `12px` (`0.75rem`)
* `base`/ `4` = `16px` (`1rem`)
* `lg` / `6` = `24px` (`1.5rem`)
* `xl` / `8` = `32px` (`2rem`)
* `2xl`/ `12` = `48px` (`3rem`)
* `3xl`/ `16` = `64px` (`4rem`)
* `4xl`/ `24` = `96px` (`6rem`)

### Layout Padding Rules
* **Section vertical gap**: Desktop: `96px` (`py-24`), Mobile: `48px` (`py-12`).
* **Card Internal Padding**: `24px` (`p-6`) comfort mode, `32px` (`p-8`) spacious mode.
* **Form Field Gap**: `16px` (`space-y-4`).
* **List Row Padding**: `12px` (`py-3`).

---

## 4. Grid System

| Screen Breakpoint | Columns | Container Width | Margin (Gutter) |
| :--- | :--- | :--- | :--- |
| **Mobile (`<768px`)** | 4 | `100%` | `16px` margin / `16px` gutter |
| **Tablet (`768px - 1024px`)** | 8 | `Max 720px` | `24px` margin / `20px` gutter |
| **Laptop (`1024px - 1280px`)** | 12 | `Max 960px` | `32px` margin / `24px` gutter |
| **Desktop (`>1280px`)** | 12 | `Max 1200px` | `48px` margin / `24px` gutter |
| **Wide Screen (`>1536px`)** | 12 | `Max 1440px` | `64px` margin / `32px` gutter |

---

## 5. Border Radius System

To prevent visual clashes, the border-radius scales linearly with the size of the container:

* **Chips / Badges / Pills**: `9999px` (`rounded-full`)
* **Badges / Buttons / Inputs / Dropdowns**: `6px` (`rounded`) or `8px` (`rounded-md`)
* **Cards / Small Blocks**: `12px` (`rounded-xl`)
* **Banners / Large Cards**: `16px` (`rounded-2xl`)
* **Modals / Overlay Dialogs**: `24px` (`rounded-3xl`)

---

## 6. Shadow & Elevation System

Shadows are built with two layers: a soft, ambient occlusion layer and a sharp directional shadow.

```css
/* Light Mode Elevation Shadows */
.shadow-xs { shadow: 0 1px 2px rgba(0,0,0,0.05); }
.shadow-sm { shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06); }
.shadow-md { shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
.shadow-lg { shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
.shadow-xl { shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }

/* Glassmorphism Shadow (Combined with borders for premium dark UI) */
.shadow-glass {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

---

## 7. Buttons Specifications

Buttons represent the primary conversion driver. Standardize variant designs:

```jsx
// Primary CTA button variant structure
<button className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary-hover shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none disabled:bg-disabled disabled:text-disabled-foreground">
  Primary Button
</button>
```

### Button Variants
1. **Primary**: HSL Primary color, background hover color shift, shadows.
2. **Secondary**: HSL Muted color background, darker text.
3. **Outline**: Transparent background, border border-input, HSL primary text on hover.
4. **Ghost**: No background/border, background tint on hover.
5. **Danger**: HSL Danger background, red hover state.
6. **Loading State**: Displays standard Lucide spinner (`animate-spin`), disables click, and retains size.
7. **Floating/Sticky CTA**: Desktop/Mobile floating widgets. Always includes backdrop-blur and a subtle accent outline.

---

## 8. Cards System

Every card belongs to a unified visual family, differing only in header details.

```jsx
// Base structure for service, blog, and product cards
<div className="bg-card hover:bg-card/85 text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden">
  {/* Hover glow background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  {/* Card Content... */}
</div>
```

---

## 9. Forms & Inputs

Inputs use a uniform height (`h-11` / `44px` for comfort touch targets), focus outlines, and distinct state feedback.

* **Focus State**: `focus:ring-2 focus:ring-primary/40 focus:border-primary focus:outline-none`
* **Error Validation**: Border: `border-danger`, Focus state: `focus:ring-danger/30`. Help text: `text-xs text-danger`.
* **Success Validation**: Border: `border-success`, Focus state: `focus:ring-success/30`.
* **Disabled State**: Background: `bg-disabled`, Cursor: `cursor-not-allowed`, text: `text-disabled-foreground`.

---

## 10. Icons Philosophy

* **Library**: `lucide-react` (with fallback to `react-icons/bs` for brand integrations like WhatsApp).
* **Stroke Style**: Strict **1.5px outline stroke** (`stroke-width="1.5"`). Avoid using filled icon formats unless expressing an active/selected state.
* **Sizes**: 
  - Micro/Inline: `h-4 w-4`
  - Content/Secondary: `h-5 w-5`
  - Section Headers: `h-8 w-8` (placed inside a `p-2` HSL muted background capsule)

---

## 11. Illustrations Art Direction

* **Strict Rules**: **NO generic cartoon vectors**, character outlines, or stock illustrations.
* **Allowed Visuals**: 
  - Stylized abstract SVG grids, waves, or network graphs.
  - Premium 3D assets/mockups with high depth and transparency.
  - Lottie micro-animations for system interactions (under 2 seconds, no looping unless loading).
  - Subtle HSL color gradients (`bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent`).

---

## 12. Image Standards

* **Radii**: Same as container (standard: `rounded-xl`).
* **Aspect Ratios**: Consistent `aspect-video` (16:9) or `aspect-square` (1:1) scaling.
* **Lazy Loading**: All images outside the LCP fold MUST implement native `loading="lazy"`.
* **Hover Overlay**: Interactive images should implement a darkened backdrop mask (`group-hover:opacity-30 bg-black/40`) with text/icon reveal on hover.

---

## 13. Motion & Animation System

Animations should be functional, reinforcing the structural flow. Never implement flashing or high-amplitude motions.

### Motion Tokens (Tailwind/Framer Motion)

* **Hover Speed**: `200ms` / Ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`)
* **Expand/Collapse Speed**: `300ms` / Ease-in-out (`cubic-bezier(0.87, 0, 0.13, 1)`)
* **Page Transitions**: `400ms` / Fade/Reveal.
* **Scroll Animation**: Lenis configured to standard damping (`1.2`) for smooth velocity scrolling without jitter.
* **Loading Skeletons**: Standard shimmer keyframes (`bg-slate-800 animate-pulse`).

---

## 14. Navigation Systems

* **Navbar**: Sticky (`sticky top-0`), transparent background with backdrop blur (`backdrop-blur-md bg-background/80`), standard elevation border (`border-b border-border`). Always includes language switcher and main Primary CTA button.
* **Mega Menu**: Multi-column slide-down grid (with Framer Motion fade-in transition), grouped by Services, Training, and Partners.
* **Footer**: Detailed multi-column structure with Google rating, contact widgets, and collapsible accordion states on mobile.

---

## 15. Feedback & Notification Blocks

* **Toasts**: Glassmorphic, right-aligned popups with 3-second auto-dismiss hooks.
* **Alerts**: Inline box notifications. Borders must match state colors (success, danger, warning) over HSL muted backgrounds:
  ```css
  .alert-danger { bg: bg-danger/10; border: border-danger/20; text: text-danger; }
  ```

---

## 16. Data Visualization Standards

* **Scale Colors**: Chart graphs will render colors using the primary palette:
  - Primary: `#3b82f6` (Blue)
  - Accent: `#8b5cf6` (Purple)
  - Secondary: `#10b981` (Emerald)
  - Muted: `#64748b` (Slate)
* **Tables**: Alternating table rows (`even:bg-muted/30`), hover rows (`hover:bg-muted/60`), and bold column text elements.

---

## 17. Accessibility (WCAG AA Checklist)

* **Contrast**: Foregrounds must have a minimum contrast of 4.5:1 against backdrops (checked via automated tools).
* **Outline Rings**: Never suppress focus states. Interactive elements must display focus outlines (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none`).
* **ARIA Mapping**: Use `role="dialog"`, `aria-expanded`, and `aria-hidden` states on overlays, accordions, and dropdowns.
* **Reduced Motion Support**: Ensure Framer Motion wraps animate loops in `useReducedMotion` hooks, rendering static fades for users who request minimal transitions.

---

## 18. SEO & Schema Architecture

Every page must compile and expose standard structured JSON-LD schemas inside `<Helmet>` components.

```json
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Traincape Technology",
  "url": "https://traincapetech.in",
  "logo": "https://traincapetech.in/assets/TT.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+441253928501",
    "contactType": "customer service"
  }
}
```

Ensure heading maps follow a strict `h1` -> `h2` -> `h3` layout hierarchy. Every dynamic page route must render unique Title/Meta tags via the custom `PageSEO` component.

---

## 19. Component Architecture (Atomic Design)

Component modules must compile into a nested architecture directory:

```text
src/
├── components/          # REUSABLE UI ELEMENTS
│   ├── atoms/           # Buttons, Inputs, Badges, Chips
│   ├── molecules/       # FormGroups, TableRows, SearchBars
│   ├── organisms/       # Navbar, Footer, MegaMenu, CustomCharts
│   └── templates/       # Layout structures
├── pages/               # ROUTE CONTROLLERS / PAGES
├── context/             # GLOBAL STATES (Language, Theme)
└── utils/               # FUNCTIONS & FORMATTERS
```

---

## 20. Tailwind Standard Class Configs

Configure Tailwind variants and patterns globally. Avoid writing verbose style lists repeatedly by defining base utility components inside `src/index.css`:

```css
@layer components {
  .btn-primary {
    @apply px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary-hover shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:outline-none;
  }
  
  .card-premium {
    @apply bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden;
  }
}
```

---

## 21. Design Tokens Reference (JSON Schema)

```json
{
  "theme": {
    "colors": {
      "primary": "hsl(217.2 91.2% 59.8%)",
      "secondary": "hsl(215 27.9% 16.9%)",
      "accent": "hsl(263.4 70% 50.4%)",
      "background": "hsl(224 71% 4%)",
      "card": "hsl(224 71% 7%)"
    },
    "spacing": {
      "grid-unit": "4px",
      "container-max": "1440px"
    },
    "radius": {
      "button": "6px",
      "card": "12px",
      "modal": "24px"
    },
    "transition": {
      "hover": "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      "accordion": "all 300ms cubic-bezier(0.87, 0, 0.13, 1)"
    }
  }
}
```

---

## 22. UI Rules & Best Practices

### DOs
* **DO** use absolute HSL utility variables.
* **DO** check readability of text overlays on top of dynamic image cards.
* **DO** specify `loading="lazy"` and dimensions on img tags.
* **DO** write keyboard-navigable tabs.

### DONTs
* **DON'T** use random values like `p-[17px]` or colors like `bg-red-500` inline. Use spacing tokens and HSL classes.
* **DON'T** remove focus ring borders from interactive components.
* **DON'T** use character vectors or generic clip art assets.

---

## 23. Conversion & Trust Rules

1. **CTA Hierarchy**: Limit hero blocks to a single primary action. Secondary options must be rendered as outline buttons.
2. **Social Proof Placement**: Review grids, Google stars, and certifications must appear immediately below headers or above action blocks.
3. **Form Friction Reduction**: Form wizards should contain no more than 3 input fields per step, showing a clear progress indicator.

---

## 24. AI Search & LLM Optimization Rules

Design website components to be readily readable by search crawlers and AI search systems:
* **Semantic Markups**: Wrap FAQ sections in standard `<details>` structures. Include schema markup in every component.
* **Text Fallbacks**: Avoid baking text inside graphic files. All services must be represented as readable HTML nodes, not infographics.
* **AI Crawl Headers**: Define section descriptions using high-clarity language to optimize information extraction.
