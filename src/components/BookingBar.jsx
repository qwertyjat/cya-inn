import { useState } from 'react';
import { CalendarDays, Users, BedDouble, Search } from 'lucide-react';
import rooms from '../data/rooms.js';

// Presentational quick-availability form. Wire the onSubmit handler to a
// real booking API / backend later — the shape of `query` below is the
// contract that integration should expect.
export default function BookingBar() {
  const [query, setQuery] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomsCount: 1,
    roomType: rooms[0]?.id ?? '',
  });

  const update = (field) => (e) =>
    setQuery((q) => ({ ...q, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to booking backend / availability API.
    console.log('Check availability requested:', query);
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-20 -mt-14 md:-mt-16 px-4 md:px-10 lg:px-16">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl bg-sand-50 shadow-card rounded-md border border-sand-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px overflow-hidden"
      >
        <Field label="Check-in" icon={<CalendarDays size={16} />}>
          <input
            type="date"
            value={query.checkIn}
            onChange={update('checkIn')}
            className="bg-transparent w-full text-sm outline-none"
            required
          />
        </Field>

        <Field label="Check-out" icon={<CalendarDays size={16} />}>
          <input
            type="date"
            value={query.checkOut}
            onChange={update('checkOut')}
            className="bg-transparent w-full text-sm outline-none"
            required
          />
        </Field>

        <Field label="Guests" icon={<Users size={16} />}>
          <select
            value={query.guests}
            onChange={update('guests')}
            className="bg-transparent w-full text-sm outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </Field>

        <Field label="Rooms" icon={<BedDouble size={16} />}>
          <select
            value={query.roomsCount}
            onChange={update('roomsCount')}
            className="bg-transparent w-full text-sm outline-none"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </Field>

        <Field label="Room Type" icon={<BedDouble size={16} />}>
          <select
            value={query.roomType}
            onChange={update('roomType')}
            className="bg-transparent w-full text-sm outline-none"
          >
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </Field>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-rust hover:bg-rust-dark text-sand-50 text-sm font-medium tracking-wide py-4 md:py-0 col-span-2 md:col-span-1 transition-colors"
        >
          <Search size={16} />
          Check Availability
        </button>
      </form>
    </section>
  );
}

function Field({ label, icon, children }) {
  return (
    <label className="flex flex-col justify-center gap-1 bg-sand-50 px-5 py-3 md:py-4">
      <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-indigo-light font-medium">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
