import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerGroups = [
  {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    links: [
      { label: 'Advertising', href: '/services#advertising' },
      { label: 'Event Management', href: '/services#events' },
      { label: 'Fabrication', href: '/services#fabrication' },
      { label: 'Printing', href: '/services#printing' },
    ],
  },
  {
    links: [
      { label: 'Interior Works', href: '/services#interiors' },
      { label: 'General Supply', href: '/services#supply' },
      { label: 'Import & Export', href: '/services#import-export' },
      { label: "Sakhi'z - Fashion & Apparel", href: '/services#garments' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/the_risseen',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/risseen.india',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v2H6v4h2v6h4v-6h3l1-4h-4V10c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:info@risseen.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function Footer({ logoSrc = '/assets/LB.png' }: { logoSrc?: string }) {
  return (
    <footer className="bg-background border-t border-border">
      {/* Link groups row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <AppLogo size={90} src='/assets/LB.png' />
              {/* <span className="font-display font-semibold text-base text-foreground">
                Risseen<span className="text-accent">Merchandise</span>
              </span> */}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              End-to-end procurement, fabrication, and supply chain solutions for corporate and government clients.
            </p>
          </div>

          {/* Link groups — no headers, spacing creates grouping */}
          <div className="flex flex-wrap gap-x-16 gap-y-6">
            {footerGroups?.map((group, gi) => (
              <div key={gi} className="flex flex-col gap-3">
                {group?.links?.map((link) => (
                  <Link
                    key={link?.href}
                    href={link?.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
                  >
                    {link?.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date()?.getFullYear()} Risseen Merchandise Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks?.map((s) => (
              <a
                key={s?.label}
                href={s?.href}
                aria-label={s?.label}
                target={s?.label === 'Instagram' || s?.label === 'Facebook' ? '_blank' : undefined}
                rel={s?.label === 'Instagram' || s?.label === 'Facebook' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {s?.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <span className="text-border">·</span>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}