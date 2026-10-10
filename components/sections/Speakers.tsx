"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  image: string;
}

const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: "Anil Geela",
    image: "/speakers/speaker1.jpeg",
  },
  {
    id: 2,
    name: "Avinash Baviskar",
    image: "/speakers/speaker2.jpeg",
  },
  {
    id: 3,
    name: "Sameeksha Seerum",
    image: "/speakers/speaker3.png",
  },
  {
    id: 4,
    name: "Bhagavathi",
    image: "/speakers/speaker4.png",
  },
  {
    id: 5,
    name: "Avinash Mada",
    image: "/speakers/speaker5.jpeg",
  },
];

export default function Speakers() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="speakers"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Featured Speakers
          </h2>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group text-center"
            >
              {/* Card Container */}
              <div className="bg-black border border-ted/30 rounded-lg p-6 hover:border-ted transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-square bg-gradient-to-br from-ted/20 to-ted-dark/20 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Speaker Name */}
                <h3 className="text-lg font-bold text-white mt-auto">
                  {speaker.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
