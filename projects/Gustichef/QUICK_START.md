# 🚀 Gusti-Chef — Quick Start Guide

## ⚡ Get Started in 2 Minutes

### Option 1: Direct Open (Easiest)

```bash
# Mac
open /portfolio-Georgina/projects/Gustichef/index.html

# Windows
start /portfolio-Georgina/projects/Gustichef/index.html

# Linux
xdg-open /portfolio-Georgina/projects/Gustichef/index.html
```

### Option 2: Local Server (Recommended)

```bash
# Navigate to the folder
cd /portfolio-Georgina/projects/Gustichef

# Start a local server
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Visit in browser
http://localhost:8000
```

---

## 📋 Files Included

| File                    | Size  | Purpose                         |
| ----------------------- | ----- | ------------------------------- |
| `index.html`            | 18 KB | Complete HTML structure         |
| `styles.css`            | 28 KB | All styling & responsive design |
| `script.js`             | 4 KB  | Navigation & animations         |
| `README.md`             | -     | Full documentation              |
| `CONVERSION_SUMMARY.md` | -     | Conversion details              |

---

## ✨ What You'll See

### Desktop (1024px+)

- **Left Sidebar**: Section navigation (sticky)
- **Main Content**: All 6 case study sections
- **Rose Accents**: Throughout the page

### Tablet (640px - 1023px)

- **Top Bar**: Sticky navigation with horizontal scroll
- **Main Content**: Full-width, optimized spacing
- **2-Column Layouts**: Problems & Goals, Process steps

### Mobile (< 640px)

- **Top Bar**: Section links (horizontal scroll)
- **Full Width**: All content adapts to screen size
- **1-Column Layouts**: Optimized for touch

---

## 🎨 Key Visual Elements

### Colors

- **Rose Accent**: `#E90083` (on titles, links, highlights)
- **Deep Olive Text**: `#505749`
- **Warm Cream Background**: `#F5F2EC`
- **Light Borders**: Gray variants

### Fonts

- **Headings**: Playfair Display (serif)
- **Body Text**: Karla (sans-serif)
- **Uppercase Labels**: All capitals with letter-spacing

### Layout

- **Desktop**: 2-column (sidebar + content)
- **Tablet**: Single column, optimized padding
- **Mobile**: Full-width, mobile-friendly

---

## 🔄 Interactive Features

### Navigation

- ✅ Scroll to sections smoothly
- ✅ Active link highlighting
- ✅ Click sidebar/top bar items to navigate
- ✅ Back to portfolio link works

### Animations

- ✅ Fade-up entrance animations
- ✅ Hover effects on cards and links
- ✅ Smooth color transitions
- ✅ Arrow animations

### Responsiveness

- ✅ Test by resizing browser window
- ✅ All layouts adapt automatically
- ✅ Touch-friendly on mobile

---

## 📱 Testing Checklist

### Desktop Test (1024px+)

- [ ] Sidebar appears on left
- [ ] Section links highlighted on scroll
- [ ] Hover effects work
- [ ] Rose accent visible
- [ ] All fonts load correctly

### Tablet Test (640px - 1023px)

- [ ] Top navigation bar visible
- [ ] Horizontal scroll works for sections
- [ ] Two-column layouts render
- [ ] Spacing is optimal
- [ ] No horizontal scrolling

### Mobile Test (< 640px)

- [ ] Single-column layout
- [ ] Top navigation bar
- [ ] Section links scroll horizontally
- [ ] Touch targets are large enough
- [ ] Text is readable

---

## 🛠️ Customization Tips

### Change Rose Color

Find this in `styles.css`:

```css
--highlight-rgb: 233 0 131; /* Rose accent */
```

Change to your color's RGB values:

```css
--highlight-rgb: YOUR_R YOUR_G YOUR_B;
```

### Change Typography

Update the Google Fonts import in `styles.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@...");
```

Then update font declarations in CSS.

### Update Content

Edit text directly in `index.html`. All sections are clearly labeled:

```html
<!-- 01 — Context -->
<!-- 02 — Problem & Goals -->
<!-- 03 — Process -->
<!-- 04 — Solution -->
<!-- 05 — Results -->
<!-- 06 — Skills -->
```

### Add Images

Replace image placeholders:

```html
<figure class="image-placeholder botanical-surface">
  <div class="placeholder-content">
    <p class="placeholder-label">Visuel à venir</p>
  </div>
</figure>
```

With actual images:

```html
<figure class="image-placeholder">
  <img src="your-image.jpg" alt="Description" />
  <figcaption>Image caption</figcaption>
</figure>
```

---

## 🐛 Troubleshooting

