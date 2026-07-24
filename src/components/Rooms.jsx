import { Users, BedDouble, Maximize, Check } from 'lucide-react';
import rooms from '../data/rooms.js';

export default function Rooms() {
  return (
    <section id="rooms" className="section-pad bg-indigo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow">Rooms &amp; Suites</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-sand-50">
            Choose the room that fits your stay
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="bg-sand-50 shadow-card flex flex-col group"
            >
              <div className="overflow-hidden jharokha-arch h-56">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-indigo mb-2">{room.name}</h3>
                <p className="text-sm text-ink/70 leading-relaxed mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-3 text-xs text-ink/60 mb-4">
                  <span className="flex items-center gap-1"><Users size={13} />{room.occupancy}</span>
                  <span className="flex items-center gap-1"><BedDouble size={13} />{room.bedType}</span>
                  <span className="flex items-center gap-1"><Maximize size={13} />{room.size}</span>
                </div>

                <ul className="text-xs text-ink/70 space-y-1.5 mb-6">
                  {room.amenities.slice(0, 3).map((a) => (
                    <li key={a} className="flex items-center gap-1.5">
                      <Check size={12} className="text-gold-dark" /> {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-sand-200 flex items-center justify-between">
                  <span className="text-sm font-medium text-rust">{room.priceLabel}</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <a
                    href="#reservation"
                    className="flex-1 text-center btn-secondary !px-3 !py-2.5 text-xs"
                  >
                    View Details
                  </a>
                  <a
                    href="#reservation"
                    className="flex-1 text-center btn-primary !px-3 !py-2.5 text-xs"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
