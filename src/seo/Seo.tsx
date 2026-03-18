// SEO is now handled via Next.js Metadata API in route files (src/app/*/page.tsx)
// This file is kept as a placeholder for backward compatibility.

export function Seo(_props: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
}) {
  return null;
}
