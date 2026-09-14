import React from 'react';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-dark-bg pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(200,168,75,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,168,75,0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,168,75,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(20%, -30%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 text-white/30 mb-6 text-xs font-semibold uppercase tracking-widest">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Services</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-display-xl lg:text-[4.5rem] font-display font-light text-white leading-[0.95] tracking-tight mb-6">
              Eight Segments.
              <br />
              <span style={{ color: 'var(--accent)' }} className="font-normal">One Company.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Risseen Merchandise delivers comprehensive B2B solutions across advertising, events, fabrication, printing, interiors, general supply, and international trade.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shrink-0 shadow-lg"
          >
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Segment quick nav */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {[
            { id: 'advertising', label: 'Advertising' },
            { id: 'events', label: 'Events' },
            { id: 'fabrication', label: 'Fabrication' },
            { id: 'printing', label: 'Printing' },
            { id: 'interiors', label: 'Interiors' },
            { id: 'supply', label: 'Gen. Supply' },
            { id: 'garments', label: 'Garments' },
            { id: 'import-export', label: 'Import-Export' },
          ]?.map((seg) => (
            <a
              key={seg?.id}
              href={`#${seg?.id}`}
              className="px-3 py-2 rounded-full border border-dark-border text-xs font-semibold text-white/40 hover:text-white hover:border-white/20 transition-all text-center"
            >
              {seg?.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}