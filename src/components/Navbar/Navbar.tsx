import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { navLinks } from "../../data/navLinks";
import { Icon } from "@iconify-icon/react";

import Button from "../common/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      {/* For Desktop View */}
      <nav className="hidden lg:flex bg-black fixed  justify-between items-center left-20 right-20 top-8 text-white max-w[1020px] z-[8] p-4 rounded-lg">
        <Logo />
        <NavLinks navData={navLinks} />
        <Button
          label="Contact us"
          className="bg-white text-black px-4 rounded-lg font-bold py-3 text-lg"
          initial={{ y: 0 }}
          whileHover={{
            translateY: [0, 10, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </nav>
      {/* for mobile and tablet view  */}
      <nav className="flex lg:hidden bg-black fixed  justify-between items-center left-20 right-20 top-8 text-white max-w[1020px] z-[8] p-4 rounded-2xl shadow-4xl">
        <div className="relative flex w-full h-full justify-between  items-center">
          <Logo />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-white flex justify-center items-center gap-10 w-[48px] h-[48px] text-black rounded-xl">
            <Icon icon="heroicons-solid:menu-alt-3" width={25} />
          </button>
          <AnimatePresence >
            {
            showMenu && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x:0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{duration: 0.5, delay: 0.1}}
                  className="absolute top-20 right-0 bg-lightDark w-[290px] h-[290px] border-[1px] border-black rounded-[10px] p-4 ">
            <NavLinks navData={navLinks} />
            <Button
              label="Contact us"
              className="bg-white text-black px-4 rounded-lg font-bold py-3 my-6 text-lg"
            />
          </motion.div>
        )
      }
      </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
