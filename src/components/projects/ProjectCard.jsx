import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  const { id, title, image, tags, description, liveLink, githubLink } = project
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="card h-full flex flex-col"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {liveLink && (
              <motion.a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white text-neutral-800 rounded-full"
              >
                <FiExternalLink size={18} />
              </motion.a>
            )}
            {githubLink && (
              <motion.a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white text-neutral-800 rounded-full"
              >
                <FiGithub size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link 
          to={`/projects/${id}`}
          className="mt-auto text-blue-500 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <motion.span 
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            View Details
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard