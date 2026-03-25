'use client';

import { ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { BLOG_POSTS, formatDate } from '@/lib/blog';

const CATEGORY_COLOURS: Record<string, string> = {
  'Pre-Wedding': 'bg-gold/10 text-gold border-gold/20',
  Wedding: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Planning: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const FILTER_ACTIVE: Record<string, string> = {
  All: 'bg-foreground text-background',
  'Pre-Wedding': 'bg-gold text-background',
  Wedding: 'bg-rose-500 text-white',
  Planning: 'bg-blue-500 text-white',
};

export default function Blog() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    [],
  );
  const [selected, setSelected] = useState('All');

  const posts = useMemo(
    () =>
      selected === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.category === selected),
    [selected],
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container-custom relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{ animation: 'fade-up 0.6s ease both' }}>
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Journal
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Wedding <span className="text-gold-gradient">Planning</span> Tips
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Honest advice for couples planning their wedding photography —
              locations, costs, outfits, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-card sticky top-16 z-30 border-b border-border">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  selected === cat
                    ? (FILTER_ACTIVE[cat] ?? 'bg-gold text-background') +
                      ' border-transparent'
                    : 'bg-muted text-muted-foreground border-border hover:border-gold/30 hover:text-foreground'
                }`}>
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 opacity-60 text-xs">
                    ({BLOG_POSTS.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              No posts in this category yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors duration-300"
                  style={{
                    animation: `fade-up 0.5s ease ${i * 0.08}s both`,
                  }}>
                  {/* Category banner */}
                  <div className="h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

                  <div className="p-6">
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                          CATEGORY_COLOURS[post.category] ??
                          'bg-gold/10 text-gold border-gold/20'
                        }`}>
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime} read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-muted-foreground">
                        {formatDate(post.date)}
                      </time>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light transition-colors group/link">
                        Read more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom text-center">
          <div style={{ animation: 'fade-up 0.6s ease 0.2s both' }}>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to plan your shoot?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Get in touch — we'll help you plan every detail from locations to
              outfits to timeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
