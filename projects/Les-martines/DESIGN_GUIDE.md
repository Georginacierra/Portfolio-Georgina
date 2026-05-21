# 🌸 Gusti-Chef — Visual & Design Guide

## 🎨 Design System Overview

### Color Palette

#### Rose Accent (Primary)

```
Color: #E90083 (Rose)
RGB: 233, 0, 131
HSL: 327°, 100%, 45%
CSS Variable: rgb(var(--highlight-rgb))

Usage:
- Hero title "Chef" word
- Section numbers (01, 02, etc.)
- Active navigation links
- CTA links with arrow
- Skill badge borders on hover
- Metric numbers
```

#### Text & Foreground

```
Color: #505749 (Deep Olive)
RGB: 80, 87, 73
HSL: 86°, 9%, 29%
CSS Variable: hsl(var(--foreground))

Usage:
- Body text (paragraphs)
- Headings
- Labels
- Default link color
```

#### Background

```
Color: #F5F2EC (Warm Cream)
RGB: 245, 242, 236
HSL: 41°, 30%, 94%
CSS Variable: hsl(var(--background))

Usage:
- Page background
- Section backgrounds
- Card backgrounds
```

#### Border & Dividers

```
Color: Light Gray (88% lightness)
RGB: ~210, 210, 210
HSL: 86°, 8%, 78%
CSS Variable: hsl(var(--border))

Usage:
- Section dividers
- Card borders
- Form borders
- Horizontal rules
```

#### Muted Text

```
Color: Soft Gray (45% darkness)
RGB: ~110, 120, 105
HSL: 86°, 9%, 45%
CSS Variable: hsl(var(--muted-foreground))

Usage:
- Secondary text
- Labels
- Disabled states
- Hints
```

---

## 🔤 Typography System

### Serif Font: Playfair Display

#### Usage

- Main hero title (h1)
- Section titles (h2)
- Metric numbers
- Process step numbers
- Large callouts

#### Sizes

```
Hero Title:     3.25rem → 3.75rem → 4.375rem (responsive)
Section Title:  2rem → 2.25rem → 2.75rem
Metric/Number:  1.5rem → 1.875rem → 2.25rem
Regular Text:   1.25rem → 1.5rem
```

#### Font Weight

- Light (400) - Most headings
- Bold (700) - Emphasis, hero title

#### Line Height

- 0.95 - Tight (hero title)
- 1.1 - Headings
- 1.3 - Body text
- 1.5 - Relaxed spacing

### Sans-Serif Font: Karla

#### Usage

- Body text
- Labels
- UI elements
- Buttons
- Navigation

#### Sizes

```
Body:    0.875rem → 1rem → 1.125rem
Label:   0.6875rem (11px) - uppercase
Small:   0.75rem
Large:   1.125rem
```

#### Font Weight

- Light (300) - Subtitles, taglines
- Regular (400) - Body text
- Semi-bold (600) - Labels, emphasis
- Bold (700-800) - Strong emphasis

#### Letter Spacing

- Normal - 0.22em
- Tight - -0.03em (headings)

---

## 📐 Spacing System

### Base Unit

```
1 rem = 16px
0.5 rem = 8px (base spacing unit)
```

### Common Spacings

```
0.25rem  = 4px   (minimal)
0.5rem   = 8px   (tight)
0.75rem  = 12px  (compact)
1rem     = 16px  (standard)
1.25rem  = 20px  (comfortable)
1.5rem   = 24px  (relaxed)
2rem     = 32px  (generous)
2.5rem   = 40px  (large)
3rem     = 48px  (extra large)
```

### Padding Examples

```
Cards:       1.5rem → 2rem → 2.5rem
Sections:    2rem → 3rem → 4rem
Buttons:     0.625rem 1rem (height × width)
Input:       0.5rem 0.75rem
```

### Gaps (Grid/Flex)

```
Tight:    0.5rem
Normal:   1rem
Comfort:  1.5rem
Spacious: 2rem
Large:    2.5rem
```

### Margins

```
Between sections: 3rem → 4rem → 6rem
Around content:   2rem → 3rem → 4rem
Text spacing:     1rem → 1.5rem
```

---

## 🎭 Component Styles

### Hero Section

```
Structure:
├─ Eyebrow label
├─ Title with rose accent
├─ Description
├─ Tags
└─ Hero image

Colors:
├─ Eyebrow:      Muted foreground
├─ Title:        Foreground + rose accent
├─ Description:  Muted foreground
├─ Tags:         Foreground + card background

Spacing:
├─ Eyebrow → Title:       1rem
├─ Title → Desc:          1.5rem
├─ Desc → Tags:           2rem
├─ Tags → Image:          2rem

Typography:
├─ Eyebrow:   Karla 0.6875rem uppercase
├─ Title:     Playfair 3.25rem-4.375rem
├─ Desc:      Karla 1rem-1.125rem
├─ Tags:      Karla 0.6875rem uppercase
```

