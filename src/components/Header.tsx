import React from "react";
import NavBar from "@/demo/NavBar";


const Header = () => {
  return (
    <>
      <div className="fixed w-screen bg-white dark:bg-black z-50 rounded-b-3xl">
        <NavBar />
      </div>
      <div className="h-[50px]" />
    </>
  );
};

export default Header;
