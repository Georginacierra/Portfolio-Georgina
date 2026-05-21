# Verdant UX Garden - HTML/CSS/JS Conversion

This folder contains vanilla HTML, CSS, and JavaScript conversions of the React-based portfolio pages.

## 📁 Folder Structure

```
portfolio-Georgina/
├── landing/                    # Landing page conversion
│   ├── index.html             # Main HTML file
│   ├── styles.css             # All CSS styling
│   ├── script.js              # JavaScript interactions
│   └── README.md              # Detailed technical docs
│
├── QUICK_START.md             # Quick setup guide (START HERE)
├── CONVERSION_SUMMARY.md      # Detailed conversion reference
└── INDEX.md                   # This file
```

## 🚀 Quick Start

1. **For a quick test**, open `landing/index.html` directly in your browser
2. **For local development**, read `QUICK_START.md`
3. **For technical details**, read `landing/README.md`
4. **For conversion reference**, read `CONVERSION_SUMMARY.md`

## 📄 Pages Included

### ✅ Landing Page (`/landing`)

- **Status**: Complete
- **Components**: TopNav, Hero Section, Flower Grid, Project Cards, Footer
- **Features**:
  - Desktop: Flowers in corners with hover cards
  - Mobile/Tablet: Project grid layout
  - Fully responsive with CSS breakpoints
  - Dark mode support
  - Smooth animations and transitions

**What was converted:**

- `React/Landing.tsx` → `index.html`
- `React/components/TopNav.tsx` → Navigation section in HTML
- `React/components/case-study/*` → Project card components
- Tailwind CSS → Pure CSS with variables
- React state management → Vanilla JavaScript

## 🎨 Design Features

### Color Palette

- **Background**: #F5F2EC (warm off-white)
- **Foreground**: #505749 (deep olive)
- **Accent**: #FEF0D3 (cream)
- **Highlight**: #D41A7D (magenta)
- **Dark Mode**: Automatic via `prefers-color-scheme`

### Typography

- **Font**: Karla (weights: 300, 400, 600, 700, 800)
- **Source**: Google Fonts
- **Responsive**: Uses `clamp()` for fluid sizing

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+
- **Large**: 1280px+

## 🎯 Key Features

✅ **Fully Responsive Design**

- Mobile-first approach
- Tested at multiple breakpoints
- Respects original Tailwind implementation

✅ **Interactive Elements**

- Flower hover animations
- Project card reveals
- Navigation active states
- Smooth transitions (300ms-700ms)

✅ **Accessibility**

- Semantic HTML
- ARIA labels
- Keyboard navigation
- `prefers-reduced-motion` support
- High contrast colors

✅ **No Dependencies**

- Pure HTML5
- Vanilla CSS (with Google Fonts)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

✅ **Performance Optimized**

- Hardware-accelerated animations
- CSS Grid & Flexbox
- Minimal JavaScript
- ~26KB total (uncompressed)

## 📊 File Sizes

| File                     | Size      |
| ------------------------ | --------- |
| landing/index.html       | ~8-10 KB  |
| landing/styles.css       | ~15-18 KB |
| landing/script.js        | ~3-4 KB   |
| Total (excluding images) | ~26-32 KB |

## 🔍 Browser Support

| Feature         | Support                                   |
| --------------- | ----------------------------------------- |
| Modern Browsers | ✅ Chrome, Firefox, Safari, Edge          |
| CSS Variables   | ✅ Full support                           |
| CSS Grid        | ✅ Full support                           |
| Flexbox         | ✅ Full support                           |
| Dark Mode       | ✅ Via prefers-color-scheme               |
| IE 11           | ❌ Not supported (CSS Variables required) |

## 🛠️ How to Use

### Local Development

