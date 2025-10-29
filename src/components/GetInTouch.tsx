"use client";

import { motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS (do this once)
  useEffect(() => {
    emailjs.init("jihWBaTFPdEByGa-P"); // Replace with your EmailJS Public Key
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Generate timestamp for admin email
    const now = new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const userParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    const adminParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      time: now,
    };

    try {
      await emailjs.send(
        "service_b0c8cy5", // e.g., service_abc123
        "template_imozceb", // e.g., template_xyz789 (your auto-reply template)
        userParams
      );
      // 2. Send notification to YOU
      await emailjs.send(
        "service_b0c8cy5",
        "template_7zhj99a", // e.g., template_admin123
        adminParams
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-rich_black-600 via-dark_slate-600 to-rich_black-600 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-mahogany-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-deep_purple-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-wheat-500 pb-2 mb-4 bg-gradient-to-r from-wheat-400 via-mahogany-500 to-wheat-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-wheat-700 text-lg max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let&apos;s create something
            amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-dark_slate-600/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
              variants={containerVariants}
            >
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-wheat-500 text-sm font-bold mb-3 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={formStatus === "loading"}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm text-wheat-500 placeholder-wheat-700/50 border-2 border-white/20 focus:border-mahogany-600 focus:outline-none focus:ring-2 focus:ring-mahogany-600/30 transition-all duration-300 disabled:opacity-50"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-wheat-500 text-sm font-bold mb-3 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={formStatus === "loading"}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm text-wheat-500 placeholder-wheat-700/50 border-2 border-white/20 focus:border-mahogany-600 focus:outline-none focus:ring-2 focus:ring-mahogany-600/30 transition-all duration-300 disabled:opacity-50"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={itemVariants}>
                <label className="block text-wheat-500 text-sm font-bold mb-3 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={formStatus === "loading"}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm text-wheat-500 placeholder-wheat-700/50 border-2 border-white/20 focus:border-mahogany-600 focus:outline-none focus:ring-2 focus:ring-mahogany-600/30 transition-all duration-300 disabled:opacity-50 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: formStatus === "loading" ? 1 : 1.05 }}
                whileTap={{ scale: formStatus === "loading" ? 1 : 0.95 }}
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full relative px-8 py-4 bg-gradient-to-r from-mahogany-600 to-deep_purple-600 text-wheat-500 font-black rounded-xl hover:shadow-2xl hover:shadow-mahogany-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg uppercase tracking-wider overflow-hidden group"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                />

                <span className="relative flex items-center justify-center gap-2">
                  {formStatus === "loading" ? (
                    <>
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </motion.svg>
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      Message Sent!
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      Something went wrong
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.svg
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </>
                  )}
                </span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-black text-wheat-500 mb-8">Connect</h3>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:vivekjpatel2002@gmail.com"
              whileHover={{ scale: 1.05, x: 10 }}
              className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-mahogany-600/50 transition-all duration-300"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">
                ✉️
              </span>
              <div className="flex-1">
                <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-wheat-500 font-semibold group-hover:text-mahogany-500 transition-colors">
                  vivekjpatel2002@gmail.com
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={itemVariants}
              href="https://linkedin.com/in/vivek-patel-491458223"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 10 }}
              className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-mahogany-600/50 transition-all duration-300"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">
                💼
              </span>
              <div className="flex-1">
                <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">
                  LinkedIn
                </p>
                <p className="text-wheat-500 font-semibold group-hover:text-mahogany-500 transition-colors">
                  LinkedIn Profile
                </p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={itemVariants}
              href="https://github.com/Vicky2002p"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 10 }}
              className="group flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-mahogany-600/50 transition-all duration-300"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">
                💻
              </span>
              <div className="flex-1">
                <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-1">
                  GitHub
                </p>
                <p className="text-wheat-500 font-semibold group-hover:text-mahogany-500 transition-colors">
                  View My Projects
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