### Page looks wrong

- Check that all 3 files (HTML, CSS, JS) are in the same folder
- Verify file paths are correct
- Clear browser cache (Ctrl+Shift+Delete)

### Sidebar not showing

- Check viewport width (should be ≥ 1024px)
- Sidebar only appears on desktop
- On mobile/tablet, use top navigation bar

### Animations not smooth

- Check if `prefers-reduced-motion` is enabled
- Try a different browser
- Check JavaScript console for errors

### Images not loading

- Verify image paths are correct
- Use relative paths if files are local
- Check image file formats are supported

---

## 📊 Browser Compatibility

| Browser       | Version | Support |
| ------------- | ------- | ------- |
| Chrome        | 90+     | ✅ Full |
| Firefox       | 88+     | ✅ Full |
| Safari        | 14+     | ✅ Full |
| Edge          | 90+     | ✅ Full |
| Mobile Safari | 14+     | ✅ Full |
| Chrome Mobile | Latest  | ✅ Full |

---

## ⚙️ Technical Details

### No Dependencies

- Pure HTML5
- Vanilla CSS3
- ES6+ JavaScript
- No frameworks required
- No build process needed

### File Structure

```
Must be in same folder:
- index.html
- styles.css
- script.js

Can be in subdirectories:
- images/
- assets/
(But update paths accordingly)
```

### Performance

- Fast load times (~50KB uncompressed)
- Minimal JavaScript (only ~4KB)
- GPU-accelerated animations
- Optimized for 60fps

---

## 📚 Documentation

### Full Documentation

See `README.md` for:

- Complete technical reference
- CSS variable documentation
- JavaScript function details
- Accessibility features
- Responsive breakpoint guide

### Conversion Details

See `CONVERSION_SUMMARY.md` for:

- React to HTML mapping
- Feature checklist
- Code structure overview
- Customization guide

---

## 🚀 Deployment

### To Web Server

1. Copy all 3 files to your server
2. Ensure file structure is preserved
3. Test on live domain
4. Monitor performance

### To Static Hosting

- Netlify: Drag and drop files
- Vercel: Connect GitHub repo
- GitHub Pages: Push to gh-pages branch
- AWS S3: Upload and configure

### Best Practices

- Minify CSS/JS for production
- Enable gzip compression
- Use CDN for images
- Set proper cache headers
- Monitor with analytics

---

## 🎓 Learning

### Understand the Code

1. Read the HTML structure (it's semantic)
2. Review CSS comments (explain each section)
3. Study JavaScript logic (well-commented)
4. Check README for details

### Modify Safely

1. Keep backups of original files
2. Test changes in local environment
3. Test on multiple devices
4. Validate HTML/CSS before deploying

### Get Help

- Check browser console for errors (F12)
- Review CSS cascade in DevTools
- Test in multiple browsers
- Check accessibility inspector

---

## ✅ Success Criteria

Your conversion is working correctly if:

- [ ] Page loads without errors
- [ ] Sidebar shows on desktop (1024px+)
- [ ] Top bar shows on mobile/tablet
- [ ] Rose accent (#E90083) is visible
- [ ] Fonts load correctly
- [ ] Animations are smooth
- [ ] Sections are clickable
- [ ] Responsive design works
- [ ] No console errors
- [ ] All content is readable

---

## 🎉 You're Ready!

Everything is set up and ready to go. Just:

1. **Open the page** - Direct open or local server
2. **Test it** - Check desktop, tablet, mobile views
3. **Customize** - Update colors, fonts, content as needed
4. **Deploy** - Push to your web server

**No build steps. No dependencies. No setup needed. Just open and use!** 🚀

---

## 📞 Quick Reference

### File Locations

- HTML: `/portfolio-Georgina/projects/Gustichef/index.html`
- CSS: `/portfolio-Georgina/projects/Gustichef/styles.css`
- JS: `/portfolio-Georgina/projects/Gustichef/script.js`

### Important Classes

- `.sidebar` - Desktop sidebar
- `.mobile-topbar` - Mobile navigation
- `.case-section` - Content sections
- `.hero-title` - Main title
- `.reveal` - Animated elements

### Important Colors

- `--highlight-rgb: 233 0 131` - Rose accent
- `--foreground: 86 9% 29%` - Text color
- `--background: 41 30% 94%` - Background
- `--border: 86 8% 78%` - Border color

### Important Fonts

- `font-family: "Playfair Display", serif` - Headings
- `font-family: "Karla", sans-serif` - Body text

---

**Created**: May 16, 2026
**Status**: ✅ Complete & Ready to Use
**Support**: See README.md for full documentation
