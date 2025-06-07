"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import { CardDemo } from "@/demo/CardDemo";
import CyanButton from "@/demo/button-demo/CyanButton";

import Data from "../../data/roboticsData.json";
import PData from "../../data/programmingData.json";
// import SData from "../../data/stemData.json";
import OData from "../../data/OnlineCoursesData.json";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


const CardsSection = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");
  const router = useRouter();

  // const ageGroups = [
  //   "All ages",
  //   "4-6 years",
  //   "6-9 years",
  //   "9-13 years",
  //   "13+ years",
  // ];

    const ageGroups = [
    "All ages",
    "7-10 years",
    "10-13 years",
    "13+ years",
  ];


  const handleAgeFilter = (age: string) => {
    setSelectedAge(age);
    setIsFilter(age !== "All ages");
  };

  //filter logic for robotics cards
  const filteredAgeR = isFilter
    ? Data.filter((item) => item.age === selectedAge)
    : Data;

  //filter logic for programming cards
  const filteredAgeP = isFilter
    ? PData.filter((item) => item.age === selectedAge)
    : PData;

  //filter logic for STEM cards
  // const filteredAgeS = isFilter
  //   ? SData.filter((item) => item.age === selectedAge)
  //   : SData;

  //filter logic for Online course cards
  const filteredAgeO = isFilter
    ? OData.filter((item) => item.age === selectedAge)
    : OData;

  return (
    <div className="flex flex-col lg:px-52 gap-10 lg:py-20 py-10">
      <div className="flex flex-col items-center">
        <p className="lg:text-5xl text-2xl font-extrabold bg-clip-text text-transparent bg-custom-gradient lg:mb-6 mb-2">Featured Courses</p>
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

      <React.Fragment>
      <div className="flex flex-row justify-between items-center lg:px-8 px-3">
        <p className="font-extrabold lg:text-2xl">Robotics Courses</p>
        <CyanButton
          name="Show All"
          type="button"
          onClick={() => router.push('/collections/programming-courses')}
        />
      </div>

      <Carousel className="w-full cursor-grab">
        <CarouselContent className="lg:-ml-1">
          {filteredAgeR.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <div>
                <CardDemo {...item} href={`/collections/${item.id}`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </React.Fragment>

      <React.Fragment>
      <div className="flex flex-row justify-between items-center lg:px-8 px-3">
        <p className="font-extrabold lg:text-2xl">Programming Courses</p>
        <CyanButton
          name="Show All"
          type="button"
          onClick={() => router.push('/collections/programming-courses')}
        />
      </div>

      <Carousel className="w-full cursor-grab">
        <CarouselContent className="lg:-ml-1">
          {filteredAgeP.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <div>
                <CardDemo {...item} href={`/collections/${item.id}`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </React.Fragment>

      {/* <React.Fragment>
      <div className="flex flex-row justify-between items-center lg:px-8 px-3">
        <p className="font-extrabold lg:text-2xl">STEM Classes</p>
        <CyanButton
          name="Show All"
          type="button"
          onClick={() => router.push('/collections/stem-classes')}
        />
      </div>

      <Carousel className="w-full cursor-grab">
        <CarouselContent className="lg:-ml-1">
          {filteredAgeS.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <div>
                <CardDemo {...item} href={`/collections/${item.id}`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </React.Fragment> */}

      <React.Fragment>
      <div className="flex flex-row justify-between items-center lg:px-8 px-3">
        <p className="font-extrabold lg:text-2xl">Online Courses</p>
        <CyanButton
          name="Show All"
          type="button"
          onClick={() => router.push('/collections/stem-classes')}
        />
      </div>

      <Carousel className="w-full cursor-grab">
        <CarouselContent className="lg:-ml-1">
          {filteredAgeO.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <div>
                <CardDemo {...item} href={`/collections/${item.id}`} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </React.Fragment>

    </div>
  );
};

export default CardsSection;
