"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { SITE_CONFIG } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Initialize EmailJS
if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send via EmailJS with template variables matching your EmailJS template
      const templateParams = {
        to_email: SITE_CONFIG.email,
        from_name: data.name,
        from_email: data.email,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: SITE_CONFIG.phone,
        college: SITE_CONFIG.college,
        location: SITE_CONFIG.location,
        event_name: "TEDxGeethanjaliCET - Spaces Between",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
        console.log("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden scroll-mt-24"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Get In Touch</h2>
          <p className="text-white/60 mb-4 text-sm">
            Have questions? We'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-ted mx-auto" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-black/40 border border-ted/30 p-6 rounded-lg"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm"
              >
                ✓ Thank you! We've received your message and will get back to you soon.
              </motion.div>
            )}

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-2 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-sm"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-2 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                placeholder="How can we help?"
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-2 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-sm"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Tell us what you're thinking..."
                rows={3}
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-2 focus:ring-ted/50 transition-all resize-none text-white placeholder-gray-500 text-sm"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 bg-ted text-white font-semibold rounded-lg hover:bg-ted-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
