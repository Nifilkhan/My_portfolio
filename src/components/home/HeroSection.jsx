import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const HeroSection = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div ref={constraintsRef} className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.1, 1],
                opacity: [0, 0.7, 0.8, 0.7],
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 leading-tight">
                Hi, I'm <span className="text-blue-500">Nifil Khan</span>
                <br />
                <span className="relative">
                  Software Developer
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 md:max-w-lg"
            >
              Welcome to my portfolio! I am Nifil Khan, a self-taught full-stack
              web developer who is passionate about technology and innovation.
              Specializing in the MEAN stack, I create high-impact web
              applications that are scalable, driven by a passion for excellence
              and curiosity.....
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Projects <FiArrowRight className="ml-2" />
                </motion.div>
              </Link>
              <a
                href="public/nifil_fullstack.pdf"
                download
                className="btn-secondary"
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Download CV <FiDownload className="ml-2" />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              <div className="rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl h-72 w-72 sm:h-80 sm:w-80">
                <img
                  src="public/portfolio_img.jpeg"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <motion.div
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white rounded-lg py-3 px-6 shadow-lg"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="font-semibold">1 Year Experience</span>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
