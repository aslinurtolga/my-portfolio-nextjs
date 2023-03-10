import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center justify-evenly mx-auto px-10"
    >
      <h2 className="absolute top-[100px] uppercase text-gray-600 text-2xl tracking-[15px]">
        Skills
      </h2>

      <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
        {skillsData.map((item, index) =>
          index % 2 == 0 ? (
            <Skill key={index} item={item} />
          ) : (
            <Skill key={index} item={item} directionLeft={true} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
