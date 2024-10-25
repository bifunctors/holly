"use client";

import * as React from "react";
import { usePathname } from 'next/navigation'
import { CameraOutline, HouseOutline } from "./icons";

export const Menu = (
) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex bg-gradient-to-t from-blue-950 h-40">
        <HouseOutline />
        <CameraOutline />
      </nav>
    </>
  );
};