```bash
# Navigate to landing folder
cd portfolio-Georgina/landing

# Option 1: Direct file open
open index.html

# Option 2: Python server (recommended)
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deployment

1. Copy `portfolio-Georgina/landing/` folder to your web server
2. Ensure public folder with flower images is accessible at correct path
3. Update image paths in `index.html` if needed
4. Deploy and test

### Customization

- **Colors**: Edit `:root` variables in `styles.css`
- **Text Content**: Update HTML in `index.html`
- **Images**: Replace flower images in public folder
- **Spacing**: Adjust CSS rem/px values
- **Animations**: Modify transition durations in CSS

## 📖 Documentation

### For Getting Started

→ Read `QUICK_START.md` first

### For Technical Details

→ Read `landing/README.md` for:

- CSS variables reference
- Responsive breakpoints
- Animation details
- Accessibility features
- Dark mode support

### For Conversion Details

→ Read `CONVERSION_SUMMARY.md` for:

- Component mapping (React → HTML)
- Tailwind → CSS conversions
- Responsive behavior details
- JavaScript functionality
- Performance considerations

## 🔄 Conversion Process

Each React component was analyzed and converted:

1. **Structure Analysis**: Understanding React component hierarchy
2. **HTML Creation**: Semantic HTML with proper markup
3. **CSS Conversion**: Tailwind utilities → Pure CSS with variables
4. **JavaScript**: React state → Vanilla JS event handling
5. **Responsive Design**: Media queries matching Tailwind breakpoints
6. **Testing**: Visual and interactive verification

## 🎭 Component Breakdown

### Landing Page Components Converted

```
Landing (main page)
├── TopNav
│   ├── Logo
│   ├── Nav Links (with active state)
│   └── Styling (sticky, backdrop blur)
├── Hero Section
│   ├── Centered title "Georgina Cierra"
│   ├── Subtitle and tagline
│   └── Hint text (desktop only)
├── Desktop Flowers (1024px+)
│   ├── Flower 01 - IAnergy (top-left)
│   ├── Flower 02 - Gustichef (bottom-left)
│   ├── Flower 03 - Les Martines (top-right)
│   └── Flower 04 - Fast Retailing (bottom-right)
├── Project Cards (hover reveal)
│   ├── Card number and category
│   ├── Project title
│   ├── Description
│   └── CTA button
├── Mobile Grid (< 1024px)
│   ├── 1-column layout (mobile)
│   ├── 2-column layout (tablet)
│   └── Always-visible cards
└── Footer
    ├── "mon jardin" label
    ├── Copyright
    └── Social links
```

## ⚡ Performance Notes

- **Animations**: Use transform and opacity (GPU accelerated)
- **Layout**: Minimal reflows/repaints
- **JavaScript**: Event delegation, no polling
- **Images**: Reference from main public folder (no duplication)
- **CSS**: Single file, no @import delays

## 🔐 Accessibility Features

- ✅ Semantic HTML5 structure
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ `prefers-reduced-motion` respected
- ✅ `prefers-color-scheme` for dark mode
- ✅ High contrast text colors (WCAG AA)
- ✅ Proper heading hierarchy
- ✅ Form-like elements have proper labels

## 🚀 Next Steps

1. **Test the page**: Open `landing/index.html`
2. **Review documentation**: Read `landing/README.md`
3. **Customize**: Update colors, text, images
4. **Deploy**: Push to your web server
5. **Monitor**: Track user interactions

## 📝 File Checklist

- ✅ `landing/index.html` - Complete
- ✅ `landing/styles.css` - Complete (no errors)
- ✅ `landing/script.js` - Complete
- ✅ `landing/README.md` - Complete
- ✅ `QUICK_START.md` - Complete
- ✅ `CONVERSION_SUMMARY.md` - Complete
- ✅ `INDEX.md` - Complete (this file)

## 🎓 Learning Resources

If you want to understand the code:

1. **HTML**: Simple semantic structure - read `index.html`
2. **CSS**: Custom properties system - read top of `styles.css`
3. **JavaScript**: Basic event handling - read `script.js`
4. **Responsive**: Media query patterns - search `@media` in `styles.css`

## ✨ Key Achievements

✅ Full feature parity with React version
✅ All responsive breakpoints preserved
✅ All interactive features working
✅ Zero dependencies (no frameworks)
✅ Optimized file sizes
✅ Accessible and semantic
✅ Dark mode support
✅ Well documented

## 📞 Support

For questions:

1. Check relevant README file for the component
2. Review CONVERSION_SUMMARY.md for specific mappings
3. Inspect HTML/CSS/JS directly in your editor
4. Use browser DevTools (F12) for debugging

---

**Created**: May 2026  
**Source**: Verdant UX Garden - Georgina Cierra Portfolio  
**Format**: HTML5 + CSS3 + JavaScript (ES6+)
