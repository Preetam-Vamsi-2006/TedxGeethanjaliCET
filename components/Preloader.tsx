"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMorphing, setShowMorphing] = useState(true);

  useEffect(() => {
    const morphTimer = setTimeout(() => {
      setShowMorphing(false);
    }, 2000);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(morphTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden"
    >
      {/* Morphing Symbol Animation */}
      {showMorphing && (
        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Ambient Glow */}
            <div
              className="absolute inset-1/4 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/15 blur-3xl"
              style={{
                animation: "breathe 5s ease-in-out infinite",
              }}
            />

            {/* Orbiting Particles */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              style={{ animation: "spin 10s linear infinite" }}
            >
              <circle cx="160" cy="160" r="120" fill="none" opacity="0" />
              <circle cx="280" cy="160" r="3.5" fill="#a78bfa" filter="drop-shadow(0 0 8px #a78bfa)" />
              <circle cx="80" cy="160" r="3.5" fill="#22d3ee" filter="drop-shadow(0 0 8px #22d3ee)" />
              <circle cx="160" cy="40" r="3.5" fill="#f472b6" filter="drop-shadow(0 0 8px #f472b6)" />
            </svg>

            {/* Reverse Orbiting Particles */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              style={{ animation: "spin-rev 7s linear infinite" }}
            >
              <circle cx="160" cy="160" r="95" fill="none" opacity="0" />
              <circle cx="255" cy="160" r="2" fill="#c4b5fd" filter="drop-shadow(0 0 6px #c4b5fd)" />
              <circle cx="65" cy="160" r="2" fill="#67e8f9" filter="drop-shadow(0 0 6px #67e8f9)" />
            </svg>

            {/* Morphing Symbol SVG */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [0.94, 1.05, 0.94],
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              }}
            >
              <svg viewBox="0 0 200 200" className="w-40 h-40" style={{ filter: "drop-shadow(0 0 20px rgba(139,92,246,0.4))" }}>
                <defs>
                  <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa">
                      <animate
                        attributeName="stop-color"
                        values="#a78bfa;#22d3ee;#f472b6;#a78bfa"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="50%" stopColor="#22d3ee">
                      <animate
                        attributeName="stop-color"
                        values="#22d3ee;#f472b6;#a78bfa;#22d3ee"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#f472b6">
                      <animate
                        attributeName="stop-color"
                        values="#f472b6;#a78bfa;#22d3ee;#f472b6"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>

                {/* Glowing inner circle */}
                <circle cx="100" cy="100" r="65" fill="url(#morphGrad)" opacity="0.55" filter="blur(5px)" />

                {/* Main circle */}
                <circle cx="100" cy="100" r="65" fill="url(#morphGrad)" />

                {/* Outline */}
                <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>

          <style>{`
            @keyframes breathe {
              0%, 100% { transform: scale(0.9); opacity: 0.6; }
              50% { transform: scale(1.15); opacity: 1; }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes spin-rev {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
          `}</style>
        </motion.div>
      )}

      {/* Text Content - appears after morphing fades */}
      {!showMorphing && (
        <div className="flex flex-col items-center gap-4">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold text-ted"
          >
            TEDx
          </motion.div>

          {/* Loading Bar */}
          <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-ted via-ted-dark to-ted"
            />
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm text-gray-400 font-medium tracking-wide"
          >
            Ideas Worth Spreading
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}
