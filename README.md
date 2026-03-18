# Portfolio
# Edbert Chandra — Portfolio

A clean, minimal personal portfolio built with HTML, CSS, and JavaScript to introduce who I am and what I do.

![Static Badge](https://img.shields.io/badge/portfolio-static-blue)
![Tech](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![Tech](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![Tech](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Overview

This site is a simple, fast-loading personal landing page with:
- A top navigation bar (Home, About, Services, Portfolio, Contact)
- A friendly hero greeting with a waving hand GIF
- Modern typography via Google Fonts
- Responsive viewport for mobile and desktop
- Clean and minimalist design focused on user experience

It's a great base to expand into a full portfolio with sections for your bio, skills, projects, and contact information.

---

## Live Preview

- **Local:** Open `index.html` directly in your browser.
- **GitHub Pages:** Host with GitHub Pages (Settings → Pages) and access at:
  - https://solynixx.github.io/Portfolio/

> Note: If Pages isn't enabled yet, the link above will not be live.

---

## Language Composition

This project is built with:
- **CSS:** 51.4% — Styling and responsive design
- **HTML:** 33% — Semantic markup and structure
- **JavaScript:** 15.6% — Interactivity and dynamic features

---

## Tech Stack

- **HTML5** — Semantic markup and accessibility
- **CSS3** — Modern styling, flexbox, grid, and responsive design
- **JavaScript** — Progressive enhancement with `index.js` for interactivity

Fonts from Google Fonts are preloaded for performance and style.

---

## Project Structure

```
.
├─ index.html        # Main page with header/navigation and hero greeting
├─ style.css         # Global styles (layout, colors, typography, responsiveness)
├─ index.js          # JavaScript for interactivity and enhancements
├─ assets/           # Images and other static assets
└─ LICENSE           # MIT License
```

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Solynixx/Portfolio.git
   cd Portfolio
   ```
2. Open `index.html` in your browser.

No build steps required. This is a static site that works out of the box!

---

## Customization

### Name and Greeting
In `index.html`, update the hero text:
```html
<h1>Hello World!! 👋</h1>
<p>I'm Edbert Chandra</p>
```

### Navigation
Update the header links in `index.html` to point to real sections or pages.

### Typography
Fonts are linked in `<head>` via Google Fonts. Adjust or replace font families as desired.

### Colors and Layout
Edit `style.css` to customize:
- Theme colors
- Spacing and padding
- Component styles
- Breakpoints for mobile responsiveness

### Waving Hand
The hero uses a GIF from Giphy. You can swap it for a local asset in `assets/` and update the `src` attribute.

### JavaScript Enhancements
Use `index.js` to add:
- Smooth scrolling
- Active link highlighting
- Form validation
- Dynamic content loading

---

## Accessibility & SEO

- `lang="en"` is set on `<html>`.
- Best practices implemented:
  - Descriptive `<meta name="description" content="...">` in `<head>`
  - `alt` text for all images (e.g., `alt="Waving hand"`)
  - Semantic HTML5 sections for About, Services, Portfolio, and Contact
  - Proper heading hierarchy (h1, h2, etc.)
  - ARIA labels where appropriate

---

## Performance

- Static site = ultra-fast load times
- No external dependencies or build tools
- Optimized assets in `assets/` folder
- CSS and JavaScript are lightweight

---

## Roadmap

- ✅ Clean, minimal design foundation
- 🔄 Build out real sections for About, Services, Portfolio, and Contact
- 🔄 Add smooth scrolling and active link highlighting
- 🔄 Include a favicon and social/profile links
- 🔄 Add a contact form with form handling
- 🔄 Add project cards with images and descriptions
- 🔄 Dark mode toggle (via JavaScript)
- 🔄 Mobile menu animation

---

## Acknowledgments

- [Google Fonts](https://fonts.google.com/) — Beautiful typography
- [Giphy](https://giphy.com/) — Waving hand GIF

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.