import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'JavaScript', 'SQL', 'CSS', 'HTML'],
  'Frameworks/Technologies': ['React', 'Django', 'Flask'],
  Tools: ['Git', 'Power BI', 'MS-Office Suite', 'Jira', 'Bitbucket', 'Microsoft Visual Studio', 'Qualtrics', 'GitHub'],
  'Operating Systems': ['Windows', 'Linux'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-rich_black-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-wheat-500 text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark_purple-500 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-wheat-500 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-mahogany-500 text-wheat-900 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}