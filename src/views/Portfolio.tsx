'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Filter, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, useCallback, useEffect, useRef } from 'react';

import phera from '@/assets/phera.jpg';
import { Button } from '@/components/ui/button';
import {
  categories,
  portfolioAlbums,
  reels,
} from '@/data/portfolioAlbums';

import type { StaticImageData } from 'next/image';

type Album = {
  id: string;
  title: string;
  category: string;
  location: string;
  cover: StaticImageData | string;
  images: (StaticImageData | string)[];
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxAlbum, setLightboxAlbum] = useState<Album | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeThreshold = 50;

  const filteredAlbums = useMemo(
    () =>
      portfolioAlbums.filter(
        (album) =>
          selectedCategory === 'All' || album.category === selectedCategory,
      ),
    [selectedCategory],
  );

  const openLightbox = useCallback((album: Album, index = 0) => {
    setLightboxAlbum(album);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxAlbum(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      lightboxAlbum ? (i - 1 + lightboxAlbum.images.length) % lightboxAlbum.images.length : i,
    );
  }, [lightboxAlbum]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      lightboxAlbum ? (i + 1) % lightboxAlbum.images.length : i,
    );
  }, [lightboxAlbum]);

  useEffect(() => {
    if (!lightboxAlbum) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxAlbum, closeLightbox, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > swipeThreshold) {
      dx > 0 ? prev() : next();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={phera}
            alt="Portfolio"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Our <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A showcase of the beautiful moments we've had the privilege to
              capture. Each image tells a unique story of love, joy, and
              celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card sticky top-16 z-30 border-b border-border">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-background'
                    : 'bg-muted text-muted-foreground hover:bg-gold/20 hover:text-gold'
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <button
                    type="button"
                    onClick={() => openLightbox(album as Album)}
                    className={`block w-full text-left ${index % 5 === 0 ? 'h-full' : ''}`}>
                    <div className={`relative overflow-hidden rounded-lg ${index % 5 === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}>
                      <Image
                        src={album.cover}
                        alt={`${album.title} - ${album.category} photography in ${album.location} by The Flash Room Studio`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1">
                            {album.title}
                          </h3>
                          <p className="text-gold text-xs md:text-sm">
                            {album.location}
                          </p>
                          <p className="sr-only">
                            View {album.title} album from {album.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
              aria-label="Close">
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors text-2xl"
              aria-label="Previous">
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors text-2xl"
              aria-label="Next">
              ›
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxAlbum.images[lightboxIndex]}
                alt={`${lightboxAlbum.title} photo ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[72vh] object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 90vw"
              />

              <div className="flex items-center justify-between mt-5">
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {lightboxAlbum.title}
                  </p>
                  <p className="text-gold text-sm">{lightboxAlbum.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm">
                    {lightboxIndex + 1} / {lightboxAlbum.images.length}
                  </span>
                  <Link
                    href={`/portfolio/${lightboxAlbum.id}`}
                    onClick={closeLightbox}
                    className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline font-medium">
                    View full album
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex justify-center gap-4 mt-4">
                <Button variant="gold-outline" onClick={prev}>Prev</Button>
                <Button variant="gold-outline" onClick={next}>Next</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reels Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Cinematic Films
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Wedding <span className="text-gold-gradient">Reels</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our cinematic wedding films that capture the essence of love
              and celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={reel.thumbnail}
                    alt={`${reel.title} - cinematic wedding film by The Flash Room Studio`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/60 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-background ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                  {reel.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
