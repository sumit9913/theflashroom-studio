'use client';

import dynamic from 'next/dynamic';

const Calculator = dynamic(() => import('@/views/Calculator'), { ssr: false });

export default function CalculatorClient() {
  return <Calculator />;
}
