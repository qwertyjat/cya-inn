# Cya Inn Hotel and Restaurant — Website

A React + Vite + Tailwind CSS website for Cya Inn Hotel and Restaurant, Sikar,
Rajasthan. Component-based, config-driven, and built to be handed off to a
real booking/contact backend later.

## 1. Install (do this on your own machine — this container has no internet)

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside the
`cya-inn` folder:

```bash
npm install
```

## 2. Add your real photos

The site currently ships with 52 labeled placeholder images so every section
renders correctly out of the box. Open **`IMAGE-CHECKLIST.md`** for the full
list, and drop your real photos into `public/images/` using the **exact same
filenames**. Nothing else needs to change — every component reads paths from
`src/data/images.js`.

## 3. Run it locally

```bash
npm run dev
```

Opens at `http://localhost:5173`. Edit files under `src/` and the browser
updates automatically.

## 4. Edit content without touching component code

| To change... | Edit this file |
|---|---|
| Hotel name, tagline, description, stats | `src/config/hotel.js` |
| Phone, WhatsApp, email, address, map link | `src/config/contact.js` |
| Facebook / Instagram / YouTube / Google links | `src/config/socialLinks.js` |
| Room types, prices, amenities | `src/data/rooms.js` |
| Facilities list | `src/data/facilities.js` |
| Gallery images & categories | `src/data/gallery.js` |
| Blog posts | `src/data/blog.js` |
| Guest testimonials | `src/data/testimonials.js` |
| Any image path anywhere on the site | `src/data/images.js` |

## 5. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished, optimized static site.

## 6. Deploy to GitHub Pages

**Important:** `vite.config.js` has `base: './'`, which makes the build use
relative paths — this works whether the site lives at the root of a domain or
in a `/repo-name/` subfolder, so you shouldn't need to change it.

1. Build the site:
   ```bash
   npm run build
   ```
2. Push the **contents of `dist/`** to your GitHub Pages source (the
   `gh-pages` branch, or the `/docs` folder on `main` — whichever your repo
   is set to serve from). Keep the folder structure exactly as `dist/`
   produces it (an `assets/` folder, `images/` folder, `index.html`, etc.) —
   don't flatten the files, or paths will break, same as with your other
   sites.
   - Easiest path: install `gh-pages` (`npm install -D gh-pages`), add
     `"deploy": "gh-pages -d dist"` to the `scripts` in `package.json`, then
     run `npm run deploy`.
   - Or drag-and-drop the `dist/` folder contents with **GitHub Desktop**,
     which preserves the folder structure (recommended, based on the issue
     you hit with WebMint's flat upload).
3. In your repo's **Settings → Pages**, set the source branch/folder to
   wherever you pushed the `dist/` contents.

## Project structure

```
cya-inn/
├── public/images/        ← all site images live here (see IMAGE-CHECKLIST.md)
├── src/
│   ├── components/       ← one file per section (Header, Hero, Rooms, ...)
│   ├── config/            hotel.js, contact.js, socialLinks.js
│   ├── data/               images.js, rooms.js, facilities.js, gallery.js,
│   │                       testimonials.js, blog.js
│   ├── pages/Home.jsx     ← assembles all sections in order
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← Tailwind + design tokens (arch motif, dividers, buttons)
├── tailwind.config.js     ← color palette & fonts
├── vite.config.js
└── IMAGE-CHECKLIST.md
```

## Design system

- **Palette:** deep indigo (`#1E2E4F`) night-sky tones, warm sand/ivory
  backgrounds, marigold-gold accent (`#C79A3E`), and a Rajasthani textile-red
  ("rust") for primary calls to action.
- **Type:** Fraunces (display/headings) + Work Sans (body), loaded via Google
  Fonts in `index.html`.
- **Signature motif:** a scalloped "jharokha" arch (`.jharokha-arch` in
  `index.css`), echoing the haveli windows of the Shekhawati region, used to
  frame key images. A repeating fresco-strip divider (`.fresco-divider`)
  separates major dark sections instead of a plain rule.

## Forms & backend integration

The **Quick Booking bar**, **Reservation form**, and **Contact form** are all
presentational — they log the submitted data to the console and show a
confirmation state. Look for the `// TODO: connect to ...` comments in
`BookingBar.jsx`, `Reservation.jsx`, and `Contact.jsx` for the exact spot to
wire in a real backend, email service (e.g. Formspree, EmailJS), or WhatsApp
handoff.
