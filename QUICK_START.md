# Quick Start Guide - Landing Page HTML/CSS/JS

## File Organization

```
portfolio-Georgina/
├── landing/
│   ├── index.html      ← Main HTML file (START HERE)
│   ├── styles.css      ← All styling
│   ├── script.js       ← Interactivity
│   └── README.md       ← Detailed documentation
├── CONVERSION_SUMMARY.md
└── QUICK_START.md      ← This file
```

## Setup Instructions

### Option 1: Direct File Opening (Quick Test)

```bash
# Just open the HTML file in your browser
open portfolio-Georgina/landing/index.html
```

### Option 2: Using a Local Server (Recommended)

**Python 3:**

```bash
cd portfolio-Georgina/landing
python -m http.server 8000
# Visit http://localhost:8000
```

**Python 2:**

```bash
cd portfolio-Georgina/landing
python -m SimpleHTTPServer 8000
# Visit http://localhost:8000
```

**Node.js (http-server):**

```bash
npm install -g http-server
cd portfolio-Georgina/landing
http-server
```

**macOS (using Python):**

```bash
cd /Users/georginacierra/Documents/remix-of-remix-of-verdant-ux-garden/portfolio-Georgina/landing
python3 -m http.server 8000
```

## What to Expect

### Desktop (1024px and above)

1. **Hero Section**: Centered name "Georgina Cierra" with description
2. **Flower Corners**: Four flower images positioned in corners
3. **Hover Interaction**:
   - Hover over any flower
   - Project card appears with smooth animation
   - Card shows: number, category, title, description, CTA button
   - Close button appears on card hover

### Tablet (640px - 1023px)

1. **Hero Section**: Same, but possibly smaller font
2. **Project Grid**: 2-column grid of projects below hero
3. **Cards Always Visible**: No hover interactions needed

### Mobile (Below 640px)

1. **Hero Section**: Single column, smaller text
2. **Project Grid**: 1-column vertical list
3. **Cards Always Visible**: All information shown by default

## Component Parts

### Navigation Bar (TopNav)

