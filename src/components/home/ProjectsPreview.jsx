import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../../data/projects";

const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Only show the first 3 projects in the preview
  const previewProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
          centered={false}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="
    inline-block
    px-6 py-3
    rounded-md
    font-semibold
    transition-colors duration-300
    bg-black text-white
    dark:bg-white dark:text-black
  "
          >
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View All Projects <FiArrowRight className="ml-2" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
