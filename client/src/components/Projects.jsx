import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      description: "Developed an intelligent chatbot using natural language processing and machine learning algorithms. The system can understand context, provide accurate responses, and learn from user interactions.",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
      category: "AI/ML",
      image: "🤖",
      github: "https://github.com/rupesh-kumar-singh",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "Built a comprehensive fitness tracking application that monitors workouts, tracks nutrition, and provides personalized recommendations based on user goals and progress.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "Mobile App",
      image: "💪",
      github: "https://github.com/rupesh-kumar-singh",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Created a full-stack student management system for educational institutions. Features include student registration, grade management, attendance tracking, and report generation.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Bootstrap"],
      category: "Web App",
      image: "🎓",
      github: "https://github.com/rupesh-kumar-singh",
      live: "https://example.com"
    }
  ]

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Data Engineering', 'Web Development', 'Research']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getCategoryIcon = (category) => {
    const icons = {
      'AI/ML': "🤖",
      'Computer Vision': "👁️",
      'Data Engineering': "📊",
      'Web Development': "🌐",
      'Research': "🔬"
    }
    return icons[category] || "💻"
  }

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Computer Vision': 'from-blue-500 to-cyan-500',
      'Data Engineering': 'from-green-500 to-emerald-500',
      'Web Development': 'from-orange-500 to-red-500',
      'Research': 'from-indigo-500 to-purple-500'
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 scroll-mt-20">
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
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects and innovative solutions across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            <span className="text-primary-600">Featured</span> Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card p-8 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href={project.github}
                        className="p-2 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors duration-300"
                      >
                        📁
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        href={project.live}
                        className="p-2 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors duration-300"
                      >
                        🔗
                      </motion.a>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white mr-3 text-lg`}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-sm font-medium text-primary-600">{project.category}</span>
                  </div>

                  {/* Project Info */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Featured Badge */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full">
                    ⭐ Featured Project
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            All <span className="text-primary-600">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card p-6 group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="text-4xl mb-4 text-center">{project.image}</div>

                  {/* Category Badge */}
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white mr-2`}>
                      <getCategoryIcon category={project.category} size={14} />
                    </div>
                    <span className="text-xs font-medium text-primary-600">{project.category}</span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      className="flex-1 text-center py-2 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      📁 Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.live}
                      className="flex-1 text-center py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      🔗 Live
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and innovative ideas. 
              Let's create something amazing together!
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary inline-block"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
