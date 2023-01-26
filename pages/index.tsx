import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { SlowBuffer } from "buffer";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[#FCE2DB] text-gray-700 dark:bg-gray-900 dark:text-white h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0 font-Aslinur scrollbar scrollbar-track-red-500 scrollbar-thumb-green-500 ">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-10 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 hover:text-[#ca3131] transition-all duration-150 dark:text-gray-700 dark:hover:text-gray-500" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
