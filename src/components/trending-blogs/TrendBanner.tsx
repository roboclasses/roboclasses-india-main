import React from "react";

const TrendBanner = () => {
  return (
    <div className="flex justify-center text-white py-10 relative bg-custom-gradient mt-[30px] rounded-3xl">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/20 rounded-tr-full"></div>
      <div>
        <p className="text-4xl font-bold">What’s trending</p>
      </div>
    </div>
  );
};

export default TrendBanner;
