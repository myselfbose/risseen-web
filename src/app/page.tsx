import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesBento from './components/ServicesBento';
import StatsSection from './components/StatsSection';
import PortfolioCarousel from './components/PortfolioCarousel';
import CtaSection from './components/CtaSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesBento />
      <StatsSection />
      <PortfolioCarousel />
      <CtaSection />
      <Footer />
    </main>
  );
}