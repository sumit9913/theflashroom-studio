import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Camera, Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendBookEmail } from "@/lib/email";

import heroWedding from "@/assets/hero-wedding.jpg";

const eventTypes = [
  { id: "wedding", name: "Wedding", icon: "💍" },
  { id: "prewedding", name: "Pre-Wedding", icon: "💑" },
  { id: "babyshower", name: "Baby Shower", icon: "👶" },
  { id: "maternity", name: "Maternity", icon: "🤰" },
  { id: "birthday", name: "Birthday", icon: "🎂" },
  { id: "event", name: "Corporate Event", icon: "🎉" },
  { id: "other", name: "Other", icon: "📸" },
];

const steps = [
  { number: 1, title: "Choose Event", description: "Select your event type" },
  { number: 2, title: "Your Details", description: "Tell us about yourself" },
  { number: 3, title: "Event Info", description: "Share event details" },
];

export default function Book() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    budget: "",
    requirements: "",
    referral: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEventSelect = (eventId: string) => {
    setFormData({ ...formData, eventType: eventId });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const eventTypeName =
      eventTypes.find((event) => event.id === formData.eventType)?.name ?? "";

    try {
      await sendBookEmail({
        ...formData,
        eventType: eventTypeName,
      });

      toast({
        title: "Booking Request Submitted!",
        description: "Thank you! Our team will contact you within 24 hours to discuss your requirements.",
      });

      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }

      setFormData({
        eventType: "",
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventLocation: "",
        guestCount: "",
        budget: "",
        requirements: "",
        referral: "",
      });
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again in a moment or reach out via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceedStep1 = formData.eventType !== "";
  const canProceedStep2 = formData.name && formData.email && formData.phone;
  const selectedEventName =
    eventTypes.find((event) => event.id === formData.eventType)?.name ?? "";

  const whatsappMessage = [
    "Hi! I'm interested in booking a photography session with TheFlashRoom Studio.",
    selectedEventName && `Event Type: ${selectedEventName}`,
    formData.name && `Name: ${formData.name}`,
    formData.email && `Email: ${formData.email}`,
    formData.phone && `Phone: ${formData.phone}`,
    formData.eventDate && `Event Date: ${formData.eventDate}`,
    formData.eventLocation && `Location: ${formData.eventLocation}`,
    formData.guestCount && `Guest Count: ${formData.guestCount}`,
    formData.budget && `Budget: ${formData.budget}`,
    formData.requirements && `Requirements: ${formData.requirements}`,
    formData.referral && `Referral: ${formData.referral}`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/919136698930?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWedding}
            alt="Book a Shoot"
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
            <span className="text-gold font-elegant text-lg tracking-widest uppercase">Book a Shoot</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Create <span className="text-gold-gradient">Magic Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fill in the details below and our team will get back to you
              within 24 hours with a customized quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 lg:pb-32 bg-background">
        <div className="container-custom max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold transition-all duration-300 ${currentStep >= step.number
                      ? "bg-gold text-background"
                      : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="text-center mt-2 hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 sm:w-24 h-1 mx-2 sm:mx-4 transition-all duration-300 ${currentStep > step.number ? "bg-gold" : "bg-muted"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-xl p-8 md:p-12 border border-border"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Event Type */}
              {currentStep === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6 text-center">
                    What are we celebrating?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {eventTypes.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => handleEventSelect(event.id)}
                        className={`p-6 rounded-lg border-2 transition-all duration-300 hover:-translate-y-1 ${formData.eventType === event.id
                          ? "border-gold bg-gold/10"
                          : "border-border hover:border-gold/50"
                          }`}
                      >
                        <div className="text-3xl mb-2">{event.icon}</div>
                        <div className="text-sm font-medium text-foreground">{event.name}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button
                      type="button"
                      variant="gold"
                      onClick={nextStep}
                      disabled={!canProceedStep1}
                      className="gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6 text-center">
                    Tell us about yourself
                  </h2>
                  <div className="space-y-6">
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
                        className="bg-background border-border focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
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
                          className="bg-background border-border focus:border-gold"
                          placeholder="you@example.com"
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
                          className="bg-background border-border focus:border-gold"
                          placeholder="+91 91366 98930"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="gold-outline"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="gold"
                      onClick={nextStep}
                      disabled={!canProceedStep2}
                      className="gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Event Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6 text-center">
                    Event Details
                  </h2>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Event Date
                        </label>
                        <Input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Event Location
                        </label>
                        <Input
                          type="text"
                          name="eventLocation"
                          value={formData.eventLocation}
                          onChange={handleChange}
                          className="bg-background border-border focus:border-gold"
                          placeholder="City or venue name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Expected Guest Count
                        </label>
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        >
                          <option value="">Select range</option>
                          <option value="50">Up to 50 guests</option>
                          <option value="100">50-100 guests</option>
                          <option value="200">100-200 guests</option>
                          <option value="500">200-500 guests</option>
                          <option value="500+">500+ guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        >
                          <option value="">Select budget</option>
                          <option value="25000">Up to ₹25,000</option>
                          <option value="50000">₹25,000 - ₹50,000</option>
                          <option value="100000">₹50,000 - ₹1,00,000</option>
                          <option value="200000">₹1,00,000 - ₹2,00,000</option>
                          <option value="300000">₹2,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Special Requirements or Message
                      </label>
                      <Textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        rows={4}
                        className="bg-background border-border focus:border-gold resize-none"
                        placeholder="Tell us about any specific shots, styles, or requirements you have in mind..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      >
                        <option value="">Select option</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Friend/Family Referral</option>
                        <option value="wedding-portal">Wedding Portal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="gold-outline"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="gold"
                      disabled={isSubmitting}
                      className="gap-2"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          Submit Booking Request
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground text-sm">
              ✨ No commitment required. Our team will reach out to discuss your needs and provide a custom quote.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}



