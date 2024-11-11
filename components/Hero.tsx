import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BgCircle from "./BgCircle";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Aslinur", "from Istanbul", "This is my portfolio"],
    loop: true,
    delaySpeed: 3000,
  });
  const [title] = useTypewriter({
    words: ["Frontend Developer", "ReactJS Developer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center space-y-8 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-900">
      <BgCircle />
      <Image
        src="https://media.licdn.com/dms/image/v2/D4D03AQFrubCF18joHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701159993067?e=1736985600&v=beta&t=3i0kTqqn8NltyW1iRctp9MQcvoLIHhh27FWFF_Z-Nnk"
        alt="image"
        width={150}
        height={150}
        loading="lazy"
        className="rounded-full border-4 border-indigo-700 shadow-2xl"
      />
      <div className="z-20 text-white">
        <h2 className="text-xl uppercase text-gray-200 dark:text-gray-300 pb-3 tracking-[8px] font-semibold">
          {title}
          <Cursor cursorColor="#ca3131" />
        </h2>
        <h1 className="text-4xl lg:text-6xl font-extrabold px-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-800">
          <span>{text}</span>
          <Cursor cursorColor="#ca3131" />
        </h1>

        <div className="pt-8 space-x-6">
          <Link href="#about">
            <button className="heroButton transition-colors duration-300 text-[#f0f0f0] hover:text-white bg-transparent hover:bg-indigo-700 dark:text-gray-100 dark:hover:bg-indigo-600 py-2 px-6 rounded-lg text-lg font-medium">
              About
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton transition-colors duration-300 text-[#f0f0f0] hover:text-white bg-transparent hover:bg-indigo-700 dark:text-gray-100 dark:hover:bg-indigo-600 py-2 px-6 rounded-lg text-lg font-medium">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton transition-colors duration-300 text-[#f0f0f0] hover:text-white bg-transparent hover:bg-indigo-700 dark:text-gray-100 dark:hover:bg-indigo-600 py-2 px-6 rounded-lg text-lg font-medium">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
