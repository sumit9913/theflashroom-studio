'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Video,
  Zap,
  BookOpen,
  Film,
  Plus,
  Minus,
  CheckCircle,
  Loader2,
  Lock,
  IndianRupee,
  Sparkles,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo, useCallback } from 'react';

import heroWedding from '@/assets/hero-wedding.jpg';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

// ─── Pricing config ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 'candid_photographer',
    label: 'Candid Photographer',
    description: 'Creative, emotion-first candid coverage',
    price: 15000,
    unit: 'day',
    category: 'Photography',
    max: 5,
  },
  {
    id: 'traditional_photographer',
    label: 'Traditional Photographer',
    description: 'Classic posed & ceremonial photography',
    price: 8000,
    unit: 'day',
    category: 'Photography',
    max: 5,
  },
  {
    id: 'videographer',
    label: 'Traditional Videographer',
    description: 'Full event video documentation',
    price: 10000,
    unit: 'day',
    category: 'Videography',
    max: 5,
  },
  {
    id: 'cinematographer',
    label: 'Cinematographer',
    description: 'Film-quality cinematic footage',
    price: 20000,
    unit: 'day',
    category: 'Videography',
    max: 3,
  },
  {
    id: 'reel_maker',
    label: 'Reel Maker',
    description: 'Instagram & YouTube short reels',
    price: 8000,
    unit: 'reel',
    category: 'Videography',
    max: 10,
  },
  {
    id: 'drone',
    label: 'Drone Videography',
    description: 'Aerial shots & dramatic overheads',
    price: 12000,
    unit: 'session',
    category: 'Add-ons',
    max: 3,
  },
  {
    id: 'album_regular',
    label: 'Photo Album (Regular)',
    description: '12×15" flush mount, 20 spreads',
    price: 3500,
    unit: 'album',
    category: 'Albums',
    max: 5,
  },
  {
    id: 'album_premium',
    label: 'Photo Album (Premium)',
    description: '16×20" leather bound, 40 spreads',
    price: 7500,
    unit: 'album',
    category: 'Albums',
    max: 5,
  },
  {
    id: 'highlight_short',
    label: 'Highlight Film (Short)',
    description: '3–5 min cinematic highlight reel',
    price: 8000,
    unit: 'film',
    category: 'Films',
    max: 1,
  },
  {
    id: 'highlight_full',
    label: 'Highlight Film (Full)',
    description: '10–15 min complete wedding film',
    price: 15000,
    unit: 'film',
    category: 'Films',
    max: 1,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]['id'];

