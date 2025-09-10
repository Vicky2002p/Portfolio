'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { Project } from '../types';

export default function Home() {
  const projects: Project[] = projectsData;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-rich_black-500">
      <Hero />
      <motion.section
        id="about"
        className="py-20 bg-dark_slate_gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-wheat-500 text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <Image
                src="/images/profile.jpg"
                alt="Vivek Patel"
                width={300}
                height={300}
                className="rounded-full shadow-md object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/fallback.jpg';
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-2/3 text-wheat-700 text-lg"
            >
              <p>
                I'm Vivek Patel, a software engineering graduate from the University of Windsor (BSc,
                Computer Science, May 2021 – Dec 2024). I specialize in building efficient, user-friendly
                applications using Python, React, and SQL. My experience spans full-stack development,
                data visualization, and system optimization, with a passion for turning complex
                requirements into innovative solutions. Based in Mississauga, ON, I'm eager to
                contribute to impactful software development projects.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Experience />
      <Skills />
      <section id="projects" className="py-20 bg-rich_black-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-wheat-500 text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>
      <motion.section
        id="contact"
        className="py-20 bg-dark_slate_gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wheat-500 mb-8">Get in Touch</h2>
          <motion.form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="max-w-lg mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-dark_purple-600 text-wheat-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-dark_purple-600 text-wheat-900"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-dark_purple-600 text-wheat-900 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-mahogany-500 text-wheat-900 px-6 py-2 rounded hover:bg-mahogany-400 transition"
            >
              Send
            </button>
          </motion.form>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-wheat-700 mt-6"
          >
            Or reach out directly:
            <br />
            <a
              href="mailto:vivekjpatel2002@gmail.com"
              className="text-mahogany-500 hover:text-mahogany-400"
            >
              vivekjpatel2002@gmail.com
            </a>
            <br />
            <a
              href="tel:+12267241746"
              className="text-mahogany-500 hover:text-mahogany-400"
            >
              +1 226 724 1746
            </a>
            <br />
            <a
              href="https://linkedin.com/in/vivek-patel-491458223"
              className="text-mahogany-500 hover:text-mahogany-400"
            >
              LinkedIn
            </a>
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}