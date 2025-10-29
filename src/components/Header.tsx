"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > 200) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* Background with dynamic effect */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled
              ? "bg-rich_black-600/70 backdrop-blur-xl border-b border-wheat-500/20 shadow-2xl"
              : "bg-transparent border-b border-transparent"
          }`}
        />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                {/* Logo Icon - Ultra Premium */}
                <div className="relative w-10 h-10 group cursor-pointer [perspective:1000px]">
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-mahogany-600 to-deep_purple-600 blur-md opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* 3D rotatable container */}
                  <motion.div
                    whileHover={{ rotateX: 5, rotateY: 10, scale: 1.1 }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Front face */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-mahogany-600 via-mahogany-700 to-deep_purple-600 flex items-center justify-center overflow-hidden border border-mahogany-500/50 shadow-2xl">
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      />

                      <motion.span
                        className="relative text-wheat-500 font-black text-lg"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(249, 194, 101, 0)",
                            "0 0 20px rgba(249, 194, 101, 0.8)",
                            "0 0 10px rgba(249, 194, 101, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        V
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Animated ring */}
                  <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="0.5"
                      strokeDasharray="113"
                      animate={{
                        strokeDashoffset: [0, -113],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#c44900"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6b4fa8"
                          stopOpacity="0.8"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Brand Text */}
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="text-lg font-bold text-wheat-500">
                    Vivek
                  </span>
                  <span className="text-xs text-mahogany-600 font-semibold">
                    Developer
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-4 py-2 text-wheat-600 font-medium text-sm group"
                >
                  {/* Background hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-mahogany-600/10 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text */}
                  <span className="relative group-hover:text-mahogany-500 transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* Bottom border animation */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-mahogany-600 to-wheat-500"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg bg-mahogany-600 hover:bg-mahogany-700 text-wheat-500 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Get in Touch</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-full bg-wheat-500 rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-full bg-wheat-500 rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                  }
                  className="h-0.5 w-full bg-wheat-500 rounded-full transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 lg:hidden z-40 pt-4 pb-6"
          >
            {/* Glassmorphic Background */}
            <motion.div
              className="absolute inset-0 bg-rich_black-600/95 backdrop-blur-xl border-b border-wheat-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Items */}
            <motion.nav
              className="relative container mx-auto px-4 flex flex-col gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-4 py-3 text-wheat-600 font-medium rounded-lg group overflow-hidden"
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-mahogany-600/10 -z-10"
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="group-hover:text-mahogany-500 transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                className="mt-4 px-4 py-3 rounded-lg bg-mahogany-600 hover:bg-mahogany-700 text-wheat-500 font-semibold text-center shadow-lg transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
