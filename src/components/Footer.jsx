import { Facebook, Instagram, Youtube, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import images from '../data/images.js';
import hotel from '../config/hotel.js';
import contact from '../config/contact.js';
import socialLinks from '../config/socialLinks.js';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Media', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-sand-100">
      <div className="fresco-divider" />

      <div className="section-pad grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div>
          <img src={images.logoLight} alt={hotel.name} className="h-11 w-auto mb-4" />
          <p className="text-sm text-sand-100/70 leading-relaxed mb-5">{hotel.descriptionShort}</p>
          <div className="flex gap-3">
            <SocialIcon href={socialLinks.facebook} label="Facebook"><Facebook size={16} /></SocialIcon>
            <SocialIcon href={socialLinks.instagram} label="Instagram"><Instagram size={16} /></SocialIcon>
            <SocialIcon href={socialLinks.youtube} label="YouTube"><Youtube size={16} /></SocialIcon>
            <SocialIcon href={socialLinks.googleBusiness} label="Google Maps"><MapPin size={16} /></SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sand-100/75 hover:text-gold transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-sand-100/75">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold shrink-0" /><a href={contact.phoneHref} className="hover:text-gold transition-colors">{contact.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><MessageCircle size={14} className="text-gold shrink-0" /><a href={contact.whatsappHref} className="hover:text-gold transition-colors">{contact.whatsappDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold shrink-0" /><a href={contact.emailHref} className="hover:text-gold transition-colors">{contact.email}</a></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-gold shrink-0 mt-0.5" /><span>{contact.address.full}</span></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Book Your Stay</h3>
          <p className="text-sm text-sand-100/70 leading-relaxed mb-5">
            Ready to plan your visit to Sikar? Reserve directly with us for the best rates.
          </p>
          <a href="#reservation" className="btn-secondary">Reserve Now</a>
        </div>
      </div>

      <div className="border-t border-sand-50/10 px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto text-xs text-sand-100/50">
        <p>&copy; {new Date().getFullYear()} {hotel.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#terms-and-conditions" className="hover:text-gold transition-colors">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-9 w-9 rounded-full border border-sand-50/25 flex items-center justify-center text-sand-100 hover:bg-gold hover:text-indigo-deep hover:border-gold transition-colors"
    >
      {children}
    </a>
  );
}
