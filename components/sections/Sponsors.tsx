"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SPONSORS } from "@/lib/data";

export default function Sponsors() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let animationFrameId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollWidth - clientWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(animate);
    };

    if (scrollWidth > clientWidth) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-gray-600 mb-4">
            Supported by leading organizations in technology and innovation
          </p>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Sponsors Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />

          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Original sponsors */}
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center"
              >
                <motion.div
                  className="w-full h-full glass rounded-xl flex items-center justify-center p-4 hover:shadow-lg transition-shadow hover:bg-ted/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-ted text-center">
                    {sponsor.name}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Duplicate sponsors for seamless loop */}
            {SPONSORS.map((sponsor) => (
              <div
                key={`${sponsor.id}-duplicate`}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center"
              >
                <motion.div
                  className="w-full h-full glass rounded-xl flex items-center justify-center p-4 hover:shadow-lg transition-shadow hover:bg-ted/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-ted text-center">
                    {sponsor.name}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Interested in sponsoring TEDXGeethanjaliCET?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-ted text-ted font-semibold rounded-lg hover:bg-ted hover:text-white transition-colors"
          >
            Become a Sponsor
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
