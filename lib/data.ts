// Site Configuration
export const SITE_CONFIG = {
  name: "TEDx Geethanjali College",
  description: "Ideas Worth Spreading",
  college: "Geethanjali College of Engineering and Technology",
  location: "Hyderabad, India",
  phone: "+91 XXXXX XXXXX",
  email: "tedx@geethanjali.edu.in",
  socialLinks: {
    instagram: "https://www.instagram.com/tedxgcet",
    twitter: "https://twitter.com/tedxgcet",
    facebook: "https://www.facebook.com/share/19Hv5tFt9n/",
    linkedin: "https://www.linkedin.com/company/tedxgcet",
  },
};

// Event Data
export const EVENT_DATA = {
  name: "TEDx Geethanjali 2024",
  theme: "Bridging Tomorrow",
  date: "2026-08-08",
  time: "09:00 AM",
  venue: "Main Auditorium, Geethanjali College",
  eventDate: new Date(2026, 7, 7), // August 8, 2026 (Note: month is 0-indexed, so 7 = August)
};

// Speakers
export const SPEAKERS = [
  {
    id: 1,
    name: "Dr. Innovation Leader",
    title: "AI & Sustainability Visionary",
    bio: "Leading the charge in sustainable AI innovation across industries.",
    image: "/images/speaker1.jpg",
    expertise: ["AI", "Sustainability", "Innovation"],
  },
  {
    id: 2,
    name: "Prof. Tech Pioneer",
    title: "Quantum Computing Expert",
    bio: "Pioneering quantum computing solutions for real-world problems.",
    image: "/images/speaker2.jpg",
    expertise: ["Quantum Computing", "Research", "Technology"],
  },
  {
    id: 3,
    name: "Ms. Future Builder",
    title: "Entrepreneur & Changemaker",
    bio: "Building impactful startups that change the world.",
    image: "/images/speaker3.jpg",
    expertise: ["Entrepreneurship", "Social Impact", "Leadership"],
  },
  {
    id: 4,
    name: "Mr. Design Innovator",
    title: "Human-Centered Designer",
    bio: "Designing solutions that put humans at the center.",
    image: "/images/speaker4.jpg",
    expertise: ["Design", "UX/UI", "Innovation"],
  },
];

// Schedule
export const SCHEDULE = [
  {
    id: 1,
    time: "09:00 AM",
    title: "Registration & Welcome",
  },
  {
    id: 2,
    time: "09:30 AM",
    title: "Opening",
  },
  {
    id: 3,
    time: "10:00 AM",
    title: "President Speech",
  },
  {
    id: 4,
    time: "11:00 AM",
    title: "Vice Chairman Speech",
  },
  {
    id: 5,
    time: "11:15 AM",
    title: "Team Reveal",
  },
  {
    id: 6,
    time: "12:00 PM",
    title: "Recruitments",
  },
  {
    id: 7,
    time: "01:00 PM",
    title: "Rounds",
  },
  {
    id: 8,
    time: "02:00 PM",
    title: "Announcements",
  },
  {
    id: 9,
    time: "03:00 PM",
    title: "Networking & Refreshments",
  },
  {
    id: 10,
    time: "04:00 PM",
    title: "Closing Remarks",
  },
];

// FAQ
export const FAQ_DATA = [
  {
    id: 1,
    question: "What is TEDx?",
    answer:
      "TEDx is a program of local, self-organized event that brings people together to share TED-like experiences. TEDx events combine live speakers and curated videos to spark deep discussion and connection in a community.",
  },
  {
    id: 2,
    question: "Who can attend?",
    answer:
      "TEDx events are open to everyone! Students, faculty, staff, and community members are welcome to attend and be part of this inspiring experience.",
  },
  {
    id: 3,
    question: "Is there a registration fee?",
    answer:
      "Registration details will be announced soon. Keep an eye on our social media for updates on registration and ticket availability.",
  },
  {
    id: 4,
    question: "Can I bring guests?",
    answer:
      "Yes! We welcome you to bring friends, family, and colleagues. Additional registrations may be required for guests.",
  },
  {
    id: 5,
    question: "Will the event be recorded?",
    answer:
      "Yes, the event will be recorded and made available on our YouTube channel after the event for those who couldn't attend.",
  },
  {
    id: 6,
    question: "How can I become a sponsor?",
    answer:
      "We're looking for corporate and individual sponsors! Please contact us at tedx@geethanjali.edu.in for sponsorship opportunities.",
  },
];

// Sponsors
export const SPONSORS = [
  { id: 1, name: "Tech Corp", logo: "/images/sponsor1.svg" },
  { id: 2, name: "Innovation Labs", logo: "/images/sponsor2.svg" },
  { id: 3, name: "Future Ventures", logo: "/images/sponsor3.svg" },
  { id: 4, name: "Digital Solutions", logo: "/images/sponsor4.svg" },
  { id: 5, name: "Cloud Systems", logo: "/images/sponsor5.svg" },
  { id: 6, name: "AI Research", logo: "/images/sponsor6.svg" },
];

// Team Members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Organizer Lead",
    role: "Event Curator",
    image: "/images/team1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Coordinator",
    role: "Program Manager",
    image: "/images/team2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Designer",
    role: "Creative Lead",
    image: "/images/team3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Developer",
    role: "Tech Lead",
    image: "/images/team4.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

// Gallery Images (Previous Editions)
export const GALLERY_IMAGES = [
  { id: 1, title: "Opening Ceremony", image: "/images/gallery1.jpg" },
  { id: 2, title: "Keynote Speaker", image: "/images/gallery2.jpg" },
  { id: 3, title: "Audience Engagement", image: "/images/gallery3.jpg" },
  { id: 4, title: "Panel Discussion", image: "/images/gallery4.jpg" },
  { id: 5, title: "Networking Session", image: "/images/gallery5.jpg" },
  { id: 6, title: "Closing Ceremony", image: "/images/gallery6.jpg" },
];

// About sections
export const ABOUT_TED = {
  title: "About TED",
  description:
    "TED is a nonprofit devoted to spreading ideas worth sharing. Founded in 1984, TED combines Technology, Entertainment, and Design. Today it covers nearly all topics in over 100 languages.",
  vision:
    "Our vision is to create a global community of people who believe that sharing knowledge and insights can change the world.",
};

export const ABOUT_TEDX = {
  title: "About TEDx",
  description:
    "TEDx is a program of local, self-organized events that brings people together to share a TED-like experience. TEDx events combine videos and live speakers to spark deep discussion.",
  mission:
    "In the spirit of ideas worth spreading, TEDx events help share ideas with local communities around the world.",
};

export const ABOUT_TEDX_GCET = {
  title: "About TEDXGeethanjaliCET",
  description:
    "TEDXGeethanjaliCET is an independently organized TED-like event celebrating innovative ideas from students, faculty, and community. We believe in the power of ideas to inspire change.",
  highlights: [
    "Student-led initiative",
    "Industry insights",
    "Networking opportunities",
    "Innovation showcase",
    "Community engagement",
  ],
};

// Event Theme
export const EVENT_THEME = {
  title: "Bridging Tomorrow",
  description:
    "Our theme 'Bridging Tomorrow' represents the connection between today's ideas and tomorrow's innovations. It embodies our commitment to bridging gaps in technology, knowledge, and human connection to create a better future.",
  keyPoints: [
    "Connecting past wisdom with future innovation",
    "Building bridges between different disciplines",
    "Creating opportunities for cross-sector collaboration",
    "Inspiring the next generation of leaders",
  ],
};
