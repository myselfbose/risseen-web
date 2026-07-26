'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function CtaSection() {
  return (
    <section className="w-full bg-background py-20 px-6 md:px-12 border-t border-border relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Folder Tabs */}
        <div className="flex items-end pl-4 md:pl-16 relative z-0" style={{ transform: 'translateY(1px)' }}>
          <div className="w-28 md:w-36 h-12 bg-card rounded-t-2xl transform -rotate-2 origin-bottom-right border-t border-x border-border flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </div>
          <div className="w-28 md:w-36 h-12 bg-primary/5 rounded-t-2xl -ml-5 transform -rotate-1 origin-bottom-right border-t border-x border-border flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform duration-300 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z" />
            </svg>
          </div>
          <div className="w-32 md:w-40 h-14 bg-accent/20 rounded-t-2xl -ml-5 border-t border-x border-accent/30 flex items-center justify-center relative z-20 pb-1 cursor-default shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-foreground">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>

        {/* Main Dark CTA Card */}
        <div className="min-h-[480px] flex flex-col lg:flex-row lg:gap-8 bg-dark-bg rounded-[2.5rem] p-8 md:p-14 lg:p-20 relative shadow-2xl overflow-hidden items-start justify-between gap-12">

          {/* Atmospheric glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at bottom, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
          

          {/* Background image */}
          {/* <div className="absolute inset-0 opacity-10">
            <AppImage
              src="https://images.unsplash.com/photo-1613484259813-6caafbfb4f2f"
              alt="Corporate office building exterior with glass facade, deep shadows, and dramatic low-angle night lighting"
              fill
              className="object-cover" />
            
          </div> */}

          {/* Left: Typography */}
          <div className="relative z-10 flex flex-col justify-center lg:pt-12 flex-1">
            <h2 className="font-display text-display-lg lg:text-display-xl font-light text-white leading-[0.95] tracking-tight mb-6">
              Transparent.{' '}
              <span className="font-normal" style={{ color: 'var(--accent)' }}>Accountable.</span>{' '}
              Reliable.
            </h2>
            <p className="text-white/50 text-lg font-medium leading-relaxed max-w-md">
              Submit your requirement and receive a detailed proposal within 48 hours. No hidden costs. No middlemen.
            </p>
          </div>

          {/* Right: Sticky Note Card */}
          <div className="relative z-10 w-full lg:w-[22rem] self-end lg:self-center">
            <div className="bg-background rounded-3xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 group border border-border">
              <h3 className="font-display text-2xl font-normal text-foreground mb-3 leading-tight">
                Start a project conversation today.
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Whether it&apos;s a corporate event, fabrication job, print order, or government supply tender — we have you covered.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-6 bg-primary text-primary-foreground rounded-xl font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-secondary transition-colors">
                  
                  <span>Submit an RFQ</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                {/* <a
                  href="#"
                  className="w-full py-3.5 px-6 bg-card border border-border text-foreground rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-border/40 transition-colors"
                >
                  
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span>Download Company Profile</span>
                </a> */}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-5">
                <div className="flex -space-x-2">
                  {[
                  'https://i.pravatar.cc/100?img=11',
                  'https://i.pravatar.cc/100?img=32',
                  'https://i.pravatar.cc/100?img=45']?.
                  map((src, i) =>
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                      <AppImage src={src} alt={`Team member ${i + 1}`} width={32} height={32} className="w-full h-full object-cover grayscale" />
                    </div>
                  )}
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background">
                    +
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-medium">50+ Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Watermark */}
          {/* <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none opacity-[0.04] select-none overflow-hidden">
            <span className="font-display font-bold text-white leading-none tracking-tighter" style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', transform: 'translateY(15%)' }}>
              RISSEEN
            </span>
          </div> */}
        </div>
      </div>
    </section>);
}
