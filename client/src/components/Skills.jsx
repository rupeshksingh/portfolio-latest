import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Time Series Analysis", level: 90 },
        { name: "Anomaly Detection", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP & LLMs", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/Node.js", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
        { name: "R", level: 70 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Data Analysis", level: 90 },
        { name: "Statistical Modeling", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Predictive Analytics", level: 85 },
        { name: "Deep Web Research", level: 90 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🔧",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas/NumPy", level: 95 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 85 }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: "🗄️",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "AWS", level: 70 },
        { name: "MongoDB Atlas", level: 80 },
        { name: "Redis", level: 65 }
      ]
    }
  ]

  const certifications = [
    "Advanced Learning Algorithms",
    "Supervised Machine Learning: Regression and Classification",
    "Intro to Programming",
    "Python"
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Certifications & <span className="text-primary-600">Training</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-primary-600">
                  🎓
                </div>
                <h4 className="font-semibold text-gray-900 text-center">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3 text-primary-600">
                  🧠
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Research & Development</h4>
                <p className="text-gray-600 text-sm">Experience in cutting-edge AI research and development</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3 text-accent-600">
                  🚀
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Project Management</h4>
                <p className="text-gray-600 text-sm">Leading teams and managing complex technical projects</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3 text-primary-500">
                  💡
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Web Development</h4>
                <p className="text-gray-600 text-sm">Full-stack development with modern technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
