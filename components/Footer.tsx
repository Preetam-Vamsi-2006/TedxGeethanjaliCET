"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Theme", href: "#theme" },
        { label: "Schedule", href: "#schedule" },
      ],
    },
  ];

  const socialIcons = [
    { icon: Instagram, url: SITE_CONFIG.socialLinks.instagram, label: "Instagram" },
    { icon: Facebook, url: SITE_CONFIG.socialLinks.facebook, label: "Facebook" },
    { icon: Linkedin, url: SITE_CONFIG.socialLinks.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-ted rounded-full mix-blend-overlay filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold">
                  <span className="text-ted">TEDx</span>
                  <span className="text-white">Geethanjali CET</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Spreading ideas worth sharing at Geethanjali College of Engineering and
                Technology.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialIcons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#EB0028" }}
                    className="text-gray-400 hover:text-ted transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-ted transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1"
            >
              <h3 className="text-sm font-semibold text-white mb-4">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.521!2d78.6310281!3d17.5210322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sGeethanjali%20College%20of%20Engineering%20and%20Technology!2s!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-gray-400 text-xs mt-3">
                Geethanjali College of Engineering and Technology, Hyderabad
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>
              &copy; {currentYear} TEDx Geethanjali College. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-ted transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-ted transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-ted transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Credit */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-gray-500 text-xs mt-6"
          >
            Designed and developed with ❤️ | TEDx is an independently organized TED
            event in the spirit of TED's mission to spread ideas worth spreading.
          </motion.p>
        </div>
      </div>

      {/* Animated bottom line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-ted via-ted-dark to-ted"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </footer>
  );
}
