import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "The Flash Room Studio";
const SITE_URL = "https://theflashroom.in";
const CONTACT_EMAIL = "tfrstudio07@gmail.com";
const CONTACT_PHONE = "+91 91366 98930";
const CITY_COUNTRY = "Mumbai, India";

export default function Privacy() {
  const lastUpdated = "04 February 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": `${SITE_NAME} Privacy Policy`,
    "url": `${SITE_URL}/privacy`,
    "inLanguage": "en",
    "dateModified": lastUpdated,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "email": CONTACT_EMAIL,
      "telephone": CONTACT_PHONE,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {SITE_NAME}</title>
        <meta
          name="description"
          content="Privacy Policy for The Flash Room Studio. Learn how we collect, use, store and protect your information for inquiries, bookings and site analytics."
        />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-10">
              Last updated: <strong>{lastUpdated}</strong>
            </p>

            <div className="prose prose-invert max-w-none">
              <p>
                At <strong>{SITE_NAME}</strong>, your privacy matters. This Privacy
                Policy explains what information we collect, how we use it, how we
                protect it, and your choices. By using our website or contacting us,
                you agree to this policy.
              </p>

              <h2>1) Who we are</h2>
              <p>
                <strong>{SITE_NAME}</strong> is a photography and videography studio
                based in {CITY_COUNTRY}. If you have questions, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or{" "}
                <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>.
              </p>

              <h2>2) Information we collect</h2>
              <ul>
                <li>
                  <strong>Inquiry & booking details:</strong> name, email, phone,
                  event type, event date, location, budget, and your message/requirements.
                </li>
                <li>
                  <strong>Client media (if you share it):</strong> photos/videos you
                  send for references, selections, approvals, or deliveries.
                </li>
                <li>
                  <strong>Technical/usage data:</strong> approximate location, device,
                  browser, pages viewed, and basic analytics data (if enabled).
                </li>
                <li>
                  <strong>Cookies:</strong> small files used for basic functionality
                  and analytics (where applicable).
                </li>
              </ul>

              <h2>3) How we use your information</h2>
              <ul>
                <li>To respond to inquiries and provide quotes.</li>
                <li>To confirm bookings, coordinate schedules, and deliver services.</li>
                <li>To improve our website performance and user experience.</li>
                <li>To prevent spam and abuse of forms.</li>
                <li>To meet legal, tax, or compliance obligations (when required).</li>
              </ul>

              <h2>4) Legal bases (GDPR-friendly)</h2>
              <p>
                Where GDPR applies, we process personal data based on:{" "}
                <strong>consent</strong> (e.g., when you submit a form),{" "}
                <strong>contract</strong> (to provide services),{" "}
                <strong>legitimate interests</strong> (e.g., preventing fraud/spam,
                improving our site), and <strong>legal obligations</strong>.
              </p>

              <h2>5) How we share your information</h2>
              <p>
                We do <strong>not</strong> sell your personal information. We may share
                limited data with trusted service providers only when needed to run our
                business (example: website hosting, email tools, form processing, analytics),
                and only for the purposes described here.
              </p>
              <p>
                We may disclose information if required by law, court order, or to
                protect our legal rights.
              </p>

              <h2>6) Media, portfolio & marketing</h2>
              <p>
                We may showcase selected photos/videos on our website or social media
                <strong> only with your consent</strong> (typically agreed in writing
                during/after a project). You can withdraw consent for future use by
                contacting us. Withdrawal does not affect past lawful use.
              </p>

              <h2>7) Data retention</h2>
              <ul>
                <li>
                  <strong>Inquiries:</strong> typically retained up to 12 months for
                  follow-ups and record keeping.
                </li>
                <li>
                  <strong>Client project data:</strong> retained for a reasonable period
                  to deliver services, provide support, and maintain backups (duration may
                  depend on project scope and storage constraints).
                </li>
                <li>
                  <strong>Legal/tax records:</strong> retained as required by law.
                </li>
              </ul>

              <h2>8) Security</h2>
              <p>
                We use reasonable safeguards to protect information (access controls,
                secure services, and best-practice handling). However, no method of
                transmission or storage is 100% secure.
              </p>

              <h2>9) Your rights (India + GDPR)</h2>
              <p>
                You can request access, correction, deletion, or a copy of your information,
                and you can object/restrict certain processing where applicable. To make a
                request, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need to
                verify your identity.
              </p>

              <h2>10) International transfers</h2>
              <p>
                Some service providers may process data outside India. When this happens,
                we take reasonable steps to ensure appropriate safeguards are used.
              </p>

              <h2>11) Children’s privacy</h2>
              <p>
                Our website is not intended for children to submit personal data without
                a parent/guardian. If you believe a child has provided data, contact us
                to remove it.
              </p>

              <h2>12) Changes to this policy</h2>
              <p>
                We may update this policy occasionally. We’ll update the “Last updated”
                date, and changes apply from that date.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
