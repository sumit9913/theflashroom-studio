import { motion } from 'framer-motion';
import {
  Heart,
  Camera,
  Users,
  Baby,
  Cake,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import babyshower from '@/assets/babyshower.jpg';
import birthday from '@/assets/birthday.jpg';
import event from '@/assets/event.jpg';
import haldi from '@/assets/haldi.jpg';
import heroWedding from '@/assets/hero-wedding.jpg';
import prewedding from '@/assets/prewedding.jpg';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'weddings',
    icon: Heart,
    title: 'Wedding Photography & Videography',
    subtitle: 'Your love story, beautifully captured',
    description:
      "From the sacred pheras to the joyous celebrations, we document every ritual, emotion, and moment of your wedding day. Our team captures candid moments, traditional ceremonies, and cinematic highlights that you'll treasure forever.",
    features: [
      'Full-day ceremony coverage',
      'Candid & portrait photography',
      'Cinematic wedding film',
      'Haldi, Mehendi, Sangeet coverage',
      'Pheras & reception documentation',
      'Drone aerial shots',
    ],
    image: heroWedding,
  },
  {
    id: 'prewedding',
    icon: Camera,
    title: 'Pre-Wedding Shoots',
    subtitle: 'Celebrate your journey together',
    description:
      "Create stunning memories before the big day with our artistic pre-wedding shoots. Whether it's a palace backdrop, serene beach, or your favorite café, we bring your love story to life with creative concepts and beautiful locations.",
    features: [
      'Location scouting & planning',
      'Multiple outfit changes',
      'Creative concept development',
      'Professional styling guidance',
      'High-resolution edited photos',
      'Optional cinematic video',
    ],
    image: prewedding,
  },
  {
    id: 'events',
    icon: Users,
    title: 'Event Coverage',
    subtitle: 'Capturing celebrations big and small',
    description:
      'From corporate gatherings to intimate family reunions, we provide comprehensive event coverage that captures the essence of your celebration. Our discrete approach ensures natural, candid moments.',
    features: [
      'Corporate events & conferences',
      'Anniversary celebrations',
      'Family reunions & gatherings',
      'Religious ceremonies',
      'Cultural celebrations',
      'Award ceremonies',
    ],
    image: event,
  },
  {
    id: 'babyshower',
    icon: Baby,
    title: 'Baby Shower & Maternity',
    subtitle: 'Welcoming new beginnings',
    description:
      'Celebrate the joy of new life with our specialized baby shower and maternity photography. We capture the glow, the excitement, and the love surrounding this beautiful phase of life.',
    features: [
      'Traditional ceremony coverage',
      'Artistic maternity portraits',
      'Family group photos',
      'Decoration & venue shots',
      'Candid guest moments',
      'Custom themed shoots',
    ],
    image: babyshower,
  },
  {
    id: 'birthdays',
    icon: Cake,
    title: 'Birthday & Special Occasions',
    subtitle: 'Making milestones memorable',
    description:
      'From first birthdays to milestone celebrations, we capture the joy, laughter, and love that make each birthday special. Our creative approach ensures vibrant, joyful photos.',
    features: [
      'Kids birthday parties',
      'Milestone celebrations (50th, 60th, etc.)',
      'Theme-based photography',
      'Cake smash sessions',
      'Family portraits',
      'Event videography',
    ],
    image: birthday,
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>
          Photography & Videography Services in Mumbai | The Flash Room Studio
        </title>
        <meta
          name="description"
          content="Wedding, pre-wedding, maternity, baby shower, birthday and corporate event photography & videography services in Mumbai by The Flash Room Studio. Available Pan-India & internationally."
        />
        <link rel="canonical" href="https://theflashroom.in/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'PhotographyBusiness',
                name: 'The Flash Room Studio',
                url: 'https://theflashroom.in',
                image: 'https://theflashroom.in/og-image.png',
                logo: 'https://theflashroom.in/og-image.png',
                telephone: ['+91 99673 99913', '+91 91366 98930'],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mumbai',
                  addressRegion: 'MH',
                  addressCountry: 'IN',
                },
                areaServed: ['Mumbai', 'India'],
                sameAs: ['https://www.instagram.com/tfrstudio__'],
              },
              {
                '@type': 'ItemList',
                name: 'Photography & Videography Services in Mumbai',
                itemListElement: services.map((s, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: s.title,
                  url: `https://theflashroom.in/services#${s.id}`,
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={haldi}
              alt="Our Services"
              className="w-full h-full object-cover opacity-20"
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
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Professional{' '}
                <span className="text-gold-gradient">Photography</span> Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intimate ceremonies to grand celebrations, we offer
                comprehensive photography and videography services tailored to
                your unique needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                  {/* Image */}
                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-lg overflow-hidden group">
                      <img
                        src={service.image}
                        alt={`${service.title} in Mumbai by The Flash Room Studio`}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gold font-elegant text-lg mb-6">
                      {service.subtitle}
                    </p>
                    <p className="sr-only">
                      {service.title.toLowerCase()} services in Mumbai by The
                      Flash Room Studio
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to="/packages">
                      <Button variant="gold" className="group">
                        View {service.title.split('&')[0].trim()} Packages
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Service{' '}
                <span className="text-gold-gradient">You Need</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Every celebration is unique. Let's discuss your requirements and
                create a custom package that perfectly fits your needs and
                budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/book">
                  <Button variant="gold-outline" size="lg">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
