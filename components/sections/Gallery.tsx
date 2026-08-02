"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openImage = (idx: number) => setSelectedIdx(idx);
  const closeImage = () => setSelectedIdx(null);
  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
    }
  };
  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(
        (selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <section
      id="gallery"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Previous Editions Highlights
          </h2>
          <p className="text-gray-600 mb-4">
            Relive the magic of our past events
          </p>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => openImage(idx)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl h-64"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-ted to-ted-dark group-hover:scale-110 transition-transform duration-500" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              {/* Title */}
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-bold text-lg">
                  {image.title}
                </h3>
              </div>

              {/* View indicator */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-ted font-bold text-2xl">+</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeImage}
          >
            {/* Main image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="w-full h-full bg-gradient-to-br from-ted to-ted-dark rounded-2xl flex items-center justify-center">
                <span className="text-white text-6xl font-bold">
                  {GALLERY_IMAGES[selectedIdx].title.charAt(0)}
                </span>
              </div>

              {/* Title */}
              <motion.p className="text-white text-center mt-4 text-lg font-semibold">
                {GALLERY_IMAGES[selectedIdx].title}
              </motion.p>

              {/* Close button */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 p-2 bg-black rounded-full hover:bg-gray-900 transition-colors"
                aria-label="Close gallery"
              >
                <X size={24} className="text-black" />
              </button>

              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={prevImage}
                  className="p-2 bg-black rounded-full hover:bg-gray-900 transition-colors pointer-events-auto"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-black rounded-full hover:bg-gray-900 transition-colors pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image counter */}
              <motion.div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {selectedIdx + 1} / {GALLERY_IMAGES.length}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
