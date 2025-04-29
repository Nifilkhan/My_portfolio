import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'
import ProjectDetailContent from '../components/projects/ProjectDetail'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id === parseInt(id))
      setProject(foundProject)
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <PageTransition>
        <div className="container-custom py-20 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-600 dark:text-neutral-400">Loading project...</p>
          </motion.div>
        </div>
      </PageTransition>
    )
  }

  if (!project) {
    return (
      <PageTransition>
        <div className="container-custom py-20 min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn-primary">
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="container-custom py-20">
        <div className="mb-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
        
        <ProjectDetailContent project={project} />
      </div>
    </PageTransition>
  )
}

export default ProjectDetail