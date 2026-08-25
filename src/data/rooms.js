import room2 from '../assets/room-2.jpg';
import room4 from '../assets/room-4.jpg';
import room9 from '../assets/room-9-9aq.jpg';
import room6 from '../assets/room-6.jpg';

// Order here is the order on the page.
export const rooms = [
  {
    slug: 'room-2',
    name: 'Room 2',
    type: 'Twin room',
    features: ['Shared Bathroom', 'Garden View'],
    fromRate: 120,
    image: room2,
    alt: 'Room 2, looking through the balcony doors to the mountains',
  },
  {
    slug: 'room-4',
    name: 'Room 4',
    type: 'Double & bunk',
    features: ['Private Bathroom', 'Garden View'],
    fromRate: 150,
    image: room4,
    alt: 'Room 4, balcony doors open onto the deck beside the bunks',
  },
  {
    slug: 'room-9',
    name: 'Room 9',
    type: '6 bed family room',
    features: ['Ensuite', 'Balcony', 'Mountain Views'],
    fromRate: 170,
    image: room9,
    alt: 'Room 9, the family room with bunks and a private balcony',
  },
  {
    slug: 'room-6',
    name: 'Room 6',
    type: 'Double room',
    features: ['Private Bathroom', 'Garden View'],
    fromRate: 150,
    image: room6,
    alt: 'Room 6, bedside lamp beside doors opening to the garden',
  },
];
