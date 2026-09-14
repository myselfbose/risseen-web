'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const segments = [
{
  id: 'advertising',
  number: '01',
  title: 'Advertising',
  tagline: 'Digital Marketing · Brand Identity · Creative Campaigns',
  description: 'Risseen Merchandise provides full-spectrum advertising solutions for corporate brands — from digital strategy and media buying to creative design and brand identity. We work with marketing teams to build campaigns that convert.',
  subServices: [
  'Digital Marketing & Social Media',
  'Brand Identity & Logo Design',
  'Creative Campaign Design',
  'Outdoor & OOH Advertising',
  'Media Planning & Buying',
  'Corporate Branding Guidelines'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b3ce77a-1764641104635.png",
  imageAlt: 'Creative advertising team collaborating on brand campaign with digital screens showing marketing analytics in a modern studio',
  accent: 'border-l-4 border-accent',
  flip: false
},
{
  id: 'events',
  number: '02',
  title: 'Event Management',
  tagline: 'Corporate Events · Product Launches · Exhibition Management',
  description: 'End-to-end corporate event management from concept to execution. We manage product launches, annual conferences, trade exhibitions, stall design and build, and post-event reporting for leading Indian corporations.',
  subServices: [
  'Corporate Conferences & Summits',
  'Product Launch Events',
  'Exhibition & Stall Management',
  'Award Ceremonies & Galas',
  'Town Halls & Internal Events',
  'Virtual & Hybrid Events'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1608b8244-1773021906707.png",
  imageAlt: 'Professional corporate event with large stage setup, branded LED backdrop, spotlights, and audience of corporate professionals',
  accent: 'border-l-4 border-primary',
  flip: true
},
{
  id: 'fabrication',
  number: '03',
  title: 'Fabrication',
  tagline: 'Hoardings · Signage · Exhibition Stalls · Custom Structures',
  description: 'Our fabrication division handles custom structural works including hoardings, site signage, retail kiosks, exhibition stalls, and bespoke installations. We use premium materials and precision manufacturing for every project.',
  subServices: [
  'Outdoor Hoardings & Billboards',
  'Retail Kiosks & POP Displays',
  'Exhibition Stall Fabrication',
  'Signage & Wayfinding Systems',
  'Custom Metal & Acrylic Structures',
  'LED Display Frames & Mounts'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4f685b9-1777894036721.png",
  imageAlt: 'Metal fabrication workshop with sparks flying from welding, workers in safety gear constructing large exhibition stall framework',
  accent: 'border-l-4 border-secondary',
  flip: false
},
{
  id: 'printing',
  number: '04',
  title: 'Printing',
  tagline: 'Offset · Digital · Flex · Corporate Print Materials',
  description: 'High-quality commercial printing for all corporate needs — from offset-printed annual reports to large-format flex banners. We operate modern digital and offset presses for short and long-run print jobs.',
  subServices: [
  'Offset Printing (Brochures, Catalogs)',
  'Digital Printing (Short Runs)',
  'Large Format Flex & Vinyl Banners',
  'Corporate Stationery & Letterheads',
  'Packaging & Box Printing',
  'Roll-Up Stands & Display Graphics'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18bbdc667-1772546462048.png",
  imageAlt: 'Industrial printing press producing large format corporate banners with vibrant color output in a clean printing facility',
  accent: 'border-l-4 border-accent',
  flip: true
},
{
  id: 'interiors',
  number: '05',
  title: 'Interior Works',
  tagline: 'Office Design · Retail Showrooms · Modular Installations',
  description: 'Complete interior design and execution for corporate offices, retail showrooms, and commercial spaces. From space planning and material selection to final installation and snag resolution.',
  subServices: [
  'Office Interior Design & Execution',
  'Retail Showroom Setup',
  'Modular Workstation Supply & Install',
  'False Ceiling & Partition Systems',
  'Reception & Lobby Design',
  'Brand-Integrated Interior Elements'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1285ea335-1772358456840.png",
  imageAlt: 'Completed corporate office interior with branded walls, modular workstations, glass partitions, and warm ambient lighting',
  accent: 'border-l-4 border-primary',
  flip: false
},
{
  id: 'supply',
  number: '06',
  title: 'General Order Supply',
  tagline: 'Corporate Procurement · Government Tenders · Logistics',
  description: 'Procurement and supply of materials for corporate and government requirements. We handle tender documentation, vendor sourcing, quality checks, and last-mile logistics across India.',
  subServices: [
  'Corporate Materials Procurement',
  'Government Tender Fulfilment',
  'Vendor Identification & Vetting',
  'Quality Assurance & Inspection',
  'Pan-India Logistics & Delivery',
  'Inventory Management Support'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a187ca8-1764799847557.png",
  imageAlt: 'Large organized warehouse with stacked procurement supplies, forklift operating between aisles, and bright industrial overhead lighting',
  accent: 'border-l-4 border-secondary',
  flip: true
},
{
  id: 'garments',
  number: '07',
  title: "Sakhi'z - Fashion & Apparel",
  tagline: 'Modern • Feminine • Stylish • Accessible',
  description: 'Curated modern fashion and everyday activewear tailored for style, comfort, and versatile living. We bring together premium fabrics, flattering fits, and accessible trend-forward designs for every occasion.',
  subServices: [
    'Everyday Activewear & Athleisure',
    'Contemporary Western Wear',
    'Trend-Forward Casual Collections',
    'Premium Fabric & Quality Crafting',
    'Inclusive Sizing & Flattering Fits',
    'Seasonal Styles & Everyday Essentials'
  ],
  image: "/assets/garments.jpeg",
  imageAlt: 'Aerial view of international shipping port with rows of colorful cargo containers, large cranes, and container ships at dock',
  accent: 'border-l-4 border-accent',
  flip: false
},
{
  id: 'import-export',
  number: '08',
  title: 'Import-Export',
  tagline: 'Global Trade · Customs · Freight Forwarding',
  description: 'End-to-end international trade facilitation for Indian businesses. We manage customs documentation, freight forwarding, compliance, and last-mile delivery for both import and export shipments.',
  subServices: [
  'Import Clearance & Documentation',
  'Export Documentation & Compliance',
  'Freight Forwarding (Air & Sea)',
  'Customs Duty Consultation',
  'LC & Trade Finance Support',
  'International Vendor Sourcing'],

  image: "https://images.unsplash.com/photo-1602066511755-e4936f41666a",
  imageAlt: 'Aerial view of international shipping port with rows of colorful cargo containers, large cranes, and container ships at dock',
  accent: 'border-l-4 border-accent',
  flip: true
}];


export default function ServicesDetail() {
  return (
    <section className="w-full bg-background py-20 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-0">
        {segments?.map((seg, index) =>
        <div
          key={seg?.id}
          id={seg?.id}
          className={`flex flex-col ${seg?.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 border-b border-border py-16 lg:py-20 gap-y-10 lg:gap-x-16`}>
          
            {/* Image Side */}
            <div className="w-full lg:w-5/12 relative overflow-hidden rounded-2xl h-[260px] sm:h-[320px] lg:h-[420px] group flex-shrink-0">
              <AppImage
              src={seg?.image}
              alt={seg?.imageAlt}
              fill
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="font-display text-5xl font-light text-white/20">{seg?.number}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full lg:w-7/12 flex flex-col justify-center ${seg?.accent} pl-6`}>
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-widest">
                <span>{seg?.tagline}</span>
              </div>
              <h2 className="font-display text-display-lg font-light text-foreground mb-4 tracking-tight leading-tight">
                {seg?.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
                {seg?.description}
              </p>

              {/* Sub-services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {seg?.subServices?.map((sub) =>
                  <div key={sub} className="flex items-center gap-2 text-sm text-foreground/80">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {sub}
                  </div>
                )}
              </div>

              <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm w-fit hover:bg-secondary transition-colors group">
              
                Request a Quote for {seg?.title}
                <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform">
                
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>);

}