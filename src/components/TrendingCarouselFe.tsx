"use client"; 

import BlueButton from "@/demo/button-demo/BlueButton";
import { TRENDING_BLOGS } from "@/constants/links";
import { CarouselSpacing } from "@/demo/CarouselSpacing";

import React from "react";
import { usePathname, useRouter } from "next/navigation";


const TrendingCarouselFe = () => {
  const router = useRouter();

  return (
    <div className={`flex flex-col gap-10 items-center p-20 dark:bg-slate-900`}>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-4xl font-extrabold">What’s trending today</p>
        <p className="text-sm font-bold text-gray-500" style={{ letterSpacing: "0.09em" }}>See age appropriate courses</p>
        <BlueButton
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
