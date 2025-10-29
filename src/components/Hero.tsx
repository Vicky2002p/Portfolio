"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  Variants,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBackgroundSize("90%");
      } else {
        setBackgroundSize("cover");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const greetings = [
    { text: "Hello, I am", name: "Vihvek Patel", lang: "English" },
    { text: "नमस्ते, मैं", name: "विह्वेक पटेल", lang: "Hindi" },
    { text: "Bonjour, je suis", name: "Vihvek Patel", lang: "French" },
    { text: "Hola, soy", name: "Vihvek Patel", lang: "Spanish" },
    { text: "નમસ્તે, હું", name: "વિહ્વેક પટેલ", lang: "Gujarati" },
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const textVariants: Variants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          y,
          backgroundPosition: "center 23%",
          backgroundSize,
        }}
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-no-repeat"
      />

      {/* Dark Overlay - Reduced opacity for light backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-rich_black-600/40 via-rich_black-600/30 to-rich_black-600/40" />

      {/* Alternative: Add text shadow backdrop for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-rich_black-600/20 via-transparent to-rich_black-600/20" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        {/* Animated greeting text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={greetings[currentGreeting].lang}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-6"
          >
            <p className="text-sm md:text-base font-semibold text-mahogany-500 mb-4 tracking-widest uppercase">
              {greetings[currentGreeting].text}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-wheat-500 mb-8 leading-tight drop-shadow-lg">
              {greetings[currentGreeting].name}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Tagline and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-wheat-600 font-light leading-relaxed">
            Full-Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-base md:text-lg text-wheat-700 mt-4 leading-relaxed">
            Building efficient applications with modern web technologies.
            Passionate about turning complex problems into elegant solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-mahogany-600 to-mahogany-700 text-wheat-500 font-semibold rounded-lg hover:shadow-lg hover:shadow-mahogany-600/50 transition-all duration-300 shadow-lg"
            >
              View My Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-wheat-500 text-wheat-500 font-semibold rounded-lg hover:bg-wheat-500 hover:text-rich_black-600 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-wheat-600 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-wheat-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
