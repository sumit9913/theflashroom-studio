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
        text: 'Wedding photography costs vary based on coverage duration, number of photographers, videographers, and add-ons like drone and albums. Use our Package Calculator at theflashroom.in/calculator for an instant estimate.',
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
      name: 'How can I get a price estimate for a pre-wedding shoot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-wedding shoot packages include location scouting, styling guidance, and professionally edited high-resolution photos. Visit our Package Calculator at theflashroom.in/calculator for an instant personalised estimate.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Photography Packages — Wedding, Pre-Wedding & Events',
  description:
    'Explore photography and videography packages by The Flash Room Studio in Mumbai. Choose from Cost-Effective, Intermediate, and Premium coverage for weddings, pre-weddings, events and more.',
  alternates: { canonical: 'https://theflashroom.in/packages' },
  openGraph: {
    title: 'Photography Packages | The Flash Room Studio',
    description:
      'Flexible packages for every celebration — weddings, pre-weddings, baby showers, birthdays and events. Mumbai-based, Pan-India coverage.',
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
