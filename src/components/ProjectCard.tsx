"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -20 }}
      className="group h-full cursor-pointer"
    >
      {/* Main card */}
      <div className="relative h-full bg-gradient-to-br from-dark_slate-600 to-dark_slate-700 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-mahogany-600/20 transition-all duration-500">
        {/* Animated background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
          className="absolute inset-0 opacity-20 bg-gradient-to-br from-mahogany-600/10 via-transparent to-deep_purple-600/10"
        />

        {/* Content wrapper */}
        <div className="relative z-10 h-full flex flex-col overflow-hidden">
          {/* Image Section */}
          {project.image && (
            <div className="relative h-64 overflow-hidden">
              {/* Base image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                  priority={false}
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.jpg";
                  }}
                />
              </motion.div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark_slate-700" />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"
              />

              {/* Featured badge */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-mahogany-600 to-deep_purple-600 backdrop-blur-lg text-wheat-500 text-xs font-black rounded-full shadow-lg border border-white/20 uppercase tracking-wide z-20"
              >
                ✨ Featured
              </motion.div>
            </div>
          )}

          {/* Content */}
          <div className="flex-grow flex flex-col p-7 md:p-8 space-y-5">
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black text-wheat-500 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-wheat-400 group-hover:to-mahogany-400 group-hover:bg-clip-text transition-all duration-500"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm leading-relaxed font-medium flex-grow"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-white/40 font-black uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      type: "spring",
                      stiffness: 120,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <motion.div
                      whileHover={{
                        background: "rgba(157, 78, 68, 0.3)",
                        borderColor: "rgba(242, 195, 94, 0.7)",
                      }}
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white/80 border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300"
                    >
                      {tech}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
            />

            {/* Buttons */}
            <div className="flex gap-3 pt-1">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 relative px-5 py-3 bg-gradient-to-r from-mahogany-600 to-deep_purple-600 text-wheat-500 font-bold rounded-lg hover:shadow-lg hover:shadow-mahogany-600/30 transition-all text-sm overflow-hidden group"
                >
                  {/* Shimmer */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    Live Demo
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </span>
                </motion.a>
              )}

              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 relative px-5 py-3 border-2 border-wheat-500/60 text-wheat-500 font-bold rounded-lg hover:bg-wheat-500/10 transition-all text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    GitHub
                    <motion.svg
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </motion.svg>
                  </span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
