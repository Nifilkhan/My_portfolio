import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCalendar, FiTag } from 'react-icons/fi'

const ProjectDetail = ({ project }) => {
  const { title, image, description, technologies, features, liveLink, githubLink, date } = project

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-8 text-neutral-600 dark:text-neutral-400"
        >
          <div className="flex items-center">
            <FiCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center">
            <FiTag className="mr-2" />
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg mb-10"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"
        />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Key Features</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                className="flex items-start"
              >
                <div className="mt-1 mr-3 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md sticky top-24">
            <h3 className="text-xl font-bold mb-6">Project Links</h3>
            
            <div className="space-y-4">
              {liveLink && (
                <a 
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  <span className="font-medium">Live Demo</span>
                  <FiExternalLink />
                </a>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  <span className="font-medium">View Code</span>
                  <FiGithub />
                </a>
              )}
            </div>
            
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-bold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail