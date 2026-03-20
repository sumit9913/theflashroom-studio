import type { MetadataRoute } from 'next';

const BASE_URL = 'https://theflashroom.in';

const portfolioAlbumIds = [
  'priya-rahul-wedding-udaipur',
  'sneha-amit-prewedding-jaipur',
  'traditional-haldi-mumbai',
  'sangeet-night-delhi',
  'sacred-phera-bangalore',
  'godh-bharai-pune',
  '50th-birthday-mumbai',
  'corporate-annual-dinner-hyderabad',
  'kavita-vikram-wedding-goa',
  'romantic-beach-prewedding-goa',
  'mehndi-night-jaipur',
  'baby-shower-chennai',
];

// Stable dates — update these manually when the page content actually changes
const PAGE_DATES: Record<string, string> = {
  home: '2026-03-20',
  services: '2026-03-20',
  portfolio: '2026-03-20',
  packages: '2026-03-20',
  about: '2026-03-20',
  contact: '2026-03-20',
  book: '2026-03-20',
  testimonials: '2026-03-20',
  privacy: '2026-01-01',
  terms: '2026-01-01',
};

const ALBUM_DATES: Record<string, string> = {
  'priya-rahul-wedding-udaipur': '2026-03-20',
  'sneha-amit-prewedding-jaipur': '2026-03-20',
  'traditional-haldi-mumbai': '2026-03-20',
  'sangeet-night-delhi': '2026-03-20',
  'sacred-phera-bangalore': '2026-03-20',
  'godh-bharai-pune': '2026-03-20',
  '50th-birthday-mumbai': '2026-03-20',
  'corporate-annual-dinner-hyderabad': '2026-03-20',
  'kavita-vikram-wedding-goa': '2026-03-20',
  'romantic-beach-prewedding-goa': '2026-03-20',
  'mehndi-night-jaipur': '2026-03-20',
  'baby-shower-chennai': '2026-03-20',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: PAGE_DATES.home,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: PAGE_DATES.services,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: PAGE_DATES.portfolio,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/packages`,
      lastModified: PAGE_DATES.packages,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: PAGE_DATES.about,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: PAGE_DATES.contact,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: PAGE_DATES.book,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator`,
      lastModified: '2025-01-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: PAGE_DATES.testimonials,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: PAGE_DATES.privacy,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: PAGE_DATES.terms,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const albumPages: MetadataRoute.Sitemap = portfolioAlbumIds.map((id) => ({
    url: `${BASE_URL}/portfolio/${id}`,
    lastModified: ALBUM_DATES[id] ?? '2025-01-01',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...albumPages];
}
