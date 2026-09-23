"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, ChevronRight } from "lucide-react";

interface BookTicketsCTAProps {
  onOpen: () => void;
}

export default function BookTicketsCTA({ onOpen }: BookTicketsCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Floating Button - Bottom Right */}
      <motion.button
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[100] group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-ted rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* Main button */}
        <div className="relative bg-gradient-to-r from-ted to-red-700 text-white rounded-full p-4 shadow-2xl flex items-center gap-2 min-w-max">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: isHovered ? 12 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Ticket size={24} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                width: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="font-bold text-sm whitespace-nowrap"
            >
              Book Tickets
            </motion.span>
          </div>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={20} />
          </motion.div>
        </div>
      </motion.button>

      {/* Banner CTA - Top of page (optional, can be toggled) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="sticky top-16 z-50 mx-4 mt-4"
      >
        <div className="bg-gradient-to-r from-ted/20 via-ted/10 to-ted/20 border border-ted/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                🎉 Get Your Tickets Now!
              </h3>
              <p className="text-white/70 text-sm">
                Limited seats available for TEDx Geethanjali CET. Secure your spot today!
              </p>
            </div>
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-ted text-white font-bold rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg"
            >
              Book Now
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
