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

export default function PortfolioAlbumPage() {
  return <PortfolioAlbum />;
}
