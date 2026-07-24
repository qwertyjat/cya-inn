import {
  Bed, Utensils, Bell, Wifi, Car, Snowflake, Clock, Sparkles, Users, Building2,
} from 'lucide-react';
import facilities from '../data/facilities.js';

const iconMap = {
  bed: Bed,
  utensils: Utensils,
  bell: Bell,
  wifi: Wifi,
  car: Car,
  snowflake: Snowflake,
  clock: Clock,
  sparkles: Sparkles,
  users: Users,
  building: Building2,
};

export default function Facilities() {
  return (
    <section id="facilities" className="section-pad bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow">Facilities &amp; Amenities</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-indigo">
            Everything a comfortable stay needs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((f) => {
            const Icon = iconMap[f.icon] ?? Sparkles;
            return (
              <div
                key={f.id}
                className="bg-sand-50 border border-sand-200 p-6 text-center hover:border-gold hover:shadow-card transition-all duration-300"
              >
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-indigo flex items-center justify-center">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-indigo mb-1.5">{f.name}</h3>
                <p className="text-xs text-ink/60 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
