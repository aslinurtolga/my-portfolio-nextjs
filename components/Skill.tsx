import {motion} from "framer-motion"
type Props = {
  item: {
    name: string;
    img: string;
  };
};

const Skill = ({ item }: Props) => {
  return (
    <div className="flex cursor-pointer relative">
      <motion.img
      initial={{opacity: 0, scale: 0.5}}
      whileInView={{ opacity: 1}}
      transition={{duration: 1.5}}
        src={item.img}
        alt={item.name}
        className="object-cover w-10 h-12 xl:w-24 xl:h-24 hover:grayscale transition-all duration-200"
      />

    <div>
        <div>
            <p>{item.name}</p>
        </div>
    </div>


    </div>
  );
};

export default Skill;
