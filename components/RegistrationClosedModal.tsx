"use client";

import { useEffect } from "react";
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

  const handleBookTickets = () => {
    window.open("https://forms.gle/qgPtc7somppiogyJ8", "_blank");
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
            className="fixed inset-0 flex items-center justify-center z-[301] p-4 pt-48 sm:pt-64"
          >
            <div className="bg-gradient-to-br from-black to-black/80 border border-ted/50 rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
              {/* Header */}
              <div className="bg-gradient-to-r from-ted/20 to-ted/10 border-b border-ted/30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-ted">Book Your Ticket</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors flex-shrink-0"
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
                    Join Us at TEDxGeethanjali CET
                  </p>

                  <p className="text-white/60 text-center text-sm">
                    Secure your spot at this amazing event. Both individual and group registrations
                    are available.
                  </p>

                  {/* Single Registration Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "#ED1C24" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBookTickets}
                    className="w-full p-4 border-2 border-ted/30 hover:border-ted rounded-lg transition-all bg-ted/5 hover:bg-ted/10 group"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 bg-ted/20 rounded-full flex items-center justify-center group-hover:bg-ted/30">
                        <svg
                          className="w-6 h-6 text-ted"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-base">Register Now</h3>
                        <p className="text-white/60 text-xs mt-1">
                          Fill the form to get your ticket
                        </p>
                      </div>
                    </div>
                  </motion.button>

                  <p className="text-white/50 text-xs text-center pt-2">
                    Limited seats available. Register early!
                  </p>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="bg-black/40 border-t border-ted/20 px-4 sm:px-6 py-3 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-4 py-2 text-white/60 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
