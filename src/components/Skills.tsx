'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  color: string;
}

const skillsData = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Tailwind CSS', level: 93 },
    ],
    description: 'Building beautiful, interactive user interfaces',
    color: 'from-mahogany-600 to-mahogany-700',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 88 },
      { name: 'SQL', level: 91 },
      { name: 'RESTful APIs', level: 89 },
      { name: 'Database Design', level: 87 },
    ],
    description: 'Creating robust server-side solutions',
    color: 'from-deep_purple-600 to-mahogany-600',
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 94 },
      { name: 'Power BI', level: 85 },
      { name: 'Jira', level: 86 },
      { name: 'VS Code', level: 93 },
      { name: 'Linux', level: 80 },
      { name: 'Docker', level: 82 },
    ],
    description: 'Leveraging modern development tools',
    color: 'from-wheat-600 to-mahogany-500',
  },
  {
    category: 'Soft Skills',
    icon: '🧠',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Leadership', level: 88 },
      { name: 'Collaboration', level: 92 },
      { name: 'Adaptability', level: 91 },
      { name: 'Creativity', level: 89 },
    ],
    description: 'Essential qualities for great teamwork',
    color: 'from-mahogany-700 to-deep_purple-600',
  },
];

const SkillCard = ({ skill, index, color }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ translateY: -8 }}
      className="group relative bg-gradient-to-br from-dark_slate-600 to-dark_slate-700 p-6 rounded-xl border border-wheat-500/10 hover:border-mahogany-600/40 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-5 pointer-events-none`}
      />

      {/* Animated shimmer on hover */}
      <motion.div
        animate={{
          x: isHovered ? '100%' : '-100%',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold text-wheat-500 group-hover:text-mahogany-400 transition-colors duration-300">
            {skill.name}
          </h4>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-mahogany-600/50 transition-shadow`}
          >
            <svg className="w-5 h-5 text-wheat-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </motion.div>
        </div>

        {/* Proficiency Info */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-wheat-700 font-semibold uppercase tracking-wider">Proficiency</span>
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-sm font-bold text-mahogany-600"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Proficiency Bar */}
          <div className="relative h-2 bg-wheat-500/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{
                duration: 1,
                delay: index * 0.08 + 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Badge */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          className="inline-flex items-center gap-1 px-3 py-1 bg-mahogany-600/20 border border-mahogany-600/50 text-mahogany-600 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          <span className="text-green-400">✓</span>
          Experienced
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const category = skillsData[selectedCategory];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-rich_black-600 relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-mahogany-600/10 border border-mahogany-600/30 text-mahogany-600 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider"
          >
            EXPERTISE & PROFICIENCY
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wheat-500 mb-4">
            Technical Skills
          </h2>
          <p className="text-wheat-700 text-lg max-w-2xl mx-auto">
            A diverse toolkit of technologies that I&apos;ve mastered through hands-on experience
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-mahogany-600 to-deep_purple-600 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {skillsData.map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden group ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${cat.color} text-wheat-500 shadow-2xl`
                  : 'bg-wheat-500/5 text-wheat-600 border-2 border-wheat-500/20 hover:border-mahogany-600/40'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                {cat.category}
              </span>
              {selectedCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 pb-8 border-b border-wheat-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className="text-6xl"
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-wheat-500">
                    {category.category}
                  </h3>
                  <p className="text-wheat-700 text-sm mt-2">
                    {category.skills.length} core competencies
                  </p>
                </div>
              </div>
              <p className="text-wheat-700 text-lg italic max-w-2xl">
                {category.description}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  color={category.color}
                />
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-12"
            >
              {[
                { label: 'Skills', value: category.skills.length, icon: '📊' },
                { label: 'Experience', value: '5+', icon: '📈' },
                { label: 'Avg Proficiency', value: Math.round(category.skills.reduce((a, b) => a + b.level, 0) / category.skills.length) + '%', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -8 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group relative bg-gradient-to-br from-dark_slate-600 to-dark_slate-700 p-6 rounded-xl border border-wheat-500/10 hover:border-mahogany-600/30 transition-all duration-300 text-center overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-black bg-gradient-to-r from-mahogany-600 to-mahogany-700 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-wheat-600 text-sm font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Detailed Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ translateY: -8 }}
              className="group relative bg-gradient-to-br from-dark_slate-600 to-dark_slate-700 p-8 rounded-xl border border-wheat-500/10 hover:border-mahogany-600/30 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 pointer-events-none`}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-wheat-500 mb-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  Mastery in {category.category}
                </h3>
                <p className="text-wheat-700 leading-relaxed text-lg">
                  I have developed strong proficiency in {category.category.toLowerCase()}, working with{' '}
                  <span className="font-semibold text-mahogany-600">
                    {category.skills.slice(0, 2).map(s => s.name).join(' and ')}
                  </span>
                  {' '}and more. Through hands-on experience in production environments, I&apos;ve developed a deep understanding of best practices, performance optimization, and scalable architecture. I&apos;m constantly expanding my knowledge to stay current with industry standards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}