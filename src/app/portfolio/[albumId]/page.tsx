import type { Metadata } from 'next';

import PortfolioAlbum from '@/views/PortfolioAlbum';

const ALBUM_META: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  'priya-rahul-wedding-udaipur': {
    title: 'Priya & Rahul — Destination Wedding in Udaipur',
    description:
      'Cinematic wedding photography from a royal destination wedding in Udaipur. Captured by The Flash Room Studio — luxury wedding photographers based in Mumbai.',
    keywords: [
      'destination wedding photography Udaipur',
      'royal wedding photographer',
      'luxury wedding Udaipur',
    ],
  },
  'sneha-amit-prewedding-jaipur': {
    title: 'Sneha & Amit — Pre-Wedding Shoot in Jaipur',
    description:
      'Romantic pre-wedding photography in the Pink City — Jaipur. Palaces, forts, and candid love moments by The Flash Room Studio.',
    keywords: [
      'pre-wedding shoot Jaipur',
      'pre-wedding photographer Pink City',
      'couple photography Jaipur',
    ],
  },
  'traditional-haldi-mumbai': {
    title: 'Traditional Haldi Ceremony — Mumbai Wedding',
    description:
      'Vibrant and joyful Haldi ceremony photography in Mumbai. Every colour, laugh, and emotion captured by The Flash Room Studio.',
    keywords: [
      'haldi ceremony photographer Mumbai',
      'haldi photography Mumbai',
      'wedding ritual photography',
    ],
  },
  'sangeet-night-delhi': {
    title: 'Sangeet Night Photography — Delhi Wedding',
    description:
      'High-energy Sangeet night photography at a grand Delhi wedding. Performances, emotion, and celebration beautifully documented.',
    keywords: [
      'sangeet photography Delhi',
      'wedding sangeet photographer',
      'Delhi wedding photographer',
    ],
  },
  'sacred-phera-bangalore': {
    title: 'Sacred Phera Ceremony — Bangalore Wedding',
    description:
      'Intimate and emotional Phera ceremony photography from a Bangalore wedding. Authentic moments by The Flash Room Studio.',
    keywords: [
      'wedding photographer Bangalore',
      'phera ceremony photography',
      'Hindu wedding photographer',
    ],
  },
  'godh-bharai-pune': {
    title: 'Godh Bharai (Baby Shower) — Pune',
    description:
      'Warm and heartfelt Godh Bharai photography in Pune. Every blessing, smile, and family moment beautifully preserved.',
    keywords: [
      'godh bharai photographer Pune',
      'baby shower photography Pune',
      'maternity ritual photography',
    ],
  },
  '50th-birthday-mumbai': {
    title: '50th Birthday Celebration Photography — Mumbai',
    description:
      'Milestone birthday photography in Mumbai — candid, vibrant, and full of life. Captured by The Flash Room Studio.',
    keywords: [
      'birthday photographer Mumbai',
      'milestone birthday photography',
      'event photographer Mumbai',
    ],
  },
  'corporate-annual-dinner-hyderabad': {
    title: 'Corporate Annual Dinner Photography — Hyderabad',
    description:
      'Professional corporate event photography in Hyderabad. Awards, speeches, and celebration moments by The Flash Room Studio.',
    keywords: [
      'corporate event photographer Hyderabad',
      'annual dinner photography',
      'corporate photographer India',
    ],
  },
  'kavita-vikram-wedding-goa': {
    title: 'Kavita & Vikram — Beach Wedding in Goa',
    description:
      'Sun-soaked beach wedding photography in Goa. Golden light, ocean views, and timeless love stories by The Flash Room Studio.',
    keywords: [
      'beach wedding photographer Goa',
      'destination wedding Goa',
      'Goa wedding photography',
    ],
  },
  'romantic-beach-prewedding-goa': {
    title: 'Romantic Beach Pre-Wedding Shoot — Goa',
    description:
      'Dreamy pre-wedding photography on the beaches of Goa. Sunset, waves, and romance captured by The Flash Room Studio.',
    keywords: [
      'pre-wedding shoot Goa',
      'beach pre-wedding photography',
      'couple shoot Goa',
    ],
  },
  'mehndi-night-jaipur': {
    title: 'Mehndi Night Photography — Jaipur Wedding',
    description:
      'Colourful and intimate Mehndi night photography in Jaipur. Traditions, intricate designs, and joyful moments beautifully captured.',
    keywords: [
      'mehndi ceremony photographer Jaipur',
      'mehndi night photography',
      'Rajasthan wedding photographer',
    ],
  },
  'baby-shower-chennai': {
    title: 'Baby Shower Photography — Chennai',
    description:
      'Joyful baby shower photography in Chennai. Tender family moments and celebration beautifully preserved by The Flash Room Studio.',
    keywords: [
      'baby shower photographer Chennai',
      'baby shower photography South India',
      'maternity photographer Chennai',
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ albumId: string }>;
}): Promise<Metadata> {
  const { albumId } = await params;
  const meta = ALBUM_META[albumId];

  const fallbackTitle = albumId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = meta?.title ?? fallbackTitle;
  const description =
    meta?.description ??
    `Wedding & event photography — ${fallbackTitle} by The Flash Room Studio. Mumbai-based, available Pan-India & internationally.`;

  return {
    title,
    description,
    keywords: meta?.keywords,
    alternates: {
      canonical: `https://theflashroom.in/portfolio/${albumId}`,
    },
    openGraph: {
      title: `${title} | The Flash Room Studio`,
      description,
      url: `https://theflashroom.in/portfolio/${albumId}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function PortfolioAlbumPage({
  params,
}: {
  params: Promise<{ albumId: string }>;
}) {
  const { albumId } = await params;
  const title = albumId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://theflashroom.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://theflashroom.in/portfolio',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://theflashroom.in/portfolio/${albumId}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PortfolioAlbum />
    </>
  );
}
