import { BACKGROUND_IMG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/enquiry-demo/EnrollCardDemo";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[30px]">
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex p-20 rounded-3xl"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <EnrollCardDemo />
      </div>
    </div>
  );
};

export default HeroSection;
