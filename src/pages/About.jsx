import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";
import SectionHeading from "../components/shared/SectionHeading";
import { FiCalendar, FiBookOpen, FiBriefcase, FiAward } from "react-icons/fi";

const About = () => {
  const timeline = [
    {
      icon: <FiBriefcase />,
      year: "2024 - Present",
      title: "Software Developer (Intern)",
      company: "Stackup Learning",
      description:
        "Gained hands-on experience in both frontend and backend development during my internship. Worked on building responsive web applications using Angular, managing databases with MongoDB, and developing APIs with Node.js and Express.js. Contributed to UI/UX improvements and implemented new features, refining problem-solving skills and working on real-world projects."
    },    
    // {
    //   icon: <FiBookOpen />,
    //   year: "2022 - 2023",
    //   title: "Web Development Bootcamp",
    //   company: "Code Academy",
    //   description:
    //     "Completed an intensive bootcamp focusing on full-stack development with JavaScript, React, Node.js, and databases.",
    // },
    // {
    //   icon: <FiAward />,
    //   year: "2022",
    //   title: "Computer Science Degree",
    //   company: "Tech University",
    //   description:
    //     "Graduated with a Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
    // },
  ];

  return (
    <PageTransition>
      <div className="container-custom py-20">
        <SectionHeading
          title="About Me"
          subtitle="My journey in software development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
              <p>
                I began my career in software development as a self-taught
                developer, diving into web technologies and mastering the MEAN
                stack (MongoDB, Express.js, Angular, Node.js) on my own. My
                journey started with learning the fundamentals of web
                development and building projects to gain practical experience.
              </p>
              <p>
                I completed an internship in web development, where I gained
                hands-on experience in both front-end and back-end development.
                During this time, I worked on building responsive web
                applications using Angular, managing databases with MongoDB, and
                developing APIs with Node.js and Express.js. This internship
                allowed me to collaborate with a team, solve real-world
                problems, and refine my coding skills.
              </p>
              <p>
                As I continued to grow, I developed several projects, including
                a dynamic weather application built using Angular and
                TypeScript, and created my personal portfolio to showcase my
                development skills. With a focus on problem-solving and a
                passion for learning, I have built a strong foundation in both
                front-end and back-end development.
              </p>
              <p>
                Currently, I am focused on further improving my development
                skills, exploring new technologies, and seeking opportunities to
                contribute to impactful projects. I am excited for the
                opportunities ahead and the chance to continue growing in my
                software development career.
              </p>
              <p>
                When I’m not coding, you can find me exploring open-source
                projects, learning new technologies, or enjoying outdoor
                activities. I believe in continuous learning and am always eager
                to take on new challenges to expand my skill set and grow as a
                developer.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-neutral-500 dark:text-neutral-400 mb-2">
                      {item.company}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 heading-underline">
                Personal Info
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    Location
                  </div>
                  <div className="font-medium">Thiruvananthapuram,Kerala</div>
                </div>

                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:john.doe@example.com"
                    className="font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    nifilkhanss5151@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    Experience
                  </div>
                  <div className="font-medium">1 Year</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development & Full-Stack Technologies",
                  "Continuous Learning",
                  "Designing User-Centric Solutions",
                  "Open Source",
                  "New Technologies",
                  "Problem Solving",
                ].map((interest, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
