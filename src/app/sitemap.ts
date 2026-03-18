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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/packages`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const albumPages: MetadataRoute.Sitemap = portfolioAlbumIds.map((id) => ({
    url: `${BASE_URL}/portfolio/${id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...albumPages];
}
