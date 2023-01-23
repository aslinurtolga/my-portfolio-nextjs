import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/aslinurtolga"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aslinurtolga/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: +500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
