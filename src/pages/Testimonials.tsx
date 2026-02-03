import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroWedding from "@/assets/hero-wedding.jpg";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    location: "Udaipur",
    rating: 5,
    text: "TheFlashRoom captured every emotion of our 3-day wedding celebration beautifully. From the emotional haldi ceremony to the grand reception, every moment was preserved perfectly. The team was professional, unobtrusive, and incredibly creative. We couldn't have asked for better photographers!",
    image: heroWedding,
  },
  {
    name: "Sneha & Amit Kapoor",
    event: "Pre-Wedding",
    location: "Jaipur",
    rating: 5,
    text: "Our pre-wedding shoot was absolutely magical! The team understood our vision perfectly and suggested the most beautiful locations. The photos look like they're straight out of a magazine. Highly recommend for anyone looking for creative pre-wedding photography.",
  },
  {
    name: "Kavita Mehta",
    event: "Baby Shower",
    location: "Mumbai",
    rating: 5,
    text: "The team made everyone feel so comfortable during our Godh Bharai ceremony. They captured beautiful candid moments of all our family members and the traditional rituals. The photos are absolutely stunning and we will treasure them forever.",
  },
  {
    name: "Vikram & Anjali Patel",
    event: "Destination Wedding",
    location: "Goa",
    rating: 5,
    text: "We hired TheFlashRoom for our destination wedding in Goa, and they exceeded all our expectations. The cinematic wedding film they created tells our love story so beautifully. Every frame is a work of art. Worth every penny!",
  },
  {
    name: "Neha Singh",
    event: "Maternity Shoot",
    location: "Delhi",
    rating: 5,
    text: "The maternity shoot experience was so comfortable and relaxed. The photographer had great ideas and made me feel beautiful throughout. The photos perfectly capture this special time in our lives. Absolutely loved working with this team!",
  },
  {
    name: "Rohit & Pooja Verma",
    event: "Wedding",
    location: "Jaipur",
    rating: 5,
    text: "From the first meeting to the final delivery, the entire experience was seamless. They captured the essence of our Rajasthani wedding beautifully - the colors, the rituals, the emotions. Our families were so impressed with the photos and video.",
  },
  {
    name: "Sanjay Gupta",
    event: "50th Birthday",
    location: "Mumbai",
    rating: 5,
    text: "We booked TheFlashRoom for my father's 50th birthday celebration. The team was punctual, professional, and captured all the special moments with our extended family. The highlight video brought tears to everyone's eyes. Excellent work!",
  },
  {
    name: "Meera & Arjun Reddy",
    event: "Wedding",
    location: "Hyderabad",
    rating: 5,
    text: "The attention to detail and dedication shown by TheFlashRoom team is unmatched. They captured our South Indian wedding traditions with such respect and artistry. The drone shots of our mandap are breathtaking. Truly the best decision we made!",
  },
];

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Client Reviews | The Flash Room Studio</title>
        <meta
          name="description"
          content="Read what couples and clients say about The Flash Room Studio. Trusted wedding and event photography & videography team based in Mumbai."
        />
        <link rel="canonical" href="https://theflashroom.in/testimonials" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroWedding}
              alt="Testimonials"
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
              <span className="text-gold font-elegant text-lg tracking-widest uppercase">Testimonials</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                What Our <span className="text-gold-gradient">Clients Say</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real stories from real couples and families who trusted us to
                capture their most precious moments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-gold/30 transition-all duration-300 group"
                >
                  <Quote className="w-10 h-10 text-gold/20 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-background">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gold">
                        {testimonial.event} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Weddings Captured" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "5.0", label: "Average Rating" },
                { number: "1000+", label: "Happy Families" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your <span className="text-gold-gradient">Story</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Join our family of happy clients. Let us capture the moments
                that matter most to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="lg">
                    Book Your Shoot
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="gold-outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
