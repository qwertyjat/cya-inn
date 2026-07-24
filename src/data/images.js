// Centralized image configuration.
// Every image used anywhere on the site is referenced from here — never
// hardcode an image path directly inside a component.
//
// Place the actual image files inside /public/images/ using EXACTLY
// these filenames. See IMAGE-CHECKLIST.md at the project root for the
// full list with descriptions and recommended dimensions.

const images = {
  logo: '/images/logo.png',
  logoLight: '/images/logo-light.png', // used on dark header/footer backgrounds
  favicon: '/images/logo.png',

  hero: [
    '/images/hero-01.jpg',
    '/images/hero-02.jpg',
    '/images/hero-03.jpg',
  ],

  about: {
    main: '/images/about-hotel.jpg',
    secondary: '/images/about-lobby.jpg',
  },

  hotelExterior: [
    '/images/hotel-exterior-01.jpg',
    '/images/hotel-exterior-02.jpg',
  ],

  rooms: {
    deluxe: ['/images/room-deluxe-01.jpg', '/images/room-deluxe-02.jpg'],
    premium: ['/images/room-premium-01.jpg', '/images/room-premium-02.jpg'],
    executiveSuite: [
      '/images/room-suite-01.jpg',
      '/images/room-suite-02.jpg',
    ],
    familyRoom: ['/images/room-family-01.jpg', '/images/room-family-02.jpg'],
  },

  facilities: {
    rooms: '/images/facility-rooms.jpg',
    restaurant: '/images/facility-restaurant.jpg',
    roomService: '/images/facility-room-service.jpg',
    wifi: '/images/facility-wifi.jpg',
    parking: '/images/facility-parking.jpg',
    ac: '/images/facility-ac.jpg',
    reception: '/images/facility-reception.jpg',
    housekeeping: '/images/facility-housekeeping.jpg',
    familyFriendly: '/images/facility-family.jpg',
    banquet: '/images/facility-banquet.jpg',
  },

  restaurant: {
    interior: '/images/restaurant-interior.jpg',
    interiorSecondary: '/images/restaurant-interior-02.jpg',
  },

  food: [
    '/images/food-01.jpg',
    '/images/food-02.jpg',
    '/images/food-03.jpg',
    '/images/food-04.jpg',
  ],

  gallery: {
    exterior: ['/images/gallery-exterior-01.jpg', '/images/gallery-exterior-02.jpg'],
    rooms: ['/images/gallery-room-01.jpg', '/images/gallery-room-02.jpg'],
    restaurant: ['/images/gallery-restaurant-01.jpg', '/images/gallery-restaurant-02.jpg'],
    food: ['/images/gallery-food-01.jpg', '/images/gallery-food-02.jpg'],
    lobby: ['/images/gallery-lobby-01.jpg'],
    facilities: ['/images/gallery-facilities-01.jpg'],
    events: ['/images/gallery-event-01.jpg', '/images/gallery-event-02.jpg'],
    other: ['/images/gallery-other-01.jpg'],
  },

  blog: {
    sikarTravelGuide: '/images/blog-sikar-travel.jpg',
    shekhawatiHavelis: '/images/blog-shekhawati-havelis.jpg',
    rajasthaniCuisine: '/images/blog-rajasthani-cuisine.jpg',
  },

  testimonials: {
    guest1: '/images/testimonial-guest-01.jpg',
    guest2: '/images/testimonial-guest-02.jpg',
    guest3: '/images/testimonial-guest-03.jpg',
  },
};

export default images;
