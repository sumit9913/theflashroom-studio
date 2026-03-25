'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Play,
  ChevronDown,
  Star,
  Camera,
  Heart,
  Users,
  Baby,
  Cake,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import babyshower from '@/assets/babyshower.jpg';
import birthday from '@/assets/birthday.jpg';
import event from '@/assets/event.jpg';
import haldi from '@/assets/haldi.jpg';
import heroWedding from '@/assets/hero-wedding.jpg';
import phera from '@/assets/phera.jpg';
import prewedding from '@/assets/prewedding.jpg';
import sangeet from '@/assets/sangeet.jpg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  { name: 'Weddings', icon: Heart, image: heroWedding },
  { name: 'Pre-Weddings', icon: Camera, image: prewedding },
  { name: 'Events', icon: Users, image: event },
  { name: 'Baby Showers', icon: Baby, image: babyshower },
  { name: 'Maternity', icon: Heart, image: babyshower },
  { name: 'Birthdays', icon: Cake, image: birthday },
];

const portfolioImages = [
  { src: heroWedding, category: 'Wedding' },
  { src: prewedding, category: 'Pre-Wedding' },
  { src: haldi, category: 'Haldi' },
  { src: sangeet, category: 'Sangeet' },
  { src: phera, category: 'Phera' },
  { src: babyshower, category: 'Baby Shower' },
];

const testimonials = [
  {
    name: 'Priya & Rahul',
    event: 'Wedding',
    rating: 5,
    text: 'TheFlashRoom captured every emotion of our wedding beautifully. From the haldi ceremony to the pheras, every moment was preserved perfectly.',
  },
  {
    name: 'Sneha Sharma',
    event: 'Baby Shower',
    rating: 5,
    text: 'The team made us feel so comfortable. The photos are absolutely stunning and we will treasure them forever.',
  },
  {
    name: 'Amit & Kavita',
    event: 'Pre-Wedding',
    rating: 5,
    text: 'Our pre-wedding shoot was magical! The team understood our vision perfectly and delivered beyond expectations.',
  },
];

const heroSlides = [
  { src: heroWedding, alt: 'Luxury Indian wedding photography in Mumbai' },
  { src: prewedding, alt: 'Pre-wedding shoot by The Flash Room Studio' },
  { src: haldi, alt: 'Haldi ceremony photography' },
  { src: sangeet, alt: 'Sangeet celebration photography' },
  { src: phera, alt: 'Phera ceremony photography' },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0">
              <Image
                src={heroSlides[heroIndex].src}
                alt={heroSlides[heroIndex].alt}
                fill
                className="object-cover"
                priority={heroIndex === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <span className="inline-block text-gold font-elegant text-lg md:text-xl tracking-[0.3em] uppercase mb-6">
              TheFlashRoom Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-shadow-lg">
            Turning Moments into{' '}
            <span className="text-gold-gradient">Timeless Memories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Premium photography and videography for weddings, pre-weddings, baby
            showers, and all your special celebrations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/book">
              <Button variant="hero" size="xl">
                Book Your Shoot
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="hero-outline"
                size="xl"
                className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === heroIndex ? 'w-6 bg-gold' : 'w-1.5 bg-foreground/40 hover:bg-foreground/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-foreground/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              What We <span className="text-gold-gradient">Capture</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the sacred pheras to joyful celebrations, we document every
              emotion with artistic precision and cinematic storytelling
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group">
                <Link href="/services" className="block">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <service.icon className="w-6 h-6 text-gold mb-2" />
                      <h3 className="font-display text-sm font-semibold text-foreground">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12">
            <Link href="/services">
              <Button variant="gold-outline" size="lg">
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Stories We've <span className="text-gold-gradient">Told</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the beautiful moments we've had the privilege to
              capture
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioImages.map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'relative group overflow-hidden rounded-lg',
                  index === 0 && 'md:col-span-2 md:row-span-2'
                )}>
                <div
                  className={cn(
                    'relative aspect-square',
                    index === 0 && 'md:aspect-auto md:h-full'
                  )}>
                  <Image
                    src={img.src}
                    alt={`${img.category} photography in Mumbai by The Flash Room Studio`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-gold font-elegant text-sm tracking-wide">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="gold" size="lg">
                View Full Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-maroon rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'Weddings Captured' },
              { number: '50+', label: 'Happy Couples' },
              { number: '5+', label: 'Awards Won' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Words from <span className="text-gold-gradient">Our Clients</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background rounded-xl p-8 border border-border hover:border-gold/30 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold">{testimonial.event}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="gold-outline" size="lg">
                Read More Reviews
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={sangeet}
            alt="Book a Shoot"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Create Your{' '}
              <span className="text-gold-gradient">Story</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's capture the moments that matter most. Book your session
              today and let us transform your celebrations into timeless
              memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="gold" size="xl">
                  Book Your Shoot
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="gold-outline" size="xl">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
