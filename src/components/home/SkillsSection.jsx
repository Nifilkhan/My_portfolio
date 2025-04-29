import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'
import { FiCode, FiLayers, FiDatabase, FiTool } from 'react-icons/fi'

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      category: 'Frontend',
      icon: <FiCode size={24} />,
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS','Angular']
    },
    {
      category: 'Backend',
      icon: <FiDatabase size={24} />,
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools',
      icon: <FiTool size={24} />,
      items: ['Git', 'GitHub', 'VS Code', 'npm']
    },
    {
      category: 'Other',
      icon: <FiLayers size={24} />,
      items: ['Responsive Design', 'Web Accessibility', 'SEO Basics','AWS S3','AWS EC2','Render']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
          centered={true}
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-lg mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                      className="w-2 h-2 rounded-full bg-blue-500 mr-2"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection