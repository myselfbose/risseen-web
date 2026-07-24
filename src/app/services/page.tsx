import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesDetail from '@/app/services/components/ServicesDetail';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesDetail />
      <Footer logoSrc="/assets/LW.png" />
    </main>
  );
}
