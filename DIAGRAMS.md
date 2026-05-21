# Landing Page - Structure & Layout Diagrams

## Page Structure Overview

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                        │
│  GC  ←→  Mes projets  |  About                          │
│  (sticky, backdrop blur)                                │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                                                          │
│                      HERO SECTION                        │
│                                                          │
│              Georgina Cierra (Title)                    │
│                 ─────────────────                        │
│               UI UX Designer (Subtitle)                 │
│                                                          │
│     Chaque projet, une intention de design.            │
│                                                          │
│     Survolez chaque fleur pour découvrir mes projets   │
│     (Desktop only - visible at 1024px+)               │
│                                                          │
│   [DESKTOP MODE - 1024px+]                             │
│                                                          │
│   🌸(01)                              🌸(03)           │
│   Top-Left                            Top-Right         │
│   (on hover: card slides right)   (on hover: card slides left)│
│                                                          │
│   [Project cards visible on hover]                     │
│                                                          │
│   🌸(02)                              🌸(04)           │
│   Bottom-Left                         Bottom-Right      │
│   (on hover: card slides right)   (on hover: card slides left)│
│                                                          │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│              MOBILE/TABLET GRID (< 1024px)             │
│                                                          │
│        Mes projets                                      │
│                                                          │
│  [Project 1]    [Project 2]                            │
│  🌸(01)         🌸(02)                                 │
│  Flower img     Flower img                             │
│  Card info      Card info                              │
│                                                          │
│  [Project 3]    [Project 4]                            │
│  🌸(03)         🌸(04)                                 │
│  Flower img     Flower img                             │
│  Card info      Card info                              │
│                                                          │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│   mon jardin  |  Georgina © 2026  |  LinkedIn · Behance│
└─────────────────────────────────────────────────────────┘
```

## Responsive Breakpoints

```
MOBILE (< 640px)          TABLET (640px-1023px)    DESKTOP (1024px+)
────────────────          ─────────────────────    ─────────────────

Navigation:               Navigation:              Navigation:
- Default spacing         - Increased spacing      - Full spacing

Hero Section:             Hero Section:            Hero Section:
- Font: 3rem             - Font: 4.375rem         - Font: 5rem+
- Centered              - Centered               - Centered
- Single column         - Single column          - Center of viewport

Projects:                Projects:                Flowers:
- Hidden                - 2-column grid          - 4 corners
- Only in grid          - Cards visible          - Absolute positioned
- 1 column grid         - Hover support          - Cards on hover

Footer:                  Footer:                  Footer:
- Stacked               - Flex row               - Flex row
- Single column         - Spread out             - Spread out
```

## Desktop Flower Positioning (1024px+)

```
┌──────────────────────────────────────────────────────────────────┐
│                        HERO CENTER                                │
│  Georgina Cierra                                                 │
│  UI UX Designer                                                  │
│  Chaque projet, une intention de design.                        │
│                                                                   │
│  Survolez chaque fleur pour découvrir mes projets              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│  🌸 (01)  [TOP-LEFT]          [TOP-RIGHT] 🌸 (03)              │
│  8% top, 3% left              8% top, 3% right                 │
│  15deg rotation               -15deg rotation                    │
│  ↓ hover → card appears       ↓ hover → card appears           │
│             from right                   from left              │
│                                                                   │
│  [CENTER - Hero Title & Text - No interaction]                 │
│                                                                   │
│  🌸 (02)  [BOTTOM-LEFT]       [BOTTOM-RIGHT] 🌸 (04)          │
│  10% bottom, 3% left          10% bottom, 3% right             │
│  -15deg rotation              15deg rotation                     │
│  ↓ hover → card appears       ↓ hover → card appears           │
│             from right                   from left              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## Card Reveal Animation (Desktop)

