import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroWedding from "@/assets/hero-wedding.jpg";

const servicePackages = [
  {
    service: "Wedding Photography & Videography",
    plans: [
      {
        name: "Cost-Effective",
        price: "₹75,000",
        description: "Essential coverage for intimate weddings",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "200+ edited photos",
          "Basic color grading",
          "Digital delivery",
          "Online gallery",
        ],
        highlighted: false,
      },
      {
        name: "Intermediate",
        price: "₹1,50,000",
        description: "Complete coverage for your special day",
        features: [
          "Full day coverage",
          "2 photographers + 1 videographer",
          "500+ edited photos",
          "Advanced color grading",
          "3-5 min highlight video",
          "Digital album",
          "Pre-wedding consultation",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹3,00,000",
        description: "The ultimate wedding documentation",
        features: [
          "Multi-day coverage",
          "3 photographers + 2 videographers",
          "1000+ edited photos",
          "Cinematic wedding film (15-20 min)",
          "Drone aerial shots",
          "Premium printed album",
          "Same-day edit teaser",
          "Priority delivery",
        ],
        highlighted: false,
      },
    ],
  },
  {
    service: "Pre-Wedding Shoots",
    plans: [
      {
        name: "Cost-Effective",
        price: "₹25,000",
        description: "Beautiful memories at local locations",
        features: [
          "4 hours shoot",
          "1 location",
          "2 outfit changes",
          "50+ edited photos",
          "Basic retouching",
          "Digital delivery",
        ],
        highlighted: false,
      },
      {
        name: "Intermediate",
        price: "₹50,000",
        description: "Stunning shoots with more options",
        features: [
          "6 hours shoot",
          "2 locations",
          "4 outfit changes",
          "100+ edited photos",
          "Advanced retouching",
          "1-2 min video reel",
          "Styling consultation",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹1,00,000",
        description: "Destination pre-wedding experience",
        features: [
          "Full day shoot",
          "Multiple locations",
          "Unlimited outfit changes",
          "200+ edited photos",
          "Cinematic video (3-5 min)",
          "Drone shots",
          "Travel within India included",
          "MUA coordination",
        ],
        highlighted: false,
      },
    ],
  },
  {
    service: "Event Coverage",
    plans: [
      {
        name: "Cost-Effective",
        price: "₹15,000",
        description: "Essential event documentation",
        features: [
          "4 hours coverage",
          "1 photographer",
          "100+ edited photos",
          "Basic editing",
          "Digital delivery",
        ],
        highlighted: false,
      },
      {
        name: "Intermediate",
        price: "₹35,000",
        description: "Comprehensive event coverage",
        features: [
          "8 hours coverage",
          "2 photographers",
          "250+ edited photos",
          "Advanced editing",
          "Highlight video (1-2 min)",
          "Same-day preview",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹75,000",
        description: "Full event documentation package",
        features: [
          "Full event coverage",
          "3 photographers + videographer",
          "500+ edited photos",
          "Event film (5-10 min)",
          "Drone coverage",
          "Live streaming option",
          "Priority delivery",
        ],
        highlighted: false,
      },
    ],
  },
  {
    service: "Baby Shower & Maternity",
    plans: [
      {
        name: "Cost-Effective",
        price: "₹12,000",
        description: "Capture the precious moments",
        features: [
          "2 hours coverage",
          "1 photographer",
          "50+ edited photos",
          "Basic retouching",
          "Digital delivery",
        ],
        highlighted: false,
      },
      {
        name: "Intermediate",
        price: "₹25,000",
        description: "Complete celebration coverage",
        features: [
          "4 hours coverage",
          "2 photographers",
          "100+ edited photos",
          "Advanced retouching",
          "Family group photos",
          "Highlight video",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹50,000",
        description: "The ultimate celebration package",
        features: [
          "Full event coverage",
          "2 photographers + videographer",
          "200+ edited photos",
          "Cinematic highlight film",
          "Maternity portrait session",
          "Premium printed album",
        ],
        highlighted: false,
      },
    ],
  },
  {
    service: "Birthday & Special Occasions",
    plans: [
      {
        name: "Cost-Effective",
        price: "₹10,000",
        description: "Capture the celebration",
        features: [
          "2 hours coverage",
          "1 photographer",
          "40+ edited photos",
          "Basic editing",
          "Digital delivery",
        ],
        highlighted: false,
      },
      {
        name: "Intermediate",
        price: "₹22,000",
        description: "Complete party documentation",
        features: [
          "4 hours coverage",
          "2 photographers",
          "80+ edited photos",
          "Advanced editing",
          "Highlight reel",
          "Cake smash photos",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹45,000",
        description: "Milestone celebration package",
        features: [
          "Full event coverage",
          "2 photographers + videographer",
          "150+ edited photos",
          "Cinematic event video",
          "Guest messages compilation",
          "Same-day preview",
        ],
        highlighted: false,
      },
    ],
  },
];

export default function Packages() {
  const services = useMemo(() => servicePackages.map((item) => item.service), []);
  const [selectedService, setSelectedService] = useState<string>(services[0] ?? "");
  const selectedPackage = servicePackages.find(
    (item) => item.service === selectedService,
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Packages & Pricing"
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
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">Packages & Pricing</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Investment in <span className="text-gold-gradient">Memories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent pricing for every budget. Choose the package that fits your 
              celebration, or contact us for a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">
              Choose a Category
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold mt-4">
              Select the Service You Need
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {services.map((service) => (
              <Button
                key={service}
                variant={service === selectedService ? "gold" : "gold-outline"}
                onClick={() => setSelectedService(service)}
                className="rounded-full px-6"
              >
                {service}
              </Button>
            ))}
          </div>

          {selectedPackage && (
            <div className="bg-card rounded-2xl p-6 md:p-10 border border-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-2xl md:text-4xl font-bold">
                  {selectedPackage.service}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {selectedPackage.plans.map((plan, planIndex) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: planIndex * 0.1, duration: 0.6 }}
                    className={`relative rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                      plan.highlighted
                        ? "bg-gradient-to-b from-gold/10 to-gold/5 border-gold shadow-lg shadow-gold/10"
                        : "bg-background border-border hover:border-gold/30"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-gold text-background text-xs font-semibold px-4 py-1.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1 mb-3">
                        <span className="font-display text-4xl font-bold text-gold-gradient">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/book" className="block">
                      <Button
                        variant={plan.highlighted ? "gold" : "gold-outline"}
                        className="w-full"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Need a <span className="text-gold-gradient">Custom Package</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Every celebration is unique. Let us create a custom package tailored 
              to your specific requirements and budget.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
