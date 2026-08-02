# TEDx Geethanjali College of Engineering and Technology - Website

A premium, production-ready website for TEDx Geethanjali College featuring cutting-edge animations, responsive design, and optimal performance.

## 🚀 Features

### Premium Interactions
- ✨ Animated TEDx preloader
- 🎯 Glassmorphism navigation bar
- 🎨 Lenis smooth scrolling
- 🎭 GSAP and Framer Motion scroll animations
- 🖱️ Custom animated cursor
- ✨ Floating particles and animated background
- 📜 Parallax scrolling
- 🎬 Split-text and image reveal animations
- 🎲 3D hover cards
- 🌊 Magnetic buttons with ripple effects
- 📊 Scroll progress indicator
- ⬆️ Back-to-top button

### Sections
- Hero with animated background and CTA buttons
- About TED, TEDx, and TEDXGeethanjaliCET
- Event Theme showcase
- Featured Speakers with interactive modal
- Event Schedule/Timeline
- Countdown Timer
- Previous Editions Gallery with lightbox
- Sponsors with infinite logo marquee
- Organizing Team profiles
- FAQ with accordion
- Testimonials section
- Venue information with interactive map
- Contact Form with validation
- Premium Footer with social links

## 📋 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP + ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Carousel**: Embla Carousel
- **Counters**: React CountUp
- **Intersection Observer**: react-intersection-observer
- **Animations**: Lottie React
- **Image Optimization**: Next.js Image
- **Deployment**: Vercel

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd tedx-gcet
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
tedx-gcet/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Top navigation
│   ├── Preloader.tsx         # Loading animation
│   ├── CustomCursor.tsx      # Custom cursor
│   ├── SmoothScroll.tsx      # Lenis integration
│   ├── ParticleBackground.tsx# Particle effects
│   ├── ScrollProgressBar.tsx # Scroll indicator
│   ├── BackToTop.tsx         # Back to top button
│   ├── Footer.tsx            # Footer component
│   ├── LoadingFallback.tsx   # Loading state
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── EventTheme.tsx    # Event theme
│       ├── Speakers.tsx      # Speakers section
│       ├── Schedule.tsx      # Schedule timeline
│       ├── CountdownTimer.tsx# Countdown
│       ├── Gallery.tsx       # Gallery lightbox
│       ├── Sponsors.tsx      # Sponsors marquee
│       ├── Team.tsx          # Team section
│       ├── FAQ.tsx           # FAQ accordion
│       ├── Testimonials.tsx  # Testimonials
│       ├── Venue.tsx         # Venue info
│       └── Contact.tsx       # Contact form
├── lib/
│   ├── data.ts              # Content data
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Image assets
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
├── postcss.config.mjs       # PostCSS config
└── package.json             # Dependencies
```

## 🎨 Color Scheme

- **Primary**: TED Red (`#EB0028`)
- **Primary Dark**: `#B80020`
- **Background**: White (`#ffffff`)
- **Text**: Black (`#000000`)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 🖥️ Desktops (1024px and up)
- 🖥️ Large screens (1280px and up)

## ⚡ Performance Optimizations

- Dynamic imports with code splitting
- Image optimization with Next.js
- Lazy loading for components
- Smooth scrolling without performance penalty
- Optimized animations
- CSS compression via Tailwind
- Server-side rendering where appropriate
- Efficient re-renders with React 19

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Content Management
Edit `/lib/data.ts` to update:
- Site configuration
- Event details
- Speakers information
- Schedule
- FAQ
- Team members
- Testimonials
- Gallery images
- Sponsors

## 📝 Content Sections

### Data Structure
All content is managed through static JSON in `/lib/data.ts`. Update the data files to modify:

- Event dates and times
- Speaker profiles
- Schedule items
- FAQ questions
- Team members
- Testimonials
- Gallery images

## 🚀 Deployment

### Deploy on Vercel

The recommended way to deploy is using Vercel:

1. **Push to GitHub**
```bash
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will automatically deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/docs/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Built with ❤️ by the TEDXGeethanjaliCET Team

## 📞 Contact

For inquiries about the website or event:
- **Email**: tedx@geethanjali.edu.in
- **Phone**: +91 XXXXX XXXXX
- **Location**: Geethanjali College of Engineering and Technology, Hyderabad

## 🙏 Acknowledgments

Inspired by premium websites from:
- Apple
- Stripe
- Linear
- Framer
- Vercel
- Awwwards award winners

---

**Last Updated**: December 2024

Built with Next.js, React, and ❤️
