import type { Metadata } from 'next';

import LLMs from '@/views/LLMs';

export const metadata: Metadata = {
  title: 'For LLMs | The Flash Room Studio',
  description: 'Machine-readable content about The Flash Room Studio.',
  alternates: { canonical: 'https://theflashroom.in/llms' },
};

export default function LLMsPage() {
  return <LLMs />;
}
