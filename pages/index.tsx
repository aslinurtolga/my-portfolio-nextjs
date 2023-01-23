import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[#323232] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 font-Aslinur ">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="#about" className="snap-center">
        <About />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
