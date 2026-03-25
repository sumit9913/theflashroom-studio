'use client';

const SITE_NAME = 'The Flash Room Studio';
const CONTACT_EMAIL = 'tfrstudio07@gmail.com';
const CONTACT_PHONE = '+91 91366 98930';

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border/40 pt-8">
      <h2 className="font-display text-xl md:text-2xl font-semibold mb-4">
        <span className="text-gold mr-2">{number}.</span>
        {title}
      </h2>
      <div className="text-foreground/75 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function Terms() {
  const lastUpdated = '25 March 2026';

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-background">
      <div className="container-custom max-w-3xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <div className="h-px w-12 bg-gold mb-5" />
          <p className="text-muted-foreground text-sm">
            Last updated:{' '}
            <strong className="text-foreground/80">{lastUpdated}</strong>
          </p>
        </div>

        {/* Intro */}
        <p className="text-foreground/80 leading-relaxed mb-10 text-base md:text-lg">
          These Terms govern your use of the{' '}
          <strong className="text-foreground">{SITE_NAME}</strong> website and
          any inquiry or booking you make with us. By using this site, you agree
          to these Terms.
        </p>

        {/* Sections */}
        <div className="space-y-8">

          <Section number="1" title="Website Use">
            <ul className="space-y-2 list-none pl-0">
              {[
                'Do not misuse the site, attempt unauthorized access, or submit spam.',
                'We may update or suspend parts of the site without notice.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="2" title="Inquiries & Bookings">
            <p>
              Submitting a form or contacting us does not guarantee
              availability. A booking is confirmed only after written
              confirmation and (if applicable) receipt of an advance payment.
            </p>
          </Section>

          <Section number="3" title="Pricing, Payments & Invoices">
            <ul className="space-y-2 list-none pl-0">
              {[
                'Prices may vary by date, location, duration, and deliverables.',
                'Advance payment may be required to reserve dates.',
                'Applicable taxes may be added as required by law.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="4" title="Cancellations & Rescheduling">
            <p>
              Cancellation and reschedule terms depend on your final booking
              agreement/quote. In general, rescheduling is subject to
              availability. Some payments may be non-refundable due to date
              blocking and pre-production costs.
            </p>
          </Section>

          <Section number="5" title="Deliverables & Timelines">
            <p>
              Delivery timelines vary by season and package (editing, albums,
              films). We will share an estimated timeline at booking. Delays due
              to factors outside our control — venue restrictions, weather, or
              force majeure — may affect delivery.
            </p>
          </Section>

          <Section number="6" title="Client Responsibilities">
            <ul className="space-y-2 list-none pl-0">
              {[
                'Provide accurate event details and permissions needed for shooting.',
                'Ensure venue access and required approvals for photography/video.',
                'Coordinate a point of contact for on-ground decisions.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="7" title="Intellectual Property & Usage Rights">
            <ul className="space-y-2 list-none pl-0">
              {[
                'Unless otherwise agreed in writing, we retain copyright in the photos/videos we create.',
                'You receive a personal-use license to view, share, and print your delivered media for personal purposes.',
                'Commercial use (ads, brand promotions, paid campaigns) requires written permission.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="8" title="Portfolio Use">
            <p>
              We may request your consent to use selected work for our
              portfolio and marketing. If you do not consent, we will respect
              that choice.
            </p>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we are not liable for
              indirect, incidental, or consequential damages. Our total
              liability related to a booking is limited to the amount paid for
              that booking, unless otherwise required by law.
            </p>
          </Section>

          <Section number="10" title="Third-Party Links">
            <p>
              The site may link to third-party platforms (e.g., Instagram). We
              are not responsible for their content or privacy practices.
            </p>
          </Section>

          <Section number="11" title="Governing Law (India)">
            <p>
              These Terms are governed by the laws of India. Courts with
              appropriate jurisdiction will have authority over disputes.
            </p>
          </Section>

          <Section number="12" title="Contact">
            <p>
              Questions? Email{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              or call{' '}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="text-gold hover:underline">
                {CONTACT_PHONE}
              </a>
              .
            </p>
          </Section>

        </div>
      </div>
    </section>
  );
}
