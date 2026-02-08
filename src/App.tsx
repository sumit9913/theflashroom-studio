import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LLMs from './pages/LLMs';
import NotFound from './pages/NotFound';
import Packages from './pages/Packages';
import Portfolio from './pages/Portfolio';
import PortfolioAlbum from './pages/PortfolioAlbum';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';

import { InitialLoader } from '@/components/common/InitialLoader';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { localBusinessJsonLd } from '@/seo/localBusinessJsonLd';

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem('tfr-loaded');

    if (loaded) {
      setShowLoader(false);
      return;
    }

    sessionStorage.setItem('tfr-loaded', 'true');

    // keep loader visible for shutter animation
    const t = window.setTimeout(() => setShowLoader(false), 1600);

    return () => window.clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <InitialLoader show={showLoader} />

        {!showLoader && (
          <>
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <ScrollToTop />
              <Helmet>
                <script type="application/ld+json">
                  {JSON.stringify(localBusinessJsonLd)}
                </script>
              </Helmet>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<Book />} />
                <Route
                  path="/portfolio/:albumId"
                  element={<PortfolioAlbum />}
                />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/llms" element={<LLMs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