- Logo: "GC" on the left
- Links: "Mes projets" and "About" on the right
- Sticky positioning
- Active link highlighted in magenta (#D41A7D)

### Hero Section

- Large title: "Georgina Cierra"
- Subtitle: "UI UX Designer"
- Tagline: "Chaque projet, une intention de design."
- Hint text (desktop only): "Survolez chaque fleur pour découvrir mes projets"

### Project Cards (4 total)

1. **IAnergy** (Flower: Ixora) - Top Left
   - Category: Design prospectif
   - Description: Prototype d'application futuriste...

2. **Gustichef** (Flower: Hibiscus) - Bottom Left
   - Category: UX Case Study
   - Description: Plateforme de services de chefs...

3. **Les Martines** (Flower: Sunflower) - Top Right
   - Category: WordPress / Web Design
   - Description: Refonte du site web sous WordPress...

4. **Fast Retailing** (Flower: Bougainvillea) - Bottom Right
   - Category: Alternance
   - Description: Webdesign et optimisation UX e-commerce...

### Footer

- "mon jardin" on the left
- "Georgina © 2026" in center
- Links: LinkedIn · Behance on the right

## Key Features

✅ **Fully Responsive**

- Mobile first approach
- Breakpoints at 640px, 768px, 1024px, 1280px

✅ **Interactive**

- Flower hover animations
- Card open/close functionality
- Active navigation state

✅ **Styled Consistently**

- All colors from CSS variables
- Consistent spacing and typography
- Smooth transitions throughout

✅ **Accessible**

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- High contrast text

✅ **Dark Mode Ready**

- Colors automatically adapt based on system preference
- CSS variables support both light and dark themes

## Testing Checklist

### Desktop Testing

- [ ] Open in browser at 1920x1080
- [ ] Hover over each flower
- [ ] Verify card appears smoothly
- [ ] Click close button on card
- [ ] Card disappears
- [ ] Click "View project" link (should navigate)
- [ ] Navigation links are highlighted correctly

### Tablet Testing

- [ ] Resize browser to 768px width
- [ ] Verify 2-column grid shows
- [ ] Flowers should not be in corners
- [ ] All cards should be visible

### Mobile Testing

- [ ] Resize browser to 375px width
- [ ] Verify 1-column layout
- [ ] Touch/tap interactions work
- [ ] Images scale properly
- [ ] Text is readable without zooming

### Dark Mode Testing

- [ ] System preference: Light Mode
  - Background: #F5F2EC (warm cream)
  - Text: #505749 (dark green)
- [ ] System preference: Dark Mode
  - Background: Dark gray
  - Text: Light cream

## Common Issues & Solutions

### Images Not Loading

**Problem**: Flower images show as broken
**Solution**:

- Check image paths in HTML
- Currently set to `../../public/flowers/`
- Adjust if hosting in different directory structure
- Ensure flower images are in correct folder

### Styles Not Applied

**Problem**: Page looks unstyled
**Solution**:

- Ensure styles.css is in same folder as index.html
- Check browser console for CSS loading errors
- Clear browser cache (Cmd+Shift+R on Mac)

### JavaScript Not Working

**Problem**: Hover interactions don't work
**Solution**:

- Check script.js is in same folder as index.html
- Open browser console (F12) for errors
- Ensure JavaScript is enabled in browser

### Links Not Working

**Problem**: Clicking "View project" doesn't navigate
**Solution**:

- These are demo links (href="/case-study/...")
- Would need integration with a router
- Currently just show that links are clickable

## Customization

### Change Colors

Edit `:root` variables in `styles.css`:

```css
:root {
  --background: 41 30% 94%; /* Change this HSL value */
  --foreground: 86 9% 29%;
  --highlight: 327 78% 47%;
  /* ... etc */
}
```

### Change Project Text

Edit the HTML directly in `index.html`:

- Find the `.flower-card` div
- Update `.card-title`, `.card-description`, etc.

### Change Images

Update the `src` attributes in `.flower-image`:

```html
<img src="path/to/your/image.png" alt="Description" />
```

### Adjust Spacing

Edit CSS properties like:

```css
padding: 1.25rem; /* Increase/decrease padding */
gap: 2rem; /* Adjust gap between items */
margin-top: 1.5rem; /* Modify margins */
```

## Performance Tips

1. **Optimize Images**:
   - Compress PNG flowers to reduce file size
   - Consider WebP format for modern browsers

2. **Minify Files** (for production):
   - Use CSS minifier for styles.css
   - Use JS minifier for script.js
   - Use HTML minifier for index.html

3. **Cache Busting**:
   - Add version query params to CSS/JS
   - Example: `styles.css?v=1.0.0`

## Browser Support

| Feature         | Chrome | Firefox | Safari | Edge |
| --------------- | ------ | ------- | ------ | ---- |
| CSS Grid        | ✅     | ✅      | ✅     | ✅   |
| Flexbox         | ✅     | ✅      | ✅     | ✅   |
| CSS Variables   | ✅     | ✅      | ✅     | ✅   |
| clamp()         | ✅     | ✅      | ✅     | ✅   |
| backdrop-filter | ✅     | ✅      | ✅     | ✅   |
| ES6 JavaScript  | ✅     | ✅      | ✅     | ✅   |

## Next Steps

1. **Test in real browser** using the setup instructions above
2. **Customize colors/text** to match your needs
3. **Integrate with backend** for dynamic project data
4. **Deploy** to web hosting (Netlify, Vercel, GitHub Pages, etc.)
5. **Implement routing** for navigation links
6. **Add analytics** for tracking interactions

## Support Files

- `README.md` - Detailed technical documentation
- `CONVERSION_SUMMARY.md` - How React components were converted to HTML/CSS/JS
- `QUICK_START.md` - This file

## Questions?

Refer to:

1. `landing/README.md` for technical details
2. `CONVERSION_SUMMARY.md` for mapping references
3. Browser DevTools (F12) for debugging
4. CSS/HTML/JavaScript documentation for standard features
