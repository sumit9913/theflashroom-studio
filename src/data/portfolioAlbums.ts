/**
 * Single source of truth for portfolio albums and reels.
 * Previously duplicated between Portfolio.tsx and PortfolioAlbum.tsx.
 */
import babyshower from '@/assets/babyshower.jpg';
import birthday from '@/assets/birthday.jpg';
import event from '@/assets/event.jpg';
import haldi from '@/assets/haldi.jpg';
import heroWedding from '@/assets/hero-wedding.jpg';
import phera from '@/assets/phera.jpg';
import prewedding from '@/assets/prewedding.jpg';
import sangeet from '@/assets/sangeet.jpg';

export const categories = [
  'All',
  'Weddings',
  'Pre-Weddings',
  'Events',
  'Baby Showers',
  'Maternity',
  'Others',
] as const;

export const portfolioAlbums = [
  {
    id: 'priya-rahul-wedding-udaipur',
    title: 'Priya & Rahul Wedding',
    category: 'Weddings',
    location: 'Udaipur',
    cover: heroWedding,
    images: [heroWedding, haldi, sangeet, phera],
  },
  {
    id: 'sneha-amit-prewedding-jaipur',
    title: 'Sneha & Amit Pre-Wedding',
    category: 'Pre-Weddings',
    location: 'Jaipur',
    cover: prewedding,
    images: [prewedding, heroWedding, event],
  },
  {
    id: 'traditional-haldi-mumbai',
    title: 'Traditional Haldi Ceremony',
    category: 'Weddings',
    location: 'Mumbai',
    cover: haldi,
    images: [haldi, heroWedding, sangeet],
  },
  {
    id: 'sangeet-night-delhi',
    title: 'Sangeet Night Celebration',
    category: 'Weddings',
    location: 'Delhi',
    cover: sangeet,
    images: [sangeet, heroWedding, phera],
  },
  {
    id: 'sacred-phera-bangalore',
    title: 'Sacred Phera Ceremony',
    category: 'Weddings',
    location: 'Bangalore',
    cover: phera,
    images: [phera, heroWedding, haldi],
  },
  {
    id: 'godh-bharai-pune',
    title: 'Godh Bharai Celebration',
    category: 'Baby Showers',
    location: 'Pune',
    cover: babyshower,
    images: [babyshower, heroWedding, birthday],
  },
  {
    id: '50th-birthday-mumbai',
    title: '50th Birthday Celebration',
    category: 'Others',
    location: 'Mumbai',
    cover: birthday,
    images: [birthday, event, heroWedding],
  },
  {
    id: 'corporate-annual-dinner-hyderabad',
    title: 'Corporate Annual Dinner',
    category: 'Events',
    location: 'Hyderabad',
    cover: event,
    images: [event, heroWedding, birthday],
  },
  {
    id: 'kavita-vikram-wedding-goa',
    title: 'Kavita & Vikram Wedding',
    category: 'Weddings',
    location: 'Goa',
    cover: heroWedding,
    images: [heroWedding, phera, sangeet],
  },
  {
    id: 'romantic-beach-prewedding-goa',
    title: 'Romantic Beach Pre-Wedding Shoot',
    category: 'Pre-Weddings',
    location: 'Goa',
    cover: prewedding,
    images: [prewedding, heroWedding, sangeet],
  },
  {
    id: 'mehndi-night-jaipur',
    title: 'Mehndi Night Celebration',
    category: 'Weddings',
    location: 'Jaipur',
    cover: sangeet,
    images: [sangeet, haldi, heroWedding],
  },
  {
    id: 'baby-shower-chennai',
    title: 'Baby Shower Party',
    category: 'Baby Showers',
    location: 'Chennai',
    cover: babyshower,
    images: [babyshower, birthday, heroWedding],
  },
];

export const reels = [
  { id: 1, title: 'Priya & Rahul - Wedding Film', thumbnail: heroWedding },
  { id: 2, title: 'Destination Wedding Highlights', thumbnail: phera },
  { id: 3, title: 'Pre-Wedding Love Story', thumbnail: prewedding },
  { id: 4, title: 'Sangeet Night Recap', thumbnail: sangeet },
];
