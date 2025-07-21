"use client";
import React from "react";

import Data from "../../data/roboticsData.json";
import CodeData from "../../data/programmingData.json";
import { CardDemo } from "@/demo/CardDemo";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Courses = () => {
  const allData = [...Data, ...CodeData];

  return (
    <div className="flex flex-col lg:px-52 gap-10 py-10 lg:py-20">
      <p className="lg:text-4xl text-2xl font-extrabold">Courses to help you</p>
      <p className="lg:text-xl font-bold px-16">All Courses</p>

      <Carousel className="w-full cursor-grab">
        <CarouselContent className="-ml-1 ">
          {allData.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
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
