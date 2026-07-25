# Quick Start Guide

All essential files are already in place. Follow these steps to get the project running:

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```
The site opens at `http://localhost:5173`

## Step 3: Edit Content (No Code Needed)

| To change... | Edit this file |
|---|---|
| Hotel name, tagline, description, stats | `src/config/hotel.js` |
| Phone, WhatsApp, email, address | `src/config/contact.js` |
| Social links (Facebook, Instagram, YouTube) | `src/config/socialLinks.js` |
| Room types, prices, amenities | `src/data/rooms.js` |
| Facilities list | `src/data/facilities.js` |
| Gallery images & categories | `src/data/gallery.js` |
| Blog posts | `src/data/blog.js` |
| Guest testimonials | `src/data/testimonials.js` |
| All image paths on site | `src/data/images.js` |

## Step 4: Add Your Images
Replace placeholder images in `public/images/` with your own photos, keeping the **exact same filenames**. See `IMAGE-CHECKLIST.md` for the complete list.

## Step 5: Build for Production
```bash
npm run build
```
Creates a `dist/` folder with the optimized static site.

## Step 6: Deploy to GitHub Pages
1. Build: `npm run build`
2. Push `dist/` contents to your GitHub Pages branch (gh-pages or /docs)
3. Or use: `npm install -D gh-pages` + add `"deploy": "gh-pages -d dist"` to package.json scripts

## Project Structure
```
cya-inn/
├── public/images/        ← Your photos go here
├── src/
│   ├── components/       ← 15 pre-built sections
│   ├── config/           ← hotel.js, contact.js, socialLinks.js
│   ├── data/             ← rooms.js, facilities.js, gallery.js, etc.
│   ├── pages/Home.jsx    ← Main page assembler
│   └── index.css         ← Tailwind + design tokens
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## What's Already Done
✅ 15 pre-built components (Header, Hero, Rooms, Gallery, Blog, etc.)
✅ Config-driven content (change data files, not code)
✅ Responsive design with Tailwind CSS
✅ Image placeholder system
✅ Contact forms & booking forms (ready for backend connection)
✅ Social links & floating buttons
✅ SEO-friendly HTML head tags

## Next Steps
1. `npm install` then `npm run dev`
2. Edit `src/config/hotel.js` with your hotel info
3. Replace images in `public/images/`
4. Customize colors in `tailwind.config.js` if needed
5. Connect forms to your backend (see TODOs in component files)

Questions? Check the main `README.md` for more details.
