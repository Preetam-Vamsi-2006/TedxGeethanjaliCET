"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState("core");

  const teamCategories = [
    { id: "core", label: "Core Team" },
    { id: "branding", label: "Branding & Outreach" },
    { id: "curation", label: "Curation & Hospitality" },
    { id: "logistics", label: "Logistics & Operations" },
  ];

  const teamMembers = {
    core: [
      {
        id: 1,
        name: "K.Suhitha",
        role: "Organizer",
        image: "/team/suhitha.jpg",
        social: { linkedin: "https://www.linkedin.com/in/ksuhitha/", instagram: "https://www.instagram.com/suhithareddy_06/" },
      },
      {
        id: 2,
        name: "K.Gunjana",
        role: "Co-organizer",
        image: "/team/gunjana.jpg",
        social: { linkedin: "https://www.linkedin.com/in/gunjana-kachuwah/", instagram: "https://www.instagram.com/mni_gunjana/" },
      },
      {
        id: 3,
        name: "Ms.Preeti Prasada(Senior Assistant Professor)",
        role: "Faculty Co-ordinator",
        image: "/team/faculty.jpeg",
        social: { linkedin: "#", instagram: "#" },
      }
    ],
    branding: [
      {
        id: 1,
        name: "Akash",
        role: "Branding",
        image: "/team/akash.JPG",
        social: { linkedin: "https://www.linkedin.com/in/akash-reddy-nalla-601613327/", instagram: "https://www.instagram.com/aakash.reddyyy/" },
      },
      {
        id: 2,
        name: "Hansika",
        role: "Outreach",
        image: "/team/hansika.jpg",
        social: { linkedin: "http://www.linkedin.com/in/hansika-belgavi", instagram: "https://www.instagram.com/hansika.bel/" },
      },
      {
        id: 3,
        name: "Sai Vamshi",
        role: "Social Media Manager",
        image: "/team/saivamshi.JPG",
        social: { linkedin: "https://www.linkedin.com/in/sai-vamshi-96a78b28a/", instagram: "https://www.instagram.com/me_.vamshi/" },
      },
      {
        id: 4,
        name: "J. Ruthpriyadarshini",
        role: "Sponsers",
        image: "/team/Ruth.JPG",
        social: { linkedin: "https://www.linkedin.com/in/ruthpriyadarshini-jella/", instagram: "https://www.instagram.com/ruthzrealm/" },
      },
      {
        id: 5,
        name: "G.Preetham Vamshi",
        role: "Tech Lead",
        image: "/team/vamshi.JPG",
        social: { linkedin: "https://www.linkedin.com/in/gollapalli-preetam-vamsi", instagram: "https://www.instagram.com/vamshi_sharma06/" },
      },
    ],
    curation: [
      {
        id: 1,
        name: "Saketh",
        role: "Curation Head",
        image: "/team/saketh.jpg",
        social: { linkedin: "https://www.linkedin.com/in/saketh-rao-70165b306/", instagram: "#" },
      },
      {
        id: 2,
        name: "Harsh jha",
        role: "Hospitality Manager",
        image: "/team/harsh.JPG",
        social: { linkedin: "http://www.linkedin.com/in/harsh-jha-883aa5327", instagram: "https://www.instagram.com/markjhaash/" },
      },
    ],
    logistics: [
      {
        id: 1,
        name: "Sam Benedict",
        role: "Logistics Lead",
        image: "/team/sam.JPG",
        social: { linkedin: "#", instagram: "https://www.instagram.com/sapphireprince__/" },
      },
      {
        id: 2,
        name: " K. Jishnu Vardhan Naidu",
        role: "Operations Manager",
        image: "/team/jishnu.JPG",
        social: { linkedin: "https://www.linkedin.com/in/kommi-jishnu-vardhan-naidu-568b4826b?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/9999_jishnu/" },
      },
      {
        id: 3,
        name: "S. Nyneeta Rao",
        role: "",
        image: "/team/Nyneeta.jpeg",
        social: { linkedin: "https://www.linkedin.com/in/nyneeta-rao/", instagram: "#" },
      },
    ],
  };

  const currentTeam = teamMembers[activeTab as keyof typeof teamMembers] || [];

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12 border-b border-ted/30 pb-4 overflow-x-auto"
        >
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-ted text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {currentTeam.length > 0 ? (
            currentTeam.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group text-center"
              >
                {/* Card Container */}
                <div className="bg-black border border-ted/30 rounded-lg p-6 hover:border-ted transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-square bg-gradient-to-br from-ted/20 to-ted-dark/20 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-lg font-bold text-white mb-1 mt-auto">
                    {member.name}
                  </h3>
                  <p className="text-ted text-sm font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-center">
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="inline-block p-2 bg-ted/20 text-ted rounded-full hover:bg-ted hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="inline-block p-2 bg-ted/20 text-ted rounded-full hover:bg-ted hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white/50 text-lg">
                Coming soon...
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
