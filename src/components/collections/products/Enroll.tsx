import CourseEnrollCardDemo from "@/demo/products-demo/CourseEnrollCardDemo";
import { ProductType } from "@/types/ProductTypes";
import React from "react";

const Enroll = ({enrolltitle, enrollclass, enrollbatch}:ProductType) => {
  return (
    <div className="flex justify-center lg:p-20 p-10 bg-custom-gradient relative rounded-3xl">
      <div className="absolute top-0 right-0 lg:w-40 w-24 lg:h-40 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 lg:w-40 w-24 lg:h-40 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white lg:text-4xl text-2xl font-extrabold">Enroll now</h1>
        <CourseEnrollCardDemo enrolltitle={enrolltitle} enrollbatch={enrollbatch} enrollclass={enrollclass}/>
      </div>
    </div>
  );
};

export default Enroll;
