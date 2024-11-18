"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CameraFull, CameraOutline, HouseFull, HouseOutline, StarFull, StarOutline } from "./icons";
import { usePathname } from "next/navigation";
import { CogsFull, CogsOutline } from "./icons/menu-icons";
import { useRouter } from "next/router";

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

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();


  return (
    <motion.nav
      initial={false}
      animate={menuOpen ? "open" : "closed"}
      className="bg-zinc-800 fixed bottom-0 ">
      <motion.div variants={sidebar} className="fixed bottom-20 top-12 left-0 right-0 bg-zinc-950 flex justify-center items-center">
        <motion.ul className="grid grid-cols-2 gap-8 items-center justify center" >
          <Link href="/" className="place-content-center text-center">
            <div className="flex place-content-center">
              {pathname === "/" ? <HouseFull size={32} /> : <HouseOutline size={32} />}
            </div>
            <p className={pathname === "/" ? "font-bold" : ""}>Home</p>
          </Link>

          <Link href="/beats" className="place-content-center text-center">
            <div className="flex place-content-center">
              {pathname === "/beats" ? <StarFull size={32} /> : <StarOutline size={32} />}
            </div>
            <p className={pathname === "/beats" ? "font-bold" : ""}>Beats</p>
          </Link>

          <Link href="/scan" className="place-content-center text-center">
            <div className="flex place-content-center">
              {pathname === "/scan" ? <CameraFull size={32} /> : <CameraOutline size={32} />}
            </div>
            <p className={pathname === "/scan" ? "font-bold" : ""}>Scan</p>
          </Link>

          <Link href="/configuration" className="place-content-center text-center">
            <div className="flex place-content-center">
              {pathname === "/configuration" ? <CogsFull size={32} /> : <CogsOutline size={32} />}
            </div>
            <p className={pathname === "/scan" ? "font-bold" : ""}>Scan</p>
          </Link>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
