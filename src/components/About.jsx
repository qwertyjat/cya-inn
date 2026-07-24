import { ArrowRight } from 'lucide-react';
import images from '../data/images.js';
import hotel from '../config/hotel.js';

export default function About() {
  return (
    <section id="about" className="section-pad bg-sand-50">
      <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
        <div className="relative">
          <img
            src={images.about.main}
            alt={`${hotel.name} interior`}
            className="jharokha-arch w-full h-[420px] object-cover shadow-card"
          />
          <img
            src={images.about.secondary}
            alt={`${hotel.name} lobby`}
            className="hidden md:block jharokha-arch absolute -bottom-10 -right-10 w-52 h-64 object-cover border-4 border-sand-50 shadow-card"
          />
        </div>

        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-6 text-indigo">
            A comfortable address in Sikar, built on hospitality
          </h2>
          <p className="text-ink/80 leading-relaxed mb-4">{hotel.descriptionLong}</p>

          <div className="grid grid-cols-2 gap-6 mt-8 mb-10">
            {hotel.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold pl-4">
                <div className="font-display text-3xl text-indigo">{stat.value}</div>
                <div className="text-sm text-ink/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="#rooms" className="btn-secondary">
            Discover More
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
