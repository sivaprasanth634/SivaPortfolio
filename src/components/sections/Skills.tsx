import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Wrench,
  FileCode,
  Database,
  Palette,
  Terminal,
  GitBranch,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  Brain
} from 'lucide-react';
import { skills } from '../../data/portfolio';

const skillIcons = {
  'Python': Brain,
  'Java': Cpu,
  'C': Terminal,
  'HTML': FileCode,
  'CSS': Palette,
  'Power BI': BarChart3,
  'Microsoft Excel': FileSpreadsheet,
  'VS Code': Code,
  'GitHub': GitBranch,
  'JavaScript': Globe,
  'React': Globe,
  'Node.js': Database,
  'MongoDB': Database,
  'SQL': Database
};

const categoryIcons = {
  programming: Code,
  web: Globe,
  tools: Wrench
};

const categoryColors = {
  programming: 'from-blue-500 to-blue-600',
  web: 'from-green-500 to-green-600',
  tools: 'from-purple-500 to-purple-600'
};

export const Skills: React.FC = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My technical expertise across programming languages, web technologies, and development tools
          </motion.p>
        </motion.div>

        {/* Skill Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const colorClass = categoryColors[category as keyof typeof categoryColors];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${colorClass} rounded-xl shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                    {category === 'programming' ? 'Programming' : category === 'web' ? 'Web Technologies' : 'Development Tools'}
                  </h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-4">
                  {categorySkills.map((skill) => {
                    const SkillIcon = skillIcons[skill.name as keyof typeof skillIcons] || Code;

                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer group"
                      >
                        <div className={`p-3 bg-gradient-to-r ${colorClass} rounded-lg mb-3 group-hover:shadow-md`}>
                          <SkillIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {skills.slice(0, 6).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
