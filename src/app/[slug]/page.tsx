import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LOCATION_PAGES, LOCATION_PAGE_MAP } from '@/data/locationPages';
import { SITE_CONFIG } from '@/lib/siteConfig';
import LocationLanding from '@/views/LocationLanding';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LOCATION_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = LOCATION_PAGE_MAP.get(slug);
  if (!page) return {};

  const url = `${SITE_CONFIG.url}/${page.slug}`;

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const page = LOCATION_PAGE_MAP.get(slug);
  if (!page) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_CONFIG.url}/#business`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone.primary,
        email: SITE_CONFIG.email.primary,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.address.full,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.pin,
          addressCountry: 'IN',
        },
        areaServed: [page.locationFull, ...page.nearbyAreas],
        priceRange: page.startingPrice,
      },
      {
        '@type': 'Service',
        name: `${page.service} in ${page.location}`,
        provider: { '@id': `${SITE_CONFIG.url}/#business` },
        areaServed: page.locationFull,
        offers: {
          '@type': 'Offer',
          price: page.startingPrice.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          description: `${page.service} starting ${page.startingPrice}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.seo.title,
            item: `${SITE_CONFIG.url}/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationLanding page={page} />
    </>
  );
}
