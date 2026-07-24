import { useEffect, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import images from '../data/images.js';
import hotel from '../config/hotel.js';

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % images.hero.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      {images.hero.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${hotel.name} — view ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/50 to-indigo-deep/20" />

      <div className="relative z-10 flex h-full flex-col justify-end section-pad pb-16 md:pb-20">
        <div className="reveal flex items-center gap-2 text-gold mb-4">
          <MapPin size={16} />
          <span className="eyebrow text-gold">{hotel.city}, {hotel.state}</span>
        </div>

        <h1 className="reveal reveal-delay-1 font-display text-sand-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          Warm hospitality, <em className="not-italic text-gold-light">wherever</em> you call home.
        </h1>

        <p className="reveal reveal-delay-2 text-sand-100/90 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
          {hotel.descriptionShort}
        </p>

        <div className="reveal reveal-delay-3 flex flex-wrap gap-4 mt-9">
          <a href="#reservation" className="btn-primary">
            Reserve Your Stay
          </a>
          <a href="#rooms" className="btn-ghost-light">
            Explore Rooms
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="reveal reveal-delay-3 flex gap-2 mt-12">
          {images.hero.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-gold' : 'w-4 bg-sand-50/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
