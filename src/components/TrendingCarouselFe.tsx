"use client"; 

import { CarouselSpacing } from "@/demo/CarouselSpacing";

import React from "react";
import { useRouter } from "next/navigation";
import CyanButton from "@/demo/button-demo/CyanButton";


const TrendingCarouselFe = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col lg:gap-10 gap-8 items-center lg:p-20 p-10 dark:bg-slate-900'>
      <div className="flex flex-col lg:gap-6 gap-2 items-center">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient lg:p-2">What’s trending today</p>
        <p className="lg:text-base text-xs lg:mb-0 mb-2" style={{ letterSpacing: "0.05em" }}>See age appropriate courses</p>
        <CyanButton
          name="See All"
          type="button"
          onClick={() => router.push('/blogs/trending-blogs')}
        />
      </div>
      <CarouselSpacing />
    </div>
  );
};

export default TrendingCarouselFe;
