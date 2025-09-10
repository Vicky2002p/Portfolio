'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark_purple-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          onError={(e) => {
            e.currentTarget.src = '/images/fallback.jpg';
          }}
        />
      )}
      <h3 className="text-xl font-semibold text-wheat-500 mb-2">{project.title}</h3>
      <p className="text-wheat-700 mb-4">{project.description}</p>
      <p className="text-sm text-wheat-600 mb-4">Tech: {project.techStack.join(', ')}</p>
      <div className="flex space-x-4">
        {project.liveLink && (
          <Link href={project.liveLink} className="text-mahogany-500 hover:text-mahogany-400">
            Live Demo
          </Link>
        )}
        {project.githubLink && (
          <Link href={project.githubLink} className="text-mahogany-500 hover:text-mahogany-400">
            GitHub
          </Link>
        )}
      </div>
    </motion.div>
  );
}