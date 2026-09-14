'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const segmentBadges = [
{ label: 'Advertising', color: 'bg-primary/10 text-primary border-primary/20' },
{ label: 'Event Mgmt', color: 'bg-accent/10 text-accent-foreground border-accent/20' },
{ label: 'Fabrication', color: 'bg-secondary/10 text-secondary border-secondary/20' },
{ label: 'Printing', color: 'bg-primary/10 text-primary border-primary/20' },
{ label: 'Interiors', color: 'bg-accent/10 text-accent-foreground border-accent/20' },
{ label: 'Gen. Supply', color: 'bg-secondary/10 text-secondary border-secondary/20' },
{ label: 'Import-Export', color: 'bg-primary/10 text-primary border-primary/20' }];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      const floatEl = heroRef.current.querySelector('.hero-float') as HTMLElement;
      if (floatEl) {
        floatEl.style.transform = `translate(${mx * 18}px, ${my * 12}px)`;
      }
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col bg-background overflow-hidden pt-20">
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Atmospheric blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,168,75,0.12) 0%, rgba(26,58,42,0.08) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(20%, -20%)'
        }} />
      
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,58,42,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-20%, 20%)'
        }} />
      

      {/* Main content */}
      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-20 gap-12 lg:gap-16">

        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start z-10 animate-fade-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium">8 Business Segments · B2B Focused</span>
          </div>

          <h1 className="text-hero font-display font-light text-foreground leading-[0.95] tracking-tight mb-6">
            <span className="block text-muted-foreground font-display font-light text-[0.6em]">End-to-End</span>
            Procurement
            <span className="block text-primary font-display font-normal">&amp; Supply</span>
            <span className="block font-display font-light">Solutions</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            From fabrication and printing to corporate events and import-export — Risseen Merchendise delivers integrated B2B solutions for corporate and government clients across India.
          </p>

          {/* Segment badges */}
          {/*<div className="flex flex-wrap gap-2 mb-10">
            {segmentBadges.map((badge) =>
            <span
              key={badge.label}
              className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold tracking-wide ${badge.color}`}>
              
                {badge.label}
              </span>
            )}
          </div>*/}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto mb-12">
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold flex items-center justify-center gap-3 group transition-all hover:bg-secondary shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>All Services</span>
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform">
                
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {/* <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-foreground rounded-full text-base font-medium flex items-center justify-center gap-3 hover:bg-card transition-colors">
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>All Services</span>
            </Link> */}
          </div>

          {/* Trust indicators */}
          <div className="w-full border-t border-border pt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">Trusted by</p>
            <div className="flex flex-wrap items-center gap-6 opacity-60">
              {['Corporate Clients', 'Govt. Organisations', 'SMEs & Enterprises'].map((t) =>
              <span key={t} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Visual Composition */}
        <div className="flex-1 w-full relative flex items-center justify-center lg:justify-end py-8 lg:py-0">
          <div className="hero-float transition-transform duration-700 ease-out relative w-full max-w-sm" style={{ aspectRatio: '3/4' }}>

            {/* Main Arched Image */}
            <div className="arch-card overflow-hidden shadow-2xl w-full h-full group relative">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1aef1cb78-1767207513253.png"
                alt="Modern corporate office interior with open workspace, natural light, polished surfaces, and professional atmosphere"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

              {/* Bottom badge on image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-primary-foreground">
                <div>
                  <p className="text-xs font-medium opacity-80 mb-0.5">Risseen Merchendise</p>
                  <p className="font-display text-xl font-light">Pvt. Limited</p>
                </div>
                <Link
                  href="/contact"
                  className="w-11 h-11 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-4 md:-left-10 w-64 bg-card border border-border shadow-2xl rounded-2xl p-5 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company Profile</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A3A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                { val: '8+', label: 'Segments' },
                { val: '200+', label: 'Projects' },
                { val: '50+', label: 'Clients' },
                { val: '10+', label: 'Years' }].
                map((stat) =>
                <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold text-primary leading-none">{stat.val}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                )}
              </div>
              {/* Barcode decoration */}
              <div className="mt-4 flex items-end gap-0.5 h-8 opacity-30">
                {[4, 2, 6, 2, 4, 8, 2, 4, 2, 6, 4, 2, 8, 4, 2, 6].map((h, i) =>
                <div
                  key={i}
                  className="flex-1 bg-foreground rounded-sm"
                  style={{ height: `${h * 8}%` }} />

                )}
              </div>
            </div>

            {/* Floating Service Card */}
            <div className="hidden md:block absolute top-10 -right-10 w-44 bg-primary rounded-2xl p-4 shadow-2xl z-30 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 border border-primary/50">
              <div className="flex items-center justify-between text-primary-foreground/60 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F2E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <div className="flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F2E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </div>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1358cad3d-1773176641957.png"
                  alt="Corporate event setup with stage lighting and professional decor in a large venue"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover" />
                
              </div>
              <p className="text-xs text-[#F5F2E8] mb-0.5">Segment</p>
              <p className="font-display text-base text-primary-foreground font-light leading-tight">Event Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}