"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Bus } from "lucide-react";

export default function Transportation() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleDownloadPDF = () => {
    window.open("/busroutes.pdf", "_blank");
  };

  return (
    <section
      id="transportation"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Transportation Details
          </h2>
          <p className="text-gray-400 mb-6">
            Bus routes and travel information for the event
          </p>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-ted/10 to-ted-dark/10 border border-ted/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-6 bg-ted/20 rounded-full"
              >
                <Bus size={48} className="text-ted" />
              </motion.div>
            </div>

            {/* Text */}
            <p className="text-center text-white/80 mb-8 text-lg">
              Download the bus routes and transportation details for hassle-free travel to and from the event venue.
            </p>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadPDF}
              className="w-full py-4 px-6 bg-ted hover:bg-ted-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <FileText size={24} className="group-hover:animate-bounce" />
              <span>View Bus Routes PDF</span>
            </motion.button>

            {/* Additional Info */}
            <p className="text-center text-white/60 text-sm mt-6">
              Click the button above to open the transportation guide in a new window
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
