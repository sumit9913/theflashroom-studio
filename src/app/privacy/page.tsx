import type { Metadata } from 'next';

import Privacy from '@/views/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Flash Room Studio',
  description: 'Privacy policy for The Flash Room Studio website.',
  alternates: { canonical: 'https://theflashroom.in/privacy' },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <Privacy />;
}
