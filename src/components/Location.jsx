import { MapPin, Navigation } from 'lucide-react';
import contact from '../config/contact.js';
import hotel from '../config/hotel.js';

const nearbyAttractions = [
  'Sikar Fort & City Palace',
  'Shekhawati painted havelis',
  'Jeen Mata Temple',
  'Sikar railway station',
];

export default function Location() {
  return (
    <section className="section-pad bg-sand-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        <div>
          <span className="eyebrow">Location</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-6 text-indigo">Find us in Sikar</h2>

          <div className="flex items-start gap-3 mb-6">
            <MapPin size={20} className="text-rust shrink-0 mt-0.5" />
            <div>
              <p className="text-ink/80">{contact.address.line1}</p>
              <p className="text-ink/80">{contact.address.line2}</p>
              <p className="text-ink/80">{contact.address.country}</p>
            </div>
          </div>

          <a href={contact.mapDirectionsUrl} target="_blank" rel="noreferrer" className="btn-primary mb-10">
            <Navigation size={16} />
            Get Directions
          </a>

          <div className="border-t border-sand-200 pt-6">
            <p className="eyebrow mb-4">Nearby Attractions</p>
            <ul className="space-y-2 text-sm text-ink/70">
              {nearbyAttractions.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-h-[340px] shadow-card overflow-hidden">
          <iframe
            title={`${hotel.name} location map`}
            src={contact.mapEmbedUrl}
            className="w-full h-full min-h-[340px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
