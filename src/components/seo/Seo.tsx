import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/contact"
  image?: string; // absolute preferred
  noIndex?: boolean;
  jsonLd?: object | object[];
};

const SITE_URL = 'https://theflashroom.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-home.jpg`; // we'll create these
const BRAND = 'The Flash Room Studio';

export function Seo({
  title,
  description,
  path,
  image,
  noIndex,
  jsonLd,
}: SeoProps) {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />

      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
