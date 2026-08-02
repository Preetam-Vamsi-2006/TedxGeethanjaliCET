"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_TED, ABOUT_TEDX, ABOUT_TEDX_GCET } from "@/lib/data";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sections = [
    { title: ABOUT_TED.title, description: ABOUT_TED.description },
    { title: ABOUT_TEDX.title, description: ABOUT_TEDX.description },
    { title: ABOUT_TEDX_GCET.title, description: ABOUT_TEDX_GCET.description },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">About TEDx</h2>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
              className="group"
            >
              <motion.div
                className="p-8 rounded-2xl h-full backdrop-blur-md bg-black border border-ted/50 hover:border-ted transition-all duration-500"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 50px rgba(230, 57, 70, 0.15)"
                }}
              >
                {/* Title with smooth reveal */}
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-ted"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.1 }}
                >
                  {section.title}
                </motion.h3>

                {/* Animated divider */}
                <motion.div
                  className="h-0.5 w-12 bg-gradient-to-r from-ted to-ted-light mb-4 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
                />

                {/* Description with fade effect */}
                <motion.p 
                  className="text-white leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                >
                  {section.description}
                </motion.p>

                {/* Bottom hover line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-ted via-ted-light to-transparent rounded"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
