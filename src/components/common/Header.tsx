import { Link, NavLink, useLocation } from "react-router-dom";
import { paths } from "../../App";
import Logo from "../../images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { FiBarChart2, FiUser } from "react-icons/fi";
import { useState } from "react";
import Primarybtn from "./Primarybtn";
import SecondaryBtn from "./SecondaryBtn";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const pathName = useLocation().pathname;
  const [menuDrawer, setMenuDrawer] = useState(false);
  const menuDrawerHandler = () => {
    setMenuDrawer(!menuDrawer);
  };
  return (
    <div className="w-full px-4 bg-gradient-to-b from-grayColor to-transparent h-16 overflow-hidden sticky top-0 z-20">
      <header className="flex items-center h-full mx-auto w-full max-w-[1200px] justify-between gap-5">
        <div className="flex items-center justify-start gap-2 md:gap-5">
          <button className="w-7 -rotate-90 md:hidden">
            <FiBarChart2 size={32} onClick={menuDrawerHandler} />
          </button>
          <img src={Logo} alt="logoImage" className="w-[90px]" />
          <ul className="list-none md:flex hidden items-center justify-start gap-3">
            {paths.map((path) => {
              const activePath = path.path === pathName;
              return (
                <li
                  key={path.name}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <NavLink
                    to={path.path}
                    className={`flex h items-center justify-start gap-2 font-medium px-2 ${
                      activePath && "text-blue-400"
                    }`}
                  >
                    {path.icon}
                    {path.name}
                  </NavLink>
                  {activePath && (
                    <motion.span
                      layoutId="active"
                      className="w-full bg-primaryColor h-[5px] rounded-t-xl"
                    ></motion.span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:flex hidden items-center justify-center gap-2">
          <SecondaryBtn>خرید اشتراک</SecondaryBtn>
          <Link to={"auth"}>
            <Primarybtn>ورود / ثبت نام</Primarybtn>
          </Link>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="md:hidden bg-white rounded-full text-blackColor p-1 hover:bg-primaryColor hover:text-white transition-colors duration-300"
        >
          <FiUser size={24} />
        </motion.button>
      </header>
      <AnimatePresence>
        {menuDrawer && <DrawerMenu closeMenu={menuDrawerHandler} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
