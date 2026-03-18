import type { Metadata } from 'next';

import Packages from '@/views/Packages';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in a wedding photography package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our wedding packages include full-day coverage, 2 photographers, edited photos, a highlight reel, and an online gallery. Premium packages include drone footage, cinematic film, and a physical album.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does wedding photography cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding photography packages start from ₹75,000 for essential coverage and go up to ₹3,00,000 for full premium documentation including multi-day coverage and drone cinematography.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you travel for destination weddings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We are based in Mumbai and travel across India and internationally for destination weddings in Udaipur, Jaipur, Goa, Delhi, Bangalore, and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking 3–6 months in advance for weddings, especially during peak season (October–March). Pre-wedding shoots can typically be booked 2–4 weeks in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the starting price for a pre-wedding shoot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-wedding shoot packages start from ₹25,000 and include location scouting, styling guidance, and professionally edited high-resolution photos.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Photography Packages & Pricing — Weddings from ₹75,000',
  description:
    'Transparent wedding photography pricing in Mumbai. Packages starting from ₹75,000 for weddings, ₹25,000 for pre-weddings, ₹15,000 for events. All inclusive. No hidden costs.',
  alternates: { canonical: 'https://theflashroom.in/packages' },
  openGraph: {
    title: 'Photography Packages & Pricing | The Flash Room Studio',
    description:
      'Transparent pricing for every celebration. Wedding packages from ₹75,000.',
    url: 'https://theflashroom.in/packages',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Packages />
    </>
  );
}
