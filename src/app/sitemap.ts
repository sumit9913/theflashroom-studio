import type { MetadataRoute } from 'next';

import { BLOG_POSTS } from '@/lib/blog';
import { LOCATION_PAGES } from '@/data/locationPages';
import { portfolioAlbums } from '@/data/portfolioAlbums';

const BASE_URL = 'https://theflashroom.in';

// Update these dates when the corresponding page content actually changes.
const PAGE_DATES: Record<string, string> = {
  home:         '2026-03-25',
  services:     '2026-03-25',
  portfolio:    '2026-03-25',
  packages:     '2026-03-25',
  about:        '2026-03-20',
  contact:      '2026-03-20',
  book:         '2026-03-20',
  calculator:   '2026-03-20',
  testimonials: '2026-03-20',
  faq:          '2026-03-25',
  blog:         '2026-03-25',
  privacy:      '2026-03-25',
  terms:        '2026-03-25',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                          lastModified: PAGE_DATES.home,         changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,            lastModified: PAGE_DATES.services,     changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/portfolio`,           lastModified: PAGE_DATES.portfolio,    changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/packages`,            lastModified: PAGE_DATES.packages,     changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/calculator`,          lastModified: PAGE_DATES.calculator,   changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`,               lastModified: PAGE_DATES.about,        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,             lastModified: PAGE_DATES.contact,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/book`,                lastModified: PAGE_DATES.book,         changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`,                 lastModified: PAGE_DATES.faq,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/testimonials`,        lastModified: PAGE_DATES.testimonials, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/privacy`,             lastModified: PAGE_DATES.privacy,      changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,               lastModified: PAGE_DATES.terms,        changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const albumPages: MetadataRoute.Sitemap = portfolioAlbums.map((album) => ({
    url: `${BASE_URL}/portfolio/${album.id}`,
    lastModified: '2026-03-25',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: PAGE_DATES.blog,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATION_PAGES.map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: '2026-03-25',
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...corePages, ...locationPages, ...albumPages, ...blogIndex, ...blogPages];
}
