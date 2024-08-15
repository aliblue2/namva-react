import { motion } from "framer-motion";
const SecondaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.8,
      }}
      {...props}
      className="w-full md:text-base text-sm flex items-center justify-center gap-2 px-4 py-2 md:w-fit text-white hover:text-primaryColor transition-colors duration-300"
    >
      {children}
    </motion.button>
  );
};

export default SecondaryBtn;
