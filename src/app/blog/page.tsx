import type { Metadata } from 'next';

import Blog from '@/views/Blog';

export const metadata: Metadata = {
  title: 'Wedding Photography Tips & Planning Journal',
  description:
    'Practical advice for couples planning their wedding — pre-wedding shoot locations in Mumbai, photography costs in India, outfit tips, Haldi ceremony advice, and questions to ask your photographer.',
  alternates: { canonical: 'https://theflashroom.in/blog' },
  keywords: [
    'wedding photography tips India',
    'pre-wedding shoot guide',
    'wedding planning blog Mumbai',
    'wedding photographer advice',
    'wedding photography cost India',
  ],
  openGraph: {
    title:
      'Wedding Photography Tips & Planning Journal | The Flash Room Studio',
    description:
      'Honest advice for couples planning their wedding photography — locations, costs, outfits, and everything in between.',
    url: 'https://theflashroom.in/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <Blog />;
}
