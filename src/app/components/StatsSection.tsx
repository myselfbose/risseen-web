'use client';
import React, { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', description: 'Across all business segments' },
  { value: 50, suffix: '+', label: 'Corporate Clients', description: 'Including govt. organisations' },
  { value: 7, suffix: '', label: 'Business Segments', description: 'Under one roof' },
  { value: 10, suffix: '+', label: 'Years of Operation', description: 'Trusted industry experience' },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  return (
    <div className="flex flex-col gap-2 p-8 border-r border-dark-border last:border-r-0 first:border-l-0 group cursor-default">
      <span
        className="font-display text-6xl md:text-7xl font-light tracking-tighter leading-none transition-colors"
        style={{ color: active ? 'var(--accent)' : 'rgba(255,255,255,0.15)' }}
      >
        {count}{stat.suffix}
      </span>
      <span className="text-sm font-semibold uppercase tracking-widest text-white/60 mt-2">{stat.label}</span>
      <span className="text-xs text-white/30 font-medium">{stat.description}</span>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-dark-bg py-20 px-6 md:px-12 relative overflow-hidden border-t border-dark-border"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(200,168,75,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mission Statement */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24 mb-20">
          <div className="w-full md:w-1/4 pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/40">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest">Our Mission</span>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl  font-display font-light text-white/90 leading-[1.1] tracking-tight">
              At Risseen Merchandise, we believe procurement isn&apos;t just about sourcing — it&apos;s about{' '}
              <span className="text-white font-normal">building partnerships</span>.{' '}
              <span className="text-white/30">
                We are a professionally managed collective of procurement specialists, creative teams, and logistics experts delivering end-to-end solutions with precision and accountability.
              </span>
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-dark-border rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 border-t border-dark-border">
          <div>
            <p className="font-display text-2xl font-light text-white/80 mb-1">
              Registered in India. Operating Nationally.
            </p>
            <p className="text-sm text-white/30 font-medium">
              Risseen Merchandise Private Limited — CIN: U73100WB2026PTC288465
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse" />
              Accepting RFQs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}