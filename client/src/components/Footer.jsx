import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rupesh-kumar-singh-542040235',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:rupeshkumarsingh908@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">
                Rupesh Kumar Singh
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI/ML Engineer, Data Scientist, and LLM Engineer passionate about creating innovative 
                solutions and making a positive impact through technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-300 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 py-1"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-400" size={16} />
                  <a 
                    href="mailto:rupeshkumarsingh908@gmail.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    rupeshkumarsingh908@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLinkedin className="text-primary-400" size={16} />
                  <a 
                    href="https://www.linkedin.com/in/rupesh-kumar-singh-542040235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm text-center md:text-left"
              >
                © {currentYear} Rupesh Kumar Singh. All rights reserved. Made with{' '}
                <FaHeart className="inline text-red-500 mx-1" />
                and modern web technologies.
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Back to top"
              >
                <FaArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-2xl text-gray-700 opacity-20"
        >
          🤖
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 text-xl text-gray-700 opacity-20"
        >
          💻
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
