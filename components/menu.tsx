"use client";

import * as React from "react";
import { usePathname } from 'next/navigation'
import { CameraOutline, HouseOutline, HouseFull, StarOutline, CameraFull, StarFull } from "./icons";
import Link from "next/link";

export const Menu = (
) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex bg-gradient-to-t from-blue-950 h-16 fixed bottom-0 left-0 right-0 justify-center">
        <div className="flex justify-evenly max-w-3xl w-full">
          <Link href="/" className="place-content-center">
            <div className="flex place-content-center">
              {pathname === "/" ? <HouseFull size={22} /> : <HouseOutline size={22} />}
            </div>
            <p className={pathname === "/" ? "font-bold" : ""}>Home</p>
          </Link>

          <Link href="/beats" className="place-content-center">
            <div className="flex place-content-center">
              {pathname === "/beats" ? <StarFull size={22} /> : <StarOutline size={22} />}
            </div>
            <p className={pathname === "/beats" ? "font-bold" : ""}>Beats</p>
          </Link>

          <Link href="/scan" className="place-content-center">
            <div className="flex place-content-center">
              {pathname === "/scan" ? <CameraFull size={22} /> : <CameraOutline size={22} />}
            </div>
            <p className={pathname === "/scan" ? "font-bold" : ""}>Scan</p>
          </Link>
        </ div>
      </nav>
    </>
  );
};
