import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

import {
  type BlogPost,
  type ContentBlock,
  BLOG_POSTS,
  formatDate,
} from '@/lib/blog';

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p className="text-foreground/80 leading-relaxed mb-5">{block.text}</p>
      );
    case 'ul':
      return (
        <ul className="space-y-2 mb-5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80">
              <span className="text-gold mt-1 flex-shrink-0">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="space-y-3 mb-5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80">
              <span className="text-gold font-semibold flex-shrink-0 w-5">
                {i + 1}.
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'tip':
      return (
        <div className="my-6 p-5 bg-gold/5 border border-gold/20 rounded-xl">
          <p className="text-sm font-semibold text-gold mb-1">
            {block.heading}
          </p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {block.text}
          </p>
        </div>
      );
    case 'cta':
      return (
        <div className="my-8 p-6 bg-card border border-border rounded-xl text-center">
          <p className="text-foreground/80 mb-4">{block.text}</p>
          <Link
            href={block.link}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300">
            {block.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost({ post }: { post: BlogPost }) {
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 lg:pt-40">
        <div className="container-custom max-w-3xl">
          <div style={{ animation: 'fade-up 0.6s ease both' }}>
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </Link>

            {/* Category + read time */}
            <div className="flex items-center gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-3 pb-8 border-b border-border">
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-sm font-bold">TFR</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  The Flash Room Studio
                </p>
                <time className="text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-16">
        <div className="container-custom max-w-3xl">
          <div style={{ animation: 'fade-in 0.6s ease 0.2s both' }}>
            {/* Lead */}
            <p className="text-lg text-foreground/90 leading-relaxed mb-8 font-medium border-l-2 border-gold pl-5">
              {post.excerpt}
            </p>

            {/* Content blocks */}
            {post.content.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(prevPost || nextPost) && (
        <section className="py-10 border-t border-border">
          <div className="container-custom max-w-3xl">
            <div className="grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-5 bg-card border border-border rounded-xl hover:border-gold/30 transition-colors">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors leading-snug line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-5 bg-card border border-border rounded-xl hover:border-gold/30 transition-colors text-right">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center justify-end gap-1">
                    Next <ArrowRight className="w-3 h-3" />
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors leading-snug line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
