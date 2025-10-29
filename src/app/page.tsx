'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import GetInTouch from '../components/GetInTouch';
import projectsData from '../data/projects.json';
import { Project } from '../types';

export default function Home() {
  const projects: Project[] = projectsData;

  return (
    <div className="bg-rich_black-600">
      <Hero />
      
      <motion.section
        id="about"
        className="py-24 bg-gradient-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-wheat-500 text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/3"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-mahogany rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Vihvek Patel"
                  width={300}
                  height={300}
                  className="relative rounded-full shadow-xl border-4 border-wheat-500 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/fallback.jpg';
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/3"
            >
              <p className="text-wheat-600 text-lg leading-relaxed mb-4">
                I&apos;m Vihvek Patel, a software engineering graduate from the University of Windsor (BSc,
                Computer Science, May 2021 – Dec 2024). I specialize in building efficient, user-friendly
                applications using Python, React, and SQL.
              </p>
              <p className="text-wheat-700 text-lg leading-relaxed">
                My experience spans full-stack development, data visualization, and system optimization,
                with a passion for turning complex requirements into innovative solutions. Based in
                Mississauga, ON, I&apos;m eager to contribute to impactful software development projects.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Experience />
      <Skills />

      <section id="projects" className="py-24 bg-rich_black-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-wheat-500 text-center mb-16">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
}