"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Theme", href: "#theme" },
  { label: "Schedule", href: "#schedule" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 shadow-lg backdrop-blur-sm"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-2xl font-bold whitespace-nowrap"
            >
              <span className="text-ted">TEDx</span><span className="hidden sm:inline text-white">Geethanjali CET</span>
              <span className="sm:hidden text-white">Geethanjali CET</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-colors duration-300 relative group ${
                  isScrolled ? "text-white hover:text-ted" : "text-white hover:text-ted"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ted group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://forms.gle/UEScTorBomNC79JL7", "_blank")}
            className="hidden md:block px-4 lg:px-6 py-2 bg-ted text-white rounded-lg font-semibold text-sm hover:bg-ted-dark transition-colors"
          >
            Register
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 border-t border-ted/20"
        >
          <div className="flex flex-col gap-1 py-4 px-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-4 py-3 text-sm font-bold text-white hover:text-ted transition-colors hover:bg-ted/10 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => window.open("https://forms.gle/UEScTorBomNC79JL7", "_blank")}
              className="mx-4 mt-2 px-4 py-3 bg-ted text-white rounded-lg font-semibold text-sm hover:bg-ted-dark transition-colors w-auto">
              Register
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
