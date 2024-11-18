"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CameraOutline, CameraFull, HouseFull, HouseOutline, StarOutline, StarFull } from "./icons";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
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
    </motion.ul>
  );
};
