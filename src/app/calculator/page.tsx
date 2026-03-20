import CalculatorClient from './CalculatorClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Package Calculator — Build Your Custom Photography Package',
  description:
    'Use our interactive package calculator to build your ideal photography and videography package. Choose from candid photographers, cinematographers, drone, reels, albums and more. Get an instant estimate.',
  alternates: { canonical: 'https://theflashroom.in/calculator' },
  openGraph: {
    title: 'Package Calculator | The Flash Room Studio',
    description:
      'Build your custom photography package and get an instant estimate. Mumbai-based, Pan-India coverage.',
    url: 'https://theflashroom.in/calculator',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
