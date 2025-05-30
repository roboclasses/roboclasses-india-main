
import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { ModeToggle } from "@/themes/ModeToggle";

import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { DialogDemo } from "./DialogDemo";
// import { PopoverDemo } from "./PopoverDemo";
import { LOGO } from "@/constants/Images";


const NavBar = () => {

  return (
    <nav className="flex flex-row justify-center gap-40 px-3 py-6 shadow-md rounded-b-3xl">

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

      {/* Links Section (Hidden on mobile and tablet) */}
      <div className="lg:flex hidden">
        <NavigationMenuDemo />
      </div>

      {/* Input and Button Section */}
      {/* <div className="flex flex-row gap-4 items-center "> */}
        {/* <div className="w-full lg:w-auto">
         <PopoverDemo />
        </div> */}
        <DialogDemo />
      {/* </div> */}

      {/* Mode Toggle */}
      {/* <div>
        <ModeToggle />
      </div> */}
    </nav>
  );
};

export default NavBar;