```
DEFAULT STATE:          HOVER STATE:            CLICKED CLOSE:
──────────────         ──────────────          ──────────────

🌸 (flower)            🌸 (flower)             🌸 (flower)
                         ↓
   (no card)        ╔═════════════╗            (card hidden)
                    ║  01 Design  ║
                    ║ prospectif  ║
                    ║             ║
                    ║  IAnergy    ║
                    ║             ║
                    ║ Description ║
                    ║             ║
                    ║ → View      ║
                    ╚═════════════╝

Animation:
─ Timing: 300ms cubic-bezier (smooth ease)
─ Enter: Fade in + Slide up 8px
─ Exit: Fade out + Slide down 8px
─ Effects: opacity, transform (GPU accelerated)
```

## Color System Visualization

```
LIGHT MODE (default)           DARK MODE (@prefers-color-scheme: dark)
─────────────────────          ──────────────────────────────────────

Background:                    Background:
#F5F2EC (warm cream)          Dark gray (~#1a1a1a equivalent in HSL)

Foreground (text):            Foreground (text):
#505749 (deep olive)          Light cream (#e8e7e0 equivalent)

Accent:                        Accent:
#FEF0D3 (bright cream)        Dark gray with opacity

Highlight:                     Highlight:
#D41A7D (magenta)             Brighter magenta (#e84ba8 equivalent)

Border:                        Border:
Light gray (#c4c4c0)          Dark gray with opacity

Muted:                        Muted:
#e8e0d0 (light cream)        Dark gray (#2d2d2d equivalent)
```

## Component Nesting (HTML Structure)

```
<html>
  <head>
    <meta charset, viewport, title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <div id="root">

      ├─ <header class="navbar">          ← TopNav Component
      │   └─ <nav>
      │       ├─ Logo "GC"
      │       └─ Links [Mes projets, About]
      │
      ├─ <main class="main-content">      ← Main Content
      │   │
      │   ├─ <section class="hero-section">
      │   │   ├─ <div class="hero-text reveal is-visible">
      │   │   │   ├─ <h1>Georgina Cierra</h1>
      │   │   │   ├─ <hr>
      │   │   │   ├─ <p>UI UX Designer</p>
      │   │   │   ├─ <p>Chaque projet...</p>
      │   │   │   └─ <p>Survolez chaque fleur...</p> (desktop only)
      │   │   │
      │   │   └─ <div class="flowers-container"> (1024px+)
      │   │       ├─ <div class="flower-wrapper flower-tl"> (01)
      │   │       │   ├─ <div class="flower-image-wrapper">
      │   │       │   │   ├─ <img> (flower)
      │   │       │   │   └─ <span> (label "01")
      │   │       │   └─ <div class="flower-card">
      │   │       │       ├─ Header (num, category, close btn)
      │   │       │       ├─ Title
      │   │       │       ├─ Divider
      │   │       │       ├─ Description
      │   │       │       └─ CTA Link
      │   │       │
      │   │       ├─ <div class="flower-wrapper flower-bl"> (02)
      │   │       ├─ <div class="flower-wrapper flower-tr"> (03)
      │   │       └─ <div class="flower-wrapper flower-br"> (04)
      │   │
      │   └─ <section class="mobile-projects"> (< 1024px)
      │       └─ <div class="projects-grid">
      │           ├─ <div class="project-item"> (4x)
      │           │   ├─ <div class="project-flower">
      │           │   │   ├─ <img>
      │           │   │   └─ <span>
      │           │   └─ <div class="project-card">
      │           │       └─ (same as desktop cards)
      │
      └─ <footer class="footer">
          └─ <div class="footer-container">
              ├─ "mon jardin"
              ├─ "Georgina © 2026"
              └─ [LinkedIn · Behance]
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

## CSS Cascade & Specificity

```
Level 1: Global Styles
├─ * { box-sizing, margin, padding }
├─ html { scroll-behavior }
├─ body { background, color, font-family }
└─ ::selection { bg, color }

Level 2: Utilities
├─ .label-eyebrow { font size, weight, letter-spacing }
├─ .reveal { opacity, transform, transition }
└─ etc...

