import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
