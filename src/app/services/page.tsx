import type { Metadata } from 'next';

import Services from '@/views/Services';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Photography & Videography Services — The Flash Room Studio',
  description:
    'Professional photography and videography services in Mumbai. Available Pan-India & internationally.',
  url: 'https://theflashroom.in/services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Wedding Photography & Videography',
      url: 'https://theflashroom.in/services#weddings',
      description:
        'Full-day wedding coverage with 2 photographers, 1 videographer, cinematic highlight film, and drone shots.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pre-Wedding Shoots',
      url: 'https://theflashroom.in/services#prewedding',
      description:
        'Creative pre-wedding photography at handpicked locations across India.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Event Coverage',
      url: 'https://theflashroom.in/services#events',
      description:
        'Corporate events, anniversaries, religious ceremonies, and cultural celebrations.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Baby Shower & Maternity',
      url: 'https://theflashroom.in/services#babyshower',
      description:
        'Artistic maternity portraits and full baby shower event coverage.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Birthday & Special Occasions',
      url: 'https://theflashroom.in/services#birthdays',
      description:
        'Birthday parties, milestone celebrations, cake smash sessions, and themed shoots.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Photography & Videography Services in Mumbai',
  description:
    'Wedding, pre-wedding, maternity, baby shower, birthday and corporate event photography & videography in Mumbai. Available Pan-India & internationally. Use our calculator for instant estimates.',
  alternates: { canonical: 'https://theflashroom.in/services' },
  openGraph: {
    title:
      'Photography & Videography Services in Mumbai | The Flash Room Studio',
    description:
      'Professional photography and videography for every celebration. Mumbai-based, Pan-India coverage.',
    url: 'https://theflashroom.in/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Services />
    </>
  );
}
