"use client";

import { GithubIcon, Logo } from "@/components/icons";
import Link from "next/link";
import { MenuBurger } from "./icons/menu-burger";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

export const TopBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="flex p-2 gap-4 w-full sm:hidden justify-between sticky top-0 left-0 right-0 bg-zinc-950 h-12 items-center">
        <div onClick={() => setMobileMenuOpen((prev) => { return !prev; })}>
          <MenuBurger isOpen={mobileMenuOpen} />
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/jam-computing/holly" >
            <GithubIcon size={32} />
          </Link>
          <Logo size={32} />
        </div>
        <MobileMenu isOpen={mobileMenuOpen} />
      </div>
    </>
  );
}
