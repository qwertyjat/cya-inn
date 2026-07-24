import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import contact from '../config/contact.js';

// Presentational contact form. Wire handleSubmit to an email service,
// backend endpoint, or WhatsApp handoff later.
export default function Contact() {
  const [form, setForm] = useState({ name: '', contactInfo: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend / email / form service.
    console.log('Contact form submitted:', form);
    setSent(true);
    setForm({ name: '', contactInfo: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad bg-sand-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-6 text-indigo">We&rsquo;d love to hear from you</h2>
          <p className="text-ink/70 leading-relaxed mb-10 max-w-md">
            Questions about a booking, an event, or your stay? Reach us directly, or send a message
            and our team will get back to you shortly.
          </p>

          <div className="space-y-5">
            <ContactRow icon={<Phone size={18} />} label="Call Us" value={contact.phoneDisplay} href={contact.phoneHref} />
            <ContactRow icon={<MessageCircle size={18} />} label="WhatsApp" value={contact.whatsappDisplay} href={contact.whatsappHref} />
            <ContactRow icon={<Mail size={18} />} label="Email" value={contact.email} href={contact.emailHref} />
            <ContactRow icon={<MapPin size={18} />} label="Address" value={contact.address.full} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-sand-100 p-8 shadow-card">
          <div className="mb-5">
            <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              className="w-full bg-sand-50 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contact-info" className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
              Phone or Email
            </label>
            <input
              id="contact-info"
              type="text"
              required
              value={form.contactInfo}
              onChange={update('contactInfo')}
              className="w-full bg-sand-50 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold"
              placeholder="How should we reach you?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              className="w-full bg-sand-50 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold resize-none"
              placeholder="Tell us how we can help"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            <Send size={16} />
            Send Message
          </button>

          {sent && (
            <p className="text-sm text-rust mt-4" role="status">
              Thank you — your message has been noted. We&rsquo;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-full bg-indigo flex items-center justify-center text-gold shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-ink/50">{label}</p>
        <p className="text-ink/85">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
