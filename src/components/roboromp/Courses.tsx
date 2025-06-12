"use client";
import React from "react";

import Data from "../../data/roboticsData.json";
import CodeData from "../../data/programmingData.json";
import { CardDemo } from "@/demo/CardDemo";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Courses = () => {
  const allData = [...Data, ...CodeData];

  return (
    <div className="flex flex-col px-52 gap-6 py-20">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold">Courses to help you</p>
      </div>
      <p className="text-xl font-bold px-16">All Courses</p>

      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1 ">
          {allData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Courses;
