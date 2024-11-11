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
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden">
      <BgCircle />
      <Image
         src="https://i.pinimg.com/564x/7d/40/a5/7d40a575d02413a6081b92b0a7c50fce.jpg"
        alt="image"
        width={130}
        height={130}
        loading="lazy"
        className="rounded-full"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-700 dark:text-gray-300 pb-3 tracking-[12px]">
          {title}
          <Cursor cursorColor="#ca3131" />
        </h2>
        <h1 className="text-4xl text-indigo-900 dark:text-red-500 lg:text-6xl font-semibold px-8">
          <span>{text}</span>
          <Cursor cursorColor="#ca3131" />
        </h1>

        <div className="pt-6 ">
          <Link href="#about">
            <button className="heroButton text-[#626974] hover:text-black dark:text-gray-100 dark:hover:text-gray-500">
              About
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-[#626974]  hover:text-black dark:text-gray-100 dark:hover:text-gray-500">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-[#626974] hover:text-black dark:text-gray-100 dark:hover:text-gray-500">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
