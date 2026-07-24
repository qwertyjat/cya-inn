import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import contact from '../config/contact.js';

// Fixed to the bottom-right corner, stacked vertically, sized so they
// stay clear of content and don't block the floating "Reserve" CTA
// most guests will tap on mobile.
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="#reservation"
        aria-label="Book your stay"
        className="hidden sm:flex items-center gap-2 bg-rust hover:bg-rust-dark text-sand-50 text-sm font-medium px-5 py-3 rounded-full shadow-card transition-colors"
      >
        <CalendarCheck size={16} />
        Book Now
      </a>
      <a
        href={contact.phoneHref}
        aria-label="Call the hotel"
        className="h-12 w-12 rounded-full bg-indigo text-sand-50 flex items-center justify-center shadow-card hover:bg-indigo-light transition-colors"
      >
        <Phone size={19} />
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-card hover:brightness-95 transition-all"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
