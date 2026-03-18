import type { Metadata } from 'next';

import Book from '@/views/Book';

export const metadata: Metadata = {
  title: 'Book a Photography Session',
  description:
    "Book your wedding, pre-wedding, maternity, baby shower or event photography session with The Flash Room Studio. Fill in the details and we'll get back to you within 24 hours with a custom quote.",
  alternates: { canonical: 'https://theflashroom.in/book' },
  openGraph: {
    title: 'Book a Photography Session | The Flash Room Studio',
    description:
      'Start planning your perfect shoot. We reply within 24 hours.',
    url: 'https://theflashroom.in/book',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BookPage() {
  return <Book />;
}
