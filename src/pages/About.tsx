import { motion } from 'framer-motion';
import { Camera, Heart, Award, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import heroWedding from '@/assets/hero-wedding.jpg';
import teamImage from '@/assets/team.jpg';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    title: 'Emotion First',
    description:
      'We believe every tear, smile, and embrace tells a story. Our mission is to capture the authentic emotions that make your day unique.',
  },
  {
    icon: Camera,
    title: 'Cinematic Excellence',
    description:
      'Blending traditional photography with modern cinematic techniques, we create visual narratives that are both timeless and contemporary.',
  },
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description:
      'Recognized for excellence in wedding photography across India, we bring professional expertise to every celebration we document.',
  },
  {
    icon: Users,
    title: 'Personal Connection',
    description:
      'We take time to understand your vision, traditions, and preferences, ensuring every frame reflects your unique love story.',
  },
];

const teamMembers = [
  {
    name: 'Boopathy Durairaj',
    role: 'Lead Photographer',
    bio: 'With over 10 years of experience capturing Indian weddings, Boopathy brings artistic vision and technical mastery to every shoot.',
  },
  {
    name: 'Sumit Maurya',
    role: 'Client Experience Manager',
    bio: 'Sumit coordinates schedules, timelines, and deliverables so your experience stays seamless and stress-free.',
  },
  {
    name: 'Surya Gounder',
    role: 'Cinematographer',
    bio: 'Surya crafts stunning wedding films that capture the magic of your celebration with Hollywood-quality production values.',
  },
  {
    name: 'Muskan Mujawar',
    role: 'Creative Director',
    bio: "Muskan's eye for detail and passion for storytelling ensures every project maintains our signature cinematic style.",
  },
  {
    name: 'Meezan Shaikh',
    role: 'Video Editor',
    bio: 'Meezan refines every frame with a keen eye for color, pacing, and timeless finishing that elevates your story.',
  },
  {
    name: 'Andrew Pillai',
    role: 'Instagram & Digital Marketing',
    bio: 'Andrew manages our Instagram presence and digital campaigns to showcase your stories to the world.',
  },
  {
    name: 'Karthik Konar',
    role: 'Creative Handler',
    bio: 'Karthik keeps concepts aligned and ensures every detail supports the story we want to tell.',
  },
  {
    name: 'Ganesh Vanniar',
    role: 'Production Assistant',
    bio: 'Ganesh supports the team on-set, keeping shoots running smoothly and efficiently.',
  },
  {
    name: 'Mahesh Chettiar',
    role: 'Videographer',
    bio: 'Mahesh captures cinematic footage with a focus on emotion, movement, and atmosphere.',
  },
];

export default function About() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About The Flash Room Studio',
    url: 'https://theflashroom.in/about',
    isPartOf: {
      '@type': 'WebSite',
      name: 'The Flash Room Studio',
      url: 'https://theflashroom.in',
    },
    about: {
      '@type': 'PhotographyBusiness',
      name: 'The Flash Room Studio',
      url: 'https://theflashroom.in',
      description:
        'Mumbai-based photography and videography studio specializing in weddings, pre-weddings, maternity shoots, baby showers, birthdays and corporate events. Available Pan-India and internationally.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'MH',
        addressCountry: 'IN',
      },
      areaServed: ['Mumbai', 'India'],
      sameAs: ['https://www.instagram.com/tfrstudio__'],
      member: teamMembers.map((m) => ({
        '@type': 'Person',
        name: m.name,
        jobTitle: m.role,
        worksFor: {
          '@type': 'Organization',
          name: 'The Flash Room Studio',
        },
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>About Us | The Flash Room Studio Mumbai</title>
        <meta
          name="description"
          content="Meet The Flash Room Studio—Mumbai-based photographers and filmmakers capturing weddings and events with a premium, cinematic style. Explore our story, approach and team."
        />
        <link rel="canonical" href="https://theflashroom.in/about" />

        {/* Social preview (optional, but recommended on About page too) */}
        <meta
          property="og:title"
          content="About The Flash Room Studio | Mumbai"
        />
        <meta
          property="og:description"
          content="Mumbai-based wedding & event photography and videography team with a premium, cinematic style."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theflashroom.in/about" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(aboutJsonLd)}
        </script>
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroWedding}
              alt="Mumbai wedding photography team - The Flash Room Studio"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl">
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">
                About Us
              </span>

              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Crafting Visual Stories Since{' '}
                <span className="text-gold-gradient">2024</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                TheFlashRoom Studio is a Mumbai-based wedding photography and
                videography team capturing the rich cultural tapestry of Indian
                celebrations — from intimate ceremonies to grand destination
                weddings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className="relative">
                  <img
                    src={teamImage}
                    alt="The Flash Room Studio team in Mumbai"
                    loading="lazy"
                    decoding="async"
                    className="rounded-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gold text-background p-6 rounded-lg">
                    <div className="font-display text-3xl font-bold">5+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <span className="text-gold font-elegant text-lg tracking-widest uppercase">
                  Our Story
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                  From Passion to{' '}
                  <span className="text-gold-gradient">Profession</span>
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a love for capturing candid moments evolved
                    into a studio trusted for premium wedding photography and
                    cinematic films across India.
                  </p>
                  <p>
                    From intimate home ceremonies to destination weddings, we
                    approach each project with the same dedication and
                    storytelling focus.
                  </p>
                  <p>
                    We don’t just take photos — we create visual legacies that
                    families cherish for generations.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/portfolio">
                    <Button variant="gold-outline" size="lg">
                      View Portfolio
                    </Button>
                  </Link>
                  <Link to="/packages">
                    <Button variant="gold" size="lg">
                      See Packages
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">
                Our Philosophy
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                What Drives <span className="text-gold-gradient">Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">
                Meet The Team
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                The Artists Behind{' '}
                <span className="text-gold-gradient">The Lens</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A dedicated Mumbai-based crew of photographers, filmmakers,
                editors and creators.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="bg-background rounded-xl p-8 border border-border hover:border-gold/30 transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6">
                    <span className="font-display text-2xl font-bold text-background">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Work{' '}
                <span className="text-gold-gradient">Together</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Tell us about your event and we’ll suggest the right package
                (Mumbai + Pan-India + destination).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Get in Touch
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
