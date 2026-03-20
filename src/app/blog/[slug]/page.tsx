import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import { BLOG_POSTS, getBlogPost } from '@/lib/blog';
import BlogPost from '@/views/BlogPost';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://theflashroom.in/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | The Flash Room Studio`,
      description: post.description,
      url: `https://theflashroom.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['The Flash Room Studio'],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'The Flash Room Studio',
      url: 'https://theflashroom.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Flash Room Studio',
      url: 'https://theflashroom.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theflashroom.in/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theflashroom.in/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} />
    </>
  );
}
