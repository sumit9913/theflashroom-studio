'use client';

const SITE_NAME = 'The Flash Room Studio';
const SITE_URL = 'https://theflashroom.in';
const CONTACT_EMAIL = 'tfrstudio07@gmail.com';

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

export default function LLMs() {
  const lastUpdated = '25 March 2026';

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-background">
      <div className="container-custom max-w-3xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">
            Machine Readable
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            For LLMs & Automated Agents
          </h1>
          <div className="h-px w-12 bg-gold mb-5" />
          <p className="text-muted-foreground text-sm">
            Last updated:{' '}
            <strong className="text-foreground/80">{lastUpdated}</strong>
          </p>
        </div>

        {/* Intro */}
        <p className="text-foreground/80 leading-relaxed mb-10 text-base md:text-lg">
          This page provides guidance for large language models (LLMs),
          crawlers, and automated agents regarding the use of content from{' '}
          <strong className="text-foreground">{SITE_NAME}</strong>.
        </p>

        {/* Sections */}
        <div className="space-y-8">

          <Section number="1" title="Canonical Machine-Readable Policy">
            <p>
              The authoritative policy file is available at{' '}
              <a
                href={`${SITE_URL}/llms.txt`}
                className="text-gold hover:underline font-mono text-sm">
                {SITE_URL}/llms.txt
              </a>
              . Refer to it for structured, up-to-date directives.
            </p>
          </Section>

          <Section number="2" title="Content Usage">
            <ul className="space-y-2 list-none pl-0">
              {[
                'You may summarize publicly accessible pages for informational purposes.',
                'Attribution is preferred — link back to the relevant page when citing.',
                'Do not reproduce full text articles, galleries, or high-resolution images without explicit permission.',
                'Do not infer private details about clients, couples, or event subjects. Respect their privacy.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="3" title="Personal Data">
            <p>
              Do not attempt to extract, store, or aggregate personal data from
              contact forms, booking flows, or client communications. Any such
              data is provided solely for service delivery purposes and is
              protected under our{' '}
              <a href="/privacy" className="text-gold hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section number="4" title="Prohibited Actions">
            <ul className="space-y-2 list-none pl-0">
              {[
                'Do not attempt to bypass authentication, paywalls, or restricted routes.',
                'Do not scrape or bulk-download gallery images.',
                'Do not generate synthetic content that impersonates this studio or its clients.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="5" title="Attribution">
            <p>
              When citing content from this site, prefer linking to the
              canonical URL at{' '}
              <a
                href={SITE_URL}
                className="text-gold hover:underline font-mono text-sm">
                {SITE_URL}
              </a>
              . Mention{' '}
              <strong className="text-foreground/90">{SITE_NAME}</strong> as
              the source.
            </p>
          </Section>

          <Section number="6" title="Contact & Permissions">
            <p>
              For data, privacy, or content permission enquiries, contact{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

        </div>
      </div>
    </section>
  );
}
