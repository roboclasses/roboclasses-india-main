import { BreadcrumbDemo } from "@/demo/BreadcrumbDemo";
import React from "react";

const BlogsBanner = ({title}:alertTypes) => {
  return (
    <div className="flex flex-col items-center justify-center text-white py-20 gap-10 relative bg-custom-gradient mt-[30px] rounded-3xl">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div className="flex flex-col text-center gap-2">
        <p className="text-4xl font-extrabold">
          Nurturing Young Minds: 10 Steps to Guide Your Child for STEM
        </p>
        <p className="text-4xl font-extrabold"> Education</p>
      </div>
      <div>
        <BreadcrumbDemo title={title}/>
      </div>
    </div>
  );
};

export default BlogsBanner;
