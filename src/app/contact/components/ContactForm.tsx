'use client';
import React, { useState } from 'react';

const segments = [
  'Advertising',
  'Event Management',
  'Fabrication',
  'Printing',
  'Interior Works',
  'General Order Supply',
  'Import-Export',
  'Multiple Segments',
];

const budgetRanges = [
  'Under ₹1 Lakh',
  '₹1 – ₹5 Lakhs',
  '₹5 – ₹25 Lakhs',
  '₹25 – ₹1 Crore',
  'Above ₹1 Crore',
  'Open to Discussion',
];

type FormState = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  segment: string;
  budget: string;
  projectBrief: string;
  timeline: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    segment: '',
    budget: '',
    projectBrief: '',
    timeline: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit RFQ. Please try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="font-display text-3xl font-light text-foreground mb-3">RFQ Received!</h2>
        <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will review your requirement and respond within 48 business hours.
        </p>
        <button
          onClick={() => {
            setForm({
              companyName: '',
              contactPerson: '',
              email: '',
              phone: '',
              segment: '',
              budget: '',
              projectBrief: '',
              timeline: '',
            });
            setSubmitted(false);
          }}
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
        >
          Submit Another RFQ
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-3xl font-light text-foreground mb-2 tracking-tight">Submit an RFQ</h2>
        <p className="text-muted-foreground text-sm">All fields marked * are required.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Company + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="companyName">
              Company Name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={form.companyName}
              onChange={handleChange}
              placeholder="Tata Consultancy Services"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="contactPerson">
              Contact Person *
            </label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              required
              value={form.contactPerson}
              onChange={handleChange}
              placeholder="Priya Sharma"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="email">
              Business Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="priya@company.com"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="phone">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Segment + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="segment">
              Business Segment *
            </label>
            <select
              id="segment"
              name="segment"
              required
              value={form.segment}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select a segment</option>
              {segments.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="budget">
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="timeline">
            Project Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={form.timeline}
            onChange={handleChange}
            placeholder="e.g. Event on 15 Aug 2025, need setup by 13 Aug"
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Project Brief */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground" htmlFor="projectBrief">
            Project Brief *
          </label>
          <textarea
            id="projectBrief"
            name="projectBrief"
            required
            rows={5}
            value={form.projectBrief}
            onChange={handleChange}
            placeholder="Describe your requirement in detail — quantity, specifications, delivery location, any special requirements..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-500 font-medium text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm flex items-center justify-center gap-3 hover:bg-secondary transition-colors group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{loading ? 'Sending Request...' : 'Submit Request for Quotation'}</span>
          {!loading && (
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7z"/>
            </svg>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to our Privacy Policy. We will never share your information with third parties.
        </p>
      </form>
    </div>
  );
}