import type { Metadata } from 'next';

import Contact from '@/views/Contact';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact The Flash Room Studio',
  url: 'https://theflashroom.in/contact',
  mainEntity: {
    '@type': 'PhotographyBusiness',
    name: 'The Flash Room Studio',
    telephone: ['+91 91366 98930', '+91 99673 99913'],
    email: 'tfrstudio07@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      'Mumbai',
      'Delhi',
      'Bangalore',
      'Jaipur',
      'Udaipur',
      'Goa',
      'India',
    ],
  },
};

export const metadata: Metadata = {
  title: 'Contact Us — Book a Photography Session',
  description:
    'Get in touch with The Flash Room Studio. Book wedding, pre-wedding, maternity, baby shower & event photography in Mumbai. Call +91 91366 98930 or WhatsApp for quick response.',
  alternates: { canonical: 'https://theflashroom.in/contact' },
  openGraph: {
    title: 'Contact The Flash Room Studio | Book a Photography Session',
    description:
      'Book your session today. Call, WhatsApp, or email us. We reply within 24 hours.',
    url: 'https://theflashroom.in/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}
