import type { Metadata } from 'next';

import Terms from '@/views/Terms';

export const metadata: Metadata = {
  title: 'Terms of Service | The Flash Room Studio',
  description: 'Terms of service for The Flash Room Studio.',
  alternates: { canonical: 'https://theflashroom.in/terms' },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return <Terms />;
}
