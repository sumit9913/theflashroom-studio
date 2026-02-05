import { Helmet } from 'react-helmet-async';

import { Layout } from '@/components/layout/Layout';

const SITE_NAME = 'The Flash Room Studio';
const SITE_URL = 'https://theflashroom.in';
const CONTACT_EMAIL = 'tfrstudio07@gmail.com';
const CONTACT_PHONE = '+91 91366 98930';

export default function Terms() {
  const lastUpdated = '04 February 2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TermsOfService',
    name: `${SITE_NAME} Terms of Service`,
    url: `${SITE_URL}/terms`,
    inLanguage: 'en',
    dateModified: lastUpdated,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
    },
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | {SITE_NAME}</title>
        <meta
          name="description"
          content="Terms of Service for The Flash Room Studio. Booking, payments, cancellations, deliverables, usage rights, and website terms."
        />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-10">
              Last updated: <strong>{lastUpdated}</strong>
            </p>

            <div className="prose prose-invert max-w-none">
              <p>
                These Terms govern your use of <strong>{SITE_NAME}</strong>{' '}
                website and any inquiry/booking you make with us. By using this
                site, you agree to these Terms.
              </p>

              <h2>1) Website use</h2>
              <ul>
                <li>
                  Do not misuse the site, attempt unauthorized access, or submit
                  spam.
                </li>
                <li>
                  We may update or suspend parts of the site without notice.
                </li>
              </ul>

              <h2>2) Inquiries & bookings</h2>
              <p>
                Submitting a form or contacting us does not guarantee
                availability. A booking is confirmed only after written
                confirmation and (if applicable) receipt of an advance payment.
              </p>

              <h2>3) Pricing, payments & invoices</h2>
              <ul>
                <li>
                  Prices may vary by date, location, duration, and deliverables.
                </li>
                <li>Advance payment may be required to reserve dates.</li>
                <li>Applicable taxes may be added as required by law.</li>
              </ul>

              <h2>4) Cancellations & rescheduling</h2>
              <p>
                Cancellation/reschedule terms depend on your final booking
                agreement/quote. In general, rescheduling is subject to
                availability. Some payments may be non-refundable due to date
                blocking and pre-production costs.
              </p>

              <h2>5) Deliverables & timelines</h2>
              <p>
                Delivery timelines vary by season and package (editing, albums,
                films). We’ll share an estimated timeline at booking. Delays due
                to factors outside our control (venue restrictions, weather,
                force majeure) may affect delivery.
              </p>

              <h2>6) Client responsibilities</h2>
              <ul>
                <li>
                  Provide accurate event details and permissions needed for
                  shooting.
                </li>
                <li>
                  Ensure venue access and required approvals for
                  photography/video.
                </li>
                <li>Coordinate a point of contact for on-ground decisions.</li>
              </ul>

              <h2>7) Intellectual property & usage rights</h2>
              <ul>
                <li>
                  Unless otherwise agreed in writing, we retain copyright in the
                  photos/videos we create.
                </li>
                <li>
                  You receive a personal-use license to view, share, and print
                  your delivered media for personal purposes.
                </li>
                <li>
                  Commercial use (ads, brand promotions, paid campaigns)
                  requires written permission.
                </li>
              </ul>

              <h2>8) Portfolio use</h2>
              <p>
                We may request your consent to use selected work for our
                portfolio/marketing. If you do not consent, we will respect that
                choice.
              </p>

              <h2>9) Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for
                indirect, incidental, or consequential damages. Our total
                liability related to a booking is limited to the amount paid for
                that booking (unless otherwise required by law).
              </p>

              <h2>10) Third-party links</h2>
              <p>
                The site may link to third-party platforms (e.g., Instagram). We
                are not responsible for their content or privacy practices.
              </p>

              <h2>11) Governing law (India)</h2>
              <p>
                These Terms are governed by the laws of India. Courts with
                appropriate jurisdiction will have authority over disputes.
              </p>

              <h2>12) Contact</h2>
              <p>
                Questions? Email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or call{' '}
                <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
