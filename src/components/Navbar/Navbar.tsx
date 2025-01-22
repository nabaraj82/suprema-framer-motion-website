import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { navLinks } from "../../data/navLinks";
import Button from "../common/Button";
const Navbar = () => {
  return (
    <nav className="bg-black fixed flex justify-between items-center left-20 right-20 top-8 text-white max-w[1020px] z-[8] p-4 rounded-lg">
      <Logo />
      <NavLinks navData={navLinks} />
      <Button />
    </nav>
  );
};

export default Navbar;
