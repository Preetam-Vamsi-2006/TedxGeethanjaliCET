"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 bg-ted rounded-full pointer-events-none z-[10000]"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ duration: 0, type: "spring", stiffness: 1000, damping: 40 }}
      />

      {/* Cursor ring */}
      <motion.div
        className={`fixed w-8 h-8 border-2 border-ted rounded-full pointer-events-none z-[10000] ${
          isPointer ? "scale-150" : "scale-100"
        }`}
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ duration: 0.1 }}
      />

      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>
    </>
  );
}
