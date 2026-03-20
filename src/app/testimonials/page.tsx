import type { Metadata } from 'next';

import Testimonials from '@/views/Testimonials';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyBusiness',
  name: 'The Flash Room Studio',
  url: 'https://theflashroom.in',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '50',
    reviewCount: '50',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya & Rahul Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'TheFlashRoom captured every emotion of our 3-day wedding celebration beautifully. From the emotional haldi ceremony to the grand reception, every moment was preserved perfectly.',
      datePublished: '2024-11-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sneha & Amit Kapoor' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Our pre-wedding shoot was absolutely magical! The team understood our vision perfectly and suggested the most beautiful locations. The photos look like they're straight out of a magazine.",
      datePublished: '2024-10-08',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Vikram & Anjali Patel' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'We hired TheFlashRoom for our destination wedding in Goa, and they exceeded all our expectations. The cinematic wedding film they created tells our love story so beautifully.',
      datePublished: '2024-12-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Meera & Arjun Reddy' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'The attention to detail and dedication shown by TheFlashRoom team is unmatched. They captured our South Indian wedding traditions with such respect and artistry.',
      datePublished: '2025-01-20',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials',
  description:
    'Read verified reviews from couples and families who trusted The Flash Room Studio. 50+ happy clients, 5-star Google rating. See what they say about our wedding and event photography.',
  alternates: { canonical: 'https://theflashroom.in/testimonials' },
  openGraph: {
    title: 'Client Reviews & Testimonials | The Flash Room Studio',
    description:
      '50+ happy clients. See real reviews from couples and families.',
    url: 'https://theflashroom.in/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Testimonials />
    </>
  );
}
