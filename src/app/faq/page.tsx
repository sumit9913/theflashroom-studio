import type { Metadata } from 'next';

import FAQ from '@/views/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — Wedding Photography Mumbai | The Flash Room Studio',
  description:
    'Answers to the most common questions about booking wedding photography, pricing, deliverables, and working with The Flash Room Studio in Mumbai.',
  keywords: [
    'wedding photography FAQ Mumbai',
    'wedding photographer cost Mumbai',
    'how to book wedding photographer',
    'wedding photography packages Mumbai',
    'pre-wedding shoot FAQ',
    'The Flash Room Studio FAQ',
  ],
  alternates: { canonical: 'https://theflashroom.in/faq' },
  openGraph: {
    title: 'FAQ — Wedding Photography Mumbai | The Flash Room Studio',
    description:
      'Everything you need to know before booking your photography session — pricing, coverage, deliverables and more.',
    url: 'https://theflashroom.in/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should I book my wedding photographer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 6–12 months in advance for weddings, especially for peak season dates (November–February). Popular dates fill up quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your starting prices for wedding photography in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding photography & videography starts from ₹45,000 for intimate coverage. Pre-wedding shoots start from ₹25,000. Visit our Packages page for full details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you travel for destination weddings outside Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we travel Pan-India and internationally. We have covered weddings in Udaipur, Jaipur, Goa, Delhi, Bangalore, and abroad. Travel costs are quoted separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many edited photos will we receive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 200+ for Cost-Effective, 500+ for Intermediate, and 1,000+ for Premium wedding packages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to receive the final photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Edited photos are typically delivered within 3–6 weeks of the event. Wedding films take 6–10 weeks. Premium packages include priority delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer both photography and videography?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All packages can include both stills photography and cinematic videography. Standalone photography-only packages are also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if you have an emergency on our wedding day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have a trusted network of professional photographers for backup coverage in the rare event of an emergency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we customise a package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All packages are a starting point. We can add or remove elements such as extra hours, additional photographers, drone footage, or printed albums.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQ />
    </>
  );
}
