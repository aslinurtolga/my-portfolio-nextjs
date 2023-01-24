import { motion } from "framer-motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center justify-evenly mx-auto px-10"
    >
      <h2 className="absolute top-[100px] uppercase text-gray-300 text-2xl tracking-[15px]">
        Contact
      </h2>
      <div className="flex flex-col items-center ">
        <h3>Contact Me</h3>
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <PhoneIcon className="h-6 w-6 text-[#c3c]" />
            <p className="text-xl">+056434363</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-[#c3c]" />
            <p className="text-xl">deneme@deneme.com</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MapIcon className="h-6 w-6 text-[#c3c]" />
            <p className="text-xl">USA/ Los Angeles </p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 mx-auto">
          <div className="flex flex-col md:flex-row space-y-2 space-x-2 md:space-y-0">
            <input className="contact-input" placeholder="Name" type="text" />
            <input className="contact-input" placeholder="Email" type="email" />
          </div>
          <input className="contact-input" placeholder="Subject" type="text" />
          <textarea
            className="contact-input resize-none"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-[#ca3131] py-2 px-4 md:py-5 md:px-10 rounded-md text-white font-bold hover:opacity-70 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
