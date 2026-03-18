import type { Metadata } from 'next';

import PortfolioAlbum from '@/views/PortfolioAlbum';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ albumId: string }>;
}): Promise<Metadata> {
  const { albumId } = await params;
  const title = albumId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${title} | The Flash Room Studio`,
    description: `Photography album — ${title} by The Flash Room Studio. Mumbai-based, available Pan-India & internationally.`,
    alternates: {
      canonical: `https://theflashroom.in/portfolio/${albumId}`,
    },
    openGraph: {
      title: `${title} | The Flash Room Studio`,
      url: `https://theflashroom.in/portfolio/${albumId}`,
      images: [{ url: '/og-image.png' }],
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
