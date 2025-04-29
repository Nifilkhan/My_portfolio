import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle } from 'react-icons/fi'

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const formRef = useRef(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 10
            }}
            className="text-green-500 mb-6"
          >
            <FiCheckCircle size={60} />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-500 font-medium hover:text-blue-600 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
              Name
            </label>
            <motion.div
              whileTap={{ scale: errors.name ? 0.99 : 1 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border ${
                  errors.name 
                    ? 'border-red-400 dark:border-red-500' 
                    : 'border-neutral-200 dark:border-neutral-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your name"
              />
            </motion.div>
            {errors.name && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500"
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
              Email
            </label>
            <motion.div
              whileTap={{ scale: errors.email ? 0.99 : 1 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border ${
                  errors.email 
                    ? 'border-red-400 dark:border-red-500' 
                    : 'border-neutral-200 dark:border-neutral-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="your.email@example.com"
              />
            </motion.div>
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What is this regarding?"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">
              Message
            </label>
            <motion.div
              whileTap={{ scale: errors.message ? 0.99 : 1 }}
            >
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border ${
                  errors.message 
                    ? 'border-red-400 dark:border-red-500' 
                    : 'border-neutral-200 dark:border-neutral-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your message..."
              />
            </motion.div>
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500"
              >
                {errors.message}
              </motion.p>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message <FiSend className="ml-2" />
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  )
}

export default ContactForm