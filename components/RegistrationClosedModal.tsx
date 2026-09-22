"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface RegistrationClosedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationClosedModal({
  isOpen,
  onClose,
}: RegistrationClosedModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleIndividualPass = () => {
    window.open("https://forms.gle/qgPtc7somppiogyJ8", "_blank");
    onClose();
  };

  const handleGroupPass = () => {
    window.open("https://forms.gle/xr4E9byMmKArgL1KA", "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[300]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-full max-w-sm z-[301] mx-auto"
          >
            <div className="bg-gradient-to-br from-black to-black/80 border border-ted/50 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-ted/20 to-ted/10 border-b border-ted/30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-ted">Register Now</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 py-6 sm:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <p className="text-white/80 text-center text-base sm:text-lg font-semibold">
                    Select your pass type
                  </p>

                  {/* Individual Pass Option */}
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "#ED1C24" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleIndividualPass}
                    className="w-full p-3 sm:p-4 border-2 border-ted/30 hover:border-ted rounded-lg transition-all bg-ted/5 hover:bg-ted/10 group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-ted/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ted/30">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-ted"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Individual Pass</h3>
                        <p className="text-white/60 text-xs sm:text-sm mt-1">
                          Register as an individual attendee
                        </p>
                      </div>
                    </div>
                  </motion.button>

                  {/* Group Pass Option */}
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "#ED1C24" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGroupPass}
                    className="w-full p-3 sm:p-4 border-2 border-ted/30 hover:border-ted rounded-lg transition-all bg-ted/5 hover:bg-ted/10 group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-ted/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ted/30">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-ted"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Group Pass</h3>
                        <p className="text-white/60 text-xs sm:text-sm mt-1">
                          Register with a group of attendees
                        </p>
                      </div>
                    </div>
                  </motion.button>

                  <p className="text-white/50 text-xs text-center pt-2 sm:pt-4">
                    Choose the option that best fits your needs
                  </p>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="bg-black/40 border-t border-ted/20 px-4 sm:px-6 py-2 sm:py-3 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-4 py-2 text-white/60 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
