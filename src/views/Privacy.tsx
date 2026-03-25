'use client';

const SITE_NAME = 'The Flash Room Studio';
const CONTACT_EMAIL = 'tfrstudio07@gmail.com';
const CONTACT_PHONE = '+91 91366 98930';
const CITY_COUNTRY = 'Mumbai, India';

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

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <div className="h-px w-12 bg-gold mb-5" />
          <p className="text-muted-foreground text-sm">
            Last updated:{' '}
            <strong className="text-foreground/80">{lastUpdated}</strong>
          </p>
        </div>

        {/* Intro */}
        <p className="text-foreground/80 leading-relaxed mb-10 text-base md:text-lg">
          At <strong className="text-foreground">{SITE_NAME}</strong>, your
          privacy matters. This Privacy Policy explains what information we
          collect, how we use it, how we protect it, and your choices. By using
          our website or contacting us, you agree to this policy.
        </p>

        {/* Sections */}
        <div className="space-y-8">

          <Section number="1" title="Who We Are">
            <p>
              <strong className="text-foreground">{SITE_NAME}</strong> is a
              photography and videography studio based in {CITY_COUNTRY}. If you
              have questions, contact us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              or{' '}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="text-gold hover:underline">
                {CONTACT_PHONE}
              </a>
              .
            </p>
          </Section>

          <Section number="2" title="Information We Collect">
            <ul className="space-y-2 list-none pl-0">
              {[
                [
                  'Inquiry & booking details',
                  'name, email, phone, event type, event date, location, budget, and your message/requirements.',
                ],
                [
                  'Client media (if you share it)',
                  'photos/videos you send for references, selections, approvals, or deliveries.',
                ],
                [
                  'Technical/usage data',
                  'approximate location, device, browser, pages viewed, and basic analytics data (if enabled).',
                ],
                [
                  'Cookies',
                  'small files used for basic functionality and analytics (where applicable).',
                ],
              ].map(([label, detail]) => (
                <li key={label} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>
                    <strong className="text-foreground/90">{label}:</strong>{' '}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="3" title="How We Use Your Information">
            <ul className="space-y-2 list-none pl-0">
              {[
                'To respond to inquiries and provide quotes.',
                'To confirm bookings, coordinate schedules, and deliver services.',
                'To improve our website performance and user experience.',
                'To prevent spam and abuse of forms.',
                'To meet legal, tax, or compliance obligations (when required).',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="4" title="Legal Bases (GDPR-Friendly)">
            <p>
              Where GDPR applies, we process personal data based on:{' '}
              <strong className="text-foreground/90">consent</strong> (e.g.,
              when you submit a form),{' '}
              <strong className="text-foreground/90">contract</strong> (to
              provide services),{' '}
              <strong className="text-foreground/90">
                legitimate interests
              </strong>{' '}
              (e.g., preventing fraud/spam, improving our site), and{' '}
              <strong className="text-foreground/90">legal obligations</strong>.
            </p>
          </Section>

          <Section number="5" title="How We Share Your Information">
            <p>
              We do <strong className="text-foreground/90">not</strong> sell
              your personal information. We may share limited data with trusted
              service providers only when needed to run our business (website
              hosting, email tools, form processing, analytics), and only for
              the purposes described here.
            </p>
            <p>
              We may disclose information if required by law, court order, or to
              protect our legal rights.
            </p>
          </Section>

          <Section number="6" title="Media, Portfolio & Marketing">
            <p>
              We may showcase selected photos/videos on our website or social
              media{' '}
              <strong className="text-foreground/90">
                only with your consent
              </strong>{' '}
              (typically agreed in writing during/after a project). You can
              withdraw consent for future use by contacting us. Withdrawal does
              not affect past lawful use.
            </p>
          </Section>

          <Section number="7" title="Data Retention">
            <ul className="space-y-2 list-none pl-0">
              {[
                [
                  'Inquiries',
                  'typically retained up to 12 months for follow-ups and record keeping.',
                ],
                [
                  'Client project data',
                  'retained for a reasonable period to deliver services, provide support, and maintain backups.',
                ],
                [
                  'Legal/tax records',
                  'retained as required by law.',
                ],
              ].map(([label, detail]) => (
                <li key={label} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>
                    <strong className="text-foreground/90">{label}:</strong>{' '}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="8" title="Security">
            <p>
              We use reasonable safeguards to protect your information (access
              controls, secure services, and best-practice handling). However,
              no method of transmission or storage is 100% secure.
            </p>
          </Section>

          <Section number="9" title="Your Rights (India + GDPR)">
            <p>
              You can request access, correction, deletion, or a copy of your
              information, and you can object or restrict certain processing
              where applicable. To make a request, email{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We may need to verify your identity.
            </p>
          </Section>

          <Section number="10" title="International Transfers">
            <p>
              Some service providers may process data outside India. When this
              happens, we take reasonable steps to ensure appropriate safeguards
              are in place.
            </p>
          </Section>

          <Section number="11" title="Children's Privacy">
            <p>
              Our website is not intended for children to submit personal data
              without a parent or guardian. If you believe a child has provided
              data, contact us to remove it.
            </p>
          </Section>

          <Section number="12" title="Changes to This Policy">
            <p>
              We may update this policy occasionally. We will update the "Last
              updated" date, and changes apply from that date.
            </p>
          </Section>

        </div>
      </div>
    </section>
  );
}
