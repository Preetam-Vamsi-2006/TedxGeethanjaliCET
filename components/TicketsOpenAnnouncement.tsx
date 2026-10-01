"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Sparkles } from "lucide-react";

interface TicketsOpenAnnouncementProps {
  onBookNow?: () => void;
}

export default function TicketsOpenAnnouncement({
  onBookNow,
}: TicketsOpenAnnouncementProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 500ms of page load
    const showTimer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    // Auto-close after 4 seconds
    const closeTimer = setTimeout(() => {
      setIsOpen(false);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[400]"
          />

          {/* Announcement Popup - Clean and Minimal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            className="fixed inset-0 flex items-center justify-center z-[401] p-4"
          >
            {/* Decorative animated circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-ted/20 m-auto w-96 h-96 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3], rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-ted/10 m-auto w-80 h-80 pointer-events-none"
            />

            <div className="relative bg-gradient-to-br from-ted/40 via-black to-black border-2 border-ted rounded-2xl shadow-2xl overflow-hidden p-8 sm:p-12 max-w-md w-full z-10">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-ted/10 blur-2xl opacity-50 -z-10" />

              {/* Animated corner sparkles */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 left-4 text-ted/60"
              >
                <Sparkles size={20} />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute bottom-4 right-4 text-ted/60"
              >
                <Sparkles size={20} />
              </motion.div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </motion.button>

              {/* Content */}
              <div className="text-center space-y-4">
                {/* Animated lightning bolts with pulse */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-center gap-4"
                >
                  {/* Left lightning */}
                  <motion.div
                    animate={{
                      rotate: [0, 12, -12, 0],
                      y: [0, -6, 6, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="text-ted w-8 h-8" fill="currentColor" />
                  </motion.div>

                  {/* Main heading with letter animation */}
                  <div className="text-2xl sm:text-3xl font-black text-white whitespace-nowrap flex justify-center gap-0">
                    {"Tickets Are Open!".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2 + index * 0.08,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>

                  {/* Right lightning */}
                  <motion.div
                    animate={{
                      rotate: [0, -12, 12, 0],
                      y: [0, -6, 6, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="text-ted w-8 h-8" fill="currentColor" />
                  </motion.div>
                </motion.div>

                {/* Animated gradient line */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-ted to-transparent"
                />

                {/* Staggered message animation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <div className="text-white/90 text-lg sm:text-xl font-bold h-8 flex items-center">
                    {"Secure Your Spot Now!".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.05,
                          duration: 0.3,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.p
                    className="text-white/70 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Limited seats available for TEDx Geethanjali CET
                  </motion.p>
                </motion.div>

                {/* Animated progress bar */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 3.5 }}
                  className="h-1 bg-gradient-to-r from-ted to-red-700 origin-left rounded-full"
                />

                {/* Pulsing bottom accent */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center gap-1"
                >
                  <div className="w-2 h-2 rounded-full bg-ted" />
                  <div className="w-2 h-2 rounded-full bg-ted/60" />
                  <div className="w-2 h-2 rounded-full bg-ted/30" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
