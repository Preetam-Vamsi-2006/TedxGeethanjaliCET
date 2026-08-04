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
        event_name: "TEDXGeethanjaliCET - Bridging Tomorrow",
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
      className="relative py-8 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-xl font-bold mb-1 text-white">Get In Touch</h2>
          <p className="text-gray-400 text-xs">
            Have questions? Contact us
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 bg-black/40 border border-ted/30 p-3 rounded-lg"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm"
              >
                ✓ Thank you! We've received your message and will get back to you soon.
              </motion.div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-0.5">
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className="w-full px-2 py-1 rounded-md bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-1 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-xs"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-0.5">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-0.5">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full px-2 py-1 rounded-md bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-1 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-xs"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-0.5">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-0.5">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                placeholder="How can we help?"
                className="w-full px-2 py-1 rounded-md bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-1 focus:ring-ted/50 transition-all text-white placeholder-gray-500 text-xs"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-0.5">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-0.5">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Tell us what you're thinking..."
                rows={2}
                className="w-full px-2 py-1 rounded-md bg-black/40 border border-ted/30 focus:outline-none focus:border-ted focus:ring-1 focus:ring-ted/50 transition-all resize-none text-white placeholder-gray-500 text-xs"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-0.5">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-3 py-1 bg-ted text-white font-semibold rounded-md hover:bg-ted-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xs"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
