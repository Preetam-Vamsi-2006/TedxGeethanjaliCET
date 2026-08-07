'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LaunchCountdownProps {
  onComplete?: () => void;
}

export default function LaunchCountdown({ onComplete }: LaunchCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[200] overflow-hidden">
          {/* Background animated gradient */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-ted via-transparent to-ted"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Orbiting particles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-ted rounded-full"
              animate={{
                x: [0, Math.cos((i * Math.PI) / 2) * 150],
                y: [0, Math.sin((i * Math.PI) / 2) * 150],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px',
              }}
            />
          ))}

          {/* Main 3D countdown */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ perspective: '1000px' }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-4 border-ted rounded-full"
              style={{
                width: '280px',
                height: '280px',
                left: '50%',
                top: '50%',
                marginLeft: '-140px',
                marginTop: '-140px',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-0 border-2 border-ted/50 rounded-full"
              style={{
                width: '220px',
                height: '220px',
                left: '50%',
                top: '50%',
                marginLeft: '-110px',
                marginTop: '-110px',
              }}
              animate={{
                rotate: -180,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Main number with 3D effect */}
            <motion.div
              key={timeLeft}
              initial={{
                scale: 2,
                opacity: 0,
                rotateY: 90,
                rotateX: 45,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: 0,
                rotateX: 0,
              }}
              exit={{
                scale: 0.5,
                opacity: 0,
                rotateY: -90,
                rotateX: -45,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              style={{
                perspective: '1000px',
              }}
              className="relative text-9xl font-black text-ted drop-shadow-[0_0_60px_rgba(224,39,44,0.8)] leading-none -mb-12"
            >
              {timeLeft}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-white/80 text-lg mt-12 font-semibold tracking-widest"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              LAUNCHING SOON
            </motion.p>

            {/* Progress ring */}
            <motion.div
              className="mt-12 flex justify-center gap-2"
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-8 bg-ted/30 rounded-full"
                  animate={{
                    backgroundColor: i < 10 - timeLeft ? '#E0272C' : 'rgba(224, 39, 44, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Corner decorations */}
          {[
            { top: '0', left: '0', rotate: 0 },
            { top: '0', right: '0', rotate: 90 },
            { bottom: '0', left: '0', rotate: -90 },
            { bottom: '0', right: '0', rotate: 180 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border-2 border-ted/50"
              style={{
                ...pos,
                rotate: pos.rotate,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
