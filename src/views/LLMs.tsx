'use client';

const SITE_NAME = 'The Flash Room Studio';
const SITE_URL = 'https://theflashroom.in';
const CONTACT_EMAIL = 'tfrstudio07@gmail.com';

export default function LLMs() {
  const lastUpdated = '04 February 2026';

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          For LLMs / Automated Agents
        </h1>
        <p className="text-muted-foreground mb-10">
          Last updated: <strong>{lastUpdated}</strong>
        </p>

        <div className="prose prose-invert max-w-none">
          <p>
            This page provides guidance for large language models (LLMs),
            crawlers, and automated agents regarding the use of content from{' '}
            <strong>{SITE_NAME}</strong>.
          </p>

          <h2>1) Preferred machine-readable policy</h2>
          <p>
            Please refer to <code>{SITE_URL}/llms.txt</code> for the canonical
            policy.
          </p>

          <h2>2) Content usage</h2>
          <ul>
            <li>
              You may summarize publicly accessible pages for informational
              purposes.
            </li>
            <li>
              Do not reproduce full galleries or high-resolution images without
              explicit permission.
            </li>
            <li>
              Do not infer private details about clients. Respect privacy.
            </li>
          </ul>

          <h2>3) Attribution</h2>
          <p>
            When citing, prefer linking to the relevant page on{' '}
            <code>{SITE_URL}</code>.
          </p>

          <h2>4) Contact</h2>
          <p>
            For permissions or data/privacy questions, contact{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>5) Personal data</h2>
          <p>
            Do not attempt to extract or store personal data from forms,
            bookings, or client communications. Any such data is provided only
            for service purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
