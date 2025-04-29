import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className={`heading-underline inline-block mb-3 ${light ? 'text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600 dark:text-neutral-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading