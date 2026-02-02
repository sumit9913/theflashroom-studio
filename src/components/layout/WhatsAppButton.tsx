import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919136698930";
  const message = encodeURIComponent("Hi! I'm interested in booking a photography session with TheFlashRoom Studio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </div>
      <span className="pr-5 font-medium hidden sm:block group-hover:block transition-all duration-300">
        Book Now
      </span>
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
}
