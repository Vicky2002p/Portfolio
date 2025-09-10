import { motion } from 'framer-motion';

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
  return (
    <section id="experience" className="py-20 bg-dark_slate_gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-wheat-500 text-center mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark_purple-500 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-wheat-500">{exp.role}</h3>
              <p className="text-wheat-700">{exp.company} | {exp.location}</p>
              <p className="text-wheat-600 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc pl-5 text-wheat-700">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}