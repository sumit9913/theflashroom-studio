'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const faqs = [
  {
    category: 'Booking & Availability',
    items: [
      {
        q: 'How far in advance should I book my wedding photographer?',
        a: 'We recommend booking at least 6–12 months in advance for weddings, especially for peak season dates (November–February). For pre-wedding shoots and other events, 4–8 weeks is usually sufficient. Popular dates fill up quickly, so the earlier you reach out, the better.',
      },
      {
        q: 'How do I confirm my booking?',
        a: 'A booking is confirmed once you receive a written confirmation from us and (where applicable) an advance payment is made. Simply submitting the inquiry form does not reserve a date.',
      },
      {
        q: 'Do you cover destination weddings outside Mumbai?',
        a: 'Yes — we travel Pan-India and internationally. We have covered weddings in Udaipur, Jaipur, Goa, Delhi, Bangalore, and abroad. Travel and accommodation costs are quoted separately depending on the location.',
      },
    ],
  },
  {
    category: 'Coverage & Services',
    items: [
      {
        q: 'Do you offer both photography and videography?',
        a: 'Yes. All our packages can include both stills photography and cinematic videography. Our intermediate and premium wedding packages include a dedicated videographer and a highlight film. Standalone photography-only packages are also available.',
      },
      {
        q: 'How many photographers will be at my event?',
        a: 'This depends on the package you choose. Our Cost-Effective packages include 1 photographer; Intermediate packages include 2 photographers + 1 videographer; Premium packages include 3 photographers + 2 videographers. We can also customise team size on request.',
      },
      {
        q: 'Do you cover multi-day wedding functions (Mehendi, Haldi, Sangeet, Phera)?',
        a: 'Absolutely. Our Premium wedding packages cover multiple days. We can also quote individually for each function. Just let us know the full schedule when you get in touch.',
      },
      {
        q: 'What is your editing and photography style?',
        a: 'Our style blends cinematic storytelling with candid, documentary photography. We focus on real emotions, authentic moments, and rich colour grading — not overly posed or heavily filtered images. You can see our full aesthetic in the portfolio.',
      },
    ],
  },
  {
    category: 'Pricing & Packages',
    items: [
      {
        q: 'What are your starting prices?',
        a: 'Wedding photography & videography starts from ₹45,000 for intimate coverage. Pre-wedding shoots start from ₹25,000. Event coverage starts from ₹15,000, and baby shower/maternity sessions from ₹12,000. Visit our Packages page for full details.',
      },
      {
        q: 'Can I customise a package?',
        a: 'Yes. All packages are a starting point. We are happy to add or remove elements — extra hours, an additional photographer, a same-day edit, drone footage, printed albums, etc. Just tell us what you need and we will quote accordingly.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'We typically take an advance to confirm the booking and the balance before delivery. Specific payment schedules are agreed per booking. Reach out to discuss what works for you.',
      },
      {
        q: 'Are there additional charges for travel?',
        a: 'For locations within Mumbai, travel is included. For outstation and destination weddings, travel (flights/train), accommodation, and per-diem are quoted separately and transparently before you confirm.',
      },
    ],
  },
  {
    category: 'Deliverables & Timeline',
    items: [
      {
        q: 'How many edited photos will we receive?',
        a: 'Photo count depends on the package — typically 200+ for Cost-Effective, 500+ for Intermediate, and 1,000+ for Premium wedding coverage. Pre-wedding shoots include 50–150+ edited images depending on the package.',
      },
      {
        q: 'How long will it take to receive our photos?',
        a: 'Edited photos are typically delivered within 3–6 weeks of the event, depending on the season and package. Wedding films take 6–10 weeks. Premium packages include priority delivery. We will give you an estimated timeline at the time of booking.',
      },
      {
        q: 'In what format are photos delivered?',
        a: 'All photos are delivered in high-resolution JPEG format via a private online gallery. You can download, share, and print from there. Raw files are not shared. Physical printed albums are available in Premium packages.',
      },
      {
        q: 'Can we share the photos on social media?',
        a: 'Yes — you receive a personal-use license covering sharing on social media, printing for personal use, and displaying at home. Commercial use (brand promotions, ads) requires separate written permission.',
      },
    ],
  },
  {
    category: 'Practical Questions',
    items: [
      {
        q: 'What happens if you have an emergency on our wedding day?',
        a: "Your day is too important to leave to chance. In the rare event of an emergency, we have a trusted network of professional photographers we work with to ensure backup coverage. This has never happened — but you are protected.",
      },
      {
        q: 'Do we need to provide a shot list?',
        a: "A short list of must-have family groupings is helpful. Beyond that, we prefer to work organically and capture real moments as they happen. Over-scripting can make photos feel stiff — we'll guide you naturally through the day.",
      },
      {
        q: 'Do you have experience with different religious ceremonies?',
        a: 'Yes. We have covered Hindu, Muslim, Christian, Sikh, and interfaith weddings across India. We are familiar with the rituals and timings involved in each tradition, so you will not need to explain every detail.',
      },
      {
        q: 'Will you post our photos on your website or social media?',
        a: 'Only with your explicit consent, typically confirmed in writing after the project. If you prefer complete privacy, we respect that fully — just let us know. Withdrawal of consent does not affect any past lawful use.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}>
        <span className="font-display text-base md:text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="pb-5 pr-9">
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            {a}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-background">
        <div className="container-custom max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <div className="h-px w-12 bg-gold mb-5" />
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Everything you need to know before booking your photography
              session with The Flash Room Studio.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-display text-xl font-semibold text-gold mb-1 tracking-wide">
                  {section.category}
                </h2>
                <div className="h-px w-8 bg-gold/40 mb-6" />
                <div>
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-gold/20 bg-gold/5 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">
              Still have questions?
            </h3>
            <p className="text-foreground/70 mb-6 text-sm md:text-base">
              We are happy to answer anything before you commit. Reach out and
              we will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/book">
                <Button variant="gold-outline" size="lg">
                  Book a Shoot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
