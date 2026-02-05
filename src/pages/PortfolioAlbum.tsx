import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, MapPin, Image as ImageIcon } from 'lucide-react';
import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';

// ✅ Import the same images you already use
import babyshower from '@/assets/babyshower.jpg';
import birthday from '@/assets/birthday.jpg';
import event from '@/assets/event.jpg';
import haldi from '@/assets/haldi.jpg';
import heroWedding from '@/assets/hero-wedding.jpg';
import phera from '@/assets/phera.jpg';
import prewedding from '@/assets/prewedding.jpg';
import sangeet from '@/assets/sangeet.jpg';
import { Layout } from '@/components/layout/Layout';
import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/ui/button';

/**
 * ✅ Reuse your albums data here (same as in Portfolio.tsx)
 * Later you can move this to: src/data/portfolioAlbums.ts
 */
const portfolioAlbums = [
  {
    id: 'priya-rahul-wedding-udaipur',
    title: 'Priya & Rahul Wedding',
    category: 'Weddings',
    location: 'Udaipur',
    cover: heroWedding,
    images: [heroWedding, haldi, sangeet, phera],
  },
  {
    id: 'sneha-amit-prewedding-jaipur',
    title: 'Sneha & Amit Pre-Wedding',
    category: 'Pre-Weddings',
    location: 'Jaipur',
    cover: prewedding,
    images: [prewedding, heroWedding, event],
  },
  {
    id: 'traditional-haldi-mumbai',
    title: 'Traditional Haldi Ceremony',
    category: 'Weddings',
    location: 'Mumbai',
    cover: haldi,
    images: [haldi, heroWedding, sangeet],
  },
  {
    id: 'sangeet-night-delhi',
    title: 'Sangeet Night Celebration',
    category: 'Weddings',
    location: 'Delhi',
    cover: sangeet,
    images: [sangeet, heroWedding, phera],
  },
  {
    id: 'sacred-phera-bangalore',
    title: 'Sacred Phera Ceremony',
    category: 'Weddings',
    location: 'Bangalore',
    cover: phera,
    images: [phera, heroWedding, haldi],
  },
  {
    id: 'godh-bharai-pune',
    title: 'Godh Bharai Celebration',
    category: 'Baby Showers',
    location: 'Pune',
    cover: babyshower,
    images: [babyshower, heroWedding, birthday],
  },
  {
    id: '50th-birthday-mumbai',
    title: '50th Birthday Celebration',
    category: 'Others',
    location: 'Mumbai',
    cover: birthday,
    images: [birthday, event, heroWedding],
  },
  {
    id: 'corporate-annual-dinner-hyderabad',
    title: 'Corporate Annual Dinner',
    category: 'Events',
    location: 'Hyderabad',
    cover: event,
    images: [event, heroWedding, birthday],
  },
  {
    id: 'kavita-vikram-wedding-goa',
    title: 'Kavita & Vikram Wedding',
    category: 'Weddings',
    location: 'Goa',
    cover: heroWedding,
    images: [heroWedding, phera, sangeet],
  },
  {
    id: 'romantic-beach-prewedding-goa',
    title: 'Romantic Beach Pre-Wedding Shoot',
    category: 'Pre-Weddings',
    location: 'Goa',
    cover: prewedding,
    images: [prewedding, heroWedding, sangeet],
  },
  {
    id: 'mehndi-night-jaipur',
    title: 'Mehndi Night Celebration',
    category: 'Weddings',
    location: 'Jaipur',
    cover: sangeet,
    images: [sangeet, haldi, heroWedding],
  },
  {
    id: 'baby-shower-chennai',
    title: 'Baby Shower Party',
    category: 'Baby Showers',
    location: 'Chennai',
    cover: babyshower,
    images: [babyshower, birthday, heroWedding],
  },
];

