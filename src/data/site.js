// The Belfry books through Book Direct Online. One constant so every booking
// affordance on the site points at the same place.
//
// The supplied link carried checkInDate/checkOutDate for the day it was copied.
// Those are deliberately left off: this is a static site, so a baked-in date
// would still say August next March. Without them the booking engine opens on
// its own default and the guest picks their dates there. Party size, currency
// and locale are safe to keep — they are preferences, not a moment in time.
export const bookingUrl =
  'https://book-directonline.com/properties/thebelfryguesthousedirect' +
  '?locale=en' +
  '&items[0][adults]=2' +
  '&items[0][children]=0' +
  '&items[0][infants]=0' +
  '&currency=AUD' +
  '&trackPage=yes';
