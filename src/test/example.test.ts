import { describe, it, expect } from 'vitest';

// ─── Sitemap ──────────────────────────────────────────────────────────────────
import sitemap from '@/app/sitemap';

describe('sitemap', () => {
  const entries = sitemap();

  it('includes all core pages', () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain('https://theflashroom.in');
    expect(urls).toContain('https://theflashroom.in/services');
    expect(urls).toContain('https://theflashroom.in/portfolio');
    expect(urls).toContain('https://theflashroom.in/packages');
    expect(urls).toContain('https://theflashroom.in/calculator');
    expect(urls).toContain('https://theflashroom.in/about');
    expect(urls).toContain('https://theflashroom.in/contact');
  });

  it('home page has highest priority', () => {
    const home = entries.find((e) => e.url === 'https://theflashroom.in');
    expect(home?.priority).toBe(1.0);
  });

  it('all entries have a valid lastModified date', () => {
    for (const entry of entries) {
      expect(new Date(entry.lastModified as string).toString()).not.toBe(
        'Invalid Date',
      );
    }
  });

  it('no duplicate URLs', () => {
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

// ─── Calculator pricing ───────────────────────────────────────────────────────
// Mirror of the SERVICES array — keeps tests independent of the component
const SERVICES = [
  { id: 'candid_photographer', price: 15000, max: 5 },
  { id: 'traditional_photographer', price: 8000, max: 5 },
  { id: 'videographer', price: 10000, max: 5 },
  { id: 'cinematographer', price: 20000, max: 3 },
  { id: 'reel_maker', price: 8000, max: 10 },
  { id: 'drone', price: 12000, max: 3 },
  { id: 'album_regular', price: 3500, max: 5 },
  { id: 'album_premium', price: 7500, max: 5 },
  { id: 'highlight_short', price: 8000, max: 1 },
  { id: 'highlight_full', price: 15000, max: 1 },
];

function calcTotal(quantities: Record<string, number>) {
  return SERVICES.reduce(
    (sum, s) => sum + (quantities[s.id] ?? 0) * s.price,
    0,
  );
}

describe('calculator pricing', () => {
  it('returns 0 when nothing is selected', () => {
    expect(calcTotal({})).toBe(0);
  });

  it('calculates single service correctly', () => {
    expect(calcTotal({ candid_photographer: 1 })).toBe(15000);
    expect(calcTotal({ candid_photographer: 2 })).toBe(30000);
  });

  it('calculates multiple services correctly', () => {
    expect(
      calcTotal({ candid_photographer: 1, videographer: 1, drone: 1 }),
    ).toBe(15000 + 10000 + 12000);
  });

  it('all service prices are positive', () => {
    for (const s of SERVICES) {
      expect(s.price).toBeGreaterThan(0);
    }
  });

  it('all service max quantities are at least 1', () => {
    for (const s of SERVICES) {
      expect(s.max).toBeGreaterThanOrEqual(1);
    }
  });
});

// ─── Phone validation ─────────────────────────────────────────────────────────
const isValidIndianPhone = (phone: string) => /^\d{10}$/.test(phone);

describe('phone validation', () => {
  it('accepts valid 10-digit numbers', () => {
    expect(isValidIndianPhone('9876543210')).toBe(true);
    expect(isValidIndianPhone('7000000000')).toBe(true);
  });

  it('rejects numbers with wrong length', () => {
    expect(isValidIndianPhone('987654321')).toBe(false); // 9 digits
    expect(isValidIndianPhone('98765432101')).toBe(false); // 11 digits
  });

  it('rejects non-numeric input', () => {
    expect(isValidIndianPhone('+919876543210')).toBe(false);
    expect(isValidIndianPhone('98765-43210')).toBe(false);
  });
});
