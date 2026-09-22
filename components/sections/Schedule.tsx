"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SCHEDULE } from "@/lib/data";

export default function Schedule() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Event Schedule</h2>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Placeholder Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-br from-ted/5 to-ted/10 border border-ted/30 rounded-xl"
        >
          <div className="w-16 h-16 bg-ted/20 rounded-full flex items-center justify-center mb-4 border border-ted/40">
            <svg
              className="w-8 h-8 text-ted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Schedule Coming Soon</h3>
          <p className="text-white/60 text-center max-w-md">
            The detailed event schedule will be updated soon. Stay tuned for exciting sessions,
            speakers, and activities at TEDx Geethanjali CET!
          </p>
          <motion.div
            className="mt-6 flex gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-ted rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-ted rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-ted rounded-full animate-pulse delay-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
