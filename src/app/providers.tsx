'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';

import { InitialLoader } from '@/components/common/InitialLoader';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { usePageTracking } from '@/seo/usePageTracking';

function PageTracker() {
  usePageTracking();
  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem('tfr-loaded');

    if (loaded) {
      setShowLoader(false);
      return;
    }

    sessionStorage.setItem('tfr-loaded', 'true');

    const t = window.setTimeout(() => setShowLoader(false), 1600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <InitialLoader show={showLoader} />
        <Toaster />
        <Suspense fallback={null}>
          <PageTracker />
        </Suspense>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