const CATEGORIES = [
  { name: 'Photography', icon: Camera },
  { name: 'Videography', icon: Video },
  { name: 'Add-ons', icon: Zap },
  { name: 'Albums', icon: BookOpen },
  { name: 'Films', icon: Film },
] as const;

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function Calculator() {
  const [quantities, setQuantities] = useState<
    Partial<Record<ServiceId, number>>
  >({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'done'>('form');
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const subtotal = useMemo(
    () =>
      SERVICES.reduce((sum, s) => sum + (quantities[s.id] ?? 0) * s.price, 0),
    [quantities],
  );
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const selectedServices = useMemo(
    () =>
      SERVICES.filter((s) => (quantities[s.id] ?? 0) > 0).map((s) => ({
        label: s.label,
        qty: quantities[s.id] ?? 0,
        price: s.price,
        unit: s.unit,
      })),
    [quantities],
  );

  const adjust = useCallback((id: ServiceId, delta: number, max: number) => {
    setQuantities((prev) => {
      const cur = prev[id] ?? 0;
      return { ...prev, [id]: Math.min(max, Math.max(0, cur + delta)) };
    });
  }, []);

  const openDialog = () => {
    if (selectedServices.length === 0) return;
    setStep('form');
    setName('');
    setEventDate('');
    setPhone('');
    setError('');
    setDialogOpen(true);
  };

  const submitForm = async () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!eventDate) {
      setError('Please select your event date.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await fetch('/api/calculator/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          eventDate,
          phone,
          selectedServices,
          subtotal,
          gst,
          total,
        }),
      });
      setStep('done');
      setDialogOpen(false);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroWedding}
            alt="Package Calculator"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto">
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Package Calculator
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Build Your{' '}
              <span className="text-gold-gradient">Perfect Package</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pick exactly what you need. Share your number to instantly unlock
              your personalised estimate.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            {[
              { n: '1', label: 'Pick Services' },
              { n: '2', label: 'Share Number' },
              { n: '3', label: 'Get Estimate' },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-sm font-bold">
                    {s.n}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {s.label}
                  </span>
                </div>
                {i < 2 && <div className="w-8 h-px bg-gold/30" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Calculator body ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left — services */}
            <div className="lg:col-span-2 space-y-12">
              {CATEGORIES.map(({ name, icon: Icon }, ci) => {
                const items = SERVICES.filter((s) => s.category === name);
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.06, duration: 0.5 }}>
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <h2 className="font-display text-xl font-semibold">
                        {name}
                      </h2>
                      <div className="flex-1 h-px bg-border" />
                    </div>

                    {/* Service cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {items.map((s) => {
                        const qty = quantities[s.id] ?? 0;
                        const active = qty > 0;
                        return (
                          <div
                            key={s.id}
                            className={`group relative rounded-2xl border p-5 transition-all duration-300 ${
                              active
                                ? 'border-gold bg-gradient-to-br from-gold/8 to-gold/3 shadow-sm shadow-gold/10'
                                : 'border-border bg-card hover:border-gold/40'
                            }`}>
                            {/* Selected badge */}
                            {active && (
                              <div className="absolute top-3 right-3">
                                <span className="inline-flex items-center gap-1 bg-gold text-background text-[10px] font-bold px-2 py-0.5 rounded-full">
                                  <CheckCircle className="w-2.5 h-2.5" /> Added
                                </span>
                              </div>
                            )}

                            <div className="mb-4 pr-14">
                              <p
                                className={`font-semibold text-sm ${active ? 'text-foreground' : 'text-foreground/90'}`}>
                                {s.label}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {s.description}
                              </p>
                            </div>

                            {/* Counter */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => adjust(s.id, -1, s.max)}
                                disabled={qty === 0}
                                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold hover:bg-gold/5 disabled:opacity-25 transition-all">
                                <Minus className="w-3 h-3" />
                              </button>

                              <div
                                className={`flex-1 text-center font-bold text-lg ${active ? 'text-gold' : 'text-muted-foreground'}`}>
                                {qty}
                              </div>

                              <button
                                onClick={() => adjust(s.id, 1, s.max)}
                                disabled={qty === s.max}
                                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold hover:bg-gold/5 disabled:opacity-25 transition-all">
                                <Plus className="w-3 h-3" />
                              </button>

                              <span className="text-[10px] text-muted-foreground/60 ml-1 whitespace-nowrap">
                                per {s.unit}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right — sidebar */}
            <div className="order-first lg:order-none lg:sticky lg:top-28 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Sidebar header */}
                <div className="bg-gradient-to-r from-gold/10 to-transparent px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-base font-semibold">
                      Your Package
                    </h2>
                    {selectedServices.length > 0 && (
                      <span className="text-xs bg-gold text-background font-bold px-2 py-0.5 rounded-full">
                        {selectedServices.length} item
                        {selectedServices.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-6 py-5">
                  {selectedServices.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Select services to build your package
                      </p>
                    </div>
                  ) : (
                    <>
                      <ul className="space-y-3 mb-5">
                        {selectedServices.map((s) => (
                          <li
                            key={s.label}
                            className="flex items-center justify-between gap-2 text-sm">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                              <span className="text-foreground/80 truncate">
                                {s.label}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full flex-shrink-0">
                              ×{s.qty}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {step !== 'done' && (
                        <div className="rounded-xl bg-muted/20 border border-dashed border-border p-4 mb-5 text-center">
                          <Lock className="w-4 h-4 text-muted-foreground mx-auto mb-1.5" />
                          <p className="text-xs text-muted-foreground">
                            Verify your number to unlock your estimate
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {step === 'done' ? (
                    <div className="flex items-start gap-2 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>
                        Estimate unlocked! Our team will reach out to you
                        shortly on <strong>+91 {phone}</strong>, {name}.
                      </span>
                    </div>
                  ) : (
                    <Button
                      variant="gold"
                      className="w-full"
                      disabled={selectedServices.length === 0}
                      onClick={openDialog}>
                      <IndianRupee className="w-4 h-4 mr-2" />
                      Get My Estimate
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* Estimate breakdown — only after verification */}
              <AnimatePresence>
                {step === 'done' && selectedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/8 to-gold/3 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider">
                        Estimate Breakdown
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-sm">
                      {selectedServices.map((s) => (
                        <li
                          key={s.label}
                          className="flex justify-between gap-2">
                          <span className="text-foreground/70">
                            {s.label} ×{s.qty}
                          </span>
                          <span className="font-semibold">
                            {fmt(s.price * s.qty)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-1.5 border-t border-gold/20 mt-4 pt-4 text-sm">
                      <div className="flex justify-between text-foreground/70">
                        <span>Subtotal</span>
                        <span>{fmt(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-foreground/70">
                        <span>GST (18%)</span>
                        <span>{fmt(gst)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gold/20">
                        <span className="font-semibold text-gold">
                          Estimated Total
                        </span>
                        <span className="font-display text-2xl font-bold text-gold-gradient">
                          {fmt(total)}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                      * Final pricing may vary based on event duration, location
                      & specific requirements. Our team will confirm all details
                      with you.
                    </p>
                    <div className="mt-4">
                      <Link href="/contact">
                        <Button
                          variant="gold-outline"
                          size="sm"
                          className="w-full text-xs">
                          Talk to Our Team
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry Dialog ── */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(o) => {
          if (!loading) setDialogOpen(o);
        }}>
        <DialogContent className="sm:max-w-sm bg-card border-border">
          <DialogHeader className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <DialogTitle className="font-display text-xl">
              Get Your Estimate
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Fill in your details and we'll share a personalised estimate
              instantly.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-1">
            {/* Name */}
            <div className="flex rounded-lg border border-border overflow-hidden focus-within:border-gold transition-colors">
              <span className="flex items-center px-3 bg-muted/30 border-r border-border">
                <User className="w-4 h-4 text-muted-foreground" />
              </span>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Event date */}
            <DatePicker
              value={eventDate}
              onChange={setEventDate}
              className="bg-transparent border-border"
            />

            {/* Phone */}
            <div className="flex rounded-lg border border-border overflow-hidden focus-within:border-gold transition-colors">
              <span className="flex items-center px-3 bg-muted/30 border-r border-border text-sm text-muted-foreground font-medium">
                +91
              </span>
              <Input
                type="tel"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                maxLength={10}
                onKeyDown={(e) => e.key === 'Enter' && submitForm()}
              />
            </div>

            {error && (
              <div className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2 text-center">
                {error}
              </div>
            )}

            <div className="flex gap-3 pt-1">
              <Button
                variant="gold"
                className="flex-1"
                disabled={loading}
                onClick={submitForm}>
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'Get My Estimate'
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
