import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import Logo from "../../images/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { paths } from "../../App";
import SecondaryBtn from "./SecondaryBtn";
import Primarybtn from "./Primarybtn";

const DrawerMenu = ({ closeMenu }) => {
  const pathName = useLocation().pathname;

  return (
    <motion.div
      onClick={closeMenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: .5,
      }}
      className="fixed bg-accentColor bg-opacity-25 w-full h-full top-0 left-0"
    >
      <motion.div
        initial={{ right: -200 }}
        animate={{ right: 0 }}
        exit={{ right: -200 }}
        transition={{
          type: "spring",
          bounce: 0.6,
        }}
        className="fixed top-0 right-0 p-5 w-[70%] bg-blackColor h-full rounded-l-2xl flex flex-col items-center justify-around gap-5"
      >
        <CgClose
          onClick={closeMenu}
          size={24}
          className=" absolute top-5 left-5"
        />
        <img src={Logo} alt="logoImage" className="w-4/12" />
        <ul className="list-none flex flex-col items-center justify-around gap-5">
          {paths.map((path) => {
            const activePath = path.path === pathName;
            return (
              <li
                key={path.name}
                className="flex flex-col items-center justify-center gap-2"
              >
                <NavLink
                  to={path.path}
                  className={`flex h items-center justify-start gap-2 px-2 ${
                    activePath && "text-blue-400"
                  }`}
                >
                  {path.icon}
                  {path.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <SecondaryBtn>خرید اشتراک</SecondaryBtn>
          <Primarybtn>ورود / ثبت نام</Primarybtn>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DrawerMenu;
