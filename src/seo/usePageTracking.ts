'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { GA_MEASUREMENT_ID } from './googleAnalytics';

type GtagEventParams = {
  page_path?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      params?: GtagEventParams,
    ) => void;
  }
}

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const search = searchParams?.toString();
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname + (search ? `?${search}` : ''),
    });
  }, [pathname, searchParams]);
}
