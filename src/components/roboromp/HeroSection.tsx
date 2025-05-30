"use client";
import React from "react";
import Image from "next/image";
import { ROBO_ROMP } from "@/constants/Images";
import { FormDemo } from "@/demo/roboromp-demo/FormDemo";

const HeroSection = () => {
  return (
    <div className="mt-[30px] bg-custom-gradient relative p-20 rounded-3xl">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex items-center justify-center gap-72">
        <Image src={ROBO_ROMP} alt="robo romp image" width={600} height={600} className="lg:flex hidden w-[600px]"/>
        <FormDemo />
      </div>
    </div>
  );
};

export default HeroSection;
