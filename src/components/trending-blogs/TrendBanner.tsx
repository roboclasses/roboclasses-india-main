import React from "react";

const TrendBanner = () => {
  return (
    <div className="flex justify-center text-white lg:py-10 py-5 relative bg-custom-gradient mt-[30px] rounded-3xl">
      <div className="lg:flex hidden absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
      <div className="lg:flex hidden absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
        <p className="lg:text-4xl text-2xl font-bold">What’s trending</p>
    </div>
  );
};

export default TrendBanner;
