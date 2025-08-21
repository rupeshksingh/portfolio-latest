import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const achievements = [
    { icon: "🏆", title: "JEE Advanced AIR 4400", description: "Secured All India Rank 4400 in JEE Advanced" },
    { icon: "🎓", title: "IIT Kharagpur", description: "Mechanical Engineering at prestigious IIT" },
    { icon: "🤖", title: "AI/ML Expert", description: "Specialized in Machine Learning & AI" },
    { icon: "💼", title: "Multiple Internships", description: "Experience across various tech companies" }
  ]

  const education = [
    {
      degree: "Bachelor of Technology - BTech",
      field: "Mechanical Engineering",
      institution: "Indian Institute of Technology, Kharagpur",
      duration: "2021-2026",
      description: "Pursuing Mechanical Engineering with focus on AI/ML applications"
    },
    {
      degree: "High School",
      field: "Science",
      institution: "Kendriya Vidyalaya",
      duration: "2009-2021",
      description: "Completed 12th standard with excellent academic performance"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
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
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Who I Am
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a bold, ambitious, and collaborative individual with a deep interest in robotics and machine intelligence. 
              My passion lies in creating positive impact through AI innovation and cutting-edge technology solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently pursuing Mechanical Engineering at IIT Kharagpur, I've developed expertise in AI/ML, 
              working on various projects including LLM development, computer vision, and predictive analytics.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 text-xl">📍</span>
                <span className="text-gray-700">Chandigarh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 text-xl">✉️</span>
                <a 
                  href="mailto:rupeshkumarsingh908@gmail.com"
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  rupeshkumarsingh908@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 text-xl">🔗</span>
                <a 
                  href="https://www.linkedin.com/in/rupesh-kumar-singh-542040235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  linkedin.com/in/rupesh-kumar-singh-542040235
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-primary-600 mr-2 text-xl">🏅</span>
                Key Achievements
              </h4>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">{achievement.title}</h5>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-primary-600 mr-2 text-xl">🎓</span>
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                      <span className="text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{edu.field}</p>
                    <p className="text-gray-600 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Mission
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              I am looking to create a positive impact in the lives of others through my various experiences 
              in school, work, and life. My goal is to leverage AI and machine learning to solve real-world 
              problems and contribute to technological advancement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
