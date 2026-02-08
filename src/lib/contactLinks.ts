export const toTelHref = (phone: string) =>
  `tel:${phone.replace(/[^\d+]/g, '')}`;

export const toMailHref = (email: string) => `mailto:${email}`;

export const toMapsHref = (place: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
