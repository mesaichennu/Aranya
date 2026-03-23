# Aranya – The School Website

A React website for Aranya The School, built with Create React App and CSS Modules.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The site will open at **http://localhost:3000**

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🗂 Project Structure

```
src/
├── App.js                  # Root component
├── index.js                # Entry point
├── index.css               # Global styles & CSS variables
├── hooks/
│   └── useReveal.js        # Scroll-reveal IntersectionObserver hook
└── components/
    ├── Splash.jsx           # Animated splash/loading screen
    ├── Splash.module.css
    ├── ScrollProgress.jsx   # Top scroll progress bar
    ├── Navbar.jsx           # Fixed navigation bar
    ├── Navbar.module.css
    ├── Hero.jsx             # Hero / landing section
    ├── Hero.module.css
    ├── Philosophy.jsx       # "Holistic Approach" section
    ├── Philosophy.module.css
    ├── Vision.jsx           # School vision section
    ├── Vision.module.css
    ├── Values.jsx           # Core values grid
    ├── Values.module.css
    ├── Admissions.jsx       # Admissions CTA section
    ├── Admissions.module.css
    ├── Footer.jsx           # Site footer
    └── Footer.module.css
```

## 🎨 Color Palette

| Variable        | Value     | Usage                     |
|-----------------|-----------|---------------------------|
| `--forest`      | `#3d2e0a` | Primary dark / headings   |
| `--bark`        | `#5a3e10` | Secondary brown           |
| `--leaf-dark`   | `#2d5a1b` | Dark green accents        |
| `--leaf`        | `#6ab04c` | Primary green             |
| `--leaf-light`  | `#8cc63f` | Light green highlights    |
| `--sage`        | `#a8c97f` | Muted green               |
| `--amber`       | `#e8a020` | Admission badge / CTAs    |
| `--warm-white`  | `#fdfaf5` | Page background           |
| `--cream`       | `#f8f4ed` | Section backgrounds       |
| `--stone`       | `#6b6b6b` | Body text / subtitles     |
| `--charcoal`    | `#2a2a2a` | Footer background         |

## ✏️ Customization

- **Content** – Edit text directly inside each `*.jsx` component.
- **Colors** – Change CSS variables in `src/index.css` under `:root`.
- **Fonts** – Update the Google Fonts link in `public/index.html`.

## 📞 School Contact

- **Phone:** 9666866974
- **Address:** Plot No 74, Brahmanapalli Road, Om Ganesh Nagar, Ragannaguda, Turkayamjal – 501510
