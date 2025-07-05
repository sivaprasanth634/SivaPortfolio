import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my educational journey and background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Current Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">Undergraduate Studies</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.education.degree}</p>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.education.institution}</p>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">CGPA: {personalInfo.education.cgpa}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Previous Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">High School</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.education.school}</p>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Percentage: {personalInfo.education.schoolPercentage}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                I am a passionate student currently pursuing B.Tech in Artificial Intelligence and Data Science at 
                Dr. N.G.P Institute of Technology. My journey in technology began with a strong foundation in 
                programming and has evolved into a deep interest in AI and machine learning.
              </p>
              <p className="leading-relaxed">
                With hands-on experience in developing innovative projects like sign language detection systems 
                and learning management platforms, I strive to bridge the gap between theoretical knowledge and 
                practical applications. My goal is to contribute to the advancement of AI technology while 
                solving real-world problems.
              </p>
              <p className="leading-relaxed">
                I believe in continuous learning and staying updated with the latest technological trends. 
                Through various certifications and workshops, I am building a strong foundation for my career 
                in artificial intelligence and data science.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};