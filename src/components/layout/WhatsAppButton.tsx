import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const phoneNumber = '919136698930';
  const message = encodeURIComponent(
    "Hi! I'm interested in booking a photography session with TheFlashRoom Studio.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 flex items-center justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current">
          <path d="M16.002 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.352.624 4.653 1.808 6.677l-1.92 7.323 7.51-1.967a13.277 13.277 0 0 0 6.935 1.947h.003c7.36 0 13.333-5.973 13.333-13.333S23.362 2.667 16.002 2.667zm7.776 19.18c-.32.901-1.87 1.728-2.571 1.835-.658.101-1.49.144-2.405-.146-.552-.175-1.259-.409-2.176-.804-3.83-1.654-6.33-5.713-6.52-5.977-.187-.264-1.559-2.077-1.559-3.965 0-1.888.994-2.82 1.345-3.209.351-.389.77-.486 1.026-.486.256 0 .513.003.737.014.237.011.555-.09.87.666.32.763 1.09 2.642 1.187 2.834.096.192.16.422.032.686-.128.264-.192.422-.383.646-.192.224-.403.5-.575.67-.192.192-.392.403-.169.795.224.391.994 1.637 2.134 2.654 1.467 1.31 2.703 1.718 3.094 1.91.392.192.62.16.85-.096.23-.256.973-1.134 1.232-1.523.256-.389.513-.32.866-.192.351.128 2.23 1.053 2.613 1.245.383.192.639.288.735.448.096.16.096.928-.224 1.83z" />
        </svg>
      </div>
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
}