export default function PortfolioAlbum() {
  const { albumId } = useParams();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeThreshold = 50; // px

  const album = useMemo(() => {
    if (!albumId) return null;
    return portfolioAlbums.find((a) => a.id === albumId) ?? null;
  }, [albumId]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setSelectedIndex((idx) => {
      if (idx === null || !album) return idx;
      return (idx - 1 + album.images.length) % album.images.length;
    });
  }, [album]);

  const next = useCallback(() => {
    setSelectedIndex((idx) => {
      if (idx === null || !album) return idx;
      return (idx + 1) % album.images.length;
    });
  }, [album]);

  useEffect(() => {
    if (selectedIndex === null || !album) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, album, closeLightbox, prev, next]);

  // ✅ EARLY RETURNS COME AFTER ALL HOOKS
  if (!albumId) return <Navigate to="/portfolio" replace />;
  if (!album) return <Navigate to="/not-found" replace />;

  const canonicalUrl = `https://theflashroom.in/portfolio/${album.id}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${album.title} | The Flash Room Studio`,
    url: canonicalUrl,
    about: [`${album.category} Photography`, `${album.category} Videography`],
    locationCreated: album.location,
    isPartOf: {
      '@type': 'WebSite',
      name: 'The Flash Room Studio',
      url: 'https://theflashroom.in',
    },
    associatedMedia: album.images.map((img, idx) => ({
      '@type': 'ImageObject',
      name: `${album.title} - Photo ${idx + 1}`,
      contentUrl: canonicalUrl, // SPA assets won't have direct URLs; this is still fine for structured data.
    })),
  };

  const openLightbox = (index: number) => setSelectedIndex(index);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // Only accept mostly-horizontal swipe
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > swipeThreshold) {
      if (dx > 0)
        prev(); // swipe right -> previous
      else next(); // swipe left  -> next
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      <Helmet>
        <title>
          {album.title} | {album.category} Photography in {album.location} | The
          Flash Room Studio
        </title>
        <meta
          name="description"
          content={`${album.title} — ${album.category} photography album captured by The Flash Room Studio. Based in Mumbai, available Pan-India & internationally. Location: ${album.location}.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={album.cover}
              alt={`${album.title} cover`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container-custom relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/portfolio">
                <Button variant="gold-outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl">
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">
                {album.category} Album
              </span>

              <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                {album.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  {album.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-gold" />
                  {album.images.length} Photos
                </span>
              </div>

              {/* SEO helper */}
              <p className="sr-only">
                {album.title} {album.category.toLowerCase()} photography album
                in {album.location} by The Flash Room Studio
              </p>
            </motion.div>
          </div>
        </section>

        {/* Album Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {album.images.map((img, index) => (
                <motion.button
                  key={index}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onClick={() => openLightbox(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square group text-left ${
                    index % 7 === 0
                      ? 'md:col-span-2 md:row-span-2 md:aspect-auto'
                      : ''
                  }`}>
                  <img
                    src={img}
                    alt={`${album.title} photo ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <Seo
          title={`${album.title} | ${album.category} Photography in ${album.location} | The Flash Room Studio`}
          description={`${album.title} — ${album.category.toLowerCase()} photography & videography by The Flash Room Studio (Mumbai). Available Pan-India & destination weddings. Location: ${album.location}.`}
          path={`/portfolio/${album.id}`}
          image="https://theflashroom.in/og/og-portfolio.jpg"
          jsonLd={jsonLd}
        />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={closeLightbox}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}>
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
                aria-label="Close">
                <X className="w-6 h-6" />
              </button>

              {/* Prev/Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
                aria-label="Previous">
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
                aria-label="Next">
                ›
              </button>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}>
                <img
                  src={album.images[selectedIndex]}
                  alt={`${album.title} photo ${selectedIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <div className="text-center mt-5 text-muted-foreground text-sm">
                  {selectedIndex + 1} / {album.images.length}
                </div>

                {/* Mobile controls */}
                <div className="md:hidden flex justify-center gap-4 mt-4">
                  <Button variant="gold-outline" onClick={prev}>
                    Prev
                  </Button>
                  <Button variant="gold-outline" onClick={next}>
                    Next
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
