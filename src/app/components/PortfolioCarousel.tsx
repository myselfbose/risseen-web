'use client';
import React, { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  id: 1,
  title: 'Axis Bank Annual Conference',
  category: 'Event Management',
  year: '2024',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d437cb2-1765094619514.png",
  imageAlt: 'Large corporate conference hall with professional stage setup, branded backdrop, and hundreds of attendees in formal attire',
  tag: 'Events'
},
{
  id: 2,
  title: 'Tata Group Office Fitout',
  category: 'Interior Works',
  year: '2024',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df2ff0b3-1772145996633.png",
  imageAlt: 'Modern corporate office fitout with branded reception desk, open workspace, glass partitions, and ambient warm lighting',
  tag: 'Interiors'
},
{
  id: 3,
  title: 'Auto Expo Exhibition Stall',
  category: 'Fabrication',
  year: '2023',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c78a987-1784804685302.png",
  imageAlt: 'Custom-fabricated exhibition stall with LED lighting, branded panels, product display areas, and visitors exploring at auto expo',
  tag: 'Fabrication'
},
{
  id: 4,
  title: 'Maharashtra Govt. Supply Contract',
  category: 'General Order Supply',
  year: '2023',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c088a95f-1778138181900.png",
  imageAlt: 'Government procurement warehouse with organized supply materials, labeled shelving, and logistics staff managing inventory',
  tag: 'Supply'
},
{
  id: 5,
  title: 'Reliance Digital Brand Campaign',
  category: 'Advertising',
  year: '2024',
  image: "https://images.unsplash.com/photo-1731114290176-79e8002ba0db",
  imageAlt: 'Digital advertising campaign displayed on large outdoor hoarding with vibrant brand graphics in busy urban commercial area',
  tag: 'Advertising'
},
{
  id: 6,
  title: 'HDFC Annual Report Print',
  category: 'Printing',
  year: '2024',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13074bea1-1764651526660.png",
  imageAlt: 'High-quality offset printed corporate annual report booklets stacked on a desk with sharp typography and premium paper finish',
  tag: 'Printing'
}];


const tagColors: Record<string, string> = {
  Events: 'bg-primary/10 text-primary border-primary/20',
  Interiors: 'bg-accent/10 text-accent-foreground border-accent/20',
  Fabrication: 'bg-secondary/10 text-secondary border-secondary/20',
  Supply: 'bg-muted/20 text-muted-foreground border-border',
  Advertising: 'bg-primary/10 text-primary border-primary/20',
  Printing: 'bg-accent/10 text-accent-foreground border-accent/20'
};

export default function PortfolioCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-card py-20 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest">Our Portfolio</span>
            </div>
            <h2 className="text-display-lg font-display font-light text-foreground leading-tight tracking-tight">
              Work that speaks<br />
              <span className="text-primary font-normal">for itself.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Scroll left">
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Scroll right">
              
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12 snap-x snap-mandatory pb-4"
        style={{ scrollPaddingLeft: '3rem' }}>
        
        {projects.map((project, index) =>
        <div
          key={project.id}
          className="snap-center shrink-0 w-[300px] md:w-[360px] group cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}>
          
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border relative bg-card">
              <AppImage
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-semibold text-primary-foreground">{project.category}</span>
              </div>

              {/* Year badge */}
              {/* <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground border border-border">
                {project.year}
              </div> */}
            </div>

            {/* Card info */}
            <div className="mt-4 pl-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-semibold mb-2 ${tagColors[project.tag]}`}>
                {project.tag}
              </span>
              <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>);
}