### Case Section

```
Structure:
├─ Section header
│  ├─ Number (rose)
│  ├─ Divider (—)
│  └─ Label
├─ Title
└─ Content

Colors:
├─ Number:   Rose (#E90083)
├─ Divider:  Border gray
├─ Label:    Muted foreground
├─ Title:    Foreground

Spacing:
├─ Header → Title:    1.5rem → 2rem
├─ Title → Content:   2rem → 2.5rem
├─ Section gap:       6rem → 8rem

Typography:
├─ Number:  Playfair 3rem-4rem light (70% opacity)
├─ Label:   Karla 0.6875rem uppercase
├─ Title:   Playfair 2rem-2.75rem
├─ Content: Karla 1rem-1.125rem
```

### Problem & Goals Cards

```
Problems Card:
├─ Header (gray)
└─ List with gray dots

Goals Card:
├─ Header (rose)
└─ List with rose dots

Colors:
├─ Problems header:    Muted foreground
├─ Problems dots:      Foreground 40% opacity
├─ Goals header:       Rose
├─ Goals dots:         Rose
├─ Goals background:   Rose 8% opacity

Spacing:
├─ Header → List:   1.25rem
├─ List gaps:       1rem
├─ Card padding:    1.5rem → 2rem → 2.5rem
├─ Grid gap:        1.5rem
```

### Process Grid

```
Layout: 1 column (mobile) → 2x2 grid (desktop)

Colors:
├─ Number:       Rose 50% opacity
├─ Background:   Background
├─ Hover bg:     Rose 8% opacity
├─ Text:         Foreground

Spacing:
├─ Grid gap:      1px (border-based gap)
├─ Card padding:  1.5rem → 2rem → 2.5rem
├─ Number margin: 0 0 1rem
├─ Title margin:  0 0 0.75rem

Typography:
├─ Number:  Playfair 3rem-4rem light
├─ Title:   Playfair 1.25rem-1.5rem
├─ Desc:    Karla 0.875rem-1rem
```

### Results Metrics

```
Layout: Stacked (mobile) → side-by-side (desktop)

Colors:
├─ Metric:    Rose
├─ Label:     Foreground 70% opacity
├─ Border:    Border gray
├─ Divider:   Border gray

Spacing:
├─ Metric width:   1rem
├─ Gap:            1.5rem (md: varies)
├─ Padding:        1.25rem-1.5rem
├─ List border:    1px top + bottom

Typography:
├─ Metric:  Playfair 1.5rem-2.25rem serif
├─ Label:   Karla 1rem-1.125rem
```

### Skill Badges

```
Layout: Flex wrap

Colors:
├─ Default bg:      Card background
├─ Default border:  Border
├─ Hover bg:        Rose 10% opacity
├─ Hover border:    Rose 30% opacity
├─ Hover text:      Rose
├─ Text:            Foreground 80%

Spacing:
├─ Gap:      0.625rem
├─ Padding:  0.5rem 1rem
├─ List gap: 0.625rem

Typography:
├─ Text:  Karla 0.6875rem uppercase
```

---

## 🎬 Animation Details

### Fade-Up Animation

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Timing

```
Duration:     700ms
Easing:       cubic-bezier(0.22, 1, 0.36, 1)
Curves smoothly from slow to fast, then ease out
```

#### Staggered Delays (Hero Section)

```
Eyebrow:      0ms
Title:        100ms
Description:  200ms
Tags:         300ms
Image:        400ms
```

#### Section Animations

```
All .reveal elements:  700ms fade-up
Staggered automatically by scroll position
```

### Hover Effects

#### Navigation Links

```
Color transition:  200ms ease
From muted gray → rose accent
Smooth color change
```

#### Skill Badges

```
All properties:    300ms ease
Changes:
  - Background: card → rose 10%
  - Border: gray → rose 30%
  - Text color: gray → rose
Smooth transformation
```

#### Process Cards

```
Background:     500ms ease
From background → rose 8% opacity
Smooth hover effect
```

#### CTA Arrows

