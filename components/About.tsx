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
      <h2 className="absolute top-[100px] uppercase text-gray-300 text-2xl tracking-[15px]">
        About
      </h2>
      <motion.img
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/profile_images/1498758848596922375/W_jwX-XM_400x400.jpg"
        alt=""
        className="w-48 h-48 rounded-full md:rounded-lg md:h-[392px] md:w-72 -mb-20 md:mb-0"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-3xl font-semibold">Aslinur</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          perspiciatis magnam? Ea voluptates illum perferendis veniam
          laudantium, rerum, velit, minima dignissimos quam assumenda
          necessitatibus voluptatibus beatae magni recusandae at voluptatem.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
