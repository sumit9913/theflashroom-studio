/**
 * Single source of truth for all public business contact info.
 * Import from here instead of hardcoding in individual files.
 */
export const SITE_CONFIG = {
  name: 'The Flash Room Studio',
  url: 'https://theflashroom.in',

  phone: {
    primary: '+91 91366 98930',
    secondary: '+91 99673 99913',
    primaryHref: 'tel:+919136698930',
    secondaryHref: 'tel:+919967399913',
    /** Digits-only for WhatsApp deep-links */
    whatsapp: '919136698930',
  },

  email: {
    primary: 'tfrstudio07@gmail.com',
    secondary: 'sumit.m992@gmail.com',
    primaryHref: 'mailto:tfrstudio07@gmail.com',
    secondaryHref: 'mailto:sumit.m992@gmail.com',
  },

  address: {
    display: 'Mumbai, India',
    full: 'Bhandup, Mumbai, Maharashtra 400078, India',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    pin: '400078',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Flash+Room+Studio+Mumbai',
  },

  social: {
    instagram: 'https://instagram.com/tfrstudio__',
    instagramHandle: '@tfrstudio__',
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
  },

  hours: {
    weekdays: 'Mon–Sat, 10am–7pm',
    sunday: 'Sunday by appointment',
  },
} as const;
