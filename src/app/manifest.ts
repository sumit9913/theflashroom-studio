import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Flash Room Studio',
    short_name: 'TFR Studio',
    description:
      'Luxury wedding & event photography and videography in Mumbai. Pan-India & international coverage.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#141110',
    theme_color: '#C5922A',
    categories: ['photography', 'business', 'lifestyle'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
