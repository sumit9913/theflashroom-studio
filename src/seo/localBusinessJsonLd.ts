export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Flash Room Studio',
  url: 'https://theflashroom.in',
  description:
    'Wedding photography and videography studio based in Mumbai, serving clients across India and internationally.',
  telephone: '+91 91366 98930',
  email: 'tfrstudio07@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'MH',
    addressCountry: 'IN',
  },
  areaServed: ['Bhandup', 'Mumbai', 'India'],
  // Optional (add real ones if available)
  // sameAs: ['https://www.instagram.com/...', 'https://www.facebook.com/...'],
};
