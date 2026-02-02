import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import heroWedding from "@/assets/hero-wedding.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    subtitle: "Mon-Sat, 10am-7pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@theflashroom.in", "bookings@theflashroom.in"],
    subtitle: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Mumbai, Maharashtra"],
    subtitle: "Available Pan-India & Internationally",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Sat: 10:00 AM - 7:00 PM"],
    subtitle: "Sunday by appointment only",
  },
];

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Baby Shower",
  "Maternity",
  "Birthday",
  "Corporate Event",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi! I'm interested in booking a photography session with TheFlashRoom Studio."
  )}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Contact Us"
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
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">Contact Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Let's <span className="text-gold-gradient">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions or ready to book? We'd love to hear from you. 
              Reach out and let's create something beautiful together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-gold"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-gold"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-gold resize-none"
                    placeholder="Tell us about your event and what you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* WhatsApp Quick Enquiry */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg font-semibold mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get quick responses via WhatsApp. We typically reply within minutes!
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="gold-outline" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Quick Enquiry on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-foreground/80 text-sm">
                          {detail}
                        </p>
                      ))}
                      <p className="text-muted-foreground text-xs mt-1">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
                <h3 className="font-display text-lg font-semibold mb-4">
                  Service Areas
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Based in Mumbai, we cover events across India and internationally.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Delhi", "Bangalore", "Jaipur", "Udaipur", "Goa", "International"].map(
                    (city) => (
                      <span
                        key={city}
                        className="px-3 py-1 bg-background rounded-full text-sm text-foreground/80"
                      >
                        {city}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
