"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScheduleItem {
  time: string;
  programme: string;
}

const SCHEDULE_DATA: ScheduleItem[] = [
  { time: "9:30 - 9:35 AM", programme: "Inauguration" },
  { time: "9:35 - 9:40 AM", programme: "Lamp Lighting Ceremony" },
  { time: "9:40 - 10:00 AM", programme: "Buffer / Stage Preparation" },
  { time: "10:00 - 10:30 AM", programme: "Speaker 1 Session" },
  { time: "10:30 - 11:00 AM", programme: "Speaker 2 Session" },
  { time: "11:00 - 11:20 AM", programme: "Classical Dance Performance" },
  { time: "11:20 - 11:50 AM", programme: "Speaker 3 Session" },
  { time: "11:50 AM - 12:00 PM", programme: "Snack Distribution" },
  { time: "12:00 - 12:40 PM", programme: "Speaker 4 Session" },
  { time: "12:40 - 1:10 PM", programme: "Speaker 5 Session" },
  { time: "1:10 - 1:30 PM", programme: "Pirates Performance" },
  { time: "1:30 PM onwards", programme: "Vote of Thanks & Closing" },
];

export default function Schedule() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ted/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Event Schedule</h2>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-ted via-ted to-red-700 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="w-full space-y-8 sm:space-y-12">
            {SCHEDULE_DATA.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start justify-between relative"
                >
                  {/* Left side content */}
                  {isLeft ? (
                    <>
                      <div className="w-5/12 text-right">
                        <p className="text-ted font-bold text-xs sm:text-sm">{item.time}</p>
                        <p className="text-white font-semibold text-sm sm:text-base">{item.programme}</p>
                      </div>
                      {/* Dot - aligned with time */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.08 + 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-ted rounded-full ring-4 ring-white z-10 flex-shrink-0 mt-0"
                      />
                      <div className="w-5/12" />
                    </>
                  ) : (
                    <>
                      <div className="w-5/12" />
                      {/* Dot - aligned with time */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.08 + 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-ted rounded-full ring-4 ring-white z-10 flex-shrink-0 mt-0"
                      />
                      {/* Right side content */}
                      <div className="w-5/12 text-left">
                        <p className="text-ted font-bold text-xs sm:text-sm">{item.time}</p>
                        <p className="text-white font-semibold text-sm sm:text-base">{item.programme}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
