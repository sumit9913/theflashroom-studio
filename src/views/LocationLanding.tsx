'use client';

import { motion } from 'framer-motion';
import { Check, MapPin, ChevronDown, ChevronUp, ArrowRight, IndianRupee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding from '@/assets/prewedding.jpg';
import { Button } from '@/components/ui/button';
import { portfolioAlbums } from '@/data/portfolioAlbums';
import type { LocationPageData } from '@/data/locationPages';
import { SITE_CONFIG } from '@/lib/siteConfig';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-medium text-foreground/90">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gold flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gold flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function LocationLanding({ page }: { page: LocationPageData }) {
  const heroImage =
    page.albumCategory === 'Pre-Weddings' ? prewedding : heroWedding;

  const previewAlbums = portfolioAlbums
    .filter((a) => a.category === page.albumCategory)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={page.heroHeadline}
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {page.locationFull}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5 leading-tight">
              {page.heroHeadline}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {page.heroSub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book">
                <Button variant="gold" size="lg">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="gold-outline" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Intro text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                About This Service
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-6">
                {page.service} in {page.location}
              </h2>
              <div className="space-y-4">
                {page.intro.map((para, i) => (
                  <p key={i} className="text-foreground/75 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {page.nearbyAreas.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground/80 font-medium">
                      We also cover:{' '}
                    </span>
                    {page.nearbyAreas.join(', ')}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-display text-lg font-semibold mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-3 mb-8">
                {page.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">
                  Starting from
                </p>
                <p className="font-display text-3xl font-bold text-gold mb-4">
                  {page.startingPrice}
                </p>
                <div className="flex gap-3">
                  <Link href="/packages" className="flex-1">
                    <Button variant="gold" className="w-full">
                      View Full Packages
                    </Button>
                  </Link>
                  <Link href="/calculator">
                    <Button variant="gold-outline">
                      <IndianRupee className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  or{' '}
                  <Link href="/calculator" className="text-gold hover:underline">
                    build a custom package
                  </Link>{' '}
                  with our calculator
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      {previewAlbums.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Work
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold mt-3">
                {page.albumCategory} Portfolio
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {previewAlbums.map((album, i) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={album.cover}
                    alt={`${album.title} — ${page.service} by The Flash Room Studio`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs font-semibold text-foreground">
                        {album.title}
                      </p>
                      <p className="text-gold text-xs">{album.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button variant="gold-outline" className="gap-2">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              FAQs
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold mt-3">
              Common Questions
            </h2>
          </motion.div>

          <div className="bg-card rounded-2xl border border-border px-6 md:px-8">
            {page.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to book{' '}
              <span className="text-gold-gradient">{page.service}</span>
              <br />
              in {page.location}?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Reach out today to check availability for your date. We respond
              within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="gold" size="lg">
                  Book a Consultation
                </Button>
              </Link>
              <a href={SITE_CONFIG.phone.primaryHref}>
                <Button variant="gold-outline" size="lg">
                  Call {SITE_CONFIG.phone.primary}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
