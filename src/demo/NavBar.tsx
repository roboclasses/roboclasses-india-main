import React from "react";
import Image from "next/image";
import Link from "next/link";

import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { DialogDemo } from "./DialogDemo";
import { LOGO } from "@/constants/Images";
import MobileNavSheet from "./MobileNav";
// import { PopoverDemo } from "./PopoverDemo";
// import { ModeToggle } from "@/themes/ModeToggle";



const NavBar = () => {

  return (
    <nav className="flex lg:justify-center justify-between items-center lg:gap-40 px-3 py-6 shadow-md rounded-b-3xl">
       <div className="flex items-center gap-6">
        {/* Hamburger menu (Hidden on desktop) */}
        <div className="flex lg:hidden">
          <MobileNavSheet />
        </div>

       {/* Logo */}
      <Link href={"/"} aria-label="Roboclasses Home">
        <Image
          src={LOGO}
          alt="robo-class-logo"
          width={132.43}
          height={39.51}
          className="w-32 lg:w-36 shadow-md dark:shadow-black object-contain"
          role="button"
          priority
        />
      </Link>
      </div>

      {/* Nav menu Section (Hidden on mobile and tablet) */}
      <div className="lg:flex hidden">
        <NavigationMenuDemo />
      </div>

      <div className="flex items-center gap-6">
        <DialogDemo /> 

        {/* Theme */}
        {/* <ModeToggle /> */}
      </div>

    </nav>
  );
};

export default NavBar;
