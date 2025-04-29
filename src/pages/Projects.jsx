import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'
import SectionHeading from '../components/shared/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <PageTransition>
      <div className="container-custom py-20">
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcase of my technical skills and experience"
        />

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Projects