import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-dark-bg pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(200,168,75,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,168,75,0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,58,42,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-20%, -20%)',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 text-white/30 mb-6 text-xs font-semibold uppercase tracking-widest">
          <span>Home</span>
          <span>/</span>
          <span className="text-white/60">Contact</span>
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Currently Accepting RFQs</span>
          </div>
          <h1 className="text-display-xl font-display font-light text-white leading-[0.95] tracking-tight mb-6">
            Let&apos;s Start a<br />
            <span style={{ color: 'var(--accent)' }} className="font-normal">Conversation.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Submit your requirement and our team will respond within 48 business hours with a detailed proposal. No commitment required.
          </p>
        </div>

        {/* Quick stats */}
        <div className="mt-12 flex flex-wrap gap-8">
          {[
            { label: 'Response Time', value: '< 48 hrs' },
            { label: 'RFQs Processed', value: '500+' },
            { label: 'Client Satisfaction', value: '98%' },
          ]?.map((s) => (
            <div key={s?.label}>
              <p className="font-display text-2xl font-light" style={{ color: 'var(--accent)' }}>{s?.value}</p>
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mt-0.5">{s?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}