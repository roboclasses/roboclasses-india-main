import { BreadcrumbDemo } from "@/demo/BreadcrumbDemo";
import React from "react";

const BlogsBanner = ({ title }: alertTypes) => {
  return (
    <div className="flex flex-col items-center justify-center text-white lg:p-20 p-10 lg:gap-10 gap-5 relative bg-custom-gradient mt-[30px] rounded-3xl">
      <div className="lg:flex hidden absolute top-0 right-0 w-36 h-36 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="lg:flex hidden absolute bottom-0 left-0 w-36 h-36 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex flex-col text-center lg:gap-2">
        <p className="lg:text-4xl text-xl font-extrabold">
          Nurturing Young Minds: 10 Steps to Guide Your Child for STEM
        </p>
        <p className="lg:text-4xl text-xl font-extrabold"> Education</p>
      </div>
      <BreadcrumbDemo title={title} />
    </div>
  );
};

export default BlogsBanner;
