'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

/*
BENTO GRID AUDIT:
Array has 7 cards: [Advertising, EventManagement, Fabrication, Printing, InteriorWorks, GeneralSupply, ImportExport]

Desktop (grid-cols-12):
Row 1: [col-1..5: Advertising cs-5] [col-6..9: EventManagement cs-4] [col-10..12: Fabrication cs-3]
Row 2: [col-1..4: Printing cs-4]   [col-5..8: InteriorWorks cs-4]   [col-9..12: GeneralSupply cs-4]
Row 3: [col-1..12: ImportExport cs-12]

Placed 7/7 cards ✓
*/

const services = [
{
  id: 'advertising',
  title: 'Advertising',
  subtitle: 'Digital · Branding · Creative',
  description: 'End-to-end digital marketing, brand identity design, creative campaigns, and media buying for corporate brands.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_191687f4f-1772098105722.png",
  imageAlt: 'Creative team working on advertising campaign with mood boards and digital screens in a bright studio',
  colSpan: 'lg:col-span-5',
  tall: true,
  accent: 'bg-accent/10 text-accent-foreground',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>

},
{
  id: 'events',
  title: 'Event Management',
  subtitle: 'Corporate · Launches · Exhibitions',
  description: 'Full-service corporate event planning: product launches, exhibitions, stall management, and gala dinners.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1358cad3d-1773176641957.png",
  imageAlt: 'Large corporate event venue with professional stage lighting, branded backdrops, and rows of attendee seating',
  colSpan: 'lg:col-span-4',
  tall: true,
  accent: 'bg-primary/10 text-primary',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>

},
{
  id: 'fabrication',
  title: 'Fabrication',
  subtitle: 'Hoardings · Kiosks · Stalls',
  description: 'Custom structural fabrication: hoardings, signage, exhibition stalls, kiosks, and bespoke installations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be36bfef-1767508424943.png",
  imageAlt: 'Workshop with metal fabrication equipment, workers constructing large exhibition stall framework with welding sparks',
  colSpan: 'lg:col-span-3',
  tall: true,
  accent: 'bg-secondary/10 text-secondary',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" x2="12" y1="22" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>

},
{
  id: 'printing',
  title: 'Printing',
  subtitle: 'Offset · Digital · Flex · Banners',
  description: 'High-quality offset & digital printing for brochures, flex banners, corporate branding materials, and packaging.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e14e0fc-1775187941352.png",
  imageAlt: 'Large format printing machine producing vibrant flex banner with sharp corporate graphics in a printing facility',
  colSpan: 'lg:col-span-4',
  tall: false,
  accent: 'bg-accent/10 text-accent-foreground',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect width="12" height="8" x="6" y="14" />
      </svg>

},
{
  id: 'interiors',
  title: 'Interior Works',
  subtitle: 'Office · Retail · Modular',
  description: 'Office interior design, retail showroom setup, modular workstation installations, and complete fit-outs.',
  image: "https://images.unsplash.com/photo-1667391551176-9070c1dc52e0",
  imageAlt: 'Sleek modern office interior with modular workstations, warm lighting, glass partitions, and corporate branding on walls',
  colSpan: 'lg:col-span-4',
  tall: false,
  accent: 'bg-primary/10 text-primary',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>

},
{
  id: 'supply',
  title: 'General Order Supply',
  subtitle: 'Corporate · Govt. · Logistics',
  description: 'Procurement and supply of materials for corporate and government tenders. End-to-end logistics management.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a187ca8-1764799847557.png",
  imageAlt: 'Large warehouse with organized shelving, forklift operations, and stacked procurement supplies under bright industrial lighting',
  colSpan: 'lg:col-span-4',
  tall: false,
  accent: 'bg-secondary/10 text-secondary',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>

},
{
  id: 'import-export',
  title: 'Import-Export',
  subtitle: 'Global Trade · Customs · Logistics',
  description: 'International trade facilitation, customs documentation, freight forwarding, and end-to-end import-export logistics for Indian businesses.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12285b4ae-1767861701167.png",
  imageAlt: 'Aerial view of busy international cargo port with colorful shipping containers, cranes, and cargo vessels in clear daylight',
  colSpan: 'lg:col-span-12',
  tall: false,
  accent: 'bg-accent/10 text-accent-foreground',
  wide: true,
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>

}];


export default function ServicesBento() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    const cards = sectionRef?.current?.querySelectorAll('.bento-card');
    cards?.forEach((card) => observer?.observe(card));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background py-20 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-display-lg font-display font-light text-foreground leading-tight tracking-tight">
              Seven Segments.<br />
              <span className="text-primary font-normal">One Partner.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-3 text-sm font-semibold text-foreground hover:text-primary transition-colors border-b border-border hover:border-primary pb-1">
            
            Explore All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Row 1: Advertising (cs-5), EventManagement (cs-4), Fabrication (cs-3) */}
          {/* Row 2: Printing (cs-4), InteriorWorks (cs-4), GeneralSupply (cs-4) */}
          {/* Row 3: ImportExport (cs-12) */}
          {services?.map((service, index) => (
          /* bento-card: Advertising cs-5 */
          /* bento-card: EventManagement cs-4 */
          /* bento-card: Fabrication cs-3 */
          /* bento-card: Printing cs-4 */
          /* bento-card: InteriorWorks cs-4 */
          /* bento-card: GeneralSupply cs-4 */
          /* bento-card: ImportExport cs-12 */
          <Link
            key={service?.id}
            href={`/services#${service?.id}`}
            className={`bento-card group relative overflow-hidden rounded-2xl border border-border bg-card opacity-100 transition-all duration-500 hover:shadow-xl hover:border-primary/30 ${service?.colSpan} ${service?.tall ? 'min-h-[320px]' : service?.wide ? 'min-h-[200px]' : 'min-h-[240px]'}`}
            style={{ animationDelay: `${index * 80}ms` }}>
            
              {/* Image background */}
              <div className="absolute inset-0">
                <AppImage
                src={service?.image}
                alt={service?.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-60" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/60 to-transparent" />
              </div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service?.accent} border border-current/20`}>
                    {service?.icon}
                  </div>
                  <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  
                    <path d="M7 7h10v10M7 17 17 7" />
                  </svg>
                </div>

                {/* Bottom */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{service?.subtitle}</p>
                  <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{service?.title}</h3>
                  {service?.wide ?
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{service?.description}</p> :

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{service?.description}</p>
                }
                </div>
              </div>
            </Link>)
          )}
        </div>
      </div>
    </section>);
}