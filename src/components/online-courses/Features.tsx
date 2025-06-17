"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import OnlineCoursesData from "@/data/OnlineCoursesData.json";
import { CardDemo } from "@/demo/CardDemo";

import "swiper/css";
import React, { useState } from "react";

const Features = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");

  const ageGroups = ["All ages", "7-10 years", "10-13 years", "13+ years"];

  const handleAgeFilter = (age: string) => {
    setSelectedAge(age);
    setIsFilter(age !== "All ages");
  };

  //filter logic for cards
  const filteredData = isFilter
    ? OnlineCoursesData.filter((item) => item.age === selectedAge)
    : OnlineCoursesData;

  return (
    <div className="flex flex-col lg:px-52 gap-10 lg:py-20 py-10">
      <div className="flex flex-col items-center">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient lg:mb-6 mb-2">
          Online Courses
        </p>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.09em" }}>
          See age appropriate courses
        </p>

        <div className="p-4 flex justity-center items-center">
          <div className="bg-custom-gradient p-2 rounded-full font-medium flex gap-2 md:gap-6 shadow-md">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeFilter(age)}
                className={`text-xs font-bold md:text-sm p-2 md:px-4 rounded-full cursor-pointer 
                transition-colors duration-300 ease-in-out ${
                  selectedAge === age ? "bg-white text-[#16A34A]" : "text-white"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>
      </div>

      <React.Fragment>
        <p className="font-extrabold lg:text-2xl">Online Courses</p>
        <Carousel className="w-full cursor-grab">
          <CarouselContent className="lg:-ml-1">
            {filteredData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
              >
                <div>
                  <CardDemo {...item} href={`/courses/${item.slug}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </React.Fragment>
    </div>
  );
};

export default Features;
