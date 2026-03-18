import { Camera, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <Camera className="w-16 h-16 text-gold mx-auto mb-6 opacity-60" />

        <h1 className="font-display text-8xl font-bold text-gold-gradient mb-2">
          404
        </h1>

        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to the good stuff.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-background rounded-lg font-medium hover:bg-gold-dark transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg font-medium hover:bg-gold/10 transition-colors duration-300">
            <Search className="w-4 h-4" />
            View Portfolio
          </Link>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Packages', href: '/packages' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Book a Shoot', href: '/book' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 underline-offset-4 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
