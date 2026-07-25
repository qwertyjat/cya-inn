# Setup Checklist & Backend Integration Guide

## Pre-Launch Checklist

### ✅ Content Personalization (Edit these files)

- [ ] **Hotel Info** → `src/config/hotel.js`
  - [ ] Update hotel name, tagline, descriptions
  - [ ] Update check-in/check-out times
  - [ ] Update stats (rooms count, years, guest reviews)

- [ ] **Contact Details** → `src/config/contact.js`
  - [ ] Phone number
  - [ ] WhatsApp number
  - [ ] Email address
  - [ ] Physical address
  - [ ] Google Maps embed link

- [ ] **Social Media Links** → `src/config/socialLinks.js`
  - [ ] Facebook URL
  - [ ] Instagram URL
  - [ ] YouTube URL
  - [ ] Google Business URL

- [ ] **Room Offerings** → `src/data/rooms.js`
  - [ ] Room types (Deluxe, Family, Premium, Suite, etc.)
  - [ ] Prices
  - [ ] Amenities per room type
  - [ ] Max guests

- [ ] **Facilities List** → `src/data/facilities.js`
  - [ ] AC, WiFi, Restaurant, Parking, etc.
  - [ ] Add/remove facilities as needed

- [ ] **Gallery Images** → `src/data/gallery.js`
  - [ ] Categories (Rooms, Restaurant, Facilities, Events)
  - [ ] Image captions & descriptions

- [ ] **Blog Posts** → `src/data/blog.js`
  - [ ] Update with your own content
  - [ ] Feature local attractions, travel tips

- [ ] **Testimonials** → `src/data/testimonials.js`
  - [ ] Add real guest reviews
  - [ ] Update guest names & photos

- [ ] **Images** → `public/images/`
  - [ ] Replace all 52 placeholder images with real photos
  - [ ] **Keep the exact same filenames** (see IMAGE-CHECKLIST.md)

- [ ] **Branding** → `tailwind.config.js`
  - [ ] Update color palette (indigo, gold, rust, sand)
  - [ ] Adjust fonts if needed (currently Fraunces + Work Sans)

### ✅ Technical Setup

- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Build for production: `npm run build`
- [ ] Test build: `npm run preview`

---

## Backend Integration Points

Three forms need backend connections. Each has a `// TODO: connect to ...` comment with exact location:

### 1. **Quick Booking Bar** (`src/components/BookingBar.jsx`)
```javascript
// Current: logs to console
// TODO: POST to /api/bookings with { checkIn, checkOut, guests, rooms }
```
**What to do:**
- Replace console.log with API call
- Send to your booking management system or email service
- Success → show confirmation message
- Error → show validation message

**Example flow:**
```javascript
const handleSubmit = async (formData) => {
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (response.ok) showConfirmation();
  else showError();
};
```

---

### 2. **Reservation Form** (`src/components/Reservation.jsx`)
```javascript
// Current: logs to console
// TODO: POST to /api/reservations with form data + selected room type
```
**What to do:**
- Capture all form fields (name, email, phone, dates, room type, special requests)
- Send to booking system, CRM, or email service (Formspree, EmailJS, etc.)
- Return confirmation with booking reference

**Recommended services:**
- **Formspree** (email-only, free tier available)
- **EmailJS** (client-side, no backend needed initially)
- **Your own backend** (Node/Python/PHP)

---

### 3. **Contact Form** (`src/components/Contact.jsx`)
```javascript
// Current: logs to console
// TODO: POST to /api/contact with { name, email, message }
```
**What to do:**
- Send inquiry to email or CRM
- Send auto-reply to customer
- Store in database for follow-up

---

## Recommended Backend Stack

### **Option 1: Serverless (Fastest to Deploy)**
- **Formspree** or **Basin** for contact form
- **Zapier** or **Make** to automate workflows
- **Airtable** to store booking inquiries
- **SendGrid** for email confirmations

### **Option 2: Firebase**
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const submitBooking = async (data) => {
  await addDoc(collection(db, 'bookings'), {
    ...data,
    timestamp: new Date()
  });
};
```

### **Option 3: Node.js Backend**
```javascript
// Simple Express + MongoDB setup
POST /api/bookings
POST /api/reservations
POST /api/contact
```

---

## Environment Variables

Create `.env.local` in root (already in `.gitignore`):
```
VITE_API_BASE_URL=https://your-api.com
VITE_FORMSPREE_ID=your_form_id
VITE_EMAILJS_SERVICE_ID=your_service_id
```

Access in React:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## Testing Forms Locally

**Before connecting real backend, test with:**

1. **Console logs** (currently in place)
2. **Mock API** using JSON Server:
   ```bash
   npm install -D json-server
   echo '{ "bookings": [] }' > db.json
   npx json-server --watch db.json --port 3001
   ```
3. **Webhook tester** like Webhook.cool to see what's being sent

---

## Deployment Checklist

- [ ] All `.env` variables set in hosting platform (Netlify, Vercel, GitHub Pages)
- [ ] API endpoints updated for production URLs
- [ ] Test forms on live site
- [ ] SSL certificate active (HTTPS)
- [ ] Images optimized and loading fast
- [ ] Mobile responsiveness verified
- [ ] Lighthouse audit score > 80

---

## File Reference for Quick Edits

| What | File | Key Property |
|---|---|---|
| Hotel name everywhere | `src/config/hotel.js` | `name` |
| Phone in footer & floating button | `src/config/contact.js` | `phone` |
| All image paths | `src/data/images.js` | Object keys |
| Room prices | `src/data/rooms.js` | `price` |
| Booking form endpoint | `src/components/BookingBar.jsx` | Line ~120 |
| Colors globally | `tailwind.config.js` | `colors.rust`, `colors.indigo`, etc. |

---

## Next Steps

1. ✅ `npm install` → `npm run dev` (already done)
2. Edit content in config & data files
3. Replace images in `public/images/`
4. Pick a backend service (Formspree/Firebase/custom API)
5. Update form submission logic in the three components
6. Test with `npm run preview`
7. Deploy to GitHub Pages or Netlify
8. Monitor form submissions

You're ready to go! 🚀