```
Transform:  200ms-500ms cubic-bezier(0.22, 1, 0.36, 1)
Movement:   ←→ (±2px horizontal)
Smooth and natural
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)

```
Hero title:      3.25rem
Section title:   2rem
Body text:       1rem
Single column
Full-width padding: 1.25rem
Top nav visible
```

### Tablet (640px - 1023px)

```
Hero title:      3.75rem
Section title:   2.25rem
Body text:       1rem-1.125rem
2-column grids
Padding: 2rem horizontal
Top nav visible
```

### Desktop Tablet (768px - 1023px)

```
Hero title:      4.375rem
Section title:   2.75rem
Body text:       1.125rem
Larger spacing
More generous padding
```

### Desktop (1024px+)

```
Hero title:      4.375rem+
Section title:   2.75rem+
Body text:       1.125rem
Sidebar visible (260px)
Content area: flexible
Max-width preserved
```

---

## 🔄 Layout Transformations

### Sidebar (Desktop Only)

```
Mobile/Tablet:  Hidden (display: none)
Desktop:        Visible (display: flex)
                Sticky positioned
                260px width
                Separate nav from content
```

### Mobile Top Bar

```
Mobile/Tablet:  Visible (display: flex)
                Sticky below main navbar
                Horizontal scroll sections
Desktop:        Hidden (display: none)
```

### Grid Columns

```
Context:        1 col → (768px) → grid(5 cols)
Problems:       1 col → (768px) → 2 cols
Process:        1 col → (640px) → 2x2 grid
```

---

## 🎨 Visual Hierarchy

### Typography Scale

```
Level 1:  Hero title (3.25rem-4.375rem)
Level 2:  Section titles (2rem-2.75rem)
Level 3:  Subheadings (1.25rem-1.5rem)
Level 4:  Body text (1rem-1.125rem)
Level 5:  Labels (0.875rem)
Level 6:  Small text (0.6875rem)
```

### Weight Emphasis

```
Extra bold (800):  Hero title emphasis
Bold (700):        Title, strong text
Semi-bold (600):   Labels, UI emphasis
Regular (400):     Body text, descriptions
Light (300):       Subtitles, taglines
```

### Color Emphasis

```
Rose:              Primary accent, calls-to-action
Foreground:        Main text, titles
Muted foreground:  Secondary text, labels
Border:            Dividers, subtle separations
```

---

## 🎯 Component Spacing Patterns

### Card Pattern

```
Card {
  border: 1px solid border
  border-radius: 0.75rem
  padding: 1.5rem (md: 2rem, lg: 2.5rem)
  background: white/card
  box-shadow: shadow-card
}
```

### Section Pattern

```
Section {
  max-width: 52rem
  margin: 0 auto
  padding: 0 (horizontal via content-area)
  margin-bottom: 6rem (md: 8rem)
  scroll-margin-top: 8rem
}
```

### List Pattern

```
List {
  list-style: none
  padding: 0
  display: flex
  flex-direction: column
  gap: 1rem
}

List Item {
  display: flex
  gap: 1rem
  align-items: flex-start
}

Marker {
  width: 6px
  height: 6px
  border-radius: 50%
  background: color
  margin-top: 8px
  flex-shrink: 0
}
```

---

## ✨ Visual Consistency

### Rounded Corners

```
--radius: 0.75rem (12px)
All:  Cards, badges, image placeholders
```

### Shadows

```
--shadow-soft: Subtle, minimal
--shadow-card: For elevated cards
Used sparingly for depth
```

### Borders

```
Default:  1px solid border
Never more than 2px
Consistent throughout
```

### Whitespace

```
Breathing room between sections
Never cramped
Generous padding on cards
Spacious layouts
```

---

## 🎓 Design Principles Applied

1. **Hierarchy**: Clear visual order with typography scale
2. **Consistency**: Unified spacing, colors, typography
3. **Contrast**: Rose accent against cream background
4. **Readability**: Generous line-height, font sizes
5. **Responsiveness**: Fluid, adapts to all sizes
6. **Accessibility**: High color contrast, clear labels
7. **Motion**: Smooth, purposeful animations
8. **Polish**: Refined details, attention to spacing

---

## 📊 Quick Reference Cards

### Color Codes

```
Rose:              #E90083 (rgb(233, 0, 131))
Deep Olive:        #505749
Warm Cream:        #F5F2EC
Light Gray Border: ~#D4D4D0
```

### Font Stacks

```
Serif:   "Playfair Display", serif
Sans:    "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

### Breakpoints

```
Mobile:       < 640px
Tablet:       640px - 1023px
Desktop:      1024px+
Large:        1280px+
```

### Common Sizes

```
Hero:       3.25rem (52px) → 4.375rem (70px)
Section:    2rem (32px) → 2.75rem (44px)
Body:       1rem (16px)
Label:      0.6875rem (11px)
```

---

**Everything is designed to work together seamlessly. The rose accent (#E90083) ties everything together and creates visual interest throughout the page.** 🌸
