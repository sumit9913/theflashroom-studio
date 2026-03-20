import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';

import Providers from './providers';

import type { Metadata, Viewport } from 'next';

import { GA_MEASUREMENT_ID } from '@/seo/googleAnalytics';
import { localBusinessJsonLd } from '@/seo/localBusinessJsonLd';

import './globals.css';

// Self-hosted fonts via next/font (eliminates render-blocking)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://theflashroom.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Luxury Wedding Photography in Mumbai | The Flash Room Studio',
    template: '%s | The Flash Room Studio',
  },
  description:
    'The Flash Room Studio — award-winning wedding & event photography and videography in Mumbai. Cinematic storytelling for weddings, pre-weddings, maternity, baby showers, and all celebrations. Available Pan-India & internationally.',

  keywords: [
    'wedding photography Mumbai',
    'wedding photographer Mumbai',
    'pre-wedding shoot Mumbai',
    'wedding videography Mumbai',
    'maternity photography Mumbai',
    'baby shower photography Mumbai',
    'event photography Mumbai',
    'destination wedding photographer India',
    'cinematic wedding film',
    'The Flash Room Studio',
  ],

  authors: [{ name: 'The Flash Room Studio', url: SITE_URL }],
  creator: 'The Flash Room Studio',
  publisher: 'The Flash Room Studio',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'The Flash Room Studio',
    title: 'Luxury Wedding Photography in Mumbai | The Flash Room Studio',
    description:
      'Award-winning wedding & event photography and videography. Cinematic storytelling for weddings, pre-weddings, maternity and celebrations. Pan-India & international.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Flash Room Studio — Wedding Photography Mumbai',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Wedding Photography in Mumbai | The Flash Room Studio',
    description:
      'Award-winning wedding & event photography and videography. Pan-India & international.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

  manifest: '/manifest.webmanifest',

  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#141110' },
    { media: '(prefers-color-scheme: light)', color: '#C5922A' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'The Flash Room Studio',
              url: 'https://theflashroom.in',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://theflashroom.in/portfolio?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <link rel="preload" href="/sounds/shutter.mp3" as="audio" />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}</Script>
      </body>
    </html>
  );
}
