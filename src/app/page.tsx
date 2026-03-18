import type { Metadata } from 'next';

import Home from '@/views/Home';

export const metadata: Metadata = {
  title: 'Luxury Wedding Photography in Mumbai | The Flash Room Studio',
  description:
    'The Flash Room Studio — award-winning wedding & event photography in Mumbai. Cinematic storytelling for weddings, pre-weddings, maternity, baby showers, and all celebrations. Available Pan-India & internationally.',
  alternates: { canonical: 'https://theflashroom.in' },
  openGraph: {
    title: 'Luxury Wedding Photography in Mumbai | The Flash Room Studio',
    description:
      'Award-winning wedding & event photography. Pan-India & international coverage.',
    url: 'https://theflashroom.in',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Flash Room Studio — Wedding Photography Mumbai',
      },
    ],
  },
};

export default function HomePage() {
  return <Home />;
}
