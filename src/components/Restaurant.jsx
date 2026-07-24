import { ArrowRight, UtensilsCrossed, Leaf } from 'lucide-react';
import images from '../data/images.js';

export default function Restaurant() {
  return (
    <section id="restaurant" className="section-pad bg-sand-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Restaurant</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-5 text-indigo">
            Authentic Rajasthani flavours, right at the hotel
          </h2>
          <p className="text-ink/80 leading-relaxed mb-6">
            Our in-house restaurant serves regional Rajasthani dishes alongside familiar
            multi-cuisine favourites, prepared fresh for guests and walk-in diners alike.
            Whether it is a quiet breakfast before a day of travel or a full family dinner,
            the kitchen is built around comfort food done well.
          </p>

          <div className="flex items-center gap-2 text-sm text-ink/70 mb-8">
            <Leaf size={16} className="text-gold-dark" />
            Full vegetarian menu available on request
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#reservation" className="btn-primary">
              <UtensilsCrossed size={16} />
              Explore Restaurant
            </a>
            <a href="#reservation" className="btn-secondary">
              View Menu
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={images.restaurant.interior}
            alt="Cya Inn restaurant interior"
            className="jharokha-arch col-span-2 h-64 w-full object-cover shadow-card"
          />
          {images.food.slice(0, 2).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Dish served at Cya Inn restaurant ${i + 1}`}
              className="h-40 w-full object-cover shadow-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
