import images from './images.js';

// Each gallery item: { id, src, category, alt }
// Categories match the filter pills in the Gallery component.
const gallery = [
  ...images.gallery.exterior.map((src, i) => ({
    id: `exterior-${i + 1}`,
    src,
    category: 'Exterior',
    alt: `Cya Inn hotel exterior view ${i + 1}`,
  })),
  ...images.gallery.rooms.map((src, i) => ({
    id: `room-${i + 1}`,
    src,
    category: 'Rooms',
    alt: `Cya Inn room ${i + 1}`,
  })),
  ...images.gallery.restaurant.map((src, i) => ({
    id: `restaurant-${i + 1}`,
    src,
    category: 'Restaurant',
    alt: `Cya Inn restaurant ${i + 1}`,
  })),
  ...images.gallery.food.map((src, i) => ({
    id: `food-${i + 1}`,
    src,
    category: 'Food',
    alt: `Dish served at Cya Inn ${i + 1}`,
  })),
  ...images.gallery.lobby.map((src, i) => ({
    id: `lobby-${i + 1}`,
    src,
    category: 'Lobby',
    alt: `Cya Inn lobby ${i + 1}`,
  })),
  ...images.gallery.facilities.map((src, i) => ({
    id: `facility-${i + 1}`,
    src,
    category: 'Facilities',
    alt: `Cya Inn facility ${i + 1}`,
  })),
  ...images.gallery.events.map((src, i) => ({
    id: `event-${i + 1}`,
    src,
    category: 'Events',
    alt: `Event hosted at Cya Inn ${i + 1}`,
  })),
  ...images.gallery.other.map((src, i) => ({
    id: `other-${i + 1}`,
    src,
    category: 'Other',
    alt: `Cya Inn ${i + 1}`,
  })),
];

export const galleryCategories = [
  'All',
  'Exterior',
  'Rooms',
  'Restaurant',
  'Food',
  'Lobby',
  'Facilities',
  'Events',
  'Other',
];

export default gallery;
