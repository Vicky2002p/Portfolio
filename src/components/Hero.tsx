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
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // Multilingual greetings
  const greetings = [
    { text: "Hello, I am", name: "Vivek Patel", lang: "English" },
    { text: "नमस्ते, मैं", name: "विवेक पटेल", lang: "Hindi" },
    { text: "Bonjour, je suis", name: "Vivek Patel", lang: "French" },
    { text: "Hola, soy", name: "Vivek Patel", lang: "Spanish" },
    { text: "નમસ્તે, હું", name: "વિવેક પટેલ", lang: "Gujarati" },
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  // Animation for cycling greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  const textVariants: Variants = {
  initial: { opacity: 0, y: 10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-rich_black-500 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[currentGreeting].lang}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-3xl md:text-4xl font-bold text-wheat-500 mb-4"
          >
            <span className="text-2xl md:text-3xl text-wheat-600">
              {greetings[currentGreeting].text}
            </span>{" "}
            <span className="text-5xl md:text-6xl text-wheat-400 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              {greetings[currentGreeting].name}
            </span>
          </motion.h1>
        </AnimatePresence>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-wheat-700 max-w-2xl mx-auto mb-6"
        >
          Enthusiastic software developer with hands-on experience in full-stack
          development, data-driven solutions, and system optimization.
          Proficient in building efficient applications with Python, React, and
          SQL.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="inline-block bg-mahogany-500 text-wheat-900 px-6 py-3 rounded-lg hover:bg-mahogany-400 transition"
          >
            View My Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
