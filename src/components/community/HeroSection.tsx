import { BACKGROUND_IMG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/community-demo/EnrollCardDemo";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[30px]">
      <div
        className="bg-cover bg-center h-[500px] lg:h-[630px] flex p-20 rounded-t-3xl"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <EnrollCardDemo />
      </div>
    </div>
  );
};

export default HeroSection;
