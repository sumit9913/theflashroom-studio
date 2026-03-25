'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/siteConfig';

// Inline SVGs — lucide-react deprecated brand icons in v0.400+
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <path d="m10 15 5-3-5-3z"/>
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const footerLinks = {
  services: [
    { name: 'Wedding Photography', path: '/services#weddings' },
    { name: 'Pre-Wedding Shoots', path: '/services#prewedding' },
    { name: 'Event Coverage', path: '/services#events' },
    { name: 'Baby Showers', path: '/services#babyshower' },
    { name: 'Maternity Shoots', path: '/services#maternity' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Packages & Pricing', path: '/packages' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  {
    href: SITE_CONFIG.social.instagram,
    label: 'Follow us on Instagram',
    Icon: IconInstagram,
  },
  {
    href: SITE_CONFIG.social.youtube,
    label: 'Watch us on YouTube',
    Icon: IconYoutube,
  },
  {
    href: SITE_CONFIG.social.facebook,
    label: 'Follow us on Facebook',
    Icon: IconFacebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/og-image2.png"
                alt="TheFlashRoom Studio"
                width={160}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Turning moments into timeless memories. We capture the emotions,
              traditions, and celebrations that make your special day
              unforgettable.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE_CONFIG.phone.primaryHref}
                  className="flex items-start gap-3 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-foreground">{SITE_CONFIG.phone.primary}</p>
                    <p className="text-xs text-muted-foreground">{SITE_CONFIG.hours.weekdays}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.email.primaryHref}
                  className="flex items-start gap-3 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-foreground">{SITE_CONFIG.email.primary}</p>
                    <p className="text-xs text-muted-foreground">We reply within 24 hrs</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-foreground">{SITE_CONFIG.address.display}</p>
                    <p className="text-xs text-muted-foreground">Available Pan-India</p>
                  </div>
                </a>
                <p className="sr-only">
                  The Flash Room Studio is a professional wedding photography
                  and videography studio based in Mumbai, serving clients across
                  India and internationally.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/llms" className="hover:text-gold transition-colors">
              For LLMs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
