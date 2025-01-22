import { useState } from "react";
import { motion } from 'framer-motion';

interface data {
  id: string;
  title: string;
}
interface NavLinksProps {
  navData: data[];
}

const NavLinks: React.FC<NavLinksProps> = ({ navData }) => {
  const [isActive, setIsActive] = useState<string>("Home");
  return (
    <div>
      <ul className="text-[#92969F]  flex items-center gap-x-16 font-medium text-lg">
        {navData.map((link) => (
          <li
            key={link.id}
            className={`${
              isActive === link.title
                ? "text-white bg-[#131315] p-3 rounded-md cursor-pointer"
                : "p-3 cursor-pointer"
            }`}
            onClick={() => setIsActive(link.title)}
          >
            {isActive === link.title ? (
              link.title
            ) : (
              <motion.div
                initial={{ y: 0 }} 
                whileHover={{
                  y: [0, 10, 0], 
                  color: "#fff"
                }}
                transition={{
                  duration: 0.5, 
                  ease: "easeInOut", 
                }}
              >
                {link.title}
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
