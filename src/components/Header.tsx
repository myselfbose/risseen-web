'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  // { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkPage = pathname === '/services' || pathname === '/contact';
  const logoSrc = pathname === '/' ? '/assets/LB.png' : '/assets/LW.png';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const handleScroll = () => setMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="beam-border-h" />
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <AppLogo size={90} src={logoSrc} />
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDarkPage ? 'text-white/70' : 'text-muted-foreground'}`}>
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className={`transition-colors duration-200 relative group ${isDarkPage ? 'hover:text-white' : 'hover:text-foreground'}`}
            >
              {link?.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors duration-300 shadow-sm"
          >
            Contact
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-card transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="w-5 h-0.5 bg-foreground rounded-full" />
                <span className="w-5 h-0.5 bg-foreground rounded-full" />
                <span className="w-3.5 h-0.5 bg-foreground rounded-full" />
              </>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border px-6 py-6 flex flex-col gap-4">
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className={`text-base font-medium py-2 border-b border-border/50 transition-colors ${isDarkPage ? 'text-white hover:text-accent' : 'text-foreground hover:text-accent'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}