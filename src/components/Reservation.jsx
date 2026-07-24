import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import rooms from '../data/rooms.js';
import images from '../data/images.js';

// Presentational reservation form. The `booking` object shape below is the
// contract a real backend / booking API integration should expect.
export default function Reservation() {
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: rooms[0]?.id ?? '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setBooking((b) => ({ ...b, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to booking backend / reservations API.
    console.log('Reservation submitted:', booking);
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      className="relative section-pad text-sand-50 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(16,27,51,0.88), rgba(16,27,51,0.88)), url(${images.about.main})` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow text-gold">Reservation</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-sand-50">Book your stay at Cya Inn</h2>
          <p className="text-sand-100/80 mt-4 max-w-lg mx-auto">
            Fill in your details below and our team will confirm availability and get back to you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-sand-50 text-ink p-10 text-center shadow-card">
            <CalendarCheck size={32} className="mx-auto text-rust mb-4" />
            <h3 className="font-display text-2xl text-indigo mb-2">Reservation request received</h3>
            <p className="text-ink/70">
              Thank you, {booking.name || 'guest'}. Our team will confirm your booking by phone or email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-sand-50 text-ink p-8 md:p-10 shadow-card grid md:grid-cols-2 gap-5">
            <TextField id="res-name" label="Guest Name" value={booking.name} onChange={update('name')} required placeholder="Your full name" />
            <TextField id="res-phone" label="Phone Number" type="tel" value={booking.phone} onChange={update('phone')} required placeholder="+91 98765 43210" />
            <TextField id="res-email" label="Email" type="email" value={booking.email} onChange={update('email')} placeholder="you@example.com" />
            <SelectField id="res-guests" label="Number of Guests" value={booking.guests} onChange={update('guests')} options={[1, 2, 3, 4, 5, 6].map((n) => ({ value: n, label: `${n} Guest${n > 1 ? 's' : ''}` }))} />
            <TextField id="res-checkin" label="Check-in Date" type="date" value={booking.checkIn} onChange={update('checkIn')} required />
            <TextField id="res-checkout" label="Check-out Date" type="date" value={booking.checkOut} onChange={update('checkOut')} required />
            <SelectField
              id="res-room"
              label="Room Selection"
              value={booking.roomType}
              onChange={update('roomType')}
              options={rooms.map((r) => ({ value: r.id, label: r.name }))}
              className="md:col-span-2"
            />

            <div className="md:col-span-2">
              <label htmlFor="res-requests" className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
                Special Requests
              </label>
              <textarea
                id="res-requests"
                rows={4}
                value={booking.specialRequests}
                onChange={update('specialRequests')}
                className="w-full bg-sand-100 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold resize-none"
                placeholder="Early check-in, airport pickup, dietary needs, etc."
              />
            </div>

            <button type="submit" className="btn-primary md:col-span-2 justify-center mt-2">
              <CalendarCheck size={16} />
              Submit Reservation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function TextField({ id, label, type = 'text', value, onChange, required, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-sand-100 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function SelectField({ id, label, value, onChange, options, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-indigo-light font-medium mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full bg-sand-100 border border-sand-200 px-4 py-3 text-sm outline-none focus:border-gold"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
