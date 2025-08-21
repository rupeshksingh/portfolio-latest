import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: "AGC Asia Pacific Pte Ltd",
      position: "Data Science Intern",
      duration: "May 2025 - Present",
      location: "Singapore",
      type: "Internship",
      description: "Manufacturing Automation and Predictive Maintenance using Machine Learning Algorithms",
      achievements: [
        "Implementing ML algorithms for predictive maintenance",
        "Automating manufacturing processes",
        "Data analysis and optimization"
      ],
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "Manufacturing"]
    },
    {
      company: "Pentimenti.Al",
      position: "AI Intern",
      duration: "May 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Tender Automation using Modern AI frameworks",
      achievements: [
        "Developing AI solutions for tender automation",
        "Implementing modern AI frameworks",
        "Process optimization and automation"
      ],
      technologies: ["AI", "Automation", "Tender Management", "Modern Frameworks"]
    },
    {
      company: "Pentimenti.Al",
      position: "Research Intern",
      duration: "October 2024 - April 2025",
      location: "Remote",
      type: "Research",
      description: "Research and development in AI technologies",
      achievements: [
        "Conducted research in AI technologies",
        "Published research findings",
        "Collaborated with research team"
      ],
      technologies: ["Research", "AI", "Development", "Collaboration"]
    },
    {
      company: "Stealth AI Startup",
      position: "Machine Learning Engineer",
      duration: "August 2024 - January 2025",
      location: "Remote",
      type: "Full-time",
      description: "Advanced ML engineering and model development",
      achievements: [
        "Developed advanced ML models",
        "Implemented production-ready solutions",
        "Optimized model performance"
      ],
      technologies: ["Machine Learning", "Python", "Model Development", "Production"]
    },
    {
      company: "SPARK4AI, IIT Kharagpur",
      position: "Head of Artificial Intelligence",
      duration: "November 2023 - November 2024",
      location: "Kharagpur, West Bengal, India",
      type: "Leadership",
      description: "Leading AI initiatives and research at IIT Kharagpur",
      achievements: [
        "Led AI research initiatives",
        "Managed team of researchers",
        "Organized AI workshops and events",
        "Mentored junior researchers"
      ],
      technologies: ["Leadership", "AI Research", "Team Management", "Mentoring"]
    },
    {
      company: "Models Lab (formerly Stable Diffusion API)",
      position: "LLM Engineer",
      duration: "June 2024 - September 2024",
      location: "Remote",
      type: "Engineering",
      description: "Creating Uncensored Chat Models using various techniques like SFT, PEFT, LORA, ORPO",
      achievements: [
        "Developed uncensored chat models",
        "Implemented SFT, PEFT, LORA, ORPO techniques",
        "Created AI agents for chatbot interactions",
        "Built custom model loading systems"
      ],
      technologies: ["LLM", "SFT", "PEFT", "LORA", "ORPO", "AI Agents"]
    },
    {
      company: "Play Theory Labs",
      position: "Data Engineer",
      duration: "June 2024 - August 2024",
      location: "Remote",
      type: "Engineering",
      description: "Working as a Data engineer in gathering data from multiple sources and building efficient pipeline for extraction to storage",
      achievements: [
        "Built efficient data pipelines",
        "Integrated multiple data sources",
        "Optimized data extraction and storage",
        "Implemented data quality checks"
      ],
      technologies: ["Data Engineering", "ETL", "Data Pipelines", "Data Integration"]
    },
    {
      company: "ResoluteAI Software",
      position: "GenAI Engineer",
      duration: "June 2024 - August 2024",
      location: "Remote",
      type: "Engineering",
      description: "Working on Chat Application for Support purposes and building RAG pipelines for custom data sources",
      achievements: [
        "Developed chat applications for support",
        "Built RAG pipelines for custom data",
        "Fine-tuned LLMs for specific tasks",
        "Implemented support automation"
      ],
      technologies: ["GenAI", "RAG", "Chat Applications", "LLM Fine-tuning"]
    },
    {
      company: "upUgo Fitness & Sports",
      position: "AI/ML Intern",
      duration: "May 2024 - July 2024",
      location: "Bengaluru, Karnataka, India",
      type: "Internship",
      description: "Building effective AI algorithms to detect correct posture during exercise",
      achievements: [
        "Developed posture detection algorithms",
        "Integrated AI with fitness applications",
        "Tested AI applications for different exercises",
        "Improved exercise form accuracy"
      ],
      technologies: ["Computer Vision", "AI", "Fitness", "Posture Detection"]
    },
    {
      company: "Escafate",
      position: "Web Developer",
      duration: "June 2023 - December 2023",
      location: "Rajasthan, India",
      type: "Development",
      description: "Web developer on an educational website for differently abled students",
      achievements: [
        "Built and maintained WordPress website",
        "Implemented masterstudy theme",
        "Integrated relevant plugins",
        "Enhanced accessibility features"
      ],
      technologies: ["WordPress", "Web Development", "Accessibility", "Education"]
    },
    {
      company: "Nyaysahay Foundation",
      position: "Head of Information Technology Department",
      duration: "July 2023 - October 2023",
      location: "Rajasthan, India",
      type: "Leadership",
      description: "Worked for better reach of the NGO, which focuses on law reach for marginal communities",
      achievements: [
        "Led IT department initiatives",
        "Maintained website and emails",
        "Improved NGO's digital presence",
        "Enhanced community outreach"
      ],
      technologies: ["IT Management", "Website Maintenance", "NGO", "Community Outreach"]
    },
    {
      company: "Nyaysahay Foundation",
      position: "Information Technology Intern",
      duration: "May 2023 - July 2023",
      location: "Jodhpur, Rajasthan, India",
      type: "Internship",
      description: "Actively involved in developing the organization's website, managing business emails, and performing various IT tasks",
      achievements: [
        "Developed organization website",
        "Managed business emails",
        "Performed various IT tasks",
        "Improved digital infrastructure"
      ],
      technologies: ["Web Development", "IT Support", "Email Management", "Infrastructure"]
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      'Internship': 'bg-blue-100 text-blue-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Engineering': 'bg-green-100 text-green-800',
      'Leadership': 'bg-orange-100 text-orange-800',
      'Development': 'bg-indigo-100 text-indigo-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="experience" className="section-padding bg-white scroll-mt-20">
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
            Work <span className="text-primary-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey through my professional experience and achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card p-6"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Growth Journey
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From internships to leadership roles, I've consistently demonstrated the ability to adapt, learn, 
              and deliver results across various domains. My experience spans from web development to cutting-edge 
              AI research, showcasing versatility and continuous growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
