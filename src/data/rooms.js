import images from './images.js';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    images: images.rooms.deluxe,
    description:
      'Warm, well-lit rooms with comfortable bedding and thoughtful essentials — an easy base for a short business trip or a quick family stop in Sikar.',
    occupancy: '2 Adults',
    bedType: 'Queen Bed',
    size: '220 sq.ft',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Hot Water', 'Room Service'],
    priceLabel: 'From ₹1,999/night',
  },
  {
    id: 'premium',
    name: 'Premium Room',
    images: images.rooms.premium,
    description:
      'A step up in space and finish, with a sitting area and upgraded linen — suited to guests who want a little more room to unwind after a day of travel.',
    occupancy: '2 Adults, 1 Child',
    bedType: 'King Bed',
    size: '280 sq.ft',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini Fridge', 'Work Desk', 'Room Service'],
    priceLabel: 'From ₹2,799/night',
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    images: images.rooms.executiveSuite,
    description:
      'A separate living area, upgraded amenities and quiet finishing touches — for guests who want a more spacious, private stay.',
    occupancy: '2 Adults, 2 Children',
    bedType: 'King Bed + Sofa',
    size: '420 sq.ft',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Living Area', 'Mini Bar', 'Premium Toiletries', 'Priority Room Service'],
    priceLabel: 'From ₹4,299/night',
  },
  {
    id: 'family-room',
    name: 'Family Room',
    images: images.rooms.familyRoom,
    description:
      'Built for families and small groups travelling together, with extra bedding options and enough space for everyone to settle in comfortably.',
    occupancy: '4 Adults',
    bedType: 'Twin Beds + Extra Bed',
    size: '350 sq.ft',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Extra Bedding', 'Flat-screen TV', 'Room Service'],
    priceLabel: 'From ₹3,499/night',
  },
];

export default rooms;
