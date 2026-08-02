"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Venue() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="venue"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Event Venue
          </h2>
          <p className="text-gray-600">
            Located at the heart of innovation
          </p>
          <div className="w-16 h-1 bg-ted mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl h-96 lg:h-full min-h-96 bg-gradient-to-br from-ted/20 to-ted-dark/20 border-2 border-ted/20"
            style={{
              filter: 'url(#hideMapControls)'
            }}
          >
            {/* SVG filter to hide map controls */}
            <svg style={{ display: 'none' }}>
              <filter id="hideMapControls">
                <feColorMatrix type="saturate" values="1" />
              </filter>
            </svg>

            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.521!2d78.6310281!3d17.5210322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sGeethanjali%20College%20of%20Engineering%20and%20Technology!2s!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Address */}
            <div className="glass p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="flex gap-4 items-start">
                <MapPin className="text-ted flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Main Auditorium<br />
                    {SITE_CONFIG.college}<br />
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="glass p-6 rounded-xl hover:shadow-lg transition-all group">
              <div className="flex gap-4 items-start cursor-pointer">
                <Navigation className="text-ted flex-shrink-0 mt-1 group-hover:rotate-45 transition-transform" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Get Directions</h3>
                  <p className="text-ted text-sm font-semibold group-hover:underline">
                    Open in Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="flex gap-4 items-start mb-4">
                <Phone className="text-ted flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">{SITE_CONFIG.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-ted flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-ted text-sm font-semibold hover:underline cursor-pointer">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="glass p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Venue Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Spacious Auditorium",
                  "Premium Sound System",
                  "Modern Lighting",
                  "Comfortable Seating",
                  "Free WiFi",
                  "Parking Available",
                ].map((amenity, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-ted rounded-full" />
                    {amenity}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
