import type { Metadata } from 'next';

import Portfolio from '@/views/Portfolio';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Photography Portfolio — The Flash Room Studio',
  description:
    'Weddings, pre-weddings, maternity, baby showers, events, and birthdays captured across India.',
  url: 'https://theflashroom.in/portfolio',
  isPartOf: {
    '@type': 'WebSite',
    name: 'The Flash Room Studio',
    url: 'https://theflashroom.in',
  },
};

export const metadata: Metadata = {
  title: 'Wedding Photography Portfolio — Gallery',
  description:
    'Browse our photography portfolio — weddings, pre-weddings, maternity, baby showers, events & birthdays across India. Mumbai-based, Pan-India & international coverage.',
  alternates: { canonical: 'https://theflashroom.in/portfolio' },
  openGraph: {
    title: 'Wedding Photography Portfolio | The Flash Room Studio',
    description:
      'Browse beautiful moments captured across India. Weddings, events, maternity & more.',
    url: 'https://theflashroom.in/portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
