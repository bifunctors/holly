"use client";

import { motion } from "framer-motion";
import { Navigation } from "./navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 0 0)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 350,
      damping: 40
    }
  }
};

export const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="bg-zinc-800 fixed bottom-0 ">
      <motion.div variants={sidebar} className="fixed bottom-20 top-12 left-0 right-0 bg-zinc-950 flex justify-center items-center">
        <Navigation />
      </motion.div>
    </motion.nav>
  );
}
