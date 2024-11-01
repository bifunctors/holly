"use client";

import { motion } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
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
      <motion.div variants={sidebar} className="fixed bottom-0 top-12 left-0 right-0 bg-zinc-950">
      </motion.div>
    </motion.nav>
  );
}
