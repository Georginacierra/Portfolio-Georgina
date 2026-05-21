# Landing Page - HTML/CSS/JavaScript Conversion

## Overview

This folder contains a vanilla HTML, CSS, and JavaScript conversion of the React Landing page from the main Verdant UX Garden portfolio project.

## File Structure

```
landing/
├── index.html      # Main HTML structure and markup
├── styles.css      # All CSS styling and responsive design
├── script.js       # Vanilla JavaScript for interactions
└── README.md       # This file
```

## Key Features

### 1. **Responsive Design**

- Desktop (1024px+): Flower cards positioned in corners with hover interactions
- Tablet & Mobile: Grid layout for project cards
- All breakpoints respect the original Tailwind implementation

### 2. **Color System**

- CSS custom properties (variables) for all colors
- Support for light and dark modes using `prefers-color-scheme`
- Palette includes:
  - Background: `#F5F2EC` (warm off-white)
  - Foreground: `#505749` (deep olive/charcoal-green)
  - Accent: `#FEF0D3` (warm cream)
  - Highlight: `#D41A7D` (magenta)

### 3. **Typography**

- Single font family: Karla (imported from Google Fonts)
- Font weights: 300, 400, 600, 700, 800
- Label styling with uppercase, letter-spacing utility
- Responsive font sizing with `clamp()`

### 4. **Interactive Elements**

#### Desktop (1024px+)

- Flower images positioned absolutely in four corners
- Hover interaction reveals project cards with smooth transitions
- Cards display:
  - Project number and category
  - Project title
  - Description
  - "View project" CTA button
  - Close button (visible on hover)
- Rotation effect per corner (±15deg)
- Scale effect on hover (1.05x)

#### Mobile/Tablet

- Grid layout (1 column on mobile, 2 columns on tablet)
- Project cards always visible
- Flower images with labels
- Full project information displayed

### 5. **JavaScript Functionality**

- Flower hover state management
- Card open/close interactions
- Navigation active state detection
- Accessibility support (keyboard navigation)
- Smooth transitions and animations

## CSS Variables Reference

### Colors

```css
--background: 41 30% 94%; /* Light mode background */
--foreground: 86 9% 29%; /* Text color */
--card: 41 50% 91%; /* Card background */
--muted: 41 25% 88%; /* Muted backgrounds */
--muted-foreground: 86 9% 45%; /* Muted text */
--accent: 41 96% 91%; /* Accent color */
--highlight: 327 78% 47%; /* Highlight/Primary color */
--border: 86 8% 78%; /* Border color */
```

### Spacing

```css
--radius: 0.75rem; /* Border radius */
```

### Shadows

```css
--shadow-soft: 0 18px 40px -24px hsl(86 15% 20% / 0.18);
--shadow-card:
  0 1px 0 hsl(86 8% 78% / 0.6), 0 24px 60px -32px hsl(86 15% 20% / 0.22);
```

## Responsive Breakpoints

| Breakpoint | Device      | CSS                        | Notes                    |
| ---------- | ----------- | -------------------------- | ------------------------ |
| Default    | Mobile      | -                          | Base styles              |
| 640px      | Small (sm)  | @media (min-width: 640px)  | Tablets                  |
| 768px      | Medium (md) | @media (min-width: 768px)  | Small laptops            |
| 1024px     | Large (lg)  | @media (min-width: 1024px) | Desktop (flowers appear) |
| 1280px     | XL (xl)     | @media (min-width: 1280px) | Larger screens           |

## How to Use

### Local Development

1. Open `index.html` in a web browser
2. For production, consider:
   - Using a local server (e.g., `python -m http.server`)
   - Updating image paths if hosting in a subdirectory

### Relative Paths

Image paths are currently set to `../../public/flowers/` to work with the relative file structure. Adjust these based on your hosting setup.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required
- CSS `clamp()` for responsive sizing

## Animation Details

### Reveal Animation

- Duration: 700ms
- Timing: cubic-bezier(0.22, 1, 0.36, 1)
- Effect: Fade in + slide up from 16px

### Card Transitions

- Duration: 300ms
- Effects:
  - Opacity fade
  - Vertical translation
  - Pointer events toggling

### Flower Hover

- Duration: 300ms
- Effects:
  - Scale: 1.05x
  - Rotation maintained per corner

## Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Respects `prefers-reduced-motion` preference
- Proper focus states
- High contrast text colors

## Dark Mode Support

The CSS automatically adapts to dark mode using the `prefers-color-scheme` media query. Colors are inverted appropriately:

- Light backgrounds become dark
- Light text becomes dark
- Accent colors are brightened for visibility

## Notes

- All spacing uses rem units for scalability
- All colors use HSL format with CSS variables for easy theming
- JavaScript is vanilla (no dependencies)
- No external libraries required (except Google Fonts)
