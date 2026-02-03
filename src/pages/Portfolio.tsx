import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Filter } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import heroWedding from "@/assets/hero-wedding.jpg";
import prewedding from "@/assets/prewedding.jpg";
import babyshower from "@/assets/babyshower.jpg";
import haldi from "@/assets/haldi.jpg";
import sangeet from "@/assets/sangeet.jpg";
import birthday from "@/assets/birthday.jpg";
import phera from "@/assets/phera.jpg";
import event from "@/assets/event.jpg";

const categories = ["All", "Weddings", "Pre-Weddings", "Events", "Baby Showers", "Maternity", "Others"];

const portfolioItems = [
  { id: 1, src: heroWedding, category: "Weddings", title: "Priya & Rahul's Wedding", location: "Udaipur" },
  { id: 2, src: prewedding, category: "Pre-Weddings", title: "Sneha & Amit Pre-Wedding", location: "Jaipur" },
  { id: 3, src: haldi, category: "Weddings", title: "Traditional Haldi Ceremony", location: "Mumbai" },
  { id: 4, src: sangeet, category: "Weddings", title: "Sangeet Night Celebration", location: "Delhi" },
  { id: 5, src: phera, category: "Weddings", title: "Sacred Phera Ceremony", location: "Bangalore" },
  { id: 6, src: babyshower, category: "Baby Showers", title: "Godh Bharai Celebration", location: "Pune" },
  { id: 7, src: birthday, category: "Others", title: "50th Birthday Celebration", location: "Mumbai" },
  { id: 8, src: event, category: "Events", title: "Corporate Annual Dinner", location: "Hyderabad" },
  { id: 9, src: heroWedding, category: "Weddings", title: "Kavita & Vikram Wedding", location: "Goa" },
  { id: 10, src: prewedding, category: "Pre-Weddings", title: "Romantic Beach Shoot", location: "Goa" },
  { id: 11, src: sangeet, category: "Weddings", title: "Mehndi Night", location: "Jaipur" },
  { id: 12, src: babyshower, category: "Baby Showers", title: "Baby Shower Party", location: "Chennai" },
];

const reels = [
  { id: 1, title: "Priya & Rahul - Wedding Film", thumbnail: heroWedding },
  { id: 2, title: "Destination Wedding Highlights", thumbnail: phera },
  { id: 3, title: "Pre-Wedding Love Story", thumbnail: prewedding },
  { id: 4, title: "Sangeet Night Recap", thumbnail: sangeet },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Wedding Photography Portfolio in Mumbai | The Flash Room Studio</title>
        <meta
          name="description"
          content="Explore The Flash Room Studio portfolio—wedding, pre-wedding, event, maternity and baby shower photography & films. Mumbai-based team available Pan-India and internationally."
        />
        <link rel="canonical" href="https://theflashroom.in/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "The Flash Room Studio Portfolio",
            "url": "https://theflashroom.in/portfolio",
            "about": ["Wedding Photography", "Pre-Wedding Shoots", "Event Photography", "Baby Shower Photography"],
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Flash Room Studio",
              "url": "https://theflashroom.in"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Photography Portfolio Items",
              "itemListElement": portfolioItems.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": `${p.title} (${p.category})`,
                "item": {
                  "@type": "CreativeWork",
                  "name": p.title,
                  "genre": p.category,
                  "locationCreated": p.location
                }
              }))
            }
          })}
        </script>

      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={phera}
              alt="Portfolio"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">Portfolio</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Our <span className="text-gold-gradient">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A showcase of the beautiful moments we've had the privilege to capture.
                Each image tells a unique story of love, joy, and celebration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-card sticky top-16 z-30 border-b border-border">
          <div className="container-custom">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                    ? "bg-gold text-background"
                    : "bg-muted text-muted-foreground hover:bg-gold/20 hover:text-gold"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group cursor-pointer ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                      }`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square h-full">
                      <img
                        src={item.src}
                        alt={`${item.title} - ${item.category} photography in ${item.location} by The Flash Room Studio`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gold text-xs md:text-sm">{item.location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Reels Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">Cinematic Films</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                Wedding <span className="text-gold-gradient">Reels</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch our cinematic wedding films that capture the essence of love and celebration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reels.map((reel, index) => (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-4">
                    <img
                      src={reel.thumbnail}
                      alt={`${reel.title} - cinematic wedding film by The Flash Room Studio`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/60 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-background ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                    {reel.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-center mt-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gold">{selectedImage.location}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}
