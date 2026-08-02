"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import { SPEAKERS } from "@/lib/data";

export default function Speakers() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof SPEAKERS[0] | null>(null);

  return (
    <section
      id="speakers"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-gray-600 mb-4">
            Learn from industry leaders and innovators shaping the future
          </p>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group cursor-pointer"
            >
              <div className="glass p-6 rounded-2xl h-full hover:shadow-lg transition-all duration-300">
                {/* Avatar placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-ted to-ted-dark rounded-xl mb-4 flex items-center justify-center text-4xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold">
                    {speaker.name.charAt(0)}
                  </span>
                </div>

                {/* Speaker Info */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-ted font-semibold mb-3">
                  {speaker.title}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {speaker.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-ted/10 text-ted px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Click indicator */}
                <motion.div
                  className="mt-4 text-xs text-ted font-semibold"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  View Details →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-black rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-ted to-ted-dark rounded-xl mb-6 flex items-center justify-center text-5xl text-white font-bold">
                {selectedSpeaker.name.charAt(0)}
              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold mb-2">
                {selectedSpeaker.name}
              </h2>
              <p className="text-ted font-semibold mb-4">
                {selectedSpeaker.title}
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedSpeaker.bio}
              </p>

              {/* Expertise */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSpeaker.expertise.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-ted/10 text-ted rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-ted text-white font-semibold rounded-lg hover:bg-ted-dark transition-colors"
              >
                Register to Attend
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
