import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <ContactHero />
      <section className="w-full bg-background py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer logoSrc="/assets/LW.png" />
    </main>
  );
}