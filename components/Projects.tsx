import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { projectsData } from "../data/projectsData";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-full items-center justify-evenly mx-auto"
    >
      <h2 className="absolute top-[100px] uppercase text-gray-600 text-2xl tracking-[15px]">
        Projects
      </h2>
      <div className="relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-red-500 scrollbar-thumb-gray-500">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="w-screen snap-center flex flex-col items-center justify-center h-screen flex-shrink-0 p-16"
          >
            <a href={item.url} target="_blank">
              <img
                src={item.img}
                alt={item.name}
                className="md:max-w-md 2xl:max-2xl"
              />
            </a>
            <div className="mt-6 mb-6 max-w-6xl ">
              <h3 className="text-xl md:text-2xl font-semibold text-center">
                <span>{item.language}</span> Study {index + 1} of{" "}
                {projectsData.length} : {item.name}
              </h3>
              <p className="text-small md:text-lg text-center ">
                {item.description}
              </p>
            </div>
            <div>
              <a
                href={item.github}
                target="_blank"
                className="hover:bg-[#F2DEBA]/60 pr-4 py-2 rounded-md transition-all duration-200"
              >
                <SocialIcon
                  url={item.github}
                  fgColor="gray"
                  bgColor="transparent"
                />
                <span>Github</span>
              </a>
              <a
                href={item.url}
                target="_blank"
                className="hover:bg-[#F2DEBA]/60 pr-4 ml-4 py-2 rounded-md transition-all duration-200"
              >
                <SocialIcon
                  url={item.url}
                  fgColor="gray"
                  bgColor="transparent"
                />
                <span>Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[25%] bg-[#916BBF]/30 dark:bg-[#cf0d0a]/40 right-0 h-[500px] skew-y-[-15deg] " />
    </motion.div>
  );
};

export default Projects;
