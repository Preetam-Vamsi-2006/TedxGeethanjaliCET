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

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ted via-ted-dark to-ted -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {SCHEDULE.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="grid grid-cols-2 gap-4 items-center relative"
              >
                {/* Left side - even indices */}
                {idx % 2 === 0 && (
                  <>
                    <div className="text-right pr-8">
                      <motion.div
                        className="flex items-center justify-end gap-2"
                        whileHover={{ x: -5 }}
                      >
                        <span className="text-sm font-bold text-ted whitespace-nowrap">
                          {item.time}
                        </span>
                        <span className="text-ted">-</span>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                      </motion.div>
                    </div>
                    <div />
                  </>
                )}

                {/* Right side - odd indices */}
                {idx % 2 !== 0 && (
                  <>
                    <div />
                    <div className="text-left pl-8">
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-bold text-ted whitespace-nowrap">
                          {item.time}
                        </span>
                        <span className="text-ted">-</span>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                      </motion.div>
                    </div>
                  </>
                )}

                {/* Timeline dot - centered */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-ted rounded-full ring-4 ring-white z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
