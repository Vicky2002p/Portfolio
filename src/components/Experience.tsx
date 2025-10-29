'use client';

import { motion, easeInOut } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: 'Koch Technologies',
    role: 'Full-stack Developer',
    location: 'Remote',
    duration: 'May 2024 – May 2025',
    achievements: [
      'Engineered a web portal using React and TypeScript, enhancing data visualization and user engagement by 25%',
      'Optimized front-end design for responsive applications, improving accessibility across devices',
      'Collaborated with multi-disciplinary teams to deliver robust and scalable solutions',
    ],
  },
  {
    company: 'University of Windsor',
    role: 'System and Technology Assistant',
    location: 'Windsor, Canada',
    duration: 'Jan 2024 – Apr 2024',
    achievements: [
      'Automated emailing system to reduce drafting time by 40%, utilizing advanced Visual Basics',
      'Delivered using advanced Excel tools, increasing operational efficiency by 30%',
      'Prepared Dashboards using Power BI, improving team efficiency by 20%',
    ],
  },
  {
    company: 'Thinkwik Technology Private Limited',
    role: 'Junior Software Engineer',
    location: 'Ahmedabad, India',
    duration: 'May 2023 – Aug 2023',
    achievements: [
      'Designed a Django-based feedback portal, improving data navigation and processing efficiency by 20%',
      'Implemented secure MySQL queries to manage and process data reliably',
      'Applied Object-Oriented Programming principles to develop a game that demonstrates core OOP concepts',
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <section id="experience" className="py-24 bg-rich_black-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-mahogany-600 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep_purple-600 rounded-full blur-3xl opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-mahogany-600/10 border border-mahogany-600/30 text-mahogany-600 rounded-full text-sm font-semibold mb-6"
          >
            MY JOURNEY
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wheat-500 mb-4">
            Professional Experience
          </h2>
          <p className="text-wheat-700 text-lg max-w-2xl mx-auto">
            Diverse roles and responsibilities that have shaped my growth as a developer
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-mahogany-600 to-deep_purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
            >
              {/* Timeline line and dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mahogany-600 via-wheat-500 to-deep_purple-600 md:w-0.5"></div>

              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 top-4 w-6 h-6 bg-rich_black-600 border-4 border-mahogany-600 rounded-full z-10"
              />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                <motion.div
                  whileHover={{ translateY: -8, boxShadow: '0 20px 40px rgba(196, 73, 0, 0.2)' }}
                  className="group relative bg-gradient-to-br from-dark_slate-600 to-dark_slate-700 p-8 rounded-xl border border-wheat-500/10 hover:border-mahogany-600/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-mahogany-600/0 via-mahogany-600/0 to-mahogany-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Company and Duration */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <span className="inline-block px-3 py-1 bg-mahogany-600/20 border border-mahogany-600/50 text-mahogany-600 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                          {exp.company}
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-center gap-2 text-wheat-600 text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 13a3 3 0 01-.369-5.98 5 5 0 119.753 1.007A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                        </svg>
                        {exp.duration}
                      </motion.div>
                    </div>

                    {/* Role and Location */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="mb-6 pb-6 border-b border-wheat-500/10"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-wheat-500 mb-2 group-hover:text-mahogany-500 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-wheat-700">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        {exp.location}
                      </div>
                    </motion.div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                          className="flex gap-4 group/item"
                        >
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-mahogany-600 to-mahogany-700 flex items-center justify-center mt-1 group-hover/item:shadow-lg group-hover/item:shadow-mahogany-600/50 transition-shadow"
                          >
                            <svg className="w-4 h-4 text-wheat-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </motion.div>

                          {/* Text */}
                          <p className="text-wheat-600 leading-relaxed pt-1 group-hover/item:text-wheat-500 transition-colors duration-300">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-wheat-700 text-lg mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(196, 73, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-mahogany-600 to-mahogany-700 text-wheat-500 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}