import images from './images.js';

const testimonials = [
  {
    id: 1,
    name: 'Rohit Sharma',
    rating: 5,
    stayType: 'Business Trip',
    image: images.testimonials.guest1,
    review:
      'Clean rooms, quick check-in, and the staff went out of their way to help with a late arrival. The restaurant food was a genuine highlight of the trip.',
  },
  {
    id: 2,
    name: 'Priya Choudhary',
    rating: 5,
    stayType: 'Family Stay',
    image: images.testimonials.guest2,
    review:
      'We stayed for a family function and the family room was spacious and comfortable for all of us. Housekeeping was consistent every single day.',
  },
  {
    id: 3,
    name: 'Amit & Neha Verma',
    rating: 4,
    stayType: 'Weekend Getaway',
    image: images.testimonials.guest3,
    review:
      'Loved the location — close to everything in Sikar we wanted to see. The premium room was well worth the small upgrade from deluxe.',
  },
];

export default testimonials;
