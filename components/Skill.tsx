import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  item: {
    name: string;
    img: string;
  };
};

const Skill = ({ item, directionLeft }: Props) => {
  return (
    <div className="flex cursor-pointer relative">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={item.img}
        alt={item.name}
        className="object-cover w-10 h-12 xl:w-24 xl:h-24 hover:grayscale transition-all duration-200"
      />

      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute opacity-0 hover:opacity-80 transition-all duration-300 hover:bg-[#323232] w-12 h-12 xl:w-24 xl:h-24"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xs xl:text-lg text-white opacity-100">
            {item.name}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
