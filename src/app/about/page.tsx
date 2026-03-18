import type { Metadata } from 'next';

import About from '@/views/About';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About The Flash Room Studio',
  url: 'https://theflashroom.in/about',
  isPartOf: {
    '@type': 'WebSite',
    name: 'The Flash Room Studio',
    url: 'https://theflashroom.in',
  },
  about: {
    '@type': ['LocalBusiness', 'PhotographyBusiness'],
    name: 'The Flash Room Studio',
    url: 'https://theflashroom.in',
    description:
      'Mumbai-based photography and videography studio specializing in weddings, pre-weddings, maternity shoots, baby showers, birthdays and corporate events. Available Pan-India and internationally.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: ['Mumbai', 'Delhi', 'Bangalore', 'Jaipur', 'Udaipur', 'Goa', 'India'],
    sameAs: [
      'https://www.instagram.com/tfrstudio__',
      'https://theflashroom.in',
    ],
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
    member: [
      { '@type': 'Person', name: 'Boopathy Durairaj', jobTitle: 'Lead Photographer', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Sumit Maurya', jobTitle: 'Client Experience Manager', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Surya Gounder', jobTitle: 'Cinematographer', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Muskan Mujawar', jobTitle: 'Creative Director', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Meezan Khan', jobTitle: 'Video Editor', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Andrew Pillai', jobTitle: 'Instagram & Digital Marketing', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Karthik Konar', jobTitle: 'Creative Handler', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Ganesh Vanniar', jobTitle: 'Production Assistant', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Mahesh Chettiar', jobTitle: 'Videographer', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Jude Theo', jobTitle: 'Editor', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Ria Sing', jobTitle: 'Creative Handler', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
      { '@type': 'Person', name: 'Manasi Maurya', jobTitle: 'Mrs.Admin', worksFor: { '@type': 'Organization', name: 'The Flash Room Studio' } },
    ],
  },
};

export const metadata: Metadata = {
  title: 'About Us — Our Story, Team & Vision',
  description:
    'Meet The Flash Room Studio — Mumbai-based photographers and filmmakers. Our team of 12 creatives captures weddings and events with a premium, cinematic style. 5+ years, 25+ weddings.',
  alternates: { canonical: 'https://theflashroom.in/about' },
  openGraph: {
    title: 'About The Flash Room Studio | Mumbai',
    description:
      'Mumbai-based wedding & event photography team. 12 creatives, 5+ years of cinematic storytelling.',
    url: 'https://theflashroom.in/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
