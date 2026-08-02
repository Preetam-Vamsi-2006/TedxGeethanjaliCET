"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import EventTheme from "@/components/sections/EventTheme";
import Schedule from "@/components/sections/Schedule";
import CountdownTimer from "@/components/sections/CountdownTimer";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  useEffect(() => {
    // Prevent auto-scroll to hash on page load
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-black">
        <SmoothScroll>
          <ParticleBackground />
          <ScrollProgressBar />

          <Navigation />

          <main className="relative">
            <Hero />
            <About />
            <EventTheme />
            <Schedule />
            <CountdownTimer />
            <Team />
            <Contact />
          </main>

          <Footer />
        </SmoothScroll>

        <BackToTop />
      </div>
    </>
  );
}
