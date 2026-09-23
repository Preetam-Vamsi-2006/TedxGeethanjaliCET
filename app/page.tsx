"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import EventTheme from "@/components/sections/EventTheme";
import Schedule from "@/components/sections/Schedule";
import Team from "@/components/sections/Team";
import PaymentRegistration from "@/components/sections/PaymentRegistration";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";
import BookTicketsCTA from "@/components/BookTicketsCTA";
import RegistrationClosedModal from "@/components/RegistrationClosedModal";

export default function Home() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  useEffect(() => {
    // Prevent auto-scroll to hash on page load
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <SmoothScroll>
        <ParticleBackground />
        <ScrollProgressBar />

        <Navigation />

        {/* Book Tickets CTA */}
        <BookTicketsCTA onOpen={() => setShowRegistrationModal(true)} />

        <main className="relative">
          <Hero />
          <About />
          <EventTheme />
          <Schedule />
          <Team />
          <PaymentRegistration />
          <Contact />
        </main>

        <Footer />
      </SmoothScroll>

      <BackToTop />

      {/* Registration Modal */}
      <RegistrationClosedModal
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </div>
  );
}