Level 3: Component Styles
├─ .navbar { positioning, backdrop blur }
├─ .hero-section { layout, positioning }
├─ .flower-wrapper { positioning, transitions }
├─ .flower-card { styling, opacity states }
├─ .card-* { card sub-components }
├─ .mobile-projects { grid layout }
└─ .footer { spacing, alignment }

Level 4: Responsive Overrides
├─ @media (min-width: 640px) { ... }
├─ @media (min-width: 1024px) { ... }
└─ @media (min-width: 1280px) { ... }

Level 5: Dark Mode
└─ @media (prefers-color-scheme: dark) { ... }
```

## JavaScript Event Flow

```
USER ACTION              JAVASCRIPT              DOM UPDATE
────────────            ──────────             ──────────────

Page Load
   ↓
DOMContentLoaded
   ├─ initializeFlowerInteractions()
   ├─ initializeNavigation()
   └─ ensureHeroVisibility()
        └─ .hero-text.classList.add('is-visible')
             ↓
        Reveal animation plays
             ↓
        Hero appears (opacity 1, translateY 0)

────────────────────────────────────────────────────────────

Hover Flower (desktop)
   ↓
mouseenter event
   ↓
openCard(flowerID)
   └─ Finds .flower-card element
      └─ .classList.add('visible')  [NO ACTUAL CLASS ADDED]
         ↓
      CSS :hover selector handles
      the card visibility via opacity
      and pointer-events

────────────────────────────────────────────────────────────

Click Close Button
   ↓
click event
   ↓
closeCard()
   └─ Finds .flower-card element
      └─ opacity → 0
         pointer-events → none
         transform → translateY(8px)

────────────────────────────────────────────────────────────

Click Navigation Link
   ↓
click event
   ↓
initializeNavigation()
   └─ Updates .nav-link.active class
      └─ color changes to highlight color
```

## Tailwind → CSS Property Mapping Reference

```
Layout & Display:
  flex              → display: flex
  grid              → display: grid
  block             → display: block
  hidden            → display: none
  absolute          → position: absolute
  relative          → position: relative
  sticky            → position: sticky

Sizing:
  w-full            → width: 100%
  h-auto            → height: auto
  w-4               → width: 1rem (16px)
  clamp(...)        → width: clamp(160px, 15vw, 240px)

Spacing:
  px-5              → padding-left/right: 1.25rem
  py-4              → padding-top/bottom: 1rem
  gap-6             → gap: 1.5rem
  mx-auto           → margin-left/right: auto
  mt-3              → margin-top: 0.75rem

Colors:
  bg-background     → background-color: hsl(var(--background))
  text-foreground   → color: hsl(var(--foreground))
  border-border     → border-color: hsl(var(--border))

Effects:
  transition-all    → transition: all 200ms
  duration-300      → 300ms timing
  ease-in-out       → timing function
  opacity-0/100     → opacity: 0 / 1
  scale-105         → transform: scale(1.05)
  rotate-15         → transform: rotate(15deg)

Text:
  font-bold         → font-weight: 700
  text-lg           → font-size: 1.125rem
  uppercase         → text-transform: uppercase
  tracking-wide     → letter-spacing: 0.22em
```

## Performance Visualization

```
RENDERING PIPELINE
──────────────────

Interaction
   ↓
JavaScript Event Handler
   ↓
CSS Class Update / Hover State
   ↓
Style Recalculation (only affected elements)
   ↓
Layout (Reflow) - MINIMAL
   │ (only opacity & transform change = no layout shift)
   ↓
Paint - GPU Accelerated
   │ (opacity and transform use GPU)
   ↓
Composite - FAST
   │ (no re-rendering needed)
   ↓
Visual Update

Total Duration: ~16ms per frame (60fps)
Animation Duration: 300ms (18 frames smooth)
```

---

This diagram set helps visualize the layout, structure, and flow of the Landing page conversion!
