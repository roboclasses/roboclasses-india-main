"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import CyanButton from "@/demo/button-demo/CyanButton";
import RData from "../../data/roboticsData.json";
import PData from "../../data/programmingData.json";
import { CardDemo } from "@/demo/CardDemo";
import React, { useState } from "react";

const Features = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");
  const [isShowAll, setIsShowAll] = useState(false);

  const ageGroups = ["All ages", "7-10 years", "10-13 years", "13+ years"];

  const handleAgeFilter = (age: string) => {
    setSelectedAge(age);
    setIsFilter(age !== "All ages");
  };

  const combinedData = [...RData, ...PData];

  // Filter logic for cards based on age
  const filteredData = isFilter
    ? combinedData.filter((item) => item.age === selectedAge)
    : combinedData;

  // Handle expanding or collapsing all cards
  const handleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:px-52 gap-10 lg:py-20 py-10">
      <div className="flex flex-col items-center">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient lg:mb-6 mb-2">
          Featured Courses
        </p>
        <p className="lg:text-base text-xs" style={{ letterSpacing: "0.05em" }}>
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

      <div className="flex flex-row justify-between lg:px-12 px-3 items-center">
        <p className="font-extrabold lg:text-2xl">All Courses</p>
        <CyanButton
          name={isShowAll ? "Show Less" : "Show All"}
          type="button"
          onClick={handleShowAll}
        />
      </div>

      {isShowAll ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
          {filteredData.map((item, index) => (
            <div key={index}>
              <CardDemo {...item} href={`/courses/${item.slug}`} />
            </div>
          ))}
        </div>
      ) : (
        <Carousel className="w-full cursor-grab">
          <CarouselContent className="lg:-ml-1">
            {filteredData.map((item, index) => (
              <CarouselItem
                key={index}
                className="lg:pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
              >
                <div>
                  <CardDemo
                    {...item}
                    href={`/collections/products/${item.slug}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default Features;
