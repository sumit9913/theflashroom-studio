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
  home:        '2025-01-01',
  services:    '2025-01-01',
  portfolio:   '2025-01-01',
  packages:    '2025-01-01',
  about:       '2025-01-01',
  contact:     '2025-01-01',
  book:        '2025-01-01',
  testimonials:'2025-01-01',
  privacy:     '2025-01-01',
  terms:       '2025-01-01',
};

const ALBUM_DATES: Record<string, string> = {
  'priya-rahul-wedding-udaipur':       '2025-01-01',
  'sneha-amit-prewedding-jaipur':      '2025-01-01',
  'traditional-haldi-mumbai':          '2025-01-01',
  'sangeet-night-delhi':               '2025-01-01',
  'sacred-phera-bangalore':            '2025-01-01',
  'godh-bharai-pune':                  '2025-01-01',
  '50th-birthday-mumbai':              '2025-01-01',
  'corporate-annual-dinner-hyderabad': '2025-01-01',
  'kavita-vikram-wedding-goa':         '2025-01-01',
  'romantic-beach-prewedding-goa':     '2025-01-01',
  'mehndi-night-jaipur':               '2025-01-01',
  'baby-shower-chennai':               '2025-01-01',
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
