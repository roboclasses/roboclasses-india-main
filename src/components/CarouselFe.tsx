"use client";

import { YOUTUBE } from "@/constants/links";
import CyanButton from "@/demo/button-demo/CyanButton";
import { YoutubeSlides } from "@/demo/YoutubeSlides";

import React from "react";

const CarouselFe = () => {
  const handleRoute = () => {
    window.open(YOUTUBE, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col lg:gap-10 gap-8 lg:p-20 p-10 bg-custom-gradient dark:bg-neutral-800/50 items-center relative text-white rounded-3xl">
      <div className="lg:flex hidden absolute top-0 right-0 w-36 h-36 bg-gray-200/20 rounded-bl-full "></div>

      <div className="flex flex-col lg:gap-6 gap-2 items-center">
        <p className="lg:text-5xl text-2xl font-extrabold">Kids creativity</p>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
          Creative projects done by some of our kids
        </p>
      </div>
      
      <YoutubeSlides />
      <CyanButton name="SEE MORE" type="button" onClick={handleRoute} />

      <div className="lg:flex hidden absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default CarouselFe;
