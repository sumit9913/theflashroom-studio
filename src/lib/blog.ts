export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; heading: string; text: string }
  | { type: 'cta'; text: string; link: string; label: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  excerpt: string;
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-pre-wedding-shoot-locations-mumbai',
    title: 'Best Pre-Wedding Shoot Locations in Mumbai (2026 Guide)',
    description:
      'Looking for the perfect pre-wedding shoot location in Mumbai? From Marine Drive to Sanjay Gandhi National Park, here are the 10 best spots — with tips on timing, permits, and what to expect.',
    date: '2026-03-15',
    readTime: '7 min',
    category: 'Pre-Wedding',
    keywords: [
      'pre-wedding shoot locations Mumbai',
      'best places for pre-wedding shoot Mumbai',
      'pre-wedding photography locations Mumbai',
      'couple photography Mumbai',
      'pre-wedding shoot ideas Mumbai',
    ],
    excerpt:
      'Mumbai offers something no other city can — the ocean, colonial architecture, lush forests, and vibrant streets all within an hour of each other. Here are the 10 locations we love most for pre-wedding shoots.',
    content: [
      {
        type: 'p',
        text: 'Mumbai is unlike any other city in India for pre-wedding photography. Within a single day, you can shoot against the Arabian Sea at golden hour, walk through colonial-era streets in Colaba, and disappear into the quiet forests of Borivali. The variety is extraordinary — and for couples who want images that feel cinematic and personal, Mumbai delivers.',
      },
      {
        type: 'p',
        text: 'After shooting hundreds of pre-wedding sessions across the city, here are the locations we recommend most — along with honest notes on timing, crowds, and logistics.',
      },
      {
        type: 'h2',
        text: "1. Marine Drive — The Queen's Necklace",
      },
      {
        type: 'p',
        text: "Marine Drive is Mumbai's most iconic stretch — the wide promenade curving along the sea, flanked by Art Deco buildings. At sunrise (5:30–6:30 AM) or the hour before sunset, the light turns golden and the crowds are thin. You get a warm, cinematic glow that makes every frame look effortless.",
      },
      {
        type: 'tip',
        heading: 'Best time',
        text: 'Sunrise for soft empty streets. Avoid weekends 6–9 PM when it gets very crowded.',
      },
      {
        type: 'h2',
        text: '2. Bandra Bandstand & Carter Road',
      },
      {
        type: 'p',
        text: "The rocky sea wall at Bandstand, with waves crashing in the background, is one of Mumbai's most dramatic backdrops. Carter Road nearby offers a long promenade with the open sea on one side. Both locations have a relaxed, urban energy that works beautifully for modern, candid couple portraits.",
      },
      {
        type: 'ul',
        items: [
          'Bandstand rocks: dramatic, textured, especially at high tide',
          'Carter Road promenade: casual, golden-hour walks',
          'Mount Mary Church steps: heritage + soft light in the afternoon',
        ],
      },
      {
        type: 'h2',
        text: '3. Gateway of India & Colaba',
      },
      {
        type: 'p',
        text: "The Gateway of India is one of India's most recognised landmarks, and it photographs spectacularly in the early morning before crowds arrive. Colaba's streets — with their colonial architecture, old cafes, and leafy lanes — are perfect for editorial-style couple portraits.",
      },
      {
        type: 'tip',
        heading: 'Logistics note',
        text: 'Arrive by 6:30 AM on weekdays. Weekends bring tourist crowds that make shooting difficult from 8 AM onwards.',
      },
      {
        type: 'h2',
        text: '4. Worli Sea Face & Bandra-Worli Sea Link',
      },
      {
        type: 'p',
        text: 'The Sea Link in the background creates a stunning, modern Mumbai skyline for your photos. The Worli Sea Face promenade offers wide open spaces without the crowds of Marine Drive. This location works especially well at twilight — right after the sun sets and the bridge lights up.',
      },
      {
        type: 'h2',
        text: '5. Sanjay Gandhi National Park, Borivali',
      },
      {
        type: 'p',
        text: 'For couples who want something completely different from the sea — lush green forest, bamboo groves, streams, and dappled light through the canopy. SGNP gives you a destination-wedding feel without leaving the city. Entry permits are required and shooting spots are limited, so plan in advance.',
      },
      {
        type: 'tip',
        heading: 'Permit required',
        text: 'Professional photography requires permission from the Forest Department. We handle this for our clients.',
      },
      {
        type: 'h2',
        text: '6. Powai Lake & Hiranandani',
      },
      {
        type: 'p',
        text: 'Powai Lake offers calm water reflections, early-morning mist, and a serene backdrop unlike anything else in Mumbai. Nearby Hiranandani township adds an interesting contrast — wide European-style roads and architecture that look nothing like typical Mumbai.',
      },
      {
        type: 'h2',
        text: '7. Versova Beach',
      },
      {
        type: 'p',
        text: "Versova is Mumbai's best-kept secret for beach photography. Less crowded than Juhu, with traditional fishing boats pulled up on the sand that give every frame a timeless, textured character. The sunset here is spectacular, and the golden light bouncing off the water creates a magical quality.",
      },
      {
        type: 'h2',
        text: '8. Crawford Market & Chor Bazaar',
      },
      {
        type: 'p',
        text: "For couples who love colour and energy — the streets around Crawford Market and Chor Bazaar offer vibrant walls, old doorways, stacked merchandise, and a distinctly Mumbai character that's perfect for fun, bold street-style photography.",
      },
      {
        type: 'h2',
        text: '9. Elephanta Island (Day Trip)',
      },
      {
        type: 'p',
        text: 'A 45-minute ferry ride from the Gateway of India, Elephanta Island offers ancient cave temples, lush greenery, and a completely different world. The ferry ride itself is great for candid shots. Best for couples who want something truly unique and unhurried.',
      },
      {
        type: 'h2',
        text: '10. Alibaug (Weekend Getaway)',
      },
      {
        type: 'p',
        text: 'Alibaug, just a 2-hour drive or a 1-hour catamaran from Mumbai, gives you open beaches, old Portuguese-style houses, and a rustic, laid-back atmosphere that feels far removed from the city. Perfect for couples who want a destination-shoot feel without the destination travel cost.',
      },
      {
        type: 'h2',
        text: 'Quick Tips for Your Mumbai Pre-Wedding Shoot',
      },
      {
        type: 'ol',
        items: [
          'Golden hour (6–7:30 AM and 5:30–7 PM) gives the best natural light — plan your shoot around these windows',
          'Avoid peak Mumbai summer (April–May) — the heat and harsh midday light make shooting uncomfortable',
          'Post-monsoon (October–November) is ideal — lush greenery, cooler weather, and rich blue skies',
          'Carry water and snacks — a full pre-wedding session runs 4–6 hours',
          'Plan 2–3 outfit changes and scout the locations with your photographer in advance',
        ],
      },
      {
        type: 'cta',
        text: "Looking for a photographer who knows Mumbai inside out? We've shot pre-weddings at every location on this list.",
        link: '/contact',
        label: 'Plan Your Pre-Wedding Shoot',
      },
    ],
  },

  {
    slug: 'wedding-photography-cost-india',
    title: 'How Much Does Wedding Photography Cost in India? (2026 Breakdown)',
    description:
      "A complete, honest breakdown of wedding photography and videography prices in India — from budget packages at ₹30,000 to premium multi-day coverage at ₹5 lakh+. Know exactly what you're paying for.",
    date: '2026-03-10',
    readTime: '8 min',
    category: 'Planning',
    keywords: [
      'wedding photography cost India',
      'wedding photographer price Mumbai',
      'how much does wedding photography cost',
      'wedding photography packages India price',
      'wedding videography cost India',
    ],
    excerpt:
      "Wedding photography is one of the biggest investments you'll make for your big day — and also the one you'll look at for the rest of your life. Here's a clear, no-fluff breakdown of what it actually costs in India.",
    content: [
      {
        type: 'p',
        text: 'Photography is the only thing from your wedding that lasts forever. The flowers fade, the food is eaten, the venue is just a memory — but the photos and films stay. And yet, pricing in India is notoriously unclear, with wildly different quotes for seemingly similar packages. This guide breaks it down honestly.',
      },
      {
        type: 'h2',
        text: 'The Three Price Tiers',
      },
      {
        type: 'h3',
        text: 'Budget: ₹30,000 – ₹80,000',
      },
      {
        type: 'p',
        text: 'At this level, you typically get a single photographer for 6–8 hours, 300–500 edited photos delivered via Google Drive, and no video. The photographer may be newer, still building their portfolio. The work can be excellent — many talented photographers start here — but expect less creative direction, fewer candid moments, and slower turnaround (often 30–60 days).',
      },
      {
        type: 'ul',
        items: [
          '1 photographer, 6–8 hours',
          '300–500 edited photos',
          'Basic colour correction',
          'Digital delivery only',
          'No video, no album',
        ],
      },
      {
        type: 'h3',
        text: 'Mid-Range: ₹80,000 – ₹2,00,000',
      },
      {
        type: 'p',
        text: 'This is where most Mumbai weddings land. At this level you get a proper team — typically 2 photographers — covering both the bride and groom getting ready, the ceremony, and the reception. A short video highlights reel (3–5 minutes) is often included. Photos are properly edited with attention to colour, composition, and emotion. Turnaround is usually 3–4 weeks.',
      },
      {
        type: 'ul',
        items: [
          '2 photographers, 8–12 hours',
          '600–1000 edited photos',
          'Full ceremony + reception coverage',
          'Video highlights reel (3–5 min)',
          'Online gallery with download',
          'Some packages include a basic album',
        ],
      },
      {
        type: 'h3',
        text: 'Premium: ₹2,00,000 – ₹5,00,000+',
      },
      {
        type: 'p',
        text: "Premium coverage means a full creative team — lead photographer, second photographer, a cinematographer, possibly a drone operator — covering multiple events across multiple days. You get a full-length cinematic wedding film (15–30 minutes), a short film, a photo album, and usually a pre-wedding shoot included. The difference isn't just quantity — it's the quality of storytelling, the experience on the day, and the artistic direction.",
      },
      {
        type: 'ul',
        items: [
          'Full team: 3–5 people',
          'Multi-day coverage (mehndi, sangeet, haldi, wedding, reception)',
          '1500+ edited photos across all events',
          'Full cinematic wedding film (15–30 min)',
          'Short film / highlight reel',
          'Drone coverage',
          'Premium photo album',
          'Pre-wedding shoot often included',
        ],
      },
      {
        type: 'h2',
        text: 'What Factors Affect the Final Price?',
      },
      {
        type: 'h3',
        text: 'Number of Events',
      },
      {
        type: 'p',
        text: 'A single 4-hour nikah or court wedding is priced very differently from a 3-day celebration with mehndi night, haldi morning, sangeet evening, wedding ceremony, and reception. Each event requires the team to be present for 6–10 hours. Most photographers quote per event or per day.',
      },
      {
        type: 'h3',
        text: 'Team Size',
      },
      {
        type: 'p',
        text: "A single photographer cannot be in two places at once. At a wedding, you want someone with the bride while she's getting ready and someone capturing guests arriving. A 2-photographer team doubles the coverage. Add a cinematographer and drone operator and costs increase proportionally.",
      },
      {
        type: 'h3',
        text: 'Deliverables',
      },
      {
        type: 'p',
        text: 'Photos-only vs photos + video is the biggest differentiator. A full cinematic wedding film requires additional crew, different equipment, and significantly more editing time (a 20-minute film can take 40–60 hours of post-production). Albums are also a significant add-on — a quality flush-mount album starts at ₹15,000–₹30,000.',
      },
      {
        type: 'h3',
        text: 'Season & Demand',
      },
      {
        type: 'p',
        text: 'Wedding season in India (November to February, and again in April–May) commands higher prices. The most popular dates — auspicious muhurat days — book up months in advance. Off-season weddings (June–September) often get better rates.',
      },
      {
        type: 'h3',
        text: 'Destination Weddings',
      },
      {
        type: 'p',
        text: "If your wedding is outside the photographer's home city, factor in travel, accommodation, and per diem costs for the entire team. A Mumbai-based team shooting a Udaipur wedding will typically add ₹20,000–₹50,000+ in travel costs on top of the base package.",
      },
      {
        type: 'h2',
        text: 'How to Get an Accurate Estimate',
      },
      {
        type: 'p',
        text: "The best way to know exactly what you'll pay is to use a package calculator. At The Flash Room Studio, you can select exactly what you need — number of photographers, events, drone, reels, albums — and get a real estimate instantly. No hidden fees, no vague quotes.",
      },
      {
        type: 'tip',
        heading: 'Book early',
        text: 'For weddings during peak season (Nov–Feb), good photographers book up 4–6 months in advance. The best dates go first. A deposit typically holds your date.',
      },
      {
        type: 'cta',
        text: 'Build your custom package and get an instant price estimate — no calls required.',
        link: '/calculator',
        label: 'Use the Package Calculator',
      },
    ],
  },

  {
    slug: 'what-to-wear-pre-wedding-shoot',
    title: 'What to Wear for a Pre-Wedding Shoot: Complete Outfit Guide',
    description:
      'Not sure what to wear for your pre-wedding photoshoot? This guide covers colour coordination, outfit changes, what to avoid, and practical tips for looking your best in every frame.',
    date: '2026-03-05',
    readTime: '6 min',
    category: 'Pre-Wedding',
    keywords: [
      'what to wear pre-wedding shoot',
      'pre-wedding shoot outfit ideas India',
      'pre-wedding shoot dress',
      'couple outfit ideas pre-wedding',
      'pre-wedding photography tips',
    ],
    excerpt:
      "What you wear to your pre-wedding shoot affects every single photo. The right outfits create timeless images. The wrong ones — busy prints, mismatched colours, logos — distract from the two of you. Here's everything you need to know.",
    content: [
      {
        type: 'p',
        text: "Your outfit is the first thing that draws the eye in a photograph, before the location, before the light, before anything else. Getting it right doesn't mean spending a fortune — it means understanding a few simple principles that make a huge difference on camera.",
      },
      {
        type: 'h2',
        text: 'How Many Outfit Changes?',
      },
      {
        type: 'p',
        text: 'We recommend 2–3 outfit changes for a full pre-wedding session. This gives you variety — different moods, different styles — without spending your entire day changing clothes. A typical sequence:',
      },
      {
        type: 'ol',
        items: [
          'Outfit 1 (first 90 minutes): Elegant and dressy — a lehenga, saree, or formal western look. Use this for the most iconic, posed shots at the hero location.',
          'Outfit 2 (middle section): Casual and relaxed — jeans, a flowy dress, or kurta-and-churidar. This works beautifully for candid, playful shots.',
          'Outfit 3 (optional, last 30 minutes): A simple, classic look for golden-hour portraits — a solid-colour kurta or a simple dress.',
        ],
      },
      {
        type: 'h2',
        text: "Coordinate — Don't Match",
      },
      {
        type: 'p',
        text: 'The biggest mistake couples make is wearing identical colours. Wearing the exact same shade makes the photo feel flat. Instead, choose colours that complement each other — sitting in the same palette without being identical.',
      },
      {
        type: 'ul',
        items: [
          'Dusty rose + burgundy — warm, romantic',
          'Navy blue + champagne — classic, elegant',
          'Olive green + off-white — natural, earthy',
          'Mustard yellow + deep teal — vibrant, bold',
          'Ivory + soft grey — timeless, clean',
        ],
      },
      {
        type: 'h2',
        text: 'What Photographs Well',
      },
      {
        type: 'p',
        text: 'Solid colours, soft textures, and simple cuts almost always look better on camera than complex patterns. The camera flattens everything slightly, so what looks subtle in real life can look busy or overwhelming in a photo.',
      },
      {
        type: 'ul',
        items: [
          'Solid colours, especially pastels and muted tones',
          'Soft fabrics — chiffon, georgette, linen — that move beautifully',
          'Simple, well-tailored cuts',
          'Subtle embroidery and embellishments (not heavy stone-work)',
          'Classic ethnic wear — sarees, lehengas, anarkalis',
        ],
      },
      {
        type: 'h2',
        text: 'What to Avoid',
      },
      {
        type: 'ul',
        items: [
          'Large logos, brand names, or text — they distract immediately',
          'Busy prints (heavy florals, checks, stripes) — they compete with your face',
          'Neon or very bright colours — they "bleed" into the frame and don\'t hold in skin tones',
          'Very dark colours next to very light (e.g., all-black + all-white) in harsh midday sun',
          "Clothes you've never worn before — you'll be uncomfortable and it shows",
          "Shoes that hurt — you'll be walking, crouching, and standing for 4–6 hours",
        ],
      },
      {
        type: 'h2',
        text: 'Accessories',
      },
      {
        type: 'p',
        text: 'Less is more. One statement piece per person is the rule. A bold necklace, a beautiful watch, or a statement earring draws the eye in a good way. Wearing all your jewellery at once creates visual noise.',
      },
      {
        type: 'tip',
        heading: 'Jewellery tip',
        text: 'For outdoor shoots, avoid highly reflective jewellery (polished gold, mirrored pieces) — they can catch the sun and create harsh glare in photos.',
      },
      {
        type: 'h2',
        text: 'Hair & Makeup',
      },
      {
        type: 'p',
        text: "For photos, makeup needs to be slightly more than what you\'d wear daily — camera lenses naturally flatten features. Ask your makeup artist for a \'photo-ready\' look rather than your everyday base. Avoid ultra-matte foundations in harsh light — they can look flat.",
      },
      {
        type: 'p',
        text: 'For hair, blown-out and open hair almost always photographs better than a very tight bun or ponytail — the movement and volume add dimension. If you love your hair up, a soft updo with face-framing pieces works beautifully.',
      },
      {
        type: 'h2',
        text: 'Season & Location Considerations',
      },
      {
        type: 'p',
        text: "If you\'re shooting in summer (April–June), avoid heavy fabrics — you\'ll overheat quickly and it shows in photos. Light linen, cotton, or chiffon will keep you comfortable. For beach locations, flowy fabrics create movement in the breeze. For forest/garden locations, earthy greens and rusts blend beautifully with the surroundings.",
      },
      {
        type: 'cta',
        text: 'Want outfit advice specific to your shoot location? We share a detailed guide with all our pre-wedding clients.',
        link: '/contact',
        label: 'Book a Consultation',
      },
    ],
  },

  {
    slug: 'haldi-ceremony-photography-tips',
    title: 'Haldi Ceremony Photography: 8 Tips for Stunning Shots',
    description:
      "Haldi is the most joyful, chaotic, and colourful event in an Indian wedding. Here's how to photograph it — and what to tell your photographer — for images that capture every emotion.",
    date: '2026-02-28',
    readTime: '5 min',
    category: 'Wedding',
    keywords: [
      'haldi ceremony photography',
      'haldi ceremony photographer Mumbai',
      'how to photograph haldi ceremony',
      'haldi photography tips',
      'Indian wedding ceremony photography',
    ],
    excerpt:
      "The Haldi ceremony is pure, unscripted joy — turmeric flying, family laughing, the bride or groom turning gold. It's also one of the hardest ceremonies to photograph well. Here's what makes the difference.",
    content: [
      {
        type: 'p',
        text: "The Haldi ceremony has no script. Nobody is walking down an aisle or exchanging rings. It\'s entirely spontaneous — family members applying turmeric paste, cousins launching into full comedy, grandmothers getting emotional. That chaos is exactly what makes it the most photogenic event in the entire wedding.",
      },
      {
        type: 'p',
        text: "But it\'s also a photographer\'s nightmare if they\'re not prepared. Here are 8 things that separate great Haldi coverage from mediocre shots.",
      },
      {
        type: 'h2',
        text: "1. Timing: Don't Shoot in Harsh Midday Sun",
      },
      {
        type: 'p',
        text: "Haldi ceremonies are often held outdoors in the morning. If you\'re shooting between 10 AM and 2 PM, harsh overhead sunlight creates unflattering shadows under eyes and nose. Try to position the subject in open shade — under a canopy, a tree, or the shadow of a building — where light is even and soft. If you must shoot in direct sun, ask your photographer to use fill flash to balance the shadows.",
      },
      {
        type: 'h2',
        text: '2. Embrace the Chaos — Candid Over Posed',
      },
      {
        type: 'p',
        text: 'The moment you stop the ceremony to pose everyone, you lose the magic. The best Haldi shots happen when people forget the camera is there. A good photographer will hang back, use a medium telephoto lens (85mm–135mm), and capture reactions — the gasp when cold turmeric hits, the cousin who goes too far, the bride trying not to laugh.',
      },
      {
        type: 'tip',
        heading: 'Tell your photographer this',
        text: "I want candid reactions, not posed smiles. Don't stop anyone for a photo — catch us in the moment.",
      },
      {
        type: 'h2',
        text: '3. Protect the Camera Gear',
      },
      {
        type: 'p',
        text: "Turmeric is destructive to camera equipment — it stains sensors, gets into buttons, and is extremely difficult to clean. An experienced wedding photographer will come prepared with weather-sealed camera bodies, lens cloths, and a backup setup. Ask your photographer specifically if they\'ve shot Haldi ceremonies before and how they protect their gear.",
      },
      {
        type: 'h2',
        text: '4. The Key Shots to Prioritise',
      },
      {
        type: 'ul',
        items: [
          'Close-up of hands applying the turmeric paste — texture, colour, connection',
          "The bride or groom's face during application — closed eyes, expression of surrender",
          'Family members in action — parents, siblings, cousins applying together',
          'The brass plate with haldi, flowers, and kumkum — a beautiful detail shot',
          'Full-body shot of the bride/groom when fully yellow — vibrant and joyful',
          'Group reactions when turmeric flies — this is where the best candid moments happen',
          'The emotional moments — parents getting teary, grandparents watching',
        ],
      },
      {
        type: 'h2',
        text: '5. Ask for a Clean Portrait Window',
      },
      {
        type: 'p',
        text: "Before the ceremony begins — or right at the start — take 10 minutes for a clean portrait session. The bride or groom in fresh clothes, the family dressed up, before anyone is covered in turmeric. These posed, clean portraits are often the most-printed photos from the day. Once the haldi starts, it\'s chaos from there.",
      },
      {
        type: 'h2',
        text: '6. Capture the Details',
      },
      {
        type: 'p',
        text: "The story of a Haldi ceremony is told as much in the details as in the people. Marigold garlands, banana leaves, the priest\'s offerings, diyas, the turmeric staining the floor — these contextual shots transform an album from a collection of portraits into a story.",
      },
      {
        type: 'h2',
        text: '7. Coordinate the Family Early',
      },
      {
        type: 'p',
        text: 'Ask everyone who should be in the ceremony to be present 15 minutes before it begins. The one photo families regret most is not having the immediate family together in frame. Once the ceremony starts and turmeric starts flying, getting everyone to stop and gather is nearly impossible.',
      },
      {
        type: 'h2',
        text: '8. Have Fun With It',
      },
      {
        type: 'p',
        text: "The Haldi is the one event where literally nothing can go wrong — it\'s supposed to be messy and chaotic and joyful. The best images come from couples who lean into that energy. Don\'t worry about your hair, your outfit, or the perfect pose. The camera loves joy.",
      },
      {
        type: 'cta',
        text: "We've photographed Haldi ceremonies across Mumbai, Delhi, Pune, and Bangalore. Each one is different — each one is magical.",
        link: '/portfolio',
        label: 'See Our Ceremony Photography',
      },
    ],
  },

  {
    slug: 'questions-to-ask-wedding-photographer',
    title: '10 Questions to Ask Your Wedding Photographer Before Booking',
    description:
      "Choosing a wedding photographer is one of the most important decisions you'll make. These 10 questions will help you find the right fit — and avoid expensive mistakes.",
    date: '2026-02-20',
    readTime: '6 min',
    category: 'Planning',
    keywords: [
      'questions to ask wedding photographer',
      'how to choose a wedding photographer India',
      'wedding photographer checklist',
      'hiring wedding photographer tips',
      'wedding photography booking guide',
    ],
    excerpt:
      "Most couples don\'t know what to ask when meeting a wedding photographer. They see beautiful photos and book. But the photos only tell part of the story. These 10 questions will tell you the rest.",
    content: [
      {
        type: 'p',
        text: "Your wedding photographer will be with you from the moment you start getting ready to the last dance of the night. You\'ll see them more than any other vendor on your wedding day. Choosing the right one isn\'t just about style — it\'s about trust, reliability, and professionalism. These questions help you find all three.",
      },
      {
        type: 'h2',
        text: '1. Can I see a full wedding gallery — not just highlights?',
      },
      {
        type: 'p',
        text: "Every photographer\'s website shows their best 20–30 shots. But what does a full gallery of 800 photos from a real wedding look like? Are the candid family moments as strong as the portrait? Is the reception coverage consistent? Asking to see a complete gallery reveals the full picture — literally.",
      },
      {
        type: 'h2',
        text: '2. Have you shot at our venue before?',
      },
      {
        type: 'p',
        text: "Venue experience matters. A photographer who knows the light at your venue at 6 PM, or the best corner for portraits, or which direction to face during the mandap ceremony, will capture much better images than one who\'s figuring it out for the first time. If they haven\'t shot your venue, ask if they\'ll do a site visit.",
      },
      {
        type: 'h2',
        text: '3. How many photographers will be present on the day?',
      },
      {
        type: 'p',
        text: "A single photographer cannot be everywhere at once. While the bride is getting ready, the groom\'s entry is happening outside. While the varmala is taking place, guests are reacting. A second photographer ensures nothing is missed. Ask exactly how many will be present, and what roles they each play.",
      },
      {
        type: 'h2',
        text: '4. What is your backup plan if something goes wrong?',
      },
      {
        type: 'p',
        text: "Camera equipment fails. Memory cards corrupt. Photographers fall ill. What happens then? A professional studio has backup camera bodies, backup lenses, redundant storage (photos saved to two cards simultaneously), and an associate who can step in if needed. If they don\'t have answers to this, that\'s a red flag.",
      },
      {
        type: 'tip',
        heading: 'Ask specifically',
        text: '"Do you shoot to dual cards?" This means photos are saved to two memory cards at the same time — so if one fails, nothing is lost.',
      },
      {
        type: 'h2',
        text: '5. What exactly is included in the package?',
      },
      {
        type: 'p',
        text: 'Get everything in writing. How many hours? How many photographers? What events are covered? How many edited photos? Video or no video? If video, what length? Albums? Drone? Reels? The difference between a ₹80,000 and a ₹1,00,000 quote often comes down to these specifics — not the quality of the photography itself.',
      },
      {
        type: 'h2',
        text: '6. How long until we receive the final photos?',
      },
      {
        type: 'p',
        text: "Turnaround times vary enormously — from 2 weeks to 6 months. Peak wedding season means studios are editing for multiple clients simultaneously. Ask for a specific timeline, and ask whether you\'ll receive a preview gallery (usually 50–100 photos) within the first week while the full edit is completed.",
      },
      {
        type: 'h2',
        text: '7. Who owns the rights to our wedding photos?',
      },
      {
        type: 'p',
        text: "In India, this is rarely discussed — but it matters. Typically, you receive a personal usage license (you can print, share, and keep the photos), while the photographer retains copyright and may use images in their portfolio. This is standard. What you want to confirm is that you\'re getting high-resolution files — not compressed web versions — and that there are no restrictions on printing.",
      },
      {
        type: 'h2',
        text: '8. Do you have a written contract?',
      },
      {
        type: 'p',
        text: 'No contract = no protection for you. A professional contract should specify: date, hours, number of photographers, deliverables, timeline, payment schedule, cancellation policy, and what happens if the photographer cannot attend. Never book based on a WhatsApp conversation alone.',
      },
      {
        type: 'h2',
        text: '9. What is your shooting style?',
      },
      {
        type: 'p',
        text: "Photography styles fall on a spectrum from fully candid (documentary — the photographer captures everything as it happens, never directing) to fully traditional (posed group shots at every stage). Most couples want a mix: candid emotion during the ceremony, some directed portraits during getting-ready and post-ceremony. Make sure your photographer\'s natural style matches what you want.",
      },
      {
        type: 'h2',
        text: '10. How do you handle family formals?',
      },
      {
        type: 'p',
        text: 'Family group photos are the ones your parents care most about. Ask if the photographer has a system for managing them — a list, an assigned family coordinator, a specific time slot. Without a plan, family formals become chaotic and take far too long, eating into your portrait time.',
      },
      {
        type: 'tip',
        heading: 'Bonus question',
        text: '"Have you worked with our other vendors — planner, venue, decorator?" Photographers who have existing relationships with your venue and team move faster and create fewer disruptions on the day.',
      },
      {
        type: 'cta',
        text: "Have more questions? We're happy to answer all of these — and anything else on your mind.",
        link: '/contact',
        label: 'Talk to Our Team',
      },
    ],
  },
  {
    slug: 'build-your-own-wedding-photography-package',
    title:
      'Build Your Own Wedding Photography Package — No Fixed Bundles, No Surprises',
    description:
      "Most photographers make you choose from 3 fixed packages and pay for things you don't need. Our free package calculator lets you build exactly what you want — service by service, with live pricing.",
    date: '2026-03-20',
    readTime: '5 min',
    category: 'Planning',
    keywords: [
      'wedding photography package calculator',
      'custom wedding photography package India',
      'wedding photography price estimate',
      'how to choose wedding photography package',
      'wedding photography packages Mumbai',
    ],
    excerpt:
      "Every wedding is different. A couple having a single-day court wedding needs something completely different from a couple with a 3-day celebration. So why do most photographers force you into the same three boxes? We don't.",
    content: [
      {
        type: 'p',
        text: "Go to almost any wedding photography studio's website in India and you'll find the same thing: Silver, Gold, and Platinum packages. The Silver doesn't have what you need. The Gold has three things you don't want. And the Platinum is priced for a Bollywood wedding. You end up overpaying for extras you'll never use, or negotiating awkwardly on a phone call just to get a straight answer.",
      },
      {
        type: 'p',
        text: "We built something different. The Flash Room Studio's Package Calculator lets you choose exactly what you need — service by service, quantity by quantity — and see the price update live as you build. No calls required. No waiting for a quote. No surprises.",
      },
      {
        type: 'h2',
        text: 'What You Can Build',
      },
      {
        type: 'p',
        text: "The calculator covers every service we offer, grouped into five categories. You pick the quantity of each — zero if you don't want it, more if you need it.",
      },
      {
        type: 'h3',
        text: 'Photography',
      },
      {
        type: 'ul',
        items: [
          "Candid Photographer — ₹15,000/day. Creative, emotion-first coverage. The person who catches your mother crying before you see her, the groom's face when you walk in.",
          'Traditional Photographer — ₹8,000/day. Classic posed and ceremonial coverage. The family group shots, the ritual documentation that your grandparents will want on the wall.',
        ],
      },
      {
        type: 'h3',
        text: 'Videography',
      },
      {
        type: 'ul',
        items: [
          'Traditional Videographer — ₹10,000/day. Full event video — everything documented from start to finish.',
          'Cinematographer — ₹20,000/day. Film-quality cinematic footage. The person who makes your wedding look like a film, not a recording.',
          'Reel Maker — ₹8,000/reel. Instagram and YouTube short reels — shareable, vertical-format content from your day.',
        ],
      },
      {
        type: 'h3',
        text: 'Add-ons',
      },
      {
        type: 'ul',
        items: [
          'Drone Videography — ₹12,000/session. Aerial shots, dramatic overheads of the venue, the baraat entry from above. If you have an outdoor ceremony or a grand venue, drone footage transforms your film.',
        ],
      },
      {
        type: 'h3',
        text: 'Albums',
      },
      {
        type: 'ul',
        items: [
          'Regular Album — ₹3,500. 12×15" flush mount, 20 spreads. A clean, beautiful album for everyday display.',
          'Premium Album — ₹7,500. 16×20" leather bound, 40 spreads. Heirloom quality — the kind that gets passed down.',
        ],
      },
      {
        type: 'h3',
        text: 'Films',
      },
      {
        type: 'ul',
        items: [
          'Short Highlight Film — ₹8,000. 3–5 minutes, cinematic, shareable. Perfect for Instagram and WhatsApp.',
          'Full Wedding Film — ₹15,000. 10–15 minutes. The complete story of your day — for you, your family, and your children someday.',
        ],
      },
      {
        type: 'h2',
        text: 'A Real Example',
      },
      {
        type: 'p',
        text: 'A couple planning a single-day wedding with a sangeet the evening before might build something like this:',
      },
      {
        type: 'ol',
        items: [
          '2 Candid Photographers × 2 days = ₹60,000',
          '1 Traditional Photographer × 2 days = ₹16,000',
          '1 Cinematographer × 1 day (wedding only) = ₹20,000',
          '1 Drone session = ₹12,000',
          '1 Short Highlight Film = ₹8,000',
          '1 Premium Album = ₹7,500',
        ],
      },
      {
        type: 'p',
        text: "Total: ₹1,23,500 + GST. You know exactly what you're getting and exactly what you're paying before you've even spoken to us. No guesswork.",
      },
      {
        type: 'h2',
        text: 'Why We Do It This Way',
      },
      {
        type: 'p',
        text: 'Most "packages" exist to benefit the studio, not the client. They bundle together services to increase the average sale. We\'d rather you build exactly what fits your wedding and your budget — even if that means a simpler setup. Happy clients come back. Happy clients send their friends.',
      },
      {
        type: 'p',
        text: "Pricing transparency is rare in this industry. We think it shouldn't be. You deserve to know what things cost before you invest your time in a phone call.",
      },
      {
        type: 'tip',
        heading: 'How the GST works',
        text: 'All prices shown in the calculator are exclusive of 18% GST, which is added at the summary step. This is standard across all professional photography services in India.',
      },
      {
        type: 'h2',
        text: 'How to Use the Calculator',
      },
      {
        type: 'ol',
        items: [
          'Go to theflashroom.in/calculator',
          'Use + and − to add the services and quantities you want',
          'Watch the total update live in the summary panel on the right',
          'When you\'re happy with your build, click "Get My Estimate" and enter your name, phone, and event date',
          "We'll receive your custom build and follow up within 24 hours to confirm availability and discuss details",
        ],
      },
      {
        type: 'p',
        text: "You're not locked in by submitting. It's just a starting point for the conversation — except instead of starting from zero, we already know exactly what you\'re looking for.",
      },
      {
        type: 'cta',
        text: 'Build your package right now — takes less than 2 minutes.',
        link: '/calculator',
        label: 'Open the Package Calculator',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
