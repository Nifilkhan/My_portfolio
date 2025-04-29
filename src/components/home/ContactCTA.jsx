import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const ContactCTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="mr-2" /> Get in Touch
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA