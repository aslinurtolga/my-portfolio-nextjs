import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center justify-evenly mx-auto px-10"
    >
      <h2 className="absolute top-[100px] uppercase text-gray-300 text-2xl tracking-[15px]">
        Projects
      </h2>
      <div className="relative w-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="w-screen snap-center flex flex-col items-center justify-center"
          >
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
