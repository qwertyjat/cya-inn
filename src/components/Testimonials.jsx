import { Star, Quote } from 'lucide-react';
import testimonials from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="section-pad bg-indigo relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow">Guest Testimonials</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-sand-50">What our guests say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-sand-50 p-7 shadow-card flex flex-col">
              <Quote size={26} className="text-gold mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < t.rating ? 'fill-gold text-gold' : 'text-sand-200'}
                  />
                ))}
              </div>
              <p className="text-sm text-ink/80 leading-relaxed flex-1">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-sand-200">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-11 w-11 rounded-full bg-indigo flex items-center justify-center text-gold font-display text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-indigo">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.stayType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
