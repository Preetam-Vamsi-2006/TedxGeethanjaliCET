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
            className="fixed inset-0 bg-black/50 z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[201] mx-4"
          >
            <div className="bg-gradient-to-br from-black to-black/80 border border-ted/50 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-ted/20 to-ted/10 border-b border-ted/30 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-ted">Registrations Closed</h2>
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
              <div className="px-6 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-ted/10 rounded-full flex items-center justify-center mx-auto border border-ted/30">
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
                        d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <p className="text-white/80 text-lg">
                    Thank you for your interest in TEDx Geethanjali CET!
                  </p>

                  <p className="text-white/60 text-base">
                    Registration for this event has been closed. Please stay tuned for upcoming
                    events and announcements.
                  </p>

                  <div className="pt-4 space-y-3 bg-ted/5 rounded-lg p-4 border border-ted/20">
                    <p className="text-sm text-white/70">
                      <span className="text-ted font-semibold">📧 Stay Updated:</span>
                    </p>
                    <p className="text-xs text-white/60">
                      Follow us on social media and check back soon for exciting updates and new
                      event registrations.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="bg-black/40 border-t border-ted/20 px-6 py-4 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-ted text-white font-semibold rounded-lg hover:bg-ted-dark transition-colors"
                >
                  Got it
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
