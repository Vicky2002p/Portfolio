"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Generate particles only on client side
  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
  }

  interface FooterSection {
    title: string;
    links: FooterLink[];
  }

  const footerLinks: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Vicky2002p",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/vivek-patel-491458223",
          external: true,
        },
        {
          label: "Email",
          href: "mailto:vivekjpatel2002@gmail.com",
          external: true,
        },
      ],
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Vicky2002p",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      bgColor: "from-gray-700 to-gray-800",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/vivek-patel-491458223",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.808 0-9.72h3.554v1.375c.428-.659 1.191-1.598 2.905-1.598 2.124 0 3.715 1.385 3.715 4.365l.001 5.578zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.953.768-1.706 1.959-1.706 1.188 0 1.914.757 1.939 1.706 0 .948-.751 1.706-1.983 1.706zm1.581 11.597H3.715V9.732h3.203v10.72zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      bgColor: "from-blue-700 to-blue-800",
    },
    {
      label: "Email",
      href: "mailto:vivekjpatel2002@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      bgColor: "from-orange-700 to-orange-800",
    },
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setIsLoading(false);

      setTimeout(() => setSubscribed(false), 4000);
    }, 1200);
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
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <footer className="relative bg-rich_black-600 overflow-hidden">
      {/* Animated background */}
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

      {/* Particles - Now using state */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x + "%",
            y: particle.y + "%",
          }}
          animate={{
            opacity: [0.05, 0.3, 0.05],
            y: [0, -40, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-mahogany-400 to-wheat-500"
        />
      ))}

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-mahogany-600/30 backdrop-blur-sm bg-gradient-to-b from-mahogany-600/5 via-transparent to-transparent"
        >
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-black text-wheat-500 mb-4 bg-gradient-to-r from-wheat-400 via-wheat-500 to-mahogany-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Stay Updated
                </motion.h3>
                <motion.p
                  className="text-wheat-700 text-lg md:text-xl font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Get notified about new projects, insights, and opportunities
                </motion.p>
              </motion.div>

              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  {/* Glow background */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(157, 78, 68, 0.1)",
                        "0 0 60px rgba(157, 78, 68, 0.2)",
                        "0 0 40px rgba(157, 78, 68, 0.1)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -inset-1 bg-gradient-to-r from-mahogany-600/20 via-deep_purple-600/10 to-mahogany-600/20 rounded-xl blur-lg"
                  />

                  <div className="relative flex flex-col sm:flex-row gap-3 bg-dark_slate-600/40 backdrop-blur-md p-1.5 rounded-xl border border-wheat-500/30 hover:border-wheat-500/50 transition-colors duration-300">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        placeholder="your@email.com"
                        disabled={isLoading || subscribed}
                        className="w-full px-6 py-4 bg-transparent text-wheat-500 placeholder-wheat-600/60 border-0 rounded-lg focus:outline-none focus:ring-0 transition-all duration-300 font-medium"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading || subscribed}
                      className="relative px-8 py-4 bg-gradient-to-r from-mahogany-600 via-mahogany-600 to-deep_purple-600 text-wheat-500 font-bold rounded-lg overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-mahogany-600/40 border border-mahogany-500/50 group"
                    >
                      {/* Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />

                      <div className="relative flex items-center justify-center gap-2">
                        {subscribed ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Subscribed!
                          </motion.span>
                        ) : isLoading ? (
                          <span className="flex items-center gap-2">
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
                            Subscribing
                          </span>
                        ) : (
                          <>
                            Subscribe
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
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </motion.svg>
                          </>
                        )}
                      </div>
                    </motion.button>
                  </div>
                </div>

                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400/80 text-sm text-center font-medium"
                  >
                    {emailError}
                  </motion.p>
                )}

                {!emailError && (
                  <p className="text-wheat-700/70 text-xs text-center">
                    💌 No spam, unsubscribe anytime
                  </p>
                )}
              </motion.form>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 md:py-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link href="/" className="inline-block mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-mahogany-600 via-mahogany-700 to-deep_purple-600 flex items-center justify-center shadow-xl border border-mahogany-500/50"
                  >
                    <span className="text-wheat-500 font-black text-2xl">
                      V
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-wheat-500">
                      Vivek
                    </h3>
                    <p className="text-xs text-mahogany-500 font-bold tracking-widest">
                      DEVELOPER
                    </p>
                  </div>
                </motion.div>
              </Link>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-wheat-700 text-base leading-relaxed mb-8 max-w-md"
              >
                Crafting beautiful, performant digital experiences with modern
                technologies and creative problem-solving.
              </motion.p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className={`group w-11 h-11 rounded-lg bg-gradient-to-br ${social.bgColor} flex items-center justify-center text-wheat-500 border border-wheat-500/30 hover:border-wheat-500/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-current/20 overflow-hidden relative`}
                    title={social.label}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-wheat-400/0 to-mahogany-600/0 group-hover:from-wheat-400/20 group-hover:to-mahogany-600/20 transition-all" />
                    <div className="relative z-10">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="md:col-span-1"
              >
                <h4 className="text-base font-black text-wheat-500 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <motion.span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-mahogany-500 to-wheat-500" />
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: sectionIndex * 0.08 + linkIndex * 0.06,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-wheat-700/80 hover:text-wheat-400 transition-colors duration-300 text-sm font-medium relative group inline-block"
                      >
                        {link.label}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-mahogany-500 to-mahogany-600 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-mahogany-600/40 via-50% to-transparent mb-12"
          />

          {/* Footer Bottom */}
          <motion.div
            className="text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-wheat-700/80 text-sm font-medium">
                &copy; {currentYear}{" "}
                <span className="text-wheat-500 font-bold">Vivek Patel</span>.
                All rights reserved.
              </p>

              <p className="text-wheat-800/70 text-xs flex items-center justify-center gap-2">
                Crafted with
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                using React • Next.js • Tailwind • Framer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-mahogany-600 to-mahogany-700 flex items-center justify-center text-wheat-500 shadow-2xl hover:shadow-mahogany-600/50 transition-all duration-300 z-40 border border-mahogany-500/40 backdrop-blur-sm group"
        title="Scroll to top"
      >
        <motion.svg
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 group-hover:text-wheat-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>
    </footer>
  );
}
