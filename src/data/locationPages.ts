/**
 * Data for location-specific SEO landing pages.
 * Each entry produces a static route at /{slug}.
 */

export type LocationPageData = {
  slug: string;
  /** e.g. "Wedding Photography" */
  service: string;
  /** e.g. "Bandra" */
  location: string;
  /** e.g. "Bandra, Mumbai" */
  locationFull: string;
  heroHeadline: string;
  heroSub: string;
  /** 2–3 short paragraphs */
  intro: string[];
  features: string[];
  /** "₹45,000" */
  startingPrice: string;
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
  /** category label from portfolioAlbums — used to pull preview grid */
  albumCategory: 'Weddings' | 'Pre-Weddings' | 'Events' | 'Baby Showers';
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const LOCATION_PAGES: LocationPageData[] = [
  // ─── Wedding Photography ──────────────────────────────────────────────────
  {
    slug: 'wedding-photography-mumbai',
    service: 'Wedding Photography',
    location: 'Mumbai',
    locationFull: 'Mumbai, Maharashtra',
    heroHeadline: 'Wedding Photography in Mumbai',
    heroSub:
      'Timeless wedding memories crafted across every corner of the city.',
    intro: [
      'Mumbai is a city that never slows down — and neither do its weddings. From the grand heritage halls of South Mumbai to lavish banquet venues in the western suburbs, every celebration here carries an energy that deserves to be captured frame by frame.',
      'The Flash Room Studio has documented hundreds of Mumbai weddings, from intimate 50-guest ceremonies to multi-day celebrations spread across Juhu, Bandra, Andheri, and beyond. We know the city\'s light, its venues, and what it takes to capture real emotion in the middle of a packed dance floor.',
      'Our team handles the full story — haldi, mehndi, sangeet, pheras, and the candid moments in between — so you can relive every chapter for years to come.',
    ],
    features: [
      'Full day & multi-day coverage',
      '2–3 photographers for complete coverage',
      'Candid + traditional photography',
      'Cinematic highlight film option',
      'Drone aerial shots (where permitted)',
      'Premium edited gallery delivered online',
      'Printed album available',
      'No travel surcharge within Mumbai',
    ],
    startingPrice: '₹45,000',
    nearbyAreas: ['Bandra', 'Andheri', 'Juhu', 'Thane', 'Navi Mumbai', 'Borivali'],
    faqs: [
      {
        q: 'Do you cover venues across all of Mumbai?',
        a: 'Yes — we photograph weddings at venues across all of Mumbai including South Mumbai, the western suburbs (Bandra, Andheri, Juhu, Borivali), eastern suburbs (Mulund, Bhandup, Ghatkopar), and Navi Mumbai. There is no travel surcharge within city limits.',
      },
      {
        q: 'What is the best time of year for a Mumbai wedding shoot?',
        a: 'October through March is peak wedding season in Mumbai when the weather is cool and dry. December evenings in particular offer beautiful golden-hour light. Monsoon weddings (June–September) can be magical indoors but require extra planning for outdoor shots.',
      },
      {
        q: 'How far in advance should I book for a Mumbai wedding?',
        a: 'Peak season dates (November–February) book out 6–12 months ahead. For off-season weddings, 3–4 months is usually enough. Contact us early to check availability for your date.',
      },
      {
        q: 'Do you assist with pre-wedding shoots before the wedding?',
        a: 'Absolutely. Many couples pair their wedding booking with a pre-wedding shoot at iconic Mumbai locations like Marine Drive, Bandstand, or Sanjay Gandhi National Park. Ask about our combined packages.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Photography in Mumbai | The Flash Room Studio',
      description:
        'Professional wedding photography in Mumbai by The Flash Room Studio. Full-day candid + traditional coverage, drone, cinematic films. Starting ₹45,000. Book now.',
      keywords: [
        'wedding photography Mumbai',
        'wedding photographer Mumbai',
        'candid wedding photographer Mumbai',
        'best wedding photographer Mumbai',
        'Mumbai wedding photography prices',
        'wedding cinematography Mumbai',
      ],
    },
  },

  {
    slug: 'wedding-photography-bandra',
    service: 'Wedding Photography',
    location: 'Bandra',
    locationFull: 'Bandra, Mumbai',
    heroHeadline: 'Wedding Photography in Bandra',
    heroSub: 'Where Mumbai\'s heritage meets modern celebration.',
    intro: [
      'Bandra is one of Mumbai\'s most sought-after wedding destinations — home to stunning art deco buildings, leafy avenues, and some of the city\'s finest boutique banquet halls. Whether your ceremony is held at a Bandra chapel, a sea-view terrace, or a heritage bungalow, the backdrop is always extraordinary.',
      'The Flash Room Studio\'s photographers are deeply familiar with Bandra\'s venues and natural light conditions — the golden hour along Bandstand, the mood of Carter Road at dusk, and the architectural details that make every frame feel cinematic.',
    ],
    features: [
      'Venue pre-visit & shot planning',
      'Candid + traditional photographers',
      'Bandstand & Carter Road post-ceremony portraits',
      'Full ceremony + reception coverage',
      'Cinematic highlight reel option',
      'Drone available at permitted locations',
      'Online gallery within 4 weeks',
    ],
    startingPrice: '₹45,000',
    nearbyAreas: ['Khar', 'Santacruz', 'Juhu', 'Andheri', 'Versova'],
    faqs: [
      {
        q: 'Which Bandra venues do you regularly shoot at?',
        a: 'We have experience at popular Bandra venues including Taj Lands End, Novotel Juhu, St. Andrew\'s Auditorium, and numerous boutique banquet halls along Waterfield Road and Hill Road. We\'re happy to do a venue walkthrough before your event.',
      },
      {
        q: 'Can we include outdoor portraits at Bandstand or Carter Road?',
        a: 'Yes — many Bandra couples include a short post-ceremony portrait session at Bandstand or Carter Road. Golden hour (roughly 6–7 PM) is ideal. We plan this into your timeline at no extra charge.',
      },
      {
        q: 'Do you cover destination weddings from Bandra?',
        a: 'Yes. If your wedding is in another city — Goa, Udaipur, Jaipur — we travel from our Mumbai base. Destination wedding packages include travel and accommodation costs in the quote.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Photography in Bandra, Mumbai | The Flash Room Studio',
      description:
        'Expert wedding photographers in Bandra, Mumbai. Candid storytelling, drone shots, cinematic films. Familiar with every Bandra venue. Starting ₹45,000.',
      keywords: [
        'wedding photography Bandra',
        'wedding photographer Bandra Mumbai',
        'candid photographer Bandra',
        'Bandra wedding photos',
        'wedding videography Bandra',
      ],
    },
  },

  {
    slug: 'wedding-photography-andheri',
    service: 'Wedding Photography',
    location: 'Andheri',
    locationFull: 'Andheri, Mumbai',
    heroHeadline: 'Wedding Photography in Andheri',
    heroSub: 'Capturing every chapter of your celebration in Mumbai\'s heart.',
    intro: [
      'Andheri is Mumbai\'s entertainment and events capital — home to dozens of premium banquet halls, luxury hotels, and wedding venues that host hundreds of celebrations every season. The sheer variety of settings, from rooftop terraces in Andheri West to grand ballrooms near the airport, gives photographers endless creative possibilities.',
      'The Flash Room Studio has documented countless weddings across Andheri East and West. We know how to work in high-energy Bollywood-style celebrations, intimate family gatherings, and everything in between — delivering both candid storytelling and classic portraiture that families treasure.',
    ],
    features: [
      'Full event coverage from mehndi to reception',
      'Dedicated candid + traditional photographers',
      'Fast turnaround for same-day edit teaser',
      'Drone available at select venues',
      'Cinematic wedding film option',
      'Premium album design service',
      'No travel surcharge within Mumbai',
    ],
    startingPrice: '₹45,000',
    nearbyAreas: ['Jogeshwari', 'Versova', 'Goregaon', 'Malad', 'Santacruz'],
    faqs: [
      {
        q: 'Do you work at banquet halls in Andheri?',
        a: 'Yes — we regularly shoot at venues across Andheri East and West including hotel ballrooms near the airport, standalone banquet halls on MIDC Road, and rooftop venues in Andheri West. Our team arrives early for a venue walkthrough.',
      },
      {
        q: 'Can you handle a large guest-list wedding in Andheri?',
        a: 'Absolutely. For larger weddings (500+ guests) we deploy 2–3 photographers simultaneously so no moment at the mandap, dance floor, or entrance is missed. Contact us for a multi-team quote.',
      },
      {
        q: 'How quickly do we get our photos after the wedding?',
        a: 'Edited photos are delivered via an online gallery within 3–4 weeks. A same-day edit teaser (30–50 photos) is available as an add-on if you\'d like to share highlights immediately.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Photography in Andheri, Mumbai | The Flash Room Studio',
      description:
        'Wedding photographers in Andheri, Mumbai. Candid storytelling for banquet halls, hotel venues, and rooftop celebrations. Starting ₹45,000.',
      keywords: [
        'wedding photography Andheri',
        'wedding photographer Andheri Mumbai',
        'candid wedding photographer Andheri',
        'wedding photos Andheri',
        'best photographer Andheri West',
      ],
    },
  },

  {
    slug: 'wedding-photography-thane',
    service: 'Wedding Photography',
    location: 'Thane',
    locationFull: 'Thane, Maharashtra',
    heroHeadline: 'Wedding Photography in Thane',
    heroSub: 'Stunning wedding memories against Thane\'s natural backdrop.',
    intro: [
      'Thane\'s transformation into a major wedding destination has brought world-class venues, from luxury hotels overlooking Upvan Lake to expansive banquet complexes near Ghodbunder Road. The city\'s green hills and water bodies also give photographers natural settings that Mumbai\'s dense urban core rarely offers.',
      'The Flash Room Studio covers Thane and the surrounding areas — Kalyan, Dombivli, Mira Road — bringing the same creative standard as our Mumbai weddings. We\'re familiar with Thane\'s top venues and handle all logistics, so your day runs seamlessly from the first shot to the last.',
    ],
    features: [
      'Full ceremony & reception coverage',
      'Natural + venue lighting expertise',
      'Upvan Lake & outdoor portrait sessions',
      'Candid + traditional photographers',
      'Cinematic highlight film available',
      'Online gallery + printed album options',
      'Covers Thane, Kalyan, Dombivli, Mira Road',
    ],
    startingPrice: '₹45,000',
    nearbyAreas: ['Kalyan', 'Dombivli', 'Mira Road', 'Bhiwandi', 'Navi Mumbai'],
    faqs: [
      {
        q: 'Do you charge extra to shoot in Thane?',
        a: 'No travel surcharge for Thane city. For locations beyond Thane — Kalyan, Dombivli, Bhiwandi — a small logistics fee may apply depending on the distance. We\'ll confirm this in your quote.',
      },
      {
        q: 'Can we use Upvan Lake or Yeoor Hills for outdoor portraits?',
        a: 'Yes — these are beautiful spots for post-ceremony portraits. We typically plan a 30–45 minute portrait session at the location of your choice, scheduled around the golden hour for the best light.',
      },
      {
        q: 'Do you cover multi-day Thane weddings?',
        a: 'Yes. Multi-day packages (mehndi day 1, wedding day 2, reception day 3) are available and often the most economical option for complete coverage. Ask about our multi-day pricing.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Photography in Thane | The Flash Room Studio',
      description:
        'Professional wedding photographers in Thane. Candid + traditional coverage, outdoor portraits at Upvan Lake, cinematic films. Starting ₹45,000.',
      keywords: [
        'wedding photography Thane',
        'wedding photographer Thane',
        'candid photographer Thane',
        'wedding photography Thane Mumbai',
        'best wedding photographer Thane',
      ],
    },
  },

  // ─── Pre-Wedding Shoots ───────────────────────────────────────────────────
  {
    slug: 'pre-wedding-shoot-mumbai',
    service: 'Pre-Wedding Photography',
    location: 'Mumbai',
    locationFull: 'Mumbai, Maharashtra',
    heroHeadline: 'Pre-Wedding Photography in Mumbai',
    heroSub:
      'Mumbai\'s iconic skyline, beaches, and streets — your love story deserves this backdrop.',
    intro: [
      'A pre-wedding shoot in Mumbai offers some of India\'s most diverse and visually stunning backdrops — the art deco terraces of Marine Drive, the heritage streets of Byculla, the golden sands of Juhu and Versova, the lakeside serenity of Powai, and the forest trails of Sanjay Gandhi National Park.',
      'The Flash Room Studio specialises in natural, emotion-driven pre-wedding photography. We scout your locations in advance, plan around golden hour, and create a relaxed, fun atmosphere so the real chemistry between you two comes through in every frame.',
      'Shoots typically span 4–6 hours with 2–3 curated locations, multiple outfit changes, and delivery of 100+ fully edited photographs.',
    ],
    features: [
      '4–6 hour shoot session',
      '2–3 location changes across Mumbai',
      'Full outfit & styling guidance',
      'Golden hour + natural light planning',
      'Drone shots at select locations',
      '100+ edited photos delivered',
      'Optional reel / highlight video',
      'No travel surcharge within Mumbai',
    ],
    startingPrice: '₹25,000',
    nearbyAreas: ['Bandra', 'Juhu', 'Marine Drive', 'Powai', 'Versova', 'Colaba'],
    faqs: [
      {
        q: 'What are the best pre-wedding shoot locations in Mumbai?',
        a: 'Our top picks: Marine Drive & Nariman Point (golden hour), Bandstand & Carter Road (Bandra), Juhu & Versova beaches (sunrise/sunset), Powai Lake (peaceful, greenery), Mahim Fort & Bandra Fort (heritage), and Sanjay Gandhi National Park (natural forest light).',
      },
      {
        q: 'Do we need permits for public locations?',
        a: 'Most public areas like Marine Drive, Juhu Beach, and Bandstand do not require permits for personal shoots. Some locations (SGNP, certain heritage sites) require prior permission — we handle all permit logistics for you.',
      },
      {
        q: 'How should we plan outfits for different Mumbai locations?',
        a: 'We recommend 2–3 outfit changes — one ethnic/traditional, one western/casual, and one statement look. We share a detailed guide after your booking with colour suggestions that complement each location\'s palette.',
      },
      {
        q: 'Can we combine the pre-wedding shoot with our wedding booking?',
        a: 'Yes — many couples book both together and save significantly. Ask about our combined wedding + pre-wedding packages starting at ₹90,000.',
      },
    ],
    albumCategory: 'Pre-Weddings',
    seo: {
      title: 'Pre-Wedding Photography in Mumbai | The Flash Room Studio',
      description:
        'Pre-wedding shoots across Mumbai — Marine Drive, Bandstand, Juhu, Powai. Natural candid style, golden hour magic. Starting ₹25,000. Book now.',
      keywords: [
        'pre-wedding shoot Mumbai',
        'pre-wedding photography Mumbai',
        'pre-wedding photographer Mumbai',
        'best pre-wedding locations Mumbai',
        'pre-wedding shoot Mumbai price',
        'couple photography Mumbai',
      ],
    },
  },

  {
    slug: 'pre-wedding-shoot-bandra',
    service: 'Pre-Wedding Photography',
    location: 'Bandra',
    locationFull: 'Bandra, Mumbai',
    heroHeadline: 'Pre-Wedding Shoot in Bandra',
    heroSub: 'Bandstand, Carter Road, and the streets that tell a love story.',
    intro: [
      'Bandra is Mumbai\'s single most popular pre-wedding shoot destination — and for good reason. Bandstand\'s rocky seafront, the cobbled lanes near Chapel Road, Carter Road\'s promenade at golden hour, and the colourful walls of Pali Hill create a visual diversity that few other neighbourhoods can match.',
      'The Flash Room Studio\'s team knows every pocket of Bandra — which walls catch the warm afternoon light, which lanes are quietest in the early morning, and how to frame the sea at Bandstand without the usual tourist crowds. We craft your shoot around these moments.',
    ],
    features: [
      'Bandstand + Carter Road portrait routes',
      'Heritage lane & mural wall frames',
      'Golden hour seafront sessions',
      'Café + street vibe casual frames',
      'Pali Hill & Mount Mary area coverage',
      '80–120 edited photographs',
      'Reel / highlight video add-on available',
    ],
    startingPrice: '₹25,000',
    nearbyAreas: ['Khar', 'Santacruz', 'Juhu', 'Versova', 'Andheri West'],
    faqs: [
      {
        q: 'What time is best for a Bandra pre-wedding shoot?',
        a: 'Golden hour (6–7 PM) at Bandstand and Carter Road gives spectacular warm light and reduces crowd density. Early morning (6–8 AM) is also excellent for heritage lanes near St. Andrew\'s Church and the Bandra Fort area.',
      },
      {
        q: 'Can we include a café or indoor setting in Bandra?',
        a: 'Absolutely — several Bandra cafés and restaurants are happy to accommodate couple shoots during quieter hours. We have existing relationships with a few spots we can recommend.',
      },
      {
        q: 'Do you cover shoots that start in Bandra and end in Juhu or Versova?',
        a: 'Yes — multi-location shoots that move from Bandra to Juhu or Versova are very popular for sunset sessions. We plan the route so you get the best light at each location.',
      },
    ],
    albumCategory: 'Pre-Weddings',
    seo: {
      title: 'Pre-Wedding Shoot in Bandra, Mumbai | The Flash Room Studio',
      description:
        'Pre-wedding photography at Bandstand, Carter Road, and Bandra\'s scenic lanes. Golden hour portraits, candid style. Starting ₹25,000.',
      keywords: [
        'pre-wedding shoot Bandra',
        'pre-wedding photography Bandra Mumbai',
        'Bandstand pre-wedding shoot',
        'Carter Road couple shoot',
        'Bandra couple photography',
        'pre-wedding photographer Bandra',
      ],
    },
  },

  {
    slug: 'pre-wedding-shoot-juhu',
    service: 'Pre-Wedding Photography',
    location: 'Juhu Beach',
    locationFull: 'Juhu, Mumbai',
    heroHeadline: 'Pre-Wedding Shoot at Juhu Beach',
    heroSub: 'Golden sands, dramatic sunsets, and the open sea.',
    intro: [
      'Juhu Beach\'s wide golden shoreline and the Arabian Sea horizon make it one of Mumbai\'s most cinematic pre-wedding settings. Sunrise bathes the beach in a soft pink glow that\'s perfect for romantic, dreamy frames. Sunset turns the sky into a canvas of orange and purple — the kind of backdrop that needs no filter.',
      'The Flash Room Studio plans Juhu shoots meticulously around tidal patterns and crowd flow, so you get the beach looking its best. We combine seafront sessions with nearby Versova and JVLR stretches for variety within a single shoot day.',
    ],
    features: [
      'Sunrise + sunset beach sessions',
      'Tidal timing & crowd planning',
      'Seafront + sand dune compositions',
      'Multi-location route (Juhu → Versova option)',
      'Drone beach aerials available',
      '80–120 edited photographs',
      'Highlight reel add-on',
    ],
    startingPrice: '₹25,000',
    nearbyAreas: ['Versova', 'Andheri West', 'Santacruz', 'Vile Parle', 'JVLR'],
    faqs: [
      {
        q: 'What time should we schedule the Juhu shoot?',
        a: 'Sunrise (6–8 AM) and golden hour / sunset (5:30–7 PM) are ideal. Mid-day harsh light is best avoided. We check tide tables before confirming your shoot time.',
      },
      {
        q: 'Is drone photography allowed at Juhu Beach?',
        a: 'Drone usage at Juhu falls under DGCA regulations and proximity to Santa Cruz airport requires prior ANPA clearance. We handle the clearance process and will confirm feasibility for your shoot date.',
      },
      {
        q: 'Can we include a location other than the beach?',
        a: 'Yes — many couples pair Juhu beach (sunrise) with Versova village (rustic vibe) or the JVLR bridge area (urban). We design a route that covers 2–3 moods in one day.',
      },
    ],
    albumCategory: 'Pre-Weddings',
    seo: {
      title: 'Pre-Wedding Shoot at Juhu Beach, Mumbai | The Flash Room Studio',
      description:
        'Pre-wedding photography at Juhu Beach — golden sunrise, dramatic sunsets, and drone aerials. Natural candid style. Starting ₹25,000.',
      keywords: [
        'pre-wedding shoot Juhu Beach',
        'Juhu beach couple photography',
        'pre-wedding photography Juhu Mumbai',
        'beach pre-wedding shoot Mumbai',
        'Juhu pre-wedding photographer',
      ],
    },
  },

  {
    slug: 'pre-wedding-shoot-powai',
    service: 'Pre-Wedding Photography',
    location: 'Powai',
    locationFull: 'Powai, Mumbai',
    heroHeadline: 'Pre-Wedding Shoot in Powai',
    heroSub: 'Lakeside serenity and European-style architecture.',
    intro: [
      'Powai offers a completely different energy to Mumbai\'s coastal pre-wedding spots. The calm expanse of Powai Lake, the neo-classical architecture of Hiranandani Gardens, lush IIT Bombay greenery, and the neighbourhood\'s manicured streetscapes give couples a European-influenced backdrop without leaving the city.',
      'It\'s a favourite for couples who want something quieter and more intimate — wide open spaces, reflections on water, and dappled forest light. The Flash Room Studio leverages Powai\'s unique character to create portraits that look nothing like a typical Mumbai shoot.',
    ],
    features: [
      'Powai Lake sunrise + lakeside sessions',
      'Hiranandani Gardens architecture frames',
      'IIT Bombay greenery & forest paths',
      'Quiet, crowd-free environment',
      '80–120 edited photographs',
      'Multi-location route within Powai',
      'Highlight reel add-on available',
    ],
    startingPrice: '₹25,000',
    nearbyAreas: ['Vikhroli', 'Kanjurmarg', 'Ghatkopar', 'Bhandup', 'Chandivali'],
    faqs: [
      {
        q: 'Is Powai Lake accessible for couple photography?',
        a: 'The public promenade around Powai Lake is open for photography. Some sections near IIT Bombay require campus permission — we handle this in advance. The lake area is particularly beautiful at sunrise and dusk.',
      },
      {
        q: 'What makes Hiranandani Gardens a good shoot location?',
        a: 'The neo-classical stone buildings, wide walkways, and manicured gardens create a European aesthetic that\'s very different from typical Mumbai backdrops. It works exceptionally well for ethnic as well as western looks.',
      },
      {
        q: 'Can we combine Powai with a nearby outdoor forest location?',
        a: 'Yes — Aarey Milk Colony and Sanjay Gandhi National Park are within 20–25 minutes of Powai and offer dense forest light for a completely different mood in the same shoot day.',
      },
    ],
    albumCategory: 'Pre-Weddings',
    seo: {
      title: 'Pre-Wedding Shoot in Powai, Mumbai | The Flash Room Studio',
      description:
        'Pre-wedding photography at Powai Lake and Hiranandani Gardens — serene, European-style backdrops in Mumbai. Starting ₹25,000.',
      keywords: [
        'pre-wedding shoot Powai',
        'Powai Lake couple photography',
        'Hiranandani Gardens pre-wedding',
        'pre-wedding photography Powai Mumbai',
        'couple shoot Powai',
      ],
    },
  },

  // ─── Wedding Videography ──────────────────────────────────────────────────
  {
    slug: 'wedding-videography-mumbai',
    service: 'Wedding Videography',
    location: 'Mumbai',
    locationFull: 'Mumbai, Maharashtra',
    heroHeadline: 'Wedding Videography in Mumbai',
    heroSub: 'Cinematic films that bring your wedding day back to life.',
    intro: [
      'A wedding film does what photographs cannot — it carries the sound of your vows, the laughter during the pheras, and the music of the sangeet into every future viewing. The Flash Room Studio\'s videography team specialises in cinematic storytelling: handheld intimacy, drone aerials, and multi-camera setups that capture every angle of the day.',
      'We produce everything from 3–5 minute emotional highlight reels to full 15–20 minute wedding films. Every film is colour-graded, scored, and edited to feel like something you\'d want to watch again and again — not just once.',
    ],
    features: [
      '2–3 cinematographers on the day',
      '3–5 min cinematic highlight reel',
      'Full 15–20 min wedding film option',
      'Multi-camera ceremony coverage',
      'Drone aerial footage (where permitted)',
      'Professional colour grade + score',
      'Delivered as downloadable + streaming link',
      'Same-day edit teaser available',
    ],
    startingPrice: '₹50,000',
    nearbyAreas: ['Bandra', 'Andheri', 'Juhu', 'Thane', 'Navi Mumbai'],
    faqs: [
      {
        q: 'What is the difference between a highlight reel and a full wedding film?',
        a: 'A highlight reel (3–5 min) captures the emotional peaks of your day — vows, first look, first dance, key candid moments — set to music. A full wedding film (15–20 min) includes the complete ceremony, speeches, rituals, and reception in narrative form. Many couples order both.',
      },
      {
        q: 'Do you shoot in 4K?',
        a: 'Yes — we shoot in 4K on cinema-grade cameras. Your film will look stunning on any screen, from mobile to a 65" TV, now and decades from now.',
      },
      {
        q: 'Can we provide our own music for the film?',
        a: 'Absolutely. We encourage couples to share 3–5 songs they love, and our editors select the best musical fit for each section of the film. We clear licensing for the final deliverable.',
      },
      {
        q: 'How long does it take to receive the final film?',
        a: 'Highlight reels are delivered within 4–6 weeks. Full wedding films take 6–10 weeks depending on length. Rush delivery is available for an additional fee.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Videography in Mumbai | The Flash Room Studio',
      description:
        'Cinematic wedding videography in Mumbai — 4K highlight reels, full wedding films, drone aerials. The Flash Room Studio. Starting ₹50,000.',
      keywords: [
        'wedding videography Mumbai',
        'wedding cinematographer Mumbai',
        'wedding film Mumbai',
        'cinematic wedding video Mumbai',
        'wedding highlight reel Mumbai',
        'best wedding videographer Mumbai',
      ],
    },
  },

  // ─── Bhandup (home base) ─────────────────────────────────────────────────
  {
    slug: 'wedding-photography-bhandup',
    service: 'Wedding Photography',
    location: 'Bhandup',
    locationFull: 'Bhandup, Mumbai',
    heroHeadline: 'Wedding Photography in Bhandup',
    heroSub: 'Your neighbourhood studio — local expertise, world-class results.',
    intro: [
      'Bhandup is home to The Flash Room Studio. We are not photographers who drive in from elsewhere — we live and work here, know the venues intimately, and have built relationships with the banquet halls, mandap decorators, and caterers that serve this community.',
      'From celebrations at popular Bhandup banquet halls to intimate home ceremonies in the area, we bring the same creative standard to every booking. Being local means faster response times, no travel surcharge, and a team that genuinely cares about the neighbourhood it serves.',
      'We cover Bhandup, Kanjurmarg, Nahur, Mulund, Vikhroli, and surrounding areas — often the same day you reach out.',
    ],
    features: [
      'No travel surcharge — we are based in Bhandup',
      'Same-day availability checks',
      'Familiar with all local venues & mandaps',
      'Full ceremony & reception coverage',
      'Candid + traditional photographers',
      'Cinematic highlight reel option',
      'Drone available (subject to permissions)',
      'Online gallery + printed album options',
    ],
    startingPrice: '₹45,000',
    nearbyAreas: ['Kanjurmarg', 'Nahur', 'Mulund', 'Vikhroli', 'Powai', 'Ghatkopar'],
    faqs: [
      {
        q: 'Are you really based in Bhandup?',
        a: 'Yes — The Flash Room Studio is headquartered in Bhandup, Mumbai. There is no travel surcharge for events within Bhandup, Kanjurmarg, Nahur, or Mulund.',
      },
      {
        q: 'Which Bhandup wedding venues do you cover?',
        a: 'We regularly photograph at banquet halls and community halls across Bhandup West and East, as well as home ceremonies and garden events. Contact us with your venue and we will confirm our familiarity with it.',
      },
      {
        q: 'Can you accommodate last-minute bookings in Bhandup?',
        a: 'Being local means we can sometimes accommodate bookings on shorter notice than a studio travelling from the other side of the city. Reach out as early as possible — we will do our best to make it work.',
      },
      {
        q: 'Do you offer pre-wedding shoots near Bhandup?',
        a: 'Yes — Powai Lake and Sanjay Gandhi National Park are both within 20 minutes of Bhandup and make excellent pre-wedding shoot locations. We can combine your pre-wedding and wedding booking for a discounted package.',
      },
    ],
    albumCategory: 'Weddings',
    seo: {
      title: 'Wedding Photography in Bhandup, Mumbai | The Flash Room Studio',
      description:
        'The Flash Room Studio is based in Bhandup, Mumbai. Local wedding photographers with no travel surcharge — covering Bhandup, Kanjurmarg, Mulund & beyond. Starting ₹45,000.',
      keywords: [
        'wedding photography Bhandup',
        'wedding photographer Bhandup Mumbai',
        'candid photographer Bhandup',
        'wedding photos Bhandup',
        'photographer near Bhandup',
        'wedding photography Kanjurmarg',
        'wedding photography Mulund',
      ],
    },
  },

  // ─── Event Photography ────────────────────────────────────────────────────
  {
    slug: 'event-photography-mumbai',
    service: 'Event Photography',
    location: 'Mumbai',
    locationFull: 'Mumbai, Maharashtra',
    heroHeadline: 'Event Photography in Mumbai',
    heroSub: 'Corporate events, birthdays, celebrations — every moment documented.',
    intro: [
      'Whether it\'s a corporate annual dinner, a product launch, a milestone birthday, a baby shower, or a private celebration, events deserve the same photographic attention as weddings. The Flash Room Studio provides professional event photography across all of Mumbai — delivering edited galleries that capture the energy, the people, and the details that made your event special.',
      'Our event photographers blend into the crowd, capture candid audience moments, and also handle structured group and portrait shots. Fast turnaround options available for events that need social media content the same evening.',
    ],
    features: [
      'Corporate events & award nights',
      'Birthday & milestone celebrations',
      'Baby showers & maternity events',
      'Product launches & brand events',
      'Full event + candid coverage',
      'Same-day preview gallery available',
      'Group + individual portrait sessions',
      'No travel surcharge within Mumbai',
    ],
    startingPrice: '₹15,000',
    nearbyAreas: ['BKC', 'Andheri', 'Lower Parel', 'Powai', 'Navi Mumbai'],
    faqs: [
      {
        q: 'Do you cover corporate events and conferences?',
        a: 'Yes — we cover corporate events including annual galas, award ceremonies, conferences, product launches, and brand activations across Mumbai\'s major event venues in BKC, Lower Parel, Andheri, and Powai.',
      },
      {
        q: 'Can we get a same-evening turnaround for social media?',
        a: 'Yes — we offer a same-day edit of 30–50 selected and lightly retouched images, delivered via WeTransfer or Google Drive within 3–4 hours of the event ending. This is available as an add-on.',
      },
      {
        q: 'How many photographers do you send for a large event?',
        a: 'For events up to 150 guests, 1 photographer is usually sufficient. For 150–400 guests, we recommend 2 photographers. For larger events or multi-room setups, 3+ photographers ensure comprehensive coverage.',
      },
    ],
    albumCategory: 'Events',
    seo: {
      title: 'Event Photography in Mumbai | The Flash Room Studio',
      description:
        'Professional event photography in Mumbai — corporate events, birthdays, baby showers, brand launches. Same-day gallery available. Starting ₹15,000.',
      keywords: [
        'event photography Mumbai',
        'event photographer Mumbai',
        'corporate event photographer Mumbai',
        'birthday photographer Mumbai',
        'baby shower photography Mumbai',
        'event photography BKC Mumbai',
      ],
    },
  },
];

/** Quick lookup: slug → page data */
export const LOCATION_PAGE_MAP = new Map(
  LOCATION_PAGES.map((p) => [p.slug, p]),
);
