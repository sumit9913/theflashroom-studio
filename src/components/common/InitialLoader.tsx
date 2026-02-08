import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export function InitialLoader({ show }: { show: boolean }) {
  useEffect(() => {
    if (!show) return;

    const audio = new Audio('/sounds/shutter.mp3');
    audio.volume = 0.4; // subtle, premium feel`

    audio.play().catch(() => {
      // autoplay may be blocked — silently ignore
    });
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="relative w-40 h-40">
            {/* Shutter blades */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 origin-bottom rounded-full bg-gold/90"
                style={{
                  clipPath: 'polygon(50% 50%, 0 0, 100% 0)',
                  transformOrigin: '50% 100%',
                }}
                initial={{
                  rotate: i * 60,
                  scaleY: 1,
                }}
                animate={{
                  scaleY: [1, 0, 1],
                }}
                transition={{
                  delay: 0.2,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Center circle */}
            <div className="absolute inset-10 rounded-full bg-background z-10" />

            {/* Brand */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}>
              <span className="font-display text-xl text-gold tracking-wide">
                The Flash Room
              </span>
            </motion.div>
          </div>

          {/* Caption */}
          <motion.p
            className="absolute bottom-16 text-xs tracking-widest text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}>
            CAPTURING MOMENTS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
