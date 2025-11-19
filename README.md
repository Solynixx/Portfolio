# Portfolio
# Edbert Chandra — Portfolio

A clean, minimal personal portfolio built with HTML and CSS to introduce who I am and what I do.

![Static Badge](https://img.shields.io/badge/portfolio-static-blue)
![Tech](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![Tech](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Overview

This site is a simple, fast-loading personal landing page with:
- A top navigation bar (Home, About, Services, Portfolio, Contact)
- A friendly hero greeting with a waving hand GIF
- Modern typography via Google Fonts
- Responsive viewport for mobile and desktop

It’s a great base to expand into a full portfolio with sections for your bio, skills, projects, and contact information.

---

## Live Preview

- Local: open `index.html` directly in your browser.
- Optional: Host with GitHub Pages (Settings → Pages) and access at:
  - https://solynixx.github.io/Portfolio/

> Note: If Pages isn’t enabled yet, the link above will not be live.

---

## Tech Stack

- HTML5
- CSS3
- Optional JavaScript hook (`index.js`) for future interactivity

Fonts from Google Fonts are preloaded for performance and style.

---

## Project Structure

```
.
├─ index.html        # Main page with header/navigation and hero greeting
├─ style.css         # Global styles (layout, colors, typography)
├─ index.js          # Placeholder for future interactivity (currently empty)
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

No build steps required.

---

## Customization

- Name and greeting:
  - In `index.html`, update the hero text:
    ```html
    <h1>Hello World!! 👋</h1>
    <p>I'm Edbert Chandra</p>
    ```
- Navigation:
  - Update the header links in `index.html` to point to real sections or pages.
- Typography:
  - Fonts are linked in `<head>` via Google Fonts. Adjust or replace families as desired.
- Colors and layout:
  - Edit `style.css` to customize theme colors, spacing, and component styles.
- Waving hand:
  - The hero uses a GIF from Giphy. You can swap it for a local asset in `assets/` and update the `src`.

---

## Accessibility & SEO

- `lang="en"` is set on `<html>`.
- Consider adding:
  - A descriptive `<meta name="description" content="...">` in `<head>`.
  - `alt` text for images (the waving hand image can have `alt="Waving hand"`).
  - Semantic sections for About, Services, Portfolio, and Contact to improve screen reader navigation.

---

## Roadmap

- Build out real sections for About, Services, Portfolio, and Contact
- Add smooth scrolling and active link highlighting (use `index.js`)
- Include a favicon and social/profile links
- Add a contact form (with form handling)
- Add project cards with images and descriptions

---

## Acknowledgments

- [Google Fonts](https://fonts.google.com/)
- Waving hand GIF via [Giphy](https://giphy.com/)

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.