import cafes from '../assets/bellingen/cafes.jpg';
import restaurants from '../assets/bellingen/restaurants.jpg';
import breweriesBars from '../assets/bellingen/breweries-bars.jpg';
import marketsFood from '../assets/bellingen/markets-food.jpg';
import bellingerRiver from '../assets/bellingen/bellinger-river.jpg';
import waterfalls from '../assets/bellingen/waterfalls.jpg';
import dorrigoNationalPark from '../assets/bellingen/dorrigo-national-park.jpg';
import neverNeverCreek from '../assets/bellingen/never-never-creek.jpg';
import markets from '../assets/bellingen/markets.jpg';
import music from '../assets/bellingen/music.jpg';
import artsCulture from '../assets/bellingen/arts-culture.jpg';
import localShops from '../assets/bellingen/local-shops.jpg';
import urungaSawtell from '../assets/bellingen/urunga-sawtell.jpg';
import coffsHarbour from '../assets/bellingen/coffs-harbour.jpg';
import dorrigo from '../assets/bellingen/dorrigo.jpg';
import newEngland from '../assets/bellingen/new-england.jpg';

// Card photography is cut from the layout render, so it is low-resolution.
// Replace with real Bellingen photography before launch.
export const sections = [
  {
    id: 'eat-drink',
    tab: 'Eat & drink',
    heading: 'Good food.\nLocal flavour.',
    lede:
      'From award-winning restaurants and laid-back cafés to local breweries and cosy bars, ' +
      'Bellingen has something for every appetite.',
    cta: 'View eat & drink guide',
    icon: 'fork',
    cards: [
      { image: cafes, title: 'Cafés', note: 'Brilliant coffee and relaxed vibes.' },
      { image: restaurants, title: 'Restaurants', note: 'Exceptional dining, fresh local produce.' },
      { image: breweriesBars, title: 'Breweries & bars', note: 'Local brews and good times.' },
      { image: marketsFood, title: 'Markets', note: 'Fresh produce, handmade goods, live music.' },
    ],
  },
  {
    id: 'nature',
    tab: 'Nature',
    heading: 'Wild, green and\nwonderful.',
    lede: 'Rivers to swim in, waterfalls to chase and national parks to explore.',
    cta: 'Explore nature',
    icon: 'leaf',
    cards: [
      { image: bellingerRiver, title: 'Bellinger River', note: 'Swim, paddle or picnic by the water.' },
      { image: waterfalls, title: 'Waterfalls', note: 'Spectacular falls just a short drive away.' },
      { image: dorrigoNationalPark, title: 'Dorrigo National Park', note: 'Rainforests, walks and stunning views.' },
      { image: neverNeverCreek, title: 'Never Never Creek', note: 'A local favourite for a refreshing dip.' },
    ],
  },
  {
    id: 'markets-culture',
    tab: 'Markets & culture',
    heading: 'Creative spirit.\nCommunity soul.',
    lede: 'A thriving arts scene, live music, markets and events that bring the village to life.',
    cta: "See what's on",
    icon: 'bag',
    cards: [
      { image: markets, title: 'Markets', note: 'Weekly markets full of local flavour.' },
      { image: music, title: 'Music', note: 'Live gigs in the pub, parks and halls.' },
      { image: artsCulture, title: 'Arts & culture', note: 'Galleries, studios and creative experiences.' },
      { image: localShops, title: 'Local shops', note: 'Unique finds from local makers and designers.' },
    ],
  },
  {
    id: 'day-trips',
    tab: 'Day trips',
    heading: 'Explore more.\nClose to home.',
    lede: 'Charming towns, coastlines and national treasures, all within easy reach.',
    cta: 'Discover day trips',
    icon: 'car',
    cards: [
      { image: urungaSawtell, title: 'Urunga & Sawtell', note: 'Beaches, cafés and coastal charm.' },
      { image: coffsHarbour, title: 'Coffs Harbour', note: 'Big experiences and beautiful beaches.' },
      { image: dorrigo, title: 'Dorrigo', note: 'Waterfalls, heritage and mountain air.' },
      { image: newEngland, title: 'New England', note: 'Scenic drives, towns and wide open spaces.' },
    ],
  },
];

export const tabIcons = {
  fork: '<path d="M7 3v7a3 3 0 0 0 6 0V3"/><path d="M10 10v11"/><path d="M18 3c-1.5 1.5-2 3.5-2 6v4h4V9c0-2.5-.5-4.5-2-6z"/><path d="M18 13v8"/>',
  leaf: '<path d="M4 20c0-8 5.5-13 16-13 0 9-6 13-11 13H4z"/><path d="M4 20c3-4 7-6.5 11-8"/>',
  bag: '<path d="M4 8h16l-1 12H5L4 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  car: '<path d="M3 15h18"/><path d="M5 15l1.6-5A2 2 0 0 1 8.5 8.6h7A2 2 0 0 1 17.4 10L19 15v4h-3v-2H8v2H5v-4z"/><circle cx="8" cy="15.5" r="1"/><circle cx="16" cy="15.5" r="1"/>',
};
