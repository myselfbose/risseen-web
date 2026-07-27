import React from 'react';
import Link from 'next/link';

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 99926 03567',
    href: 'tel:+912245678900',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@risseen.com',
    href: 'mailto:info@risseen.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Registered Office',
    value: '1/61 Neli Nagar Colony, Ramlal Bazar, Haltu, Kolkata, West Bengal 700078',
    href: '#',
  },
];

const businessHours = [
  { day: 'Monday – Friday', hours: '11:00 AM – 7:30 PM IST' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Contact Details */}
      <div className="bg-card rounded-2xl border border-border p-8">
        <h3 className="font-display text-xl font-medium text-foreground mb-6 tracking-tight">Contact Details</h3>
        <div className="flex flex-col gap-5">
          {contactDetails?.map((detail) => (
            <a
              key={detail?.label}
              href={detail?.href}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {detail?.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">{detail?.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-relaxed">{detail?.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Business Hours */}
      <div className="bg-card rounded-2xl border border-border p-8">
        <h3 className="font-display text-xl font-medium text-foreground mb-6 tracking-tight">Business Hours</h3>
        <div className="flex flex-col gap-3">
          {businessHours?.map((bh) => (
            <div key={bh?.day} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
              <span className="text-sm font-medium text-foreground">{bh?.day}</span>
              <span className="text-sm text-muted-foreground">{bh?.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Currently Open — Response within 4 hours
        </div>
      </div>
      {/* Download Company Profile */}
      <div className="bg-primary rounded-2xl p-8 relative overflow-hidden">
        {/* Decorative */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,168,75,0.2) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <h3 className="font-display text-xl font-medium text-primary-foreground mb-2 tracking-tight">
            Company Profile
          </h3>
          <p className="text-primary-foreground text-sm mb-6 leading-relaxed">
            Download our complete company profile including service details, past projects, and certifications.
          </p>
          <a
            href="/company-profile.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary-foreground text-primary rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            download="company-profile.pdf"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download
          </a>
        </div>
      </div>
      {/* Map placeholder */}
      <div className="rounded-2xl border border-border overflow-hidden bg-card">
        <div className="h-48 relative bg-card flex items-center justify-center">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">RMPL, Kolkata</p>
            <p className="text-xs text-muted-foreground mt-1">West Bengal, India</p>
          </div>
        </div>
        <div className="p-4 border-t border-border">
          <Link
            href="https://maps.app.goo.gl/VakRfVXavJ546aXb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1"
          >
            Open in Google Maps
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10M7 17 17 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}