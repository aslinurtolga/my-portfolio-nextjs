import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center justify-evenly mx-auto px-10"
    >
      <h2 className="absolute top-[100px] uppercase text-gray-600 text-2xl tracking-[15px]">
        About
      </h2>
      <motion.img
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/profile_images/1658410759687159808/v0-HuKj5_400x400.jpg"
        alt=""
        className="w-48 h-48 rounded-full md:rounded-tl-md md:h-[300px] md:w-72 -mb-20 md:mb-0"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-3xl font-semibold text-indigo-900 dark:text-[#ca3131] ">
          Hi, I am Aslinur Tolga
        </h3>
        <p>
          I graduated from Full Stack Developer Bootcamp in Virginia, USA. As a
          Frontend developer specialized in Reactjs and Nextjs, I utilize
          various style frameworks including Sass, Bootstrap, Tailwind, MUI and
          Styled Components. As a backend developer, I work with Node.js. My
          passion for staying up-to-date with the latest frontend features
          drives me to constantly research and experiment with new tools and
          techniques. I have a keen eye for aesthetics and enjoy adding creative
          touches to my projects. I am a quick learner and implementer, and I am
          committed to advancing my skills and knowledge in the field.
          Furthermore, I am actively pursuing development opportunities in React
          Native. I love learning new technologies and using them in my
          projects.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
