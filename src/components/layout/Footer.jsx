import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Nifilkhan", name: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/nifil-khan-5624912b0/", name: 'LinkedIn' },
  ]

  return (
    <footer className="bg-white dark:bg-neutral-800 py-8 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">
              <span className="text-blue-500">NIfil</span> Khan
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Software Developer based in Thiruvananthapuram Kerala, India.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              &copy; {currentYear} Nifil Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer