import { motion } from 'framer-motion'
import PageTransition from '../components/shared/PageTransition'
import SectionHeading from '../components/shared/SectionHeading'
import ContactForm from '../components/contact/ContactForm'
import { FiMail, FiMap, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      label: "Email",
      value: "nifilkhanss5151@gmail.com",
      link: "nifilkhanss5151@gmail.com"
    },
    {
      icon: <FiPhone size={20} />,
      label: "Phone",
      value: "+91 9048735017",
      link: "tel:+91 9048735017"
    },
    {
      icon: <FiMap size={20} />,
      label: "Location",
      value: "Thiruvananthapuram, Kerala, India",
      link: null
    }
  ]
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Nifilkhan", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/nifil-khan-5624912b0/", label: "LinkedIn" },
  ]

  return (
    <PageTransition>
      <div className="container-custom py-20">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss how we can work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Feel free to reach out if you have any questions or if you're interested in working together.
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{info.label}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  className="p-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact