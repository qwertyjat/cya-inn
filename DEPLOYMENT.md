# Deployment Guide

Choose your platform and follow the steps. All are free or have generous free tiers.

---

## **Option 1: GitHub Pages (Free, Easiest)**

### Setup
1. Enable GitHub Pages in repo settings:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (we'll create it)
   - Folder: **/(root)**

2. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Update `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Add to `package.json` (top level):
```json
"homepage": "https://qwertyjat.github.io/cya-inn/",
```

5. Deploy:
```bash
npm run deploy
```

6. Site lives at: `https://qwertyjat.github.io/cya-inn/`

### Custom Domain (Optional)
- Buy domain (GoDaddy, Namecheap, etc.)
- Add to repo settings **Pages → Custom domain** (e.g., `cyainn.com`)
- Create `CNAME` file in `public/` with domain name
- Update DNS records at registrar to point to GitHub Pages IPs

---

## **Option 2: Netlify (Recommended, Free + Easy)**

### Setup
1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub

2. Connect repo:
   - Click **New site from Git**
   - Select **GitHub** → authorize
   - Select `qwertyjat/cya-inn`

3. Build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. Click **Deploy site** — done! 🎉

5. Site auto-deploys on every push to `main`

### Custom Domain
- Go to **Domain settings**
- Click **Add custom domain**
- DNS records auto-generated or manual setup

### Features
- ✅ Free SSL/HTTPS
- ✅ Auto-deploys on git push
- ✅ Drag-and-drop file management
- ✅ Build logs visible in UI

---

## **Option 3: Vercel (Alternative to Netlify)**

### Setup
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub

2. Import project:
   - **New Project → Import Git Repository**
   - Select `qwertyjat/cya-inn`

3. Framework: **Vite**
   - Build: `npm run build`
   - Output: `dist`

4. Deploy — auto-live at `cya-inn.vercel.app`

### Custom Domain
- **Settings → Domains**
- Add domain and update DNS

---

## **Option 4: Self-Hosted (Advanced)**

### Using Heroku (being phased out, not recommended)

### Using DigitalOcean / Linode / AWS
1. Create droplet/instance (Ubuntu 20+)
2. Install Node.js 18+
3. Clone repo, `npm install`, `npm run build`
4. Use **Nginx** to serve `dist/` folder
5. Install SSL via **Let's Encrypt**

Example Nginx config:
```nginx
server {
  listen 80;
  server_name cyainn.com www.cyainn.com;
  root /var/www/cya-inn/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## **Pre-Deployment Checklist**

- [ ] All images replaced in `public/images/`
- [ ] Hotel info updated in `src/config/hotel.js`
- [ ] Contact details in `src/config/contact.js`
- [ ] Social links in `src/config/socialLinks.js`
- [ ] Forms connected to backend (or Formspree)
- [ ] Run `npm run build` locally, no errors
- [ ] Test `npm run preview` and check all pages
- [ ] Mobile responsive on phone/tablet
- [ ] All links working (no 404s)
- [ ] Images load fast (use Lighthouse)

---

## **Post-Deployment Checklist**

- [ ] Site loads at deployed URL
- [ ] Forms submit successfully
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Contact info correct
- [ ] Mobile view responsive
- [ ] No console errors (check DevTools)
- [ ] Page speed acceptable (Lighthouse > 80)
- [ ] SSL/HTTPS working
- [ ] Analytics installed (optional: Google Analytics)

---

## **Performance Tips**

### Image Optimization
- Resize images to max 1920px width before uploading
- Use JPEG for photos, PNG for logos
- Consider next-gen formats (WebP) for future updates
- Use tools: ImageOptim, TinyPNG, or Squoosh

### Build Analysis
```bash
npm run build
npm run preview
# Check Network tab in DevTools for file sizes
```

### Monitor Performance
- **Google Lighthouse**: Built into Chrome DevTools
- **GTmetrix**: gtmetrix.com
- **PageSpeed Insights**: pagespeed.web.dev

---

## **Troubleshooting**

### **Build fails locally**
```bash
npm install
npm run build
# Check error messages, usually missing config files
```

### **Images not loading after deploy**
- Check `src/data/images.js` — paths should be `./images/filename.jpg`
- Verify files exist in `public/images/`
- Check `vite.config.js` has `base: './'`

### **Forms not working**
- Check browser console (F12) for errors
- Verify API endpoints in component files
- Test with Postman if using custom API

### **Slow page load**
- Optimize images (see above)
- Check Network tab for large files
- Enable Gzip compression on server
- Use CDN for images (Cloudinary, Imgix)

### **Deploy fails**
- Check build logs on hosting platform
- Verify `npm run build` works locally first
- Check for circular imports or syntax errors
- Ensure `.gitignore` isn't excluding important files

---

## **Update After Deployment**

To make changes after going live:

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Update hotel info and images"
git push origin main
```

4. **GitHub Pages:** Run `npm run deploy` again (or let it auto-deploy if configured)
5. **Netlify/Vercel:** Auto-deploys on push (check deployment status)

---

## **Enable Analytics (Optional)**

Add to `src/main.jsx` for Google Analytics:
```javascript
import { useEffect } from 'react';

useEffect(() => {
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.dataLayer = window.dataLayer || [];
  window.gtag('js', new Date());
  window.gtag('config', 'YOUR_GA_ID');
}, []);
```

Or use **Netlify Analytics** (built-in, small fee).

---

## **Recommended: GitHub Pages + Netlify DNS**

**Best of both worlds:**
1. Build & deploy on **GitHub Pages** (free, fast)
2. Manage domain & SSL at **Netlify** (free tier includes DNS)
3. Point domain at GitHub Pages IP addresses

---

## **Support & Monitoring**

- **Uptime monitoring:** Pingdom, UptimeRobot (free)
- **Error tracking:** Sentry (free tier)
- **Form monitoring:** Zapier/Make (track submissions)

---

**You're ready to launch! 🚀**

Pick **Netlify** if you want simplicity. Pick **GitHub Pages** if you want free + minimal setup.

Deploy now, update anytime, measure always.
