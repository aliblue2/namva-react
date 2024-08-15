import { motion } from "framer-motion";

const Primarybtn = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.8,
      }}
      {...props}
      className="bg-white md:text-base text-sm px-4 py-2 w-full md:w-fit text-blackColor hover:bg-primaryColor hover:text-white transition-colors duration-300 rounded-lg flex items-center justify-center gap-2"
    >
      {children}
    </motion.button>
  );
};

export default Primarybtn;
