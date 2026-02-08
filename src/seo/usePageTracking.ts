import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
