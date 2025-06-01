"use client"; 

import { TRENDING_BLOGS } from "@/constants/links";
import { CarouselSpacing } from "@/demo/CarouselSpacing";

import React from "react";
import { useRouter } from "next/navigation";
import CyanButton from "@/demo/button-demo/CyanButton";


const TrendingCarouselFe = () => {
  const router = useRouter();

  return (
    <div className={`flex flex-col gap-10 items-center p-20 dark:bg-slate-900`}>
      <div className="flex flex-col gap-6 items-center">
        <p className="lg:text-5xl text-xl font-extrabold bg-clip-text text-transparent bg-custom-gradient p-2">What’s trending today</p>
        <p className="lg:text-base text-sm" style={{ letterSpacing: "0.05em" }}>See age appropriate courses</p>
        <CyanButton
          name="See All"
          type="button"
          onClick={() => router.push(TRENDING_BLOGS)}
        />
      </div>
      <CarouselSpacing />
    </div>
  );
};

export default TrendingCarouselFe;
